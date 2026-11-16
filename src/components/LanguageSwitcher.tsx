'use client';

import { usePathname } from 'next/navigation';
import { localeLabels } from '@/i18n/config';
import { getAlternateRoute } from '@/i18n/routes';

const ariaLabels = {
  en: 'Read this page in English',
  fr: 'Lire cette page en français',
} as const;

/**
 * Plain link to the same page in the other language. Renders nothing when the
 * current page has no translation (see src/i18n/routes.ts). A regular <a> is
 * used on purpose: EN and FR are separate root layouts, so the switch is a
 * full page load anyway.
 */
export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const pathname = usePathname();
  const alternate = pathname ? getAlternateRoute(pathname) : null;
  if (!alternate) return null;

  return (
    <a
      href={alternate.path}
      hrefLang={alternate.locale}
      lang={alternate.locale}
      aria-label={ariaLabels[alternate.locale]}
      title={localeLabels[alternate.locale].name}
      className={`inline-flex items-center justify-center rounded-md border border-gray-300 px-2 py-1 text-xs font-semibold tracking-wide text-gray-600 hover:border-blue-900 hover:text-blue-900 transition-all duration-200 ${className}`}
    >
      {localeLabels[alternate.locale].short}
    </a>
  );
}
