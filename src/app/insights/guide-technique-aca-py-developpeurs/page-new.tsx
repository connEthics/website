import { Metadata } from "next"
import Link from "next/link"
import AdvancedMarkdownRenderer from "@/components/AdvancedMarkdownRenderer"
import { readFileSync } from "fs"
import { join } from "path"

export const metadata: Metadata = {
  title: "Guide Technique ACA-Py : Architecture, Code et Retours d'Expérience | ConnEthics",
  description: "Guide pratique pour développeurs et architectes : comprendre l'architecture d'ACA-Py, exemples de code fonctionnels et leçons apprises sur le terrain.",
  keywords: "ACA-Py, Hyperledger Aries, développement, architecture, webhooks, contrôleur, identité souveraine, guide technique, Docker",
}

// Read the markdown content at build time
function getArticleContent() {
  try {
    const filePath = join(process.cwd(), "src/app/insights/guide-technique-aca-py-developpeurs/article.md")
    return readFileSync(filePath, "utf8")
  } catch (error) {
    console.error("Error reading article file:", error)
    return `# Guide Technique ACA-Py pour Développeurs

## Erreur de chargement

Nous ne parvenons pas à charger le contenu de l'article. Veuillez réessayer plus tard.

Le fichier markdown devrait se trouver dans le répertoire de l'article sous le nom article.md.`
  }
}

export default function GuideTechniqueACApy() {
  const articleContent = getArticleContent()
  
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
