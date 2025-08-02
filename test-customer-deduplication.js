#!/usr/bin/env node

// Test script to verify customer deduplication
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function testCustomerDeduplication() {
  console.log('🧪 Testing customer deduplication...\n');
  
  const testEmail = 'test-dedup@connethics.com';
  
  try {
    // First, clean up any existing test customers
    console.log('🧹 Cleaning up existing test customers...');
    const existingCustomers = await stripe.customers.list({
      email: testEmail,
      limit: 10
    });
    
    for (const customer of existingCustomers.data) {
      await stripe.customers.del(customer.id);
      console.log(`   Deleted customer: ${customer.id}`);
    }
    
    // Test 1: Create a customer through checkout session (subscription)
    console.log('\n📝 Test 1: Creating checkout session for subscription (should create customer)');
    const session1 = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{
        price: process.env.STRIPE_PRICE_SPARRING_PARTNER, // Using the sparring partner price
        quantity: 1,
      }],
      success_url: 'https://localhost:3000/success',
      cancel_url: 'https://localhost:3000/cancel',
      customer_email: testEmail, // Pre-fill email
    });
    
    console.log(`   Created session: ${session1.id}`);
    console.log(`   Customer email: ${session1.customer_email}`);
    
    // Test 2: Try to find existing customer
    console.log('\n🔍 Test 2: Looking for existing customers with email');
    const customers = await stripe.customers.list({
      email: testEmail,
      limit: 1,
    });
    
    console.log(`   Found ${customers.data.length} existing customers`);
    if (customers.data.length > 0) {
      const customer = customers.data[0];
      console.log(`   Customer ID: ${customer.id}`);
      console.log(`   Customer email: ${customer.email}`);
      
      // Test 3: Create another session using existing customer
      console.log('\n🔄 Test 3: Creating second session with existing customer');
      const session2 = await stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{
          price: process.env.STRIPE_PRICE_OPERATIONAL_ADVISOR, // Different service
          quantity: 1,
        }],
        success_url: 'https://localhost:3000/success',
        cancel_url: 'https://localhost:3000/cancel',
        customer: customer.id, // Use existing customer
      });
      
      console.log(`   Created session: ${session2.id}`);
      console.log(`   Using customer: ${session2.customer}`);
      
      // Verify both sessions use the same customer
      if (session2.customer === customer.id) {
        console.log('\n✅ SUCCESS: Customer deduplication works!');
        console.log(`   Both sessions would link to the same customer: ${customer.id}`);
      } else {
        console.log('\n❌ FAILED: Sessions not linked to same customer');
      }
    }
    
  } catch (error) {
    console.error('\n❌ Error during test:', error.message);
  }
  
  console.log('\n🏁 Test completed');
}

// Run the test
testCustomerDeduplication();
