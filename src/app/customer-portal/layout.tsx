import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Portal - ConnEthics | Manage Your Subscription',
  description: 'Access your ConnEthics customer portal to manage your consulting subscription, payment methods, and billing information.',
  robots: 'noindex, nofollow', // Keep this private
};

export default function CustomerPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}