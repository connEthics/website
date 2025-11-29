'use client';

import { ShieldCheckIcon, MapIcon, LockClosedIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";
import { Box, Container, Grid, Stack, Typography, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton } from '@/components/mui';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: "identity-architecture",
      title: "Identity Architecture",
      description: "The era of centralized identity is ending. We help you build the infrastructure for a user-centric future, moving from 'managing users' to 'empowering holders'. We design systems where privacy is the default, not an option.",
      features: [
        "SSI architecture design & implementation",
        "Digital wallet strategy",
        "DID (Decentralized Identifier) frameworks",
        "Legacy system migration paths",
        "Privacy-preserving authentication"
      ],
      icon: ShieldCheckIcon,
      category: "Identity"
    },
    {
      id: "strategic-intelligence",
      title: "Strategic Intelligence",
      description: "Your competitors are not just companies; they are ecosystems. We map the terrain—regulatory, technical, and competitive—so you can maneuver effectively. We use Wardley Mapping and economic warfare analysis to find your leverage points.",
      features: [
        "Ecosystem cartography & Wardley Mapping",
        "Adversarial analysis",
        "Regulatory impact forecasting",
        "Supply chain vulnerability assessment",
        "Influence network mapping"
      ],
      icon: MapIcon,
      category: "Strategy"
    },
    {
      id: "trust-infrastructure",
      title: "Trust Infrastructure",
      description: "Verification without surveillance. We deploy cryptographic systems (Verifiable Credentials) that allow you to prove facts without leaking sensitive data. This is the bedrock of the new digital economy.",
      features: [
        "Verifiable Credential schemas",
        "Trust registry governance",
        "Zero-Knowledge Proof (ZKP) integration",
        "Interoperability testing",
        "Audit & compliance automation"
      ],
      icon: LockClosedIcon,
      category: "Infrastructure"
    },
    {
      id: "product-strategy",
      title: "Product Strategy",
      description: "Radical focus on outcomes. We align your product teams with business reality, cutting through the noise of 'feature factories' to deliver tangible value. We turn vague visions into shippable roadmaps.",
      features: [
        "OKR & KPI alignment",
        "Data-driven prioritization",
        "Product discovery workshops",
        "Market-fit validation",
        "Stakeholder alignment protocols"
      ],
      icon: ChartBarIcon,
      category: "Leadership"
    },
    {
      id: "operational-excellence",
      title: "Operational Excellence",
      description: "Execution is strategy. We optimize your delivery pipelines and team structures to ensure that what you build actually ships, on time and with quality. We remove friction so your engineers can flow.",
      features: [
        "Team topology optimization",
        "CI/CD pipeline strategy",
        "Event Storming & Domain Modeling",
        "Agile/Lean process refinement",
        "Technical debt management"
      ],
      icon: CogIcon,
      category: "Operations"
    }
  ];

  const engagementModels = [
    {
      title: "eIDAS 2.0 Opportunity Radar",
      description: "For C-Levels. We map your customer journeys to identify friction points and quantify the ROI of reusable identity. You get a clear Business Case: how much will you save on KYC, and how much will your conversion increase?",
      action: "Strategy",
      link: "/services/eidas-opportunity-radar"
    },
    {
      title: "Wallet Integration Blueprint", 
      description: "For CTOs & Innovation Leads. We design your target architecture (Buy vs Build), manage RFPs to select the right Identity Provider, and design ARF-compliant user journeys that users actually trust.",
      action: "Tactics",
      link: "/services/wallet-integration-blueprint"
    },
    {
      title: "Identity PMO",
      description: "For Operational Teams. We steer the deployment, coordinate with QTSPs (Trust Service Providers), and manage change. We ensure your transition to the eIDAS 2.0 ecosystem is seamless and on time.",
      action: "Operations",
      link: "/services/identity-pmo"
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
                    <Typography variant="body1" sx={{ mb: 5, color: 'text.secondary', fontSize: '1.125rem', lineHeight: 1.8 }}>
                      {service.description}
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

                    <Link href={`/services/${service.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                      <Box 
                        sx={{ 
                          p: 3,
                          bgcolor: 'primary.50',
                          border: '2px solid',
                          borderColor: 'primary.main',
                          borderRadius: 1,
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            '& .cta-text': { color: 'white' },
                            '& .cta-arrow': { transform: 'translateX(4px)' }
                          }
                        }}
                      >
                        <Typography 
                          className="cta-text"
                          variant="button" 
                          sx={{ 
                            color: 'primary.main', 
                            fontWeight: 700,
                            transition: 'color 0.2s ease'
                          }}
                        >
                          Explore Capability
                        </Typography>
                        <Box 
                          className="cta-arrow"
                          sx={{ 
                            color: 'primary.main', 
                            fontSize: '1.5rem',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          →
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </Box>

      {/* Engagement Models Section */}
      <Box sx={{ py: 8, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 12 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              ENGAGEMENT_PROTOCOLS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 800, color: 'white' }}>
              Deployment Models
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.200', maxWidth: '700px', mx: 'auto', fontWeight: 400 }}>
              We adapt to the velocity of your organization. Whether you need a quick diagnostic or a long-term transformation partner.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {engagementModels.map((model, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Link href={model.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <Box 
                    sx={{ 
                      p: 5,
                      height: '100%',
                      bgcolor: 'rgba(255,255,255,0.03)',
                      border: '1px solid',
                      borderColor: 'rgba(255,255,255,0.15)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: 'primary.400',
                        bgcolor: 'rgba(255,255,255,0.08)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(14, 165, 233, 0.2)'
                      }
                    }}
                  >
                    {/* Header Line */}
                    <Box sx={{ width: 40, height: 2, bgcolor: 'primary.400', mb: 4 }} />
                    
                    <Typography variant="overline" sx={{ color: 'primary.300', fontWeight: 700, display: 'block', mb: 1, fontFamily: 'monospace' }}>
                      LEVEL_0{index + 1} {`// ${model.action.toUpperCase()}`}
                    </Typography>
                    <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 700, color: 'white' }}>
                      {model.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.200', lineHeight: 1.7, mb: 4 }}>
                      {model.description}
                    </Typography>

                    <Box 
                      sx={{ 
                        mt: 'auto',
                        display: 'inline-flex',
                        alignItems: 'center',
                        px: 3,
                        py: 1.5,
                        bgcolor: 'primary.500',
                        borderRadius: 1,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'primary.400'
                        }
                      }}
                    >
                      <Typography 
                        component="span"
                        variant="button" 
                        sx={{ 
                          color: 'white', 
                          fontWeight: 700, 
                          display: 'flex', 
                          alignItems: 'center',
                          fontSize: '0.875rem'
                        }}
                      >
                        INITIALIZE <Box component="span" sx={{ ml: 1, fontSize: '1.2em' }}>→</Box>
                      </Typography>
                    </Box>
                  </Box>
                </Link>
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
