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

const article = getArticleBySlug('arazzo-1-1-mcp-e2e', 'fr') as Article
const articlePath = getArticlePath(article)
const enPath = getAlternateArticlePath(article) as string

const title = article.title
const description = article.excerpt
const keywords = ['Arazzo 1.1', 'Arazzo', 'OpenAPI', 'AsyncAPI', 'MCP', 'Model Context Protocol', 'agents IA', 'workflows API', 'tests de bout en bout', 'CI', 'ConnEthics']
const ogImage = '/images/insights/arazzo/arazzo-1-1-mcp-e2e-og-fr.png'
const graphImages = [
  '/images/insights/arazzo/arazzo-1-1-book-trip-graph.webp',
  '/images/insights/arazzo/arazzo-1-1-order-to-cash-graph.webp',
]

export const metadata: Metadata = {
  title: `${title} | ConnEthics`,
  description,
  keywords,
  ...buildAlternates(enPath, articlePath, 'fr'),
  openGraph: {
    title,
    description,
    type: 'article',
    siteName: SEO.openGraph.siteName,
    locale: ogLocales.fr,
    alternateLocale: [ogLocales.en],
    url: articlePath,
    publishedTime: article.publishedAt,
    tags: ['Arazzo', 'MCP', 'workflows API', 'tests E2E'],
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Arazzo 1.1 : des intentions, pas des endpoints — ConnEthics' }],
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
    return readFileSync(join(process.cwd(), 'src', 'content', 'arazzo-1-1-mcp-e2e.fr.md'), 'utf8')
  } catch (error) {
    console.error('Error reading article file:', error)
    return "# Erreur de chargement\n\nImpossible de charger l'article pour le moment. Merci de réessayer plus tard."
  }
}

export default function Arazzo11McpE2eArticleFr() {
  const content = getArticleContent()

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <ArticleJsonLd
        headline={title}
        description={description}
        url={articlePath}
        datePublished={article.publishedAt}
        inLanguage="fr"
        images={[ogImage, ...graphImages]}
        keywords={keywords}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/insights" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 no-underline">
          ← Tous les articles
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8 md:p-12">
          <ArticleHeader
            lang="fr"
            title={title}
            description="Vos API exposent des verbes, vos clients et vos agents cherchent des résultats. Arazzo 1.1 décrit le chemin entre les deux, et le même workflow peut devenir un outil d'agent gouverné et un test de bout en bout."
            tags={['Arazzo 1.1', 'MCP', 'Tests E2E', 'Workflows API']}
            targetAudience="Architectes API et d'entreprise, équipes QA, équipes plateforme IA, product owners API"
            keyTakeaways={[
              "Ce qu'apporte Arazzo 1.1 : étapes AsyncAPI, dependsOn, Selectors, workflows réutilisables",
              'Comment exposer un workflow comme un outil MCP, avec garde-fous et confirmation humaine',
              'Comment exécuter ce même workflow comme test de bout en bout en CI, et les limites mesurées',
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
                  Publié le <time dateTime={article.publishedAt}>{article.date}</time> · Par l&apos;équipe ConnEthics
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Notre première introduction (en anglais) :{' '}
                  <Link href="/insights/arazzo-api-workflows" hrefLang="en" className="text-blue-600 hover:text-blue-800 underline">
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
                  Ouvrir Arazzo Studio
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
