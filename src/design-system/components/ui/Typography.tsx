import React from 'react';
import { cn } from '@/lib/utils';

// Heading Component
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  children: React.ReactNode;
}

const headingSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
};

const headingWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = '2xl',
  weight = 'bold',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'text-neutral-900 dark:text-white leading-tight tracking-tight',
        headingSizes[size],
        headingWeights[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Text Component
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type TextVariant = 'body' | 'muted' | 'subtle' | 'accent';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div';
  size?: TextSize;
  variant?: TextVariant;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
}

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const textVariants = {
  body: 'text-neutral-900 dark:text-neutral-100',
  muted: 'text-neutral-600 dark:text-neutral-300',
  subtle: 'text-neutral-500 dark:text-neutral-400',
  accent: 'text-primary-600 dark:text-primary-400',
};

const textWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'base',
  variant = 'body',
  weight = 'normal',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'leading-relaxed',
        textSizes[size],
        textVariants[variant],
        textWeights[weight],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Link Component
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'muted' | 'accent';
  underline?: 'none' | 'hover' | 'always';
  children: React.ReactNode;
}

const linkVariants = {
  default: 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300',
  muted: 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100',
  accent: 'text-primary-900 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300',
};

const linkUnderlines = {
  none: 'no-underline',
  hover: 'no-underline hover:underline',
  always: 'underline',
};

export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  underline = 'hover',
  className,
  children,
  ...props
}) => {
  return (
    <a
      className={cn(
        'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 rounded-sm',
        linkVariants[variant],
        linkUnderlines[underline],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

// Code Component
interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'inline' | 'block';
}

export const Code: React.FC<CodeProps> = ({
  variant = 'inline',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'font-mono text-neutral-800 dark:text-neutral-200';
  
  if (variant === 'block') {
    return (
      <pre
        className={cn(
          baseClasses,
          'bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg overflow-x-auto border dark:border-neutral-700',
          className
        )}
        {...props}
      >
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <code
      className={cn(
        baseClasses,
        'bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm border dark:border-neutral-700',
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
};