import { Metadata } from "next"
import Link from "next/link"
import ArticleRenderer from "@/components/ArticleRenderer"
import { readFileSync } from "fs"
import { join } from "path"

export const metadata: Metadata = {
  title: "ACA-Py : Le Moteur Open-Source pour l'Avenir de l'Identité Numérique | ConnEthics",
  description: "Whitepaper complet sur ACA-Py : architecture, fonctionnalités avancées, cas d'usage Infosys et guide pratique pour bâtir l'identité décentralisée.",
  keywords: "ACA-Py, identité souveraine, SSI, Hyperledger Aries, verifiable credentials, DID, OpenWallet Foundation, identité décentralisée",
}

// Read the markdown content at build time
function getArticleContent() {
  try {
    const filePath = join(process.cwd(), "src/app/insights/identite-souveraine-aca-py-guide/ARTICLE_ACA_PY_2025.md")
    return readFileSync(filePath, "utf8")
  } catch (error) {
    console.error("Error reading article file:", error)
    return `# ACA-Py : Le Moteur Open-Source pour l'Avenir de l'Identité Numérique

## Erreur de chargement

Nous ne parvenons pas à charger le contenu de l'article. Veuillez réessayer plus tard.

Le fichier markdown devrait se trouver dans le répertoire de l'article sous le nom ARTICLE_ACA_PY_2025.md.`
  }
}

export default function ACAyGuide() {
  const content = getArticleContent()
  
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

        <ArticleRenderer 
          content={content}
          title="ACA-Py : Le Moteur Open-Source pour l'Avenir de l'Identité Numérique"
          description="Découvrez comment Hyperledger Aries Cloud Agent Python révolutionne l'identité décentralisée. De l'architecture technique aux déploiements à grande échelle : le guide complet pour bâtir l'identité de demain."
          tags={["ACA-Py", "OpenWallet Foundation", "Self-Sovereign Identity", "Architecture Décentralisée", "Cas d'Usage Entreprise"]}
          targetAudience="CTO, Architectes Techniques, Développeurs Blockchain"
          keyTakeaways={[
            "Architecture modulaire d'ACA-Py et ses composants clés",
            "Intégration avec Hyperledger Indy et autres ledgers",
            "Déploiement et orchestration d'agents d'identité",
            "Protocoles DIDComm pour la communication sécurisée"
          ]}
          difficulty="Advanced"
        />
      </div>
    </div>
  )
}
