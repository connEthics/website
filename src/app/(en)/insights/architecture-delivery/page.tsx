import { Metadata } from 'next'
import Link from 'next/link'
import AdvancedMarkdownRenderer from '@/components/AdvancedMarkdownRenderer'
import ArticleHeader from '@/components/ArticleHeader'
import { readFileSync } from 'fs'
import { join } from 'path'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'L\'Illusion du Contrôle : Pourquoi votre contrat de maintenance ne vous protège plus des risques de l\'IA | ConnEthics',
  description: 'Shadow AI, contamination juridique, failles de sécurité... Découvrez les nouveaux risques de la Supply Chain logicielle et les 3 modèles d\'engagement pour 2025.',
  keywords: ['Supply Chain Logicielle', 'Sécurité', 'Contrat', 'DORA 2025', 'Quality Gate'],
}

function getArticleContent() {
  try {
    const filePath = join(process.cwd(), 'src', 'content', 'dora-article-3.md')
    return readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading article file:', error)
    return 'Erreur de chargement de l\'article.'
  }
}

export default function Article3() {
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
            title="L'Illusion du Contrôle : Pourquoi votre contrat de maintenance ne vous protège plus des risques de l'IA"
            description="Shadow AI, contamination juridique, failles de sécurité... Découvrez les nouveaux risques de la Supply Chain logicielle et les 3 modèles d'engagement pour 2025."
            tags={['Delivery', 'Sécurité', 'Contrats']}
            targetAudience="DSI, Responsables Juridiques, Architectes"
            keyTakeaways={[
              "Les risques invisibles de la Shadow AI",
              "3 nouveaux modèles d'engagement (Black Box, Glass Box, Staff Aug)",
              "La Quality Gate comme juge de paix"
            ]}
            difficulty="Advanced"
            readTime="5 min read"
            publishedDate="1 Janvier 2026"
          />

          <AdvancedMarkdownRenderer content={content} enableTOC={false} />

          <div className="mt-16 pt-8 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Previous Article */}
              <Link href="/insights/la-methode-product-management" className="block group h-full">
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      Product Management
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Le Piège de la Vitesse : Comment l&apos;IA peut transformer votre DSI en usine à dette technique
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    L&apos;IA accélère la production de code, mais attention au &quot;Value Gap&quot;. Découvrez comment le Product Management doit évoluer pour filtrer l&apos;inutile et construire de vrais avantages concurrentiels.
                  </p>
                </div>
              </Link>

              {/* Next Article */}
              <Link href="/insights/le-carburant-data-ie" className="block group h-full">
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      Data
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Votre Documentation vaut de l&apos;Or : Comment transformer votre &quot;Dette Documentaire&quot; en Actif Stratégique
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    La documentation n&apos;est plus une corvée, c&apos;est le Training Set de vos IA. Découvrez comment le Knowledge Management devient un enjeu d&apos;Intelligence Économique.
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
