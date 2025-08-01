'use client';

import { useRef } from 'react';

import HeroSection from '@/components/consulting/HeroSection';
import PricingTable from '@/components/consulting/PricingTable';
import { ServiceTier } from '@/lib/stripe';

// Note: Since this is a client component, metadata should be in a separate file
// or this should be converted to a server component with client components for interactive parts

export default function ConsultingServicesPage() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTier = async (tier: ServiceTier) => {
    try {
      // TODO: Implement Stripe Checkout integration
      console.log('Selected tier:', tier);
      
      // For now, redirect to contact page
      window.location.href = '/contact';
    } catch (error) {
      console.error('Error selecting tier:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
                onClick={() => window.location.href = '/contact'}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
              >
                Learn More
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Board Advisory</h3>
              <p className="text-gray-600 mb-4">Strategic guidance at the board level for product and technology decisions</p>
              <div className="text-2xl font-bold text-gray-900 mb-4">€1,500 <span className="text-sm font-normal text-gray-600">/month</span></div>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
              >
                Learn More
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