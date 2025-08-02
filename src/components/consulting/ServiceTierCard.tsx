import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { ServiceTier } from '@/lib/stripe';

interface ServiceTierCardProps {
  tier: ServiceTier;
  isPopular?: boolean;
  onSelectTier: (tier: ServiceTier) => void;
}

export default function ServiceTierCard({ tier, isPopular = false, onSelectTier }: ServiceTierCardProps) {
  // Check if this is the Transitional Manager tier that's not available yet
  const isTransitionalManager = tier.name === 'Transitional Manager';
  const isComingSoon = isTransitionalManager; // Available from January 2026
  
  return (
    <div className={`relative bg-white rounded-lg shadow-lg border ${
      isComingSoon ? 'border-gray-300 opacity-90' : 
      isPopular ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'
    } p-6`}>
      {isPopular && !isComingSoon && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      {isComingSoon && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-full">
            Available January 2026
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className={`text-xl font-semibold mb-2 ${isComingSoon ? 'text-gray-600' : 'text-gray-900'}`}>
          {tier.name}
        </h3>
        <p className={`text-sm mb-4 ${isComingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
          {tier.description}
        </p>
        
        <div className="mb-6">
          <span className={`text-4xl font-bold ${isComingSoon ? 'text-gray-500' : 'text-gray-900'}`}>
            €{tier.price.toLocaleString()}
          </span>
          <span className={`${isComingSoon ? 'text-gray-400' : 'text-gray-600'}`}>
            /{tier.interval}
          </span>
        </div>
        
        <div className={`text-sm mb-6 ${isComingSoon ? 'text-gray-500' : 'text-gray-600'}`}>
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
            <CheckIcon className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
              isComingSoon ? 'text-gray-400' : 'text-green-500'
            }`} />
            <span className={`text-sm ${isComingSoon ? 'text-gray-500' : 'text-gray-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      {isComingSoon ? (
        <div className="space-y-3">
          <div className="w-full py-3 px-4 rounded-md font-medium bg-gray-100 text-gray-500 text-center border border-gray-300 cursor-not-allowed">
            <div className="flex items-center justify-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              Not available for purchase yet
            </div>
          </div>
          <a
            href="/contact"
            className="w-full py-2 px-4 rounded-md font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200 text-center block border border-blue-200"
          >
            Contact us for more information
          </a>
        </div>
      ) : (
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
      )}
    </div>
  );
}