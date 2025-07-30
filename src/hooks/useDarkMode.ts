'use client';

import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Initialize with undefined to prevent hydration mismatch
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Get the stored preference from localStorage
    const storedPreference = localStorage.getItem('darkMode');
    
    let shouldUseDarkMode: boolean;
    
    if (storedPreference !== null) {
      // User has a saved preference - use it (handle both 'true'/'false' strings)
      shouldUseDarkMode = storedPreference === 'true';
    } else {
      // No saved preference - check system preference
      shouldUseDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setIsDarkMode(shouldUseDarkMode);
    updateDarkMode(shouldUseDarkMode);
  }, []);

  const updateDarkMode = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  };

  const toggleDarkMode = () => {
    if (isDarkMode === undefined) return; // Don't allow toggle before initialization
    
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    updateDarkMode(newDarkMode);
  };

  return { 
    isDarkMode: isDarkMode ?? false, // Default to false for rendering consistency
    toggleDarkMode 
  };
}
