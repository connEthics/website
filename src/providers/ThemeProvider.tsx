'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light';
  setTheme: (theme: 'light') => void;
  resolvedTheme: 'light';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Apply light theme to document
  const applyTheme = () => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      const body = window.document.body;
      
      // Remove any existing theme classes
      root.classList.remove('light', 'dark');
      body.classList.remove('light', 'dark');
      
      // Force light theme
      root.classList.add('light');
      body.classList.add('light');
      
      // Set data attributes
      root.setAttribute('data-theme', 'light');
      body.setAttribute('data-theme', 'light');
      
      // Force color-scheme
      root.style.colorScheme = 'light';
      body.style.colorScheme = 'light';
      
      // Force background colors
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#111827';
      root.style.backgroundColor = '#ffffff';
      
      // Set theme-color meta tag
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', '#ffffff');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'theme-color';
        meta.content = '#ffffff';
        document.head.appendChild(meta);
      }
    }
  };

  // Initialize theme
  useEffect(() => {
    setMounted(true);
    applyTheme();
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return <ThemeContext.Provider value={{ theme: 'light', setTheme: () => {}, resolvedTheme: 'light' }}>
      {children}
    </ThemeContext.Provider>;
  }

  return (
    <ThemeContext.Provider value={{ theme: 'light', setTheme: () => {}, resolvedTheme: 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
