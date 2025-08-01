import { Stripe } from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe on the server side (lazy initialization)
export const getStripeServer = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-07-30.basil',
  });
};

// Initialize Stripe on the client side
export const getStripe = () => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set');
  }
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
};

// Service tier configurations
export const SERVICE_TIERS = {
  sparringPartner: {
    name: 'Sparring Partner',
    price: 2000,
    currency: 'eur',
    interval: 'month',
    description: '1h/week strategic consulting',
    features: [
      'Weekly 1:1 strategic sessions',
      'Decision-making support on critical choices',
      'Strategic questioning and assumption challenging',
      'Experience sharing from similar scale-up challenges',
      'Async support via Slack/email'
    ],
    minCommitment: '3 months',
    targetAudience: 'CEOs, Head of Product (10-50 employees)',
    stripePriceId: process.env.STRIPE_SPARRING_PARTNER_PRICE_ID,
  },
  operationalAdvisor: {
    name: 'Operational Advisor',
    price: 10000,
    currency: 'eur',
    interval: 'month',
    description: '2×3h/week operational guidance',
    features: [
      'Bi-weekly discovery workshops',
      'Quarterly roadmap planning facilitation',
      'Process optimization and framework implementation',
      'Team coaching on product best practices',
      'Stakeholder alignment sessions',
      'Monthly strategic reviews'
    ],
    minCommitment: '6 months',
    targetAudience: 'Scale-ups (50-200 employees)',
    stripePriceId: process.env.STRIPE_OPERATIONAL_ADVISOR_PRICE_ID,
  },
  transitionalManager: {
    name: 'Transitional Manager',
    price: 15000,
    currency: 'eur',
    interval: 'month',
    description: '4×3h/week hands-on management',
    features: [
      'Hands-on team management (up to 4 PM, 2 UI, 2 QA, 10 R&D)',
      'Organizational restructuring guidance',
      'Process transformation leadership',
      'Cross-functional coordination',
      'Leadership development for internal team',
      'Change management during transitions'
    ],
    maxCommitment: '12 months',
    targetAudience: 'Growing companies (200+ employees)',
    stripePriceId: process.env.STRIPE_TRANSITIONAL_MANAGER_PRICE_ID,
  },
} as const;

// Additional services
export const ADDITIONAL_SERVICES = {
  productAudit: {
    name: 'Product & Business Audit',
    price: 5000,
    currency: 'eur',
    type: 'one-time',
    description: 'Comprehensive product and business assessment',
    stripePriceId: process.env.STRIPE_PRODUCT_AUDIT_PRICE_ID,
  },
  boardAdvisory: {
    name: 'Board Advisory',
    price: 1500,
    currency: 'eur',
    interval: 'month',
    description: 'Strategic board-level guidance',
    minCommitment: '6 months',
    stripePriceId: process.env.STRIPE_BOARD_ADVISORY_PRICE_ID,
  },
} as const;

// Type definitions for service tiers
interface BaseServiceTier {
  name: string;
  price: number;
  currency: string;
  interval: string;
  description: string;
  features: readonly string[];
  targetAudience: string;
  stripePriceId: string | undefined;
  minCommitment?: string;
  maxCommitment?: string;
}

export type ServiceTier = BaseServiceTier;
export type AdditionalService = typeof ADDITIONAL_SERVICES[keyof typeof ADDITIONAL_SERVICES];