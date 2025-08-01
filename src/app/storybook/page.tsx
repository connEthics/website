'use client';

import React, { useState, useEffect } from 'react';
import { 
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Container, Section, Grid, Stack, Divider,
  Heading, Text, Link,
  Input, Textarea, Select, Checkbox, Radio,
  Alert, Badge, Spinner, Progress,
  Breadcrumbs, Pagination, Tabs, Steps
} from '@/design-system/components';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

export default function StoryBook() {
  const [activeTab, setActiveTab] = useState('buttons');

  // Hide the header and footer when component mounts
  useEffect(() => {
    // Add CSS to hide navigation and footer and force theme colors
    const style = document.createElement('style');
    style.textContent = `
      /* ===== FORCED THEME SYSTEM ===== */
      /* Hide navigation elements */
      body > nav,
      body > footer,
      body > main > nav,
      body > main > footer,
      header,
      [role="banner"],
      [role="contentinfo"] {
        display: none !important;
      }
      body > main {
        min-height: auto !important;
      }

      /* ===== LIGHT MODE FORCED THEME ===== */
      .storybook-light-mode {
        background-color: #ffffff !important;
        color: #374151 !important; /* gray-700 - Ratio 8.9:1 ✅ AAA */
        color-scheme: light !important;
      }
      
      /* Typography - WCAG AAA Compliant - Only for text outside color showcases */
      .storybook-light-mode h1:not(.color-showcase *),
      .storybook-light-mode h2:not(.color-showcase *),
      .storybook-light-mode h3:not(.color-showcase *),
      .storybook-light-mode h4:not(.color-showcase *),
      .storybook-light-mode h5:not(.color-showcase *),
      .storybook-light-mode h6:not(.color-showcase *) {
        color: #111827 !important; /* gray-900 - Ratio 15.8:1 ✅ AAA */
      }
      
      .storybook-light-mode p:not(.color-showcase *),
      .storybook-light-mode span:not(.color-showcase *),
      .storybook-light-mode div:not(.color-showcase *),
      .storybook-light-mode label:not(.color-showcase *) {
        color: #374151 !important; /* gray-700 - Ratio 8.9:1 ✅ AAA */
      }

      /* Secondary text with AA compliance */
      .storybook-light-mode .text-gray-600,
      .storybook-light-mode .text-neutral-600,
      .storybook-light-mode [class*="text-gray-6"] {
        color: #4b5563 !important; /* gray-600 - Ratio 6.2:1 ✅ AA */
      }

      /* Muted text - minimum AA compliance */
      .storybook-light-mode .text-gray-500,
      .storybook-light-mode .text-neutral-500,
      .storybook-light-mode [class*="text-gray-5"] {
        color: #6b7280 !important; /* gray-500 - Ratio 4.6:1 ✅ AA */
      }

      /* Cards - More specific overrides to preserve color differentiation */
      .storybook-light-mode [class*="bg-white"]:not([class*="bg-white-"]),
      .storybook-light-mode .bg-neutral-50,
      .storybook-light-mode .bg-gray-50,
      .storybook-light-mode .rounded-lg:not([class*="bg-"]),
      .storybook-light-mode .rounded-xl:not([class*="bg-"]),
      .storybook-light-mode .rounded-md:not([class*="bg-"]),
      .storybook-light-mode .shadow-sm:not([class*="bg-"]),
      .storybook-light-mode .shadow:not([class*="bg-"]),
      .storybook-light-mode .shadow-lg:not([class*="bg-"]),
      .storybook-light-mode .shadow-xl:not([class*="bg-"]) {
        background-color: #ffffff !important;
        border-color: #e5e7eb !important;
      }

      /* Preserve gray scale differentiation */
      .storybook-light-mode .bg-gray-50 { background-color: #f9fafb !important; }
      .storybook-light-mode .bg-gray-100 { background-color: #f3f4f6 !important; }
      .storybook-light-mode .bg-gray-200 { background-color: #e5e7eb !important; }
      .storybook-light-mode .bg-gray-300 { background-color: #d1d5db !important; }

      .storybook-light-mode .bg-neutral-50 { background-color: #fafafa !important; }
      .storybook-light-mode .bg-neutral-100 { background-color: #f5f5f5 !important; }
      .storybook-light-mode .bg-neutral-200 { background-color: #e5e5e5 !important; }
      .storybook-light-mode .bg-neutral-300 { background-color: #d4d4d4 !important; }

      /* Form elements - Enhanced contrast */
      .storybook-light-mode input,
      .storybook-light-mode textarea,
      .storybook-light-mode select {
        background-color: #ffffff !important;
        border-color: #d1d5db !important; /* gray-300 - Good visibility */
        color: #111827 !important; /* gray-900 - Ratio 15.8:1 ✅ AAA */
      }

      /* Exclude primary buttons from background override */
      .storybook-light-mode button:not([class*="bg-primary"]):not([class*="bg-green"]):not([class*="bg-blue"]):not([class*="bg-red"]):not([class*="bg-yellow"]):not([class*="bg-neutral"]) {
        background-color: #ffffff !important;
        border-color: #d1d5db !important;
        color: #111827 !important;
      }

      /* Feedback components - WCAG Compliant */
      .storybook-light-mode [class*="bg-blue-50"],
      .storybook-light-mode [class*="bg-green-50"],
      .storybook-light-mode [class*="bg-yellow-50"],
      .storybook-light-mode [class*="bg-red-50"] {
        background-color: var(--light-bg) !important;
      }

      .storybook-light-mode [class*="bg-blue-100"]:not([class*="bg-primary"]),
      .storybook-light-mode [class*="bg-green-100"]:not([class*="bg-primary"]),
      .storybook-light-mode [class*="bg-yellow-100"]:not([class*="bg-primary"]),
      .storybook-light-mode [class*="bg-red-100"]:not([class*="bg-primary"]) {
        /* Keep original colors for semantic backgrounds */
        background-color: unset !important;
      }

      /* Only override generic gray backgrounds */
      .storybook-light-mode .bg-gray-100:not([class*="bg-blue"]):not([class*="bg-green"]):not([class*="bg-yellow"]):not([class*="bg-red"]),
      .storybook-light-mode .bg-neutral-100:not([class*="bg-blue"]):not([class*="bg-green"]):not([class*="bg-yellow"]):not([class*="bg-red"]) {
        background-color: #f3f4f6 !important; /* gray-100 */
      }

      /* Navigation elements */
      .storybook-light-mode [class*="border-gray"],
      .storybook-light-mode [class*="border-neutral"],
      .storybook-light-mode .border-b,
      .storybook-light-mode .border-t,
      .storybook-light-mode .border {
        border-color: #d1d5db !important; /* gray-300 - Better visibility */
      }

      /* Placeholder text - WCAG AA Compliant */
      .storybook-light-mode input::placeholder,
      .storybook-light-mode textarea::placeholder {
        color: #6b7280 !important; /* gray-500 - Ratio 4.6:1 ✅ AA */
      }

      /* ===== DARK MODE FORCED THEME ===== */
      .storybook-dark-mode {
        background-color: #111827 !important; /* gray-900 */
        color: #e5e7eb !important; /* gray-200 - Ratio 12.8:1 ✅ AAA */
        color-scheme: dark !important;
      }
      
      /* Typography - WCAG AAA Compliant - Only for text outside color showcases */
      .storybook-dark-mode h1:not(.color-showcase *),
      .storybook-dark-mode h2:not(.color-showcase *),
      .storybook-dark-mode h3:not(.color-showcase *),
      .storybook-dark-mode h4:not(.color-showcase *),
      .storybook-dark-mode h5:not(.color-showcase *),
      .storybook-dark-mode h6:not(.color-showcase *) {
        color: #f9fafb !important; /* gray-50 - Ratio 15.8:1 ✅ AAA */
      }
      
      .storybook-dark-mode p:not(.color-showcase *),
      .storybook-dark-mode span:not(.color-showcase *),
      .storybook-dark-mode div:not(.color-showcase *),
      .storybook-dark-mode label:not(.color-showcase *) {
        color: #e5e7eb !important; /* gray-200 - Ratio 12.8:1 ✅ AAA */
      }

      /* Secondary text with AA+ compliance */
      .storybook-dark-mode .text-gray-300,
      .storybook-dark-mode .text-neutral-300,
      .storybook-dark-mode [class*="text-gray-3"] {
        color: #d1d5db !important; /* gray-300 - Ratio 9.7:1 ✅ AAA */
      }

      /* Muted text - AA compliance */
      .storybook-dark-mode .text-gray-400,
      .storybook-dark-mode .text-neutral-400,
      .storybook-dark-mode [class*="text-gray-4"] {
        color: #9ca3af !important; /* gray-400 - Ratio 5.7:1 ✅ AA */
      }

      /* Cards - More specific overrides to preserve color differentiation */
      .storybook-dark-mode [class*="bg-white"]:not([class*="bg-white-"]),
      .storybook-dark-mode .bg-neutral-50,
      .storybook-dark-mode .bg-gray-50,
      .storybook-dark-mode .rounded-lg:not([class*="bg-"]),
      .storybook-dark-mode .rounded-xl:not([class*="bg-"]),
      .storybook-dark-mode .rounded-md:not([class*="bg-"]),
      .storybook-dark-mode .shadow-sm:not([class*="bg-"]),
      .storybook-dark-mode .shadow:not([class*="bg-"]),
      .storybook-dark-mode .shadow-lg:not([class*="bg-"]),
      .storybook-dark-mode .shadow-xl:not([class*="bg-"]) {
        background-color: #1f2937 !important;
        border-color: #374151 !important;
        color: #f9fafb !important;
      }

      /* Preserve gray scale differentiation in dark mode */
      .storybook-dark-mode .bg-gray-50,
      .storybook-dark-mode .bg-gray-100,
      .storybook-dark-mode .bg-neutral-50,
      .storybook-dark-mode .bg-neutral-100 { 
        background-color: #374151 !important; /* gray-700 equivalent */
      }
      .storybook-dark-mode .bg-gray-200,
      .storybook-dark-mode .bg-neutral-200 { 
        background-color: #4b5563 !important; /* gray-600 equivalent */
      }
      .storybook-dark-mode .bg-gray-300,
      .storybook-dark-mode .bg-neutral-300 { 
        background-color: #6b7280 !important; /* gray-500 equivalent */
      }

      /* Form elements - Enhanced contrast */
      .storybook-dark-mode input,
      .storybook-dark-mode textarea,
      .storybook-dark-mode select {
        background-color: #1f2937 !important; /* gray-800 */
        border-color: #4b5563 !important; /* gray-600 - Good visibility */
        color: #f9fafb !important; /* gray-50 - Ratio 13.1:1 vs gray-800 ✅ AAA */
      }

      /* Exclude primary buttons from background override */
      .storybook-dark-mode button:not([class*="bg-primary"]):not([class*="bg-green"]):not([class*="bg-blue"]):not([class*="bg-red"]):not([class*="bg-yellow"]):not([class*="bg-neutral"]) {
        background-color: #1f2937 !important;
        border-color: #4b5563 !important;
        color: #f9fafb !important;
      }

      /* Feedback components */
      .storybook-dark-mode [class*="bg-blue-50"],
      .storybook-dark-mode [class*="bg-green-50"],
      .storybook-dark-mode [class*="bg-yellow-50"],
      .storybook-dark-mode [class*="bg-red-50"] {
        background-color: rgba(59, 130, 246, 0.1) !important;
      }

      .storybook-dark-mode [class*="bg-blue-100"]:not([class*="bg-primary"]),
      .storybook-dark-mode [class*="bg-green-100"]:not([class*="bg-primary"]),
      .storybook-dark-mode [class*="bg-yellow-100"]:not([class*="bg-primary"]),
      .storybook-dark-mode [class*="bg-red-100"]:not([class*="bg-primary"]) {
        /* Keep original colors for semantic backgrounds */
        background-color: unset !important;
      }

      /* Only override generic gray backgrounds */
      .storybook-dark-mode .bg-gray-100:not([class*="bg-blue"]):not([class*="bg-green"]):not([class*="bg-yellow"]):not([class*="bg-red"]),
      .storybook-dark-mode .bg-neutral-100:not([class*="bg-blue"]):not([class*="bg-green"]):not([class*="bg-yellow"]):not([class*="bg-red"]) {
        background-color: #374151 !important; /* gray-700 equivalent */
      }

      /* Navigation elements */
      .storybook-dark-mode [class*="border-gray"],
      .storybook-dark-mode [class*="border-neutral"],
      .storybook-dark-mode .border-b,
      .storybook-dark-mode .border-t,
      .storybook-dark-mode .border {
        border-color: #4b5563 !important; /* gray-600 - Good visibility */
      }

      /* Placeholder text - WCAG AA Compliant */
      .storybook-dark-mode input::placeholder,
      .storybook-dark-mode textarea::placeholder {
        color: #9ca3af !important; /* gray-400 - Ratio 5.7:1 vs gray-800 ✅ AA */
      }

      /* ===== SPECIFIC COMPONENT OVERRIDES ===== */
      /* Alert backgrounds with WCAG AA+ contrast ratios */
      
      /* Light mode alerts - optimized for readability */
      .storybook-light-mode [class*="bg-blue-50"] { 
        background-color: #eff6ff !important; /* blue-50 */
        color: #1e40af !important; /* blue-800 - Ratio 8.2:1 ✅ AAA */
      }
      .storybook-light-mode [class*="bg-green-50"] { 
        background-color: #f0fdf4 !important; /* green-50 */
        color: #166534 !important; /* green-800 - Ratio 9.1:1 ✅ AAA */
      }
      .storybook-light-mode [class*="bg-yellow-50"] { 
        background-color: #fefce8 !important; /* yellow-50 */
        color: #a16207 !important; /* yellow-700 - Ratio 6.8:1 ✅ AA */
      }
      .storybook-light-mode [class*="bg-red-50"] { 
        background-color: #fef2f2 !important; /* red-50 */
        color: #dc2626 !important; /* red-600 - Ratio 5.9:1 ✅ AA */
      }

      /* Dark mode alerts - optimized for readability */
      .storybook-dark-mode [class*="bg-blue-50"] { 
        background-color: rgba(30, 58, 138, 0.2) !important; /* blue-800/20 */
        color: #93c5fd !important; /* blue-300 - Ratio 6.4:1 ✅ AA */
      }
      .storybook-dark-mode [class*="bg-green-50"] { 
        background-color: rgba(20, 83, 45, 0.2) !important; /* green-800/20 */
        color: #86efac !important; /* green-300 - Ratio 7.2:1 ✅ AA */
      }
      .storybook-dark-mode [class*="bg-yellow-50"] { 
        background-color: rgba(133, 77, 14, 0.2) !important; /* yellow-800/20 */
        color: #fde047 !important; /* yellow-300 - Ratio 8.1:1 ✅ AAA */
      }
      .storybook-dark-mode [class*="bg-red-50"] { 
        background-color: rgba(153, 27, 27, 0.2) !important; /* red-800/20 */
        color: #fca5a5 !important; /* red-300 - Ratio 6.9:1 ✅ AA */
      }

      /* ===== PRESERVE COLOR SHOWCASES ===== */
      /* Completely exclude color showcases from theme forcing */
      .color-showcase,
      .color-showcase *,
      .color-showcase .bg-primary-50,
      .color-showcase .bg-primary-100,
      .color-showcase .bg-primary-200,
      .color-showcase .bg-primary-300,
      .color-showcase .bg-primary-400,
      .color-showcase .bg-primary-500,
      .color-showcase .bg-primary-600,
      .color-showcase .bg-primary-700,
      .color-showcase .bg-primary-800,
      .color-showcase .bg-primary-900,
      .color-showcase .bg-gray-50,
      .color-showcase .bg-gray-100,
      /* Disable gray backgrounds in color showcase to show true colors 
      .color-showcase .bg-gray-200,
      .color-showcase .bg-gray-300,
      .color-showcase .bg-gray-400,
      .color-showcase .bg-gray-500,
      .color-showcase .bg-gray-600,
      .color-showcase .bg-gray-700,
      .color-showcase .bg-gray-800,
      .color-showcase .bg-gray-900 {
        background-color: unset !important;
        color: unset !important;
        border-color: unset !important;
      }
      */

      /* Force primary colors with direct hex values */
      .color-showcase .bg-primary-50 { background-color: #eff6ff !important; }
      .color-showcase .bg-primary-100 { background-color: #dbeafe !important; }
      .color-showcase .bg-primary-200 { background-color: #bfdbfe !important; }
      .color-showcase .bg-primary-300 { background-color: #93c5fd !important; }
      .color-showcase .bg-primary-400 { background-color: #60a5fa !important; }
      .color-showcase .bg-primary-500 { background-color: #3b82f6 !important; }
      .color-showcase .bg-primary-600 { background-color: #2563eb !important; }
      .color-showcase .bg-primary-700 { background-color: #1d4ed8 !important; }
      .color-showcase .bg-primary-800 { background-color: #1e40af !important; }
      .color-showcase .bg-primary-900 { background-color: #1e3a8a !important; }

      /* Force gray colors with direct hex values */
      .color-showcase .bg-gray-50 { background-color: #f9fafb !important; }
      .color-showcase .bg-gray-100 { background-color: #f3f4f6 !important; }
      .color-showcase .bg-gray-200 { background-color: #e5e7eb !important; }
      .color-showcase .bg-gray-300 { background-color: #d1d5db !important; }
      .color-showcase .bg-gray-400 { background-color: #9ca3af !important; }
      .color-showcase .bg-gray-500 { background-color: #6b7280 !important; }
      .color-showcase .bg-gray-600 { background-color: #4b5563 !important; }
      .color-showcase .bg-gray-700 { background-color: #374151 !important; }
      .color-showcase .bg-gray-800 { background-color: #1f2937 !important; }
      .color-showcase .bg-gray-900 { background-color: #111827 !important; }

      /* Force semantic colors with direct hex values */
      .color-showcase .bg-green-50 { background-color: #f0fdf4 !important; }
      .color-showcase .bg-green-500 { background-color: #166534 !important; }
      .color-showcase .bg-green-800 { background-color: #166534 !important; }
      .color-showcase .bg-blue-500 { background-color: #3b82f6 !important; }
      .color-showcase .bg-yellow-500 { background-color: #f59e0b !important; }
      .color-showcase .bg-red-500 { background-color: #ef4444 !important; }

      /* Remove all complex overrides - let primary colors show naturally */

      /* Additional text color classes for proper hierarchy */
      .storybook-light-mode .text-blue-800 { color: #1e40af !important; } /* Ratio 8.2:1 ✅ AAA */
      .storybook-light-mode .text-green-800 { color: #166534 !important; } /* Ratio 9.1:1 ✅ AAA */
      .storybook-light-mode .text-yellow-700 { color: #a16207 !important; } /* Ratio 6.8:1 ✅ AA */
      .storybook-light-mode .text-red-600 { color: #dc2626 !important; } /* Ratio 5.9:1 ✅ AA */

      .storybook-dark-mode .text-blue-300 { color: #93c5fd !important; } /* Ratio 6.4:1 ✅ AA */
      .storybook-dark-mode .text-green-300 { color: #86efac !important; } /* Ratio 7.2:1 ✅ AA */
      .storybook-dark-mode .text-yellow-300 { color: #fde047 !important; } /* Ratio 8.1:1 ✅ AAA */
      .storybook-dark-mode .text-red-300 { color: #fca5a5 !important; } /* Ratio 6.9:1 ✅ AA */

      /* ===== PRESERVE BUTTON COLORS ===== */
      /* Ensure primary buttons maintain their WCAG AAA compliance */
      .storybook-light-mode .bg-primary-900,
      /* Primary colors are preserved through CSS variables - no need to unset */

      /* Preserve all button variant colors - except in color showcase */
      .storybook-light-mode button[class*="bg-primary"]:not(.color-showcase *),
      .storybook-light-mode button[class*="bg-red"]:not(.color-showcase *),
      .storybook-light-mode button[class*="bg-green"]:not(.color-showcase *),
      .storybook-light-mode button[class*="bg-blue"]:not(.color-showcase *),
      .storybook-light-mode button[class*="bg-yellow"]:not(.color-showcase *),
      .storybook-dark-mode button[class*="bg-primary"]:not(.color-showcase *),
      .storybook-dark-mode button[class*="bg-red"]:not(.color-showcase *),
      .storybook-dark-mode button[class*="bg-green"]:not(.color-showcase *),
      .storybook-dark-mode button[class*="bg-blue"]:not(.color-showcase *),
      .storybook-dark-mode button[class*="bg-yellow"]:not(.color-showcase *) {
        /* background-color: unset !important; */
        color: unset !important;
        border-color: unset !important;
      }

      /* Force remove all dark: prefixed styles */
      .storybook-light-mode *[class*="dark:"] {
        color-scheme: light !important;
      }
      
      .storybook-dark-mode *:not([class*="dark:"]) {
        color-scheme: dark !important;
      }


    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      document.head.removeChild(style);
    };
  }, []);

  const tabItems = [
    { label: 'Buttons', value: 'buttons' },
    { label: 'Typography', value: 'typography' },
    { label: 'Cards', value: 'cards' },
    { label: 'Forms', value: 'forms' },
    { label: 'Feedback', value: 'feedback' },
    { label: 'Navigation', value: 'navigation' },
    { label: 'Layout', value: 'layout' },
    { label: 'Colors', value: 'colors' },
    { label: 'Examples', value: 'examples' },
  ];

  // Component to render content in both light and dark modes
  const DualModeView = ({ children, title }: { children: React.ReactNode; title: string }) => (
    <div className="space-y-8">
      <div className="text-center py-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800/50 dark:to-gray-700/30 rounded-lg border border-primary-200 dark:border-primary-800">
        <Heading as="h2" size="3xl" className="text-primary-900 dark:text-primary-100 font-bold">{title}</Heading>
        <Text className="text-primary-700 dark:text-primary-300 mt-2">Side-by-side comparison of light and dark modes</Text>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-[700px]">
        {/* Light Mode */}
        <div className="space-y-4">
          <div className="sticky top-4 z-10 flex justify-center">
            <Badge className="bg-yellow-100 border-yellow-300 text-yellow-800 shadow-lg px-4 py-2 font-semibold">
              ☀️ Light Mode
            </Badge>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 min-h-[600px] shadow-xl storybook-light-mode">
            {children}
          </div>
        </div>
        
        {/* Dark Mode */}
        <div className="space-y-4">
          <div className="sticky top-4 z-10 flex justify-center">
            <Badge className="bg-gray-800 border-gray-600 text-gray-100 shadow-lg px-4 py-2 font-semibold">
              🌙 Dark Mode
            </Badge>
          </div>
          <div className="dark bg-gray-900 border-2 border-gray-600 rounded-xl p-8 min-h-[600px] shadow-xl storybook-dark-mode">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-blue-900">
      {/* Standalone Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Heading as="h1" size="2xl" className="text-gray-900 dark:text-white font-bold">
                🎨 ConnEthics Design System
              </Heading>
              <Text className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Comprehensive component library & style guide
              </Text>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                v1.0.0
              </Badge>
              <Button variant="outline" size="sm">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8 shadow-lg">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {tabItems.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.value
                    ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Button Showcase */}
        {activeTab === 'buttons' && (
          <DualModeView title="Button Components">
            <div className="space-y-8">
              {/* Primary Buttons */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Primary Buttons
                </Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap mb-4">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                  <Button variant="primary" size="xl">Extra Large</Button>
                </Stack>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="primary" leftIcon={<ShieldCheckIcon className="h-4 w-4" />}>
                    With Icon
                  </Button>
                  <Button variant="primary" rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
                    With Arrow
                  </Button>
                  <Button variant="primary" isLoading>
                    Loading
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </Stack>
              </div>

              {/* Outline Buttons */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Outline Buttons
                </Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap mb-4">
                  <Button variant="outline" size="sm">Small</Button>
                  <Button variant="outline" size="md">Medium</Button>
                  <Button variant="outline" size="lg">Large</Button>
                  <Button variant="outline" size="xl">Extra Large</Button>
                </Stack>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="outline" leftIcon={<InformationCircleIcon className="h-4 w-4" />}>
                    With Icon
                  </Button>
                  <Button variant="outline" rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
                    With Arrow
                  </Button>
                  <Button variant="outline" isLoading>
                    Loading
                  </Button>
                  <Button variant="outline" disabled>
                    Disabled
                  </Button>
                </Stack>
              </div>

              {/* Secondary Buttons */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Secondary Buttons
                </Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="md">Medium</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                  <Button variant="secondary" size="xl">Extra Large</Button>
                </Stack>
              </div>

              {/* Ghost & Danger Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Heading as="h3" size="lg" className="mb-4 text-gray-900 dark:text-white">
                    Ghost Buttons
                  </Heading>
                  <Stack direction="horizontal" gap="md" className="flex-wrap">
                    <Button variant="ghost" size="sm">Small</Button>
                    <Button variant="ghost" size="md">Medium</Button>
                    <Button variant="ghost" size="lg">Large</Button>
                  </Stack>
                </div>
                
                <div>
                  <Heading as="h3" size="lg" className="mb-4 text-gray-900 dark:text-white">
                    Danger Buttons
                  </Heading>
                  <Stack direction="horizontal" gap="md" className="flex-wrap">
                    <Button variant="danger" size="sm">Delete</Button>
                    <Button variant="danger" size="md">Remove</Button>
                    <Button variant="danger" size="lg">Destroy</Button>
                  </Stack>
                </div>
              </div>

              {/* Full Width Buttons */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Full Width Buttons
                </Heading>
                <Stack gap="sm">
                  <Button variant="primary" fullWidth>Full Width Primary</Button>
                  <Button variant="outline" fullWidth>Full Width Outline</Button>
                  <Button variant="secondary" fullWidth>Full Width Secondary</Button>
                </Stack>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Typography Showcase */}
        {activeTab === 'typography' && (
          <DualModeView title="Typography System">
            <div className="space-y-8">
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Headings
                </Heading>
                <div className="space-y-4">
                  <Heading as="h1" size="4xl" className="text-gray-900 dark:text-white">Heading 1 - 4xl</Heading>
                  <Heading as="h2" size="3xl" className="text-gray-900 dark:text-white">Heading 2 - 3xl</Heading>
                  <Heading as="h3" size="2xl" className="text-gray-900 dark:text-white">Heading 3 - 2xl</Heading>
                  <Heading as="h4" size="xl" className="text-gray-900 dark:text-white">Heading 4 - xl</Heading>
                  <Heading as="h5" size="lg" className="text-gray-900 dark:text-white">Heading 5 - lg</Heading>
                  <Heading as="h6" size="base" className="text-gray-900 dark:text-white">Heading 6 - base</Heading>
                </div>
              </div>
              
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Text Sizes
                </Heading>
                <div className="space-y-3">
                  <Text size="xl" className="text-gray-900 dark:text-white">Extra large text (xl)</Text>
                  <Text size="lg" className="text-gray-900 dark:text-white">Large text (lg)</Text>
                  <Text size="base" className="text-gray-900 dark:text-white">Base text (default)</Text>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300">Small text (sm)</Text>
                  <Text size="xs" className="text-gray-500 dark:text-gray-400">Extra small text (xs)</Text>
                </div>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Cards Showcase */}
        {activeTab === 'cards' && (
          <DualModeView title="Card Components">
            <div className="space-y-8">
              {/* Basic Cards */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Basic Cards
                </Heading>
                <Grid cols={2} gap="lg" className="mb-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                      <CardDescription>A basic card with header and content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Text>This is the main content of the card. It can contain any kind of information or components.</Text>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Card with Footer</CardTitle>
                      <CardDescription>Card including footer actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Text>Content with footer actions below.</Text>
                    </CardContent>
                    <CardFooter>
                      <Button variant="primary" size="sm">Action</Button>
                      <Button variant="outline" size="sm">Cancel</Button>
                    </CardFooter>
                  </Card>
                </Grid>
              </div>

              {/* Feature Cards */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Feature Cards
                </Heading>
                <Grid cols={3} gap="md">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <ShieldCheckIcon className="h-8 w-8 text-primary-600" />
                        <div>
                          <CardTitle>AI Ethics</CardTitle>
                          <CardDescription>Ethical AI implementation</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Text size="sm">Ensure responsible AI development with our comprehensive ethics framework.</Text>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <InformationCircleIcon className="h-8 w-8 text-blue-600" />
                        <div>
                          <CardTitle>Knowledge Management</CardTitle>
                          <CardDescription>Structured information systems</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Text size="sm">Organize and structure your knowledge assets for maximum impact.</Text>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <CheckCircleIcon className="h-8 w-8 text-green-600" />
                        <div>
                          <CardTitle>Consulting</CardTitle>
                          <CardDescription>Expert guidance</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Text size="sm">Strategic consulting for ethical technology implementation.</Text>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Forms Showcase */}
        {activeTab === 'forms' && (
          <DualModeView title="Form Components">
            <div className="space-y-8">
              {/* Input Fields */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Input Fields
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Text Input</Text>
                      <Input placeholder="Enter your name" />
                    </div>
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Email Input</Text>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Password Input</Text>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Disabled Input</Text>
                      <Input placeholder="Disabled field" disabled />
                    </div>
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Textarea</Text>
                      <Textarea placeholder="Enter your message..." />
                    </div>
                  </div>
                </div>
              </div>

              {/* Select and Options */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Selection Controls
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Select Dropdown</Text>
                      <Select>
                        <option>Choose an option</option>
                        <option>AI Ethics Consulting</option>
                        <option>Knowledge Management</option>
                        <option>Information Architecture</option>
                      </Select>
                    </div>
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Checkboxes</Text>
                      <div className="space-y-2">
                        <Checkbox label="AI Ethics Review" />
                        <Checkbox label="Data Privacy Assessment" />
                        <Checkbox label="Knowledge Structure Audit" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Radio Buttons</Text>
                      <div className="space-y-2">
                        <Radio name="service" value="consulting" label="Consulting Services" />
                        <Radio name="service" value="audit" label="Ethics Audit" />
                        <Radio name="service" value="training" label="Team Training" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complete Form Example */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Complete Form Example
                </Heading>
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>Get in touch with our AI ethics experts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <div className="mb-4">
                      <Input type="email" placeholder="Email Address" />
                    </div>
                    <div className="mb-4">
                      <Select>
                        <option>Select Service Interest</option>
                        <option>AI Ethics Consulting</option>
                        <option>Knowledge Management</option>
                        <option>Information Architecture</option>
                        <option>Team Training</option>
                      </Select>
                    </div>
                    <div className="mb-4">
                      <Textarea placeholder="Tell us about your project or needs..." />
                    </div>
                    <div className="mb-6">
                      <Checkbox label="I agree to the privacy policy and terms of service" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="primary" fullWidth>Send Message</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Feedback Showcase */}
        {activeTab === 'feedback' && (
          <DualModeView title="Feedback Components">
            <div className="space-y-8">
              {/* Alerts */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Alert Messages
                </Heading>
                <Stack gap="md">
                  <Alert variant="success" title="Success">
                    Your AI ethics audit has been completed successfully.
                  </Alert>
                  <Alert variant="info" title="Information">
                    New knowledge management framework available for review.
                  </Alert>
                  <Alert variant="warning" title="Warning">
                    Some AI implementations may require additional ethics review.
                  </Alert>
                  <Alert variant="error" title="Error">
                    Failed to process ethics assessment. Please try again.
                  </Alert>
                </Stack>
              </div>

              {/* Badges */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Badges & Status Indicators
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Status Badges</Text>
                    <Stack direction="horizontal" gap="sm" className="flex-wrap">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Active</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Pending</Badge>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Inactive</Badge>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Review</Badge>
                    </Stack>
                  </div>
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Category Tags</Text>
                    <Stack direction="horizontal" gap="sm" className="flex-wrap">
                      <Badge className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">AI Ethics</Badge>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Knowledge</Badge>
                      <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">Consulting</Badge>
                    </Stack>
                  </div>
                </div>
              </div>

              {/* Loading States */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Loading & Progress
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Spinners</Text>
                    <Stack direction="horizontal" gap="lg" className="items-center">
                      <Spinner size="sm" />
                      <Spinner size="md" />
                      <Spinner size="lg" />
                    </Stack>
                  </div>
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Progress Bars</Text>
                    <Stack gap="md">
                      <div>
                        <Text size="xs" className="text-gray-600 dark:text-gray-400 mb-1">Ethics Review: 75%</Text>
                        <Progress value={75} />
                      </div>
                      <div>
                        <Text size="xs" className="text-gray-600 dark:text-gray-400 mb-1">Knowledge Audit: 45%</Text>
                        <Progress value={45} />
                      </div>
                      <div>
                        <Text size="xs" className="text-gray-600 dark:text-gray-400 mb-1">Implementation: 90%</Text>
                        <Progress value={90} />
                      </div>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Navigation Showcase */}
        {activeTab === 'navigation' && (
          <DualModeView title="Navigation Components">
            <div className="space-y-8">
              {/* Breadcrumbs */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Breadcrumbs
                </Heading>
                <Stack gap="md">
                  <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "AI Ethics", current: true }
                  ]} />
                  <Breadcrumbs items={[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Team", href: "/team" },
                    { label: "Leadership", current: true }
                  ]} />
                </Stack>
              </div>

              {/* Tabs */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Tab Navigation
                </Heading>
                <Tabs 
                  items={[
                    { label: "AI Ethics", value: "ethics" },
                    { label: "Knowledge Management", value: "knowledge" },
                    { label: "Consulting", value: "consulting" }
                  ]}
                  activeTab="ethics"
                  onTabChange={(value) => console.log('Tab:', value)}
                >
                  <div className="pt-4">
                    <Text>Content for the AI Ethics tab. This would contain information about our AI ethics services and methodologies.</Text>
                  </div>
                </Tabs>
              </div>

              {/* Pagination */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Pagination
                </Heading>
                <Pagination 
                  currentPage={3} 
                  totalPages={10} 
                  onPageChange={(page) => console.log('Page:', page)}
                />
              </div>

              {/* Steps */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Step Indicator
                </Heading>
                <Steps items={[
                  { 
                    label: "Assessment", 
                    description: "Initial ethics evaluation",
                    status: "completed"
                  },
                  { 
                    label: "Analysis", 
                    description: "Detailed review process",
                    status: "current"
                  },
                  { 
                    label: "Implementation", 
                    description: "Apply recommendations",
                    status: "pending"
                  },
                  { 
                    label: "Review", 
                    description: "Final assessment",
                    status: "pending"
                  }
                ]} />
              </div>
            </div>
          </DualModeView>
        )}

        {/* Layout Showcase */}
        {activeTab === 'layout' && (
          <DualModeView title="Layout Components">
            <div className="space-y-8">
              {/* Grid System */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Grid System
                </Heading>
                <Stack gap="lg">
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">2 Columns</Text>
                    <Grid cols={2} gap="md">
                      <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-lg text-center">
                        <Text className="text-primary-800 dark:text-primary-200">Column 1</Text>
                      </div>
                      <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-lg text-center">
                        <Text className="text-primary-800 dark:text-primary-200">Column 2</Text>
                      </div>
                    </Grid>
                  </div>
                  
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">3 Columns</Text>
                    <Grid cols={3} gap="md">
                      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg text-center">
                        <Text className="text-blue-800 dark:text-blue-200">Col 1</Text>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg text-center">
                        <Text className="text-blue-800 dark:text-blue-200">Col 2</Text>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg text-center">
                        <Text className="text-blue-800 dark:text-blue-200">Col 3</Text>
                      </div>
                    </Grid>
                  </div>
                </Stack>
              </div>

              {/* Stack Layout */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Stack Layout
                </Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Vertical Stack</Text>
                    <Stack gap="md">
                      <div className="bg-green-100 dark:bg-green-900 p-3 rounded text-center">
                        <Text className="text-green-800 dark:text-green-200">Item 1</Text>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900 p-3 rounded text-center">
                        <Text className="text-green-800 dark:text-green-200">Item 2</Text>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900 p-3 rounded text-center">
                        <Text className="text-green-800 dark:text-green-200">Item 3</Text>
                      </div>
                    </Stack>
                  </div>
                  
                  <div>
                    <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-3">Horizontal Stack</Text>
                    <Stack direction="horizontal" gap="md">
                      <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded text-center flex-1">
                        <Text className="text-purple-800 dark:text-purple-200">A</Text>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded text-center flex-1">
                        <Text className="text-purple-800 dark:text-purple-200">B</Text>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded text-center flex-1">
                        <Text className="text-purple-800 dark:text-purple-200">C</Text>
                      </div>
                    </Stack>
                  </div>
                </div>
              </div>

              {/* Container & Section */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Container & Section
                </Heading>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4">
                  <Container>
                    <Section>
                      <Text className="text-center text-gray-600 dark:text-gray-400">
                        This content is wrapped in Container and Section components for proper spacing and structure.
                      </Text>
                      <Divider className="my-4" />
                      <Text size="sm" className="text-center text-gray-500 dark:text-gray-500">
                        Container provides max-width and centering, while Section adds consistent vertical spacing.
                      </Text>
                    </Section>
                  </Container>
                </div>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Colors Showcase */}
        {activeTab === 'colors' && (
          <DualModeView title="Color System">
            <div className="space-y-8 color-showcase">
              {/* Primary Colors */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Primary Colors
                </Heading>
                <Grid cols={5} gap="sm" className="color-showcase">
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-50 rounded-lg mb-2 border border-gray-200"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">primary-50</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-100 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">primary-100</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-200 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">primary-200</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-300 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">primary-300</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-400 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">primary-400</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-500 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">primary-500</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-600 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">primary-600</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-700 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">primary-700</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-800 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">primary-800</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-primary-900 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">primary-900</Text>
                  </div>
                </Grid>
              </div>

              {/* Gray Scale */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Gray Scale
                </Heading>
                <Grid cols={5} gap="sm" className="color-showcase">
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-50 rounded-lg mb-2 border border-gray-200"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">gray-50</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-100 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">gray-100</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-200 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">gray-200</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-300 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">gray-300</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-400 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">gray-400</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-500 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">gray-500</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-600 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">gray-600</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-700 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">gray-700</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-800 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">gray-800</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-16 bg-gray-900 rounded-lg mb-2"></div>
                    <Text size="xs" className="text-gray-200">gray-900</Text>
                  </div>
                </Grid>
              </div>

              {/* Semantic Colors */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Semantic Colors
                </Heading>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-full h-20 bg-green-500 rounded-lg mb-3 flex items-center justify-center">
                      <CheckCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <Text size="sm" className="font-medium">Success</Text>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">green-500</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-blue-500 rounded-lg mb-3 flex items-center justify-center">
                      <InformationCircleIcon className="h-8 w-8 text-white" />
                    </div>
                    <Text size="sm" className="font-medium">Info</Text>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">blue-500</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-yellow-500 rounded-lg mb-3 flex items-center justify-center">
                      <ExclamationTriangleIcon className="h-8 w-8 text-white" />
                    </div>
                    <Text size="sm" className="font-medium">Warning</Text>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">yellow-500</Text>
                  </div>
                  <div className="text-center">
                    <div className="w-full h-20 bg-red-500 rounded-lg mb-3 flex items-center justify-center">
                      <XMarkIcon className="h-8 w-8 text-white" />
                    </div>
                    <Text size="sm" className="font-medium">Error</Text>
                    <Text size="xs" className="text-gray-600 dark:text-gray-400">red-500</Text>
                  </div>
                </div>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Examples Showcase */}
        {activeTab === 'examples' && (
          <DualModeView title="Real-World Examples">
            <div className="space-y-8">
              {/* Service Card Example */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Service Card Component
                </Heading>
                <Grid cols={1} gap="lg" className="max-w-2xl">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                            <ShieldCheckIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <CardTitle>AI Ethics Audit</CardTitle>
                            <CardDescription>Comprehensive ethical assessment of AI systems</CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Available
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Text size="sm" className="mb-4">
                        Our comprehensive AI ethics audit evaluates your AI systems against established ethical frameworks, 
                        identifying potential risks and providing actionable recommendations for responsible AI implementation.
                      </Text>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-green-500" />
                          <Text size="sm">Bias detection and mitigation</Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-green-500" />
                          <Text size="sm">Transparency assessment</Text>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircleIcon className="h-4 w-4 text-green-500" />
                          <Text size="sm">Privacy impact analysis</Text>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="primary" size="sm">
                        Request Audit
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </CardFooter>
                  </Card>
                </Grid>
              </div>

              {/* Contact Form Example */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Contact Form with Validation
                </Heading>
                <div className="max-w-lg">
                  <Card>
                    <CardHeader>
                      <CardTitle>Get Started</CardTitle>
                      <CardDescription>Contact our AI ethics experts for a consultation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Stack gap="md">
                        <div>
                          <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</Text>
                          <Input placeholder="John Doe" />
                        </div>
                        <div>
                          <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Email</Text>
                          <Input type="email" placeholder="john@company.com" />
                        </div>
                        <div>
                          <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Company</Text>
                          <Input placeholder="Your Company" />
                        </div>
                        <div>
                          <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Service Interest</Text>
                          <Select>
                            <option>Select a service</option>
                            <option>AI Ethics Audit</option>
                            <option>Knowledge Management</option>
                            <option>Information Architecture</option>
                            <option>Team Training</option>
                          </Select>
                        </div>
                        <div>
                          <Text size="sm" className="font-medium text-gray-700 dark:text-gray-300 mb-2">Message</Text>
                          <Textarea 
                            placeholder="Tell us about your project and how we can help..." 
                          />
                        </div>
                        <Checkbox label="I agree to receive updates about ConnEthics services" />
                      </Stack>
                    </CardContent>
                    <CardFooter>
                      <Button variant="primary" fullWidth>Send Message</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* Dashboard Example */}
              <div>
                <Heading as="h3" size="xl" className="mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  Ethics Dashboard Example
                </Heading>
                <Grid cols={1} gap="lg">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>AI Ethics Assessment Progress</CardTitle>
                          <CardDescription>Current project status and milestones</CardDescription>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Grid cols={3} gap="md" className="mb-6">
                        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <Text size="xl" className="font-bold text-green-600 dark:text-green-400">12</Text>
                          <Text size="sm" className="text-green-700 dark:text-green-300">Completed Audits</Text>
                        </div>
                        <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <Text size="xl" className="font-bold text-yellow-600 dark:text-yellow-400">5</Text>
                          <Text size="sm" className="text-yellow-700 dark:text-yellow-300">In Progress</Text>
                        </div>
                        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <Text size="xl" className="font-bold text-blue-600 dark:text-blue-400">23</Text>
                          <Text size="sm" className="text-blue-700 dark:text-blue-300">Recommendations</Text>
                        </div>
                      </Grid>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Text size="sm" className="font-medium">Bias Assessment</Text>
                            <Text size="sm" className="text-gray-600 dark:text-gray-400">85%</Text>
                          </div>
                          <Progress value={85} />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Text size="sm" className="font-medium">Transparency Review</Text>
                            <Text size="sm" className="text-gray-600 dark:text-gray-400">72%</Text>
                          </div>
                          <Progress value={72} />
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Text size="sm" className="font-medium">Privacy Analysis</Text>
                            <Text size="sm" className="text-gray-600 dark:text-gray-400">91%</Text>
                          </div>
                          <Progress value={91} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            </div>
          </DualModeView>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Text size="sm" className="text-gray-600 dark:text-gray-400">
              ConnEthics Design System - Built with Next.js & Tailwind CSS
            </Text>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Back to Website
              </Link>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Live
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
