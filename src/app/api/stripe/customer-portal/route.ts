import { NextRequest, NextResponse } from 'next/server';
import { getStripeServer } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    const { customerId, returnUrl } = await request.json();

    // Validate input
    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer ID is required' },
        { status: 400 }
      );
    }

    // Create Customer Portal Session
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/consulting-services`,
    });

    return NextResponse.json({ 
      url: session.url 
    });

  } catch (error) {
    console.error('Error creating customer portal session:', error);
    return NextResponse.json(
      { error: 'Failed to create customer portal session' },
      { status: 500 }
    );
  }
}

// GET method to retrieve customer portal URL by email
export async function GET(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const returnUrl = searchParams.get('return_url');

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Find customer by email
    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      );
    }

    const customer = customers.data[0];

    // Create Customer Portal Session
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: returnUrl || `${process.env.NEXT_PUBLIC_BASE_URL}/consulting-services`,
    });

    return NextResponse.json({ 
      url: session.url,
      customerId: customer.id 
    });

  } catch (error) {
    console.error('Error creating customer portal session:', error);
    return NextResponse.json(
      { error: 'Failed to create customer portal session' },
      { status: 500 }
    );
  }
}