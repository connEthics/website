import { Metadata } from 'next'
import Link from 'next/link'
import AdvancedMarkdownRenderer from '@/components/AdvancedMarkdownRenderer'
import ArticleHeader from '@/components/ArticleHeader'
import { readFileSync } from 'fs'
import { join } from 'path'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Le Crash Test : Comment empêcher l\'IA de détruire votre production en 3 secondes | ConnEthics',
  description: 'L\'IA industrialise la production, mais aussi le risque. Découvrez comment sécuriser votre "Usine IA" avec les principes DORA : Small Batches, Circuit Breakers et AI Security.',
  keywords: ['Sécurité', 'Industrialisation', 'DORA 2025', 'DevSecOps', 'AI Security'],
}

function getArticleContent() {
  try {
    const filePath = join(process.cwd(), 'src', 'content', 'dora-article-5.md')
    return readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading article file:', error)
    return 'Erreur de chargement de l\'article.'
  }
}

export default function Article5() {
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
            title="Le Crash Test : Comment empêcher l'IA de détruire votre production en 3 secondes"
            description={`L'IA industrialise la production, mais aussi le risque. Découvrez comment sécuriser votre "Usine IA" avec les principes DORA : Small Batches, Circuit Breakers et AI Security.`}
            tags={['Sécurité', 'Industrialisation', 'DevSecOps']}
            targetAudience="CISO, DevOps, CTO"
            keyTakeaways={[
              "Le Biais d'Automatisation",
              "Principes DORA : Small Batches & Circuit Breakers",
              "AI Security"
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
