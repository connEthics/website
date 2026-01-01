import { Metadata } from 'next'
import Link from 'next/link'
import AdvancedMarkdownRenderer from '@/components/AdvancedMarkdownRenderer'
import ArticleHeader from '@/components/ArticleHeader'
import { readFileSync } from 'fs'
import { join } from 'path'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'La Fin du TJM : Pourquoi acheter du temps est devenu le plus gros risque de la DSI | ConnEthics',
  description: 'L\'IA générative brise l\'équation historique des services numériques. Découvrez pourquoi le modèle TJM est obsolète et comment passer à une obligation de performance.',
  keywords: ['TJM', 'DORA 2025', 'IA Générative', 'Productivité', 'DSI', 'Souveraineté Numérique'],
}

function getArticleContent() {
  try {
    const filePath = join(process.cwd(), 'src', 'content', 'dora-article-1.md')
    return readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading article file:', error)
    return 'Erreur de chargement de l\'article.'
  }
}

export default function Article1() {
  const content = getArticleContent()
  
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Navigation */}
        <Link 
          href="/insights" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 no-underline"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Insights
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <ArticleHeader 
            title="La Fin du TJM : Pourquoi acheter du temps est devenu le plus gros risque de la DSI"
            description="L'IA générative brise l'équation historique des services numériques. Découvrez pourquoi le modèle TJM est obsolète et comment passer à une obligation de performance."
            tags={['Stratégie', 'DORA 2025', 'Modèle Économique']}
            targetAudience="DSI, Directeurs des Achats, CTO"
            keyTakeaways={[
              "Pourquoi le TJM est dangereux à l'ère de l'IA",
              "Le passage du Value Selling au Value Delivery",
              "L'importance de la Souveraineté Numérique"
            ]}
            difficulty="Intermediate"
            readTime="5 min read"
            publishedDate="1 Janvier 2026"
          />

          <AdvancedMarkdownRenderer content={content} enableTOC={false} />

          <div className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Next Article */}
              <Link href="/insights/la-methode-product-management" className="block group h-full">
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      Product Management
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Le Piège de la Vitesse : Comment l'IA peut transformer votre DSI en usine à dette technique
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    L'IA accélère la production de code, mais attention au "Value Gap". Découvrez comment le Product Management doit évoluer pour filtrer l'inutile et construire de vrais avantages concurrentiels.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
