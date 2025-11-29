'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, ShieldCheckIcon, EyeIcon, UserIcon, DocumentTextIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from '@/components/mui';
import Link from 'next/link';

export default function Privacy() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    summary: true,
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const summaryPoints = [
    {
      icon: <UserIcon className="h-5 w-5" />,
      title: "What we collect",
      description: "Name, email, phone number when you contact us"
    },
    {
      icon: <EyeIcon className="h-5 w-5" />,
      title: "How we use it",
      description: "To respond to your inquiries and improve our services"
    },
    {
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      title: "How we protect it",
      description: "Industry-standard security measures and French hosting"
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      title: "Your rights",
      description: "Access, correct, or delete your data anytime"
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Privacy Policy"
        subtitle="DATA_PROTECTION"
        description="We believe in transparency. Here's how we handle your personal information with care and respect."
      />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Privacy at a Glance */}
        <Box sx={{ mb: 6 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              mb: 3
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <DocumentTextIcon className="h-6 w-6 text-primary-600" />
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 700, 
                  letterSpacing: 2,
                  fontFamily: 'monospace'
                }}
              >
                PRIVACY_AT_GLANCE
              </Typography>
            </Box>
            <Button
              onClick={() => toggleSection('summary')}
              sx={{ color: 'primary.main', minWidth: 'auto' }}
            >
              {expandedSections.summary ? (
                <ChevronDownIcon className="h-5 w-5" />
              ) : (
                <ChevronRightIcon className="h-5 w-5" />
              )}
            </Button>
          </Box>
          
          {expandedSections.summary && (
            <Grid container spacing={3}>
              {summaryPoints.map((point, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ConnEthicsCard variant="blueprint" sx={{ p: 3 }}>
                    <Stack direction="row" spacing={3} alignItems="flex-start">
                      <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                        {point.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {point.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {point.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </ConnEthicsCard>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* Quick Actions */}
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
            QUICK_ACTIONS
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Link href="mailto:dpo@connethics.com?subject=Data%20Access%20Request">
              <ConnEthicsButton variant="primary">
                Request My Data
              </ConnEthicsButton>
            </Link>
            <Link href="mailto:dpo@connethics.com?subject=Data%20Deletion%20Request">
              <ConnEthicsButton variant="outline">
                Delete My Data
              </ConnEthicsButton>
            </Link>
            <Link href="mailto:dpo@connethics.com?subject=Privacy%20Question">
              <ConnEthicsButton variant="outline">
                Ask a Question
              </ConnEthicsButton>
            </Link>
          </Stack>
        </Box>

        {/* Collapsible Sections */}
        <Stack spacing={3}>
          {/* Introduction */}
          <CollapsibleSection
            id="introduction"
            title="Introduction"
            icon={<DocumentTextIcon className="h-5 w-5" />}
            isExpanded={expandedSections.introduction}
            onToggle={() => toggleSection('introduction')}
          >
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              This Privacy Policy describes our policies and procedures on the collection, use, and disclosure 
              of your information when you use our service. We&apos;ll tell you about your privacy rights and how 
              the law protects you.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              We use your personal data to provide and improve our service. By using our service, you agree 
              to the collection and use of information in accordance with this Privacy Policy.
            </Typography>
          </CollapsibleSection>

          {/* What We Collect */}
          <CollapsibleSection
            id="collect"
            title="What Information We Collect"
            icon={<UserIcon className="h-5 w-5" />}
            isExpanded={expandedSections.collect}
            onToggle={() => toggleSection('collect')}
          >
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'text.secondary', mb: 2 }}>
                    {'// PERSONAL_INFO'}
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Name and email address (when contacting us)</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Phone number (if you choose to provide it)</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Company information (for business inquiries)</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Message content (in consultation requests)</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'text.secondary', mb: 2 }}>
                    {'// AUTO_COLLECTED'}
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Device information (browser type, operating system)</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Usage data (pages visited, time spent)</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• IP address and location data</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>• Cookies and similar technologies</Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </CollapsibleSection>

          {/* How We Use Information */}
          <CollapsibleSection
            id="use"
            title="How We Use Your Information"
            icon={<EyeIcon className="h-5 w-5" />}
            isExpanded={expandedSections.use}
            onToggle={() => toggleSection('use')}
          >
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 3, bgcolor: 'primary.50', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'primary.main', mb: 2 }}>
                    {'// PRIMARY_USES'}
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" sx={{ color: 'primary.900' }}>• Respond to your inquiries</Typography>
                    <Typography variant="body2" sx={{ color: 'primary.900' }}>• Provide consultation services</Typography>
                    <Typography variant="body2" sx={{ color: 'primary.900' }}>• Send service updates</Typography>
                  </Stack>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 3, bgcolor: 'success.50', borderRadius: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontFamily: 'monospace', color: 'success.main', mb: 2 }}>
                    {'// IMPROVEMENT_USES'}
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2" sx={{ color: 'success.900' }}>• Analyze website usage</Typography>
                    <Typography variant="body2" sx={{ color: 'success.900' }}>• Improve our services</Typography>
                    <Typography variant="body2" sx={{ color: 'success.900' }}>• Develop new features</Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </CollapsibleSection>

          {/* Data Security */}
          <CollapsibleSection
            id="security"
            title="How We Protect Your Data"
            icon={<ShieldCheckIcon className="h-5 w-5" />}
            isExpanded={expandedSections.security}
            onToggle={() => toggleSection('security')}
          >
            <Stack spacing={4}>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <Box sx={{ color: 'success.main', mt: 0.5 }}>
                  <GlobeAltIcon className="h-6 w-6" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>French Data Hosting</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Your data is hosted on French territory (Paris region) in compliance with European data protection standards.
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={3} alignItems="flex-start">
                <Box sx={{ color: 'primary.main', mt: 0.5 }}>
                  <ShieldCheckIcon className="h-6 w-6" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Security Measures</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    We use industry-standard encryption, secure data transmission, and regular security audits to protect your information.
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ p: 3, bgcolor: 'warning.50', borderRadius: 1, border: '1px solid', borderColor: 'warning.200' }}>
                <Typography variant="body2" sx={{ color: 'warning.900' }}>
                  <strong>Important:</strong> While we implement strong security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </Typography>
              </Box>
            </Stack>
          </CollapsibleSection>

          {/* Your Rights */}
          <CollapsibleSection
            id="rights"
            title="Your Privacy Rights"
            icon={<ClockIcon className="h-5 w-5" />}
            isExpanded={expandedSections.rights}
            onToggle={() => toggleSection('rights')}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>Under GDPR, you have the right to:</Typography>
                <Stack spacing={1.5}>
                  {[
                    { right: 'Access', desc: 'your personal data' },
                    { right: 'Correct', desc: 'inaccurate information' },
                    { right: 'Delete', desc: 'your data' },
                    { right: 'Restrict', desc: 'processing' },
                    { right: 'Data portability', desc: '' },
                    { right: 'Object', desc: 'to processing' },
                  ].map((item, index) => (
                    <Stack key={index} direction="row" spacing={1.5} alignItems="flex-start">
                      <Typography sx={{ color: 'primary.main' }}>✓</Typography>
                      <Typography variant="body2">
                        <strong>{item.right}</strong>{item.desc && ` ${item.desc}`}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>How to exercise your rights:</Typography>
                <Stack spacing={2}>
                  <Link href="mailto:dpo@connethics.com" style={{ textDecoration: 'none' }}>
                    <Box sx={{ p: 2, bgcolor: 'primary.50', borderRadius: 1, border: '1px solid', borderColor: 'primary.200', '&:hover': { bgcolor: 'primary.100' } }}>
                      <Typography variant="subtitle2" sx={{ color: 'primary.900' }}>Email our DPO</Typography>
                      <Typography variant="body2" sx={{ color: 'primary.700' }}>dpo@connethics.com</Typography>
                    </Box>
                  </Link>
                  <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1, border: '1px solid', borderColor: 'divider' }}>
                    <Typography variant="subtitle2">Response Time</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>We&apos;ll respond within 30 days</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </CollapsibleSection>

          {/* Contact */}
          <CollapsibleSection
            id="contact"
            title="Questions or Concerns?"
            icon={<DocumentTextIcon className="h-5 w-5" />}
            isExpanded={expandedSections.contact}
            onToggle={() => toggleSection('contact')}
          >
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
                <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>We&apos;re Here to Help</Typography>
                <Typography variant="body2" sx={{ color: 'grey.400', mb: 3 }}>
                  Have questions about this privacy policy or how we handle your data?
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                  <Link href="mailto:dpo@connethics.com">
                    <ConnEthicsButton 
                      variant="primary"
                      sx={{ bgcolor: 'white', color: 'grey.900', '&:hover': { bgcolor: 'grey.100' } }}
                    >
                      Contact DPO
                    </ConnEthicsButton>
                  </Link>
                  <Link href="/contact">
                    <ConnEthicsButton 
                      variant="outline"
                      sx={{ borderColor: 'grey.600', color: 'grey.300', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}
                    >
                      General Contact
                    </ConnEthicsButton>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </CollapsibleSection>
        </Stack>

        {/* Footer */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            Last updated: July 30, 2025
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            This privacy policy is designed to be clear and accessible. If you need clarification on any point, please don&apos;t hesitate to contact us.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

// Collapsible Section Component
interface CollapsibleSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

function CollapsibleSection({ title, icon, children, isExpanded, onToggle }: CollapsibleSectionProps) {
  return (
    <ConnEthicsCard variant="blueprint" sx={{ overflow: 'hidden' }}>
      <Box
        component="button"
        onClick={onToggle}
        sx={{
          width: '100%',
          px: 3,
          py: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          '&:hover': { bgcolor: 'grey.50' },
          transition: 'background-color 0.2s'
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ color: 'primary.main' }}>{icon}</Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>
        </Stack>
        {isExpanded ? (
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        )}
      </Box>
      {isExpanded && (
        <Box sx={{ px: 3, pb: 3 }}>
          {children}
        </Box>
      )}
    </ConnEthicsCard>
  );
}
