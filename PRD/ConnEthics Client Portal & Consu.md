# PRD - ConnEthics Client Portal & Consulting Services Platform

## 1. Product Overview

### 1.1 Vision
Create a seamless client experience for ConnEthics consulting services with integrated payment processing, subscription management, and client portal functionality.

### 1.2 Business Objectives
- Generate qualified leads through professional service offerings
- Streamline client onboarding and subscription management
- Establish recurring revenue through subscription-based consulting
- Provide transparent billing and payment experience

### 1.3 Success Metrics
- Conversion rate from landing page to subscription
- Monthly recurring revenue (MRR) growth
- Client retention rate by service tier
- Payment processing success rate

## 2. Target Users

### 2.1 Primary Users
- **CEOs/Founders** (Scale-ups 10-50 employees)
- **Head of Product** (Growing companies 50-200 employees)
- **Product Leaders** (Enterprise 200+ employees)

### 2.2 User Personas
- **Strategic Decision Makers**: Need external perspective on product strategy
- **Operational Leaders**: Require hands-on process optimization
- **Transitional Executives**: Managing organizational change and growth

## 3. Product Architecture

### 3.1 Technical Stack
- **Frontend**: Next.js with TypeScript
- **Authentication**: Stripe Identity
- **Payments**: Stripe Checkout + Customer Portal
- **Billing**: Stripe Subscriptions & Invoicing
- **Hosting**: Vercel (aligned with existing ConnEthics website)

### 3.2 Core Components
1. **Public Landing Page** (`/consulting-services`)
2. **Stripe Checkout Integration** (API routes)
3. **Customer Portal** (Stripe-hosted)
4. **Admin Dashboard** (Stripe Dashboard)

## 4. Service Offerings

### 4.1 Sparring Partner - €2,000/month
**Format**: 1h/week (4h/month)
**Target**: CEOs, Head of Product (10-50 employees)
**Minimum Engagement**: 3 months

**Deliverables**:
- Weekly 1:1 strategic sessions
- Decision-making support on critical choices
- Strategic questioning and assumption challenging
- Experience sharing from similar scale-up challenges
- Async support via Slack/email

### 4.2 Operational Advisor - €10,000/month
**Format**: 2×3h/week (24h/month)
**Target**: Scale-ups (50-200 employees)
**Minimum Engagement**: 6 months

**Deliverables**:
- Bi-weekly discovery workshops
- Quarterly roadmap planning facilitation
- Process optimization and framework implementation
- Team coaching on product best practices
- Stakeholder alignment sessions
- Monthly strategic reviews

### 4.3 Transitional Manager - €15,000/month
**Format**: 4×3h/week (48h/month)
**Target**: Growing companies (200+ employees)
**Maximum Engagement**: 12 months

**Deliverables**:
- Hands-on team management (up to 4 PM, 2 UI, 2 QA, 10 R&D)
- Organizational restructuring guidance
- Process transformation leadership
- Cross-functional coordination
- Leadership development for internal team
- Change management during transitions

### 4.4 Additional Services
- **Product & Business Audit**: €5,000 one-time
- **Board Advisory**: €1,500/month (6-month minimum)

## 5. User Journey & Flows

### 5.1 New Client Journey
1. **Discovery**: Arrive on `/consulting-services` landing page
2. **Evaluation**: Review service offerings and pricing
3. **Social Proof**: Read testimonials and case studies
4. **Selection**: Choose appropriate service tier
5. **Checkout**: Stripe Checkout with identity verification
6. **Onboarding**: Welcome email + first session scheduling
7. **Management**: Access Stripe Customer Portal

### 5.2 Existing Client Journey
1. **Authentication**: Stripe Identity login
2. **Portal Access**: Stripe Customer Portal
3. **Self-Service**: Manage subscriptions, payments, invoices
4. **Upgrades**: Change service tier via portal

### 5.3 Admin Journey
1. **Client Creation**: Via Stripe Dashboard or API
2. **Invitation**: Send Customer Portal access
3. **Invoice Management**: Create ad-hoc invoices
4. **Reporting**: Analytics via Stripe Dashboard

## 6. Functional Requirements

### 6.1 Landing Page Features
- **Hero Section**: Clear value proposition
- **Service Tiers**: Detailed comparison table
- **Social Proof**: Client testimonials and logos
- **Case Studies**: Concrete examples per service tier
- **CTA Buttons**: Direct Stripe Checkout integration
- **Responsive Design**: Mobile-first approach
- **SEO Optimization**: Target keywords implementation

### 6.2 Authentication & Security
- **Stripe Identity**: Primary authentication method
- **Multi-Factor Authentication**: Optional for high-tier clients
- **Session Management**: Secure token handling
- **Data Protection**: GDPR compliance

### 6.3 Payment & Billing
- **Subscription Management**: Automatic recurring billing
- **Invoice Generation**: Monthly automated + ad-hoc manual
- **Payment Methods**: Credit/debit cards via Stripe
- **Dunning Management**: Failed payment recovery
- **Tax Handling**: VAT calculation by region

### 6.4 Client Portal (Stripe Customer Portal)
- **Subscription Overview**: Current plan and usage
- **Invoice History**: Download and view past invoices
- **Payment Methods**: Add/remove cards
- **Billing Address**: Update information
- **Plan Changes**: Upgrade/downgrade subscriptions

## 7. Technical Implementation

### 7.1 API Endpoints
- `POST /api/create-checkout-session` - Stripe Checkout creation
- `POST /api/webhook` - Stripe webhook handling
- `GET /api/customer-portal` - Portal session creation
- `POST /api/create-customer` - Admin customer creation

### 7.2 Database Schema (Stripe as source of truth)
- **Customers**: Stripe Customer objects
- **Subscriptions**: Stripe Subscription objects
- **Invoices**: Stripe Invoice objects
- **Products**: Stripe Product objects (3 service tiers)

### 7.3 Integration Points
- **Stripe Checkout**: Subscription creation
- **Stripe Customer Portal**: Self-service management
- **Stripe Webhooks**: Real-time event processing
- **Email Notifications**: Welcome, invoice, failed payment

## 8. Content Strategy

### 8.1 Landing Page Content
- **Headline**: "Scale Your Product Organization with Expert Guidance"
- **Value Props**: Proven experience, flexible engagement, measurable outcomes
- **Service Benefits**: Clear ROI for each tier
- **Social Proof**: 5-7 client testimonials
- **Case Studies**: 1 detailed example per service tier

### 8.2 Testimonials & Social Proof
- **Format**: Photo + quote + name + company + role
- **Focus**: Measurable outcomes and specific achievements
- **Distribution**: Across service tiers and company sizes
- **Updates**: Quarterly refresh with new testimonials

### 8.3 SEO Keywords
- Primary: "product management consulting", "startup advisor", "scale-up guidance"
- Long-tail: "interim product manager", "product strategy consultant", "agile transformation"

## 9. Terms of Service Summary

### 9.1 Service Commitments
- **Minimum Engagements**: 3-12 months based on tier
- **Trial Period**: 30 days with 15-day notice for cancellation
- **Session Format**: Video/in-person, business hours CET
- **Cancellation Policy**: 24h notice required

### 9.2 Pricing & Billing
- **Currency**: EUR with VAT handling
- **Payment Terms**: Monthly automatic billing
- **Late Payments**: Automatic retry + dunning emails
- **Refunds**: Prorata during trial period only

### 9.3 Confidentiality & IP
- **NDA**: Required before engagement start
- **Data Protection**: GDPR compliant processing
- **IP Ownership**: Client work product vs. ConnEthics methods

## 10. Success Criteria

### 10.1 Launch Metrics (First 3 months)
- 100+ landing page visitors/month
- 5% conversion rate to checkout
- 2+ subscriptions per service tier
- 95% payment success rate

### 10.2 Growth Metrics (6-12 months)
- €50K+ MRR across all tiers
- 90%+ client retention rate
- 4.5+ client satisfaction score
- 50+ organic testimonials

### 10.3 Platform Metrics
- 99.9% uptime for payment processing
- <2s page load time for landing page
- 0 security incidents
- 100% GDPR compliance audit

## 11. Implementation Timeline

### Phase 1 (Weeks 1-2): Foundation
- Landing page design and content
- Stripe integration setup
- Basic authentication flow

### Phase 2 (Weeks 3-4): Core Features
- Checkout flow implementation
- Customer Portal integration
- Webhook processing

### Phase 3 (Weeks 5-6): Polish & Launch
- Content refinement and testimonials
- SEO optimization
- Testing and bug fixes
- Soft launch with beta clients

### Phase 4 (Ongoing): Optimization
- Analytics implementation
- A/B testing
- Content updates
- Feature enhancements based on feedback

