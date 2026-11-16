import type { Metadata } from 'next';
import Home from '../../(en)/page';
import { buildAlternates } from '@/i18n/alternates';

// French home. Reuses the home page component until its content is translated
// (needed so the FR tree and the language switcher have a counterpart for `/`).
export const metadata: Metadata = {
  ...buildAlternates('/', '/fr', 'fr'),
};

export default Home;
