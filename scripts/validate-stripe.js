#!/usr/bin/env node

/**
 * ConnEthics Stripe Validation Script
 * 
 * This script validates that your Stripe setup is correctly configured
 * and all products/prices are accessible.
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function validateEnvironment() {
  log('\n🔍 Validating environment configuration...', 'cyan');
  
  const requiredVars = [
    'STRIPE_SECRET_KEY',
    'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
    'STRIPE_SPARRING_PARTNER_PRICE_ID',
    'STRIPE_OPERATIONAL_ADVISOR_PRICE_ID',
    'STRIPE_TRANSITIONAL_MANAGER_PRICE_ID',
    'STRIPE_PRODUCT_AUDIT_PRICE_ID',
    'STRIPE_BOARD_ADVISORY_PRICE_ID'
  ];

  const missing = [];
  
  for (const varName of requiredVars) {
    if (process.env[varName]) {
      log(`   ✅ ${varName}`, 'green');
    } else {
      log(`   ❌ ${varName} - MISSING`, 'red');
      missing.push(varName);
    }
  }

  if (missing.length > 0) {
    log(`\n❌ ${missing.length} environment variables are missing!`, 'red');
    return false;
  }

  log('\n✅ All environment variables are set!', 'green');
  return true;
}

async function validateStripeConnection() {
  log('\n🔗 Validating Stripe connection...', 'cyan');
  
  if (!process.env.STRIPE_SECRET_KEY) {
    log('❌ STRIPE_SECRET_KEY not found', 'red');
    return false;
  }

  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const account = await stripe.accounts.retrieve();
    
    log(`✅ Connected to: ${account.display_name || account.id}`, 'green');
    log(`   Mode: ${process.env.STRIPE_SECRET_KEY.startsWith('sk_live_') ? 'LIVE' : 'TEST'}`, 'yellow');
    
    return stripe;
  } catch (error) {
    log(`❌ Stripe connection failed: ${error.message}`, 'red');
    return false;
  }
}

async function validatePrices(stripe) {
  log('\n💰 Validating price configurations...', 'cyan');
  
  const priceVars = [
    { env: 'STRIPE_SPARRING_PARTNER_PRICE_ID', name: 'Sparring Partner', amount: 200000 },
    { env: 'STRIPE_OPERATIONAL_ADVISOR_PRICE_ID', name: 'Operational Advisor', amount: 1000000 },
    { env: 'STRIPE_TRANSITIONAL_MANAGER_PRICE_ID', name: 'Transitional Manager', amount: 1500000 },
    { env: 'STRIPE_PRODUCT_AUDIT_PRICE_ID', name: 'Product & Business Audit', amount: 500000 },
    { env: 'STRIPE_BOARD_ADVISORY_PRICE_ID', name: 'Board Advisory', amount: 150000 }
  ];

  let allValid = true;

  for (const priceConfig of priceVars) {
    const priceId = process.env[priceConfig.env];
    
    if (!priceId) {
      log(`   ❌ ${priceConfig.name}: Price ID missing`, 'red');
      allValid = false;
      continue;
    }

    try {
      const price = await stripe.prices.retrieve(priceId);
      const expectedAmount = priceConfig.amount;
      
      if (price.unit_amount === expectedAmount) {
        log(`   ✅ ${priceConfig.name}: €${(price.unit_amount / 100).toLocaleString()} ${price.recurring ? '/' + price.recurring.interval : '(one-time)'}`, 'green');
      } else {
        log(`   ⚠️  ${priceConfig.name}: Amount mismatch - expected €${(expectedAmount / 100).toLocaleString()}, got €${(price.unit_amount / 100).toLocaleString()}`, 'yellow');
      }
    } catch (error) {
      log(`   ❌ ${priceConfig.name}: ${error.message}`, 'red');
      allValid = false;
    }
  }

  return allValid;
}

async function validateWebhooks(stripe) {
  log('\n🪝 Checking webhook configuration...', 'cyan');
  
  try {
    const webhooks = await stripe.webhookEndpoints.list({ limit: 10 });
    
    if (webhooks.data.length === 0) {
      log('   ⚠️  No webhooks configured', 'yellow');
      log('   📍 Consider setting up: /api/stripe/webhook', 'blue');
      return false;
    }

    for (const webhook of webhooks.data) {
      const status = webhook.status === 'enabled' ? '✅' : '❌';
      log(`   ${status} ${webhook.url} (${webhook.enabled_events.length} events)`, webhook.status === 'enabled' ? 'green' : 'red');
    }

    return true;
  } catch (error) {
    log(`   ❌ Failed to check webhooks: ${error.message}`, 'red');
    return false;
  }
}

async function testCheckoutSession(stripe) {
  log('\n🛒 Testing checkout session creation...', 'cyan');
  
  const priceId = process.env.STRIPE_SPARRING_PARTNER_PRICE_ID;
  
  if (!priceId) {
    log('   ❌ Cannot test - Sparring Partner price ID missing', 'red');
    return false;
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });

    log(`   ✅ Test checkout session created: ${session.id}`, 'green');
    log(`   📍 URL: ${session.url}`, 'blue');
    
    return true;
  } catch (error) {
    log(`   ❌ Checkout session test failed: ${error.message}`, 'red');
    return false;
  }
}

async function main() {
  log('🔍 ConnEthics Stripe Configuration Validator', 'bright');
  log('==========================================', 'bright');
  
  // Load environment variables
  require('dotenv').config({ path: '.env.local' });
  
  let allChecks = true;
  
  // Validate environment
  const envValid = await validateEnvironment();
  allChecks = allChecks && envValid;
  
  if (!envValid) {
    log('\n❌ Environment validation failed. Please check your .env.local file.', 'red');
    process.exit(1);
  }
  
  // Validate Stripe connection
  const stripe = await validateStripeConnection();
  if (!stripe) {
    allChecks = false;
  } else {
    // Validate prices
    const pricesValid = await validatePrices(stripe);
    allChecks = allChecks && pricesValid;
    
    // Validate webhooks
    await validateWebhooks(stripe);
    
    // Test checkout
    await testCheckoutSession(stripe);
  }
  
  log('\n' + '='.repeat(50), 'bright');
  
  if (allChecks) {
    log('🎉 All validations passed! Your Stripe setup is ready.', 'green');
    log('\n🚀 Next steps:', 'bright');
    log('   1. Start your development server: npm run dev', 'cyan');
    log('   2. Visit: http://localhost:3000/consulting-services', 'cyan');
    log('   3. Test with card: 4242 4242 4242 4242', 'cyan');
  } else {
    log('❌ Some validations failed. Please fix the issues above.', 'red');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(error => {
    log(`\n❌ Validation failed: ${error.message}`, 'red');
    process.exit(1);
  });
}
