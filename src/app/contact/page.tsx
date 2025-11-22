'use client';

import { EnvelopeIcon, PhoneIcon, MapPinIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from '@/components/mui';
import Link from 'next/link';

export default function Contact() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="gradient"
        title="Initiate Protocol"
        subtitle="Strategic Alignment"
        description="Ready to architect your ecosystem? Secure a channel with our team to discuss your challenges and define the parameters of our engagement."
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={8}>
          {/* Left Column: Direct Comms & HQ */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack spacing={6}>
              <Box>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
                  SECURE COMMS
                </Typography>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 4 }}>
                  Direct Channels
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, lineHeight: 1.8 }}>
                  For immediate tactical inquiries or partnership proposals. We prioritize encrypted and secure communication channels.
                </Typography>

                <Stack spacing={4}>
                  <ConnEthicsCard variant="outlined" sx={{ p: 3 }}>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{ p: 1.5, bgcolor: 'primary.50', borderRadius: 2, color: 'primary.main' }}>
                        <EnvelopeIcon className="h-6 w-6" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
                          Electronic Mail
                        </Typography>
                        <Link href="mailto:hello@connethics.com" style={{ textDecoration: 'none' }}>
                          <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                            hello@connethics.com
                          </Typography>
                        </Link>
                      </Box>
                    </Stack>
                  </ConnEthicsCard>

                  <ConnEthicsCard variant="outlined" sx={{ p: 3 }}>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{ p: 1.5, bgcolor: 'primary.50', borderRadius: 2, color: 'primary.main' }}>
                        <PhoneIcon className="h-6 w-6" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
                          Signal / Voice
                        </Typography>
                        <Link href="tel:+33662627894" style={{ textDecoration: 'none' }}>
                          <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                            +33 6 62 62 78 94
                          </Typography>
                        </Link>
                      </Box>
                    </Stack>
                  </ConnEthicsCard>

                  <ConnEthicsCard variant="outlined" sx={{ p: 3 }}>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{ p: 1.5, bgcolor: 'primary.50', borderRadius: 2, color: 'primary.main' }}>
                        <MapPinIcon className="h-6 w-6" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700 }}>
                          Headquarters
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          21 rue Paul Déroulède
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          92270 Bois-Colombes, France
                        </Typography>
                      </Box>
                    </Stack>
                  </ConnEthicsCard>
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <ClockIcon className="h-5 w-5 text-primary-600" />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Operational Hours
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Monday — Friday<br />
                  09:00 — 18:00 CET (Paris Time)
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Strategy Session */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <ConnEthicsCard variant="elevated" sx={{ p: { xs: 4, md: 6 }, height: '100%', bgcolor: 'primary.900', color: 'white' }}>
              <Box sx={{ mb: 6 }}>
                <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
                  STRATEGY SESSION
                </Typography>
                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
                  Book a Briefing
                </Typography>
                <Typography variant="body1" sx={{ color: 'primary.100', fontSize: '1.125rem', lineHeight: 1.7 }}>
                  No sales pitch. No fluff. A 30-minute high-level assessment of your ecosystem&apos;s vulnerabilities and opportunities.
                </Typography>
              </Box>

              <Box sx={{ mb: 8, p: 4, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 3, border: '1px solid', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600 }}>
                  Mission Parameters:
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Reconnaissance of your current challenges",
                    "Tactical analysis of potential solutions",
                    "Strategic roadmap proposal",
                    "Q&A on specific ethical/technical vectors"
                  ].map((item, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                      <Box sx={{ mt: 0.5, color: 'primary.400' }}>
                        <ChatBubbleLeftRightIcon className="h-5 w-5" />
                      </Box>
                      <Typography variant="body1" sx={{ color: 'primary.50' }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Link 
                  href="https://calendar.app.google/YQyuLxBmRGoU9WSB9"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  legacyBehavior
                >
                  <ConnEthicsButton 
                    variant="primary" 
                    size="large" 
                    fullWidth
                    sx={{ 
                      py: 2, 
                      fontSize: '1.125rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      bgcolor: 'white',
                      color: 'primary.900',
                      '&:hover': {
                        bgcolor: 'primary.50'
                      }
                    }}
                  >
                    <CalendarDaysIcon className="h-6 w-6" />
                    Secure Your Slot
                  </ConnEthicsButton>
                </Link>
                <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'primary.200' }}>
                  External link to Google Calendar
                </Typography>
              </Box>
            </ConnEthicsCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
