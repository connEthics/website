'use client';

import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsButton, ConnEthicsCard } from '@/components/mui';
import { 
  LockClosedIcon, 
  DocumentCheckIcon, 
  ShieldExclamationIcon,
  ArrowPathRoundedSquareIcon,
  FingerPrintIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  KeyIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

export default function TrustInfrastructure() {
  const capabilities = [
    {
      icon: DocumentCheckIcon,
      title: "Verifiable Credential Schemas",
      description: "Design credential schemas that balance interoperability with your business requirements. We ensure your credentials work across wallets and verifiers."
    },
    {
      icon: ShieldExclamationIcon,
      title: "Trust Registry Governance",
      description: "Participate in or establish trust registries. We help you navigate the governance frameworks that determine who can issue and verify credentials."
    },
    {
      icon: EyeSlashIcon,
      title: "Zero-Knowledge Proof Integration",
      description: "Prove statements without revealing data. ZKP technology enables selective disclosure that protects privacy while meeting verification requirements."
    },
    {
      icon: ArrowPathRoundedSquareIcon,
      title: "Interoperability Testing",
      description: "Your credentials must work across the ecosystem. We design and execute interoperability tests to ensure seamless operation with wallets and verifiers."
    },
    {
      icon: FingerPrintIcon,
      title: "Audit & Compliance Automation",
      description: "Build compliance into your credential infrastructure. Automated audit trails and compliance checks that satisfy regulators without manual overhead."
    }
  ];

  const zkpUseCases = [
    {
      title: "Age Verification",
      description: "Prove someone is over 18 without revealing their birthdate or any other personal information."
    },
    {
      title: "Income Range Confirmation",
      description: "Confirm income meets a threshold for loan qualification without disclosing exact salary figures."
    },
    {
      title: "Credential Validity",
      description: "Verify a professional license is current without revealing the holder's identity to the verifier."
    },
    {
      title: "Eligibility Checks",
      description: "Confirm someone is eligible for a service (e.g., residency) without exposing the underlying personal data."
    }
  ];

  const credentialTypes = [
    { name: "Identity Credentials", examples: "Government ID, Passport, National ID" },
    { name: "Professional Credentials", examples: "Licenses, Certifications, Memberships" },
    { name: "Educational Credentials", examples: "Diplomas, Degrees, Course Completions" },
    { name: "Financial Credentials", examples: "Bank Account, Credit Score Range, Income Bracket" },
    { name: "Health Credentials", examples: "Vaccination Status, Insurance Coverage, Prescriptions" },
    { name: "Employment Credentials", examples: "Employment Status, Role Verification, Background Checks" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Credential Requirements",
      description: "Analysis of your verification needs—what must be proven, to whom, and under what privacy constraints."
    },
    {
      step: "02",
      title: "Schema Design",
      description: "Design of credential schemas that meet your requirements while maintaining ecosystem interoperability."
    },
    {
      step: "03",
      title: "Infrastructure Implementation",
      description: "Build-out of issuance, holder, and verification components with appropriate cryptographic protections."
    },
    {
      step: "04",
      title: "Ecosystem Integration",
      description: "Integration with trust registries, wallets, and verifier networks. Testing and certification for production readiness."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Trust Infrastructure"
        subtitle="Capability // Infrastructure"
        description="Verification without surveillance. We deploy cryptographic systems that prove facts without leaking sensitive data—the bedrock of the new digital economy."
        primaryAction={{
          label: "Build Your Trust Layer",
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
            <Link href="/services/strategic-intelligence">
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
                Strategic Intelligence
              </Typography>
            </Link>
            <Typography sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.875rem' }}>
              CAPABILITY_03 // INFRASTRUCTURE
            </Typography>
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
                Product Strategy
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
            Prove Everything. Reveal Nothing.
          </Typography>
        </Container>
      </Box>

      {/* The Challenge Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                THE TRUST CHALLENGE
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', letterSpacing: '-0.02em' }}>
                Verification Has Always Required Exposure
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                Traditional verification requires users to hand over more data than necessary. To prove you&apos;re over 18, you show your entire ID—name, address, photo, everything. This data accumulates, leaks, and gets exploited.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8 }}>
                <strong>Verifiable Credentials with Zero-Knowledge Proofs</strong> break this tradeoff. They allow you to prove exactly what&apos;s needed—nothing more. This is the infrastructure that makes privacy-preserving commerce possible.
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
                <LockClosedIcon style={{ width: 100, height: 100, color: '#0f172a', opacity: 0.8, strokeWidth: 0.8 }} />
                <Typography variant="caption" sx={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'monospace', color: 'text.disabled', fontWeight: 700 }}>
                  CAPABILITY_03 {`// INFRASTRUCTURE`}
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
              INFRASTRUCTURE CAPABILITIES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              What We Build
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

      {/* ZKP Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'neutral.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
                ZERO-KNOWLEDGE PROOFS
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'white' }}>
                The Math Behind Privacy
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'grey.300', lineHeight: 1.8, mb: 4 }}>
                Zero-Knowledge Proofs (ZKPs) are cryptographic techniques that let you prove a statement is true without revealing the underlying data. This isn&apos;t science fiction—it&apos;s deployable technology that&apos;s transforming how verification works.
              </Typography>
              <Box sx={{ p: 3, border: '1px solid', borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(255,255,255,0.02)' }}>
                <KeyIcon className="h-8 w-8 text-primary-400 mb-2" />
                <Typography variant="body2" sx={{ color: 'grey.400', fontStyle: 'italic' }}>
                  &quot;I can prove I know the password without ever showing you the password.&quot;
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, color: 'primary.400', fontFamily: 'monospace' }}>
                {`// ZKP_USE_CASES`}
              </Typography>
              <Grid container spacing={3}>
                {zkpUseCases.map((useCase, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Box 
                      sx={{ 
                        p: 4,
                        border: '1px solid',
                        borderColor: 'rgba(255,255,255,0.2)',
                        bgcolor: 'rgba(255,255,255,0.05)',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.400',
                          bgcolor: 'rgba(255,255,255,0.08)'
                        }
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>
                        {useCase.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'grey.200', lineHeight: 1.7 }}>
                        {useCase.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Credential Types */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              CREDENTIAL TYPES
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Schemas We Design
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {credentialTypes.map((type, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Box 
                  sx={{ 
                    p: 4, 
                    bgcolor: 'white', 
                    border: '1px solid', 
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 3,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: 'primary.main'
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      bgcolor: 'primary.50', 
                      borderRadius: 1, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <DocumentCheckIcon className="h-6 w-6 text-primary-700" strokeWidth={1.5} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {type.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      {type.examples}
                    </Typography>
                  </Box>
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
              IMPLEMENTATION PROCESS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              How We Build Trust Infrastructure
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

      {/* Technology Stack */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block', fontFamily: 'monospace' }}>
              CRYPTOGRAPHIC FOUNDATIONS
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3, color: 'text.primary' }}>
              Technologies We Work With
            </Typography>
          </Box>
          
          <Grid container spacing={2}>
            {[
              "BBS+ Signatures",
              "Groth16 ZK-SNARKs",
              "PLONK Proof Systems",
              "SD-JWT Selective Disclosure",
              "JSON-LD Framing",
              "Merkle Tree Proofs",
              "Pedersen Commitments",
              "AnonCreds v2",
              "ECDSA / EdDSA",
              "Hash-based Commitments"
            ].map((tech, index) => (
              <Grid size={{ xs: 6, md: 4 }} key={index}>
                <Box 
                  sx={{ 
                    p: 2, 
                    textAlign: 'center',
                    bgcolor: 'white',
                    border: '1px solid',
                    borderColor: 'divider',
                    fontFamily: 'monospace',
                    fontSize: '0.8rem',
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
              label="CAPABILITY // INFRASTRUCTURE" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 700,
                fontFamily: 'monospace'
              }} 
            />
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Ready to Build Trust That Scales?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
              Trust Infrastructure enables verification without exposure. Build the cryptographic foundation that makes privacy-preserving business possible.
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
                  Build Your Trust Layer
                </ConnEthicsButton>
              </Link>
              <Link href="/services/product-strategy">
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
                  Next: Product Strategy <ArrowRightIcon className="h-5 w-5 ml-2" />
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
