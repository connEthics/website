'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard } from '@/components/mui';
import { DocumentTextIcon, ShieldCheckIcon, ScaleIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const legalDocuments = [
  {
    title: 'Sales Terms and Conditions',
    description: 'Terms and conditions for our consulting services and business relationships',
    href: '/legal/sales-terms-and-conditions',
    icon: DocumentTextIcon,
    variant: 'primary' as const
  },
  {
    title: 'General Purchasing Conditions',
    description: 'Terms and conditions for our procurement and vendor relationships',
    href: '/legal/general-purchasing-conditions',
    icon: ScaleIcon,
    variant: 'primary' as const
  },
  {
    title: 'SSIP Safety Schemes',
    description: 'Safety requirements and certification standards for all suppliers',
    href: '/legal/ssip-safety-schemes',
    icon: ShieldCheckIcon,
    variant: 'warning' as const
  },
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information',
    href: '/privacy',
    icon: LockClosedIcon,
    variant: 'primary' as const
  }
];

export default function Legal() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Legal Information"
        subtitle="COMPLIANCE_FRAMEWORK"
        description="Our legal framework ensures transparent, ethical, and compliant business relationships."
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Legal Documents Grid */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              mb: 2, 
              display: 'block',
              fontFamily: 'monospace'
            }}
          >
            LEGAL_DOCUMENTS
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 4 }}>
            Regulatory Framework
          </Typography>
          
          <Grid container spacing={3}>
            {legalDocuments.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Link href={doc.href} style={{ textDecoration: 'none' }}>
                    <ConnEthicsCard 
                      variant="blueprint" 
                      sx={{ 
                        p: 3, 
                        height: '100%',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: doc.variant === 'warning' ? 'warning.main' : 'primary.main',
                          boxShadow: (theme) => `0 0 0 1px ${doc.variant === 'warning' ? theme.palette.warning.main : theme.palette.primary.main}`
                        }
                      }}
                    >
                      <Stack direction="row" spacing={3} alignItems="flex-start">
                        <Box 
                          sx={{ 
                            p: 1.5, 
                            bgcolor: doc.variant === 'warning' ? 'warning.50' : 'primary.50', 
                            borderRadius: 2, 
                            color: doc.variant === 'warning' ? 'warning.main' : 'primary.main' 
                          }}
                        >
                          <IconComponent className="h-6 w-6" />
                        </Box>
                        <Box>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600, 
                              color: doc.variant === 'warning' ? 'warning.dark' : 'text.primary',
                              mb: 1 
                            }}
                          >
                            {doc.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {doc.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </ConnEthicsCard>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Legal Notice */}
        <Box 
          sx={{ 
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
            borderRadius: 1,
            p: { xs: 4, md: 6 },
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              mb: 2, 
              display: 'block',
              fontFamily: 'monospace'
            }}
          >
            LEGAL_NOTICE
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 4 }}>
            Entity Information
          </Typography>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mb: 1 }}>
                    {'// PUBLISHER'}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>ConnEthics SASU</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    RCS Nanterre: 844 407 866
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    21 rue Paul Déroulède<br />
                    92270 Bois-Colombes, France
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mb: 1 }}>
                    {'// PUBLICATION_DIRECTOR'}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>Frederic CHOUDAT</Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mb: 1 }}>
                    {'// INSURANCE'}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Professional liability insurance taken out with Coover and guaranteed by HISCOX
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mb: 1 }}>
                    {'// HOSTING'}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>Vercel Inc.</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    650 California St<br />
                    San Francisco, CA 94108, United States
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mb: 1 }}>
                    {'// INFRASTRUCTURE_REGION'}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <strong>Paris, France (West)</strong> - eu-west-3 - cdg1
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    In accordance with our commitment to digital sovereignty, we host our data on French territory.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontFamily: 'monospace', mb: 1 }}>
                    {'// CONTACT'}
                  </Typography>
                  <Link href="mailto:contact@connethics.com" style={{ textDecoration: 'none' }}>
                    <Typography variant="body1" sx={{ color: 'primary.main', '&:hover': { textDecoration: 'underline' } }}>
                      contact@connethics.com
                    </Typography>
                  </Link>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mt: 6 }}>
          Last updated: July 2025
        </Typography>
      </Container>
    </Box>
  );
}
