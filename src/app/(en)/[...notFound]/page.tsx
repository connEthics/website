import { notFound } from 'next/navigation';

// With two root layouts (see src/i18n/config.ts) there is no top-level layout
// for unmatched URLs. This catch-all routes them to the 404 of the EN tree so
// they keep the site navigation and footer. Specific routes always win over it.
export default function CatchAllNotFound() {
  notFound();
}
