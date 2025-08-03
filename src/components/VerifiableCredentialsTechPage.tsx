'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Collapse, 
  IconButton, 
  Chip,
  Stack,
  TextField,
  InputAdornment
} from '@mui/material'
import { 
  ExpandMore as ExpandMoreIcon, 
  Search as SearchIcon,
  Link as LinkIcon,
  Code as CodeIcon
} from '@mui/icons-material'
import { ConnEthicsHero, ConnEthicsButton } from '@/components/mui'
import CodeExample from '@/components/CodeExample'

interface Technology {
  id: string
  name: string
  description: string
  organisme: string
  lienPrincipal: string
  documentation: string
  exempleCode: string
  codeLanguage: string
  details: string
}

// Parse the markdown content to extract technologies
function parseTechnologies(): Technology[] {
  // This would normally parse the markdown file, but for now we'll define the data directly
  return [
    {
      id: 'didcomm',
      name: 'DIDComm',
      description: 'Protocole de communication décentralisé pour l\'échange sécurisé de messages entre identités décentralisées (DIDs).',
      organisme: 'DIF - Decentralized Identity Foundation',
      lienPrincipal: 'https://identity.foundation/didcomm-messaging/spec/v2.1/',
      documentation: 'https://identity.foundation/didcomm-messaging/spec/',
      exempleCode: `{
  "@type": "https://didcomm.org/basicmessage/2.0/message",
  "@id": "123456789abcdefghi",
  "~thread": { "thid": "123456789abcdefghi" },
  "sent_time": "2019-01-15 18:42:01Z",
  "content": "Your hovercraft is full of eels."
}`,
      codeLanguage: 'json',
      details: 'DIDComm permet aux agents d\'identité de communiquer de manière sécurisée et privée sans dépendre d\'infrastructures centralisées. Il supporte le chiffrement bout en bout, l\'authentification mutuelle et la gestion des métadonnées de routage.'
    },
    {
      id: 'openid4vc',
      name: 'OpenID4VC',
      description: 'Extension d\'OpenID Connect pour l\'émission et la vérification de Verifiable Credentials.',
      organisme: 'OpenID Foundation',
      lienPrincipal: 'https://openid.net/sg/openid4vc/',
      documentation: 'https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html',
      exempleCode: `{
  "credential_issuer": "https://issuer.example.com",
  "credential_configurations_supported": {
    "UniversityDegreeCredential": {
      "format": "jwt_vc_json",
      "cryptographic_binding_methods_supported": ["did:key"],
      "credential_signing_alg_values_supported": ["ES256"]
    }
  }
}`,
      codeLanguage: 'json',
      details: 'OpenID4VC standardise les flux d\'émission et de présentation de credentials dans l\'écosystème OpenID, facilitant l\'adoption par les systèmes existants tout en maintenant l\'interopérabilité avec les standards W3C.'
    },
    {
      id: 'eidas',
      name: 'eIDAS',
      description: 'Réglementation européenne pour l\'identification électronique et les services de confiance, incluant les wallets d\'identité numérique.',
      organisme: 'Commission Européenne',
      lienPrincipal: 'https://digital-strategy.ec.europa.eu/en/policies/eudi-regulation',
      documentation: 'https://ec.europa.eu/digital-single-market/en/trust-services-and-electronic-identification',
      exempleCode: `{
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  "type": ["VerifiableCredential", "EIDASCredential"],
  "issuer": "did:eidas:eu:123456789",
  "credentialSubject": {
    "id": "did:eidas:eu:citizen:987654321",
    "nationalId": "FR123456789",
    "assuranceLevel": "High"
  }
}`,
      codeLanguage: 'json',
      details: 'eIDAS 2.0 introduit le European Digital Identity Wallet, créant un cadre réglementaire pour l\'identité numérique souveraine à l\'échelle européenne avec reconnaissance mutuelle entre États membres.'
    },
    {
      id: 'did-indy',
      name: 'DID Indy',
      description: 'Méthode DID pour le réseau Hyperledger Indy, optimisée pour la gestion d\'identité souveraine à grande échelle.',
      organisme: 'Hyperledger Foundation (Linux Foundation)',
      lienPrincipal: 'https://lf-hyperledger.atlassian.net/wiki/spaces/indy/overview',
      documentation: 'https://hyperledger-indy.readthedocs.io/',
      exempleCode: `{
  "@context": "https://w3id.org/did/v1",
  "id": "did:indy:sovrin:WRfXPg8dantKVubE3HX8pw",
  "verificationMethod": [{
    "id": "did:indy:sovrin:WRfXPg8dantKVubE3HX8pw#key-1",
    "type": "Ed25519VerificationKey2018",
    "controller": "did:indy:sovrin:WRfXPg8dantKVubE3HX8pw",
    "publicKeyBase58": "H3C2AVvL..."
  }]
}`,
      codeLanguage: 'json',
      details: 'Indy utilise une blockchain permissionnée pour créer un registre décentralisé d\'identifiants, avec des mécanismes avancés de révocation et de confidentialité via les zero-knowledge proofs.'
    },
    {
      id: 'sd-jwt',
      name: 'IETF SD-JWT',
      description: 'Standard IETF pour les JSON Web Tokens avec divulgation sélective, permettant de révéler partiellement les informations d\'un credential.',
      organisme: 'Internet Engineering Task Force (IETF)',
      lienPrincipal: 'https://datatracker.ietf.org/doc/draft-ietf-oauth-selective-disclosure-jwt/',
      documentation: 'https://tools.ietf.org/html/draft-ietf-oauth-selective-disclosure-jwt',
      exempleCode: `{
  "iss": "https://issuer.example.com",
  "sub": "did:example:123",
  "_sd": ["Qg_O64zqAxe412a108iroA", "Qg_O64zqAxe412a108iroB"],
  "_sd_alg": "sha-256",
  "degree": {
    "type": "BachelorDegree",
    "_sd": ["Qg_O64zqAxe412a108iroC"]
  }
}`,
      codeLanguage: 'json',
      details: 'SD-JWT permet aux détenteurs de credentials de révéler sélectivement des informations spécifiques sans exposer l\'ensemble des données, répondant aux exigences de minimisation des données du RGPD.'
    },
    {
      id: 'json-ld',
      name: 'JSON-LD',
      description: 'Format de données liées en JSON pour structurer et donner du sens aux credentials de manière interopérable.',
      organisme: 'World Wide Web Consortium (W3C)',
      lienPrincipal: 'https://json-ld.org/',
      documentation: 'https://www.w3.org/TR/json-ld11/',
      exempleCode: `{
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
}`,
      codeLanguage: 'json',
      details: 'JSON-LD fournit la couche sémantique des Verifiable Credentials, permettant l\'interopérabilité entre différents systèmes grâce à des vocabulaires standardisés et une compréhension machine du contenu.'
    },
    {
      id: 'mdoc',
      name: 'mdoc/mDL',
      description: 'Standard ISO pour les documents d\'identité mobiles et les permis de conduire numériques basés sur la technologie NFC et QR codes.',
      organisme: 'Organisation Internationale de Normalisation (ISO)',
      lienPrincipal: 'https://www.iso.org/standard/69084.html',
      documentation: 'https://www.iso.org/committee/45144.html',
      exempleCode: `{
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
}`,
      codeLanguage: 'json',
      details: 'mdoc utilise CBOR et des mécanismes cryptographiques avancés pour créer des documents d\'identité physiques et numériques interopérables, avec support de la vérification hors ligne et de la divulgation sélective.'
    },
    {
      id: 'w3c-vc',
      name: 'W3C-VC',
      description: 'Standard du W3C définissant le modèle de données et la syntaxe des Verifiable Credentials et Verifiable Presentations.',
      organisme: 'World Wide Web Consortium (W3C)',
      lienPrincipal: 'https://www.w3.org/TR/vc-data-model-2.0/',
      documentation: 'https://www.w3.org/TR/vc-data-model/',
      exempleCode: `{
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
}`,
      codeLanguage: 'json',
      details: 'W3C-VC constitue la fondation de l\'écosystème des credentials vérifiables, définissant les concepts fondamentaux d\'émetteur, détenteur et vérificateur, ainsi que les mécanismes de preuve cryptographique.'
    }
  ]
}

function TechnologyCard({ technology, expanded, onToggle }: { 
  technology: Technology; 
  expanded: boolean; 
  onToggle: () => void;
}) {
  return (
    <Card 
      sx={{ 
        height: '100%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, color: 'primary.main' }}>
            {technology.name}
          </Typography>
          <IconButton 
            onClick={(e) => {
              e.stopPropagation()
              onToggle()
            }}
            sx={{ 
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Stack>
        
        <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          {technology.description}
        </Typography>
        
        <Chip
          label={technology.organisme}
          size="small"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <IconButton
            size="small"
            component="a"
            href={technology.lienPrincipal}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary.main' }}
          >
            <LinkIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            component="a"
            href={technology.documentation}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'secondary.main' }}
          >
            <CodeIcon fontSize="small" />
          </IconButton>
        </Stack>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Détails
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
              {technology.details}
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Exemple de code
            </Typography>
            <CodeExample 
              code={technology.exempleCode} 
              language={technology.codeLanguage}
            />
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  )
}

export default function VerifiableCredentialsTechPage() {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  
  const technologies = useMemo(() => parseTechnologies(), [])
  
  const filteredTechnologies = useMemo(() => {
    if (!searchTerm) return technologies
    return technologies.filter(tech => 
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.organisme.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [technologies, searchTerm])
  
  const handleToggleExpand = (id: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }
  
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation */}
      <Box sx={{ p: 3 }}>
        <Link 
          href="/insights" 
          style={{ 
            color: 'inherit', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          <Typography variant="body1" sx={{ color: 'primary.main', '&:hover': { color: 'primary.dark' } }}>
            ← Retour aux insights
          </Typography>
        </Link>
      </Box>

      {/* Hero Section */}
      <ConnEthicsHero
        variant="default"
        title="Technologies des Titres de Compétences Vérifiables"
        subtitle="L'écosystème technologique des Verifiable Credentials"
        description="Découvrez les principales technologies et standards qui façonnent l'avenir de l'identité numérique décentralisée et de la vérification des compétences."
      />

      {/* Content Section */}
      <Box sx={{ py: 4, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          {/* Introduction */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              L&apos;écosystème des Verifiable Credentials repose sur un ensemble de technologies et standards en constante évolution. 
              Cette page présente les principales technologies qui façonnent l&apos;avenir de l&apos;identité numérique décentralisée 
              et de la vérification des compétences.
            </Typography>
          </Box>

          {/* Search */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <TextField
              placeholder="Rechercher une technologie..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ maxWidth: 400, width: '100%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Technologies Grid */}
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {filteredTechnologies.map((technology) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={technology.id}>
                <TechnologyCard
                  technology={technology}
                  expanded={expandedCards.has(technology.id)}
                  onToggle={() => handleToggleExpand(technology.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', p: 6 }}>
            <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
              Besoin d&apos;accompagnement sur ces technologies ?
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.100', mb: 4, maxWidth: '600px', mx: 'auto' }}>
              ConnEthics vous accompagne dans l&apos;implémentation et l&apos;intégration des technologies 
              de Verifiable Credentials adaptées à vos besoins métier.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ maxWidth: '400px', mx: 'auto' }}>
              <ConnEthicsButton
                variant="primary"
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                Nous contacter
              </ConnEthicsButton>
              <ConnEthicsButton
                variant="outline"
                size="large"
                href="/services"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'primary.main'
                  }
                }}
              >
                Nos services
              </ConnEthicsButton>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}