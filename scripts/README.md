# 🚀 Stripe Setup for ConnEthics Consulting Platform

This directory contains automated scripts to set up your Stripe integration for the ConnEthics consulting services platform.

## 📋 Quick Setup

### 1. Get Your Stripe Keys

1. **Create/Login to Stripe**: https://stripe.com
2. **Get Test Keys**: https://dashboard.stripe.com/test/apikeys
   - Copy your **Secret key** (starts with `sk_test_`)
   - Copy your **Publishable key** (starts with `pk_test_`)

### 2. Run the Automated Setup

**Option A: Use the helper script (Recommended)**
```bash
./setup-stripe.sh
```

**Option B: Set environment variable manually**
```bash
export STRIPE_SECRET_KEY=sk_test_your_secret_key_here
npm run stripe:setup
```

### 3. Update Your Environment

1. **Copy the generated configuration** from `.env.stripe` to `.env.local`
2. **Add your publishable key** to `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. **Restart your development server**

### 4. Validate Setup

```bash
npm run stripe:validate
```

## 🛠️ What Gets Created

### Products & Prices

The script creates these Stripe products with proper descriptions and metadata:

| Service | Price | Type | Description |
|---------|-------|------|-------------|
| **Sparring Partner** | €2,000/month | Subscription | Weekly strategic consulting (1h/week) |
| **Operational Advisor** | €10,000/month | Subscription | Bi-weekly operational guidance (6h/week) |
| **Transitional Manager** | €15,000/month | Subscription | Hands-on management (12h/week) |
| **Product & Business Audit** | €5,000 | One-time | Comprehensive assessment |
| **Board Advisory** | €1,500/month | Subscription | Strategic board-level guidance |

### Webhook Configuration

- **Endpoint**: `{your-domain}/api/stripe/webhook`
- **Events**: All subscription and payment lifecycle events
- **Purpose**: Automated customer onboarding and subscription management

### Metadata & Descriptions

Each product includes:
- **Detailed descriptions** that appear on invoices and Stripe pages
- **Target audience** information
- **Commitment requirements** (3-12 months)
- **Service format** details
- **Hours per week** specifications

## 🧪 Testing

### Test Cards

Use these in Stripe Checkout:

| Card Number | Result |
|-------------|--------|
| `4242 4242 4242 4242` | ✅ Successful payment |
| `4000 0000 0000 0002` | ❌ Declined payment |
| `4000 0025 0000 3155` | 🔐 Requires 3D Secure |

**Always use:**
- Any future expiry date (e.g., `12/34`)
- Any 3-digit CVC (e.g., `123`)

### Test Flow

1. **Visit**: http://localhost:3000/consulting-services
2. **Click**: "Get Started" on any service
3. **Complete**: Stripe Checkout with test card
4. **Verify**: Success message and customer creation in Stripe Dashboard

## 📁 Files Created

```
scripts/
├── setup-stripe.js      # Main setup script
├── validate-stripe.js   # Validation script
└── README.md           # This file

.env.stripe             # Generated configuration (copy to .env.local)
setup-stripe.sh         # Helper bash script
```

## 🔧 Script Commands

```bash
# Create all Stripe products and webhooks
npm run stripe:setup

# Validate your current configuration  
npm run stripe:validate

# Show help for Stripe commands
npm run stripe:help
```

## 🏢 Product Consistency

The script ensures that:

- **Product names** match exactly what customers see in the UI
- **Descriptions** are detailed and professional for invoices
- **Metadata** includes all service details for reference
- **Pricing** matches the consulting services page exactly
- **Currency** is set to EUR for European compliance

## 🪝 Webhook Events

The webhook listens for these events:

- `checkout.session.completed` - New subscription created
- `customer.subscription.created` - Subscription activated
- `customer.subscription.updated` - Plan changes
- `customer.subscription.deleted` - Cancellations
- `invoice.payment_succeeded` - Successful payments
- `invoice.payment_failed` - Failed payments
- `customer.created` - New customer accounts
- `customer.updated` - Customer information changes

## 🔐 Security Notes

- **Never commit** your actual Stripe keys to version control
- **Use test keys** during development (they start with `sk_test_`)
- **Validate webhook signatures** to prevent unauthorized requests
- **Keep your keys secure** and rotate them regularly

## 🚨 Troubleshooting

### "Module not found: stripe"
```bash
npm install stripe
```

### "STRIPE_SECRET_KEY is not set"
```bash
export STRIPE_SECRET_KEY=sk_test_your_key_here
```

### "Product already exists"
This is normal - the script will use existing products instead of creating duplicates.

### "Invalid price ID"
Run `npm run stripe:validate` to check if your price IDs are correct.

## 🌍 Production Setup

For production deployment:

1. **Switch to live mode** in Stripe Dashboard
2. **Create products again** with live keys
3. **Update environment variables** with live keys and price IDs
4. **Configure production webhook** with your production domain
5. **Test thoroughly** before going live

## 📞 Support

- **Stripe Dashboard**: https://dashboard.stripe.com
- **Stripe Documentation**: https://docs.stripe.com
- **ConnEthics Setup Guide**: See `STRIPE_SETUP.md` in project root

---

**Ready to accept payments and grow your consulting business! 💳✨**
