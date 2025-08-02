import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getStripeServer } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    const { email, action } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (action === 'start-identity-verification') {
      // Find customer by email
      const customers = await stripe.customers.list({
        email: email,
        limit: 1,
      });

      if (customers.data.length === 0) {
        return NextResponse.json(
          { error: 'No customer found with this email address. Please check your email or contact support.' },
          { status: 404 }
        );
      }

      const customer = customers.data[0];

      // Create Identity Verification Session
      const verificationSession = await stripe.identity.verificationSessions.create({
        type: 'document',
        provided_details: {
          email: customer.email!,
        },
        metadata: {
          customer_id: customer.id,
          purpose: 'customer_portal_access',
        },
        options: {
          document: {
            // Require ID document verification
            require_id_number: true,
            require_live_capture: true,
            require_matching_selfie: true,
          },
        },
        // Return URL after verification
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/customer-portal/verified`,
      });

      return NextResponse.json({
        client_secret: verificationSession.client_secret,
        verification_session_id: verificationSession.id,
        message: 'Identity verification session created. Please complete the verification process.',
      });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error in identity verification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Verification session ID is required' },
        { status: 400 }
      );
    }

    const stripe = getStripeServer();
    
    // Retrieve verification session
    const verificationSession = await stripe.identity.verificationSessions.retrieve(sessionId);

    if (verificationSession.status !== 'verified') {
      return NextResponse.json(
        { 
          error: 'Identity verification not completed or failed. Please try again.',
          status: verificationSession.status,
          last_error: verificationSession.last_error?.reason
        },
        { status: 401 }
      );
    }

    // Get customer ID from metadata
    const customerId = verificationSession.metadata?.customer_id;
    if (!customerId) {
      return NextResponse.json(
        { error: 'Customer information not found in verification session' },
        { status: 400 }
      );
    }

    // Create Customer Portal Session
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/consulting-services`,
    });

    return NextResponse.json({ 
      url: portalSession.url,
      verified_data: {
        // Basic verification confirmation
        status: verificationSession.status,
        verification_id: verificationSession.id,
        last_verification_report: typeof verificationSession.last_verification_report === 'string' 
          ? verificationSession.last_verification_report 
          : verificationSession.last_verification_report?.id,
      }
    });

  } catch (error) {
    console.error('Error creating customer portal session:', error);
    return NextResponse.json(
      { error: 'Failed to create customer portal session' },
      { status: 500 }
    );
  }
}
