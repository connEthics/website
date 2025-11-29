'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  ShieldCheckIcon, 
  KeyIcon, 
  FingerPrintIcon,
  LockClosedIcon,
  ArrowRightIcon,
  CubeTransparentIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export default function IdentityArchitecture() {
  const capabilities = [
    {
      icon: KeyIcon,
      title: "SSI Architecture Design",
      description: "Complete architectural blueprints for Self-Sovereign Identity implementation. From DID methods to credential flows, we design systems that put users in control."
    },
    {
      icon: FingerPrintIcon,
      title: "Digital Wallet Strategy",
      description: "Navigate the wallet landscape. We help you choose between building, buying, or partnering—with clear criteria mapped to your business model."
    },
    {
      icon: CubeTransparentIcon,
      title: "DID Framework Selection",
      description: "Decentralized Identifier methods evaluated for your use case. did:web, did:key, did:ion—each has trade-offs we help you understand."
    },
    {
      icon: ArrowPathIcon,
      title: "Legacy Migration Paths",
      description: "Your current identity infrastructure won't disappear overnight. We design migration paths that preserve business continuity while moving toward SSI."
    },
    {
      icon: LockClosedIcon,
      title: "Privacy-Preserving Auth",
      description: "Authentication systems that verify without exposing. Selective disclosure, zero-knowledge proofs, and minimal data collection by design."
    }
  ];

  const useCases = [
    {
      title: "Financial Services Onboarding",
      description: "Reduce KYC costs by 60% while improving conversion rates. Wallet-based identity verification that users trust and regulators accept."
    },
    {
      title: "Healthcare Credential Portability",
      description: "Patient identity that travels with them. Eliminate redundant verification while maintaining GDPR compliance and patient control."
    },
    {
      title: "Education Credential Verification",
      description: "Diplomas and certifications that can be instantly verified. No more calling universities or waiting for paper confirmations."
    },
    {
      title: "Enterprise Access Management",
      description: "Employee identity beyond the perimeter. BYOI (Bring Your Own Identity) architectures for the distributed workforce."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Current State Assessment",
      description: "Deep analysis of your existing identity infrastructure—authentication flows, data stores, and integration points."
    },
    {
      step: "02",
      title: "Target State Design",
      description: "Architecture blueprints for your SSI implementation, including DID methods, credential schemas, and wallet interactions."
    },
    {
      step: "03",
      title: "Migration Planning",
      description: "Phased roadmap from current state to target state, with risk mitigation and rollback strategies."
    },
    {
      step: "04",
      title: "Implementation Support",
      description: "Technical guidance during build-out, including code reviews, security audits, and integration testing."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Identity Architecture"
        subtitle="Capability // Identity"
        description="The era of centralized identity is ending. We design the infrastructure for a user-centric future—systems where privacy is the default, not an option."
        primaryAction={{
          label: "Design Your Architecture",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Back to Services",
          href: "/services"
        }}
      />

      {/* Key Message */}
      <Box sx={{ py: 6, bgcolor: 'primary.main' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', fontWeight: 700, lineHeight: 1.5 }}>
            From &quot;Managing Users&quot; to &quot;Empowering Holders&quot;
          </Typography>
        </Container>
      </Box>

      {/* The Shift Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                THE PARADIGM SHIFT
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', letterSpacing: '-0.02em' }}>
                Your Users Are About to Own Their Identity
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                The European Digital Identity Wallet isn&apos;t just a new technology—it&apos;s a fundamental power shift. Citizens will carry verifiable credentials in their pocket. They&apos;ll choose what to share, when to share it, and with whom.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                The organizations that thrive will be those who <strong>embrace this shift</strong>—building identity architectures that respect user agency while streamlining their own operations.
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
                <ShieldCheckIcon style={{ width: 100, height: 100, color: '#0f172a', opacity: 0.8, strokeWidth: 0.8 }} />
                <Typography variant="caption" sx={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'monospace', color: 'text.disabled', fontWeight: 700 }}>
                  CAPABILITY_01 {`// IDENTITY`}
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
              WHAT WE DELIVER
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Identity Architecture Capabilities
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

      {/* Process Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              OUR APPROACH
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'white' }}>
              From Assessment to Implementation
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

      {/* Use Cases Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              USE CASES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Where Identity Architecture Transforms Business
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {useCases.map((useCase, index) => (
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
                    {useCase.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {useCase.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technology Stack */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              TECHNOLOGY EXPERTISE
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Standards We Work With
            </Typography>
          </Box>
          
          <Grid container spacing={2}>
            {[
              "W3C Verifiable Credentials",
              "W3C DID Core",
              "OpenID Connect for VC",
              "SD-JWT",
              "mDL (ISO 18013-5)",
              "eIDAS 2.0 ARF",
              "BBS+ Signatures",
              "JSON-LD / JWT",
              "SIOP v2",
              "Presentation Exchange"
            ].map((tech, index) => (
              <Grid size={{ xs: 6, md: 4 }} key={index}>
                <Box 
                  sx={{ 
                    p: 2, 
                    textAlign: 'center',
                    bgcolor: 'grey.50',
                    border: '1px solid',
                    borderColor: 'divider',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  {tech}
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
              label="CAPABILITY // IDENTITY" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to Architect the Future?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              The identity landscape is shifting. Position your organization at the forefront with architecture that empowers users and streamlines your operations.
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
                  Start Your Architecture
                </ConnEthicsButton>
              </Link>
              <Link href="/services/strategic-intelligence">
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
                  Next: Strategic Intelligence <ArrowRightIcon className="h-5 w-5 ml-2" />
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
