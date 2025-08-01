'use client';

import React, { useState } from 'react';
import { Container, Box, Typography, Tab, Tabs, Grid } from '@mui/material';
import {
  ConnEthicsHero,
  ConnEthicsFeatureGrid,
  ConnEthicsServiceCard,
  ConnEthicsTestimonial,
  ConnEthicsContactForm,
  ConnEthicsMetrics,
  ConnEthicsTeamMember,
  ConnEthicsInsightCard,
  ConnEthicsButton,
  ConnEthicsCard,
} from '@/components/mui';

// Sample data for components
const features = [
  {
    id: '1',
    title: 'AI Ethics Consulting',
    description: 'Navigate the complex landscape of AI ethics with expert guidance.',
    icon: <span style={{ fontSize: '2rem' }}>🧠</span>,
  },
  {
    id: '2',
    title: 'Information Architecture',
    description: 'Design intuitive information structures that enhance user experience.',
    icon: <span style={{ fontSize: '2rem' }}>🏗️</span>,
  },
  {
    id: '3',
    title: 'Knowledge Management',
    description: 'Transform organizational knowledge into strategic assets.',
    icon: <span style={{ fontSize: '2rem' }}>📚</span>,
  },
];

const metrics = [
  { value: '50+', label: 'Projects', description: 'Completed successfully' },
  { value: '95%', label: 'Satisfaction', description: 'Client happiness rate' },
  { value: '10+', label: 'Years', description: 'Industry experience' },
  { value: '24/7', label: 'Support', description: 'Always available' },
];

const testimonial = {
  quote: 'ConnEthics transformed our approach to AI governance. Their expertise helped us build trust while accelerating innovation.',
  author: {
    name: 'Sarah Johnson',
    title: 'Chief Technology Officer',
    company: 'TechForward Inc.',
  },
  rating: 5,
};

const teamMember = {
  name: 'Alex Chen',
  role: 'AI Ethics Specialist',
  bio: 'Expert in algorithmic auditing and responsible AI development with 8+ years experience.',
  skills: ['AI Ethics', 'Machine Learning', 'Policy Development'],
  social: {
    linkedin: 'https://linkedin.com/in/alexchen',
    email: 'alex@connethics.com',
  },
};

const insight = {
  title: 'The Future of Self-Sovereign Identity',
  excerpt: 'Exploring how self-sovereign identity systems are reshaping enterprise security.',
  category: 'Identity & Privacy',
  readTime: '8 min read',
  publishDate: 'Dec 15, 2023',
  author: 'ConnEthics Team',
  href: '/insights/future-self-sovereign-identity-enterprise',
  tags: ['SSI', 'Privacy', 'Security'],
};

export default function DesignSystemDemo() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ py: 4 }}>
      {/* Header */}
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            🎨 ConnEthics Design System
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Material UI Components Showcase
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A comprehensive set of Material UI components designed for the ConnEthics brand
          </Typography>
        </Box>

        {/* Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
            <Tab label="Buttons & Cards" />
            <Tab label="Hero & Features" />
            <Tab label="Services & Testimonials" />
            <Tab label="Team & Insights" />
            <Tab label="Contact & Metrics" />
          </Tabs>
        </Box>
      </Container>

      {/* Tab Content */}
      {activeTab === 0 && (
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom>Button Variants</Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <ConnEthicsButton variant="primary">Primary</ConnEthicsButton>
              <ConnEthicsButton variant="secondary">Secondary</ConnEthicsButton>
              <ConnEthicsButton variant="outline">Outline</ConnEthicsButton>
              <ConnEthicsButton variant="ghost">Ghost</ConnEthicsButton>
            </Box>
            
            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Button Sizes</Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 4 }}>
              <ConnEthicsButton size="small">Small</ConnEthicsButton>
              <ConnEthicsButton size="medium">Medium</ConnEthicsButton>
              <ConnEthicsButton size="large">Large</ConnEthicsButton>
            </Box>
          </Box>

          <Box sx={{ mb: 6 }}>
            <Typography variant="h3" gutterBottom>Card Variants</Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <ConnEthicsCard title="Default Card" subtitle="Basic card example">
                  <Typography>This is a default card with some content.</Typography>
                </ConnEthicsCard>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <ConnEthicsCard 
                  title="Elevated Card" 
                  subtitle="Enhanced shadow"
                  variant="elevated"
                >
                  <Typography>This card has elevated styling with enhanced shadows.</Typography>
                </ConnEthicsCard>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <ConnEthicsCard 
                  title="Outlined Card" 
                  subtitle="Prominent border"
                  variant="outlined"
                >
                  <Typography>This card features a prominent border design.</Typography>
                </ConnEthicsCard>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}

      {activeTab === 1 && (
        <Box>
          <ConnEthicsHero
            title="Hero Component"
            subtitle="ConnEthics Brand"
            description="This is our hero component showcasing the ConnEthics brand with call-to-action buttons and responsive design."
            primaryAction={{
              label: 'Primary Action',
              onClick: () => console.log('Primary clicked'),
            }}
            secondaryAction={{
              label: 'Secondary Action',
              onClick: () => console.log('Secondary clicked'),
            }}
            variant="gradient"
          />
          
          <ConnEthicsFeatureGrid
            title="Feature Grid Component"
            subtitle="Showcase your key features and services"
            features={features}
            variant="cards"
          />
        </Box>
      )}

      {activeTab === 2 && (
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 6 }}>
            Service Cards
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ConnEthicsServiceCard
                title="Starter"
                description="Perfect for small teams getting started."
                features={['Ethics Assessment', 'Basic Training', 'Email Support']}
                price={{ amount: '$2,500', period: 'month' }}
                ctaLabel="Get Started"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ConnEthicsServiceCard
                title="Professional"
                description="Comprehensive ethics consulting."
                features={['Full Ethics Audit', 'Team Training', 'Priority Support', 'Custom Frameworks']}
                price={{ amount: '$7,500', period: 'month' }}
                badge="Most Popular"
                featured
                ctaLabel="Choose Professional"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ConnEthicsServiceCard
                title="Enterprise"
                description="Full-scale transformation."
                features={['Complete Transformation', 'Executive Training', '24/7 Support', 'Dedicated Team']}
                price={{ amount: 'Custom', period: '' }}
                ctaLabel="Contact Sales"
              />
            </Grid>
          </Grid>

          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
            Testimonial Component
          </Typography>
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <ConnEthicsTestimonial {...testimonial} variant="featured" />
          </Box>
        </Container>
      )}

      {activeTab === 3 && (
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" gutterBottom>Team Member</Typography>
              <ConnEthicsTeamMember {...teamMember} featured />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" gutterBottom>Insight Card</Typography>
              <ConnEthicsInsightCard {...insight} featured />
            </Grid>
          </Grid>
        </Container>
      )}

      {activeTab === 4 && (
        <Box>
          <Container maxWidth="lg">
            <ConnEthicsMetrics
              title="Metrics Component"
              metrics={metrics}
              variant="cards"
            />
          </Container>
          
          <Container maxWidth="md" sx={{ py: 8 }}>
            <ConnEthicsContactForm
              title="Contact Form Component"
              subtitle="Comprehensive form with validation and styling"
            />
          </Container>
        </Box>
      )}
    </Box>
  );
}
