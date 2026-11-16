import type { Metadata } from 'next';
import { SEO, SITE_URL } from '@/lib/constants';
import { ogLocales, type Locale } from '@/i18n/config';

const title = 'ConnEthics - Ethical Connections in Competitive Environments';
const description =
  'Building products and animating business ecosystems based on radical candor, integrity, and innovation. Expert consulting in self-sovereign identity, competitive intelligence, and product leadership.';

/** Site-wide metadata shared by the EN and FR root layouts. */
export function buildRootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: ['self-sovereign identity', 'competitive intelligence', 'product leadership', 'ethical business', 'ecosystem cartography', 'trust deployment'],
    authors: [{ name: 'ConnEthics' }],
    icons: {
      icon: '/images/favicon.ico',
      shortcut: '/images/favicon.ico',
      apple: '/images/favicon.ico',
    },
    openGraph: {
      title,
      description: 'Building products and animating business ecosystems based on radical candor, integrity, and innovation.',
      type: SEO.openGraph.type,
      siteName: SEO.openGraph.siteName,
      locale: ogLocales[locale],
      images: [
        {
          url: '/images/logo-connethics.webp',
          width: 256,
          height: 256,
          alt: 'ConnEthics Logo',
        },
      ],
    },
  };
}
