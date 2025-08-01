import { NextRequest, NextResponse } from 'next/server';
import { getStripeServer, SERVICE_TIERS, ADDITIONAL_SERVICES } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    const { tierKey, additionalServiceKey, returnUrl } = await request.json();

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

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${returnUrl || process.env.NEXT_PUBLIC_BASE_URL}/consulting-services?session_id={CHECKOUT_SESSION_ID}&success=true`,
      cancel_url: `${returnUrl || process.env.NEXT_PUBLIC_BASE_URL}/consulting-services?canceled=true`,
      automatic_tax: {
        enabled: true,
      },
      customer_creation: 'always',
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
    });

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