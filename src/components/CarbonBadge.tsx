'use client';

import { useEffect, useState } from 'react';

export default function CarbonBadge() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Simple approach: just load the script and let it do its work
    const existingScript = document.querySelector('script[src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
      script.async = true;
      script.onload = () => {
        console.log('Carbon badge script loaded');
      };
      script.onerror = () => {
        console.error('Failed to load carbon badge script');
      };
      document.head.appendChild(script);
    }
  }, []);

  // Only render on the client side to avoid hydration issues
  if (!isClient) {
    return null;
  }

  return (
    <div id="wcb" className="carbonbadge wcb-d" />
  );
}
