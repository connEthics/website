
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

const buttonVariants = {
  primary: 'bg-primary-900 dark:bg-primary-700 text-white hover:bg-primary-800 dark:hover:bg-primary-600 focus:ring-primary-500',
  secondary: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:ring-neutral-500',
  outline: 'border-2 border-primary-900 dark:border-primary-400 text-primary-900 dark:text-primary-400 hover:bg-primary-900 dark:hover:bg-primary-400 hover:text-white dark:hover:text-neutral-900 focus:ring-primary-500',
  ghost: 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-neutral-500',
  danger: 'bg-red-600 dark:bg-red-500 text-white hover:bg-red-700 dark:hover:bg-red-600 focus:ring-red-500',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg', 
  xl: 'px-8 py-4 text-xl',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  asChild = false,
  ...props
}) => {
  const baseClasses = cn(
    // Base styles
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed',
    
    // Variant styles
    buttonVariants[variant],
    
    // Size styles  
    buttonSizes[size],
    
    // Full width
    fullWidth && 'w-full',
    
    // Loading state
    isLoading && 'cursor-wait',
    
    className
  );

  const content = (
    <>
      {isLoading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {leftIcon && !isLoading && (
        <span className="mr-2">{leftIcon}</span>
      )}
      
      {children}
      
      {rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </>
  );

  if (asChild) {
    // When asChild is true, clone the child element and apply button styles
    return React.cloneElement(
      React.Children.only(children) as React.ReactElement,
      {
        className: cn(baseClasses, (children as React.ReactElement).props?.className),
      },
      content !== children ? content : undefined
    );
  }

  return (
    <button
      className={baseClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
