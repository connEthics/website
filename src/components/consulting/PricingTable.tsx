import ServiceTierCard from './ServiceTierCard';
import { SERVICE_TIERS, ServiceTier } from '@/lib/stripe';

interface PricingTableProps {
  onSelectTier: (tier: ServiceTier) => void;
}

export default function PricingTable({ onSelectTier }: PricingTableProps) {
  const tiers = Object.values(SERVICE_TIERS);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Consulting Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Flexible engagement models designed to meet your organization&apos;s specific needs and growth stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <ServiceTierCard
              key={tier.name}
              tier={tier}
              isPopular={index === 1} // Make the middle tier (Operational Advisor) popular
              onSelectTier={onSelectTier}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">
            All prices in EUR. VAT may apply based on your location.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Need something different? <a href="/contact" className="text-blue-600 hover:text-blue-800">Contact us</a> for custom arrangements.
          </p>
        </div>
      </div>
    </section>
  );
}