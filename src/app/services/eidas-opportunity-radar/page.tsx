'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  DocumentChartBarIcon, 
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function EidasOpportunityRadar() {
  const deliverables = [
    {
      icon: MagnifyingGlassIcon,
      title: "Customer Journey Mapping",
      description: "Complete cartography of your current customer journeys with identification of friction points and abandonment rates at each KYC touchpoint."
    },
    {
      icon: ChartBarIcon,
      title: "Reusable Identity Impact Analysis",
      description: "Quantified assessment of how reusable identity credentials will transform your P&L—KYC cost reduction projections and conversion rate improvements."
    },
    {
      icon: DocumentChartBarIcon,
      title: "Executive Business Case",
      description: "A boardroom-ready document with ROI calculations, implementation timelines, and budget arbitration frameworks for C-level decision making."
    }
  ];

  const targetAudience = [
    { role: "Chief Digital Officer (CDO)", focus: "Digital transformation & customer experience" },
    { role: "Chief Marketing Officer (CMO)", focus: "Conversion optimization & customer acquisition" },
    { role: "Chief Executive Officer (CEO)", focus: "Strategic positioning & competitive advantage" }
  ];

  const metrics = [
    { value: "40-60%", label: "Typical KYC cost reduction" },
    { value: "25-35%", label: "Conversion rate increase" },
    { value: "4-6 weeks", label: "Diagnostic delivery" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Stakeholder Interviews",
      description: "Deep-dive sessions with your executive team, product owners, and compliance officers to understand your current identity infrastructure and pain points."
    },
    {
      step: "02",
      title: "Friction Point Analysis",
      description: "Data-driven mapping of your customer journeys to identify where KYC friction causes abandonment, delays, and operational costs."
    },
    {
      step: "03",
      title: "eIDAS 2.0 Opportunity Modeling",
      description: "Scenario modeling to quantify how wallet-based reusable identity will impact your specific business model, customer segments, and competitive position."
    },
    {
      step: "04",
      title: "Executive Presentation",
      description: "Boardroom presentation of findings with actionable recommendations, prioritized roadmap, and clear budget requirements for next steps."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="eIDAS 2.0 Opportunity Radar"
        subtitle="Strategy // Level 01"
        description="The European Digital Identity Wallet will reshape customer onboarding. This diagnostic reveals exactly where your competitors' KYC costs become your conversion advantage."
        primaryAction={{
          label: "Start Your Diagnostic",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Back to Services",
          href: "/services"
        }}
      />

      {/* Key Metrics Bar */}
      <Box sx={{ py: 4, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {metrics.map((metric, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: 'white', mb: 1 }}>
                    {metric.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.100', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {metric.label}
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
                THE CHALLENGE
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', letterSpacing: '-0.02em' }}>
                Your KYC Process is Bleeding Money and Customers
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                Every abandoned onboarding flow is revenue left on the table. Every redundant identity check is a compliance cost that erodes your margins. The enterprises that recognize eIDAS 2.0 as an opportunity—not just a regulation—will capture market share from those still treating it as a compliance burden.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The question isn&apos;t <strong>if</strong> the European Digital Identity Wallet will disrupt your customer journey—it&apos;s <strong>whether you&apos;ll be ready to capitalize on it.</strong>
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
                  // COST_OF_INACTION
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'error.main', mt: 1 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <strong>High abandonment rates</strong> at KYC checkpoints costing you qualified leads
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'error.main', mt: 1 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <strong>Redundant verification processes</strong> draining operational budgets
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'error.main', mt: 1 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <strong>Competitors moving first</strong> on wallet-ready infrastructure
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'error.main', mt: 1 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      <strong>No clear business case</strong> for budget allocation
                    </Typography>
                  </Box>
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
              A comprehensive strategic assessment designed for C-level decision making and immediate action.
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

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              THE PROCESS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
              How We Deliver
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
                      <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
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
                Built for Executive Decision Makers
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The Opportunity Radar is designed for leaders who need to make strategic bets with confidence. If you&apos;re responsible for digital transformation, customer acquisition costs, or competitive positioning in a regulated market—this diagnostic is your starting point.
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
                      <UserGroupIcon className="h-7 w-7 text-primary-700" strokeWidth={1.5} />
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

      {/* What Makes This Different */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              THE CONNETHICS DIFFERENCE
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Not Just Another Compliance Report
            </Typography>
          </Box>
          
          <Stack spacing={3}>
            {[
              "Business-first analysis: We translate regulation into P&L impact",
              "Actionable roadmap: Not 200 pages of theory—a clear path forward",
              "Executive-ready: Designed for boardroom presentation, not shelf storage",
              "Quantified outcomes: Real numbers, not vague promises",
              "Competitive intelligence: How your industry is positioning for eIDAS 2.0"
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
              label="STRATEGY // LEVEL 01" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to See the Opportunity?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              The eIDAS 2.0 Opportunity Radar gives you the clarity to act. Let&apos;s map your path from compliance cost to competitive advantage.
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
                  Request Diagnostic
                </ConnEthicsButton>
              </Link>
              <Link href="/services/wallet-integration-blueprint">
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
                  Next: Tactics Level <ArrowRightIcon className="h-5 w-5 ml-2" />
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
