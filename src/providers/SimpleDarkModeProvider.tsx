'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface SimpleDarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isInitialized: boolean;
}

const SimpleDarkModeContext = createContext<SimpleDarkModeContextType | undefined>(undefined);

export function useSimpleDarkMode() {
  const context = useContext(SimpleDarkModeContext);
  if (context === undefined) {
    throw new Error('useSimpleDarkMode must be used within a SimpleDarkModeProvider');
  }
  return context;
}

interface SimpleDarkModeProviderProps {
  children: ReactNode;
}

export function SimpleDarkModeProvider({ children }: SimpleDarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize dark mode on mount
  useEffect(() => {
    const initializeDarkMode = () => {
      console.log('🔧 SimpleDarkMode: Initializing...');
      
      // Check localStorage first
      const stored = localStorage.getItem('darkMode');
      let shouldUseDarkMode = false;
      
      if (stored !== null) {
        shouldUseDarkMode = stored === 'true';
        console.log('📱 SimpleDarkMode: From localStorage:', shouldUseDarkMode);
      } else {
        // Check system preference
        shouldUseDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('🎯 SimpleDarkMode: From system:', shouldUseDarkMode);
      }
      
      // Update state
      setIsDarkMode(shouldUseDarkMode);
      
      // Update DOM
      updateDOMClass(shouldUseDarkMode);
      
      // Mark as initialized
      setIsInitialized(true);
      
      console.log('✅ SimpleDarkMode: Initialized with', shouldUseDarkMode);
    };

    const timer = setTimeout(initializeDarkMode, 100);
    return () => clearTimeout(timer);
  }, []);

  const updateDOMClass = (darkMode: boolean) => {
    console.log('🔄 SimpleDarkMode: Updating DOM to', darkMode);
    
    const html = document.documentElement;
    
    if (darkMode) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
    
    // Save to localStorage
    localStorage.setItem('darkMode', darkMode.toString());
    
    console.log('📝 SimpleDarkMode: DOM classes now:', html.className);
  };

  const toggleDarkMode = () => {
    console.log('🎛️ SimpleDarkMode: Toggle clicked!');
    
    if (!isInitialized) {
      console.warn('⚠️ SimpleDarkMode: Not initialized yet, ignoring toggle');
      return;
    }
    
    const newDarkMode = !isDarkMode;
    console.log('🔄 SimpleDarkMode: Toggling from', isDarkMode, 'to', newDarkMode);
    
    // Update state
    setIsDarkMode(newDarkMode);
    
    // Update DOM
    updateDOMClass(newDarkMode);
    
    console.log('✅ SimpleDarkMode: Toggle complete');
  };

  return (
    <SimpleDarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, isInitialized }}>
      {children}
    </SimpleDarkModeContext.Provider>
  );
}
