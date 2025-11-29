'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  RocketLaunchIcon, 
  UsersIcon, 
  AcademicCapIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export default function IdentityPMO() {
  const deliverables = [
    {
      icon: RocketLaunchIcon,
      title: "Deployment Steering",
      description: "End-to-end project management of your wallet integration—milestones, dependencies, risk mitigation, and executive reporting on a cadence that keeps leadership informed."
    },
    {
      icon: UsersIcon,
      title: "QTSP Coordination",
      description: "Direct management of relationships with Qualified Trust Service Providers. We bridge the gap between your technical teams and the trust ecosystem."
    },
    {
      icon: AcademicCapIcon,
      title: "Change Management & Training",
      description: "Comprehensive programs to prepare your internal teams for the new identity paradigm—from customer service to compliance officers."
    }
  ];

  const targetAudience = [
    { role: "Product Owner", focus: "Backlog management & feature delivery" },
    { role: "Program Manager", focus: "Cross-functional coordination" },
    { role: "Operations Director", focus: "Process transformation & efficiency" },
    { role: "Compliance Lead", focus: "Regulatory alignment & audit readiness" }
  ];

  const pmoCapabilities = [
    {
      title: "Project Governance",
      items: [
        "Steering committee facilitation",
        "Risk and issue management",
        "Milestone tracking & reporting",
        "Budget and resource oversight"
      ]
    },
    {
      title: "Technical Coordination",
      items: [
        "Development team alignment",
        "Integration testing oversight",
        "QTSP technical interface",
        "Security review coordination"
      ]
    },
    {
      title: "Organizational Readiness",
      items: [
        "Training program design",
        "Process documentation",
        "Support team enablement",
        "Go-live preparation"
      ]
    }
  ];

  const processPhases = [
    {
      phase: "PHASE 01",
      title: "Mobilization",
      duration: "2-4 weeks",
      description: "PMO setup, governance structures, team onboarding, and baseline establishment. We embed with your organization."
    },
    {
      phase: "PHASE 02",
      title: "Execution",
      duration: "12-24 weeks",
      description: "Active deployment steering, vendor coordination, sprint oversight, and continuous stakeholder communication."
    },
    {
      phase: "PHASE 03",
      title: "Transition",
      duration: "4-6 weeks",
      description: "Knowledge transfer, internal capability building, documentation handover, and hypercare support planning."
    }
  ];

  const changeManagementAreas = [
    "Customer-facing team training on wallet-based verification flows",
    "Compliance team certification on eIDAS 2.0 requirements",
    "Technical support escalation procedures",
    "Internal communication and stakeholder updates",
    "Process documentation and SOPs",
    "Post-launch feedback loops and continuous improvement"
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Identity PMO"
        subtitle="Operations // Level 03"
        description="Strategy is decided. Architecture is designed. Now it's time to ship. We provide the operational backbone to ensure your eIDAS 2.0 transformation delivers on time and on budget."
        primaryAction={{
          label: "Launch Your PMO",
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
            <Link href="/services/wallet-integration-blueprint">
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
                Level 02: Tactics
              </Typography>
            </Link>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.875rem' }}>
              LEVEL_03 // OPERATIONS
            </Typography>
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
                Restart: Level 01 Strategy
                <ArrowPathIcon className="h-4 w-4 ml-2" />
              </Typography>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* Key Stats */}
      <Box sx={{ py: 4, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { value: "95%", label: "On-time delivery rate" },
              { value: "30+", label: "QTSP relationships" },
              { value: "6-12mo", label: "Typical engagement" }
            ].map((stat, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'white', mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.100', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
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
                Blueprints Don&apos;t Ship Themselves
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                The gap between architecture documentation and working production systems is where most transformations fail. Internal teams are stretched thin. QTSP relationships require specialized knowledge. Change management is chronically underestimated.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The Identity PMO provides the <strong>experienced operational muscle</strong> to drive your wallet integration across the finish line—coordinating vendors, managing dependencies, and ensuring your organization is ready for the new reality.
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
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, fontFamily: 'monospace', color: 'primary.main' }}>
                  {`// COMMON_FAILURE_MODES`}
                </Typography>
                <Stack spacing={3}>
                  {[
                    { title: "Vendor Chaos", desc: "Multiple providers, no single point of accountability" },
                    { title: "Scope Creep", desc: "Feature additions without impact assessment" },
                    { title: "Team Burnout", desc: "Internal resources stretched across BAU and transformation" },
                    { title: "Knowledge Gaps", desc: "No institutional expertise in eIDAS 2.0 ecosystem" }
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'error.main', mt: 1, flexShrink: 0 }} />
                      <Box>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Deliverables Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              DELIVERABLES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              What You Receive
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
              Embedded operational support that drives your transformation from architecture to production.
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

      {/* PMO Capabilities Grid */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              PMO CAPABILITIES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Full-Spectrum Operational Support
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {pmoCapabilities.map((capability, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{ height: '100%', p: 4, bgcolor: 'white', border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                    {capability.title}
                  </Typography>
                  <Stack spacing={2}>
                    {capability.items.map((item, itemIndex) => (
                      <Box key={itemIndex} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item}
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

      {/* Process Phases Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              ENGAGEMENT PHASES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
              From Mobilization to Go-Live
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {processPhases.map((phase, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
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
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      color: 'primary.400', 
                      fontWeight: 700, 
                      fontFamily: 'monospace',
                      display: 'block',
                      mb: 2
                    }}
                  >
                    {phase.phase}
                  </Typography>
                  <Typography variant="h4" component="h3" sx={{ mb: 1, fontWeight: 700, color: 'white' }}>
                    {phase.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.300', mb: 3, fontFamily: 'monospace' }}>
                    {phase.duration}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                    {phase.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Change Management Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                CHANGE MANAGEMENT
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary' }}>
                Technology Changes. People Adapt.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The wallet is just software. The real transformation is in how your organization operates. We design and deliver change management programs that ensure your teams are ready, confident, and capable on day one.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ p: 5, bgcolor: 'grey.50', border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, fontFamily: 'monospace', color: 'primary.main' }}>
                  {`// TRAINING_MODULES`}
                </Typography>
                <Grid container spacing={2}>
                  {changeManagementAreas.map((area, index) => (
                    <Grid size={{ xs: 12 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: 'white', border: '1px solid', borderColor: 'divider' }}>
                        <AcademicCapIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                          {area}
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

      {/* Target Audience Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                WHO THIS IS FOR
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary' }}>
                Built for Delivery Teams
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The Identity PMO is designed for teams who must execute. If you&apos;re accountable for shipping features, managing vendors, or preparing the organization for change—this engagement is your force multiplier.
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
                      <ClipboardDocumentCheckIcon className="h-7 w-7 text-primary-700" strokeWidth={1.5} />
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
              Operators, Not Observers
            </Typography>
          </Box>
          
          <Stack spacing={3}>
            {[
              "Embedded with your team: We work alongside your people, not from a distance",
              "QTSP network: Direct relationships with the trust service ecosystem",
              "Battle-tested: We've seen what fails and know how to prevent it",
              "Knowledge transfer: We build internal capability, not dependency",
              "Outcome-focused: We measure success in shipped features, not slide decks"
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

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Chip 
              label="OPERATIONS // LEVEL 03" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to Ship?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              The Identity PMO ensures your wallet integration transforms from blueprint to reality. Let&apos;s build the operational backbone your transformation needs.
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
                  Launch Your PMO
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
