'use client';

import { useTestDarkMode } from '@/providers/TestDarkModeProvider';

export default function DarkModeDebug() {
  const { isDarkMode, isInitialized } = useTestDarkMode();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
      <div>Dark Mode: {isDarkMode ? '🌙' : '☀️'} {isDarkMode.toString()}</div>
      <div>Initialized: {isInitialized.toString()}</div>
      <div>HTML Classes: {typeof document !== 'undefined' ? document.documentElement.className : 'SSR'}</div>
    </div>
  );
}
