'use client';

import React, { useState } from 'react';
import { 
  Button,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Container, Section, Grid, Stack, Divider,
  Heading, Text, Link, Code,
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
      <div className="text-center py-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
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
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 min-h-[600px] shadow-xl">
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
          <div className="dark bg-gray-900 border-2 border-gray-600 rounded-xl p-8 min-h-[600px] shadow-xl">
            <div className="text-white">
              {children}
            </div>
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

        {/* Placeholder for other tabs */}
        {!['buttons', 'typography'].includes(activeTab) && (
          <DualModeView title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Components`}>
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🚧</div>
              <Heading as="h3" size="xl" className="text-gray-900 dark:text-white mb-2">
                Coming Soon
              </Heading>
              <Text size="lg" className="text-gray-600 dark:text-gray-400">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} showcase is under development
              </Text>
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
