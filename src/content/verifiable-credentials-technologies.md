# Technologies des Verifiable Credentials

L'écosystème des Verifiable Credentials (VC) repose sur un ensemble de technologies et standards en constante évolution. Cette page présente les principales technologies qui façonnent l'avenir de l'identité numérique décentralisée.

## Technologies

### DIDComm
**Description:** Protocole de communication décentralisé pour l'échange sécurisé de messages entre identités décentralisées (DIDs).
**Organisme:** DIF - Decentralized Identity Foundation
**Lien principal:** https://identity.foundation/didcomm-messaging/spec/v2.1/
**Documentation:** https://identity.foundation/didcomm-messaging/spec/
**Exemple de code:**
```json
{
  "@type": "https://didcomm.org/basicmessage/2.0/message",
  "@id": "123456789abcdefghi",
  "~thread": { "thid": "123456789abcdefghi" },
  "sent_time": "2019-01-15 18:42:01Z",
  "content": "Your hovercraft is full of eels."
}
```
**Détails:** DIDComm permet aux agents d'identité de communiquer de manière sécurisée et privée sans dépendre d'infrastructures centralisées. Il supporte le chiffrement bout en bout, l'authentification mutuelle et la gestion des métadonnées de routage.

### OpenID4VC
**Description:** Extension d'OpenID Connect pour l'émission et la vérification de Verifiable Credentials.
**Organisme:** OpenID Foundation
**Lien principal:** https://openid.net/sg/openid4vc/
**Documentation:** https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html
**Exemple de code:**
```json
{
  "credential_issuer": "https://issuer.example.com",
  "credential_configurations_supported": {
    "UniversityDegreeCredential": {
      "format": "jwt_vc_json",
      "cryptographic_binding_methods_supported": ["did:key"],
      "credential_signing_alg_values_supported": ["ES256"]
    }
  }
}
```
**Détails:** OpenID4VC standardise les flux d'émission et de présentation de credentials dans l'écosystème OpenID, facilitant l'adoption par les systèmes existants tout en maintenant l'interopérabilité avec les standards W3C.

### eIDAS
**Description:** Réglementation européenne pour l'identification électronique et les services de confiance, incluant les wallets d'identité numérique.
**Organisme:** Commission Européenne
**Lien principal:** https://digital-strategy.ec.europa.eu/en/policies/eudi-regulation
**Documentation:** https://digital-strategy.ec.europa.eu/en/policies/discover-eidas
**Exemple de code:**
```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "EIDASCredential"],
  "issuer": "did:eidas:eu:123456789",
  "credentialSubject": {
    "id": "did:eidas:eu:citizen:987654321",
    "nationalId": "FR123456789",
    "assuranceLevel": "High"
  }
}
```
**Détails:** eIDAS 2.0 introduit le European Digital Identity Wallet, créant un cadre réglementaire pour l'identité numérique souveraine à l'échelle européenne avec reconnaissance mutuelle entre États membres.

### DID Indy
**Description:** Méthode DID pour le réseau Hyperledger Indy, optimisée pour la gestion d'identité souveraine à grande échelle.
**Organisme:** Hyperledger Foundation (Linux Foundation)
**Lien principal:** https://lf-hyperledger.atlassian.net/wiki/spaces/indy/overview
**Documentation:** https://hyperledger-indy.readthedocs.io/
**Exemple de code:**
```json
{
  "@context": "https://w3id.org/did/v1",
  "id": "did:indy:sovrin:WRfXPg8dantKVubE3HX8pw",
  "verificationMethod": [{
    "id": "did:indy:sovrin:WRfXPg8dantKVubE3HX8pw#key-1",
    "type": "Ed25519VerificationKey2018",
    "controller": "did:indy:sovrin:WRfXPg8dantKVubE3HX8pw",
    "publicKeyBase58": "H3C2AVvL..."
  }]
}
```
**Détails:** Indy utilise une blockchain permissionnée pour créer un registre décentralisé d'identifiants, avec des mécanismes avancés de révocation et de confidentialité via les zero-knowledge proofs.

### IETF SD-JWT
**Description:** Standard IETF pour les JSON Web Tokens avec divulgation sélective, permettant de révéler partiellement les informations d'un credential.
**Organisme:** Internet Engineering Task Force (IETF)
**Lien principal:** https://datatracker.ietf.org/doc/draft-ietf-oauth-selective-disclosure-jwt/
**Documentation:** https://tools.ietf.org/html/draft-ietf-oauth-selective-disclosure-jwt
**Exemple de code:**
```json
{
  "iss": "https://issuer.example.com",
  "sub": "did:example:123",
  "_sd": ["Qg_O64zqAxe412a108iroA", "Qg_O64zqAxe412a108iroB"],
  "_sd_alg": "sha-256",
  "degree": {
    "type": "BachelorDegree",
    "_sd": ["Qg_O64zqAxe412a108iroC"]
  }
}
```
**Détails:** SD-JWT permet aux détenteurs de credentials de révéler sélectivement des informations spécifiques sans exposer l'ensemble des données, répondant aux exigences de minimisation des données du RGPD.

### JSON-LD
**Description:** Format de données liées en JSON pour structurer et donner du sens aux credentials de manière interopérable.
**Organisme:** World Wide Web Consortium (W3C)
**Lien principal:** https://json-ld.org/
**Documentation:** https://www.w3.org/TR/json-ld11/
**Exemple de code:**
```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "type": ["VerifiableCredential", "UniversityDegreeCredential"],
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "degree": {
      "type": "BachelorDegree",
      "name": "Computer Science"
    }
  }
}
```
**Détails:** JSON-LD fournit la couche sémantique des Verifiable Credentials, permettant l'interopérabilité entre différents systèmes grâce à des vocabulaires standardisés et une compréhension machine du contenu.

### mdoc/mDL
**Description:** Standard ISO pour les documents d'identité mobiles et les permis de conduire numériques basés sur la technologie NFC et QR codes.
**Organisme:** Organisation Internationale de Normalisation (ISO)
**Lien principal:** https://www.iso.org/standard/69084.html
**Documentation:** https://www.iso.org/committee/45144.html
**Exemple de code:**
```cbor
{
  "version": "1.0",
  "documents": [{
    "docType": "org.iso.18013.5.1.mDL",
    "issuerSigned": {
      "nameSpaces": {
        "org.iso.18013.5.1": {
          "family_name": "Doe",
          "given_name": "John",
          "birth_date": "1990-01-01"
        }
      }
    }
  }]
}
```
**Détails:** mdoc utilise CBOR et des mécanismes cryptographiques avancés pour créer des documents d'identité physiques et numériques interopérables, avec support de la vérification hors ligne et de la divulgation sélective.

### W3C-VC
**Description:** Standard du W3C définissant le modèle de données et la syntaxe des Verifiable Credentials et Verifiable Presentations.
**Organisme:** World Wide Web Consortium (W3C)
**Lien principal:** https://www.w3.org/TR/vc-data-model-2.0/
**Documentation:** https://www.w3.org/TR/vc-data-model/
**Exemple de code:**
```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://www.w3.org/2018/credentials/examples/v1"
  ],
  "id": "http://example.edu/credentials/1872",
  "type": ["VerifiableCredential", "AlumniCredential"],
  "issuer": "https://example.edu/issuers/565049",
  "issuanceDate": "2023-01-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "alumniOf": "Example University"
  },
  "proof": {
    "type": "Ed25519Signature2020",
    "created": "2023-01-01T19:23:24Z",
    "verificationMethod": "https://example.edu/issuers/keys/1",
    "proofPurpose": "assertionMethod",
    "proofValue": "z58DAdFfa9SkqZMVPiQhDQ=="
  }
}
```
**Détails:** W3C-VC constitue la fondation de l'écosystème des credentials vérifiables, définissant les concepts fondamentaux d'émetteur, détenteur et vérificateur, ainsi que les mécanismes de preuve cryptographique.