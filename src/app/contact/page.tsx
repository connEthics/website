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
        variant="deep-ocean"
        title="Initiate Protocol"
        subtitle="SECURE CHANNEL"
        description="Ready to architect your eIDAS 2.0 strategy? Secure a briefing with our team to assess your opportunities and define the parameters of your engagement."
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={8}>
          {/* Left Column: Direct Comms & HQ */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack spacing={6}>
              <Box>
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
                  DIRECT CHANNELS
                </Typography>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 4 }}>
                  Secure Comms
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, lineHeight: 1.8 }}>
                  For immediate tactical inquiries or partnership proposals. We prioritize encrypted and secure communication channels.
                </Typography>

                <Stack spacing={4}>
                  <ConnEthicsCard variant="blueprint" sx={{ p: 3 }}>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{ p: 1.5, bgcolor: 'primary.50', borderRadius: 2, color: 'primary.main' }}>
                        <EnvelopeIcon className="h-6 w-6" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'monospace' }}>
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

                  <ConnEthicsCard variant="blueprint" sx={{ p: 3 }}>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{ p: 1.5, bgcolor: 'primary.50', borderRadius: 2, color: 'primary.main' }}>
                        <PhoneIcon className="h-6 w-6" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'monospace' }}>
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

                  <ConnEthicsCard variant="blueprint" sx={{ p: 3 }}>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Box sx={{ p: 1.5, bgcolor: 'primary.50', borderRadius: 2, color: 'primary.main' }}>
                        <MapPinIcon className="h-6 w-6" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, fontFamily: 'monospace' }}>
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
            <Box 
              sx={{ 
                p: { xs: 4, md: 6 }, 
                height: '100%', 
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#030712' : '#0f172a',
                color: 'white',
                borderRadius: '4px',
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
                    mb: 2, 
                    display: 'block',
                    fontFamily: 'monospace'
                  }}
                >
                  STRATEGY_SESSION
                </Typography>
                <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
                  Book a Briefing
                </Typography>
                <Typography variant="body1" sx={{ color: 'grey.400', fontSize: '1.125rem', lineHeight: 1.7, mb: 6 }}>
                  No sales pitch. No fluff. A 30-minute high-level assessment of your eIDAS 2.0 opportunities and ecosystem&apos;s vulnerabilities.
                </Typography>

                <Box sx={{ mb: 8, p: 4, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 1, border: '1px solid', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <Typography variant="h6" sx={{ color: 'white', mb: 3, fontWeight: 600, fontFamily: 'monospace' }}>
                    {'// Mission Parameters:'}
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      "Reconnaissance of your current identity stack",
                      "Tactical analysis of eIDAS 2.0 impact",
                      "Strategic roadmap proposal",
                      "Q&amp;A on specific technical vectors"
                    ].map((item, index) => (
                      <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
                        <Box sx={{ mt: 0.5, color: 'primary.400' }}>
                          <ChatBubbleLeftRightIcon className="h-5 w-5" />
                        </Box>
                        <Typography variant="body1" sx={{ color: 'grey.300' }}>
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
                    style={{ textDecoration: 'none' }}
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
                        color: 'grey.900',
                        fontFamily: 'monospace',
                        '&:hover': {
                          bgcolor: 'grey.100'
                        }
                      }}
                    >
                      <CalendarDaysIcon className="h-6 w-6" />
                      INITIALIZE →
                    </ConnEthicsButton>
                  </Link>
                  <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'grey.500' }}>
                    External link to Google Calendar
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
