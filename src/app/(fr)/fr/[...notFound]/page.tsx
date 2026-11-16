import { notFound } from 'next/navigation';

// Unmatched `/fr/...` URLs: 404 inside the FR root layout (<html lang="fr">).
export default function CatchAllNotFound() {
  notFound();
}
