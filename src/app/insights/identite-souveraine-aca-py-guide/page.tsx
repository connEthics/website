import { Metadata } from "next"
import Link from "next/link"
import AdvancedMarkdownRenderer from "@/components/AdvancedMarkdownRenderer"
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
    const filePath = join(process.cwd(), "ARTICLE_ACA_PY_2025.md")
    return readFileSync(filePath, "utf8")
  } catch (error) {
    console.error("Error reading article file:", error)
    return `# ACA-Py : Le Moteur Open-Source pour l'Avenir de l'Identité Numérique

## Erreur de chargement

Nous ne parvenons pas à charger le contenu de l'article. Veuillez réessayer plus tard.

Le fichier markdown devrait se trouver à la racine du projet sous le nom ARTICLE_ACA_PY_2025.md.`
  }
}

export default function ACAyGuide() {
  const content = getArticleContent()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 force-light-mode">
      <div className="container mx-auto px-4 py-8">
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
              ACA-Py : Le Moteur Open-Source pour l&apos;Avenir de l&apos;Identité Numérique
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Découvrez comment Hyperledger Aries Cloud Agent Python révolutionne l&apos;identité décentralisée. 
              De l&apos;architecture technique aux déploiements à grande échelle : le guide complet pour bâtir l&apos;identité de demain.
            </p>
            <div className="flex flex-wrap gap-2">
              {["ACA-Py", "OpenWallet Foundation", "Self-Sovereign Identity", "Architecture Décentralisée", "Cas d'Usage Entreprise"].map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <AdvancedMarkdownRenderer content={content} />

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Intéressé par l&apos;identité décentralisée ?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              ConnEthics vous accompagne dans la compréhension et l&apos;implémentation 
              des technologies d&apos;identité souveraine pour votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Nous contacter
              </Link>
              <Link
                href="/services"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
