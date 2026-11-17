import { articles, getAlternateArticlePath, getArticlePath } from '@/lib/articles';
import { getLocaleFromPathname, type Locale } from './config';

export interface RoutePair {
  en: string;
  fr: string;
}

/**
 * Static pages that exist in both languages. Add a pair here when a page gets
 * its French version.
 * Articles are paired automatically from `alternateSlug` in `src/lib/articles.ts`.
 */
export const staticRoutePairs: RoutePair[] = [
  { en: '/', fr: '/fr' },
  { en: '/arazzo', fr: '/fr/arazzo' },
];

const articleRoutePairs: RoutePair[] = articles
  .filter((a) => a.lang === 'en' && a.alternateSlug)
  .map((a) => ({ en: getArticlePath(a), fr: getAlternateArticlePath(a) as string }));

export const routePairs: RoutePair[] = [...staticRoutePairs, ...articleRoutePairs];

function normalize(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

/** Pair (EN + FR paths) a pathname belongs to, if it has a translation. */
export function findRoutePair(pathname: string): RoutePair | undefined {
  const path = normalize(pathname);
  return routePairs.find((pair) => pair.en === path || pair.fr === path);
}

/** Equivalent page in the other language, or null when none exists. */
export function getAlternateRoute(pathname: string): { locale: Locale; path: string } | null {
  const pair = findRoutePair(pathname);
  if (!pair) return null;
  const current = getLocaleFromPathname(normalize(pathname));
  return current === 'fr' ? { locale: 'en', path: pair.en } : { locale: 'fr', path: pair.fr };
}
