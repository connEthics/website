import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guide Pratique : Identité Souveraine avec ACA-Py | ConnEthics',
  description: 'Guide complet pour comprendre et implémenter l\'identité souveraine (SSI) avec ACA-Py. Scénarios pratiques, exemples de code et cas d\'usage entreprise.',
  keywords: 'identité souveraine, SSI, ACA-Py, Hyperledger Aries, verifiable credentials, DID, blockchain, privacy',
}

export default function SSIGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/insights" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            ← Retour aux insights
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Guide Pratique : Identité Souveraine avec ACA-Py
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprendre et implémenter l'identité auto-souveraine (SSI) avec Aries Cloud Agent Python. 
            Un guide complet de la théorie à la pratique.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
              ACA-Py
            </span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
              Hyperledger Aries
            </span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
              Self-Sovereign Identity
            </span>
            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
              Verifiable Credentials
            </span>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Table des matières
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-2">Fondements</h3>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li><a href="#introduction" className="hover:text-blue-600 dark:hover:text-blue-400">1. Introduction à l'identité souveraine</a></li>
                <li><a href="#architecture" className="hover:text-blue-600 dark:hover:text-blue-400">2. Architecture ACA-Py</a></li>
                <li><a href="#concepts" className="hover:text-blue-600 dark:hover:text-blue-400">3. Concepts clés</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white mb-2">Pratique</h3>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li><a href="#scenarios" className="hover:text-blue-600 dark:hover:text-blue-400">4. Scénarios pratiques</a></li>
                <li><a href="#implementation" className="hover:text-blue-600 dark:hover:text-blue-400">5. Implémentation</a></li>
                <li><a href="#enterprise" className="hover:text-blue-600 dark:hover:text-blue-400">6. Cas d'usage entreprise</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Introduction Section */}
          <section id="introduction" className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              1. Introduction à l'identité souveraine
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                L'identité auto-souveraine (Self-Sovereign Identity - SSI) représente un paradigme révolutionnaire 
                dans la gestion de l'identité numérique. Contrairement aux systèmes centralisés traditionnels, 
                elle permet aux individus et organisations de contrôler totalement leurs données d'identité.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Problèmes résolus par SSI</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Problèmes actuels</h4>
                  <ul className="text-red-700 dark:text-red-300 space-y-1">
                    <li>• Silos de données d'identité</li>
                    <li>• Risques de violation de données</li>
                    <li>• Manque de contrôle utilisateur</li>
                    <li>• Processus de vérification lents</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Solutions SSI</h4>
                  <ul className="text-green-700 dark:text-green-300 space-y-1">
                    <li>• Contrôle décentralisé</li>
                    <li>• Vérifications cryptographiques</li>
                    <li>• Portabilité des credentials</li>
                    <li>• Respect de la vie privée</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Architecture Section */}
          <section id="architecture" className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              2. Architecture ACA-Py
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                ACA-Py (Aries Cloud Agent Python) est l'implémentation de référence des protocoles 
                Hyperledger Aries pour la création d'agents SSI interopérables.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Composants principaux</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🏛️</div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">Ledger</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Blockchain publique pour DIDs et schémas
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">🤖</div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200">Agent</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Logiciel gérant les interactions SSI
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">Wallet</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Stockage sécurisé des credentials
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Flux d'interaction</h3>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <pre className="text-sm overflow-x-auto">
{`1. Connection Establishment
   Alice Agent ←→ Faber Agent
   
2. Credential Issuance
   Faber → Credential Offer → Alice
   Alice → Credential Request → Faber
   Faber → Credential → Alice
   
3. Proof Request & Verification
   Verifier → Proof Request → Alice
   Alice → Proof → Verifier
   Verifier validates proof`}
                </pre>
              </div>
            </div>
          </section>

          {/* Concepts Section */}
          <section id="concepts" className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              3. Concepts clés
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Identifiants Décentralisés (DIDs)
                </h3>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <code className="text-sm">
                    did:sov:WRfXPg8dantKVubE3HX8pw
                  </code>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                    Identifiant unique, vérifiable et décentralisé
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Verifiable Credentials
                </h3>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Attestations numériques cryptographiquement sécurisées 
                    et vérifiables sans contact avec l'émetteur
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Zero-Knowledge Proofs
                </h3>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Preuves permettant de vérifier des informations 
                    sans révéler les données sous-jacentes
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Schemas et Credential Definitions
                </h3>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Structures définissant le format et les règles 
                    de validation des credentials
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Scenarios Section */}
          <section id="scenarios" className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              4. Scénarios pratiques
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Scénario 1 : Émission d'un diplôme universitaire
                </h3>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">Étapes d'implémentation</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</div>
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white">Établissement de connexion</h5>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          L'université (Faber) et l'étudiant (Alice) établissent une connexion sécurisée
                        </p>
                        <div className="mt-2 bg-slate-100 dark:bg-slate-700 p-3 rounded text-xs">
                          <code>POST /connections/create-invitation</code>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</div>
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white">Création du schéma de diplôme</h5>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Définition des attributs : nom, université, diplôme, date, mention
                        </p>
                        <div className="mt-2 bg-slate-100 dark:bg-slate-700 p-3 rounded text-xs">
                          <code>POST /schemas</code>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</div>
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white">Émission du credential</h5>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          L'université émet le diplôme numérique vers le wallet de l'étudiant
                        </p>
                        <div className="mt-2 bg-slate-100 dark:bg-slate-700 p-3 rounded text-xs">
                          <code>POST /issue-credential-2.0/send-offer</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Scénario 2 : Vérification d'emploi
                </h3>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">Processus de vérification</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</div>
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white">Demande de preuve</h5>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          L'employeur demande une preuve de diplôme sans révéler les détails
                        </p>
                        <div className="mt-2 bg-slate-100 dark:bg-slate-700 p-3 rounded text-xs">
                          <code>POST /present-proof-2.0/send-request</code>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</div>
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white">Génération de preuve</h5>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          Alice génère une preuve zero-knowledge prouvant qu'elle a un diplôme
                        </p>
                        <div className="mt-2 bg-slate-100 dark:bg-slate-700 p-3 rounded text-xs">
                          <code>Proof: degree_type = "Master" AND year &gt; 2020</code>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</div>
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white">Validation cryptographique</h5>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          L'employeur vérifie la preuve sans accéder aux données personnelles
                        </p>
                        <div className="mt-2 bg-slate-100 dark:bg-slate-700 p-3 rounded text-xs">
                          <code>Verification: VALID ✓</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Section */}
          <section id="implementation" className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              5. Implémentation technique
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Configuration ACA-Py
                </h3>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`# Docker Compose pour environnement de développement
version: '3'
services:
  aca-py:
    image: bcgovimages/aries-cloudagent:py36-1.16-1_0.7.4
    ports:
      - "8020:8020"
      - "8021:8021"
    command: >
      aca-py start
        --inbound-transport http 0.0.0.0 8020
        --outbound-transport http
        --admin 0.0.0.0 8021
        --admin-insecure-mode
        --wallet-type indy
        --wallet-name alice_wallet
        --wallet-key alice_key
        --genesis-url http://test.bcovrin.vonx.io/genesis
        --endpoint http://localhost:8020
        --debug-connections
        --auto-accept-invites
        --auto-accept-requests`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  API Examples
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-slate-900 dark:text-white">Création d'invitation</h4>
                    <div className="bg-slate-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
                      <pre>
{`curl -X POST \\
  http://localhost:8021/connections/create-invitation \\
  -H 'Content-Type: application/json' \\
  -d '{
    "my_label": "Faber College",
    "accept": ["didcomm/aip1", "didcomm/aip2;env=rfc19"]
  }'`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-slate-900 dark:text-white">Émission de credential</h4>
                    <div className="bg-slate-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
                      <pre>
{`curl -X POST \\
  http://localhost:8021/issue-credential-2.0/send-offer \\
  -H 'Content-Type: application/json' \\
  -d '{
    "connection_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "credential_preview": {
      "attributes": [
        {"name": "name", "value": "Alice Smith"},
        {"name": "degree", "value": "Bachelor of Science"},
        {"name": "university", "value": "Faber College"}
      ]
    }
  }'`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Section */}
          <section id="enterprise" className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              6. Cas d'usage entreprise
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                    🏢 Gestion RH décentralisée
                  </h3>
                  <ul className="text-blue-800 dark:text-blue-200 space-y-2 text-sm">
                    <li>• Vérification automatique des qualifications</li>
                    <li>• Onboarding sécurisé et rapide</li>
                    <li>• Portabilité des certifications professionnelles</li>
                    <li>• Audit trail immutable</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
                    🎓 Éducation et certification
                  </h3>
                  <ul className="text-green-800 dark:text-green-200 space-y-2 text-sm">
                    <li>• Diplômes numériques infalsifiables</li>
                    <li>• Micro-certifications granulaires</li>
                    <li>• Reconnaissance inter-établissements</li>
                    <li>• Apprentissage tout au long de la vie</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
                    🏥 Santé et conformité
                  </h3>
                  <ul className="text-purple-800 dark:text-purple-200 space-y-2 text-sm">
                    <li>• Dossiers médicaux interopérables</li>
                    <li>• Consentement granulaire et révocable</li>
                    <li>• Compliance RGPD native</li>
                    <li>• Recherche médicale anonymisée</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900 dark:text-orange-100">
                    🔐 Sécurité et accès
                  </h3>
                  <ul className="text-orange-800 dark:text-orange-200 space-y-2 text-sm">
                    <li>• Authentification sans mot de passe</li>
                    <li>• Contrôle d'accès basé sur les attributs</li>
                    <li>• Zero-trust architecture</li>
                    <li>• Audit de sécurité automatisé</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
                💡 Avantages business quantifiables
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">-80%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Temps de vérification</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">-65%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Coûts administratifs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">+95%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Satisfaction utilisateur</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Prêt à implémenter l'identité souveraine dans votre organisation ?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            ConnEthics vous accompagne dans la mise en place de solutions SSI sur mesure, 
            de la stratégie à l'implémentation technique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Demander une consultation
            </Link>
            <Link 
              href="/consulting-services" 
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
