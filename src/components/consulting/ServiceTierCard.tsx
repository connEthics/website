import { CheckIcon } from '@heroicons/react/24/outline';
import { ServiceTier } from '@/lib/stripe';

interface ServiceTierCardProps {
  tier: ServiceTier;
  isPopular?: boolean;
  onSelectTier: (tier: ServiceTier) => void;
}

export default function ServiceTierCard({ tier, isPopular = false, onSelectTier }: ServiceTierCardProps) {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg border ${isPopular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'} p-6`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">€{tier.price.toLocaleString()}</span>
          <span className="text-gray-600">/{tier.interval}</span>
        </div>
        
        <div className="text-sm text-gray-600 mb-6">
          {tier.minCommitment && (
            <p>Minimum: {tier.minCommitment}</p>
          )}
          {tier.maxCommitment && (
            <p>Maximum: {tier.maxCommitment}</p>
          )}
          <p className="mt-1 font-medium">{tier.targetAudience}</p>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => onSelectTier(tier)}
        className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-200 ${
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}