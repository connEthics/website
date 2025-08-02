import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripeServer, SERVICE_TIERS, ADDITIONAL_SERVICES } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    const { tierKey, additionalServiceKey, returnUrl, customerEmail } = await request.json();

    // Validate input
    if (!tierKey && !additionalServiceKey) {
      return NextResponse.json(
        { error: 'Either tierKey or additionalServiceKey is required' },
        { status: 400 }
      );
    }

    let priceId: string | undefined;
    let mode: 'subscription' | 'payment' = 'subscription';
    let serviceName = '';

    // Handle service tier selection
    if (tierKey && tierKey in SERVICE_TIERS) {
      const tier = SERVICE_TIERS[tierKey as keyof typeof SERVICE_TIERS];
      priceId = tier.stripePriceId;
      serviceName = tier.name;
      mode = 'subscription';
    }
    
    // Handle additional services
    if (additionalServiceKey && additionalServiceKey in ADDITIONAL_SERVICES) {
      const service = ADDITIONAL_SERVICES[additionalServiceKey as keyof typeof ADDITIONAL_SERVICES];
      priceId = service.stripePriceId;
      serviceName = service.name;
      mode = service.type === 'one-time' ? 'payment' : 'subscription';
    }

    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid service selection or price ID not configured' },
        { status: 400 }
      );
    }

    // Look for existing customer if email is provided
    let existingCustomer = null;
    if (customerEmail) {
      try {
        const customers = await stripe.customers.list({
          email: customerEmail,
          limit: 1,
        });
        if (customers.data.length > 0) {
          existingCustomer = customers.data[0];
        }
      } catch (error) {
        console.log('Customer lookup failed, will create new customer:', error);
      }
    }

    // Create Checkout Session
    const sessionData: Stripe.Checkout.SessionCreateParams = {
      mode,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${returnUrl || process.env.NEXT_PUBLIC_BASE_URL + '/consulting-services'}?session_id={CHECKOUT_SESSION_ID}&success=true`,
      cancel_url: `${returnUrl || process.env.NEXT_PUBLIC_BASE_URL + '/consulting-services'}?canceled=true`,
      consent_collection: {
        terms_of_service: 'required',
      },
      custom_text: {
        terms_of_service_acceptance: {
          message: 'I agree to the [Terms of Service](https://connethics.com/legal) and understand the engagement requirements.',
        },
      },
      metadata: {
        service_name: serviceName,
        tier_key: tierKey || '',
        additional_service_key: additionalServiceKey || '',
      },
      // For one-time payments, ensure invoice is created and appears in customer portal
      ...(mode === 'payment' && {
        invoice_creation: {
          enabled: true,
          invoice_data: {
            description: `ConnEthics ${serviceName}`,
            metadata: {
              service_name: serviceName,
              service_type: 'one_time',
            }
          }
        }
      })
    };

    // Handle customer assignment
    if (existingCustomer) {
      // Use existing customer
      sessionData.customer = existingCustomer.id;
      console.log(`Using existing customer: ${existingCustomer.id} (${existingCustomer.email})`);
    } else {
      // Only set customer_creation for payment mode (one-time payments)
      // For subscriptions, Stripe will handle customer creation automatically
      if (mode === 'payment') {
        sessionData.customer_creation = 'always';
      }
      // For subscription mode, we don't set customer_creation - Stripe handles it
    }

    // Disable automatic tax for local testing (can be enabled in production)
    // sessionData.automatic_tax = { enabled: true };

    const session = await stripe.checkout.sessions.create(sessionData);

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}