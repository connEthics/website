import type { Metadata } from 'next'
import Link from 'next/link'
import { readFileSync } from 'fs'
import { join } from 'path'
import AdvancedMarkdownRenderer from '@/components/AdvancedMarkdownRenderer'
import ArticleHeader from '@/components/ArticleHeader'
import { getAlternateArticlePath, getArticleBySlug, getArticlePath, type Article } from '@/lib/articles'
import { buildAlternates } from '@/i18n/alternates'
import { ogLocales } from '@/i18n/config'
import { ArticleJsonLd } from '@/lib/seo/jsonld'
import { SEO } from '@/lib/constants'

const article = getArticleBySlug('arazzo-1-1-mcp-e2e', 'en') as Article
const articlePath = getArticlePath(article)
const frPath = getAlternateArticlePath(article) as string

const title = article.title
const description = article.excerpt
const keywords = ['Arazzo 1.1', 'Arazzo', 'OpenAPI', 'AsyncAPI', 'MCP', 'Model Context Protocol', 'AI agents', 'API workflows', 'End-to-end testing', 'CI', 'ConnEthics']
const ogImage = '/images/insights/arazzo/arazzo-1-1-mcp-e2e-og-en.png'
const graphImages = [
  '/images/insights/arazzo/arazzo-1-1-book-trip-graph.webp',
  '/images/insights/arazzo/arazzo-1-1-order-to-cash-graph.webp',
]

export const metadata: Metadata = {
  title: `${title} | ConnEthics`,
  description,
  keywords,
  ...buildAlternates(articlePath, frPath, 'en'),
  openGraph: {
    title,
    description,
    type: 'article',
    siteName: SEO.openGraph.siteName,
    locale: ogLocales.en,
    alternateLocale: [ogLocales.fr],
    url: articlePath,
    publishedTime: article.publishedAt,
    tags: ['Arazzo', 'MCP', 'API workflows', 'E2E testing'],
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Arazzo 1.1: intent, not endpoints — ConnEthics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
}

function getArticleContent() {
  try {
    return readFileSync(join(process.cwd(), 'src', 'content', 'arazzo-1-1-mcp-e2e.en.md'), 'utf8')
  } catch (error) {
    console.error('Error reading article file:', error)
    return '# Error loading content\n\nWe are unable to load the article content. Please try again later.'
  }
}

export default function Arazzo11McpE2eArticle() {
  const content = getArticleContent()

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={articlePath}
        datePublished={article.publishedAt}
        inLanguage="en"
        images={[ogImage, ...graphImages]}
        keywords={keywords}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/insights" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 no-underline">
          ← Back to Insights
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 md:p-12">
          <ArticleHeader
            lang="en"
            title={title}
            description="Your APIs expose verbs; your customers and agents want outcomes. Arazzo 1.1 describes the path between the two, and the same workflow can become a governed agent tool and an end-to-end test."
            tags={['Arazzo 1.1', 'MCP', 'E2E testing', 'API workflows']}
            targetAudience="API and enterprise architects, QA and SDET teams, AI platform teams, API product owners"
            keyTakeaways={[
              'What Arazzo 1.1 adds: AsyncAPI steps, dependsOn, Selectors, reusable workflows',
              'How to expose one workflow as one MCP tool, with guardrails and human confirmation',
              'How to run the same workflow as an end-to-end test in CI, and the limits we measured',
            ]}
            difficulty="Intermediate"
            readTime={article.readTime}
            publishedDate={article.date}
          />

          <AdvancedMarkdownRenderer content={content} enableTOC={false} />

          <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-sm text-slate-600">
                  Published on <time dateTime={article.publishedAt}>{article.date}</time> · By the ConnEthics team
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Earlier introduction:{' '}
                  <Link href="/insights/arazzo-api-workflows" className="text-blue-600 hover:text-blue-800 underline">
                    Arazzo: The Missing Link in API Orchestration
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://arazzo.connethics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Open Arazzo Studio
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
