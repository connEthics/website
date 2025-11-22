import { Metadata } from "next"
import Link from "next/link"
import ArticleRenderer from "@/components/ArticleRenderer"
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

        <ArticleRenderer 
          content={articleContent}
          title="Guide Technique ACA-Py pour Développeurs"
          description="Architecture, exemples de code et retours d'expérience pratiques pour maîtriser Hyperledger Aries Cloud Agent Python."
          tags={["ACA-Py", "Développement", "Architecture", "Guide Pratique"]}
          targetAudience="Développeurs Python, Architectes Solutions et CTOs techniques souhaitant implémenter la SSI."
          keyTakeaways={[
            "Comprendre l'architecture Contrôleur/Agent d'ACA-Py",
            "Mettre en place un environnement de développement Docker en 5 minutes",
            "Éviter les pièges courants de la gestion des webhooks et du multi-tenancy"
          ]}
          difficulty="Intermediate"
        />
      </div>
    </div>
  )
}
