#!/usr/bin/env node

/**
 * ConnEthics Stripe Setup Script
 * 
 * This script automatically creates all the required Stripe products, prices, and webhooks
 * for the ConnEthics consulting services platform.
 * 
 * Usage:
 *   1. Set your Stripe secret key: export STRIPE_SECRET_KEY=sk_test_...
 *   2. Run: node scripts/setup-stripe.js
 *   3. Copy the generated environment variables to your .env.local file
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require('fs');
const path = require('path');

// Color codes for better terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Service definitions matching the application
const SERVICES = {
  sparringPartner: {
    product: {
      name: 'Sparring Partner',
      description: 'Weekly strategic consulting sessions (1h/week) for CEOs and Head of Product at growing companies (10-50 employees). Get decision-making support, strategic questioning, and experience sharing from similar scale-up challenges.',
      metadata: {
        service_type: 'consulting',
        target_audience: 'CEOs, Head of Product (10-50 employees)',
        commitment: '3 months minimum',
        hours_per_week: '1',
        format: 'Weekly 1:1 strategic sessions'
      }
    },
    price: {
      unit_amount: 200000, // €2,000.00 in cents
      currency: 'eur',
      recurring: { interval: 'month' },
      nickname: 'Sparring Partner Monthly'
    }
  },
  operationalAdvisor: {
    product: {
      name: 'Operational Advisor',
      description: 'Bi-weekly operational guidance (2×3h/week) for scale-ups (50-200 employees). Includes discovery workshops, roadmap planning, process optimization, team coaching, and stakeholder alignment.',
      metadata: {
        service_type: 'consulting',
        target_audience: 'Scale-ups (50-200 employees)',
        commitment: '6 months minimum',
        hours_per_week: '6',
        format: 'Bi-weekly operational workshops'
      }
    },
    price: {
      unit_amount: 1000000, // €10,000.00 in cents
      currency: 'eur',
      recurring: { interval: 'month' },
      nickname: 'Operational Advisor Monthly'
    }
  },
  transitionalManager: {
    product: {
      name: 'Transitional Manager',
      description: 'Hands-on management support (4×3h/week) for growing companies (200+ employees). Includes team management, organizational restructuring, process transformation, and leadership development.',
      metadata: {
        service_type: 'consulting',
        target_audience: 'Growing companies (200+ employees)',
        commitment: '12 months maximum',
        hours_per_week: '12',
        format: 'Hands-on team management'
      }
    },
    price: {
      unit_amount: 1500000, // €15,000.00 in cents
      currency: 'eur',
      recurring: { interval: 'month' },
      nickname: 'Transitional Manager Monthly'
    }
  },
  productAudit: {
    product: {
      name: 'Product & Business Audit',
      description: 'Comprehensive assessment of your product strategy, processes, and business model. Get actionable insights and recommendations to optimize your product organization and market approach.',
      metadata: {
        service_type: 'audit',
        target_audience: 'All company sizes',
        commitment: 'One-time engagement',
        delivery_time: '2-4 weeks',
        format: 'Comprehensive analysis and report'
      }
    },
    price: {
      unit_amount: 500000, // €5,000.00 in cents
      currency: 'eur',
      nickname: 'Product & Business Audit'
    }
  },
  boardAdvisory: {
    product: {
      name: 'Board Advisory',
      description: 'Strategic guidance at the board level for product and technology decisions. Monthly board participation with insights on product strategy, technology roadmap, and organizational scaling.',
      metadata: {
        service_type: 'advisory',
        target_audience: 'Board level / C-suite',
        commitment: '6 months minimum',
        frequency: 'Monthly board meetings',
        format: 'Board-level strategic guidance'
      }
    },
    price: {
      unit_amount: 150000, // €1,500.00 in cents
      currency: 'eur',
      recurring: { interval: 'month' },
      nickname: 'Board Advisory Monthly'
    }
  }
};

async function checkStripeConnection() {
  log('\n🔗 Checking Stripe connection...', 'cyan');
  
  if (!process.env.STRIPE_SECRET_KEY) {
    log('❌ STRIPE_SECRET_KEY environment variable is not set!', 'red');
    log('   Please set it with: export STRIPE_SECRET_KEY=sk_test_...', 'yellow');
    process.exit(1);
  }

  try {
    const account = await stripe.accounts.retrieve();
    log(`✅ Connected to Stripe account: ${account.display_name || account.id}`, 'green');
    log(`   Mode: ${process.env.STRIPE_SECRET_KEY.startsWith('sk_live_') ? 'LIVE' : 'TEST'}`, 'yellow');
    return account;
  } catch (error) {
    log(`❌ Failed to connect to Stripe: ${error.message}`, 'red');
    process.exit(1);
  }
}

async function createProduct(serviceKey, serviceConfig) {
  log(`\n📦 Creating product: ${serviceConfig.product.name}`, 'blue');
  
  try {
    // Check if product already exists
    const existingProducts = await stripe.products.list({
      limit: 100,
    });
    
    const existing = existingProducts.data.find(p => 
      p.name === serviceConfig.product.name || 
      p.metadata.service_key === serviceKey
    );

    let product;
    if (existing) {
      log(`   ⚠️  Product already exists: ${existing.id}`, 'yellow');
      product = existing;
    } else {
      product = await stripe.products.create({
        name: serviceConfig.product.name,
        description: serviceConfig.product.description,
        metadata: {
          ...serviceConfig.product.metadata,
          service_key: serviceKey,
          created_by: 'connethics-setup-script',
          version: '1.0'
        }
      });
      log(`   ✅ Created product: ${product.id}`, 'green');
    }

    return product;
  } catch (error) {
    log(`   ❌ Failed to create product: ${error.message}`, 'red');
    throw error;
  }
}

async function createPrice(product, serviceKey, priceConfig) {
  log(`   💰 Creating price for ${product.name}`, 'blue');
  
  try {
    // Check if price already exists
    const existingPrices = await stripe.prices.list({
      product: product.id,
      limit: 10,
    });

    const existing = existingPrices.data.find(p => 
      p.unit_amount === priceConfig.unit_amount &&
      p.currency === priceConfig.currency &&
      ((!p.recurring && !priceConfig.recurring) || 
       (p.recurring?.interval === priceConfig.recurring?.interval))
    );

    let price;
    if (existing) {
      log(`   ⚠️  Price already exists: ${existing.id}`, 'yellow');
      price = existing;
    } else {
      const priceData = {
        product: product.id,
        unit_amount: priceConfig.unit_amount,
        currency: priceConfig.currency,
        nickname: priceConfig.nickname,
        metadata: {
          service_key: serviceKey,
          created_by: 'connethics-setup-script'
        }
      };

      if (priceConfig.recurring) {
        priceData.recurring = priceConfig.recurring;
      }

      price = await stripe.prices.create(priceData);
      log(`   ✅ Created price: ${price.id} (€${(price.unit_amount / 100).toLocaleString()})`, 'green');
    }

    return price;
  } catch (error) {
    log(`   ❌ Failed to create price: ${error.message}`, 'red');
    throw error;
  }
}

async function setupWebhook(baseUrl) {
  log('\n🪝 Setting up webhook endpoint...', 'cyan');
  
  const webhookUrl = `${baseUrl}/api/stripe/webhook`;
  const events = [
    'checkout.session.completed',
    'customer.subscription.created',
    'customer.subscription.updated',
    'customer.subscription.deleted',
    'invoice.payment_succeeded',
    'invoice.payment_failed',
    'customer.created',
    'customer.updated'
  ];

  try {
    // Check if webhook already exists
    const existingWebhooks = await stripe.webhookEndpoints.list({
      limit: 100,
    });

    const existing = existingWebhooks.data.find(w => 
      w.url === webhookUrl
    );

    let webhook;
    if (existing) {
      log(`   ⚠️  Webhook already exists: ${existing.id}`, 'yellow');
      log(`   📍 URL: ${existing.url}`, 'blue');
      webhook = existing;
    } else {
      webhook = await stripe.webhookEndpoints.create({
        url: webhookUrl,
        enabled_events: events,
        description: 'ConnEthics Consulting Services Platform',
        metadata: {
          created_by: 'connethics-setup-script',
          environment: process.env.STRIPE_SECRET_KEY.startsWith('sk_live_') ? 'production' : 'development'
        }
      });
      log(`   ✅ Created webhook: ${webhook.id}`, 'green');
      log(`   📍 URL: ${webhook.url}`, 'blue');
    }

    return webhook;
  } catch (error) {
    log(`   ❌ Failed to create webhook: ${error.message}`, 'red');
    throw error;
  }
}

async function enableCustomerPortal() {
  log('\n🏛️  Configuring Customer Portal...', 'cyan');
  
  try {
    // Note: Customer Portal configuration is typically done via Dashboard
    // But we can verify it's enabled
    log('   ℹ️  Customer Portal must be configured in Stripe Dashboard', 'blue');
    log('   📍 Go to: https://dashboard.stripe.com/settings/billing/portal', 'blue');
    log('   ✅ Enable: Update payment method, View invoices, Cancel subscriptions', 'green');
  } catch (error) {
    log(`   ⚠️  Note: ${error.message}`, 'yellow');
  }
}

function generateEnvConfig(results) {
  log('\n📝 Generating environment configuration...', 'cyan');
  
  const envConfig = `
# ConnEthics Stripe Configuration
# Generated on ${new Date().toISOString()}

# Stripe API Keys (add your actual keys here)
STRIPE_SECRET_KEY=${process.env.STRIPE_SECRET_KEY}
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_WEBHOOK_SECRET=${results.webhook?.secret || 'whsec_your_webhook_secret_here'}

# Stripe Price IDs
STRIPE_SPARRING_PARTNER_PRICE_ID=${results.prices.sparringPartner}
STRIPE_OPERATIONAL_ADVISOR_PRICE_ID=${results.prices.operationalAdvisor}
STRIPE_TRANSITIONAL_MANAGER_PRICE_ID=${results.prices.transitionalManager}
STRIPE_PRODUCT_AUDIT_PRICE_ID=${results.prices.productAudit}
STRIPE_BOARD_ADVISORY_PRICE_ID=${results.prices.boardAdvisory}

# Application Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
`;

  return envConfig.trim();
}

async function main() {
  log('🚀 ConnEthics Stripe Setup Script', 'bright');
  log('=====================================', 'bright');
  
  try {
    // Check Stripe connection
    const account = await checkStripeConnection();
    
    // Ask for base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    log(`\n🌐 Using base URL: ${baseUrl}`, 'cyan');
    
    const results = {
      products: {},
      prices: {},
      webhook: null
    };

    // Create products and prices
    log('\n📦 Creating Stripe products and prices...', 'bright');
    
    for (const [serviceKey, serviceConfig] of Object.entries(SERVICES)) {
      const product = await createProduct(serviceKey, serviceConfig);
      const price = await createPrice(product, serviceKey, serviceConfig.price);
      
      results.products[serviceKey] = product.id;
      results.prices[serviceKey] = price.id;
    }

    // Setup webhook
    const webhook = await setupWebhook(baseUrl);
    results.webhook = webhook;

    // Configure Customer Portal
    await enableCustomerPortal();

    // Generate environment configuration
    const envConfig = generateEnvConfig(results);
    
    // Save to file
    const configPath = path.join(__dirname, '..', '.env.stripe');
    fs.writeFileSync(configPath, envConfig);
    
    log('\n🎉 Setup completed successfully!', 'green');
    log('============================', 'green');
    
    log('\n📋 Summary:', 'bright');
    log(`   Products created: ${Object.keys(results.products).length}`, 'green');
    log(`   Prices created: ${Object.keys(results.prices).length}`, 'green');
    log(`   Webhook configured: ${webhook ? '✅' : '❌'}`, webhook ? 'green' : 'red');
    
    log('\n📁 Configuration saved to: .env.stripe', 'cyan');
    log('\n🔧 Next steps:', 'bright');
    log('   1. Copy the configuration from .env.stripe to your .env.local', 'yellow');
    log('   2. Add your NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY', 'yellow');
    log('   3. Configure Customer Portal in Stripe Dashboard', 'yellow');
    log('   4. Restart your development server', 'yellow');
    log('   5. Test at http://localhost:3000/consulting-services', 'yellow');
    
    log('\n💳 Test cards for development:', 'blue');
    log('   Success: 4242 4242 4242 4242', 'green');
    log('   Decline: 4000 0000 0000 0002', 'red');
    log('   3D Secure: 4000 0025 0000 3155', 'yellow');

  } catch (error) {
    log('\n❌ Setup failed!', 'red');
    log(`Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  SERVICES,
  checkStripeConnection,
  createProduct,
  createPrice,
  setupWebhook,
  generateEnvConfig
};
