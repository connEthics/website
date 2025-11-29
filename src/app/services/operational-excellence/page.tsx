'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  CogIcon, 
  UsersIcon, 
  CommandLineIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  ClockIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline';

export default function OperationalExcellence() {
  const capabilities = [
    {
      icon: UsersIcon,
      title: "Team Topology Optimization",
      description: "Organize for fast flow. We design team structures that minimize handoffs, reduce cognitive load, and accelerate delivery of your identity initiatives."
    },
    {
      icon: CommandLineIcon,
      title: "CI/CD Pipeline Strategy",
      description: "Ship safely at speed. We optimize your deployment pipelines for the security-critical nature of identity infrastructure."
    },
    {
      icon: CubeTransparentIcon,
      title: "Event Storming & Domain Modeling",
      description: "Understand before you build. We facilitate domain modeling sessions that reveal the true complexity of your identity domain."
    },
    {
      icon: ArrowPathIcon,
      title: "Agile/Lean Process Refinement",
      description: "Processes that serve teams, not bureaucracy. We streamline your delivery practices to remove friction and enable flow."
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Technical Debt Management",
      description: "Pay down debt strategically. We help you identify, quantify, and prioritize technical debt that threatens your eIDAS 2.0 timeline."
    }
  ];

  const teamTopologyTypes = [
    {
      type: "Stream-Aligned Teams",
      description: "Organized around a flow of work from the business domain—e.g., Customer Onboarding, Credential Issuance",
      benefit: "End-to-end ownership reduces handoffs"
    },
    {
      type: "Platform Teams",
      description: "Provide internal services that reduce cognitive load for stream-aligned teams—e.g., Identity Platform, Trust Registry",
      benefit: "Enables self-service and standardization"
    },
    {
      type: "Enabling Teams",
      description: "Help other teams adopt new capabilities—e.g., SSI Enablement, DevSecOps",
      benefit: "Accelerates capability building"
    },
    {
      type: "Complicated Subsystem Teams",
      description: "Own areas requiring deep specialist knowledge—e.g., Cryptography, ZKP Implementation",
      benefit: "Concentrates expertise where needed"
    }
  ];

  const flowMetrics = [
    { metric: "Lead Time", description: "Time from idea to production" },
    { metric: "Deployment Frequency", description: "How often you ship" },
    { metric: "Change Failure Rate", description: "Percentage of deployments causing issues" },
    { metric: "Mean Time to Recovery", description: "How quickly you fix production issues" },
    { metric: "Flow Efficiency", description: "Active work time vs. wait time" },
    { metric: "Work in Progress", description: "Amount of concurrent work" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Operational Assessment",
      description: "Analysis of your current delivery capabilities—team structure, processes, tooling, and flow metrics."
    },
    {
      step: "02",
      title: "Target Operating Model",
      description: "Design of optimized team topologies, processes, and technical practices for your eIDAS 2.0 initiative."
    },
    {
      step: "03",
      title: "Transformation Roadmap",
      description: "Sequenced plan for organizational and process changes, with clear milestones and success criteria."
    },
    {
      step: "04",
      title: "Coaching & Implementation",
      description: "Hands-on support during transformation—team coaching, process rollout, and continuous improvement."
    }
  ];

  const technicalPractices = [
    "Trunk-based development",
    "Feature flags for safe deployment",
    "Automated security scanning",
    "Infrastructure as Code",
    "GitOps workflows",
    "Chaos engineering",
    "Observability & tracing",
    "Incident management"
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Operational Excellence"
        subtitle="Capability // Operations"
        description="Execution is strategy. We optimize your delivery pipelines and team structures to ensure what you build actually ships—on time, with quality."
        primaryAction={{
          label: "Optimize Your Operations",
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
            <Link href="/services/product-strategy">
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
                Product Strategy
              </Typography>
            </Link>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.875rem' }}>
              CAPABILITY_05 // OPERATIONS
            </Typography>
            <Link href="/services/identity-architecture">
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
                Restart: Identity
                <ArrowPathIcon className="h-4 w-4 ml-2" />
              </Typography>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* Key Message */}
      <Box sx={{ py: 6, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', fontWeight: 700, lineHeight: 1.5 }}>
            Remove Friction. Enable Flow.
          </Typography>
        </Container>
      </Box>

      {/* The Challenge Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                THE OPERATIONAL CHALLENGE
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', letterSpacing: '-0.02em' }}>
                Great Strategy Dies in Slow Execution
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                You have the strategy. You have the architecture. But your teams are struggling to deliver. Handoffs create delays. Deployments are risky. Technical debt accumulates. The eIDAS 2.0 deadline approaches while your delivery velocity stagnates.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                Operational Excellence removes the friction that slows your teams. We optimize <strong>how work flows</strong> through your organization—from idea to production—so your identity initiative ships on time.
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
                <CogIcon style={{ width: 100, height: 100, color: '#0f172a', opacity: 0.8, strokeWidth: 0.8 }} />
                <Typography variant="caption" sx={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'monospace', color: 'text.disabled', fontWeight: 700 }}>
                  CAPABILITY_05 {`// OPERATIONS`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Capabilities Grid */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              OPERATIONAL CAPABILITIES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              What We Optimize
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

      {/* Team Topologies Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              TEAM TOPOLOGIES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
              Organize for Fast Flow
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.400', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
              Team structure determines delivery speed. We apply the Team Topologies framework to design organizations optimized for your identity initiative.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {teamTopologyTypes.map((topology, index) => (
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
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.400' }}>
                    {topology.type}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.300', mb: 3, lineHeight: 1.7 }}>
                    {topology.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: 'rgba(255,255,255,0.05)' }}>
                    <BoltIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                      {topology.benefit}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Flow Metrics Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                FLOW METRICS
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary' }}>
                Measure What Matters
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                You can&apos;t improve what you don&apos;t measure. We implement DORA metrics and flow efficiency tracking to give you visibility into your delivery performance—and clear targets for improvement.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={2}>
                {flowMetrics.map((item, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Box 
                      sx={{ 
                        p: 3, 
                        bgcolor: 'white', 
                        border: '1px solid', 
                        borderColor: 'divider',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: 'primary.main'
                        }
                      }}
                    >
                      <ClockIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5 }}>
                          {item.metric}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Technical Practices */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                TECHNICAL PRACTICES
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary' }}>
                Engineering Excellence
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                Great operations require solid technical foundations. We help you implement the practices that enable fast, safe delivery of identity infrastructure.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ p: 5, bgcolor: 'grey.50', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, fontFamily: 'monospace', color: 'primary.main' }}>
                  {`// ENGINEERING_PRACTICES`}
                </Typography>
                <Grid container spacing={2}>
                  {technicalPractices.map((practice, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: 'white', border: '1px solid', borderColor: 'divider' }}>
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <Typography variant="body2" sx={{ color: 'text.primary', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                          {practice}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
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
                    bgcolor: 'white',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
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

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Chip 
              label="CAPABILITY // OPERATIONS" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to Accelerate Delivery?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              Operational Excellence removes the friction that slows your teams. Build the delivery engine your eIDAS 2.0 initiative demands.
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
                  Optimize Your Operations
                </ConnEthicsButton>
              </Link>
              <Link href="/services">
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
                  View All Services
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
