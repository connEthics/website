import { Metadata } from "next"
import Link from "next/link"
import AdvancedMarkdownRenderer from "@/components/AdvancedMarkdownRenderer"

export const metadata: Metadata = {
  title: "Guide Technique ACA-Py : Architecture, Code et Retours d'Expérience | ConnEthics",
  description: "Guide pratique pour développeurs et architectes : comprendre l'architecture d'ACA-Py, exemples de code fonctionnels et leçons apprises sur le terrain.",
  keywords: "ACA-Py, Hyperledger Aries, développement, architecture, webhooks, contrôleur, identité souveraine, guide technique, Docker",
}

// Article content embedded directly for better performance
const articleContent = `# Hyperledger Aries Cloud Agent Python (ACA-Py) : Guide Technique pour Développeurs et Architectes

## Guide Technique d'ACA-Py : Architecture, Code et Retours d'Expérience

Cet article n'est pas une simple introduction. Il s'adresse aux développeurs et architectes qui veulent comprendre le **"comment"** derrière Hyperledger Aries Cloud Agent Python (ACA-Py). Nous allons plonger dans son architecture, fournir des exemples de code fonctionnels pour démarrer, et partager des leçons apprises sur le terrain pour vous éviter les pièges courants.

### L'Architecture Fondamentale : Le Modèle Contrôleur

Pour maîtriser ACA-Py, il faut d'abord comprendre sa philosophie : la séparation stricte des préoccupations. ACA-Py n'est pas un framework monolithique. C'est un **moteur de protocole** spécialisé. Votre logique métier vit ailleurs, dans une application que l'on nomme le **contrôleur**.

Imaginez-le ainsi :

  * **ACA-Py (Le Moteur)** : C'est une boîte noire qui gère toute la complexité de la cryptographie, des protocoles de communication sécurisée (DIDComm) et de la gestion d'état des interactions. Il fait une chose et il la fait bien.
  * **Le Contrôleur (Votre Cerveau Applicatif)** : C'est votre application. Elle décide *quand* émettre un diplôme, *quelles* informations vérifier, ou *comment* intégrer ces actions à votre base de données existante.

La communication entre les deux est simple et standardisée :

\`\`\`
[Votre Contrôleur] <---- API REST ----> [Agent ACA-Py]
                  ---- Webhooks ---->
\`\`\`

1.  **Commandes (Contrôleur -\\> ACA-Py)** : Votre contrôleur donne des ordres à l'agent en effectuant des appels à son **API REST d'administration**. Par exemple, \`POST /connections/create-invitation\`.
2.  **Événements (ACA-Py -\\> Contrôleur)** : Quand un événement se produit (ex: un autre agent accepte votre invitation), ACA-Py notifie votre contrôleur en envoyant une charge utile JSON (un **webhook**) à une URL que vous avez définie.

La conséquence de cette architecture est la "killer feature" d'ACA-Py : votre contrôleur peut être écrit dans **n'importe quel langage** capable de faire des appels HTTP (Node.js, C#, Java, Go, etc.), vous permettant de capitaliser sur les compétences de votre équipe.

### Mise en Pratique : Démarrage Rapide avec Docker

La théorie c'est bien, le code c'est mieux. Le moyen le plus simple de démarrer est avec \`docker-compose\`. Créez un dossier de projet avec les deux fichiers suivants.

#### 1\\. \`docker-compose.yml\`

Ce fichier définit deux services : l'agent ACA-Py lui-même et un contrôleur minimaliste en Python/Flask qui recevra les webhooks.

\`\`\`yaml
version: "3.6"
services:
  acapy_agent:
    image: ghcr.io/openwallet-foundation/aries-cloudagent-python:1.1.0-py3.9
    ports:
      - "8030:8030" # Port d'écoute pour les communications DIDComm
      - "8031:8031" # Port pour l'API REST d'administration
    entrypoint: /bin/bash
    command:
      - -c
      - |
        sleep 1; \\
        aca-py start \\
          --auto-provision \\
          --inbound-transport http 0.0.0.0 8030 \\
          --outbound-transport http \\
          --admin 0.0.0.0 8031 \\
          --admin-api-key my-super-secret-admin-key \\
          --webhook-url "http://controller_app:5001/webhooks" \\
          --auto-ping-connection \\
          --auto-respond-credential-proposal \\
          --auto-respond-presentation-proposal \\
          --log-level "info" \\
          --genesis-url "http://test.bcovrin.vonx.io/genesis" \\
          --wallet-type "askar" \\
          --wallet-name "my-agent-wallet" \\
          --wallet-key "my-super-secret-wallet-key"
    networks:
      - acapy_net

  controller_app:
    build: .
    ports:
      - "5001:5001"
    networks:
      - acapy_net

networks:
  acapy_net:
\`\`\`

#### 2\\. \`controller.py\` et \`Dockerfile\`

Créez un \`Dockerfile\` simple pour notre contrôleur :

\`\`\`dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY controller.py .
CMD ["flask", "--app", "controller", "run", "--host=0.0.0.0", "--port=5001"]
\`\`\`

Et un fichier \`requirements.txt\` :

\`\`\`
Flask==2.2.2
requests==2.28.1
\`\`\`

Enfin, le code du contrôleur \`controller.py\` :

\`\`\`python
import os
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

ACAPY_ADMIN_URL = os.environ.get("ACAPY_ADMIN_URL", "http://acapy_agent:8031")
ACAPY_ADMIN_KEY = os.environ.get("ACAPY_ADMIN_KEY", "my-super-secret-admin-key")

@app.route("/webhooks/topic/<topic>/", methods=["POST"])
def webhooks_handler(topic):
    """ Handler générique pour tous les webhooks d'ACA-Py. """
    payload = request.json
    print(f"--- WEBHOOK REÇU ---")
    print(f"Topic: {topic}")
    print("Payload:")
    print(payload)
    print("--------------------")
    
    # Leçon Apprise : Votre contrôleur doit être un automate.
    # C'est ici que vous réagissez aux états. Par exemple :
    if topic == "connections" and payload.get("state") == "active":
        connection_id = payload.get("connection_id")
        print(f"Connexion {connection_id} est maintenant active !")
        # Vous pouvez maintenant déclencher la prochaine étape de votre logique métier.
        
    return jsonify({}), 200

@app.route("/create-invitation", methods=["GET"])
def create_invitation():
    """ Endpoint pour commander à ACA-Py de créer une invitation. """
    try:
        headers = {"X-API-Key": ACAPY_ADMIN_KEY}
        response = requests.post(f"{ACAPY_ADMIN_URL}/connections/create-invitation", headers=headers, json={})
        response.raise_for_status()
        
        data = response.json()
        print("Invitation créée :", data)
        return jsonify({
            "connection_id": data.get("connection_id"),
            "invitation_url": data.get("invitation_url"),
        })
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
\`\`\`

**Lancez le tout avec \`docker-compose up --build\`.** Vous avez maintenant un agent ACA-Py fonctionnel et un contrôleur prêt à interagir avec lui.

### Leçon N°1 : Gérer les Connexions

Le flux de base est d'établir une connexion sécurisée avec un autre agent.

**Étape 1 : Créer l'invitation**

Ouvrez un autre terminal et utilisez \`curl\` pour demander à votre contrôleur de créer une invitation :

\`\`\`bash
curl http://localhost:5001/create-invitation
\`\`\`

Votre contrôleur appellera l'API d'ACA-Py et vous affichera en retour une \`connection_id\` et une \`invitation_url\`. Dans le terminal de Docker, vous verrez le log "Invitation créée".

**Étape 2 : Analyser les Webhooks**

Quand un autre agent scanne cette invitation et se connecte, votre contrôleur reçoit une série de webhooks. Dans votre terminal Docker, vous verrez les logs de notre \`webhooks_handler\` pour chaque étape : \`request\`, \`response\`, et finalement \`active\`.

**Leçon Apprise :** Le cœur d'un contrôleur est un **automate (state machine)**. L'état de chaque objet (connexion, émission de VC...) n'est pas stocké chez vous, mais dans ACA-Py. Vous réagissez simplement aux changements d'état notifiés par les webhooks. Le \`connection_id\` est la clé qui relie ces événements asynchrones.

### Leçon N°2 : Émettre un Titre de Compétences (Verifiable Credential)

Une fois une connexion \`active\`, vous pouvez émettre un VC.

**Prérequis :** Pour émettre un VC de type \`AnonCreds\` (le plus courant avec Indy/Aries), l'émetteur doit avoir préalablement publié sur un registre distribué (ledger) :

1.  Son **DID public**.
2.  Un **Schéma** (la structure des données, ex: \`{"prénom", "nom", "diplôme"}\`).
3.  Une **Définition de Titre de Compétences (CredDef)** (qui lie le schéma à la clé de l'émetteur).

Ces étapes sont complexes et hors du cadre de ce démarrage rapide, mais elles sont un prérequis indispensable en production.

**Étape 1 : Proposer le Titre de Compétences**

Modifiez votre contrôleur pour ajouter une fonction qui, pour une connexion active, propose un VC.

\`\`\`python
# Dans votre controller.py

@app.route("/issue-credential/<connection_id>", methods=["POST"])
def issue_credential(connection_id):
    """ Propose et émet un VC à une connexion active. """
    try:
        headers = {"X-API-Key": ACAPY_ADMIN_KEY}
        
        # Le format est celui de l'Aries Interop Profile 2.0
        payload = {
            "connection_id": connection_id,
            "comment": "Proposition de diplôme de Master",
            "auto_remove": True,
            "credential_preview": {
                "@type": "issue-credential/2.0/credential-preview",
                "attributes": [
                    {"name": "prenom", "value": "Alice"},
                    {"name": "nom", "value": "Martin"},
                    {"name": "diplome", "value": "Master en Informatique"}
                ]
            },
            "filter": {"indy": {}} # Adapter au type de VC (ici, Indy/AnonCreds)
        }
        
        response = requests.post(f"{ACAPY_ADMIN_URL}/issue-credential-2.0/send-proposal", headers=headers, json=payload)
        response.raise_for_status()
        
        return response.json()
        
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500
\`\`\`

**Étape 2 : Suivre le Flux par Webhooks**

Après avoir appelé \`POST /issue-credential/VOTRE_CONNECTION_ID_ACTIVE\`, observez vos logs de webhooks. Vous verrez un flux d'événements avec le topic \`issue_credential_2_0\` dont l'état passera par \`proposal-sent\`, \`offer-sent\`, \`request-received\`, \`credential-issued\`, et enfin \`done\`.

**Leçon Apprise :** L'émission est **asynchrone**. Ne considérez jamais l'appel API initial comme une confirmation d'émission. Fiez-vous uniquement au webhook final avec \`state: "done"\` pour confirmer que le VC a bien été émis et accepté par le détenteur.

### Retours d'Expérience Essentiels

1.  **La Sécurité de l'API Admin est Critique.** Le port de l'API admin (\`8031\` dans notre exemple) ne doit **JAMAIS** être exposé sur Internet. Il ne doit être accessible que par votre contrôleur sur un réseau privé. Utilisez toujours une clé d'API (\`--admin-api-key\`) longue et complexe.

2.  **Les Webhooks Peuvent Échouer (et être Renvoyés).** Votre endpoint de webhook doit être **idempotent**. Si votre contrôleur est lent à répondre, ACA-Py pourrait renvoyer le même webhook. Assurez-vous que traiter deux fois le même événement (ex: \`state: "active"\`) ne corrompt pas l'état de votre application.

3.  **Le Débogage est Votre Meilleur Ami.** Le premier réflexe en cas de problème est de regarder les logs de votre \`webhooks_handler\`. Le deuxième est d'utiliser l'interface Swagger/OpenAPI d'ACA-Py, disponible sur \`http://localhost:8031/api/docs\`. C'est un outil inestimable pour explorer les endpoints et tester des requêtes manuellement.

4.  **Le Multi-Tenancy est Puissant mais Complexe.** ACA-Py peut gérer des milliers de "sous-portefeuilles" avec une seule instance (multi-tenancy). C'est idéal pour les modèles SaaS. La principale difficulté est de savoir à quel "locataire" (tenant) un webhook entrant est destiné. La solution standard est d'utiliser des webhooks JWT qui contiennent l'ID du locataire dans le token signé.

5.  **Ne Réinventez pas le Contrôleur.** Des frameworks de contrôleurs existent déjà dans plusieurs langages (ex: \`acapy-python-controller\` pour Python, des initiatives en .NET et Node.js). Ils gèrent pour vous la communication de bas niveau, la gestion des webhooks et le mapping des événements, vous permettant de vous concentrer directement sur votre logique métier. Explorez-les avant de partir de zéro.

### Conclusion

ACA-Py est un composant d'infrastructure incroyablement puissant qui abstrait une énorme complexité. Le maîtriser revient à maîtriser son modèle asynchrone basé sur les webhooks. En structurant votre contrôleur comme un automate piloté par les événements, en sécurisant vos endpoints et en utilisant les outils de la communauté, vous serez bien armé pour construire la prochaine génération d'applications basées sur la confiance numérique.`

export default function GuideTechniqueACApy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 force-light-mode">
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/insights" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Retour aux insights
          </Link>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Guide Technique ACA-Py pour Développeurs
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Architecture, exemples de code et retours d&apos;expérience pratiques pour maîtriser Hyperledger Aries Cloud Agent Python.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                ACA-Py
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Développement
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Architecture
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Guide Pratique
              </span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg prose-slate max-w-none">
            <AdvancedMarkdownRenderer content={articleContent} />
          </article>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-sm text-slate-600">
                  Publié le {new Date().toLocaleDateString('fr-FR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Par l&apos;équipe ConnEthics
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Discuter de votre projet ACA-Py
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
