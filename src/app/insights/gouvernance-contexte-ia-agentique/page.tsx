import { Metadata } from 'next'
import Link from 'next/link'
import AdvancedMarkdownRenderer from '@/components/AdvancedMarkdownRenderer'
import { readFileSync } from 'fs'
import { join } from 'path'

export const metadata: Metadata = {
  title: 'Shadow AI & Propriété Intellectuelle : Qui possède vraiment vos Agents IA ? | ConnEthics',
  description: 'Vos développeurs utilisent des assistants IA, mais qui possède les règles métier ? Guide de gouvernance pour sécuriser votre patrimoine agentique (.cursorrules, .agent) face aux risques de Shadow AI.',
  keywords: ['IA Agentique', 'Gouvernance IA', 'Propriété Intellectuelle', 'Shadow AI', 'PromptOps', 'Cursor', 'MCP', 'Model Context Protocol', 'Sécurité IA', 'Conformité AI Act'],
}

// Read the markdown content at build time
function getArticleContent() {
  try {
    const filePath = join(process.cwd(), 'src', 'content', 'ai-context-governance.md')
    return readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading article file:', error)
    return `# Erreur de chargement\n\nNous ne parvenons pas à charger le contenu de l'article. Veuillez réessayer plus tard.`
  }
}

export default function AiGovernanceGuide() {
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
            ← Retour aux Insights
          </Link>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Shadow AI & Propriété Intellectuelle : Qui possède vraiment vos Agents IA ?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Propriété Intellectuelle, Opérations et Stratégie : Comment maîtriser la &quot;sauce secrète&quot; de vos agents IA.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                IA Agentique
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Gouvernance
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                Juridique & PI
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                PromptOps
              </span>
            </div>
          </header>

          {/* Article Content */}
          <AdvancedMarkdownRenderer content={content} />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-sm text-slate-600">
                  Publié le 28 décembre 2025
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Par Frédéric CHOUDAT | Fondateur de ConnEthics
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
                >
                    Discuter de votre Gouvernance IA
                </Link>
                <Link
                    href="/ai-governance"
                    className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                    Voir l&apos;Infographie Interactive
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
