import { Metadata } from 'next'
import VerifiableCredentialsTechPage from '@/components/VerifiableCredentialsTechPage'

export const metadata: Metadata = {
  title: 'Technologies des Verifiable Credentials | ConnEthics',
  description: 'Découvrez les principales technologies et standards qui façonnent l\'écosystème des Verifiable Credentials : DIDComm, OpenID4VC, eIDAS, W3C-VC et plus.',
  keywords: ['Verifiable Credentials', 'DIDComm', 'OpenID4VC', 'eIDAS', 'W3C-VC', 'JSON-LD', 'SD-JWT', 'mdoc', 'DID Indy', 'identité numérique'],
}

export default function Page() {
  return <VerifiableCredentialsTechPage />
}