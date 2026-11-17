import type { Metadata } from 'next';
import ArazzoLanding, { buildArazzoMetadata } from '@/components/arazzo/ArazzoLanding';

export const metadata: Metadata = buildArazzoMetadata('fr');

export default function ArazzoPageFr() {
  return <ArazzoLanding locale="fr" />;
}
