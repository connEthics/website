import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide Complet : Identité Souveraine (SSI) avec ACA-Py',
  description: 'Documentation complète des scénarios d\'identité souveraine avec ACA-Py, incluant des exemples pratiques et des cas d\'usage entreprise.',
  keywords: ['SSI', 'ACA-Py', 'Identité Souveraine', 'Blockchain', 'Hyperledger Indy', 'ConnEthics'],
}

export default function SSIGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guide Complet : Identité Souveraine (SSI) avec ACA-Py
          </h1>
          <p className="text-xl text-gray-600">
            Documentation complète des scénarios d'identité souveraine avec exemples pratiques
          </p>
        </header>

        <article className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction à l'Identité Souveraine</h2>
            <p className="text-gray-700 mb-6">
              L'<strong>Identité Souveraine (Self-Sovereign Identity - SSI)</strong> représente une révolution dans la gestion des identités numériques. 
              Ce paradigme permet aux individus et organisations de contrôler totalement leurs données d'identité sans dépendre d'autorités centralisées.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Concepts Fondamentaux</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">1. Les Acteurs de l'Écosystème SSI</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Émetteur (Issuer)</strong> : Entité qui délivre des credentials vérifiables</li>
                  <li><strong>Détenteur (Holder)</strong> : Individu ou entité qui possède et contrôle ses credentials</li>
                  <li><strong>Vérificateur (Verifier)</strong> : Entité qui vérifie l'authenticité des credentials</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">2. Composants Technologiques</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>DID</strong> : Identifiant unique décentralisé</li>
                  <li><strong>Verifiable Credentials</strong> : Credentials cryptographiquement sécurisés</li>
                  <li><strong>Hyperledger Indy</strong> : Blockchain spécialisée pour l'identité</li>
                  <li><strong>ACA-Py</strong> : Agent Aries Cloud Agent Python</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Architecture de Test</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="text-sm text-gray-800 font-mono">
{`┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Agent Faber   │    │   BCovrin Test  │    │   Agent Alice   │
│   (Émetteur)    │◄──►│     Ledger      │◄──►│  (Détenteur)    │
│   Port: 8020    │    │  (Blockchain)   │    │   Port: 8030    │
└─────────────────┘    └─────────────────┘    └─────────────────┘`}
              </pre>
            </div>
          </section>

          {/* Scénarios */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Scénarios Pratiques Documentés</h2>
            
            {/* Scénario 1 */}
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Scénario 1 : Établissement de Connexion</h3>
              <p className="text-gray-700 mb-4">
                <strong>Objectif :</strong> Démontrer comment deux agents établissent une connexion sécurisée via le protocole DIDComm.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Commandes de Démarrage</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4">
                <pre className="text-sm">
{`# Agent Faber (Émetteur)
python3 run_demo faber

# Agent Alice (Détenteur) - dans un autre terminal
python3 run_demo alice`}
                </pre>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Exemple d'Invitation Générée</h4>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <pre className="text-sm text-gray-800 overflow-x-auto">
{`{
  "@type": "https://didcomm.org/out-of-band/1.1/invitation",
  "@id": "a6edf0a9-98b6-49d4-b98f-7e3630ccf813",
  "label": "faber.agent",
  "handshake_protocols": ["https://didcomm.org/didexchange/1.1"],
  "services": [{
    "id": "#inline",
    "type": "did-communication",
    "recipientKeys": ["did:key:z6MkuRE5xu1L1M1FWndJGzKwQR7RoPvPk5gvWKDY3j4H7Vrg"],
    "serviceEndpoint": "http://host.docker.internal:8020"
  }]
}`}
                </pre>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Points Clés</h5>
                <ul className="text-green-700 space-y-1">
                  <li>✅ <strong>Sécurité</strong> : Chaque invitation contient des clés cryptographiques uniques</li>
                  <li>✅ <strong>Standards</strong> : Utilise les protocoles W3C et Hyperledger Aries</li>
                  <li>✅ <strong>Interopérabilité</strong> : Compatible avec tous les agents Aries</li>
                </ul>
              </div>
            </div>

            {/* Scénario 2 */}
            <div className="border-l-4 border-purple-500 pl-6 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Scénario 2 : Création et Publication de Schéma</h3>
              <p className="text-gray-700 mb-4">
                <strong>Objectif :</strong> Démontrer la création d'un schéma de credential sur la blockchain Hyperledger Indy.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Appel API</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4">
                <pre className="text-sm overflow-x-auto">
{`curl -X POST http://localhost:8021/schemas \\
  -H "Content-Type: application/json" \\
  -d '{
    "schema_name": "connethics_employee_schema",
    "schema_version": "1.0",
    "attributes": ["employee_id", "full_name", "department", "role", "clearance_level", "start_date"]
  }'`}
                </pre>
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Réponse Attendue</h4>
              <div className="bg-gray-100 p-4 rounded-lg">
                <pre className="text-sm text-gray-800 overflow-x-auto">
{`{
  "sent": {
    "schema_id": "4NWTyx8UoWDZMU6X8fwWca:2:connethics_employee_schema:1.0",
    "schema": {
      "ver": "1.0",
      "id": "4NWTyx8UoWDZMU6X8fwWca:2:connethics_employee_schema:1.0",
      "name": "connethics_employee_schema",
      "version": "1.0",
      "attrNames": ["employee_id", "full_name", "department", "role", "clearance_level", "start_date"],
      "seqNo": 2883975
    }
  }
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* APIs Testées */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">APIs et Commandes Testées</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Vérification du Statut</h3>
                <div className="bg-white p-3 rounded border">
                  <pre className="text-sm text-gray-800">
{`# Statut Agent Faber
curl -s http://localhost:8021/status | jq

# Statut Agent Alice  
curl -s http://localhost:8031/status | jq`}
                  </pre>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Gestion des Connexions</h3>
                <div className="bg-white p-3 rounded border">
                  <pre className="text-sm text-gray-800">
{`# Lister les connexions actives
curl -s http://localhost:8021/connections | jq

# Créer une nouvelle invitation
curl -X POST http://localhost:8021/out-of-band/create-invitation | jq`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Cas d'Usage */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cas d'Usage Entreprise</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">1. Onboarding Employés ConnEthics</h3>
                <p className="text-gray-700 mb-3"><strong>Problématique :</strong> Processus d'embauche long et répétitif</p>
                <div className="text-gray-700">
                  <strong>Solution SSI :</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Credential de formation certifiée</li>
                    <li>Vérification automatique des compétences</li>
                    <li>Onboarding accéléré et sécurisé</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">2. Compliance et Audit</h3>
                <p className="text-gray-700 mb-3"><strong>Problématique :</strong> Traçabilité des accès et permissions</p>
                <div className="text-gray-700">
                  <strong>Solution SSI :</strong>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Credentials d'habilitation traçables</li>
                    <li>Audit trail cryptographique</li>
                    <li>Révocation instantanée des accès</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusion et Perspectives</h2>
            <p className="text-gray-700 mb-6">
              L'identité souveraine avec ACA-Py offre une base solide pour les applications d'entreprise modernes. 
              Les scénarios documentés démontrent la viabilité technique et les avantages pratiques de cette approche.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">Prochaines Étapes</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>□ Formation équipes techniques</li>
                <li>□ Identification cas d'usage prioritaires</li>
                <li>□ Développement MVP</li>
                <li>□ Intégration systèmes existants</li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t pt-6 text-center text-gray-500">
            <p>Documentation générée le 2 août 2025 - Version 1.0</p>
            <p>© 2025 ConnEthics - Guide SSI/ACA-Py</p>
          </footer>
        </article>
      </div>
    </div>
  )
}
