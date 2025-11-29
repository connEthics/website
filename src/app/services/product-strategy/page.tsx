'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  ChartBarIcon, 
  LightBulbIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  AdjustmentsHorizontalIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

export default function ProductStrategy() {
  const capabilities = [
    {
      icon: PresentationChartLineIcon,
      title: "OKR & KPI Alignment",
      description: "Connect your product metrics to business outcomes. We design measurement frameworks that show the real impact of your identity initiatives."
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: "Data-Driven Prioritization",
      description: "Cut through the noise. We implement prioritization frameworks that focus your team on high-impact work, not feature factories."
    },
    {
      icon: LightBulbIcon,
      title: "Product Discovery Workshops",
      description: "Find problems worth solving. We facilitate discovery sessions that uncover user needs and validate opportunities before you build."
    },
    {
      icon: BeakerIcon,
      title: "Market-Fit Validation",
      description: "Test assumptions before scaling. We design experiments that prove value and reduce the risk of building the wrong thing."
    },
    {
      icon: UserGroupIcon,
      title: "Stakeholder Alignment Protocols",
      description: "Get everyone rowing in the same direction. We facilitate alignment sessions that turn competing priorities into shared roadmaps."
    }
  ];

  const antiPatterns = [
    {
      problem: "Feature Factory",
      description: "Teams shipping features without measuring outcomes",
      solution: "Outcome-based roadmaps tied to business metrics"
    },
    {
      problem: "HiPPO Driven",
      description: "Highest Paid Person's Opinion determines priority",
      solution: "Data-driven prioritization with clear criteria"
    },
    {
      problem: "Tech-First Thinking",
      description: "Building because you can, not because you should",
      solution: "Problem-first discovery with validated opportunities"
    },
    {
      problem: "Roadmap Theatre",
      description: "Beautiful Gantt charts disconnected from reality",
      solution: "Living roadmaps with explicit assumptions and risks"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Product Assessment",
      description: "Analysis of your current product organization—processes, metrics, team structure, and decision-making patterns."
    },
    {
      step: "02",
      title: "Strategy Definition",
      description: "Development of product strategy aligned with your eIDAS 2.0 objectives—clear outcomes, priorities, and success criteria."
    },
    {
      step: "03",
      title: "Process Implementation",
      description: "Implementation of prioritization frameworks, measurement systems, and governance structures that drive focus."
    },
    {
      step: "04",
      title: "Capability Building",
      description: "Training and coaching for your product teams to sustain high-impact practices after our engagement ends."
    }
  ];

  const frameworks = [
    {
      name: "Opportunity Solution Trees",
      description: "Visual framework connecting outcomes to opportunities to solutions"
    },
    {
      name: "RICE Scoring",
      description: "Quantitative prioritization based on Reach, Impact, Confidence, Effort"
    },
    {
      name: "Jobs-to-be-Done",
      description: "Customer-centric framework for understanding unmet needs"
    },
    {
      name: "Assumption Mapping",
      description: "Risk-based approach to identifying and testing critical assumptions"
    },
    {
      name: "Continuous Discovery",
      description: "Ongoing research practice to stay connected to customer reality"
    },
    {
      name: "Lean Canvas",
      description: "One-page business model for validating new product opportunities"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Product Strategy"
        subtitle="Capability // Leadership"
        description="Radical focus on outcomes. We align your product teams with business reality, ensuring your roadmap delivers tangible value—not just features."
        primaryAction={{
          label: "Transform Your Product",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Back to Services",
          href: "/services"
        }}
      />

      {/* Navigation */}
      <Box sx={{ py: 2, bgcolor: 'grey.100', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Link href="/services/trust-infrastructure">
              <Typography 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'text.secondary', 
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' }
                }}
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Trust Infrastructure
              </Typography>
            </Link>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.875rem' }}>
              CAPABILITY_04 // LEADERSHIP
            </Typography>
            <Link href="/services/operational-excellence">
              <Typography 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'text.secondary', 
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Operational Excellence
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Typography>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* Key Message */}
      <Box sx={{ py: 6, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', fontWeight: 700, lineHeight: 1.5 }}>
            Ship Purpose, Not Just Code
          </Typography>
        </Container>
      </Box>

      {/* The Challenge Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                THE PRODUCT CHALLENGE
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', letterSpacing: '-0.02em' }}>
                Your Teams Are Busy Building the Wrong Things
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                Most product organizations are feature factories—churning out functionality without measuring impact. eIDAS 2.0 is too important to waste on this pattern. The stakes are too high, the window too narrow.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                Product Strategy transforms your teams from <strong>output-focused</strong> (features shipped) to <strong>outcome-focused</strong> (business value created). We install the systems and practices that make high-impact product work sustainable.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  bgcolor: 'white',
                  borderRadius: 1,
                  p: 6,
                  border: '1px solid',
                  borderColor: 'divider',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: 'primary.main' }} />
                <ChartBarIcon style={{ width: 100, height: 100, color: '#0f172a', opacity: 0.8, strokeWidth: 0.8 }} />
                <Typography variant="caption" sx={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'monospace', color: 'text.disabled', fontWeight: 700 }}>
                  CAPABILITY_04 {`// LEADERSHIP`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Anti-Patterns Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              ANTI-PATTERNS WE FIX
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
              Common Product Dysfunctions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {antiPatterns.map((pattern, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box 
                  sx={{ 
                    p: 5,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.500',
                      bgcolor: 'rgba(255,255,255,0.02)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'error.main' }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                      {pattern.problem}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'grey.400', mb: 3, lineHeight: 1.7 }}>
                    {pattern.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid', borderColor: 'primary.700' }}>
                    <CheckCircleIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <Typography variant="body2" sx={{ color: 'primary.300' }}>
                      {pattern.solution}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Capabilities Grid */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              PRODUCT CAPABILITIES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              What We Deliver
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {capabilities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ConnEthicsCard variant="blueprint" sx={{ height: '100%', p: 4 }}>
                    <Stack direction="row" spacing={3} alignItems="flex-start">
                      <Box 
                        sx={{ 
                          width: 56, 
                          height: 56, 
                          bgcolor: 'white', 
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 1, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComponent className="h-7 w-7 text-primary-700" strokeWidth={1.5} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </ConnEthicsCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Frameworks Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              METHODOLOGIES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Frameworks We Apply
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {frameworks.map((framework, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Box 
                  sx={{ 
                    p: 4, 
                    bgcolor: 'white', 
                    border: '1px solid', 
                    borderColor: 'divider',
                    height: '100%',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {framework.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {framework.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              ENGAGEMENT MODEL
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              How We Work
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {processSteps.map((item, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box 
                  sx={{ 
                    p: 5,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'grey.50',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'white'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontWeight: 900, 
                        color: 'primary.main',
                        fontSize: '3rem',
                        lineHeight: 1,
                        fontFamily: 'monospace',
                        opacity: 0.3
                      }}
                    >
                      {item.step}
                    </Typography>
                    <Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Outcomes Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              EXPECTED OUTCOMES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              What Changes
            </Typography>
          </Box>
          
          <Stack spacing={3}>
            {[
              "Teams aligned on clear outcomes tied to business metrics",
              "Prioritization decisions backed by data, not politics",
              "Faster learning cycles through systematic experimentation",
              "Reduced waste from building features nobody uses",
              "Stakeholder alignment on strategy and roadmap",
              "Internal capability to sustain high-impact practices"
            ].map((outcome, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 3, bgcolor: 'white', border: '1px solid', borderColor: 'divider' }}>
                <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.primary' }}>
                  {outcome}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Chip 
              label="CAPABILITY // LEADERSHIP" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to Focus on What Matters?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              Product Strategy transforms your teams from feature factories to outcome-focused engines. Build the right things, not just things right.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Link href="/contact">
                <ConnEthicsButton
                  variant="secondary"
                  size="large"
                  sx={{ 
                    px: 6,
                    bgcolor: 'white',
                    color: 'primary.main',
                    fontWeight: 700,
                    '&:hover': {
                      bgcolor: 'grey.100'
                    }
                  }}
                >
                  Transform Your Product
                </ConnEthicsButton>
              </Link>
              <Link href="/services/operational-excellence">
                <ConnEthicsButton
                  variant="outline"
                  size="large"
                  sx={{ 
                    px: 6,
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderColor: 'white'
                    }
                  }}
                >
                  Next: Operational Excellence <ArrowRightIcon className="h-5 w-5 ml-2" />
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
