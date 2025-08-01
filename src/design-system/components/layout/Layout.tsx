import React from 'react';
import { cn } from '@/lib/utils';

// Container Component
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  center?: boolean;
  children: React.ReactNode;
}

const containerSizes = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl', 
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-8xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  size = 'xl',
  center = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full px-4 sm:px-6 lg:px-8',
        containerSizes[size],
        center && 'mx-auto',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Grid Component
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  };
  children: React.ReactNode;
}

const gridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const gridGaps = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export const Grid: React.FC<GridProps> = ({
  cols = 1,
  gap = 'md',
  responsive,
  className,
  children,
  ...props
}) => {
  const responsiveClasses = responsive ? [
    responsive.sm && `sm:grid-cols-${responsive.sm}`,
    responsive.md && `md:grid-cols-${responsive.md}`,
    responsive.lg && `lg:grid-cols-${responsive.lg}`,
    responsive.xl && `xl:grid-cols-${responsive.xl}`,
  ].filter(Boolean).join(' ') : '';

  return (
    <div
      className={cn(
        'grid',
        gridCols[cols],
        gridGaps[gap],
        responsiveClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Stack Component
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: boolean;
  children: React.ReactNode;
}

const stackDirections = {
  vertical: 'flex-col',
  horizontal: 'flex-row',
};

const stackAlign = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const stackJustify = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const stackGaps = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
};

export const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  align = 'start',
  justify = 'start',
  gap = 'md',
  wrap = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex',
        stackDirections[direction],
        stackAlign[align],
        stackJustify[justify],
        stackGaps[gap],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Section Component
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article' | 'aside';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const sectionPadding = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20',
};

export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  padding = 'lg',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        sectionPadding[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Divider Component
interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  size?: 'sm' | 'md' | 'lg';
}

const dividerVariants = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
};

const dividerSizes = {
  sm: 'border-t',
  md: 'border-t-2',
  lg: 'border-t-4',
};

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  size = 'sm',
  className,
  ...props
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'border-l border-neutral-200 dark:border-neutral-700 h-full',
          dividerVariants[variant],
          className
        )}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <hr
      className={cn(
        'border-neutral-200 dark:border-neutral-700 w-full',
        dividerVariants[variant],
        dividerSizes[size],
        className
      )}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  );
};