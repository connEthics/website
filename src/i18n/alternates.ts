import type { Metadata } from 'next';
import { defaultLocale, type Locale } from './config';

/**
 * Build the `alternates` block (canonical + hreflang) of a page's metadata.
 *
 * Paths are root-relative; Next resolves them against `metadataBase`.
 *
 *   export const metadata: Metadata = {
 *     title: '...',
 *     ...buildAlternates('/arazzo', '/fr/arazzo', 'fr'),
 *   };
 *
 * @param pathEn   path of the English version
 * @param pathFr   path of the French version, or null when there is none
 * @param locale   locale of the page being rendered (sets the canonical)
 */
export function buildAlternates(
  pathEn: string,
  pathFr: string | null,
  locale: Locale = defaultLocale,
): Required<Pick<Metadata, 'alternates'>> {
  if (!pathFr) {
    return { alternates: { canonical: pathEn } };
  }
  return {
    alternates: {
      canonical: locale === 'fr' ? pathFr : pathEn,
      languages: {
        en: pathEn,
        fr: pathFr,
        'x-default': pathEn,
      },
    },
  };
}
