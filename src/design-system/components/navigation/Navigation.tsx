import React from 'react';
import { cn } from '@/lib/utils';

// Breadcrumbs Component
interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  className,
  ...props
}) => {
  return (
    <nav
      className={cn('flex', className)}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-neutral-400 dark:text-neutral-500">
                {separator}
              </span>
            )}
            
            {item.href && !item.current ? (
              <a
                href={item.href}
                className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <span
                className={cn(
                  item.current
                    ? 'text-neutral-900 dark:text-neutral-100 font-medium'
                    : 'text-neutral-600 dark:text-neutral-300'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Pagination Component
interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className,
  ...props
}) => {
  const getVisiblePages = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  const buttonClass = "px-3 py-2 text-sm font-medium border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900";
  const activeButtonClass = "px-3 py-2 text-sm font-medium border border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400";
  const disabledButtonClass = "px-3 py-2 text-sm font-medium border border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed";

  return (
    <nav
      className={cn('flex items-center justify-center', className)}
      aria-label="Pagination"
      {...props}
    >
      <div className="flex items-center space-x-1">
        {/* First Page */}
        {showFirstLast && currentPage > 1 && (
          <button
            onClick={() => onPageChange(1)}
            className={cn(buttonClass, 'rounded-l-md')}
            aria-label="Go to first page"
          >
            ««
          </button>
        )}

        {/* Previous Page */}
        {showPrevNext && (
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            className={cn(
              currentPage <= 1 ? disabledButtonClass : buttonClass,
              !showFirstLast && 'rounded-l-md'
            )}
            aria-label="Go to previous page"
          >
            ‹
          </button>
        )}

        {/* Page Numbers */}
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={page === currentPage ? activeButtonClass : buttonClass}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        {/* Next Page */}
        {showPrevNext && (
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className={cn(
              currentPage >= totalPages ? disabledButtonClass : buttonClass,
              !showFirstLast && 'rounded-r-md'
            )}
            aria-label="Go to next page"
          >
            ›
          </button>
        )}

        {/* Last Page */}
        {showFirstLast && currentPage < totalPages && (
          <button
            onClick={() => onPageChange(totalPages)}
            className={cn(buttonClass, 'rounded-r-md')}
            aria-label="Go to last page"
          >
            »»
          </button>
        )}
      </div>
    </nav>
  );
};

// Tabs Component
interface TabItem {
  label: string;
  value: string;
  content?: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  activeTab: string;
  onTabChange: (value: string) => void;
  variant?: 'default' | 'pills';
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  onTabChange,
  variant = 'default',
  className,
  ...props
}) => {
  const tabClass = variant === 'pills'
    ? "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900"
    : "px-4 py-2 text-sm font-medium border-b-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900";

  const activeTabClass = variant === 'pills'
    ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
    : "border-primary-500 text-primary-600 dark:text-primary-400";

  const inactiveTabClass = variant === 'pills'
    ? "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    : "border-transparent text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-600";

  const disabledTabClass = "text-neutral-400 dark:text-neutral-500 cursor-not-allowed";

  return (
    <div className={cn('w-full', className)} {...props}>
      <div
        className={cn(
          'flex',
          variant === 'pills' ? 'space-x-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg' : 'border-b border-neutral-200 dark:border-neutral-700'
        )}
        role="tablist"
      >
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => !item.disabled && onTabChange(item.value)}
            disabled={item.disabled}
            className={cn(
              tabClass,
              item.disabled
                ? disabledTabClass
                : activeTab === item.value
                ? activeTabClass
                : inactiveTabClass
            )}
            role="tab"
            aria-selected={activeTab === item.value}
            aria-controls={`tabpanel-${item.value}`}
            id={`tab-${item.value}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {items.map((item) => (
        item.content && (
          <div
            key={item.value}
            id={`tabpanel-${item.value}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.value}`}
            className={cn(
              'mt-4',
              activeTab === item.value ? 'block' : 'hidden'
            )}
          >
            {item.content}
          </div>
        )
      ))}
    </div>
  );
};

// Steps Component
interface StepItem {
  label: string;
  description?: string;
  status: 'pending' | 'current' | 'completed';
}

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StepItem[];
  orientation?: 'horizontal' | 'vertical';
}

export const Steps: React.FC<StepsProps> = ({
  items,
  orientation = 'horizontal',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex',
        orientation === 'vertical' ? 'flex-col space-y-4' : 'items-center space-x-4',
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={cn(
              'flex items-center',
              orientation === 'vertical' ? 'w-full' : 'flex-col text-center'
            )}
          >
            {/* Step Circle */}
            <div
              className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-medium',
                item.status === 'completed' && 'bg-primary-600 border-primary-600 text-white',
                item.status === 'current' && 'bg-primary-100 dark:bg-primary-900/30 border-primary-600 text-primary-600 dark:text-primary-400',
                item.status === 'pending' && 'bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-400 dark:text-neutral-500',
                orientation === 'vertical' && 'flex-shrink-0 mr-3'
              )}
            >
              {item.status === 'completed' ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                index + 1
              )}
            </div>

            {/* Step Content */}
            <div className={cn(orientation === 'vertical' ? 'flex-1' : 'mt-2')}>
              <div
                className={cn(
                  'text-sm font-medium',
                  item.status === 'completed' && 'text-primary-600 dark:text-primary-400',
                  item.status === 'current' && 'text-neutral-900 dark:text-neutral-100',
                  item.status === 'pending' && 'text-neutral-500 dark:text-neutral-400'
                )}
              >
                {item.label}
              </div>
              {item.description && (
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {item.description}
                </div>
              )}
            </div>
          </div>

          {/* Connector Line */}
          {index < items.length - 1 && (
            <div
              className={cn(
                orientation === 'vertical'
                  ? 'w-px h-6 ml-4 bg-neutral-300 dark:bg-neutral-600'
                  : 'flex-1 h-px bg-neutral-300 dark:bg-neutral-600'
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};