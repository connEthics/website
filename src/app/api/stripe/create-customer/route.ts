import { NextRequest, NextResponse } from 'next/server';
import { getStripeServer } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    const { email, name, description, metadata } = await request.json();

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if customer already exists
    const existingCustomers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      return NextResponse.json(
        { 
          error: 'Customer already exists',
          customerId: existingCustomers.data[0].id 
        },
        { status: 409 }
      );
    }

    // Create new customer
    const customer = await stripe.customers.create({
      email,
      name,
      description,
      metadata: {
        source: 'admin_created',
        ...metadata,
      },
    });

    return NextResponse.json({ 
      customer: {
        id: customer.id,
        email: customer.email,
        name: customer.name,
        created: customer.created,
      }
    });

  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    );
  }
}

// GET method to search for existing customers
export async function GET(request: NextRequest) {
  try {
    const stripe = getStripeServer();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const limit = parseInt(searchParams.get('limit') || '10');

    let customers;

    if (email) {
      // Search by email
      customers = await stripe.customers.list({
        email: email,
        limit: 1,
      });
    } else {
      // List recent customers
      customers = await stripe.customers.list({
        limit: Math.min(limit, 100), // Cap at 100
      });
    }

    const customerData = customers.data.map(customer => ({
      id: customer.id,
      email: customer.email,
      name: customer.name,
      created: customer.created,
      description: customer.description,
    }));

    return NextResponse.json({ 
      customers: customerData,
      hasMore: customers.has_more 
    });

  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    );
  }
}