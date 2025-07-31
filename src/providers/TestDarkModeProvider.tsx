'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface TestDarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isInitialized: boolean;
}

const TestDarkModeContext = createContext<TestDarkModeContextType | undefined>(undefined);

export function useTestDarkMode() {
  const context = useContext(TestDarkModeContext);
  if (context === undefined) {
    throw new Error('useTestDarkMode must be used within a TestDarkModeProvider');
  }
  return context;
}

interface TestDarkModeProviderProps {
  children: ReactNode;
}

export function TestDarkModeProvider({ children }: TestDarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    console.log('🔧 TestDarkMode: Provider mounted');
    
    // Simple initialization without localStorage for testing
    setIsInitialized(true);
    console.log('✅ TestDarkMode: Initialized');
  }, []);

  const toggleDarkMode = () => {
    console.log('🎛️ TestDarkMode: Toggle clicked! Current:', isDarkMode);
    
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    
    // Update HTML class - Tailwind only uses 'dark' class
    const html = document.documentElement;
    if (newValue) {
      html.classList.add('dark');
      console.log('🌙 TestDarkMode: Added dark class');
    } else {
      html.classList.remove('dark');
      console.log('☀️ TestDarkMode: Removed dark class');
    }
    
    console.log('📝 TestDarkMode: HTML classes:', html.className);
    console.log('✅ TestDarkMode: Toggle complete, new value:', newValue);
  };

  return (
    <TestDarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, isInitialized }}>
      {children}
    </TestDarkModeContext.Provider>
  );
}
