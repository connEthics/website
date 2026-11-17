import type { Locale } from '@/i18n/config';

/**
 * Single source of truth for Insights articles.
 *
 * Consumed by the home page (latest articles), `/insights` (listing),
 * `sitemap.ts` and the language switcher.
 *
 * URL rule (see `getArticlePath`):
 * - an article that is part of a bilingual pair (`alternateSlug` set) lives
 *   under its locale prefix: `/insights/<slug>` (EN) or `/fr/insights/<slug>` (FR);
 * - a legacy single-language article (no `alternateSlug`) stays at
 *   `/insights/<slug>` whatever its language, so no existing URL changes.
 */
export interface Article {
  title: string;
  excerpt: string;
  /** Display date, as rendered on the cards. */
  date: string;
  /** Machine-readable publication date (YYYY-MM-DD) for sitemap and JSON-LD. */
  publishedAt: string;
  category: string;
  readTime: string;
  slug: string;
  /** Language of the article content. */
  lang: Locale;
  /** Slug of the same article in the other locale, when a translation exists. */
  alternateSlug?: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    title: "Arazzo 1.1 in Practice: One Workflow for Your AI Agents and Your CI",
    excerpt: "Your APIs expose verbs; your customers and agents want outcomes. Two runnable examples show how one Arazzo 1.1 workflow becomes a governed MCP tool and an end-to-end test in CI, with the limits we measured.",
    date: "November 17, 2026",
    publishedAt: "2026-11-17",
    category: "Developer Tools",
    readTime: "11 min read",
    slug: "arazzo-1-1-mcp-e2e",
    lang: "en",
    alternateSlug: "arazzo-1-1-mcp-e2e",
    featured: true
  },
  {
    title: "Arazzo 1.1 en pratique : un même workflow pour vos agents IA et votre CI",
    excerpt: "Vos API exposent des verbes, vos clients et vos agents cherchent des résultats. Deux exemples exécutables montrent comment un workflow Arazzo 1.1 devient un outil MCP gouverné et un test de bout en bout en CI, limites mesurées comprises.",
    date: "17 novembre 2026",
    publishedAt: "2026-11-17",
    category: "Developer Tools",
    readTime: "12 min de lecture",
    slug: "arazzo-1-1-mcp-e2e",
    lang: "fr",
    alternateSlug: "arazzo-1-1-mcp-e2e",
    featured: true
  },
  {
    title: "Le Crash Test : Comment empêcher l'IA de détruire votre production en 3 secondes",
    excerpt: "L'IA industrialise la production, mais aussi le risque. Découvrez comment sécuriser votre 'Usine IA' avec les principes DORA : Small Batches, Circuit Breakers et AI Security.",
    date: "Janvier 1, 2026",
    publishedAt: "2026-01-01",
    category: "DORA 2025",
    readTime: "5 min read",
    slug: "securite-industrialisation",
    lang: "fr",
    featured: true
  },
  {
    title: "Votre Documentation vaut de l'Or : Comment transformer votre \"Dette Documentaire\" en Actif Stratégique",
    excerpt: "La documentation n'est plus une corvée, c'est le Training Set de vos IA. Découvrez comment le Knowledge Management devient un enjeu d'Intelligence Économique.",
    date: "Janvier 1, 2026",
    publishedAt: "2026-01-01",
    category: "DORA 2025",
    readTime: "5 min read",
    slug: "le-carburant-data-ie",
    lang: "fr",
    featured: true
  },
  {
    title: "L'Illusion du Contrôle : Pourquoi votre contrat de maintenance ne vous protège plus des risques de l'IA",
    excerpt: "Shadow AI, contamination juridique, failles de sécurité... Découvrez les nouveaux risques de la Supply Chain logicielle et les 3 modèles d'engagement pour 2025.",
    date: "Janvier 1, 2026",
    publishedAt: "2026-01-01",
    category: "DORA 2025",
    readTime: "5 min read",
    slug: "architecture-delivery",
    lang: "fr",
    featured: true
  },
  {
    title: "Le Piège de la Vitesse : Comment l'IA peut transformer votre DSI en usine à dette technique",
    excerpt: "L'IA accélère la production de code, mais attention au 'Value Gap'. Découvrez comment le Product Management doit évoluer pour filtrer l'inutile.",
    date: "Janvier 1, 2026",
    publishedAt: "2026-01-01",
    category: "DORA 2025",
    readTime: "5 min read",
    slug: "la-methode-product-management",
    lang: "fr",
    featured: true
  },
  {
    title: "La Fin du TJM : Pourquoi acheter du temps est devenu le plus gros risque de la DSI",
    excerpt: "L'IA générative brise l'équation historique des services numériques. Découvrez pourquoi le modèle TJM est obsolète et comment passer à une obligation de performance.",
    date: "Janvier 1, 2026",
    publishedAt: "2026-01-01",
    category: "DORA 2025",
    readTime: "5 min read",
    slug: "le-manifeste-fin-tjm",
    lang: "fr",
    featured: true
  },
  {
    title: "Gouvernance du Contexte à l'Ère de l'IA Agentique",
    excerpt: "Propriété Intellectuelle, Opérations et Stratégie : Comment maîtriser la 'sauce secrète' de vos agents IA. Analyse des risques et modèles de détention.",
    date: "December 28, 2025",
    publishedAt: "2025-12-28",
    category: "AI Governance",
    readTime: "10 min read",
    slug: "gouvernance-contexte-ia-agentique",
    lang: "fr",
    featured: true
  },
  {
    // Published in commit 555810c (2025-12-28).
    title: "Arazzo: The Missing Link in API Orchestration",
    excerpt: "From static endpoints to executable workflows. Discover how Arazzo and our open-source tools are transforming API integration.",
    date: "December 28, 2025",
    publishedAt: "2025-12-28",
    category: "Developer Tools",
    readTime: "5 min read",
    slug: "arazzo-api-workflows",
    lang: "en",
    featured: true
  },
  {
    title: "Product Discovery Method with Opportunity Tree Solution",
    excerpt: "A comprehensive guide to implementing structured product discovery using opportunity trees to drive meaningful business outcomes and align teams around customer value.",
    date: "January 10, 2025",
    publishedAt: "2025-01-10",
    category: "Product Leadership",
    readTime: "12 min read",
    slug: "product-discovery-opportunity-tree",
    lang: "en",
    featured: true
  },
  {
    title: "Guide Technique ACA-Py pour Développeurs",
    excerpt: "Guide pratique pour développeurs et architectes : comprendre l'architecture d'ACA-Py, exemples de code fonctionnels et leçons apprises sur le terrain.",
    date: "Août 4, 2025",
    publishedAt: "2025-08-04",
    category: "Self-Sovereign Identity",
    readTime: "20 min read",
    slug: "guide-technique-aca-py-developpeurs",
    lang: "fr",
    featured: true
  },
  {
    title: "Technologies des Verifiable Credentials",
    excerpt: "Guide complet des technologies et standards qui façonnent l'écosystème des Verifiable Credentials : DIDComm, OpenID4VC, eIDAS, W3C-VC et plus.",
    date: "Janvier 3, 2025",
    publishedAt: "2025-01-03",
    category: "Trust & Identity",
    readTime: "12 min read",
    slug: "verifiable-credentials-technologies",
    lang: "fr",
    featured: true
  },
  {
    title: "Guide Pratique : Identité Souveraine avec ACA-Py",
    excerpt: "Guide complet pour comprendre et implémenter l'identité souveraine (SSI) avec ACA-Py. Scénarios pratiques, exemples de code et cas d'usage entreprise.",
    date: "Août 2, 2025",
    publishedAt: "2025-08-02",
    category: "Self-Sovereign Identity",
    readTime: "15 min read",
    slug: "identite-souveraine-aca-py-guide",
    lang: "fr",
    featured: true
  },
  {
    title: "Aligning Product Teams with Business Impact",
    excerpt: "Discover essential strategies for effectively aligning your product teams with business impact objectives and creating sustainable synergy in competitive environments.",
    date: "July 30, 2025",
    publishedAt: "2025-07-30",
    category: "Product Leadership",
    readTime: "8 min read",
    slug: "aligning-product-teams-business-impact",
    lang: "en"
  },
  {
    title: "The Future of Self-Sovereign Identity in Enterprise",
    excerpt: "Exploring how SSI will transform enterprise identity management and create new opportunities for secure, user-controlled digital interactions.",
    date: "July 25, 2025",
    publishedAt: "2025-07-25",
    category: "Self-Sovereign Identity",
    readTime: "5 min read",
    slug: "future-self-sovereign-identity-enterprise",
    lang: "en"
  },
  {
    title: "Competitive Intelligence in the Digital Age",
    excerpt: "Understanding economic warfare analysis and how modern businesses can gain strategic advantages through comprehensive ecosystem mapping.",
    date: "July 20, 2025",
    publishedAt: "2025-07-20",
    category: "Ecosystem Cartography",
    readTime: "7 min read",
    slug: "competitive-intelligence-digital-age",
    lang: "en"
  },
  {
    title: "Building Trust Through Verifiable Credentials",
    excerpt: "How organizations can implement verifiable credential systems to enhance trust and streamline identity verification processes.",
    date: "July 15, 2025",
    publishedAt: "2025-07-15",
    category: "Trust & Identity",
    readTime: "6 min read",
    slug: "building-trust-verifiable-credentials",
    lang: "en"
  },
  {
    title: "Product Leadership in Ethical Business Ecosystems",
    excerpt: "Aligning product roadmaps with ethical frameworks while maintaining competitive advantage and driving innovation.",
    date: "July 10, 2025",
    publishedAt: "2025-07-10",
    category: "Product Leadership",
    readTime: "8 min read",
    slug: "product-leadership-ethical-ecosystems",
    lang: "en"
  }
];

/** Public URL path of an article (see the URL rule above). */
export function getArticlePath(article: Pick<Article, 'slug' | 'lang' | 'alternateSlug'>): string {
  const prefix = article.lang === 'fr' && article.alternateSlug ? '/fr' : '';
  return `${prefix}/insights/${article.slug}`;
}

/** Path of the translated version of an article, if any. */
export function getAlternateArticlePath(article: Article): string | null {
  if (!article.alternateSlug) return null;
  const alternateLang: Locale = article.lang === 'fr' ? 'en' : 'fr';
  return getArticlePath({ slug: article.alternateSlug, lang: alternateLang, alternateSlug: article.slug });
}

export function getArticleBySlug(slug: string, lang?: Locale): Article | undefined {
  return articles.find((a) => a.slug === slug && (!lang || a.lang === lang));
}

/** Articles listed on the root (EN) `/insights` index: everything not under `/fr`. */
export const rootIndexArticles: Article[] = articles.filter((a) => !getArticlePath(a).startsWith('/fr/'));
