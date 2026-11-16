import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MuiThemeProvider } from '@/providers/MuiThemeProvider';
import { OrganizationJsonLd } from '@/lib/seo/jsonld';
import type { Locale } from '@/i18n/config';

/**
 * Document shell shared by the root layouts of `(en)` and `(fr)`.
 * Only `lang` differs between the two trees.
 */
export default function SiteShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning className="light">
      <body className="font-sans antialiased bg-white text-gray-900 transition-colors">
        <OrganizationJsonLd />
        <MuiThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </MuiThemeProvider>
      </body>
    </html>
  );
}
