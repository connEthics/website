'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from '@/components/mui';
import { CheckCircleIcon, XCircleIcon, ShieldCheckIcon, GlobeAltIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Cookies() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Cookie Policy"
        subtitle="PRIVACY_FIRST"
        description="We believe in respecting your privacy. Here's our approach to cookies and tracking."
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Good News Banner */}
        <ConnEthicsCard 
          variant="blueprint" 
          sx={{ 
            mb: 6, 
            p: 4, 
            bgcolor: 'success.50', 
            borderColor: 'success.200',
            '&:hover': { borderColor: 'success.400', boxShadow: 'none' }
          }}
        >
          <Stack direction="row" spacing={3} alignItems="flex-start">
            <Box sx={{ color: 'success.main', mt: 0.5 }}>
              <CheckCircleIcon className="h-8 w-8" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.900', mb: 1 }}>
                Good News!
              </Typography>
              <Typography variant="body1" sx={{ color: 'success.800' }}>
                ConnEthics does not use traditional cookies on this website. We believe in respecting your privacy 
                and keeping our website simple and transparent.
              </Typography>
            </Box>
          </Stack>
        </ConnEthicsCard>

        {/* What are Cookies */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              display: 'block',
              mb: 2,
              fontFamily: 'monospace'
            }}
          >
            WHAT_ARE_COOKIES
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Understanding Cookies
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and to provide information to website owners.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            Common uses of cookies include remembering your preferences, keeping you logged in, tracking your 
            behavior for advertising purposes, and analyzing website performance.
          </Typography>
        </Box>

        {/* Our Approach */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              display: 'block',
              mb: 2,
              fontFamily: 'monospace'
            }}
          >
            OUR_APPROACH
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Privacy-First Philosophy
          </Typography>
          
          <ConnEthicsCard variant="blueprint" sx={{ p: 4 }}>
            <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'primary.main', mb: 3 }}>
              {'// WHY_NO_COOKIES'}
            </Typography>
            <Stack spacing={2}>
              {[
                "We respect your privacy and don't want to track your personal browsing behavior",
                "We believe in transparency and simplicity in our digital practices",
                "Our website functions perfectly without storing data on your device",
                "We align our technical choices with our ethical consulting values"
              ].map((reason, index) => (
                <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                  <Typography sx={{ color: 'primary.main' }}>✓</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {reason}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </ConnEthicsCard>
        </Box>

        {/* Analytics */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              display: 'block',
              mb: 2,
              fontFamily: 'monospace'
            }}
          >
            ANALYTICS
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Website Analytics
          </Typography>
          
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            While we don&apos;t use traditional cookies, we do want to understand how our website is performing 
            and how we can improve it for our visitors. For this purpose, we use Vercel Analytics.
          </Typography>

          <ConnEthicsCard variant="blueprint" sx={{ p: 4, mb: 4 }}>
            <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'text.secondary', mb: 3 }}>
              {'// VERCEL_ANALYTICS'}
            </Typography>
            <Stack spacing={3}>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                  <ShieldCheckIcon className="h-5 w-5" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Privacy-focused</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Vercel Analytics is designed with privacy in mind and doesn&apos;t use traditional cookies or track personal information.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                  <DocumentTextIcon className="h-5 w-5" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Aggregated data only</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    We only receive aggregated, anonymized data about page views, popular content, and general website performance.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                  <GlobeAltIcon className="h-5 w-5" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>GDPR compliant</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    The analytics solution is designed to be compliant with European privacy regulations.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </ConnEthicsCard>

          <Box sx={{ p: 3, bgcolor: 'primary.50', borderRadius: 1, border: '1px solid', borderColor: 'primary.200' }}>
            <Typography variant="body2" sx={{ color: 'primary.900' }}>
              <strong>Learn more:</strong> You can read more about Vercel Analytics and their privacy practices 
              in the{' '}
              <Link 
                href="https://vercel.com/docs/analytics" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                official Vercel Analytics documentation
              </Link>.
            </Typography>
          </Box>
        </Box>

        {/* What We Collect */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              display: 'block',
              mb: 2,
              fontFamily: 'monospace'
            }}
          >
            DATA_COLLECTION
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            What Analytics Data We Collect
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ConnEthicsCard variant="blueprint" sx={{ p: 4, height: '100%', bgcolor: 'success.50', borderColor: 'success.200' }}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'success.main', mb: 3 }}>
                  {'// WE_COLLECT_ANONYMOUSLY'}
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Page views and popular content",
                    "General geographic regions (country level)",
                    "Device types (mobile, desktop, tablet)",
                    "Referral sources (which sites link to us)"
                  ].map((item, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <Typography variant="body2" sx={{ color: 'success.900' }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </ConnEthicsCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ConnEthicsCard variant="blueprint" sx={{ p: 4, height: '100%', bgcolor: 'error.50', borderColor: 'error.200' }}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'error.main', mb: 3 }}>
                  {'// WE_DONT_COLLECT'}
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Personal identifiers or IP addresses",
                    "Detailed location data",
                    "Browsing behavior across other websites",
                    "Personal preferences or login information"
                  ].map((item, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                      <XCircleIcon className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <Typography variant="body2" sx={{ color: 'error.900' }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </ConnEthicsCard>
            </Grid>
          </Grid>
        </Box>

        {/* Your Rights */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              display: 'block',
              mb: 2,
              fontFamily: 'monospace'
            }}
          >
            YOUR_RIGHTS
          </Typography>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Your Rights and Options
          </Typography>
          
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ConnEthicsCard variant="blueprint" sx={{ p: 4, height: '100%', bgcolor: 'success.50', borderColor: 'success.200' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.900', mb: 2 }}>No Action Needed</Typography>
                <Typography variant="body2" sx={{ color: 'success.800' }}>
                  Since we don&apos;t use cookies, you don&apos;t need to accept or decline anything to use our website. 
                  Your privacy is protected by default.
                </Typography>
              </ConnEthicsCard>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ConnEthicsCard variant="blueprint" sx={{ p: 4, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Browser Settings</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  You can always configure your browser to block cookies from all websites if you prefer. 
                  This won&apos;t affect your experience on our website since we don&apos;t rely on them.
                </Typography>
              </ConnEthicsCard>
            </Grid>
          </Grid>
        </Box>

        {/* Contact CTA */}
        <Box 
          sx={{ 
            p: 4, 
            bgcolor: 'grey.900',
            borderRadius: 1,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              pointerEvents: 'none'
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'primary.400', 
                fontWeight: 700, 
                letterSpacing: 2, 
                display: 'block',
                mb: 1,
                fontFamily: 'monospace'
              }}
            >
              QUESTIONS
            </Typography>
            <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>
              Questions About Our Cookie Policy?
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 3 }}>
              If you have any questions about our cookie policy or our privacy practices, we&apos;re here to help.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Link href="mailto:dpo@connethics.com">
                <ConnEthicsButton 
                  variant="primary"
                  sx={{ bgcolor: 'white', color: 'grey.900', fontFamily: 'monospace', '&:hover': { bgcolor: 'grey.100' } }}
                >
                  CONTACT DPO →
                </ConnEthicsButton>
              </Link>
              <Link href="/contact">
                <ConnEthicsButton 
                  variant="outline"
                  sx={{ borderColor: 'grey.600', color: 'grey.300', fontFamily: 'monospace', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}
                >
                  GENERAL CONTACT
                </ConnEthicsButton>
              </Link>
            </Stack>
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Last updated: July 30, 2025
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            This policy reflects our commitment to privacy-first web practices.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
