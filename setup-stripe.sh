#!/bin/bash

# ConnEthics Stripe Setup Helper
# This script helps you set up Stripe for the ConnEthics consulting platform

echo "🚀 ConnEthics Stripe Setup Helper"
echo "=================================="
echo ""

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory."
    exit 1
fi

# Check if Stripe package is installed
if [ ! -d "node_modules/stripe" ]; then
    echo "📦 Installing Stripe package..."
    npm install stripe
fi

echo "🔑 Please set your Stripe secret key:"
echo "   You can get it from: https://dashboard.stripe.com/test/apikeys"
echo ""

# Prompt for Stripe key if not set
if [ -z "$STRIPE_SECRET_KEY" ]; then
    read -p "Enter your Stripe secret key (sk_test_...): " STRIPE_SECRET_KEY
    export STRIPE_SECRET_KEY
fi

# Validate the key format
if [[ ! $STRIPE_SECRET_KEY =~ ^sk_(test_|live_) ]]; then
    echo "❌ Invalid Stripe key format. Should start with 'sk_test_' or 'sk_live_'"
    exit 1
fi

echo ""
echo "🛠️  Running Stripe setup script..."
echo ""

# Run the Node.js setup script
node scripts/setup-stripe.js

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup completed! Check the output above for next steps."
    echo ""
    echo "📁 Your Stripe configuration has been saved to .env.stripe"
    echo "   Copy the values to your .env.local file to use them."
else
    echo ""
    echo "❌ Setup failed. Please check the error messages above."
    exit 1
fi
