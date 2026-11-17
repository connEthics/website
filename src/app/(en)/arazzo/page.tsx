import type { Metadata } from 'next';
import ArazzoLanding, { buildArazzoMetadata } from '@/components/arazzo/ArazzoLanding';

export const metadata: Metadata = buildArazzoMetadata('en');

export default function ArazzoPage() {
  return <ArazzoLanding locale="en" />;
}
