
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

    // Accent - Warm Orange (for CTAs and highlights)
    accent: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
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
    
    // Semantic Colors (expanded for ConnEthics brand)
    semantic: {
      success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        500: '#10b981',
        600: '#059669',
        900: '#14532d',
        light: '#10b981',
        dark: '#34d399',
      },
      warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        500: '#f59e0b',
        600: '#d97706',
        900: '#78350f',
        light: '#f59e0b',
        dark: '#fbbf24',
      },
      error: {
        50: '#fef2f2',
        100: '#fee2e2',
        500: '#ef4444',
        600: '#dc2626',
        900: '#7f1d1d',
        light: '#ef4444',
        dark: '#f87171', 
      },
      info: {
        50: '#eff6ff',
        100: '#dbeafe',
        500: '#3b82f6',
        600: '#2563eb',
        900: '#1e3a8a',
        light: '#3b82f6',
        dark: '#60a5fa',
      },
    },
    
    // Surface Colors (for cards, containers, etc.)
    surface: {
      primary: {
        light: '#ffffff',
        dark: '#1f2937',
      },
      secondary: {
        light: '#f9fafb', 
        dark: '#111827',
      },
      tertiary: {
        light: '#f3f4f6',
        dark: '#0f172a',
      },
    },
    
    // Border Colors
    border: {
      light: {
        light: '#e5e7eb',
        dark: '#374151',
      },
      medium: {
        light: '#d1d5db',
        dark: '#4b5563',
      },
      strong: {
        light: '#9ca3af',
        dark: '#6b7280',
      },
    },
  },

  // Typography Scale (enhanced for ConnEthics)
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Menlo', 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
      sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],
      base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0' }],
      lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
      xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
      '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em' }],
      '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500', 
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },

  // Spacing Scale (enhanced 8px grid)
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem', 
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    18: '4.5rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  // Border Radius (enhanced scale)
  borderRadius: {
    none: '0',
    xs: '0.0625rem',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem', 
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Shadows (enhanced with more options)
  shadows: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
  },

  // Animation (enhanced with more transitions)
  animation: {
    duration: {
      fastest: '75ms',
      fast: '150ms',
      normal: '200ms', 
      slow: '300ms',
      slowest: '500ms',
    },
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // Breakpoints (for responsive design)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
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
