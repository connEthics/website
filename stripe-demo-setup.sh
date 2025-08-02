#!/bin/bash

# ConnEthics Stripe Demo Setup Script
# This script helps set up a demo Stripe configuration for testing

echo "🏗️  ConnEthics Stripe Demo Setup"
echo "=================================="
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local file not found. Please create it first."
    exit 1
fi

echo "📋 Stripe Setup Checklist:"
echo ""
echo "1. 📝 Create a Stripe account at https://stripe.com"
echo "2. 🔑 Get your API keys from https://dashboard.stripe.com/test/apikeys"
echo "3. 💳 Create products and prices in the Stripe Dashboard"
echo "4. 🔗 Set up webhook endpoints"
echo ""

read -p "Press Enter to continue when you have your Stripe keys ready..."

echo ""
echo "🔧 Configuration needed in .env.local:"
echo ""
echo "# Stripe Test Keys (from https://dashboard.stripe.com/test/apikeys)"
echo "STRIPE_SECRET_KEY=sk_test_..."
echo "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_..."
echo ""
echo "# Webhook Secret (after creating webhook endpoint)"
echo "STRIPE_WEBHOOK_SECRET=whsec_..."
echo ""
echo "# Price IDs (after creating products in Stripe Dashboard)"
echo "STRIPE_SPARRING_PARTNER_PRICE_ID=price_..."
echo "STRIPE_OPERATIONAL_ADVISOR_PRICE_ID=price_..."
echo "STRIPE_TRANSITIONAL_MANAGER_PRICE_ID=price_..."
echo "STRIPE_PRODUCT_AUDIT_PRICE_ID=price_..."
echo "STRIPE_BOARD_ADVISORY_PRICE_ID=price_..."
echo ""

echo "📖 For detailed setup instructions, see STRIPE_SETUP.md"
echo ""

# Check if keys are configured
if grep -q "sk_test_your_secret_key_here" .env.local; then
    echo "⚠️  Stripe keys are not configured yet. Please update .env.local with your actual Stripe keys."
    echo ""
    echo "To test the integration:"
    echo "1. Update the environment variables in .env.local"
    echo "2. Restart the development server: npm run dev"
    echo "3. Visit http://localhost:3000/consulting-services"
    echo "4. Try the 'Get Started' buttons with test card 4242 4242 4242 4242"
else
    echo "✅ Stripe configuration appears to be set up!"
    echo ""
    echo "🧪 To test the integration:"
    echo "1. Visit http://localhost:3000/consulting-services"
    echo "2. Click 'Get Started' on any service"
    echo "3. Use test card: 4242 4242 4242 4242"
    echo "4. Any CVC, future expiry date"
    echo ""
    echo "🏢 To test customer portal:"
    echo "1. Complete a test purchase first"
    echo "2. Visit http://localhost:3000/customer-portal"
    echo "3. Enter the test customer's email"
fi

echo ""
echo "🚀 Ready to test! Run 'npm run dev' and visit http://localhost:3000/consulting-services"
