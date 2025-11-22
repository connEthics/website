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
      title: "The Audit",
      description: "A 2-week deep dive into your current architecture or strategy. We deliver a brutal, honest report on where you stand and a roadmap for where you need to go.",
      action: "Diagnose"
    },
    {
      title: "The Sprint", 
      description: "A 6-week targeted intervention to solve a specific problem—whether it's launching a POC for Verifiable Credentials or mapping a new market entry.",
      action: "Execute"
    },
    {
      title: "The Partnership",
      description: "Long-term fractional leadership. We embed with your team as interim CTOs, CPOs, or Lead Architects to drive sustained transformation.",
      action: "Transform"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="default"
        title="Strategic Capabilities"
        subtitle="Engineering Trust in a Zero-Trust World"
        description="We don't just consult. We build the infrastructure for your survival. From cryptographic trust to economic warfare analysis, we provide the arsenal you need to lead."
      />

      {/* Services Section - Zig Zag Layout */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Stack spacing={16}>
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
                        borderRadius: 4,
                        p: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)',
                        height: '100%',
                        minHeight: 320,
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid',
                        borderColor: 'grey.100'
                      }}
                    >
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: 4,
                          bgcolor: 'primary.main'
                        }} 
                      />
                      <IconComponent style={{ width: 140, height: 140, color: '#0284c7', opacity: 0.8, strokeWidth: 1 }} />
                      
                      {/* Decorative elements */}
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          bottom: -40,
                          right: -40,
                          width: 160,
                          height: 160,
                          borderRadius: '50%',
                          bgcolor: 'primary.50',
                          zIndex: 0
                        }} 
                      />
                    </Box>
                  </Box>

                  {/* Content Side */}
                  <Box sx={{ flex: 1 }}>
                    <Chip 
                      label={service.category} 
                      sx={{ 
                        mb: 3, 
                        fontWeight: 700,
                        bgcolor: 'primary.50',
                        color: 'primary.main',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '0.75rem',
                        height: 32
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
                                width: 6, 
                                height: 6, 
                                borderRadius: '50%', 
                                bgcolor: 'primary.main', 
                                mr: 2
                              }}
                            />
                            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>

                    <Link href="/contact" passHref legacyBehavior>
                      <ConnEthicsButton variant="outline" size="medium">
                        Explore Capability
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
      <Box sx={{ py: 16, bgcolor: 'primary.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 12 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
              HOW WE ENGAGE
            </Typography>
            <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700, color: 'white' }}>
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
                    borderRadius: 4,
                    bgcolor: 'grey.800',
                    border: '1px solid',
                    borderColor: 'grey.700',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.500',
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, display: 'block', mb: 1 }}>
                    {model.action}
                  </Typography>
                  <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 700, color: 'white' }}>
                    {model.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                    {model.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 12, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 800 }}>
              Ready to Deploy?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, maxWidth: '700px', mx: 'auto', opacity: 0.9, fontWeight: 400 }}>
              The future belongs to those who build it. Let's architect your ecosystem today.
            </Typography>
            <Link href="/contact" passHref legacyBehavior>
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
