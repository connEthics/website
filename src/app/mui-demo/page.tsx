'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Button,
} from '@mui/material';
import ConnEthicsButton from '@/components/mui/ConnEthicsButton';
import ConnEthicsCard from '@/components/mui/ConnEthicsCard';
import ConnEthicsHero from '@/components/mui/ConnEthicsHero';
import ConnEthicsFeatureGrid from '@/components/mui/ConnEthicsFeatureGrid';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function MaterialUIDemo() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Material UI Design System
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          ConnEthics Components
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A comprehensive set of Material UI components designed specifically for the ConnEthics brand.
        </Typography>
      </Box>

      <Paper elevation={1} sx={{ bgcolor: 'background.paper' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="component demo tabs">
            <Tab label="Buttons" />
            <Tab label="Cards" />
            <Tab label="Hero" />
            <Tab label="Feature Grid" />
            <Tab label="Colors" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography variant="h5" gutterBottom>
            Button Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Various button styles and states for different use cases.
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Primary Buttons */}
            <Box>
              <Typography variant="h6" gutterBottom>Primary Buttons</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                <ConnEthicsButton variant="primary">
                  Primary Button
                </ConnEthicsButton>
                <ConnEthicsButton variant="primary" size="large">
                  Large Primary
                </ConnEthicsButton>
                <ConnEthicsButton variant="primary" size="small">
                  Small Primary
                </ConnEthicsButton>
              </Box>
            </Box>

            {/* Secondary Buttons */}
            <Box>
              <Typography variant="h6" gutterBottom>Secondary Buttons</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                <ConnEthicsButton variant="secondary">
                  Secondary Button
                </ConnEthicsButton>
                <ConnEthicsButton variant="secondary" size="large">
                  Large Secondary
                </ConnEthicsButton>
                <ConnEthicsButton variant="secondary" size="small">
                  Small Secondary
                </ConnEthicsButton>
              </Box>
            </Box>

            {/* Outline Buttons */}
            <Box>
              <Typography variant="h6" gutterBottom>Outline Buttons</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                <ConnEthicsButton variant="outline">
                  Outline Button
                </ConnEthicsButton>
                <ConnEthicsButton variant="outline" size="large">
                  Large Outline
                </ConnEthicsButton>
                <ConnEthicsButton variant="outline" size="small">
                  Small Outline
                </ConnEthicsButton>
              </Box>
            </Box>

            {/* Ghost Buttons */}
            <Box>
              <Typography variant="h6" gutterBottom>Ghost Buttons</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <ConnEthicsButton variant="ghost">
                  Ghost Button
                </ConnEthicsButton>
                <ConnEthicsButton variant="ghost" size="large">
                  Large Ghost
                </ConnEthicsButton>
                <ConnEthicsButton variant="ghost" size="small">
                  Small Ghost
                </ConnEthicsButton>
              </Box>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography variant="h5" gutterBottom>
            Card Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Different card layouts for various content types.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Default Card */}
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h6" gutterBottom>Default Card</Typography>
              <ConnEthicsCard
                title="AI Ethics Consulting"
                subtitle="Professional Services"
                actions={
                  <Button size="small">Learn More</Button>
                }
              >
                <Typography variant="body2" color="text.secondary">
                  Comprehensive evaluation of AI systems for ethical compliance, bias detection, and responsible implementation strategies.
                </Typography>
              </ConnEthicsCard>
            </Box>

            {/* Elevated Card */}
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h6" gutterBottom>Elevated Card</Typography>
              <ConnEthicsCard
                variant="elevated"
                title="Knowledge Management"
                subtitle="Information Architecture"
                actions={
                  <Button size="small">Contact Us</Button>
                }
              >
                <Typography variant="body2" color="text.secondary">
                  Strategic information architecture and knowledge structuring solutions for enterprise organizations.
                </Typography>
              </ConnEthicsCard>
            </Box>

            {/* Outlined Card */}
            <Box sx={{ maxWidth: 400 }}>
              <Typography variant="h6" gutterBottom>Outlined Card</Typography>
              <ConnEthicsCard
                variant="outlined"
                title="Digital Transformation"
                subtitle="Technology Consulting"
                actions={
                  <Button size="small">Get Started</Button>
                }
              >
                <Typography variant="body2" color="text.secondary">
                  End-to-end digital transformation services focused on ethical technology implementation and user-centered design.
                </Typography>
              </ConnEthicsCard>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Typography variant="h5" gutterBottom>
            Hero Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Hero sections for landing pages and key content areas.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Default Hero */}
            <Box>
              <Typography variant="h6" gutterBottom>Default Hero</Typography>
              <ConnEthicsHero
                title="AI Ethics Consulting"
                subtitle="ConnEthics"
                description="Leading the way in responsible AI implementation. We help organizations build ethical, transparent, and trustworthy AI systems that benefit humanity while driving business success."
                primaryAction={{
                  label: "Get Started",
                  onClick: () => console.log("Primary action clicked")
                }}
                secondaryAction={{
                  label: "Learn More",
                  onClick: () => console.log("Secondary action clicked")
                }}
                variant="default"
              />
            </Box>

            {/* Gradient Hero */}
            <Box>
              <Typography variant="h6" gutterBottom>Gradient Hero</Typography>
              <ConnEthicsHero
                title="Knowledge Management Solutions"
                subtitle="Information Architecture"
                description="Transform your organization's knowledge assets into strategic advantages. Our comprehensive approach to information management helps you structure, discover, and leverage knowledge effectively."
                primaryAction={{
                  label: "Explore Services",
                  onClick: () => console.log("Explore services clicked")
                }}
                variant="gradient"
              />
            </Box>

            {/* Minimal Hero */}
            <Box>
              <Typography variant="h6" gutterBottom>Minimal Hero</Typography>
              <ConnEthicsHero
                title="Digital Transformation"
                description="Simplifying complex technology challenges with human-centered design and ethical implementation strategies."
                primaryAction={{
                  label: "Contact Us",
                  onClick: () => console.log("Contact clicked")
                }}
                variant="minimal"
              />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Typography variant="h5" gutterBottom>
            Feature Grid Components
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Grid layouts for showcasing features, services, and capabilities.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Service Features */}
            <Box>
              <Typography variant="h6" gutterBottom>Our Services (3 Columns)</Typography>
              <ConnEthicsFeatureGrid
                title="Core Services"
                subtitle="What We Offer"
                features={[
                  {
                    id: "ai-ethics",
                    title: "AI Ethics Consulting",
                    description: "Comprehensive evaluation of AI systems for ethical compliance, bias detection, and responsible implementation strategies."
                  },
                  {
                    id: "knowledge-mgmt",
                    title: "Knowledge Management",
                    description: "Strategic information architecture and knowledge structuring solutions for enterprise organizations."
                  },
                  {
                    id: "digital-transformation",
                    title: "Digital Transformation",
                    description: "End-to-end digital transformation services focused on ethical technology implementation."
                  }
                ]}
                columns={3}
                variant="cards"
              />
            </Box>

            {/* Capabilities */}
            <Box>
              <Typography variant="h6" gutterBottom>Key Capabilities (4 Columns)</Typography>
              <ConnEthicsFeatureGrid
                features={[
                  {
                    id: "assessment",
                    title: "Ethics Assessment",
                    description: "Thorough evaluation of AI systems and data practices."
                  },
                  {
                    id: "strategy",
                    title: "Strategic Planning",
                    description: "Development of comprehensive ethical AI strategies."
                  },
                  {
                    id: "implementation",
                    title: "Implementation",
                    description: "Hands-on support for ethical technology deployment."
                  },
                  {
                    id: "monitoring",
                    title: "Continuous Monitoring",
                    description: "Ongoing assessment and improvement frameworks."
                  }
                ]}
                columns={4}
                variant="simple"
              />
            </Box>

            {/* Benefits */}
            <Box>
              <Typography variant="h6" gutterBottom>Why Choose ConnEthics (2 Columns)</Typography>
              <ConnEthicsFeatureGrid
                title="Our Approach"
                features={[
                  {
                    id: "expertise",
                    title: "Deep Expertise",
                    description: "Years of experience in AI ethics, information management, and digital transformation with proven methodologies and best practices."
                  },
                  {
                    id: "human-centered",
                    title: "Human-Centered Design",
                    description: "Every solution is designed with people at the center, ensuring technology serves humanity while driving business objectives."
                  }
                ]}
                columns={2}
                variant="cards"
              />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Typography variant="h5" gutterBottom>
            ConnEthics Color System
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            The complete color palette used throughout the ConnEthics brand and design system.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* Primary Colors */}
            <Box>
              <Typography variant="h6" gutterBottom>Primary Colors</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#0047AB', color: 'white' }}>
                  <Typography variant="h6">Primary Blue</Typography>
                  <Typography variant="body2">#0047AB</Typography>
                  <Typography variant="caption">Main brand color</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#1E3A8A', color: 'white' }}>
                  <Typography variant="h6">Primary Dark</Typography>
                  <Typography variant="body2">#1E3A8A</Typography>
                  <Typography variant="caption">Dark variant</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#3B82F6', color: 'white' }}>
                  <Typography variant="h6">Primary Light</Typography>
                  <Typography variant="body2">#3B82F6</Typography>
                  <Typography variant="caption">Light variant</Typography>
                </Box>
              </Box>
            </Box>

            {/* Secondary Colors */}
            <Box>
              <Typography variant="h6" gutterBottom>Secondary Colors</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#00A86B', color: 'white' }}>
                  <Typography variant="h6">Secondary Green</Typography>
                  <Typography variant="body2">#00A86B</Typography>
                  <Typography variant="caption">Accent color</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#059669', color: 'white' }}>
                  <Typography variant="h6">Secondary Dark</Typography>
                  <Typography variant="body2">#059669</Typography>
                  <Typography variant="caption">Dark variant</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#10B981', color: 'white' }}>
                  <Typography variant="h6">Secondary Light</Typography>
                  <Typography variant="body2">#10B981</Typography>
                  <Typography variant="caption">Light variant</Typography>
                </Box>
              </Box>
            </Box>

            {/* Neutral Colors */}
            <Box>
              <Typography variant="h6" gutterBottom>Neutral Colors</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 2 }}>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#111827', color: 'white' }}>
                  <Typography variant="body1">Gray 900</Typography>
                  <Typography variant="caption">#111827</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#374151', color: 'white' }}>
                  <Typography variant="body1">Gray 700</Typography>
                  <Typography variant="caption">#374151</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#6B7280', color: 'white' }}>
                  <Typography variant="body1">Gray 500</Typography>
                  <Typography variant="caption">#6B7280</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#9CA3AF', color: 'black' }}>
                  <Typography variant="body1">Gray 400</Typography>
                  <Typography variant="caption">#9CA3AF</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#E5E7EB', color: 'black' }}>
                  <Typography variant="body1">Gray 200</Typography>
                  <Typography variant="caption">#E5E7EB</Typography>
                </Box>
                <Box sx={{ p: 3, borderRadius: 2, bgcolor: '#F9FAFB', color: 'black', border: '1px solid #E5E7EB' }}>
                  <Typography variant="body1">Gray 50</Typography>
                  <Typography variant="caption">#F9FAFB</Typography>
                </Box>
              </Box>
            </Box>

            {/* Usage Examples */}
            <Box>
              <Typography variant="h6" gutterBottom>Usage in Components</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <ConnEthicsButton variant="primary">Primary Button</ConnEthicsButton>
                  <Typography variant="body2">Uses Primary Blue (#0047AB)</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <ConnEthicsButton variant="secondary">Secondary Button</ConnEthicsButton>
                  <Typography variant="body2">Uses Secondary Green (#00A86B)</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <ConnEthicsButton variant="outline">Outline Button</ConnEthicsButton>
                  <Typography variant="body2">Uses Primary Blue outline</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </TabPanel>
      </Paper>
    </Container>
  );
}
