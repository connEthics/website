import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting Services - ConnEthics | Product Management & Organizational Scaling',
  description: 'Scale your product organization with expert guidance. Choose from strategic sparring, operational advisory, or transitional management services. Proven experience scaling companies from 10 to 500+ employees.',
  keywords: [
    'product management consulting',
    'startup advisor',
    'scale-up guidance',
    'interim product manager',
    'product strategy consultant',
    'agile transformation',
    'organizational scaling',
    'product leadership',
    'ConnEthics'
  ],
  openGraph: {
    title: 'Consulting Services - ConnEthics',
    description: 'Scale your product organization with expert guidance. Flexible engagement models from strategic sparring to hands-on management.',
    type: 'website',
    images: [
      {
        url: '/images/logo-connethics.webp',
        width: 256,
        height: 256,
        alt: 'ConnEthics Consulting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulting Services - ConnEthics',
    description: 'Scale your product organization with expert guidance from experienced product leaders.',
  },
};

export default function ConsultingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}