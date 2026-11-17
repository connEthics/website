# Kit de lancement LinkedIn : Arazzo 1.1 × ConnEthics

> **Ne rien publier avant que les deux conditions suivantes soient remplies :**
> 1. **Arazzo for VS Code — by ConnEthics 2.0.0** est publiée sur le Visual Studio Marketplace (`connethics.arazzo-vscode`). Au moment de la rédaction, le CHANGELOG indique encore `[2.0.0] - Unreleased`.
> 2. **Le site est en production** avec la landing (`/arazzo`, `/fr/arazzo`) et l'article (`/insights/arazzo-1-1-mcp-e2e`, `/fr/insights/arazzo-1-1-mcp-e2e`), et Arazzo Studio sert les exemples 1.1 et le skill file (`https://arazzo.connethics.com/arazzo.skill.md`).

**Contexte** : lancement d'Arazzo 1.1 chez ConnEthics (extension VS Code 2.0, Arazzo Studio, exemples exécutables, skill file IA, landing et guide).
**Cibles** : architectes API, équipes QA/SDET, équipes plateforme IA, Product Managers API, CTO.
**Ton** : « l'Architecte Visionnaire » (`INSIGHTS_STRATEGY.md`) : autorité bienveillante, pragmatisme radical, « nous » et « vous », le pourquoi avant le comment. Les limites sont dites avant l'appel à l'action.
**Fil rouge** : les trois messages clés de R2 (`arazzo-vscode/specs/002-arazzo-1-1-refonte/research/02-pains-positioning.md`, § 6) :
1. *Des intentions, pas des endpoints* / *Intent, not endpoints*
2. *Écrit une fois, utile trois fois* / *Write it once, use it three times*
3. *L'agent choisit l'intention, le workflow garantit la séquence* / *Agents choose the intent; workflows guarantee the sequence*

## Liens

| Cible | FR | EN |
|---|---|---|
| Landing | https://www.connethics.com/fr/arazzo | https://www.connethics.com/arazzo |
| Guide (article) | https://www.connethics.com/fr/insights/arazzo-1-1-mcp-e2e | https://www.connethics.com/insights/arazzo-1-1-mcp-e2e |
| Arazzo Studio | https://arazzo.connethics.com | idem |
| Extension | https://marketplace.visualstudio.com/items?itemName=connethics.arazzo-vscode | idem |
| Skill file | https://arazzo.connethics.com/arazzo.skill.md | idem |
| Exemple MCP | https://arazzo.connethics.com/builder?example=mcp-travel-booking | idem |
| Exemple E2E | https://arazzo.connethics.com/builder?example=e2e-order-to-cash | idem |

Publiez le FR et l'EN comme **deux posts distincts**, jamais comme un post bilingue. Les liens peuvent rester dans le post ou passer en premier commentaire, au choix de l'équipe : le commentaire d'engagement ci-dessous les reprend tous.

---

## 1. Post d'annonce

### 1.1 FR

```text
Vos API sont documentées. Ce que vos clients et vos agents IA cherchent à accomplir avec elles ne l'est pas.

Chaque endpoint a sa description OpenAPI. Mais l'enchaînement qui produit un résultat (réserver un voyage, clôturer une commande, renouveler une session) vit dans un wiki, une collection Postman ou la tête de deux ou trois personnes. Avec les agents IA, cet écart devient un risque : un agent qui doit deviner l'ordre des appels ne le devine jamais deux fois de la même façon.

Arazzo, le standard de l'OpenAPI Initiative pour décrire ces enchaînements, est passé en 1.1 le 17 mai 2026 :
→ étapes événementielles AsyncAPI (send, receive, correlationId, timeout)
→ dependsOn par étape, pour les jonctions
→ workflows réutilisables depuis les actions
→ vos documents 1.0 restent valides

Un même fichier documente le parcours, s'exécute comme test E2E en CI et adosse un outil gouverné pour vos agents.

Ce que nous publions chez ConnEthics :
• Arazzo for VS Code 2.0 : validation 1.0 et 1.1, plus de 100 règles sémantiques, migration vers la 1.1.0 en un quick fix, graphe interactif. Gratuit, MIT.
• Arazzo Studio : éditeur et visualiseur web. Gratuit, cœur MIT.
• 5 exemples exécutables, avec les résultats réellement observés.
• Un skill file pour vos assistants de code.

Arazzo est une description, pas un moteur, et les runners ne couvrent qu'une partie de la 1.1. Le guide le dit, mesures à l'appui.

Le guide : https://www.connethics.com/fr/insights/arazzo-1-1-mcp-e2e
La page Arazzo : https://www.connethics.com/fr/arazzo

#Arazzo #OpenAPI #AsyncAPI #MCP #AgentsIA
```

### 1.2 EN

```text
Your APIs are well documented. What your customers and your AI agents are trying to achieve with them is not.

Every endpoint has its OpenAPI description. Yet the sequence that turns endpoints into an outcome (book a trip, close an order, renew a session) lives in wikis, Postman collections and the heads of two or three people. With AI agents, that gap becomes a risk: an agent that has to guess the order of calls will guess differently every time.

Arazzo, the OpenAPI Initiative standard for describing those sequences, reached 1.1 on 17 May 2026:
→ event-driven AsyncAPI steps (send, receive, correlationId, timeout)
→ step-level dependsOn for joins
→ reusable workflows called from actions
→ your 1.0 documents stay valid

One file documents the journey, runs as an end-to-end test in CI and backs a governed tool for your agents.

What we are shipping at ConnEthics:
• Arazzo for VS Code 2.0: 1.0 and 1.1 validation, 100+ semantic rules, a quick fix to migrate to 1.1.0, an interactive graph. Free, MIT.
• Arazzo Studio: a web builder and viewer. Free to use, MIT core.
• 5 runnable examples, with the results we actually observed.
• A skill file for your coding assistants.

Arazzo is a description, not an engine, and runners cover only part of 1.1. The guide says so, with measurements.

The guide: https://www.connethics.com/insights/arazzo-1-1-mcp-e2e
The Arazzo page: https://www.connethics.com/arazzo

#Arazzo #OpenAPI #AsyncAPI #MCP #AIAgents
```

### 1.3 Commentaire d'engagement (première heure)

**FR**

```text
Pour essayer tout de suite :
🛠️ L'extension VS Code : https://marketplace.visualstudio.com/items?itemName=connethics.arazzo-vscode
🧭 Arazzo Studio, dans le navigateur, sans installation : https://arazzo.connethics.com
🤖 Le skill file pour Claude Code, Cursor, Copilot ou Cline : https://arazzo.connethics.com/arazzo.skill.md
```

**EN**

```text
To try it right away:
🛠️ The VS Code extension: https://marketplace.visualstudio.com/items?itemName=connethics.arazzo-vscode
🧭 Arazzo Studio, in the browser, nothing to install: https://arazzo.connethics.com
🤖 The skill file for Claude Code, Cursor, Copilot or Cline: https://arazzo.connethics.com/arazzo.skill.md
```

---

## 2. Posts de suivi

### 2.1 Cas MCP : un workflow = un outil gouverné

#### FR

```text
Un agent IA ne devrait pas avoir à deviner comment on réserve un voyage.

Exposez un outil par endpoint, et le modèle doit choisir, ordonner et enchaîner les appels à chaque exécution. L'étude RAG-MCP mesure 13,62 % de précision de sélection d'outil quand tout le catalogue est exposé, contre 43,13 % une fois filtré.

Le pattern que nous recommandons : un workflow Arazzo = un outil MCP.
→ le workflowId devient le nom de l'outil, les inputs son schéma d'entrée
→ seules les sorties déclarées reviennent à l'agent
→ les garde-fous sont écrits dans le workflow, pas dans un prompt

Dans notre exemple de réservation, quote_trip est en lecture seule. book_trip ajoute blocage, paiement et compensations. Si le prix dépasse le budget, ou a bougé depuis la confirmation de l'utilisateur, le parcours s'arrête avant toute réservation : rien n'est bloqué, rien n'est débité. Le jeton de paiement vient d'un coffre, la clé d'idempotence du serveur : l'agent ne peut ni les fournir ni les inventer.

Mesuré avec Redocly Respect contre un mock Prism : les deux workflows passent (46 contrôles), et le cas « budget à 300 » s'arrête avant toute étape de paiement.

Ce que nous ne disons pas : MCP n'est pas un type d'étape d'Arazzo 1.1. Arazzo décrit la séquence derrière l'outil, et la confirmation humaine vit dans le serveur MCP. Notre mock étant sans état, compensations et retries sont décrits, pas encore éprouvés.

L'agent choisit l'intention, le workflow garantit la séquence.

https://www.connethics.com/fr/insights/arazzo-1-1-mcp-e2e

#Arazzo #MCP #AgentsIA #GouvernanceIA
```

#### EN

```text
An AI agent should not have to guess how to book a trip.

Expose one tool per endpoint and the model has to pick, order and chain calls on every run. The RAG-MCP study measured 13.62% tool-selection accuracy with the full catalogue exposed, versus 43.13% once it was filtered.

The pattern we recommend: one Arazzo workflow = one MCP tool.
→ the workflowId becomes the tool name, the inputs its input schema
→ only declared outputs go back to the agent
→ guardrails live in the workflow, not in a prompt

In our travel example, quote_trip is read-only. book_trip adds hold, payment and compensations. If the price exceeds the budget, or has moved since the user confirmed it, the run ends before any booking: nothing held, nothing charged. The payment token comes from a vault and the idempotency key from the server, so the agent can neither supply nor invent them.

Measured with Redocly Respect against a Prism mock: both workflows pass (46 checks), and the "budget set to 300" case stops before any payment step.

What we do not claim: MCP is not a step type in Arazzo 1.1. Arazzo describes the sequence behind the tool, and human confirmation lives in the MCP server. Our mock is stateless, so compensations and retries are described, not yet exercised.

Agents choose the intent; workflows guarantee the sequence.

https://www.connethics.com/insights/arazzo-1-1-mcp-e2e

#Arazzo #MCP #AIAgents #AIGovernance
```

### 2.2 Cas E2E : des tests exécutables, et les limites des runners

#### FR

```text
Une documentation qui s'exécute en CI cesse d'être une promesse.

Notre exemple order-to-cash mélange HTTP et événements : la commande est créée, le back-office la confirme sur Kafka, puis paiement, facture et expédition en parallèle, et clôture quand les deux sont faites. En Arazzo 1.1, c'est un seul fichier, avec une étape receive, un correlationId, un timeout et un dependsOn.

Ce que nous avons observé avec arazzo-cli :
→ le bon message reçu en 830 ms, le message « parasite » d'une autre commande ignoré grâce au correlationId
→ sans événement, échec propre après 6 secondes, code retour 1

Et ce qui ne marche pas encore, parce que vous le découvririez de toute façon :
• Redocly Respect, le plus mûr pour le HTTP, n'évalue pas les Selector Objects (faux positif silencieux) et refuse les sources AsyncAPI.
• Aucun runner open source n'exécute action: send aujourd'hui. Specmatic le fait, sous licence commerciale.
• Seuls les critères simples en JSON Pointer sont portables d'un runner à l'autre.
• Notre modèle GitHub Actions : 6 cas HTTP conformes sur 6 rejoués en local. Les jobs asynchrones n'ont pas encore tourné dans GitHub Actions.

Rien de cela n'est une raison d'attendre. C'est une raison de choisir son runner en connaissance de cause et de garder ses critères portables.

https://www.connethics.com/fr/insights/arazzo-1-1-mcp-e2e

#Arazzo #TestAutomation #AsyncAPI #QA
```

#### EN

```text
Documentation that runs in CI stops being a promise.

Our order-to-cash example mixes HTTP and events: the order is created, the back office confirms it on Kafka, then payment, invoice and shipment in parallel, and the order closes once both are done. In Arazzo 1.1 that is one file, with a receive step, a correlationId, a timeout and a dependsOn join.

What we observed with arazzo-cli:
→ the right message received in 830 ms, a "noise" message for another order ignored thanks to the correlationId
→ with no event, a clean failure after 6 seconds, exit code 1

And what does not work yet, because you would find out anyway:
• Redocly Respect, the most mature runner for HTTP, does not evaluate Selector Objects (a silent false positive) and refuses AsyncAPI sources.
• No open-source runner executes action: send today. Specmatic does, under a commercial licence.
• Only simple criteria with JSON Pointer are portable across runners.
• Our GitHub Actions template: 6 HTTP cases out of 6 behave as expected when replayed locally. The async jobs have not run inside GitHub Actions yet.

None of this is a reason to wait. It is a reason to choose your runner deliberately and keep your criteria portable.

https://www.connethics.com/insights/arazzo-1-1-mcp-e2e

#Arazzo #TestAutomation #AsyncAPI #QA
```

---

## 3. Carrousel (6 slides)

Format suggéré : document PDF, 1080 × 1350 px (4:5), une idée par slide, captures recadrées sur la zone utile. Les captures source font de 2 000 à 3 200 px de large : recadrez, ne réduisez pas la page entière.

| # | Visuel suggéré (capture existante) | Zone à garder |
|---|---|---|
| 1 | `website/public/images/arazzo/arazzo-og-fr.png` / `arazzo-og-en.png` | Image entière (titre, logo, mini-graphe) |
| 2 | `arazzo-vscode/images/v2/graph-light.png` | Le graphe orderToCash, estompé derrière le texte : « voilà ce que devient le parcours une fois écrit » |
| 3 | `arazzo-vscode/images/v2/docs-async.png` | La carte `awaitOrderConfirmation` : RECEIVE, correlation ID, timeout 6 s, « Waits for createOrder » |
| 4 | `website/public/images/insights/arazzo/arazzo-1-1-book-trip-graph.webp` | De `priceOffer` à `createBooking` : garde-fous, retry sur 503, branches de fin |
| 5 | `website/public/images/insights/arazzo/arazzo-1-1-order-to-cash-graph.webp` (ou `arazzo-demo/app/public/screenshots/v2/builder-order-to-cash-flowchart.png`) | Étape receive puis éventail facture / expédition et jonction `dependsOn` |
| 6 | `arazzo-demo/app/public/screenshots/v2/builder-examples-gallery.png` + `arazzo-vscode/images/v2/graph-dark.png` en vignette | La galerie « Arazzo 1.1 examples » (MCP, E2E) |

Alternatives disponibles : `arazzo-vscode/images/v2/graph-hc.png` (contraste élevé), `arazzo-demo/app/public/screenshots/v2/builder-order-to-cash-builder.png` (Studio, vue Builder avec le panneau Problems), `showcase-compliance.png` (matrice de conformité 1.1 du Studio), `website/public/images/arazzo/arazzo-vscode-graph-light.webp`.

### 3.1 FR

1. **Des workflows API lisibles par les humains, exécutables par les machines**
   Arazzo 1.1, le standard de l'OpenAPI Initiative pour les enchaînements d'API. Outils et accompagnement ConnEthics.
2. **Des intentions, pas des endpoints**
   OpenAPI dit ce que l'on peut appeler, pas pourquoi ni dans quel ordre. Le vrai parcours vit dans des wikis, des collections et quelques têtes. Et un agent IA doit le deviner à chaque exécution.
3. **Ce qu'apporte la 1.1 (17 mai 2026)**
   Étapes AsyncAPI send / receive avec correlationId et timeout. dependsOn par étape. Workflows réutilisables depuis les actions. Selector Object, `$self`. Vos documents 1.0 restent valides.
4. **Un workflow = un outil MCP gouverné**
   Le workflowId devient le nom de l'outil, seules les sorties déclarées reviennent à l'agent. Budget dépassé ou prix modifié : le parcours s'arrête avant tout paiement. MCP comme type d'étape n'est pas dans la 1.1.
5. **Un test E2E exécutable, limites comprises**
   HTTP et Kafka dans le même fichier, échec propre au timeout. Respect n'évalue pas les Selector Objects et refuse AsyncAPI, et aucun runner open source n'exécute send aujourd'hui. Nous documentons ce qui tourne où.
6. **Écrit une fois, utile trois fois**
   Arazzo for VS Code 2.0 (gratuit, MIT), Arazzo Studio (gratuit, cœur MIT), 5 exemples exécutables et un skill file. connethics.com/fr/arazzo

### 3.2 EN

1. **API workflows humans can read and machines can run**
   Arazzo 1.1, the OpenAPI Initiative standard for multi-step API journeys. Tools and support by ConnEthics.
2. **Intent, not endpoints**
   OpenAPI says what you can call, not why or in which order. The real journey lives in wikis, collections and a few people's heads. And an AI agent has to guess it on every run.
3. **What 1.1 adds (17 May 2026)**
   AsyncAPI send / receive steps with correlationId and timeout. Step-level dependsOn. Reusable workflows called from actions. Selector Object, `$self`. Your 1.0 documents stay valid.
4. **One workflow = one governed MCP tool**
   The workflowId becomes the tool name; only declared outputs reach the agent. Over budget or price changed: the run ends before any payment. MCP as a step type is not in 1.1.
5. **An executable E2E test, limits included**
   HTTP and Kafka in one file, a clean failure on timeout. Respect does not evaluate Selector Objects and refuses AsyncAPI, and no open-source runner executes send today. We document what runs where.
6. **Write it once, use it three times**
   Arazzo for VS Code 2.0 (free, MIT), Arazzo Studio (free to use, MIT core), 5 runnable examples and a skill file. connethics.com/arazzo

**Texte d'accompagnement du carrousel** (court, à adapter) :
- FR : « Arazzo 1.1 en 6 slides : ce que change la spec, deux cas concrets (outil MCP, test E2E) et ce qui ne marche pas encore. Le guide complet : https://www.connethics.com/fr/insights/arazzo-1-1-mcp-e2e #Arazzo #OpenAPI #MCP »
- EN : "Arazzo 1.1 in 6 slides: what the spec changes, two concrete cases (MCP tool, E2E test) and what does not work yet. The full guide: https://www.connethics.com/insights/arazzo-1-1-mcp-e2e #Arazzo #OpenAPI #MCP"

---

## 4. Calendrier de publication suggéré

**Prérequis bloquant** : extension 2.0.0 en ligne sur le Marketplace **et** site en production (voir l'encadré en tête). J0 est fixé *après* ces deux sorties, idéalement un mardi ou un mercredi en matinée.

| Jour | Contenu | Langues | Notes |
|---|---|---|---|
| J0 | Post d'annonce (§ 1) + commentaire d'engagement | FR puis EN, deux posts distincts, à quelques heures d'écart | Répondre aux commentaires pendant la première heure. |
| J+3 | Carrousel 6 slides (§ 3) | FR et EN | Lien vers le guide dans le texte ou en commentaire. |
| J+7 | Suivi MCP (§ 2.1) | FR et EN | Joindre la capture `arazzo-1-1-book-trip-graph.webp` (recadrée). |
| J+10 | Suivi E2E (§ 2.2) | FR et EN | Joindre `docs-async.png` ou le graphe order-to-cash. |
| J+14 | Optionnel : republier la FAQ « Quand ne pas utiliser Arazzo » de la landing en commentaire ou en post court | FR et EN | Réutiliser le texte de la landing tel quel, sans ajout. |

Après J+14 : relever les questions reçues et les reverser dans la FAQ de la landing si elles reviennent.

---

## 5. Checklist de relecture

### Prérequis
- [ ] Extension **2.0.0** visible sur le Marketplace (`connethics.arazzo-vscode`), CHANGELOG daté (plus « Unreleased »).
- [ ] `/arazzo`, `/fr/arazzo`, `/insights/arazzo-1-1-mcp-e2e` et `/fr/insights/arazzo-1-1-mcp-e2e` en ligne sur www.connethics.com.
- [ ] `https://arazzo.connethics.com`, `/arazzo.skill.md` et les liens `?example=` répondent.
- [ ] Chaque lien du kit testé en navigation privée, sur mobile compris.

### Vocabulaire et marque
- [ ] **ConnEthics** (C et E majuscules) partout dans la prose.
- [ ] Noms exacts : « Arazzo for VS Code — by ConnEthics » (ou « Arazzo for VS Code 2.0 » en raccourci), « Arazzo Studio ».
- [ ] Licences : extension « gratuit, MIT » / « free, MIT » ; Studio « gratuit, cœur MIT » / « free to use, MIT core ». **Jamais « open source » pour les outils ConnEthics.** (« open source » n'apparaît que pour qualifier les runners tiers, comme dans l'article.)
- [ ] Pas de « Visualizer » (ancien nom), pas de #OpenSource.

### Pas de surpromesse
- [ ] Aucune formule du type « This ends with Arazzo », « supprime les hallucinations », « garantit l'exécution ».
- [ ] « Arazzo est une description, pas un moteur » présent dans l'annonce.
- [ ] MCP présenté comme un pattern (serveur qui lit l'Arazzo), **pas** comme un type d'étape de la 1.1.
- [ ] Limites des runners citées telles que mesurées dans l'article, sans les aggraver ni les atténuer.
- [ ] Aucun chiffre client, aucun gain chiffré promis.

### Chiffres et faits (tous présents dans les sources)
| Affirmation | Source |
|---|---|
| Arazzo 1.1.0 publiée par l'OpenAPI Initiative le 17 mai 2026, rétrocompatible, documents 1.0 valides | landing (`whatsNew`), article § 2 |
| Nouveautés 1.1 : AsyncAPI send/receive, correlationId, timeout, dependsOn par étape, workflows réutilisables, Selector Object, `$self` | landing (`whatsNew`), article § 2 |
| Extension : validation 1.0 et 1.1, quick fix de migration, graphe interactif, MIT, gratuite | landing (`tools`), article § 5 |
| Extension : « plus de 100 règles sémantiques » | `arazzo-vscode/CHANGELOG.md` (2.0.0), `CLAUDE.md` |
| Studio : éditeur et visualiseur web, sans installation, gratuit, cœur MIT | landing (`tools`, FAQ licences) |
| 5 exemples exécutables avec résultats observés + modèle de CI | landing (`tools`), article § 5 |
| Skill file pour Claude Code, Cursor, Copilot, Cline | landing (`tools`), article § 5 |
| RAG-MCP 13,62 % → 43,13 % | article § 1 ; R2 § 8 (chiffre publiable) |
| quote_trip + book_trip : 2 workflows, 46 contrôles, cas budget 300 arrêté à `priceOffer` sans paiement, mock sans état | article § 3 « Ce que nous avons mesuré » |
| Jeton de paiement depuis un coffre, clé d'idempotence côté serveur | article § 3 (`mcp-tools.json`) |
| order-to-cash : message reçu en 830 ms, `ord_999` ignoré, échec à 6 s, code retour 1 | article § 4 |
| Respect : pas de Selector Objects, refus d'AsyncAPI ; aucun runner open source pour `send` ; Specmatic sous licence commerciale ; critères simples JSON Pointer seuls portables | article § 4 « Les limites », landing FAQ runners |
| Matrice HTTP 6/6 en local, jobs async pas encore dans GitHub Actions | article § 4 « La recette CI » |

- [ ] Aucun chiffre de la liste « à ne pas publier sans vérification » de R2 § 8 (flakiness Google, seuil de 30 outils, Orbital 30 %, Postman 2020, etc.).
- [ ] Si un chiffre est ajouté, il figure dans le tableau ci-dessus avec sa source.

### Forme
- [ ] Posts d'annonce entre 1 200 et 1 800 caractères (vérifier après toute retouche).
- [ ] 3 à 5 hashtags par post.
- [ ] Accroche lisible avant le « … voir plus » (deux premières lignes).
- [ ] FR rédigé nativement, pas traduit mot à mot ; EN relu par un anglophone si possible.
- [ ] Texte alternatif renseigné pour chaque image et chaque slide.
- [ ] Captures : les exemples ont des descriptions en français (ex. « De la commande à l'encaissement » dans `graph-light.png`). Pour le carrousel EN, recadrer pour éviter le texte FR ou l'assumer en légende, comme la note de la landing.
- [ ] Aucune donnée personnelle, aucun nom de client, aucune personne tierce tagguée sans son accord.
