
'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook to force style updates in development mode
 * Specifically addresses Turbopack CSS caching issues
 */
export function useForceStyleUpdate() {
  const lastUpdateRef = useRef(0);
  
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const forceStyleUpdate = () => {
      // Prevent rapid consecutive updates
      const now = Date.now();
      if (now - lastUpdateRef.current < 100) return;
      lastUpdateRef.current = now;

      // Method 1: Force reflow
      document.documentElement.style.display = 'none';
      document.documentElement.offsetHeight;
      document.documentElement.style.display = '';

      console.log('🔄 Forced style update in dev mode');
    };

    // Listen for dark mode changes
    const handleDarkModeChange = (event: Event) => {
      console.log('🌙 Dark mode change detected:', (event as CustomEvent).detail);
      setTimeout(forceStyleUpdate, 10);
    };

    // Listen for our custom dark mode events
    window.addEventListener('darkModeChange', handleDarkModeChange);

    return () => {
      window.removeEventListener('darkModeChange', handleDarkModeChange);
    };
  }, []);
}
