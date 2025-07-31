
/**
 * Design Tokens for ConnEthics Design System
 * Centralized design decisions for consistent UI
 */

export const designTokens = {
  // Color Palette
  colors: {
    // Primary - ConnEthics Blue
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    
    // Neutral Grays
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb', 
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },
    
    // Semantic Colors
    semantic: {
      success: {
        light: '#10b981',
        dark: '#34d399',
      },
      warning: {
        light: '#f59e0b',
        dark: '#fbbf24',
      },
      error: {
        light: '#ef4444',
        dark: '#f87171', 
      },
      info: {
        light: '#3b82f6',
        dark: '#60a5fa',
      },
    },
  },

  // Typography Scale
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Menlo', 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500', 
      semibold: '600',
      bold: '700',
    },
  },

  // Spacing Scale
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem', 
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem', 
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  // Animation
  animation: {
    duration: {
      fast: '150ms',
      normal: '200ms', 
      slow: '300ms',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
} as const;

// Theme-aware color utilities
export const getColorValue = (colorPath: string, theme: 'light' | 'dark' = 'light') => {
  // Helper to get theme-appropriate colors
  const pathParts = colorPath.split('.');
  let current: Record<string, unknown> = designTokens.colors;
  
  for (const part of pathParts) {
    current = current[part] as Record<string, unknown>;
  }
  
  if (typeof current === 'object' && current && 'light' in current && 'dark' in current) {
    return (current as Record<'light' | 'dark', string>)[theme];
  }
  
  return current;
};

export type DesignTokens = typeof designTokens;
