'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  MapIcon, 
  GlobeAltIcon, 
  EyeIcon,
  ExclamationTriangleIcon,
  DocumentMagnifyingGlassIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ChartBarIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

export default function StrategicIntelligence() {
  const capabilities = [
    {
      icon: GlobeAltIcon,
      title: "Ecosystem Cartography",
      description: "Wardley Mapping of your competitive landscape. We visualize where value is being created, captured, and commoditized in the eIDAS 2.0 ecosystem."
    },
    {
      icon: EyeIcon,
      title: "Adversarial Analysis",
      description: "Understand your competitors' moves before they make them. We analyze positioning, partnerships, and strategic intent across the identity ecosystem."
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Regulatory Impact Forecasting",
      description: "eIDAS 2.0 is just the beginning. We track regulatory trajectories across jurisdictions to help you anticipate compliance requirements."
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Supply Chain Vulnerability",
      description: "Your identity stack has dependencies. We map them, assess their risks, and identify where concentration or obsolescence threatens your operations."
    },
    {
      icon: LinkIcon,
      title: "Influence Network Mapping",
      description: "Who shapes the standards? Who controls the trust registries? We map the power structures in the emerging identity ecosystem."
    }
  ];

  const wardleyMapBenefits = [
    "Visualize component evolution from genesis to commodity",
    "Identify strategic options based on landscape position",
    "Anticipate competitor moves and market shifts",
    "Align investment decisions with ecosystem evolution",
    "Communicate strategy clearly to stakeholders"
  ];

  const intelligenceOutputs = [
    {
      title: "Ecosystem Position Report",
      description: "Comprehensive mapping of your current position in the identity ecosystem, including competitive dynamics and strategic options.",
      format: "Executive Report + Interactive Map"
    },
    {
      title: "Regulatory Horizon Scan",
      description: "Forward-looking analysis of regulatory developments across EU and global jurisdictions, with impact assessment for your business.",
      format: "Quarterly Briefing + Alert System"
    },
    {
      title: "Competitor Intelligence Brief",
      description: "Deep analysis of key competitor moves, partnerships, and strategic positioning in the wallet and identity space.",
      format: "Monthly Brief + Signal Tracking"
    },
    {
      title: "Technology Radar",
      description: "Assessment of emerging technologies and standards in the identity space, with adoption timing recommendations.",
      format: "Bi-Annual Report + Tech Scouting"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Landscape Reconnaissance",
      description: "Comprehensive mapping of the identity ecosystem relevant to your business—players, technologies, regulations, and power structures."
    },
    {
      step: "02",
      title: "Position Assessment",
      description: "Analysis of your current position within the ecosystem—strengths, vulnerabilities, and strategic options."
    },
    {
      step: "03",
      title: "Scenario Modeling",
      description: "Development of future scenarios based on regulatory trajectories, technology evolution, and competitive dynamics."
    },
    {
      step: "04",
      title: "Strategic Recommendations",
      description: "Actionable recommendations for positioning, partnerships, and investment priorities based on intelligence findings."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Strategic Intelligence"
        subtitle="Capability // Strategy"
        description="Your competitors are not just companies—they're ecosystems. We map the terrain so you can maneuver effectively and find your leverage points."
        primaryAction={{
          label: "Commission Intelligence",
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
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Identity Architecture
              </Typography>
            </Link>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.875rem' }}>
              CAPABILITY_02 // STRATEGY
            </Typography>
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
                Trust Infrastructure
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
            In Economic Warfare, Intelligence is the Ultimate Weapon
          </Typography>
        </Container>
      </Box>

      {/* The Challenge Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                THE STRATEGIC CHALLENGE
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', letterSpacing: '-0.02em' }}>
                Flying Blind in a Complex Ecosystem
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                The eIDAS 2.0 ecosystem is a web of regulations, technologies, standards bodies, and competing interests. New players emerge monthly. Alliances shift. Regulations evolve. Most organizations are making strategic decisions based on incomplete or outdated information.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                Strategic Intelligence gives you the <strong>situational awareness</strong> to make confident decisions—knowing where the ecosystem is heading, who the key players are, and where your leverage points exist.
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
                <MapIcon style={{ width: 100, height: 100, color: '#0f172a', opacity: 0.8, strokeWidth: 0.8 }} />
                <Typography variant="caption" sx={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'monospace', color: 'text.disabled', fontWeight: 700 }}>
                  CAPABILITY_02 {`// STRATEGY`}
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
              INTELLIGENCE CAPABILITIES
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

      {/* Wardley Mapping Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                METHODOLOGY
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'white' }}>
                Wardley Mapping for Identity Ecosystems
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'grey.300', lineHeight: 1.8, mb: 4 }}>
                Wardley Maps are our primary tool for strategic analysis. They visualize the evolution of components in your value chain—from genesis through custom-built to product and finally commodity. This reveals strategic options that traditional analysis misses.
              </Typography>
              <Stack spacing={2}>
                {wardleyMapBenefits.map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircleIcon className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    <Typography variant="body2" sx={{ color: 'grey.300' }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  p: 6,
                  border: '1px solid',
                  borderColor: 'rgba(255,255,255,0.1)',
                  bgcolor: 'rgba(255,255,255,0.02)'
                }}
              >
                <ChartBarIcon style={{ width: 80, height: 80, color: '#38bdf8', opacity: 0.8, strokeWidth: 0.8 }} />
                <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 700, color: 'white' }}>
                  Example Insights from Mapping
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Wallet infrastructure is commoditizing—don't build, partner",
                    "Trust registry governance is still genesis—opportunity for influence",
                    "QTSP market is consolidating—vendor selection is critical",
                    "Credential schemas are becoming standard—focus on differentiation elsewhere"
                  ].map((insight, index) => (
                    <Typography key={index} variant="body2" sx={{ color: 'grey.400', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      → {insight}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Intelligence Outputs */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              INTELLIGENCE PRODUCTS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Deliverables & Formats
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {intelligenceOutputs.map((output, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
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
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    {output.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                    {output.description}
                  </Typography>
                  <Chip 
                    label={output.format} 
                    size="small"
                    sx={{ 
                      bgcolor: 'primary.50', 
                      color: 'primary.main', 
                      fontWeight: 600,
                      fontFamily: 'monospace',
                      fontSize: '0.75rem'
                    }} 
                  />
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

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Chip 
              label="CAPABILITY // STRATEGY" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to See the Battlefield?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              Strategic Intelligence gives you the clarity to act decisively. Know the ecosystem. Anticipate the shifts. Position for advantage.
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
                  Commission Intelligence
                </ConnEthicsButton>
              </Link>
              <Link href="/services/trust-infrastructure">
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
                  Next: Trust Infrastructure <ArrowRightIcon className="h-5 w-5 ml-2" />
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
