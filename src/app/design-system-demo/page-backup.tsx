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

export default function DesignSystemDemo() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    category: '',
    newsletter: false,
    priority: 'medium'
  });

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
      <Heading as="h2" size="2xl" className="text-center">{title}</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
        {/* Light Mode */}
        <div className="space-y-4">
          <div className="sticky top-4 z-10">
            <Badge className="bg-white border-gray-300 text-gray-700 shadow-sm">
              ☀️ Light Mode
            </Badge>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 min-h-[500px]">
            {children}
          </div>
        </div>
        
        {/* Dark Mode */}
        <div className="space-y-4">
          <div className="sticky top-4 z-10">
            <Badge className="bg-gray-900 border-gray-700 text-gray-200 shadow-sm">
              🌙 Dark Mode
            </Badge>
          </div>
          <div className="dark bg-gray-900 border border-gray-700 rounded-lg p-6 min-h-[500px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Design System', href: '/design-system-demo' },
    { label: 'Components', current: true }
  ];

  const stepItems = [
    { label: 'Planning', description: 'Define requirements', status: 'completed' as const },
    { label: 'Design', description: 'Create mockups', status: 'current' as const },
    { label: 'Development', description: 'Build components', status: 'pending' as const },
    { label: 'Testing', description: 'Quality assurance', status: 'pending' as const }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      {/* Header */}
      <Section padding="lg" className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <Heading as="h1" size="4xl" className="mb-2">
                ConnEthics Design System
              </Heading>
              <Text variant="muted">
                Complete component library showcase with all variants and states in both light and dark modes
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Container className="py-8">
        {/* Navigation Tabs */}
        <Card variant="elevated" className="mb-8">
          <CardContent>
            <Tabs
              items={tabItems}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              variant="pills"
            />
          </CardContent>
        </Card>

        {/* Button Showcase */}
        {activeTab === 'buttons' && (
          <DualModeView title="Button Components">
            <div className="space-y-6">
              {/* Primary Buttons */}
              <div>
                <Heading as="h3" size="lg" className="mb-4">Primary Buttons</Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="primary" size="sm">Small Primary</Button>
                  <Button variant="primary" size="md">Medium Primary</Button>
                  <Button variant="primary" size="lg">Large Primary</Button>
                  <Button variant="primary" size="xl">Extra Large</Button>
                </Stack>
                <Stack direction="horizontal" gap="md" className="flex-wrap mt-4">
                  <Button variant="primary" leftIcon={<ShieldCheckIcon className="h-4 w-4" />}>
                    With Left Icon
                  </Button>
                  <Button variant="primary" rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
                    With Right Icon
                  </Button>
                  <Button variant="primary" isLoading>
                    Loading State
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </Stack>
              </div>

              {/* Outline Buttons */}
              <div>
                <Heading as="h3" size="lg" className="mb-4">Outline Buttons</Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="outline" size="sm">Small Outline</Button>
                  <Button variant="outline" size="md">Medium Outline</Button>
                  <Button variant="outline" size="lg">Large Outline</Button>
                  <Button variant="outline" size="xl">Extra Large</Button>
                </Stack>
                <Stack direction="horizontal" gap="md" className="flex-wrap mt-4">
                  <Button variant="outline" leftIcon={<InformationCircleIcon className="h-4 w-4" />}>
                    With Left Icon
                  </Button>
                  <Button variant="outline" rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
                    With Right Icon
                  </Button>
                  <Button variant="outline" isLoading>
                    Loading State
                  </Button>
                  <Button variant="outline" disabled>
                    Disabled
                  </Button>
                </Stack>
              </div>

              {/* Secondary Buttons */}
              <div>
                <Heading as="h3" size="lg" className="mb-4">Secondary Buttons</Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="secondary" size="sm">Small Secondary</Button>
                  <Button variant="secondary" size="md">Medium Secondary</Button>
                  <Button variant="secondary" size="lg">Large Secondary</Button>
                  <Button variant="secondary" size="xl">Extra Large</Button>
                </Stack>
              </div>

              {/* Ghost Buttons */}
              <div>
                <Heading as="h3" size="lg" className="mb-4">Ghost Buttons</Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="ghost" size="sm">Small Ghost</Button>
                  <Button variant="ghost" size="md">Medium Ghost</Button>
                  <Button variant="ghost" size="lg">Large Ghost</Button>
                  <Button variant="ghost" size="xl">Extra Large</Button>
                </Stack>
              </div>

              {/* Danger Buttons */}
              <div>
                <Heading as="h3" size="lg" className="mb-4">Danger Buttons</Heading>
                <Stack direction="horizontal" gap="md" className="flex-wrap">
                  <Button variant="danger" size="sm">Small Danger</Button>
                  <Button variant="danger" size="md">Medium Danger</Button>
                  <Button variant="danger" size="lg">Large Danger</Button>
                  <Button variant="danger" size="xl">Extra Large</Button>
                </Stack>
              </div>
            </div>
          </DualModeView>
        )}

        {/* Typography Section */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Secondary Buttons</Heading>
                  <Stack direction="horizontal" gap="md" className="flex-wrap">
                    <Button variant="secondary" size="sm">Small Secondary</Button>
                    <Button variant="secondary" size="md">Medium Secondary</Button>
                    <Button variant="secondary" size="lg">Large Secondary</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                  </Stack>
                </div>

                {/* Outline Buttons */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Outline Buttons</Heading>
                  <Stack direction="horizontal" gap="md" className="flex-wrap">
                    <Button variant="outline" size="sm">Small Outline</Button>
                    <Button variant="outline" size="md">Medium Outline</Button>
                    <Button variant="outline" size="lg">Large Outline</Button>
                    <Button variant="outline" disabled>Disabled</Button>
                  </Stack>
                </div>

                {/* Ghost Buttons */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Ghost Buttons</Heading>
                  <Stack direction="horizontal" gap="md" className="flex-wrap">
                    <Button variant="ghost" size="sm">Small Ghost</Button>
                    <Button variant="ghost" size="md">Medium Ghost</Button>
                    <Button variant="ghost" size="lg">Large Ghost</Button>
                    <Button variant="ghost" disabled>Disabled</Button>
                  </Stack>
                </div>

                {/* Danger Buttons */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Danger Buttons</Heading>
                  <Stack direction="horizontal" gap="md" className="flex-wrap">
                    <Button variant="danger" size="sm">Small Danger</Button>
                    <Button variant="danger" size="md">Medium Danger</Button>
                    <Button variant="danger" size="lg">Large Danger</Button>
                    <Button variant="danger" disabled>Disabled</Button>
                  </Stack>
                </div>

                {/* Full Width */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Full Width Buttons</Heading>
                  <Stack gap="sm">
                    <Button variant="primary" fullWidth>Full Width Primary</Button>
                    <Button variant="outline" fullWidth>Full Width Outline</Button>
                  </Stack>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Typography Showcase */}
        {activeTab === 'typography' && (
          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Typography Scale</CardTitle>
                <CardDescription>Headings, text, and typography variants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Headings */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Headings</Heading>
                  <Stack gap="md">
                    <Heading as="h1" size="6xl">Heading 1 - 6xl</Heading>
                    <Heading as="h2" size="5xl">Heading 2 - 5xl</Heading>
                    <Heading as="h3" size="4xl">Heading 3 - 4xl</Heading>
                    <Heading as="h4" size="3xl">Heading 4 - 3xl</Heading>
                    <Heading as="h5" size="2xl">Heading 5 - 2xl</Heading>
                    <Heading as="h6" size="xl">Heading 6 - xl</Heading>
                  </Stack>
                </div>

                {/* Text Variants */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Text Variants</Heading>
                  <Stack gap="sm">
                    <Text size="xl" variant="body">Extra large body text</Text>
                    <Text size="lg" variant="body">Large body text</Text>
                    <Text size="base" variant="body">Base body text (default)</Text>
                    <Text size="sm" variant="body">Small body text</Text>
                    <Text size="xs" variant="body">Extra small body text</Text>
                  </Stack>
                </div>

                {/* Text Colors */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Text Colors</Heading>
                  <Stack gap="sm">
                    <Text variant="body">Default body text</Text>
                    <Text variant="muted">Muted text for secondary information</Text>
                    <Text variant="subtle">Subtle text for less important content</Text>
                    <Text variant="accent">Accent text for highlighting</Text>
                  </Stack>
                </div>

                {/* Links */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Links</Heading>
                  <Stack gap="sm">
                    <div>
                      <Link href="#" variant="default" underline="hover">Default link with hover underline</Link>
                    </div>
                    <div>
                      <Link href="#" variant="muted" underline="always">Muted link with always underline</Link>
                    </div>
                    <div>
                      <Link href="#" variant="accent" underline="none">Accent link with no underline</Link>
                    </div>
                  </Stack>
                </div>

                {/* Code */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Code</Heading>
                  <Stack gap="md">
                    <div>
                      <Text>Inline code: <Code variant="inline">const example = 'hello world';</Code></Text>
                    </div>
                    <Code variant="block">
{`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet('ConnEthics');
console.log(message);`}
                    </Code>
                  </Stack>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Cards Showcase */}
        {activeTab === 'cards' && (
          <div className="space-y-8">
            <Grid cols={1} responsive={{ md: 2, lg: 3 }} gap="lg">
              {/* Default Card */}
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>
                    This is a default card variant with standard styling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Text>Card content goes here. This can include any components or text.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">Action</Button>
                </CardFooter>
              </Card>

              {/* Elevated Card */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>
                    This card has elevation with shadow effects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Text>Elevated cards are great for highlighting important content.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardFooter>
              </Card>

              {/* Outlined Card */}
              <Card variant="outlined">
                <CardHeader>
                  <CardTitle>Outlined Card</CardTitle>
                  <CardDescription>
                    This card uses borders instead of shadows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Text>Outlined cards provide clear boundaries without shadows.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">Explore</Button>
                </CardFooter>
              </Card>
            </Grid>

            {/* Card with Icon */}
            <Card variant="elevated" className="max-w-md">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <CardTitle>Service Card</CardTitle>
                    <CardDescription>With icon and badge</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Text className="mb-4">This card demonstrates how to combine different components.</Text>
                <Badge variant="primary">Premium</Badge>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Forms Showcase */}
        {activeTab === 'forms' && (
          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Form Components</CardTitle>
                <CardDescription>All form inputs with different states and variants</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Input Fields */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Input Fields</Heading>
                  <Grid cols={1} responsive={{ md: 2 }} gap="md">
                    <Input
                      label="Email Address"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter password"
                      variant="filled"
                    />
                    <Input
                      label="Website URL"
                      placeholder="https://example.com"
                      variant="flushed"
                    />
                    <Input
                      label="Disabled Input"
                      placeholder="This is disabled"
                      disabled
                    />
                    <Input
                      label="Error State"
                      placeholder="Enter valid input"
                      error
                      helperText="This field has an error"
                    />
                    <Input
                      label="With Left Icon"
                      placeholder="Search..."
                      leftIcon={<ShieldCheckIcon className="h-4 w-4" />}
                    />
                  </Grid>
                </div>

                {/* Textarea */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Textarea</Heading>
                  <Grid cols={1} responsive={{ md: 2 }} gap="md">
                    <Textarea
                      label="Message"
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                    <Textarea
                      label="Filled Variant"
                      placeholder="Filled textarea..."
                      variant="filled"
                    />
                  </Grid>
                </div>

                {/* Select */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Select Dropdown</Heading>
                  <Grid cols={1} responsive={{ md: 2 }} gap="md">
                    <Select
                      label="Category"
                      placeholder="Choose a category"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="design">Design</option>
                      <option value="development">Development</option>
                      <option value="marketing">Marketing</option>
                    </Select>
                    <Select
                      label="Priority"
                      variant="filled"
                      value={formData.priority}
                      onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </Select>
                  </Grid>
                </div>

                {/* Checkboxes and Radio */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Checkboxes & Radio Buttons</Heading>
                  <Grid cols={1} responsive={{ md: 2 }} gap="md">
                    <div>
                      <Text weight="medium" className="mb-3">Preferences</Text>
                      <Stack gap="sm">
                        <Checkbox 
                          label="Subscribe to newsletter"
                          checked={formData.newsletter}
                          onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                        />
                        <Checkbox label="Enable notifications" />
                        <Checkbox label="Terms and conditions" />
                        <Checkbox label="Disabled option" disabled />
                      </Stack>
                    </div>
                    <div>
                      <Text weight="medium" className="mb-3">Contact Method</Text>
                      <Stack gap="sm">
                        <Radio name="contact" label="Email" value="email" defaultChecked />
                        <Radio name="contact" label="Phone" value="phone" />
                        <Radio name="contact" label="SMS" value="sms" />
                        <Radio name="contact" label="Disabled option" value="disabled" disabled />
                      </Stack>
                    </div>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Feedback Showcase */}
        {activeTab === 'feedback' && (
          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Feedback Components</CardTitle>
                <CardDescription>Alerts, badges, spinners, and progress indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Alerts */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Alerts</Heading>
                  <Stack gap="md">
                    <Alert variant="info" title="Information">
                      This is an informational alert with additional context.
                    </Alert>
                    <Alert variant="success" title="Success">
                      Your action was completed successfully!
                    </Alert>
                    <Alert variant="warning" title="Warning">
                      Please review your input before proceeding.
                    </Alert>
                    <Alert variant="error" title="Error" closable onClose={() => {}}>
                      Something went wrong. Please try again.
                    </Alert>
                  </Stack>
                </div>

                {/* Badges */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Badges</Heading>
                  <div className="space-y-4">
                    <div>
                      <Text className="mb-2">Small badges:</Text>
                      <Stack direction="horizontal" gap="sm" className="flex-wrap">
                        <Badge variant="default" size="sm">Default</Badge>
                        <Badge variant="primary" size="sm">Primary</Badge>
                        <Badge variant="secondary" size="sm">Secondary</Badge>
                        <Badge variant="success" size="sm">Success</Badge>
                        <Badge variant="warning" size="sm">Warning</Badge>
                        <Badge variant="error" size="sm">Error</Badge>
                      </Stack>
                    </div>
                    <div>
                      <Text className="mb-2">Medium badges:</Text>
                      <Stack direction="horizontal" gap="sm" className="flex-wrap">
                        <Badge variant="default" size="md">Default</Badge>
                        <Badge variant="primary" size="md">Primary</Badge>
                        <Badge variant="secondary" size="md">Secondary</Badge>
                        <Badge variant="success" size="md">Success</Badge>
                        <Badge variant="warning" size="md">Warning</Badge>
                        <Badge variant="error" size="md">Error</Badge>
                      </Stack>
                    </div>
                    <div>
                      <Text className="mb-2">Large badges:</Text>
                      <Stack direction="horizontal" gap="sm" className="flex-wrap">
                        <Badge variant="default" size="lg">Default</Badge>
                        <Badge variant="primary" size="lg">Primary</Badge>
                        <Badge variant="secondary" size="lg">Secondary</Badge>
                        <Badge variant="success" size="lg">Success</Badge>
                        <Badge variant="warning" size="lg">Warning</Badge>
                        <Badge variant="error" size="lg">Error</Badge>
                      </Stack>
                    </div>
                  </div>
                </div>

                {/* Spinners */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Loading Spinners</Heading>
                  <Stack direction="horizontal" gap="md" className="items-center">
                    <div className="text-center">
                      <Spinner size="sm" />
                      <Text size="sm" className="mt-2">Small</Text>
                    </div>
                    <div className="text-center">
                      <Spinner size="md" />
                      <Text size="sm" className="mt-2">Medium</Text>
                    </div>
                    <div className="text-center">
                      <Spinner size="lg" />
                      <Text size="sm" className="mt-2">Large</Text>
                    </div>
                    <div className="text-center">
                      <Spinner size="xl" variant="neutral" />
                      <Text size="sm" className="mt-2">Extra Large</Text>
                    </div>
                  </Stack>
                </div>

                {/* Progress Bars */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Progress Indicators</Heading>
                  <Stack gap="md">
                    <Progress value={25} label="Upload Progress" showPercentage />
                    <Progress value={60} variant="success" label="Installation" showPercentage />
                    <Progress value={80} variant="warning" label="Processing" />
                    <Progress value={45} variant="error" size="lg" label="Error Recovery" showPercentage />
                  </Stack>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Navigation Showcase */}
        {activeTab === 'navigation' && (
          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Navigation Components</CardTitle>
                <CardDescription>Breadcrumbs, pagination, tabs, and steps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Breadcrumbs */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Breadcrumbs</Heading>
                  <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Pagination */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Pagination</Heading>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={setCurrentPage}
                    showFirstLast
                    showPrevNext
                    maxVisiblePages={5}
                  />
                </div>

                {/* Steps */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Steps (Horizontal)</Heading>
                  <Steps items={stepItems} orientation="horizontal" />
                </div>

                <div>
                  <Heading as="h3" size="lg" className="mb-4">Steps (Vertical)</Heading>
                  <Steps items={stepItems} orientation="vertical" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Layout Showcase */}
        {activeTab === 'layout' && (
          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Layout Components</CardTitle>
                <CardDescription>Container, grid, stack, section, and divider components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Grid System */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Grid System</Heading>
                  <Stack gap="md">
                    <div>
                      <Text className="mb-2">2 columns:</Text>
                      <Grid cols={2} gap="md">
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 1</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 2</div>
                      </Grid>
                    </div>
                    <div>
                      <Text className="mb-2">3 columns:</Text>
                      <Grid cols={3} gap="md">
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 1</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 2</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 3</div>
                      </Grid>
                    </div>
                    <div>
                      <Text className="mb-2">Responsive (1 on mobile, 2 on tablet, 4 on desktop):</Text>
                      <Grid cols={1} responsive={{ md: 2, lg: 4 }} gap="md">
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 1</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 2</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 3</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-lg text-center">Item 4</div>
                      </Grid>
                    </div>
                  </Stack>
                </div>

                {/* Stack System */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Stack System</Heading>
                  <Grid cols={1} responsive={{ md: 2 }} gap="lg">
                    <div>
                      <Text className="mb-2">Vertical Stack:</Text>
                      <Stack direction="vertical" gap="sm" className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded text-center">Item 1</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded text-center">Item 2</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded text-center">Item 3</div>
                      </Stack>
                    </div>
                    <div>
                      <Text className="mb-2">Horizontal Stack:</Text>
                      <Stack direction="horizontal" gap="sm" className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded text-center">Item 1</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded text-center">Item 2</div>
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-2 rounded text-center">Item 3</div>
                      </Stack>
                    </div>
                  </Grid>
                </div>

                {/* Dividers */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Dividers</Heading>
                  <Stack gap="md">
                    <div>
                      <Text className="mb-2">Horizontal dividers:</Text>
                      <div className="space-y-4">
                        <div>Content above</div>
                        <Divider orientation="horizontal" variant="solid" size="sm" />
                        <div>Content below</div>
                        <Divider orientation="horizontal" variant="dashed" size="md" />
                        <div>More content</div>
                      </div>
                    </div>
                  </Stack>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Colors Showcase */}
        {activeTab === 'colors' && (
          <div className="space-y-8">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Color Palette</CardTitle>
                <CardDescription>ConnEthics brand colors and semantic color system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Primary Colors */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Primary Colors (ConnEthics Blue)</Heading>
                  <Grid cols={3} responsive={{ md: 6 }} gap="md">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                      <div key={shade} className="text-center">
                        <div 
                          className={`w-full h-16 rounded-lg mb-2 border dark:border-neutral-600`}
                          style={{ backgroundColor: `var(--color-primary-${shade})` }}
                        />
                        <Text size="xs" className="font-mono">primary-{shade}</Text>
                      </div>
                    ))}
                  </Grid>
                </div>

                {/* Neutral Colors */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Neutral Colors</Heading>
                  <Grid cols={5} responsive={{ md: 10 }} gap="md">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                      <div key={shade} className="text-center">
                        <div 
                          className={`w-full h-16 bg-neutral-${shade} rounded-lg mb-2 border dark:border-neutral-600`}
                        />
                        <Text size="xs" className="font-mono">neutral-{shade}</Text>
                      </div>
                    ))}
                  </Grid>
                </div>

                {/* Semantic Colors */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Semantic Colors</Heading>
                  <Grid cols={2} responsive={{ md: 4 }} gap="lg">
                    {/* Success */}
                    <div className="text-center">
                      <div className="w-full h-16 bg-green-500 rounded-lg mb-2" />
                      <Text weight="medium">Success</Text>
                      <Text size="xs" variant="muted" className="font-mono">green-500</Text>
                    </div>
                    
                    {/* Warning */}
                    <div className="text-center">
                      <div className="w-full h-16 bg-yellow-500 rounded-lg mb-2" />
                      <Text weight="medium">Warning</Text>
                      <Text size="xs" variant="muted" className="font-mono">yellow-500</Text>
                    </div>
                    
                    {/* Error */}
                    <div className="text-center">
                      <div className="w-full h-16 bg-red-500 rounded-lg mb-2" />
                      <Text weight="medium">Error</Text>
                      <Text size="xs" variant="muted" className="font-mono">red-500</Text>
                    </div>
                    
                    {/* Info */}
                    <div className="text-center">
                      <div className="w-full h-16 bg-blue-500 rounded-lg mb-2" />
                      <Text weight="medium">Info</Text>
                      <Text size="xs" variant="muted" className="font-mono">blue-500</Text>
                    </div>
                  </Grid>
                </div>

                {/* Color Usage Examples */}
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Color Usage Examples</Heading>
                  <Grid cols={1} responsive={{ md: 2 }} gap="lg">
                    <Card variant="elevated" className="bg-primary-50 dark:bg-primary-900/10 border-primary-200 dark:border-primary-800">
                      <CardHeader>
                        <CardTitle className="text-primary-900 dark:text-primary-100">Primary Theme Card</CardTitle>
                        <CardDescription className="text-primary-700 dark:text-primary-300">
                          Using primary color palette
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="primary" size="sm">Primary Action</Button>
                      </CardContent>
                    </Card>

                    <Card variant="elevated" className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="text-green-900 dark:text-green-100">Success Theme Card</CardTitle>
                        <CardDescription className="text-green-700 dark:text-green-300">
                          Using success color palette
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Badge variant="success">Completed</Badge>
                      </CardContent>
                    </Card>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Examples Showcase */}
        {activeTab === 'examples' && (
          <div className="space-y-8">
            {/* Our Expertise Section Example */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Layout Example: Our Expertise Section</CardTitle>
                <CardDescription>
                  Real-world example showing how components work together to create the homepage expertise section
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Example Implementation */}
                <Section padding="xl" className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <Container>
                    <div className="text-center mb-16">
                      <Heading as="h2" size="4xl" className="mb-4">
                        Our Expertise
                      </Heading>
                      <Text size="xl" variant="muted" className="max-w-3xl mx-auto">
                        We specialize in building ethical connections through self-sovereign identity, 
                        competitive intelligence, and strategic product leadership.
                      </Text>
                    </div>
                    
                    <Grid cols={1} responsive={{ md: 3 }} gap="lg">
                      {[
                        {
                          title: "Self-Sovereign Identity",
                          description: "Prepare for SSI integration and deployment. Empower individuals to securely control their digital identities.",
                          icon: ShieldCheckIcon,
                          features: ["SSI architecture design", "Digital identity strategy", "Secure control frameworks"]
                        },
                        {
                          title: "Ecosystem Cartography", 
                          description: "Generate actionable insights through competitive intelligence and economic warfare analysis.",
                          icon: ExclamationTriangleIcon,
                          features: ["Competitive intelligence", "Economic warfare analysis", "Business ecosystem mapping"]
                        },
                        {
                          title: "Product Leadership",
                          description: "Align product roadmaps with strategic goals and OKRs using data-driven insights.",
                          icon: CheckCircleIcon,
                          features: ["Strategic roadmap alignment", "OKR implementation", "Data-driven prioritization"]
                        },
                      ].map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                          <Card key={index} variant="elevated" padding="lg" className="h-full">
                            <CardHeader className="pb-4">
                              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                                <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                              </div>
                              <CardTitle size="xl">
                                {service.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription className="mb-4">
                                {service.description}
                              </CardDescription>
                              <Stack gap="xs">
                                {service.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center">
                                    <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                                    <Text size="sm" variant="muted">{feature}</Text>
                                  </div>
                                ))}
                              </Stack>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </Grid>
                  </Container>
                </Section>
              </CardContent>
            </Card>

            {/* Hero Section Example */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Layout Example: Hero Section</CardTitle>
                <CardDescription>
                  Hero section with gradient background, typography hierarchy, and button combinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Section padding="xl" className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-800 dark:to-neutral-900 rounded-lg">
                  <Container>
                    <div className="text-center">
                      <Heading as="h1" size="5xl" className="mb-6">
                        Ethical Connections in a{" "}
                        <span className="text-primary-600 dark:text-primary-400">Competitive World</span>
                      </Heading>
                      <Text size="lg" variant="muted" className="mb-8 max-w-3xl mx-auto">
                        We build products and animate business ecosystems based on radical candor, 
                        integrity, and innovation.
                      </Text>
                      <Stack direction="horizontal" justify="center" gap="md" className="flex-col sm:flex-row">
                        <Button 
                          variant="primary" 
                          size="lg"
                          rightIcon={<ArrowRightIcon className="h-5 w-5" />}
                        >
                          Start Your Journey
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                        >
                          Our Services
                        </Button>
                      </Stack>
                    </div>
                  </Container>
                </Section>
              </CardContent>
            </Card>

            {/* CTA Section Example */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Layout Example: Call-to-Action</CardTitle>
                <CardDescription>
                  High-contrast CTA section with primary background and secondary button
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Section padding="lg" className="bg-primary-900 dark:bg-primary-800 text-white rounded-lg">
                  <Container>
                    <div className="text-center">
                      <Heading as="h2" size="3xl" className="mb-4 text-white">
                        Ready to Transform Your Business?
                      </Heading>
                      <Text size="lg" className="mb-8 max-w-2xl mx-auto text-primary-100">
                        Let's discuss how ConnEthics can bring clarity and purpose to your 
                        challenging competitive environment.
                      </Text>
                      <Button 
                        variant="secondary" 
                        size="lg"
                        rightIcon={<ArrowRightIcon className="h-5 w-5" />}
                        className="bg-white dark:bg-neutral-100 text-primary-900 hover:bg-neutral-100 dark:hover:bg-neutral-200"
                      >
                        Get Started Today
                      </Button>
                    </div>
                  </Container>
                </Section>
              </CardContent>
            </Card>

            {/* Component Composition Guide */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle size="2xl">Component Composition Guide</CardTitle>
                <CardDescription>
                  How to properly combine our design system components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Heading as="h3" size="lg" className="mb-4">Layout Structure</Heading>
                  <Code variant="block">{`<Section padding="xl" className="bg-white dark:bg-neutral-900">
  <Container>
    <Grid cols={1} responsive={{ md: 3 }} gap="lg">
      <Card variant="elevated" padding="lg">
        <CardHeader>
          <CardTitle>Service Title</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>Service description...</Text>
          <Button variant="primary">Learn More</Button>
        </CardContent>
      </Card>
    </Grid>
  </Container>
</Section>`}</Code>
                </div>

                <div>
                  <Heading as="h3" size="lg" className="mb-4">Design Principles</Heading>
                  <Grid cols={1} responsive={{ md: 2 }} gap="md">
                    <Alert variant="info" title="Consistent Spacing">
                      Use the 8px grid system with our spacing tokens (xs, sm, md, lg, xl) for consistent layouts.
                    </Alert>
                    <Alert variant="success" title="Color Hierarchy">
                      Primary colors for main actions, neutral for content, semantic for status indicators.
                    </Alert>
                    <Alert variant="warning" title="Typography Scale">
                      Use heading sizes to create clear information hierarchy and improve readability.
                    </Alert>
                    <Alert variant="error" title="Accessibility">
                      Ensure proper contrast ratios and semantic HTML structure for screen readers.
                    </Alert>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </Container>
    </div>
  );
}
