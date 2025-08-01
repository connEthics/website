/**
 * Constants for the ConnEthics website
 * Centralized configuration and constants
 */

// Brand Configuration
export const BRAND = {
  name: 'ConnEthics',
  tagline: 'Ethical Connections in a Competitive World',
  description: 'Building ethical business ecosystems through AI ethics consulting, self-sovereign identity, and strategic product leadership.',
  email: 'contact@connethics.com',
  phone: '+1 (555) 123-4567',
  website: 'https://connethics.com',
} as const;

// Navigation Configuration
export const NAVIGATION = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ],
  footer: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Legal', href: '/legal' },
  ],
} as const;

// Services Configuration
export const SERVICES = {
  'self-sovereign-identity': {
    title: 'Self-Sovereign Identity',
    slug: 'self-sovereign-identity',
    icon: 'shield-check',
    description: 'Prepare for SSI integration and deployment. Empower individuals to securely control their digital identities.',
  },
  'ecosystem-cartography': {
    title: 'Ecosystem Cartography',
    slug: 'ecosystem-cartography', 
    icon: 'map',
    description: 'Generate actionable insights through competitive intelligence and economic warfare analysis.',
  },
  'product-leadership': {
    title: 'Product Leadership',
    slug: 'product-leadership',
    icon: 'chart-bar',
    description: 'Align product roadmaps with strategic goals and OKRs using data-driven insights.',
  },
  'trust-identity-deployment': {
    title: 'Trust and Identity Deployment',
    slug: 'trust-identity-deployment',
    icon: 'lock-closed',
    description: 'Define, build, and certify verifiable credentials with secure network deployment.',
  },
  'product-management': {
    title: 'Product Management',
    slug: 'product-management',
    icon: 'cog',
    description: 'Initiate and scale product teams effectively with optimized release processes.',
  },
} as const;

// Content Categories
export const CONTENT_CATEGORIES = {
  'self-sovereign-identity': 'Self-Sovereign Identity',
  'ecosystem-cartography': 'Ecosystem Cartography',
  'trust-identity': 'Trust & Identity',
  'product-leadership': 'Product Leadership',
  'business-ethics': 'Business Ethics',
  'ai-ethics': 'AI Ethics',
} as const;

// SEO Configuration
export const SEO = {
  defaultTitle: 'ConnEthics - AI Ethics Consulting & Strategic Product Leadership',
  titleTemplate: '%s | ConnEthics',
  defaultDescription: 'Expert AI ethics consulting, self-sovereign identity implementation, and strategic product leadership for competitive business environments.',
  keywords: [
    'AI ethics consulting',
    'self-sovereign identity',
    'SSI implementation',
    'competitive intelligence',
    'product leadership',
    'business ethics',
    'strategic consulting',
    'verifiable credentials',
    'ecosystem cartography',
    'digital identity',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ConnEthics',
  },
} as const;

// API Configuration
export const API = {
  endpoints: {
    contact: '/api/contact',
    newsletter: '/api/newsletter',
  },
  timeout: 10000, // 10 seconds
} as const;

// Form Validation
export const VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number',
  },
  required: {
    message: 'This field is required',
  },
  minLength: (min: number) => ({
    min,
    message: `Must be at least ${min} characters`,
  }),
  maxLength: (max: number) => ({
    max,
    message: `Must be no more than ${max} characters`,
  }),
} as const;

// Theme Configuration
export const THEME = {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  transitions: {
    fast: 150,
    normal: 200,
    slow: 300,
  },
} as const;

// Content Limits
export const CONTENT_LIMITS = {
  excerptLength: 160,
  titleLength: 60,
  descriptionLength: 155,
  postsPerPage: 12,
  relatedArticles: 3,
} as const;

// Social Media
export const SOCIAL = {
  linkedin: 'https://linkedin.com/company/connethics',
  twitter: 'https://twitter.com/connethics',
  github: 'https://github.com/connethics',
} as const;

// Feature Flags
export const FEATURES = {
  newsletter: true,
  blog: true,
  darkMode: true,
  analytics: true,
  contactForm: true,
} as const;