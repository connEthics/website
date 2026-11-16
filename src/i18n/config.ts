/**
 * Minimal i18n configuration (no library, no redirect middleware).
 *
 * Routing: English is served at the root (`/insights/...`), French under the
 * `/fr` prefix (`/fr/insights/...`). Existing URLs are unchanged.
 *
 * `<html lang>`: the App Router only lets the root layout render `<html>`, and
 * a root layout receives no pathname. To emit a correct, static `lang` without
 * making every page dynamic (headers()/middleware) or patching it client-side,
 * the app uses two root layouts through route groups:
 *   - `src/app/(en)/layout.tsx` -> `<html lang="en">` for every existing page;
 *   - `src/app/(fr)/layout.tsx` -> `<html lang="fr">` for everything under `/fr`.
 * Route groups do not appear in URLs. Both layouts share `SiteShell`.
 * Trade-off: navigating between the two trees triggers a full page load,
 * which is fine for a language switch.
 */
export const locales = ['en', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  en: { short: 'EN', name: 'English' },
  fr: { short: 'FR', name: 'Français' },
};

/** OpenGraph locale codes. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix a root-relative path with the locale segment (`/x` -> `/fr/x`). */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/** Locale of a pathname, from its first segment. */
export function getLocaleFromPathname(pathname: string): Locale {
  const first = pathname.split('/')[1] ?? '';
  return isLocale(first) && first !== defaultLocale ? first : defaultLocale;
}
