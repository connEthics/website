import { Metadata } from 'next'
import Link from 'next/link'
import AdvancedMarkdownRenderer from '@/components/AdvancedMarkdownRenderer'
import { readFileSync } from 'fs'
import { join } from 'path'

export const metadata: Metadata = {
  title: 'Arazzo: The Missing Link in API Orchestration | ConnEthics',
  description: 'Discover Arazzo, the new OpenAPI specification for workflows. Explore our open-source Visualizer and VS Code extension to orchestrate your APIs effectively.',
  keywords: ['Arazzo', 'OpenAPI', 'API Orchestration', 'Workflow', 'VS Code Extension', 'API Documentation', 'ConnEthics'],
}

// Read the markdown content at build time
function getArticleContent() {
  try {
    const filePath = join(process.cwd(), 'src', 'content', 'arazzo-presentation.md')
    return readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error('Error reading article file:', error)
    return `# Error loading content\n\nWe are unable to load the article content. Please try again later.`
  }
}

export default function ArazzoGuide() {
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
            ← Back to Insights
          </Link>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Arazzo: The Missing Link in API Orchestration
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              From static endpoints to executable workflows. Discover how Arazzo and our open-source tools are transforming API integration.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Arazzo
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                OpenAPI
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Developer Tools
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Open Source
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
                  Published on {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  By ConnEthics Team
                </p>
              </div>
              <div className="flex gap-4">
                <a
                    href="https://arazzo.connethics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Try the Playground
                </a>
                <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                    Contact Us
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
