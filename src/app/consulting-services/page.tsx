'use client';

import { useRef, useEffect, useState } from 'react';

import HeroSection from '@/components/consulting/HeroSection';
import PricingTable from '@/components/consulting/PricingTable';
import { ServiceTier, SERVICE_TIERS } from '@/lib/stripe';

// Note: Since this is a client component, metadata should be in a separate file
// or this should be converted to a server component with client components for interactive parts

export default function ConsultingServicesPage() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  useEffect(() => {
    // Check URL parameters for success/canceled state
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const canceled = urlParams.get('canceled');
    const sessionId = urlParams.get('session_id');

    if (success === 'true' && sessionId) {
      setMessage({
        type: 'success',
        text: 'Payment successful! We will contact you within 24 hours to schedule your first session.'
      });
    } else if (canceled === 'true') {
      setMessage({
        type: 'info',
        text: 'Payment was canceled. Feel free to try again or contact us for assistance.'
      });
    }

    // Clean up URL parameters
    if (success || canceled || sessionId) {
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTier = async (tier: ServiceTier) => {
    try {
      // Get the tier key from SERVICE_TIERS
      const tierKey = Object.keys(SERVICE_TIERS).find(
        key => SERVICE_TIERS[key as keyof typeof SERVICE_TIERS].name === tier.name
      );

      if (!tierKey) {
        console.error('Tier key not found for:', tier.name);
        return;
      }

      // Create checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tierKey,
          returnUrl: window.location.origin + '/consulting-services',
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        console.error('Error creating checkout session:', error);
        setMessage({
          type: 'error',
          text: 'Unable to create checkout session. Please try again or contact us.'
        });
        return;
      }

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error selecting tier:', error);
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again or contact us for assistance.'
      });
    }
  };

  const handleAdditionalService = async (serviceKey: string) => {
    try {
      // Create checkout session for additional service
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          additionalServiceKey: serviceKey,
          returnUrl: window.location.origin + '/consulting-services',
        }),
      });

      const { url, error } = await response.json();

      if (error) {
        console.error('Error creating checkout session:', error);
        setMessage({
          type: 'error',
          text: 'Unable to create checkout session. Please try again or contact us.'
        });
        return;
      }

      if (url) {
        // Redirect to Stripe Checkout
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error selecting additional service:', error);
      setMessage({
        type: 'error',
        text: 'An error occurred. Please try again or contact us for assistance.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Message Display */}
      {message && (
        <div className={`p-4 mb-6 mx-4 sm:mx-6 lg:mx-8 rounded-md ${
          message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
          message.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
          'bg-blue-50 text-blue-800 border border-blue-200'
        }`}>
          <div className="flex">
            <div className="flex-shrink-0">
              {message.type === 'success' && (
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {message.type === 'error' && (
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              {message.type === 'info' && (
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{message.text}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => setMessage(null)}
                className="inline-flex text-gray-400 hover:text-gray-600"
              >
                <span className="sr-only">Dismiss</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <HeroSection onGetStarted={scrollToPricing} />
      
      {/* Pricing Table */}
      <div ref={pricingRef}>
        <PricingTable onSelectTier={handleSelectTier} />
      </div>
      
      {/* Social Proof Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Growing Companies
            </h2>
            <p className="text-lg text-gray-600">
              Join the leaders who&apos;ve transformed their product organizations with our guidance
            </p>
          </div>
          
          {/* Placeholder for testimonials - to be implemented in Phase 3 */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                &ldquo;ConnEthics helped us scale our product organization from 20 to 100+ people while maintaining quality and velocity. Their strategic guidance was invaluable during our growth phase.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-gray-600 text-sm">Head of Product, TechScale</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                &ldquo;The operational advisor engagement transformed how our teams work together. We saw immediate improvements in delivery speed and quality.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Marcus Weber</p>
                  <p className="text-gray-600 text-sm">CTO, FinTech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Specialized offerings for specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product & Business Audit</h3>
              <p className="text-gray-600 mb-4">Comprehensive assessment of your product strategy, processes, and business model</p>
              <div className="text-2xl font-bold text-gray-900 mb-4">€5,000 <span className="text-sm font-normal text-gray-600">one-time</span></div>
              <button 
                onClick={() => handleAdditionalService('productAudit')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
              >
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Advisory</h3>
              <p className="text-gray-600 mb-4">Strategic guidance at the board level for product and technology decisions</p>
              <div className="text-2xl font-bold text-gray-900 mb-4">€1,500 <span className="text-sm font-normal text-gray-600">/month</span></div>
              <button 
                onClick={() => handleAdditionalService('boardAdvisory')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Product Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing list of companies that have successfully scaled with our guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToPricing}
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-all duration-200"
            >
              View Pricing
            </button>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}