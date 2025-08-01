'use client';

import { ShieldCheckIcon, MapIcon, LockClosedIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";
import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from '@/components/mui';

export default function Services() {
  const services = [
    {
      title: "Self-Sovereign Identity",
      description: "Prepare for Self-Sovereign Identity (SSI) integration and deployment. Empower individuals to securely control their digital identities using product management methodologies and tools.",
      features: [
        "SSI architecture design and implementation",
        "Digital identity strategy development",
        "Secure identity control frameworks",
        "Integration with existing systems",
        "Compliance and security auditing"
      ],
      icon: ShieldCheckIcon,
      category: "Identity"
    },
    {
      title: "Ecosystem Cartography",
      description: "Generate actionable insights through economic warfare analysis. Gain a comprehensive understanding of your business ecosystem, from competitive intelligence to strategic communication and lobbying.",
      features: [
        "Competitive intelligence gathering",
        "Economic warfare analysis",
        "Business ecosystem mapping",
        "Strategic communication planning",
        "Lobbying and influence strategies"
      ],
      icon: MapIcon,
      category: "Strategy"
    },
    {
      title: "Trust and Identity Deployment",
      description: "Define, build, and certify verifiable credentials. Ensure their secure adoption across your network to enhance trust and identity management.",
      features: [
        "Verifiable credential design",
        "Certification framework development",
        "Secure network deployment",
        "Trust relationship modeling",
        "Identity verification protocols"
      ],
      icon: LockClosedIcon,
      category: "Identity"
    },
    {
      title: "Product Leadership",
      description: "Align product roadmaps with strategic goals and OKRs. Prioritize initiatives using data-driven insights and foster a culture of innovation through continuous backlog refinement and stakeholder engagement.",
      features: [
        "Strategic roadmap alignment",
        "OKR framework implementation",
        "Data-driven prioritization",
        "Innovation culture development",
        "Stakeholder engagement strategies"
      ],
      icon: ChartBarIcon,
      category: "Leadership"
    },
    {
      title: "Product Management",
      description: "Initiate and scale product teams effectively. Implement robust release processes and manage dependencies to ensure timely delivery. Optimize team structures and interactions through event storming and continuous mapping.",
      features: [
        "Product team scaling",
        "Release process optimization",
        "Dependency management",
        "Event storming facilitation",
        "Continuous process mapping"
      ],
      icon: CogIcon,
      category: "Management"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Assessment",
      description: "Comprehensive analysis of your current ecosystem and challenges."
    },
    {
      number: "2", 
      title: "Strategy",
      description: "Development of ethical frameworks and strategic roadmaps."
    },
    {
      number: "3",
      title: "Implementation", 
      description: "Execution of solutions with continuous monitoring and optimization."
    },
    {
      number: "4",
      title: "Evolution",
      description: "Ongoing support and adaptation to changing business needs."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="default"
        title="Our Services"
        subtitle="Ethical Solutions for Modern Business"
        description="We deliver high-quality services that seamlessly align technical, operational, and execution strategies with today's business standards, ensuring ethical alignment across all dimensions of your organization."
      />

      {/* Services Grid */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Grid size={{ xs: 12, lg: 6 }} key={index}>
                  <ConnEthicsCard variant="elevated" sx={{ height: '100%' }}>
                    <Box sx={{ p: 4 }}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                        <Box 
                          sx={{ 
                            width: 48, 
                            height: 48, 
                            bgcolor: 'primary.main', 
                            borderRadius: 2, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                          }}
                        >
                          <IconComponent style={{ width: 24, height: 24, color: 'white' }} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                              {service.title}
                            </Typography>
                            <Chip label={service.category} color="primary" size="small" />
                          </Stack>
                        </Box>
                      </Stack>
                      
                      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        {service.description}
                      </Typography>
                      
                      <Box>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                          Key Features:
                        </Typography>
                        <Stack spacing={1}>
                          {service.features.map((feature, featureIndex) => (
                            <Box key={featureIndex} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                              <Typography sx={{ color: 'primary.main', mr: 2, fontSize: '1.2rem' }}>
                                ✓
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    </Box>
                  </ConnEthicsCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
              Our Approach
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              We follow a structured methodology that ensures ethical alignment across 
              external business goals, internal team dynamics, technical stack, and 
              broader societal context.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      width: 64, 
                      height: 64, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      mx: 'auto', 
                      mb: 3 
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                      {step.number}
                    </Typography>
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <ConnEthicsCard variant="outlined" sx={{ bgcolor: 'primary.main', borderColor: 'primary.light', textAlign: 'center', p: 6 }}>
            <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
              Ready to Transform Your Business Ecosystem?
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.100', mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Let&apos;s discuss how ConnEthics can bring clarity and purpose to your 
              challenging competitive environment.
            </Typography>
            <ConnEthicsButton
              variant="primary"
              size="large"
              href="/contact"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
            >
              Schedule a Consultation
            </ConnEthicsButton>
          </ConnEthicsCard>
        </Container>
      </Box>
    </Box>
  );
}
