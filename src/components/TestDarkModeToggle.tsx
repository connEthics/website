'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTestDarkMode } from '@/providers/TestDarkModeProvider';

export default function TestDarkModeToggle() {
  const { isDarkMode, toggleDarkMode, isInitialized } = useTestDarkMode();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">
        TEST: {isInitialized ? (isDarkMode ? 'Dark' : 'Light') : 'Loading...'}
      </span>
      <button
        onClick={toggleDarkMode}
        disabled={!isInitialized}
        className="p-2 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 border-2 border-red-500"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
