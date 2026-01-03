'use client';

import { ShieldCheckIcon, ChartBarIcon, LightBulbIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Box, Container, Grid, Stack, Typography, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton } from '@/components/mui';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: "knowledge-engineering",
      title: "Knowledge Engineering",
      description: "Transform your tacit knowledge into a strategic asset. We extract context where it lives to feed your Sovereign AI without errors, ensuring your IP remains yours.",
      features: [
        "Discovery & Structuring",
        "Knowledge Graph & RAG",
        "Sovereign AI & Privacy",
        "Business AI Assistant"
      ],
      icon: LightBulbIcon,
      category: "Knowledge",
      link: "/contact",
      cta: "Diagnose my assets",
      metric: "100% Data Sovereignty"
    },
    {
      id: "debt-alignment",
      title: "Debt Alignment",
      description: "Unleash your value stream. We treat technical debt as a financial investment: we only pay back what yields a return or what costs too much in friction.",
      features: [
        "Friction Audit",
        "Radical Prioritization",
        "Flow Remediation",
        "Target Value Delivery"
      ],
      icon: WrenchScrewdriverIcon,
      category: "Engineering",
      link: "/contact",
      cta: "Audit my debt",
      metric: "-40% Time-to-Market"
    },
    {
      id: "ecosystem-identity",
      title: "Ecosystem Identity",
      description: "Turn compliance into a competitive edge. A hybrid approach to navigate trust disruptions (eIDAS 2.0) and position your ecosystem for the future.",
      features: [
        "Regulatory Watch",
        "Ecosystem Design",
        "Wallet Experience",
        "Trust Transition"
      ],
      icon: ShieldCheckIcon,
      category: "Identity",
      link: "/contact",
      cta: "Secure my ecosystem",
      metric: "Partner-Ready Architecture"
    }
  ];

  const engagementModels = [
    {
      title: "Strategic Radar",
      description: "For C-Levels. In 2-4 weeks, we map your terrain—semantic maturity, technical debt, or regulatory impact. You receive a 'State of the Union' report and a high-ROI roadmap.",
      action: "Diagnostic"
    },
    {
      title: "Tactical Strike Team", 
      description: "For Delivery Leads. We deploy a specialized squad to execute a critical transition: implementing Sovereign AI, refactoring core flows, or integrating eIDAS wallets. We build, ship, and transfer.",
      action: "Execution"
    },
    {
      title: "Ecosystem Governance",
      description: "For Long-term Resilience. We embed into your organization to maintain alignment. We curate your knowledge, monitor regulatory shifts, and prevent debt accumulation.",
      action: "Partnership"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Strategic Capabilities"
        subtitle="Engineering Trust in a Zero-Trust World"
        description="We don't just consult. We build the infrastructure for your survival. From cryptographic trust to economic warfare analysis, we provide the arsenal you need to lead."
      />

      {/* Services Section - Zig Zag Layout */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Stack spacing={8}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Box 
                  key={index} 
                  id={service.id}
                  sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: isEven ? 'row' : 'row-reverse' },
                    alignItems: 'center',
                    gap: { xs: 6, md: 12 }
                  }}
                >
                  {/* Visual Side */}
                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Box 
                      sx={{ 
                        bgcolor: 'white',
                        borderRadius: 1,
                        p: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        minHeight: 320,
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid',
                        borderColor: 'divider',
                        backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    >
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 2,
                          bgcolor: 'primary.main'
                        }} 
                      />
                      <IconComponent style={{ width: 120, height: 120, color: '#0f172a', opacity: 0.8, strokeWidth: 0.8 }} />
                      
                      {/* Technical Label */}
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          position: 'absolute', 
                          bottom: 16, 
                          right: 16, 
                          fontFamily: 'monospace', 
                          color: 'text.disabled',
                          fontWeight: 700
                        }}
                      >
                        CAPABILITY_0{index + 1} {`// ${service.category.toUpperCase()}`}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Content Side */}
                  <Box sx={{ flex: 1 }}>
                    <Chip 
                      label={service.category} 
                      sx={{ 
                        mb: 3, 
                        fontWeight: 700,
                        bgcolor: 'transparent',
                        color: 'primary.main',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '0.75rem',
                        height: 32,
                        borderRadius: 1
                      }} 
                    />
                    <Typography variant="h3" component="h3" sx={{ mb: 3, fontWeight: 800, color: 'text.primary', letterSpacing: '-0.02em' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ mb: 4, color: 'primary.main', fontWeight: 700, display: 'flex', alignItems: 'center', bgcolor: 'primary.50', width: 'fit-content', px: 2, py: 1, borderRadius: 1 }}>
                        <ChartBarIcon style={{ width: 20, height: 20, marginRight: 8 }} />
                        Impact: {service.metric}
                    </Typography>
                    
                    <Box sx={{ mb: 5, pl: 3, borderLeft: '2px solid', borderColor: 'primary.200' }}>
                      <Stack spacing={2}>
                        {service.features.map((feature, featureIndex) => (
                          <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box 
                              sx={{ 
                                width: 4, 
                                height: 4, 
                                bgcolor: 'primary.main', 
                                mr: 2
                              }}
                            />
                            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, fontFamily: 'monospace' }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    <Link href={service.link}>
                      <ConnEthicsButton variant="outline" size="medium">
                        {service.cta}
                      </ConnEthicsButton>
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* Engagement Models Section */}
      <Box sx={{ py: 8, bgcolor: '#0f172a', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 12 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              ENGAGEMENT_PROTOCOLS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 800, color: 'white' }}>
              Deployment Models
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.400', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
              We adapt to the velocity of your organization. Whether you need a quick diagnostic or a long-term transformation partner.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {engagementModels.map((model, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box 
                  sx={{ 
                    p: 5,
                    height: '100%',
                    bgcolor: 'transparent',
                    border: '1px solid',
                    borderColor: 'rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      borderColor: 'primary.500',
                      bgcolor: 'rgba(255,255,255,0.02)',
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  {/* Header Line */}
                  <Box sx={{ width: 40, height: 2, bgcolor: 'primary.500', mb: 4 }} />
                  
                  <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, display: 'block', mb: 1, fontFamily: 'monospace' }}>
                    LEVEL_0{index + 1} {`// ${model.action.toUpperCase()}`}
                  </Typography>
                  <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 700, color: 'white' }}>
                    {model.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7, mb: 4 }}>
                    {model.description}
                  </Typography>

                  <Box sx={{ mt: 'auto' }}>
                    <Link href="/contact">
                      <Typography 
                        component="span"
                        variant="button" 
                        sx={{ 
                          color: 'white', 
                          fontWeight: 700, 
                          display: 'flex', 
                          alignItems: 'center',
                          fontSize: '0.875rem',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'primary.400'
                          }
                        }}
                      >
                        INITIALIZE <Box component="span" sx={{ ml: 1, fontSize: '1.2em' }}>→</Box>
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 6, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 800 }}>
              Ready to Deploy?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, maxWidth: '700px', mx: 'auto', opacity: 0.9, fontWeight: 400 }}>
              The future belongs to those who build it. Let&apos;s architect your ecosystem today.
            </Typography>
            <Link href="/contact">
              <ConnEthicsButton
                variant="secondary"
                size="large"
                sx={{ 
                  px: 8,
                  py: 2,
                  fontSize: '1.1rem',
                  bgcolor: 'white',
                  color: 'primary.main',
                  fontWeight: 700,
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                Initiate Protocol
              </ConnEthicsButton>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
