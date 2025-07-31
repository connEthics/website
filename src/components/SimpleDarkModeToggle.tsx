'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useSimpleDarkMode } from '@/providers/SimpleDarkModeProvider';

export default function SimpleDarkModeToggle() {
  const { isDarkMode, toggleDarkMode, isInitialized } = useSimpleDarkMode();

  const handleClick = () => {
    console.log('🖱️ Simple Toggle: Button clicked');
    toggleDarkMode();
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">
        {isInitialized ? (isDarkMode ? 'Dark' : 'Light') : 'Loading...'}
      </span>
      <button
        onClick={handleClick}
        disabled={!isInitialized}
        className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 border border-blue-300 dark:border-blue-700"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
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
