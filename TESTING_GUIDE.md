# ConnEthics Stripe Integration Testing Guide

This guide walks you through testing the complete ConnEthics consulting services platform with Stripe integration.

## 🚀 Quick Start (Currently Running)

**Your development server is running at: http://localhost:3001**

- **Consulting Services Page**: http://localhost:3001/consulting-services
- **Customer Portal**: http://localhost:3001/customer-portal

## ⚠️ Current Status

**The Stripe integration requires configuration before it can be fully tested.** The application is currently missing:

1. Stripe API keys
2. Product and price IDs
3. Webhook configuration

## 🔧 Configuration Required

### Step 1: Get Stripe Test Account

1. **Create a Stripe account** (if you don't have one):
   - Go to https://stripe.com
   - Sign up for a free account
   - You'll automatically get test mode access

2. **Get your test API keys**:
   - Go to https://dashboard.stripe.com/test/apikeys
   - Copy the "Publishable key" (starts with `pk_test_`)
   - Copy the "Secret key" (starts with `sk_test_`)

### Step 2: Create Products in Stripe Dashboard

1. **Go to Stripe Dashboard > Products**: https://dashboard.stripe.com/test/products

2. **Create these 5 products with prices**:

   **Sparring Partner**
   - Name: "Sparring Partner"
   - Price: €2,000.00 EUR
   - Billing: Monthly recurring
   - Copy the Price ID (starts with `price_`)

   **Operational Advisor**
   - Name: "Operational Advisor" 
   - Price: €10,000.00 EUR
   - Billing: Monthly recurring
   - Copy the Price ID

   **Transitional Manager**
   - Name: "Transitional Manager"
   - Price: €15,000.00 EUR
   - Billing: Monthly recurring
   - Copy the Price ID

   **Product & Business Audit**
   - Name: "Product & Business Audit"
   - Price: €5,000.00 EUR
   - Billing: One-time payment
   - Copy the Price ID

   **Board Advisory**
   - Name: "Board Advisory"
   - Price: €1,500.00 EUR
   - Billing: Monthly recurring
   - Copy the Price ID

### Step 3: Update Environment Variables

Edit your `.env.local` file and replace the placeholder values:

```bash
# Replace these with your actual Stripe keys
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_PUBLISHABLE_KEY

# Replace these with your actual Price IDs from Step 2
STRIPE_SPARRING_PARTNER_PRICE_ID=price_YOUR_SPARRING_PARTNER_PRICE_ID
STRIPE_OPERATIONAL_ADVISOR_PRICE_ID=price_YOUR_OPERATIONAL_ADVISOR_PRICE_ID
STRIPE_TRANSITIONAL_MANAGER_PRICE_ID=price_YOUR_TRANSITIONAL_MANAGER_PRICE_ID
STRIPE_PRODUCT_AUDIT_PRICE_ID=price_YOUR_PRODUCT_AUDIT_PRICE_ID
STRIPE_BOARD_ADVISORY_PRICE_ID=price_YOUR_BOARD_ADVISORY_PRICE_ID

# You can skip the webhook secret for now (needed later for production)
STRIPE_WEBHOOK_SECRET=whsec_placeholder
```

### Step 4: Restart Development Server

After updating the environment variables:

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## 🧪 Testing the Integration

### Test 1: Creating a User Account via Subscription

1. **Navigate to**: http://localhost:3001/consulting-services

2. **Choose a service tier** and click "Get Started"

3. **Stripe Checkout will open** where you can:
   - Enter customer details (name, email)
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC

4. **Complete the checkout** - this creates:
   - A Stripe customer account
   - A subscription for the selected service
   - Automatic access to customer portal

### Test 2: Accessing Customer Portal

1. **Navigate to**: http://localhost:3001/customer-portal

2. **Enter the email** you used in the checkout process

3. **You'll be redirected** to Stripe's Customer Portal where you can:
   - View subscription details
   - Download invoices
   - Update payment methods
   - Cancel subscriptions
   - Change billing address

### Test 3: Admin Customer Creation

You can also create customers via the API for testing:

```bash
# Create a customer via API
curl -X POST http://localhost:3001/api/stripe/create-customer \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test Customer",
    "description": "Test customer for demo"
  }'
```

## 🃏 Test Cards

Use these test cards in Stripe Checkout:

| Card Number | Description |
|------------|-------------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 0002` | Declined payment |
| `4000 0025 0000 3155` | Requires 3D Secure authentication |
| `4000 0000 0000 9995` | Insufficient funds |

Always use:
- Any future expiry date (e.g., 12/34)
- Any 3-digit CVC (e.g., 123)

## 📋 User Journey Testing Checklist

### New Customer Journey
- [ ] Browse consulting services page
- [ ] Click "Get Started" on a service tier
- [ ] Complete Stripe Checkout with test card
- [ ] See success message on return
- [ ] Customer account created in Stripe Dashboard
- [ ] Subscription active in Stripe Dashboard

### Existing Customer Journey  
- [ ] Access customer portal with email
- [ ] View subscription details
- [ ] Update payment method
- [ ] View/download invoices
- [ ] Test subscription cancellation (optional)

### Error Handling
- [ ] Try checkout with declined card
- [ ] Test customer portal with non-existent email
- [ ] Verify error messages are user-friendly

## 🔍 Monitoring & Debugging

### Stripe Dashboard
- **Customers**: https://dashboard.stripe.com/test/customers
- **Subscriptions**: https://dashboard.stripe.com/test/subscriptions
- **Payments**: https://dashboard.stripe.com/test/payments
- **Logs**: https://dashboard.stripe.com/test/logs

### Application Logs
Check your terminal for:
- API endpoint calls
- Stripe integration status
- Error messages

### Browser Developer Tools
- Check Network tab for API requests
- Look at Console for JavaScript errors
- Verify Stripe Checkout loading

## 🚨 Common Issues & Solutions

### Issue: "STRIPE_SECRET_KEY is not set"
**Solution**: Update `.env.local` with your actual Stripe keys and restart the server

### Issue: "Invalid price ID" 
**Solution**: Ensure price IDs in `.env.local` match those in your Stripe Dashboard

### Issue: Checkout not opening
**Solution**: Check browser console for errors and verify publishable key is correct

### Issue: Customer not found in portal
**Solution**: Ensure you completed a checkout first to create the customer

## 🎯 What Each Component Does

### `/consulting-services`
- **Hero Section**: Value proposition and service overview
- **Pricing Table**: Three service tiers with Stripe integration
- **Additional Services**: One-time and additional subscriptions
- **Get Started Buttons**: Create Stripe Checkout sessions

### `/customer-portal`
- **Email Entry**: Find customer by email
- **Portal Access**: Redirect to Stripe Customer Portal
- **Self-Service**: Manage subscriptions and billing

### API Endpoints
- **`/api/stripe/create-checkout-session`**: Creates payment sessions
- **`/api/stripe/customer-portal`**: Generates portal access
- **`/api/stripe/create-customer`**: Admin customer creation
- **`/api/stripe/webhook`**: Handles subscription events (requires setup)

## 🎉 Success Criteria

After configuration, you should be able to:

1. ✅ **View the consulting services page** with professional pricing tiers
2. ✅ **Complete a test purchase** using Stripe Checkout
3. ✅ **Access customer portal** with the customer email
4. ✅ **Manage subscription** through Stripe's interface
5. ✅ **See customer data** in Stripe Dashboard

## 🚀 Next Steps

Once basic testing works:

1. **Set up webhooks** for automated subscription management
2. **Configure email notifications** for new customers
3. **Add business logic** for customer onboarding
4. **Test in production** with live Stripe keys
5. **Add monitoring** and analytics

## 📞 Support

If you encounter issues:
1. Check the detailed `STRIPE_SETUP.md` guide
2. Review Stripe Dashboard logs
3. Check application terminal output
4. Verify environment variables are correct

**Happy testing! 🚀**
