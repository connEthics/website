#!/usr/bin/env node

/**
 * Configure Stripe Customer Portal for ConnEthics
 */

// Load environment variables first
require('dotenv').config({ path: '.env.local' });

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY not found in environment variables');
  process.exit(1);
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function configureCustomerPortal() {
  console.log('🏛️  Configuring Stripe Customer Portal...');
  
  try {
    // Check if configuration already exists
    try {
      const existingConfig = await stripe.billingPortal.configurations.list({ limit: 1 });
      
      if (existingConfig.data.length > 0) {
        console.log('✅ Customer Portal is already configured!');
        console.log(`   Configuration ID: ${existingConfig.data[0].id}`);
        return;
      }
    } catch (error) {
      // Continue with creating new configuration
    }

    // Create Customer Portal configuration
    const configuration = await stripe.billingPortal.configurations.create({
      business_profile: {
        headline: 'ConnEthics Consulting Services',
        privacy_policy_url: 'https://connethics.com/privacy',
        terms_of_service_url: 'https://connethics.com/legal',
      },
      features: {
        payment_method_update: {
          enabled: true,
        },
        invoice_history: {
          enabled: true,
        },
        subscription_cancel: {
          enabled: true,
          mode: 'at_period_end',
          proration_behavior: 'none',
        },
        subscription_update: {
          enabled: true,
          default_allowed_updates: ['price'],
          proration_behavior: 'create_prorations',
        },
      },
      default_return_url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
    });

    console.log('✅ Customer Portal configured successfully!');
    console.log(`   Configuration ID: ${configuration.id}`);
    console.log('   Features enabled:');
    console.log('   • Update payment methods');
    console.log('   • View invoice history');
    console.log('   • Cancel subscriptions');
    console.log('   • Update subscription plans');

  } catch (error) {
    console.error('❌ Failed to configure Customer Portal:');
    console.error(`   ${error.message}`);
    console.log('\n📖 Manual setup required:');
    console.log('   1. Go to: https://dashboard.stripe.com/test/settings/billing/portal');
    console.log('   2. Click "Activate test link"');
    console.log('   3. Configure the features you want to enable');
  }
}

configureCustomerPortal();
