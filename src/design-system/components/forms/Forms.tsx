import React from 'react';
import { cn } from '@/lib/utils';

// Input Component
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'filled' | 'flushed';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  helperText?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const inputVariants = {
  default: 'border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 focus:border-primary-500 focus:ring-primary-500',
  filled: 'border-0 bg-neutral-100 dark:bg-neutral-700 focus:bg-white dark:focus:bg-neutral-800 focus:ring-primary-500',
  flushed: 'border-0 border-b-2 border-neutral-300 dark:border-neutral-600 rounded-none bg-transparent focus:border-primary-500 focus:ring-0',
};

const inputSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-base',
  lg: 'px-4 py-3 text-lg',
};

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'md',
  error = false,
  helperText,
  label,
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-neutral-400 dark:text-neutral-500">
              {leftIcon}
            </div>
          </div>
        )}
        
        <input
          id={inputId}
          className={cn(
            'w-full rounded-md shadow-sm transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'text-neutral-900 dark:text-neutral-100',
            'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
            inputVariants[variant],
            inputSizes[size],
            leftIcon && 'pl-10',
            rightIcon && 'pr-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="text-neutral-400 dark:text-neutral-500">
              {rightIcon}
            </div>
          </div>
        )}
      </div>
      
      {helperText && (
        <p className={cn(
          'mt-2 text-sm',
          error ? 'text-red-600 dark:text-red-400' : 'text-neutral-500 dark:text-neutral-400'
        )}>
          {helperText}
        </p>
      )}
    </div>
  );
};

// Textarea Component
interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'rows' | 'cols'> {
  variant?: 'default' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  helperText?: string;
  label?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea: React.FC<TextareaProps> = ({
  variant = 'default',
  size = 'md',
  error = false,
  helperText,
  label,
  resize = 'vertical',
  className,
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const resizeClasses = {
    none: 'resize-none',
    vertical: 'resize-y',
    horizontal: 'resize-x',
    both: 'resize',
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          {label}
        </label>
      )}
      
      <textarea
        id={textareaId}
        className={cn(
          'w-full rounded-md shadow-sm transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'text-neutral-900 dark:text-neutral-100',
          'placeholder:text-neutral-400 dark:placeholder:text-neutral-500',
          inputVariants[variant],
          inputSizes[size],
          resizeClasses[resize],
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      
      {helperText && (
        <p className={cn(
          'mt-2 text-sm',
          error ? 'text-red-600 dark:text-red-400' : 'text-neutral-500 dark:text-neutral-400'
        )}>
          {helperText}
        </p>
      )}
    </div>
  );
};

// Select Component
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: 'default' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder?: string;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
  variant = 'default',
  size = 'md',
  error = false,
  helperText,
  label,
  placeholder,
  className,
  id,
  children,
  ...props
}) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            'w-full rounded-md shadow-sm transition-colors duration-200 appearance-none cursor-pointer',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'text-neutral-900 dark:text-neutral-100',
            'pr-10', // Space for arrow icon
            inputVariants[variant],
            inputSizes[size],
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        
        {/* Arrow Icon */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-neutral-400 dark:text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      
      {helperText && (
        <p className={cn(
          'mt-2 text-sm',
          error ? 'text-red-600 dark:text-red-400' : 'text-neutral-500 dark:text-neutral-400'
        )}>
          {helperText}
        </p>
      )}
    </div>
  );
};

// Checkbox Component
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  error = false,
  className,
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={checkboxId}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border-neutral-300 dark:border-neutral-600',
            'text-primary-600 focus:ring-primary-500 focus:ring-offset-2',
            'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
            'bg-white dark:bg-neutral-800',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
      
      {(label || helperText) && (
        <div className="ml-3">
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer"
            >
              {label}
            </label>
          )}
          {helperText && (
            <p className={cn(
              'text-sm',
              error ? 'text-red-600 dark:text-red-400' : 'text-neutral-500 dark:text-neutral-400'
            )}>
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Radio Component
interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  label,
  helperText,
  error = false,
  className,
  id,
  ...props
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={radioId}
          type="radio"
          className={cn(
            'h-4 w-4 border-neutral-300 dark:border-neutral-600',
            'text-primary-600 focus:ring-primary-500 focus:ring-offset-2',
            'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
            'bg-white dark:bg-neutral-800',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
      </div>
      
      {(label || helperText) && (
        <div className="ml-3">
          {label && (
            <label
              htmlFor={radioId}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer"
            >
              {label}
            </label>
          )}
          {helperText && (
            <p className={cn(
              'text-sm',
              error ? 'text-red-600 dark:text-red-400' : 'text-neutral-500 dark:text-neutral-400'
            )}>
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
};