import Link from 'next/link';
import type { Locale } from '@/i18n/config';

const copy: Record<Locale, { message: string; back: string; home: string }> = {
  en: { message: 'This page could not be found.', back: 'Back to home', home: '/' },
  fr: { message: 'Cette page est introuvable.', back: "Retour à l'accueil", home: '/fr' },
};

/** 404 body rendered inside the EN or FR root layout. */
export default function NotFoundContent({ lang }: { lang: Locale }) {
  const t = copy[lang];
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-5xl font-bold text-blue-900">404</p>
      <p className="mt-4 text-lg text-gray-600">{t.message}</p>
      <Link href={t.home} className="mt-8 text-sm font-medium text-blue-700 hover:text-blue-900">
        {t.back} →
      </Link>
    </div>
  );
}
