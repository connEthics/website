Vos API sont documentées. Ce que vos clients et vos agents IA cherchent à accomplir avec elles ne l'est pas. Chaque endpoint a sa description OpenAPI, mais l'enchaînement qui transforme ces endpoints en résultat (réserver un voyage, clôturer une commande, renouveler une session) vit ailleurs : dans un wiki, une collection Postman, un script de test, ou dans la tête de deux ou trois personnes.

Cet écart a toujours coûté cher en onboarding, en tests et en support. Avec les agents IA, il devient un risque : un agent qui doit deviner l'ordre des appels ne le devine jamais deux fois de la même façon. Sur deux exemples exécutables, nous montrons ici comment un même workflow Arazzo 1.1 devient à la fois un outil gouverné pour un agent et un test de bout en bout dans votre CI, avec les limites que nous avons mesurées.

## 1. Le problème : des endpoints sans intention

OpenAPI vous dit ce que vous pouvez appeler, pas pourquoi ni dans quel ordre. « Réserver un voyage », c'est chercher un vol, chiffrer l'offre, vérifier les sièges, réserver, payer puis confirmer, avec de quoi annuler si la chaîne casse en route. Rien de cela n'est écrit dans la description de l'API : chaque consommateur, humain ou machine, reconstitue l'intention à partir du catalogue d'opérations.

Pour un développeur, cela coûte du temps ; pour un agent, de la fiabilité. Quand chaque endpoint devient un outil, le modèle doit choisir, ordonner, propager les identifiants et interpréter les erreurs, à chaque exécution. Les travaux publiés convergent :

- Anthropic, dans ses recommandations sur les outils d'agents, met en garde contre les outils qui se contentent d'envelopper des endpoints existants, et conseille un outil de plus haut niveau par tâche.
- L'étude RAG-MCP mesure une précision de sélection d'outil de 13,62 % quand tout le catalogue est exposé, contre 43,13 % une fois le catalogue filtré.
- Sur τ-bench, même les meilleurs agents réussissent moins d'un quart des tâches de vente au détail huit fois sur huit (pass^8 inférieur à 25 %).

La leçon n'est pas de renoncer aux agents. Elle tient en une phrase : **laissez l'agent choisir l'intention, laissez un workflow revu garantir la séquence.** C'est précisément ce que décrit Arazzo.

**Arazzo** est le standard de l'OpenAPI Initiative pour décrire des workflows : des séquences d'appels d'API avec leurs entrées, la circulation des données, les critères de succès, les retries et les chemins d'échec. Un workflow est un simple fichier YAML, versionné à côté de votre OpenAPI et relu en pull request comme du code. Un **runner** est l'outil qui l'exécute.

## 2. Ce qu'apporte la version 1.1

Arazzo 1.1.0 est paru le 17 mai 2026. C'est une version mineure et rétrocompatible : un document 1.0.x reste un document 1.0.x valide, et les outils choisissent le schéma JSON d'après le champ `arazzo`. Vous migrez quand vous avez besoin d'une nouveauté, pas avant.

| Nouveauté | Ce qu'elle vous apporte | Où la voir plus bas |
|---|---|---|
| Sources AsyncAPI, `action: send` et `receive` | Une étape peut publier ou attendre un événement, pas seulement appeler du HTTP | order-to-cash |
| `correlationId` et `timeout` | Attendre *votre* message, et échouer proprement s'il n'arrive pas | order-to-cash |
| `dependsOn` au niveau de l'étape | Éventail puis jonction : facture et expédition, puis clôture | order-to-cash |
| Selector Object et Expression Type | Une extraction versionnée en JSONPath (RFC 9535), XPath ou JSON Pointer | sorties d'order-to-cash |
| Réutilisation de workflows depuis les actions, avec `parameters` | « Renouveler la session, puis rejouer » écrit une fois, réutilisé partout | session-renewal |
| `in: querystring` | Toute la query string en une seule valeur, comme en OpenAPI 3.2 | session-renewal |
| `$self` | Une identité stable et une URI de base pour le document | tous les exemples |

Le texte 1.1 précise aussi la grammaire des expressions, l'ordre de résolution des `$sourceDescriptions` et la façon de juger un critère vrai ou faux : moins de surprises le jour où vous changez d'outil.

## 3. Premier cas : un workflow, un outil MCP

Le **Model Context Protocol (MCP)** est le protocole par lequel un agent IA découvre et appelle des outils. Le pattern que nous recommandons est simple : chaque workflow Arazzo devient un outil MCP. Le `workflowId` donne le nom de l'outil, les `inputs` du workflow (en JSON Schema) donnent son `inputSchema`, et seules les `outputs` déclarées remontent vers l'agent.

Notre exemple met en scène l'assistant voyage d'une entreprise, à qui l'on demande : « Trouve-moi un vol Paris-Lisbonne le 18 décembre, à moins de 400 €, et réserve-le. » Plutôt que de composer lui-même six à huit appels, l'agent dispose de deux outils :

- `quote_trip`, en lecture seule : recherche, prix, disponibilité des sièges. Ni réservation, ni paiement.
- `book_trip`, avec un effet financier : les mêmes vérifications, puis réservation provisoire, paiement et confirmation, avec des compensations (`voidPayment`, `releaseBooking`) si la fin de chaîne échoue.

![Le workflow book_trip dans le nouveau graphe Arazzo : retries sur 503, garde-fous qui arrêtent l'exécution avant tout paiement, chemins de compensation](/images/insights/arazzo/arazzo-1-1-book-trip-graph.webp "559x1369")

Les garde-fous sont écrits dans le workflow, pas dans un prompt. Voici deux étapes de `book_trip`, telles qu'elles figurent dans l'exemple :

```yaml
- stepId: priceOffer
  description: Garde-fou budget + verrou de prix (le prix ne doit pas dépasser celui confirmé).
  operationId: $sourceDescriptions.travel.priceOffer
  parameters:
    - { name: offerId, in: path, value: $steps.searchFlights.outputs.offerId }
    - { name: passengers, in: query, value: $inputs.passengerCount }
  successCriteria:
    - condition: $statusCode == 200
    - condition: $response.body#/total/amount <= $inputs.maxTotalAmount
    - condition: $response.body#/total/amount <= $inputs.confirmedTotalPrice
  onFailure:
    - name: priceAboveBudget
      type: end
  outputs:
    totalPrice: $response.body#/total
    totalAmount: $response.body#/total/amount
    quoteExpiresAt: $response.body#/expiresAt
- stepId: checkSeatAvailability
  description: Verrou de vol — le vol trouvé doit être celui que l'utilisateur a confirmé.
  operationId: $sourceDescriptions.travel.getSeatAvailability
  parameters:
    - { name: flightId, in: path, value: $steps.searchFlights.outputs.flightId }
    - { name: cabin, in: query, value: $inputs.cabin }
  successCriteria:
    - condition: $statusCode == 200
    - condition: $response.body#/available >= $inputs.passengerCount
    - condition: $steps.searchFlights.outputs.flightNumber == $inputs.confirmedFlightNumber
  onFailure:
    - name: offerChanged
      type: end
```

Si le prix dépasse le budget, ou s'il a bougé depuis l'accord de l'utilisateur, l'exécution s'arrête avant `createBooking` : rien n'est réservé, rien n'est débité. Les retries sur `503` (`retryWhenBusy`, deux fois, toutes les 2 secondes) tournent dans le moteur, sans aller-retour avec le modèle, donc sans tokens supplémentaires ni paramètres modifiés entre deux tentatives.

### Ce que l'agent voit, et ce qu'il ne verra jamais

Arazzo décrit la séquence ; l'exposer à un agent est une décision de publication, que nous rendons explicite dans un fichier relu en PR, `mcp-tools.json`. Ce format, que nous proposons, sépare l'objet `tool`, servi tel quel dans `tools/list`, d'un `binding` réservé au serveur et jamais transmis au client. Extrait pour `book_trip` :

```json
{
  "tool": {
    "name": "book_trip",
    "annotations": {
      "readOnlyHint": false,
      "destructiveHint": true,
      "idempotentHint": false,
      "openWorldHint": true
    }
  },
  "binding": {
    "workflowId": "book_trip",
    "hiddenInputs": {
      "paymentMethodToken": {
        "source": "vault",
        "ref": "vault://travel-demo/users/{sub}/payment-methods/default",
        "onMissing": "elicitation-url"
      },
      "idempotencyKey": {
        "source": "server",
        "generator": "uuid-v4",
        "scope": "confirmation"
      },
      "confirmedTotalPrice": {
        "source": "confirmation",
        "from": "$preview.outputs.totalPrice.amount"
      },
      "confirmedFlightNumber": {
        "source": "confirmation",
        "from": "$preview.outputs.flightNumber"
      }
    },
    "confirmation": {
      "required": true,
      "mode": "elicitation-form",
      "previewWorkflowId": "quote_trip",
      "acceptWhen": "$elicitation.content.confirm == true",
      "whenClientLacksElicitation": "reject"
    },
    "auth": { "requiredScopes": ["travel:book", "payments:charge"] }
  }
}
```

Ce fichier se lit comme un document de gouvernance :

- **Des entrées masquées.** Le jeton de paiement vient d'un coffre, la clé d'idempotence du serveur, le prix et le vol de la confirmation. L'agent ne peut ni les fournir, ni les inventer, ni les rejouer.
- **Une confirmation humaine.** Avant `book_trip`, le serveur MCP lance `quote_trip` en prévisualisation, puis demande à l'utilisateur, par l'elicitation MCP, de confirmer vol et prix. Les valeurs acceptées deviennent des entrées verrouillées, que le workflow revérifie. Si le client ne sait pas interroger l'utilisateur, le serveur refuse plutôt que de réserver sans accord.
- **Des annotations indicatives.** `destructiveHint: true` aide le client à prévenir l'utilisateur, mais ce n'est jamais un contrôle de sécurité. Les scopes, la confirmation et les plafonds sont appliqués côté serveur.
- **Des sorties en liste blanche.** Seules les sorties déclarées du workflow parviennent à l'agent, jamais les corps de réponse bruts.

Une précision s'impose, car elle est souvent brouillée : **MCP n'est pas un type d'étape d'Arazzo 1.1**. Une étape cible une opération OpenAPI, une opération ou un canal AsyncAPI, ou un autre workflow. Arazzo orchestre les API *derrière* un outil MCP ; il n'appelle pas d'outils MCP. Les types d'étape MCP, A2A, gRPC et GraphQL figurent sur la feuille de route de l'OpenAPI Initiative, et la mise en pause d'un workflow pour un humain fait l'objet d'une proposition pour une version ultérieure (pull request #568). Aujourd'hui, la confirmation vit dans le serveur MCP, entre deux workflows.

### Ce que nous avons mesuré

Contre un mock Prism 5.16.0, avec Redocly Respect 2.79.0, les deux workflows passent : 2 workflows, 9 étapes, 46 contrôles, code retour 0. `book_trip` renvoie la référence de réservation `K7Q2ZP`. Le cas négatif, avec un budget ramené à 300, s'arrête à `priceOffer` avec un code retour 1, sans qu'aucune étape de réservation ni de paiement ne soit exécutée. Un second runner, arazzo-cli 0.9.0, renvoie les mêmes sorties.

Deux réserves, en toute franchise. Le mock est sans état : compensations et retries sur `503` sont décrits mais pas exercés, ce qui demanderait un mock à scénarios ou un vrai bac à sable. Et `mcp-tools.json` est ici écrit à la main : c'est le contrat que nous relisons, pas encore un artefact généré.

## 4. Deuxième cas : un test de bout en bout exécutable

Le second usage parle d'abord aux équipes QA : le format qui documente un parcours sait aussi l'exécuter. La documentation cesse de dériver, car la CI passe au rouge dès que le comportement change.

### Order-to-cash : HTTP et événements dans un même workflow

Une commande est créée en HTTP, puis validée de façon asynchrone par un back-office qui publie `order.confirmed` sur Kafka. Le workflow attend cet événement, débite le paiement, émet la facture et crée l'expédition en parallèle, puis ne clôture la commande que lorsque les deux sont faites.

![Le workflow orderToCash : une étape AsyncAPI receive avec un timeout de 6 secondes, puis un éventail et une jonction exprimés avec dependsOn](/images/insights/arazzo/arazzo-1-1-order-to-cash-graph.webp "400x1119")

L'étape asynchrone et la jonction, extraites de l'exemple :

```yaml
- stepId: awaitOrderConfirmation
  description: |
    Attend sur `order.confirmed` le message dont le correlationId (`orderId`) est celui
    de la commande créée. Échec si rien n'arrive en 6 s.
  operationId: $sourceDescriptions.orderEvents.receiveOrderConfirmed
  action: receive
  correlationId: $steps.createOrder.outputs.orderId
  timeout: 6000
  dependsOn:
    - createOrder
  successCriteria:
    - condition: $message.payload#/status == 'confirmed'
  outputs:
    confirmedAt: $message.payload#/confirmedAt
    warehouseId: $message.payload#/warehouseId
# ...
- stepId: closeOrder
  operationId: $sourceDescriptions.commerce.closeOrder
  dependsOn:
    - createInvoice
    - createShipment
  parameters:
    - name: orderId
      in: path
      value: $steps.createOrder.outputs.orderId
  requestBody:
    contentType: application/json
    payload:
      invoiceId: $steps.createInvoice.outputs.invoiceId
      shipmentId: $steps.createShipment.outputs.shipmentId
  successCriteria:
    - condition: $statusCode == 200
    - condition: $response.body#/status == 'closed'
```

Résultats consignés avec Prism, un conteneur Kafka et arazzo-cli 0.9.0 : l'exécution réussit avec `orderId: ord_123`, `paymentId: pay_3021`, les numéros de facture et de suivi, et les références expédiées extraites par un Selector JSONPath. L'étape d'attente a reçu le bon message en 830 ms, en ignorant celui de la commande `ord_999` grâce au `correlationId`. Sans événement, elle échoue avec `RUNTIME_MESSAGE_RECEIVE_TIMEOUT` au bout de 6 secondes (code retour 1). Avec Microcks 1.16.0 dans le rôle du back-office, l'exécution réussit aussi.

### Renouvellement de session : écrire la reprise une seule fois

Un grand classique : la session a expiré, l'API répond `401`. En 1.0, chaque parcours dupliquait la logique de réauthentification. En 1.1, une action d'échec peut appeler un workflow réutilisable avec des `parameters`, puis rejouer l'étape en échec :

```yaml
components:
  failureActions:
    renewSessionOn401:
      name: renewSessionOn401
      type: retry
      workflowId: renewSession
      parameters:
        - name: sessionToken
          value: $inputs.sessionToken
        - name: refreshToken
          value: $inputs.refreshToken
      retryAfter: 1
      retryLimit: 2
      criteria:
        - condition: $statusCode == 401
```

Le scénario nominal passe avec Respect (3 workflows, 4 étapes, 20 contrôles), y compris un workflow négatif qui vérifie que l'API refuse une session expirée avec le code `SESSION_EXPIRED`. Le scénario de session expirée échoue comme prévu : Respect exécute `renewSession` et rejoue l'étape deux fois, puis s'arrête avec un code retour 1. La reprise fonctionne, et la limite de tentatives écarte la boucle infinie. Attention aux unités : `retryAfter` est en secondes, `timeout` en millisecondes.

### La recette CI

Les exemples sont livrés avec un modèle GitHub Actions. Le job HTTP épingle ses outils, démarre un mock qui sert les exemples de l'OpenAPI, puis exécute les workflows :

```yaml
- name: Démarrer le mock Prism
  run: |
    npx -y @stoplight/prism-cli@5.16.0 mock -h 127.0.0.1 -p 4010 openapi.yaml > prism.log 2>&1 &
    for i in $(seq 1 30); do
      curl -s -o /dev/null http://127.0.0.1:4010/ && exit 0
      sleep 1
    done
    echo "Prism n'a pas démarré"; cat prism.log; exit 1
- name: Exécuter les workflows (Respect)
  run: |
    mkdir -p reports
    npx -y @redocly/cli@2.79.0 respect *.arazzo.yaml \
      --server travel=http://127.0.0.1:4010 \
      --input "$(cat inputs.json)" \
      --json-output reports/respect.json
```

Le modèle complet fait tourner quatre cas nominaux et deux cas négatifs qui doivent échouer, convertit la sortie de Respect en JUnit et ajoute un job Kafka avec arazzo-cli pour le `receive`. Rejouée en local commande par commande, la matrice HTTP donne 6 cas conformes sur 6. Les jobs asynchrones reprennent des commandes exécutées à la main, mais n'ont pas encore tourné dans GitHub Actions.

### Les limites, mesurées plutôt que supposées

- **Respect n'évalue pas les Selector Objects.** Il recopie l'objet tel quel, ce qui donne un faux positif silencieux. C'est pourquoi l'exemple order-to-cash ne les utilise qu'en sortie, et pourquoi les exemples exécutés par Respect s'en passent.
- **Respect refuse les sources AsyncAPI.** Sur order-to-cash, il exécute `createOrder` puis s'arrête. La voie open source pour le `receive`, c'est arazzo-cli avec Kafka.
- **Aucun runner open source n'exécute `action: send` à ce jour.** arazzo-cli le refuse, dans l'attente d'une question ouverte de la spécification (issue #617). Specmatic l'exécute, sous licence commerciale.
- **Seuls les critères `simple` en JSON Pointer sont portables** (`$response.body#/status == 'pending'`). Un filtre JSONPath sur la racine passe dans Respect et échoue dans les runners stricts RFC 9535. Nos exemples s'en tiennent donc à la forme portable.
- **arazzo-cli résout les URL relatives par rapport à `$self`**, comme l'exige le texte 1.1 : il s'exécute donc sur une copie de travail sans `$self`.

Rien de cela ne justifie d'attendre : ce sont de bonnes raisons de choisir votre runner en connaissance de cause et de garder des critères portables.

## 5. L'outillage ConnEthics

Nous utilisons ce que nous recommandons, et nous le mettons à disposition :

- **Arazzo for VS Code — by ConnEthics.** Validation en direct des documents 1.0 et 1.1 (le schéma est choisi d'après le champ `arazzo`), contrôles sémantiques au-delà du schéma (cibles d'étape, cycles de `dependsOn`, règles AsyncAPI), et un quick fix qui migre un document vers la 1.1.0 en proposant un `$self`. [L'installer depuis le Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=connethics.arazzo-vscode).
- **Arazzo Studio by ConnEthics.** Un éditeur et visualiseur web de workflows Arazzo, gratuit, construit sur un cœur sous licence MIT. [Ouvrir Arazzo Studio](https://arazzo.connethics.com).
- **Le skill file IA.** Un fichier Markdown unique qui apprend aux assistants de code (Claude Code, Cursor, Copilot, Cline) à écrire, relire et corriger de l'Arazzo 1.1, à exposer des workflows en outils MCP et à les exécuter comme des tests. [Lire arazzo.skill.md](https://arazzo.connethics.com/arazzo.skill.md).
- **Les exemples.** Cinq documents Arazzo 1.1, avec leurs sources de démonstration, leurs commandes, les résultats réellement observés et le modèle de CI. Tous les extraits de cet article en proviennent.

## 6. Comment ConnEthics vous accompagne

D'abord, un mot de franchise. Arazzo est une description, pas un moteur : ni boucles, ni transformation de données, ni étape humaine, ni transactions, et les runners ne couvrent qu'une partie de la 1.1. Ce n'est pas le bon outil pour un processus métier long avec des tâches humaines (préférez BPMN ou un moteur de workflow), pour une exécution qui doit survivre à une panne (Temporal ou Step Functions), ni tant que vos OpenAPI ne sont pas fiables. Commencez par là.

Quand Arazzo est pertinent, nous intervenons selon les modèles d'engagement présentés sur notre [page services](/services) :

- **Audit « API readiness agentique »** (Strategic Radar, 2 à 4 semaines). Nous cartographions les 10 à 20 intentions métier qui comptent, l'endroit où vit aujourd'hui leur séquence, et le risque d'exposer des endpoints bruts à des agents. Vous repartez avec une feuille de route priorisée par la valeur métier.
- **De la connaissance tribale au contrat** (Knowledge Engineering). Des ateliers avec ceux qui détiennent la connaissance, des workflows Arazzo 1.1 écrits et validés, un graphe et une documentation générés depuis la même source.
- **Parcours E2E exécutables et outils d'agents déterministes** (Tactical Strike Team). Choix du runner, mocks, secrets, pipeline CI, et pattern « un workflow, un outil MCP » avec ses garde-fous, puis transfert à vos équipes.
- **Gouverner ce que vos agents ont le droit d'enchaîner** (Ecosystem Governance, avec notre [pratique de gouvernance de l'IA](/ai-governance)). Une liste blanche relue des workflows exposés aux agents, des règles de lint en CI, et une traçabilité alignée sur OWASP LLM06 (Excessive Agency).

Nous ne promettons pas de chiffres avant de les avoir mesurés avec vous. Nous proposons de suivre des indicateurs concrets : part des intentions clés formalisées, nombre d'outils exposés aux agents rapporté au nombre d'endpoints, parcours critiques couverts en CI, taux de réussite des tâches d'agent répétées. Si le sujet vous parle, [échangeons](/contact).

## 7. Sources

- OpenAPI Initiative, [Arazzo Specification v1.1.0](https://spec.openapis.org/arazzo/v1.1.0.html) (17 mai 2026), et la [présentation d'Arazzo et sa feuille de route](https://www.openapis.org/arazzo-specification).
- Redocly, [Arazzo Specification 1.1 release](https://redocly.com/blog/arazzo-specification-1-1-release) ; Zuplo, [Arazzo goes cross protocol](https://zuplo.com/blog/arazzo-goes-cross-protocol).
- Model Context Protocol, [Tools](https://modelcontextprotocol.io/specification/latest/server/tools) et [Elicitation](https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation) (révision 2026-07-28).
- OAI/Arazzo-Specification, [issue #617](https://github.com/OAI/Arazzo-Specification/issues/617) (contrat du message sortant pour `send`) et [issue #523](https://github.com/OAI/Arazzo-Specification/issues/523) (Function Object et binding MCP).
- Anthropic, [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) ; SmartBear, [From Endpoints to Intent](https://smartbear.com/blog/from-endpoints-to-intent-rethinking-agent-api-workflows-with-arazzo).
- T. Gan et Q. Sun, [RAG-MCP](https://arxiv.org/abs/2505.03275) (arXiv:2505.03275) ; S. Yao et al., [τ-bench](https://arxiv.org/abs/2406.12045) (arXiv:2406.12045).
- OWASP GenAI, [LLM06:2025 Excessive Agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/).
- Runners et mocks : [Redocly Respect](https://redocly.com/docs/respect), [arazzo-cli](https://github.com/strefethen/arazzo-cli), [Specmatic Arazzo](https://docs.specmatic.io/supported_protocols/arazzo), [Stoplight Prism](https://github.com/stoplightio/prism), [Microcks](https://microcks.io/) ; API Evangelist, [The tools that actually execute your Arazzo workflows](https://apievangelist.com/2026/08/14/the-tools-that-actually-execute-your-arazzo-workflows/).
