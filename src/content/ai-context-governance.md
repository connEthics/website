# La Gouvernance du Contexte : Propriété Intellectuelle, Opérations et Stratégie à l'Ère de l'IA Agentique

## Résumé Exécutif

L'industrie du développement logiciel traverse une mutation structurelle sans précédent, catalysée par l'adoption massive de l'Intelligence Artificielle Générative (GenAI). Si la première phase de cette adoption s'est concentrée sur la génération de code via des interfaces conversationnelles, le secteur bascule désormais vers l'ère de l'IA Agentique. Ce paradigme se caractérise par l'émergence d'écosystèmes complexes où des agents autonomes, orchestrés par des protocoles standardisés comme le Model Context Protocol (MCP), interagissent avec des infrastructures de données et des environnements de développement intégrés (IDE).

Ce rapport de recherche examine une problématique centrale mais encore peu théorisée : **la gestion du "Contexte"**. Alors que le code source est rigoureusement géré, versionné et protégé juridiquement, la "documentation connexe" qui pilote l'IA réside souvent dans une zone grise. Ces artefacts — allant des règles d'IDE (`.cursorrules`) aux définitions d'agents (`.agent`, `agent.yaml`) en passant par les compétences sémantiques (`.skills`) — constituent la nouvelle "sauce secrète" de la production logicielle.

L'analyse qui suit déploie une approche multidimensionnelle pour répondre à cette problématique :
*   **Taxonomie des Artefacts Agentiques** : Généralisation des formats de configuration au-delà des simples règles de l'éditeur.
*   **Modèles de Détention et IP** : Analyse comparative des risques juridiques selon que ces artefacts résident dans le code, dans un dépôt client dédié, dans un actif ESN ou dans les préférences utilisateur.
*   **Delivery Management** : Stratégies pour synchroniser et industrialiser ces configurations.
*   **Transformation DevOps** : Le passage du GitOps au "PromptOps".
*   **Gouvernance Donneur d'Ordre** : Maîtrise de la qualité et des risques sur les éléments sous-traités.

---

## 1. La Nouvelle Stratigraphie du Développement : L'Explosion des Formats Agentiques

### 1.1 Au-delà du Code : La Diversité des Artefacts de Configuration

Historiquement, la valeur d'un projet résidait dans son code source. Aujourd'hui, une couche contextuelle critique se superpose au code. Cette couche ne décrit pas ce que le logiciel fait, mais **comment l'IA doit le manipuler**. Il ne s'agit plus seulement de `.cursorrules`, mais d'un écosystème hétérogène de fichiers de configuration qui définissent le comportement, la mémoire et les outils des agents.

Cette "documentation active" se fragmente en plusieurs catégories techniques :

1.  **Règles d'Interaction (Interface-Layer)** : Fichiers définissant la "persona" de l'IA et les conventions de codage au sein de l'IDE.
    *   *Exemples :* `.cursorrules`, `.windsurfrules`, `.github/copilot-instructions.md`.
2.  **Définitions d'Agents et d'Orchestration (Logic-Layer)** : Fichiers structurant l'identité, les objectifs et les plans d'exécution des agents autonomes.
    *   *Exemples :* Fichiers `.agent` (Google ADK, MuleSoft), `agent.yaml` (Frameworks agnostiques comme AIGNE ou Docker agents).
3.  **Compétences et Prompts Fonctionnels (Skill-Layer)** : Encapsulation de capacités spécifiques (ex: "Convertir une devise", "Auditer la sécurité").
    *   *Exemples :* Structure `skprompt.txt` et `config.json` (Semantic Kernel de Microsoft), `.github/prompts` pour les instructions partagées dans Copilot.
4.  **Connectivité et Outils (Infrastructure-Layer)** : Configuration des protocoles permettant à l'IA de toucher au monde extérieur.
    *   *Exemples :* Serveurs MCP (Model Context Protocol) et leurs configurations JSON.

### 1.2 Le Risque de Fragmentation

La multiplication de ces formats crée un risque opérationnel majeur. Si les `.cursorrules` sont souvent locaux, les `agent.yaml` peuvent être déployés dans le cloud, et les `skprompt.txt` enfouis dans le code backend. L'absence d'une stratégie unifiée de gestion de ces fichiers conduit à un "Shadow AI" où le comportement du système devient non déterministe et dépendant de la machine du développeur.

---

## 2. Analyse Juridique : Modèles de Détention et Propriété Intellectuelle

La question cruciale pour le juriste en PI n'est pas seulement "qu'est-ce que c'est?", mais "où cela est-il stocké?". Le régime de propriété intellectuelle (PI) et le niveau de protection (Secret des Affaires vs Droit d'Auteur) varient radicalement selon l'emplacement de ces artefacts.

### 2.1 Modèle A : Dans le Dépôt du Code Source (In-Repo)

*   **Scénario** : Les fichiers `.cursorrules`, `.github/prompts` ou `agent.yaml` sont committés directement dans le répertoire Git du projet logiciel.
*   **Analyse Juridique** : Ces éléments sont considérés comme accessoires indissociables du logiciel.
*   **Titularité** : Ils suivent le régime du code principal. Dans un contrat de prestation standard (Cession de droits), ils deviennent la propriété pleine et entière du Client (Foreground IP).
*   **Avantage** : Simplicité contractuelle. Le contexte voyage avec le code.
*   **Risque** : Divulgation. Si le code est audité par un tiers ou passé en Open Source, la "recette" de fabrication (les prompts optimisés) est révélée.

### 2.2 Modèle B : Dans un Dépôt "Contexte" Séparé (Propriété Client)

*   **Scénario** : Le Client maintient un dépôt Git centralisé `company-ai-standards` contenant les `.agent` de conformité, les `.skills` métiers et les règles de sécurité, qui sont ensuite importés par les projets.
*   **Analyse Juridique** : Ces artefacts constituent un Savoir-Faire Métier (Know-How) codifié.
*   **Protection** : Idéal pour l'application du Secret des Affaires. Ces dépôts peuvent avoir des accès plus restreints que le code source.
*   **Titularité** : Propriété exclusive du Client. L'ESN n'a qu'un droit d'usage temporaire pour la durée de la mission.

### 2.3 Modèle C : Dans un Dépôt "Actif" Séparé (Propriété ESN/Fournisseur)

*   **Scénario** : L'ESN utilise ses propres "Accélérateurs Agentiques" (ex: un set de `agent.yaml` optimisés pour la migration Cloud, ou des serveurs MCP propriétaires pour l'analyse de qualité). Ces fichiers ne sont pas livrés, seule leur sortie (le code généré) l'est.
*   **Analyse Juridique** : Ces éléments sont le Background IP du fournisseur.
*   **Licence** : Le client ne possède pas ces agents. Il bénéficie (ou non, selon le contrat) d'une licence d'utilisation.
*   **Risque de Vendor Lock-in** : C'est le point critique. Si le contrat s'arrête, le Client récupère le code généré mais perd l'intelligence qui permet de le maintenir efficacement. Une clause de réversibilité doit prévoir la fourniture des versions compilées ou une licence perpétuelle sur les agents nécessaires à la maintenance.

### 2.4 Modèle D : Dans les Préférences Utilisateur (Local/Global)

*   **Scénario** : Les "prompts magiques" et configurations résident dans les paramètres globaux de l'IDE du développeur (User Rules dans Cursor, profils VS Code) sur son poste de travail.
*   **Analyse Juridique** : Zone de non-droit et de risque maximal ("Shadow IP").
*   **Problème** : Juridiquement, cela peut être assimilé au savoir-faire individuel du salarié/prestataire. Si le développeur part, il part avec ses outils. L'entreprise ne peut revendiquer la propriété d'un fichier stocké dans le profil personnel (AppData/Roaming...) d'un outil tiers sans clause spécifique.
*   **Recommandation** : Interdire contractuellement le stockage de règles métier critiques dans les préférences utilisateur non synchronisées.

---

## 3. Analyse du Delivery Manager : Industrialiser le Partage des Pratiques

Pour le Delivery Manager, la coexistence de ces quatre modèles de stockage crée un défi de synchronisation. L'objectif est de transformer les préférences individuelles (Modèle D) en actifs collectifs (Modèles A, B ou C).

### 3.1 Stratégie InnerSource pour les Artefacts

Il faut traiter les configurations agentiques comme des projets logiciels à part entière.

*   **Extraction des "Secret Sauces"** : Mettre en place des rituels où les développeurs seniors "committent" leurs préférences locales (User Rules) vers le dépôt partagé (Repo Client ou ESN).
*   **Hiérarchie des Règles** : Configurer les IDE pour qu'ils ingèrent les règles en cascade :
    1.  **Niveau Infrastructure (Repo ESN/Client)** : Règles de sécurité non négociables (ex: "Pas de clés API en dur").
    2.  **Niveau Projet (In-Repo)** : Règles d'architecture spécifiques (ex: "Utiliser telle librairie de logs").
    3.  **Niveau Utilisateur** : Préférences cosmétiques (ex: "Réponses concises").

### 3.2 Le Dilemme "Build vs Buy" des Agents

Le Delivery Manager doit arbitrer :
*   Utilise-t-on les agents standards du marché (coût faible, PI nulle)?
*   L'ESN apporte-t-elle ses agents propriétaires (gain de temps, dépendance forte)?
*   Construit-on des agents spécifiques pour le projet (coût élevé, maîtrise totale de la PI)?

---

## 4. La Transformation DevOps : Du GitOps au "PromptOps"

L'intégration de fichiers comme `.agent` ou `agent.yaml` dans la chaîne de production nécessite une adaptation des pipelines CI/CD.

### 4.1 Gestion de Configuration (PromptOps)

Le PromptOps applique les principes du GitOps aux artefacts d'IA.

*   **Versioning Sémantique** : Un changement dans un fichier `skprompt.txt` peut casser une fonctionnalité aussi sûrement qu'un changement de code C#. Ces fichiers doivent être versionnés.
*   **Déploiement des Agents** : Les fichiers `agent.yaml` ne sont pas justes du texte, ce sont des instructions de déploiement pour des conteneurs ou des fonctions serverless. Le pipeline doit savoir valider la syntaxe YAML de l'agent, tester ses "skills" et le déployer sur l'orchestrateur.

### 4.2 Sécurisation de la Supply Chain Agentique

*   **Scan des configurations** : Les outils de sécurité doivent scanner les fichiers `.cursorrules` et `.agent` pour détecter des injections de prompts malveillantes ou des fuites de données (ex: un prompt système qui contient des données PII en exemple).
*   **Signature des Artefacts** : Si l'ESN fournit un "pack d'agents" (Modèle C), ces fichiers doivent être signés numériquement pour garantir qu'ils n'ont pas été altérés entre le dépôt de l'ESN et l'environnement du client.

---

## 5. Le Rôle du Donneur d'Ordre : Maîtriser la Qualité et les Risques Sous-Traités

Le client final doit adapter ses exigences pour ne pas acheter une "boîte noire".

### 5.1 Critères d'Acceptation Agentique (SLA)

Les contrats d'outsourcing doivent inclure des SLA spécifiques aux agents utilisés ou livrés :
*   **Taux de succès (Loop Rate)** : Pour un agent autonome défini par un `.agent`, quel est le pourcentage de tâches complétées sans intervention humaine? (KPI critique : "Steps per Task").
*   **Transparence des Outils** : Le fournisseur doit déclarer si le code est produit par des configurations stockées en local (Modèle D - Risque) ou via des agents partagés et auditables (Modèle B/C).

### 5.2 Audit de la "Sauce Secrète"

Le donneur d'ordre doit exiger un droit d'audit sur les configurations :
*   **Clause de "Full Disclosure"** : "Le Prestataire s'engage à livrer l'intégralité des fichiers de configuration (`.cursorrules`, `agent.yaml`, prompts) nécessaires à la reproduction de l'environnement de développement."
*   **Audit de Conformité ISO 42001** : Vérifier que les agents utilisés respectent les standards de gestion des risques IA, notamment via des checklists d'audit sur les fichiers de configuration.

---

## 6. Synthèse : Matrice de Gestion des Artefacts Agentiques

| Emplacement de l'Artefact | Type de Fichier (Exemples) | Propriétaire Juridique (Standard) | Risque Principal | Action Recommandée |
| :--- | :--- | :--- | :--- | :--- |
| **Repo Code (In-Repo)** | `.cursorrules`, `.github/prompts` | Client (Foreground IP) | Fuite publique | Traiter comme du code source (Review, Scan). |
| **Repo Client (Shared)** | `.agent`, `agent.yaml`, `.skills` | Client (Secret d'Affaires) | Obsolescence | Nommer un "Knowledge Manager" pour maintenir ces standards. |
| **Repo ESN (Asset)** | Serveurs MCP, `skprompt.txt` complexes | ESN (Background IP) | Vendor Lock-in | Négocier une licence d'utilisation perpétuelle ou une clause de réversibilité. |
| **Préférences Utilisateur** | User Rules (Global), Profils IDE | Développeur (Individu) | Perte de savoir (Shadow AI) | Interdire pour les règles critiques. Obliger la synchronisation vers Repo Code. |

---

## Conclusion

La généralisation des "secrets sauces" à l'ensemble des fichiers de configuration (`.agent`, `.workflows`, etc.) et leur dispersion entre différents dépôts (Client, ESN, Local) crée une nouvelle surface de complexité. Pour le donneur d'ordre comme pour l'ESN, la maturité ne se mesure plus seulement à la qualité du code, mais à la rigueur de la gestion de configuration de ces assistants virtuels. C'est là que réside désormais la véritable propriété intellectuelle opérationnelle.
