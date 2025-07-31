'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { useForceStyleUpdate } from '@/hooks/useForceStyleUpdate';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isInitialized: boolean;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkModeContext must be used within a DarkModeProvider');
  }
  return context;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Use the force style update hook
  useForceStyleUpdate();

  const updateDarkModeClass = useCallback((darkMode: boolean) => {
    console.log('Updating dark mode class to:', darkMode);
    const htmlElement = document.documentElement;
    
    // Remove existing classes first
    htmlElement.classList.remove('dark', 'light');
    
    // Add the appropriate class
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.add('light');
    }
    
    // FORCE styles directly on body in dev mode
    if (process.env.NODE_ENV === 'development') {
      const body = document.body;
      if (darkMode) {
        body.style.backgroundColor = '#111827'; // gray-900
        body.style.color = '#f9fafb'; // gray-100
      } else {
        body.style.backgroundColor = '#ffffff'; // white
        body.style.color = '#111827'; // gray-900
      }
      
      // Force navigation styles
      const nav = document.querySelector('nav');
      if (nav) {
        if (darkMode) {
          nav.style.backgroundColor = '#111827';
          nav.style.borderColor = '#374151';
        } else {
          nav.style.backgroundColor = '#ffffff';
          nav.style.borderColor = '#e5e7eb';
        }
      }
      
      // Trigger a style recalculation
      htmlElement.style.colorScheme = darkMode ? 'dark' : 'light';
    }
    
    console.log('HTML classes after update:', htmlElement.classList.toString());
    localStorage.setItem('darkMode', darkMode.toString());
  }, []);

  useEffect(() => {
    // This effect runs only on the client side
    const initializeDarkMode = () => {
      // Get the stored preference from localStorage
      const storedPreference = localStorage.getItem('darkMode');
      
      let shouldUseDarkMode: boolean;
      
      if (storedPreference !== null) {
        // User has a saved preference
        shouldUseDarkMode = storedPreference === 'true';
        console.log('Dark mode from localStorage:', shouldUseDarkMode);
      } else {
        // No saved preference - check system preference
        shouldUseDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        console.log('Dark mode from system preference:', shouldUseDarkMode);
      }
      
      setIsDarkMode(shouldUseDarkMode);
      updateDarkModeClass(shouldUseDarkMode);
      setIsInitialized(true);
      
      // Force a style recalculation in dev mode
      if (process.env.NODE_ENV === 'development') {
        setTimeout(() => {
          document.documentElement.style.display = 'none';
          document.documentElement.offsetHeight; // Trigger reflow
          document.documentElement.style.display = '';
        }, 50);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initializeDarkMode, 10);
    
    return () => clearTimeout(timer);
  }, [updateDarkModeClass]);

  const toggleDarkMode = useCallback(() => {
    if (!isInitialized) {
      console.log('Toggle ignored - not initialized yet');
      return;
    }
    
    const newDarkMode = !isDarkMode;
    console.log('Toggling dark mode from', isDarkMode, 'to', newDarkMode);
    setIsDarkMode(newDarkMode);
    updateDarkModeClass(newDarkMode);
    
    // Dispatch custom event for dev mode force updates
    if (process.env.NODE_ENV === 'development') {
      window.dispatchEvent(new CustomEvent('darkModeChange', {
        detail: { darkMode: newDarkMode }
      }));
    }
  }, [isDarkMode, isInitialized, updateDarkModeClass]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, isInitialized }}>
      {children}
    </DarkModeContext.Provider>
  );
}
