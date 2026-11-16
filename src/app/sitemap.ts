import type { MetadataRoute } from 'next';
import { articles, getAlternateArticlePath, getArticlePath } from '@/lib/articles';
import { findRoutePair } from '@/i18n/routes';
import { absoluteUrl } from '@/lib/seo/url';

/**
 * Public static pages of the EN tree. Internal or test pages (/mui-demo,
 * /legal/color-test, /inpi-search) are intentionally left out.
 * French pages come from `staticRoutePairs` in src/i18n/routes.ts.
 */
const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/ai-governance', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/2026', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/legal', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/legal/sales-terms-and-conditions', priority: 0.1, changeFrequency: 'yearly' },
  { path: '/legal/general-purchasing-conditions', priority: 0.1, changeFrequency: 'yearly' },
  { path: '/legal/ssip-safety-schemes', priority: 0.1, changeFrequency: 'yearly' },
  { path: '/legal/terms-of-purchase', priority: 0.1, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' },
];

function languagesFor(enPath: string, frPath: string) {
  return { languages: { en: absoluteUrl(enPath), fr: absoluteUrl(frPath), 'x-default': absoluteUrl(enPath) } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    const pair = findRoutePair(page.path);
    entries.push({
      url: absoluteUrl(page.path),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      ...(pair && { alternates: languagesFor(pair.en, pair.fr) }),
    });
    if (pair) {
      entries.push({
        url: absoluteUrl(pair.fr),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: languagesFor(pair.en, pair.fr),
      });
    }
  }

  for (const article of articles) {
    const path = getArticlePath(article);
    const alternate = getAlternateArticlePath(article);
    const [enPath, frPath] = article.lang === 'en' ? [path, alternate] : [alternate, path];
    entries.push({
      url: absoluteUrl(path),
      lastModified: article.publishedAt,
      changeFrequency: 'monthly',
      priority: article.featured ? 0.8 : 0.6,
      ...(enPath && frPath && { alternates: languagesFor(enPath, frPath) }),
    });
  }

  return entries;
}
