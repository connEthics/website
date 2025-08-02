# ConnEthics Stripe Integration Setup Guide

## Overview
This guide explains how to configure the Stripe integration for the ConnEthics consulting services platform. The integration supports subscription management, customer portal access, and payment processing for three service tiers plus additional services.

## Required Environment Variables

Create a `.env.local` file in the root of your project with the following Stripe configuration:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_... # Your Stripe secret key (starts with sk_test_ for test mode, sk_live_ for production)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... # Your Stripe publishable key (starts with pk_test_ for test mode, pk_live_ for production)
STRIPE_WEBHOOK_SECRET=whsec_... # Your webhook endpoint secret (starts with whsec_)

# Stripe Price IDs for Services
STRIPE_SPARRING_PARTNER_PRICE_ID=price_... # Price ID for Sparring Partner service (€2,000/month)
STRIPE_OPERATIONAL_ADVISOR_PRICE_ID=price_... # Price ID for Operational Advisor service (€10,000/month)
STRIPE_TRANSITIONAL_MANAGER_PRICE_ID=price_... # Price ID for Transitional Manager service (€15,000/month)
STRIPE_PRODUCT_AUDIT_PRICE_ID=price_... # Price ID for Product & Business Audit (€5,000 one-time)
STRIPE_BOARD_ADVISORY_PRICE_ID=price_... # Price ID for Board Advisory service (€1,500/month)

# Application URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000 # Your application's base URL (change for production)
```

## Stripe Dashboard Setup

### 1. Create Products and Prices in Stripe Dashboard

#### Service Tiers (Subscriptions)

1. **Sparring Partner**
   - Product Name: "Sparring Partner"
   - Price: €2,000.00 EUR
   - Billing: Monthly recurring
   - Copy the generated Price ID to `STRIPE_SPARRING_PARTNER_PRICE_ID`

2. **Operational Advisor**
   - Product Name: "Operational Advisor" 
   - Price: €10,000.00 EUR
   - Billing: Monthly recurring
   - Copy the generated Price ID to `STRIPE_OPERATIONAL_ADVISOR_PRICE_ID`

3. **Transitional Manager**
   - Product Name: "Transitional Manager"
   - Price: €15,000.00 EUR
   - Billing: Monthly recurring
   - Copy the generated Price ID to `STRIPE_TRANSITIONAL_MANAGER_PRICE_ID`

#### Additional Services

4. **Product & Business Audit**
   - Product Name: "Product & Business Audit"
   - Price: €5,000.00 EUR
   - Billing: One-time payment
   - Copy the generated Price ID to `STRIPE_PRODUCT_AUDIT_PRICE_ID`

5. **Board Advisory**
   - Product Name: "Board Advisory"
   - Price: €1,500.00 EUR
   - Billing: Monthly recurring
   - Copy the generated Price ID to `STRIPE_BOARD_ADVISORY_PRICE_ID`

### 2. Configure Customer Portal

1. Go to Stripe Dashboard > Settings > Billing > Customer Portal
2. Enable the Customer Portal
3. Configure allowed features:
   - ✅ Update payment method
   - ✅ Update billing address
   - ✅ View invoices
   - ✅ Download invoices
   - ✅ Cancel subscriptions
   - ✅ Change plan (optional)

### 3. Set Up Webhooks

1. Go to Stripe Dashboard > Developers > Webhooks
2. Click "Add endpoint"
3. Set endpoint URL: `https://yourdomain.com/api/stripe/webhook` (replace with your domain)
4. For local development: Use ngrok or similar tool to expose localhost:3000
5. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
6. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### 4. Configure Tax Settings (Optional but Recommended)

1. Go to Stripe Dashboard > Settings > Tax
2. Enable automatic tax calculation for EU/VAT compliance
3. Configure tax rates for your business location

## Testing the Integration

### 1. Test Card Numbers (Test Mode Only)

Use these test card numbers in Stripe test mode:
- **Successful payment**: 4242 4242 4242 4242
- **Declined payment**: 4000 0000 0000 0002
- **Requires authentication**: 4000 0025 0000 3155

### 2. Test the Flow

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the consulting services page**:
   ```
   http://localhost:3000/consulting-services
   ```

3. **Test subscription flow**:
   - Click "Get Started" on any service tier
   - Complete the Stripe Checkout flow with test cards
   - Verify success/error messages

4. **Test customer portal**:
   - Go to http://localhost:3000/customer-portal
   - Enter the test customer's email
   - Access the Stripe Customer Portal

### 3. Webhook Testing

For local webhook testing:

1. **Install ngrok** (if not already installed):
   ```bash
   npm install -g ngrok
   ```

2. **Expose your local server**:
   ```bash
   ngrok http 3000
   ```

3. **Update webhook URL** in Stripe Dashboard to the ngrok URL:
   ```
   https://your-ngrok-url.ngrok.io/api/stripe/webhook
   ```

4. **Test webhook events** by completing a purchase in test mode

## Production Deployment

### Environment Variables for Production

Update your production environment (Vercel, Railway, etc.) with:

```bash
# Production Stripe Keys
STRIPE_SECRET_KEY=sk_live_... # Live secret key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... # Live publishable key
STRIPE_WEBHOOK_SECRET=whsec_... # Production webhook secret

# Production URLs
NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# Same Price IDs (can be reused from test to live mode if recreated)
STRIPE_SPARRING_PARTNER_PRICE_ID=price_...
STRIPE_OPERATIONAL_ADVISOR_PRICE_ID=price_...
STRIPE_TRANSITIONAL_MANAGER_PRICE_ID=price_...
STRIPE_PRODUCT_AUDIT_PRICE_ID=price_...
STRIPE_BOARD_ADVISORY_PRICE_ID=price_...
```

### Production Checklist

- [ ] Switch from test mode to live mode in Stripe Dashboard
- [ ] Recreate products and prices in live mode
- [ ] Update environment variables with live keys and price IDs
- [ ] Configure production webhook endpoint
- [ ] Test the complete flow with real payment methods
- [ ] Set up tax collection if required
- [ ] Configure email notifications for payments and subscriptions

## API Endpoints

The integration provides these API endpoints:

### `/api/stripe/create-checkout-session` (POST)
Creates Stripe Checkout sessions for service purchases.

**Request body:**
```json
{
  "tierKey": "sparringPartner", // or "operationalAdvisor", "transitionalManager"
  "additionalServiceKey": "productAudit", // or "boardAdvisory"
  "returnUrl": "https://yourdomain.com/consulting-services"
}
```

### `/api/stripe/customer-portal` (GET/POST)
Creates customer portal sessions for subscription management.

**GET parameters:**
- `email`: Customer email address
- `return_url`: URL to return to after portal session

### `/api/stripe/webhook` (POST)
Handles Stripe webhook events for subscription lifecycle management.

### `/api/stripe/create-customer` (GET/POST)
Admin endpoint for creating and managing customers.

## User Journey

### New Customer Flow
1. **Discovery**: Browse `/consulting-services` page
2. **Selection**: Choose service tier and click "Get Started"
3. **Checkout**: Complete Stripe Checkout with payment details
4. **Confirmation**: Receive success message and email confirmation
5. **Onboarding**: ConnEthics team contacts within 24 hours

### Existing Customer Flow
1. **Portal Access**: Visit `/customer-portal` page
2. **Authentication**: Enter email address
3. **Management**: Access Stripe Customer Portal
4. **Self-Service**: Manage subscriptions, payments, and billing

## Troubleshooting

### Common Issues

1. **"STRIPE_SECRET_KEY is not set" error**
   - Ensure `.env.local` file exists with correct Stripe keys
   - Restart the development server after adding environment variables

2. **"Invalid price ID" error**
   - Verify price IDs in Stripe Dashboard match environment variables
   - Ensure you're using the correct mode (test vs live)

3. **Webhook signature verification failed**
   - Check webhook secret matches the one in Stripe Dashboard
   - Ensure webhook URL is correct and accessible

4. **Customer not found in portal**
   - Verify customer email exists in Stripe Dashboard
   - Check if customer was created in the same mode (test vs live)

### Support

For technical support:
- Check Stripe Dashboard > Logs for detailed error information
- Review webhook logs for event processing issues
- Contact ConnEthics development team for application-specific issues

## Security Considerations

- Never expose secret keys in client-side code
- Always validate webhook signatures to prevent unauthorized requests
- Use HTTPS in production for all webhook endpoints
- Regularly rotate API keys and webhook secrets
- Monitor Stripe Dashboard for unusual activity

## Next Steps

After completing the setup:
1. Test the complete flow in test mode
2. Configure email notifications for new subscriptions
3. Set up customer onboarding automation
4. Implement additional business logic as needed
5. Deploy to production and switch to live mode
