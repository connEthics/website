import type { Metadata } from 'next';
import '../globals.css';
import SiteShell from '@/components/SiteShell';
import { buildRootMetadata } from '@/lib/seo/metadata';

// Root layout of the French tree (`/fr/...`): renders <html lang="fr">. See src/i18n/config.ts.
export const metadata: Metadata = buildRootMetadata('fr');

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="fr">{children}</SiteShell>;
}
