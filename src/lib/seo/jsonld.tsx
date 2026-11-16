import { BRAND } from '@/lib/constants';
import type { Locale } from '@/i18n/config';
import { absoluteUrl } from './url';

/**
 * Structured data helpers. Each component renders one
 * `<script type="application/ld+json">` and can be placed anywhere in a
 * server component tree (Next hoists nothing; crawlers read it in <body>).
 */

type JsonLdValue = string | number | boolean | null | undefined | JsonLdValue[] | { [key: string]: JsonLdValue };
type JsonLdObject = { [key: string]: JsonLdValue };

/** JSON.stringify drops undefined keys; `<` is escaped so the payload cannot close the script tag. */
function serialize(data: JsonLdObject): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function JsonLd({ data }: { data: JsonLdObject }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialize(data) }} />;
}

const LOGO_PATH = '/images/logo-connethics.webp';

function publisher(): JsonLdObject {
  return {
    '@type': 'Organization',
    name: BRAND.name,
    url: absoluteUrl('/'),
    logo: { '@type': 'ImageObject', url: absoluteUrl(LOGO_PATH) },
  };
}

export interface OrganizationJsonLdProps {
  description?: string;
  /** Verified official profiles only (LinkedIn, GitHub...). */
  sameAs?: string[];
}

export function OrganizationJsonLd({ description = BRAND.description, sameAs }: OrganizationJsonLdProps = {}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${absoluteUrl('/')}/#organization`,
        name: BRAND.name,
        url: absoluteUrl('/'),
        logo: absoluteUrl(LOGO_PATH),
        description,
        email: BRAND.email,
        sameAs: sameAs && sameAs.length > 0 ? sameAs : undefined,
      }}
    />
  );
}

export interface ArticleJsonLdProps {
  headline: string;
  description: string;
  /** Root-relative or absolute URL of the article. */
  url: string;
  /** ISO date (YYYY-MM-DD or full ISO 8601). */
  datePublished: string;
  dateModified?: string;
  inLanguage: Locale;
  /** Root-relative or absolute image URLs. */
  images?: string[];
  keywords?: string[];
  authorName?: string;
}

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  inLanguage,
  images,
  keywords,
  authorName,
}: ArticleJsonLdProps) {
  const pageUrl = absoluteUrl(url);
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline,
        description,
        url: pageUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        datePublished,
        dateModified: dateModified ?? datePublished,
        inLanguage,
        image: images?.map((src) => absoluteUrl(src)),
        keywords: keywords?.join(', '),
        author: authorName ? { '@type': 'Person', name: authorName } : { '@type': 'Organization', name: BRAND.name, url: absoluteUrl('/') },
        publisher: publisher(),
      }}
    />
  );
}

export interface SoftwareApplicationJsonLdProps {
  name: string;
  description: string;
  /** Product page (root-relative or absolute). */
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  softwareVersion?: string;
  downloadUrl?: string;
  image?: string;
  inLanguage?: Locale;
  /** Price in EUR; defaults to free. */
  price?: number;
}

export function SoftwareApplicationJsonLd({
  name,
  description,
  url,
  applicationCategory = 'DeveloperApplication',
  operatingSystem = 'Windows, macOS, Linux',
  softwareVersion,
  downloadUrl,
  image,
  inLanguage,
  price = 0,
}: SoftwareApplicationJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        url: absoluteUrl(url),
        applicationCategory,
        operatingSystem,
        softwareVersion,
        downloadUrl: downloadUrl ? absoluteUrl(downloadUrl) : undefined,
        image: image ? absoluteUrl(image) : undefined,
        inLanguage,
        offers: { '@type': 'Offer', price, priceCurrency: 'EUR' },
        publisher: publisher(),
      }}
    />
  );
}

export interface FaqItem {
  question: string;
  /** Plain text or simple HTML, as shown on the page. */
  answer: string;
}

export function FAQPageJsonLd({ items, inLanguage }: { items: FaqItem[]; inLanguage?: Locale }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage,
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }}
    />
  );
}
