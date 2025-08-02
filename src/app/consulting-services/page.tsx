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
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [showEmailInput, setShowEmailInput] = useState<boolean>(false);
  const [pendingTier, setPendingTier] = useState<ServiceTier | null>(null);
  const [pendingServiceKey, setPendingServiceKey] = useState<string | null>(null);

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
    // Show email input form first
    setPendingTier(tier);
    setPendingServiceKey(null);
    setShowEmailInput(true);
  };

  const proceedWithCheckout = async () => {
    try {
      let tierKey: string | undefined;
      let additionalServiceKey: string | undefined;

      if (pendingTier) {
        // Get the tier key from SERVICE_TIERS
        tierKey = Object.keys(SERVICE_TIERS).find(
          key => SERVICE_TIERS[key as keyof typeof SERVICE_TIERS].name === pendingTier.name
        );

        if (!tierKey) {
          console.error('Tier key not found for:', pendingTier.name);
          return;
        }
      }

      if (pendingServiceKey) {
        additionalServiceKey = pendingServiceKey;
      }

      // Create checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tierKey,
          additionalServiceKey,
          returnUrl: window.location.origin + '/consulting-services',
          customerEmail: customerEmail.trim() || undefined,
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
    } finally {
      // Reset form state
      setShowEmailInput(false);
      setPendingTier(null);
      setPendingServiceKey(null);
      setCustomerEmail('');
    }
  };

  const handleAdditionalService = async (serviceKey: string) => {
    // Show email input form first
    setPendingServiceKey(serviceKey);
    setPendingTier(null);
    setShowEmailInput(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Email Input Modal */}
      {showEmailInput && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Complete Your Purchase
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {pendingTier ? `You've selected: ${pendingTier.name}` : 'Additional service selected'}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Please provide your email address (optional, but helps us link multiple purchases to your account):
            </p>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="your-email@company.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={proceedWithCheckout}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Continue to Payment
              </button>
              <button
                onClick={() => {
                  setShowEmailInput(false);
                  setPendingTier(null);
                  setPendingServiceKey(null);
                  setCustomerEmail('');
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
          
          {/* Client Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                &ldquo;Working with ConnEthics on our entrepreneurship program exceeded all expectations. They helped us navigate from zero to €2 million in revenue within 18 months, establishing a lean but effective product and R&amp;D organization of 15 people. Their structured approach to innovation management was game-changing.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Innovation Director</p>
                  <p className="text-gray-600 text-sm">Belgian Insurance Group</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                &ldquo;ConnEthics&apos; product due diligence was pivotal during a challenging funding transition. They provided clarity on delivery challenges, coached our portfolio company&apos;s leadership, and restored board confidence. This intervention directly enabled business growth and a successful Series A round.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Managing Partner</p>
                  <p className="text-gray-600 text-sm">Swiss VC</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">
                &ldquo;ConnEthics designed our global interoperability platform and guided our organization through complex digital transformation. Their work enabled us to deploy unified digital payment services and booking platforms worldwide, opening entirely new SMB market segments we previously couldn&apos;t address.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">IT Program Director</p>
                  <p className="text-gray-600 text-sm">International Airline</p>
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
      
      {/* What to Expect Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect After Purchase
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined onboarding process gets you started quickly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Immediate Confirmation</h3>
              <p className="text-gray-600">Receive instant email confirmation with next steps and access to your customer portal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24-Hour Contact</h3>
              <p className="text-gray-600">Our team will reach out within 24 hours to schedule your first session</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">First Session</h3>
              <p className="text-gray-600">Begin your engagement with a kickoff session within one week</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-4">
              Questions about our process? We&apos;re here to help.
            </p>
            <a
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact our team →
            </a>
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
            <a
              href="/customer-portal"
              className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
            >
              Existing Customer?
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}