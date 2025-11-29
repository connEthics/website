'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  CubeTransparentIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  CogIcon,
  CommandLineIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function WalletIntegrationBlueprint() {
  const deliverables = [
    {
      icon: CubeTransparentIcon,
      title: "Target Architecture Design",
      description: "Comprehensive Buy vs Build analysis with a clear architectural blueprint for your wallet integration—infrastructure decisions mapped to your business constraints."
    },
    {
      icon: DocumentTextIcon,
      title: "RFP Management",
      description: "Complete Request for Proposal process to select the right identity aggregator or middleware (the 'Wallet Connector') that fits your technical and commercial requirements."
    },
    {
      icon: UserGroupIcon,
      title: "ARF-Compliant UX Design",
      description: "User journey designs that comply with the Architecture Reference Framework (ARF) standards—flows that users trust and regulators approve."
    }
  ];

  const targetAudience = [
    { role: "Chief Technology Officer (CTO)", focus: "Technical architecture & infrastructure decisions" },
    { role: "Director of Engineering", focus: "Implementation feasibility & team capacity" },
    { role: "Head of Innovation", focus: "Future-proofing & competitive differentiation" },
    { role: "Project Director", focus: "Scope definition & vendor selection" }
  ];

  const architectureDecisions = [
    {
      title: "Buy vs Build Analysis",
      points: [
        "Total cost of ownership comparison",
        "Time-to-market implications", 
        "Maintenance and evolution roadmap",
        "Vendor lock-in risk assessment"
      ]
    },
    {
      title: "Integration Strategy",
      points: [
        "Legacy system compatibility",
        "API design and governance",
        "Security architecture review",
        "Scalability requirements"
      ]
    },
    {
      title: "Ecosystem Positioning",
      points: [
        "QTSP relationship mapping",
        "Wallet provider landscape",
        "Interoperability standards",
        "Credential schema selection"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Technical Discovery",
      description: "Deep analysis of your current identity infrastructure, technical debt, and integration constraints. We map what exists before designing what's next."
    },
    {
      step: "02",
      title: "Architecture Options",
      description: "Develop 2-3 viable architecture options with clear trade-offs. Buy, build, or hybrid—each path quantified for cost, risk, and time."
    },
    {
      step: "03",
      title: "Vendor Evaluation",
      description: "Structured RFP process with evaluation criteria tailored to your needs. We manage the process and provide recommendation frameworks."
    },
    {
      step: "04",
      title: "UX Blueprint",
      description: "Design user journeys that balance compliance with conversion. Every touchpoint engineered for trust and efficiency."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Wallet Integration Blueprint"
        subtitle="Tactics // Level 02"
        description="You've seen the opportunity. Now you need the architecture. We design the technical foundation that turns your eIDAS 2.0 strategy into deployable reality."
        primaryAction={{
          label: "Start Your Blueprint",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Back to Services",
          href: "/services"
        }}
      />

      {/* Navigation Bar */}
      <Box sx={{ py: 2, bgcolor: 'grey.100', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Link href="/services/eidas-opportunity-radar">
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
                Level 01: Strategy
              </Typography>
            </Link>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.875rem' }}>
              LEVEL_02 // TACTICS
            </Typography>
            <Link href="/services/identity-pmo">
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
                Level 03: Operations
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Typography>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* The Challenge Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                THE TACTICAL CHALLENGE
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', letterSpacing: '-0.02em' }}>
                Strategy Without Architecture is Just a PowerPoint
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                You have executive buy-in. You have budget. Now comes the hard part: making technology decisions that won&apos;t haunt you for the next decade. Buy the wrong middleware. Pick the wrong wallet provider. Design the wrong user flows. Any of these mistakes will cost you years and millions.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The Wallet Integration Blueprint de-risks your technical decisions by bringing <strong>eIDAS 2.0 expertise</strong> to your architecture table—before you write a single line of code or sign a single vendor contract.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  bgcolor: 'grey.50',
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
                <CommandLineIcon style={{ width: 80, height: 80, color: '#0f172a', opacity: 0.8, strokeWidth: 0.8 }} />
                <Typography variant="caption" sx={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'monospace', color: 'text.disabled', fontWeight: 700 }}>
                  CAPABILITY_02 {`// ARCHITECTURE`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Deliverables Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              DELIVERABLES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              What You Receive
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
              Technical documentation and frameworks designed for implementation teams and steering committees.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {deliverables.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <ConnEthicsCard variant="blueprint" sx={{ height: '100%', p: 4 }}>
                    <Box 
                      sx={{ 
                        width: 64, 
                        height: 64, 
                        bgcolor: 'white', 
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mb: 3
                      }}
                    >
                      <IconComponent className="h-8 w-8 text-primary-700" strokeWidth={1.5} />
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>
                  </ConnEthicsCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Architecture Decisions Matrix */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              KEY DECISIONS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Architecture Decision Framework
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {architectureDecisions.map((decision, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{ height: '100%', p: 4, bgcolor: 'grey.50', border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                    {decision.title}
                  </Typography>
                  <Stack spacing={2}>
                    {decision.points.map((point, pointIndex) => (
                      <Box key={pointIndex} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: 6, height: 6, bgcolor: 'primary.main', borderRadius: '50%', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              THE PROCESS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
              From Vision to Blueprint
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
                    borderColor: 'rgba(255,255,255,0.1)',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.500',
                      bgcolor: 'rgba(255,255,255,0.02)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontWeight: 900, 
                        color: 'primary.500',
                        fontSize: '3rem',
                        lineHeight: 1,
                        fontFamily: 'monospace'
                      }}
                    >
                      {item.step}
                    </Typography>
                    <Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700, color: 'white' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'grey.200', lineHeight: 1.7 }}>
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

      {/* Target Audience Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                WHO THIS IS FOR
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary' }}>
                Built for Technical Leaders
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The Blueprint is designed for leaders who must translate strategic vision into technical reality. If you&apos;re accountable for architecture decisions, vendor selection, or technical feasibility—this engagement is your foundation.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                {targetAudience.map((item, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      p: 4, 
                      bgcolor: 'white', 
                      border: '1px solid', 
                      borderColor: 'divider',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        width: 56, 
                        height: 56, 
                        bgcolor: 'primary.50', 
                        borderRadius: 1, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <CogIcon className="h-7 w-7 text-primary-700" strokeWidth={1.5} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {item.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.focus}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* The ConnEthics Difference */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              THE CONNETHICS DIFFERENCE
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Architecture Expertise That Ships
            </Typography>
          </Box>
          
          <Stack spacing={3}>
            {[
              "eIDAS 2.0 native: We know the regulation, the ARF, and the ecosystem players",
              "Vendor-agnostic: No hidden partnerships or kickbacks—just objective analysis",
              "Implementation-ready: Blueprints designed for real development teams",
              "Risk-focused: Every decision mapped to its failure modes",
              "Future-proof: Architecture that evolves with the ecosystem"
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.primary' }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Timeline & Investment */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: 5, bgcolor: 'white', border: '1px solid', borderColor: 'divider', height: '100%' }}>
                <ShieldCheckIcon className="h-12 w-12 text-primary-600 mb-4" strokeWidth={1.5} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Typical Engagement
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.main', mb: 2 }}>
                  8-12 Weeks
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  From kickoff to final architecture documentation and vendor recommendation. Timeline varies based on complexity and stakeholder availability.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: 5, bgcolor: 'white', border: '1px solid', borderColor: 'divider', height: '100%' }}>
                <DocumentTextIcon className="h-12 w-12 text-primary-600 mb-4" strokeWidth={1.5} />
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Included in Delivery
                </Typography>
                <Stack spacing={1.5} sx={{ mt: 2 }}>
                  {[
                    "Architecture Decision Records (ADRs)",
                    "Vendor Evaluation Matrix",
                    "RFP Templates & Management",
                    "UX Flow Specifications",
                    "Implementation Roadmap"
                  ].map((item, index) => (
                    <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box sx={{ width: 4, height: 4, bgcolor: 'primary.main', borderRadius: '50%' }} />
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Chip 
              label="TACTICS // LEVEL 02" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to Architect Your Future?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              The Wallet Integration Blueprint transforms your strategic vision into technical specifications your teams can build.
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
                  Start Your Blueprint
                </ConnEthicsButton>
              </Link>
              <Link href="/services/identity-pmo">
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
                  Next: Operations Level <ArrowRightIcon className="h-5 w-5 ml-2" />
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
