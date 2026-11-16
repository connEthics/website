import { Metadata } from 'next'
import Link from 'next/link'
import AdvancedMarkdownRenderer from '@/components/AdvancedMarkdownRenderer'
import ArticleHeader from '@/components/ArticleHeader'
import { readFileSync } from 'fs'
import { join } from 'path'
import { getArticleBySlug, getArticlePath, type Article } from '@/lib/articles'
import { buildAlternates } from '@/i18n/alternates'
import { ArticleJsonLd } from '@/lib/seo/jsonld'
import { SEO } from '@/lib/constants'
import { ogLocales } from '@/i18n/config'

const article = getArticleBySlug('arazzo-api-workflows', 'en') as Article
const articlePath = getArticlePath(article)

const title = 'Arazzo: The Missing Link in API Orchestration'
const description = 'Discover Arazzo, the new OpenAPI specification for workflows. Explore our open-source Visualizer and VS Code extension to orchestrate your APIs effectively.'
const keywords = ['Arazzo', 'OpenAPI', 'API Orchestration', 'Workflow', 'VS Code Extension', 'API Documentation', 'ConnEthics']

export const metadata: Metadata = {
  title: `${title} | ConnEthics`,
  description,
  keywords,
  ...buildAlternates(articlePath, null),
  openGraph: {
    title,
    description,
    type: 'article',
    siteName: SEO.openGraph.siteName,
    locale: ogLocales[article.lang],
    url: articlePath,
    publishedTime: article.publishedAt,
    images: ['/images/insights/arazzo/builder-preview.png'],
  },
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
      <ArticleJsonLd
        headline={title}
        description={description}
        url={articlePath}
        datePublished={article.publishedAt}
        inLanguage={article.lang}
        images={['/images/insights/arazzo/builder-preview.png']}
        keywords={keywords}
      />
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
          <ArticleHeader
            title={title}
            description="From static endpoints to executable workflows. Discover how Arazzo and our open-source tools are transforming API integration."
            tags={['Arazzo', 'OpenAPI', 'Developer Tools', 'Open Source']}
            readTime={article.readTime}
            publishedDate={article.date}
          />

          {/* Article Content */}
          <AdvancedMarkdownRenderer content={content} />

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-sm text-slate-600">
                  Published on <time dateTime={article.publishedAt}>{article.date}</time>
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
