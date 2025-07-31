'use client';

import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Initialize with undefined to prevent hydration mismatch
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Get the stored preference from localStorage
    const storedPreference = localStorage.getItem('darkMode');
    
    let shouldUseDarkMode: boolean;
    
    if (storedPreference !== null) {
      // User has a saved preference - use it (handle both 'true'/'false' strings)
      shouldUseDarkMode = storedPreference === 'true';
      console.log('Dark mode from localStorage:', shouldUseDarkMode);
    } else {
      // No saved preference - check system preference
      shouldUseDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log('Dark mode from system preference:', shouldUseDarkMode);
    }
    
    setIsDarkMode(shouldUseDarkMode);
    updateDarkMode(shouldUseDarkMode);
    setIsInitialized(true);
  }, []);

  const updateDarkMode = (darkMode: boolean) => {
    console.log('Updating dark mode to:', darkMode);
    const htmlElement = document.documentElement;
    
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Verify the class was applied
    console.log('HTML element classes after update:', htmlElement.classList.toString());
    
    localStorage.setItem('darkMode', darkMode.toString());
  };

  const toggleDarkMode = () => {
    if (!isInitialized || isDarkMode === undefined) {
      console.log('Toggle ignored - not initialized yet');
      return; // Don't allow toggle before initialization
    }
    
    const newDarkMode = !isDarkMode;
    console.log('Toggling dark mode from', isDarkMode, 'to', newDarkMode);
    setIsDarkMode(newDarkMode);
    updateDarkMode(newDarkMode);
  };

  return { 
    isDarkMode: isDarkMode ?? false, // Default to false for rendering consistency
    toggleDarkMode,
    isInitialized
  };
}
