'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isInitialized: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDark = stored === 'dark' || (stored === null && systemPrefersDark);
    
    setIsDarkMode(shouldUseDark);
    updateTheme(shouldUseDark);
    setIsInitialized(true);
  }, []);

  const updateTheme = (darkMode: boolean) => {
    const html = document.documentElement;
    
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  };

  const toggleDarkMode = () => {
    if (!isInitialized) return;
    
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    updateTheme(newMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, isInitialized }}>
      {children}
    </ThemeContext.Provider>
  );
}
