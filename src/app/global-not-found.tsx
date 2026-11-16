import type { Metadata } from 'next';
import './globals.css';
import SiteShell from '@/components/SiteShell';
import NotFoundContent from '@/components/NotFoundContent';

// Unmatched URLs. With two root layouts ((en) and (fr), see src/i18n/config.ts)
// there is no top-level layout, so the 404 renders its own document
// (`experimental.globalNotFound` in next.config.ts).
export const metadata: Metadata = {
  title: '404 | ConnEthics',
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <NotFoundContent lang="en" />
    </SiteShell>
  );
}
