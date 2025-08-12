'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, CalendarIcon, TagIcon, LightBulbIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Chip, Stack, Divider, Card, CardContent, Grid, Alert } from '@mui/material';

export default function ProductDiscoveryOpportunityTreeArticle() {
  return (
    <Box sx={{ minHeight: '100vh', py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        {/* Back Navigation */}
        <Link href="/insights" style={{ textDecoration: 'none' }}>
          <Box 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              color: 'primary.main', 
              mb: 4,
              '&:hover': { color: 'primary.dark' },
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowLeftIcon style={{ width: 16, height: 16, marginRight: 8 }} />
            Back to Insights
          </Box>
        </Link>

        {/* Article Header */}
        <Box component="header" sx={{ mb: 8 }}>
          <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            <Link href="/insights?filter=Product Leadership" style={{ textDecoration: 'none' }}>
              <Chip
                icon={<TagIcon style={{ width: 16, height: 16 }} />}
                label="Product Leadership"
                color="primary"
                size="small"
                clickable
                sx={{ '&:hover': { bgcolor: 'primary.dark' } }}
              />
            </Link>
            <Chip
              icon={<ClockIcon style={{ width: 16, height: 16 }} />}
              label="12 min read"
              variant="outlined"
              size="small"
            />
            <Chip
              icon={<CalendarIcon style={{ width: 16, height: 16 }} />}
              label="January 10, 2025"
              variant="outlined"
              size="small"
            />
          </Stack>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
            Product Discovery Method with Opportunity Tree Solution
          </Typography>
          
          <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            A comprehensive guide to implementing structured product discovery using opportunity trees to drive meaningful business outcomes and align teams around customer value.
          </Typography>
        </Box>

        {/* Article Content */}
        <Box component="article">
          <Typography variant="body1" paragraph>
            In today&apos;s rapidly evolving business landscape, product teams face mounting pressure to deliver not just features, but <strong>meaningful outcomes</strong> that drive business growth. The challenge isn&apos;t finding things to build—it&apos;s discovering the <em>right things</em> to build that will create sustainable competitive advantage.
          </Typography>

          <Alert severity="info" sx={{ my: 4 }}>
            <Typography variant="body2">
              <strong>Business Reality:</strong> According to recent studies, 70% of digital transformation initiatives fail not due to technology constraints, but because teams build solutions that don&apos;t address real customer problems or business opportunities.
            </Typography>
          </Alert>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Product Discovery Challenge
          </Typography>

          <Typography variant="body1" paragraph>
            Traditional product development often follows a linear path: stakeholders request features, teams build them, and hope they create value. This approach leads to several critical business challenges:
          </Typography>

          <Box sx={{ my: 4, pl: 3, borderLeft: 4, borderColor: 'primary.main' }}>
            <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              &ldquo;We were building everything our stakeholders asked for, but our key metrics weren&apos;t moving. We had lost sight of the business outcomes we were trying to achieve.&rdquo;
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              — VP of Product, Fortune 500 Technology Company
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ my: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <LightBulbIcon style={{ width: 48, height: 48, color: '#1976d2', margin: 'auto' }} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                  Feature Factory Syndrome
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Teams become efficient at building features but lose connection to business outcomes
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <UserGroupIcon style={{ width: 48, height: 48, color: '#1976d2', margin: 'auto' }} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                  Stakeholder Misalignment
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Different departments push competing priorities without shared understanding
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <ChartBarIcon style={{ width: 48, height: 48, color: '#1976d2', margin: 'auto' }} />
                <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                  Measurement Gaps
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lack of clear connection between product decisions and business metrics
                </Typography>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Opportunity Tree Solution
          </Typography>

          <Typography variant="body1" paragraph>
            The Opportunity Tree method, pioneered by Teresa Torres, provides a structured approach to product discovery that bridges the gap between business strategy and tactical execution. It creates a visual map connecting business outcomes to customer opportunities and potential solutions.
          </Typography>

          <Box sx={{ my: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              📊 The Opportunity Tree Structure
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Business Outcome</strong> (Top) → <strong>Customer Opportunities</strong> (Middle) → <strong>Solution Ideas</strong> (Bottom)
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Each level connects logically to ensure every solution idea directly contributes to addressing customer opportunities that drive business outcomes.
            </Typography>
          </Box>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 5, mb: 3 }}>
            Why Organizations Struggle with Implementation
          </Typography>

          <Typography variant="body1" paragraph>
            While the concept is straightforward, successful implementation requires addressing several organizational challenges:
          </Typography>

          <Stack spacing={3} sx={{ my: 4 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'error.main' }}>
                1. Outcome Definition Challenges
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
                Teams struggle to translate business strategy into measurable product outcomes
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'error.main' }}>
                2. Customer Research Gaps
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
                Insufficient customer interview skills and research processes to identify real opportunities
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'error.main' }}>
                3. Organizational Resistance
              </Typography>
              <Typography variant="body2" sx={{ ml: 2, color: 'text.secondary' }}>
                Existing processes and stakeholder expectations conflict with discovery-driven approaches
              </Typography>
            </Box>
          </Stack>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The ConnEthics Implementation Package
          </Typography>

          <Typography variant="body1" paragraph>
            At ConnEthics, we&apos;ve developed a comprehensive package approach that addresses these implementation challenges while ensuring sustainable adoption across your organization.
          </Typography>

          <Card sx={{ my: 4, p: 4, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
              🎯 Our 90-Day Implementation Program
            </Typography>
            
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Phase 1: Foundation (Weeks 1-4)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Business outcome alignment workshops<br/>
                  • Stakeholder mapping and interviews<br/>
                  • Current state assessment<br/>
                  • Team capability evaluation
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Phase 2: Discovery (Weeks 5-8)
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  • Customer research training<br/>
                  • Opportunity identification process<br/>
                  • First opportunity tree creation<br/>
                  • Solution ideation workshops
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Phase 3: Implementation (Weeks 9-12)
                </Typography>
                <Typography variant="body2">
                  • Pilot experiment design<br/>
                  • Measurement framework setup<br/>
                  • Team coaching and support<br/>
                  • Process optimization
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Phase 4: Scale (Ongoing)
                </Typography>
                <Typography variant="body2">
                  • Organization-wide rollout<br/>
                  • Center of excellence establishment<br/>
                  • Continuous improvement process<br/>
                  • Performance monitoring
                </Typography>
              </Grid>
            </Grid>
          </Card>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 5, mb: 3 }}>
            Business Context: When to Adopt This Approach
          </Typography>

          <Typography variant="body1" paragraph>
            The Opportunity Tree method is particularly valuable for organizations facing specific business contexts:
          </Typography>

          <Stack spacing={2} sx={{ my: 4 }}>
            <Box sx={{ p: 3, border: 1, borderColor: 'grey.300', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main', mb: 1 }}>
                ✅ Scaling Organizations
              </Typography>
              <Typography variant="body2">
                When rapid growth creates coordination challenges and teams lose sight of strategic priorities
              </Typography>
            </Box>
            <Box sx={{ p: 3, border: 1, borderColor: 'grey.300', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main', mb: 1 }}>
                ✅ Digital Transformation Initiatives
              </Typography>
              <Typography variant="body2">
                Organizations modernizing their product development capabilities to become more customer-centric
              </Typography>
            </Box>
            <Box sx={{ p: 3, border: 1, borderColor: 'grey.300', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main', mb: 1 }}>
                ✅ Market Disruption Response
              </Typography>
              <Typography variant="body2">
                Companies needing to rapidly identify new opportunities in changing competitive landscapes
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ my: 4, pl: 3, borderLeft: 4, borderColor: 'success.main' }}>
            <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              &ldquo;The opportunity tree approach helped us reduce feature development time by 40% while increasing customer satisfaction scores by 25%. More importantly, it aligned our entire product organization around clear business outcomes.&rdquo;
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              — Chief Product Officer, B2B Software Company
            </Typography>
          </Box>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Measuring Success: Key Performance Indicators
          </Typography>

          <Typography variant="body1" paragraph>
            Successful implementation is measured through both leading and lagging indicators:
          </Typography>

          <Grid container spacing={3} sx={{ my: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Leading Indicators
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>• Team alignment on outcomes (weekly surveys)</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>• Customer interview frequency</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>• Opportunity tree update cadence</Typography>
                <Typography variant="body2">• Experiment hypothesis quality</Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'success.main' }}>
                  Lagging Indicators
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>• Business outcome achievement</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>• Feature adoption rates</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>• Time to market improvements</Typography>
                <Typography variant="body2">• Customer satisfaction scores</Typography>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Getting Started: Your Next Steps
          </Typography>

          <Typography variant="body1" paragraph>
            Implementing product discovery with opportunity trees requires both methodological expertise and organizational change management. The key to success lies in taking a structured, phased approach that builds capability while delivering quick wins.
          </Typography>

          <Alert severity="warning" sx={{ my: 4 }}>
            <Typography variant="body2">
              <strong>Common Pitfall:</strong> Many organizations attempt to implement opportunity trees as a standalone tool without addressing underlying process and cultural issues. Success requires holistic organizational change.
            </Typography>
          </Alert>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Call to Action Section */}
        <Card sx={{ p: 4, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Ready to Transform Your Product Discovery Process?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            ConnEthics has helped over 50 organizations successfully implement structured product discovery methods. 
            Let us guide your transformation with our proven 90-day implementation program.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  display: 'inline-block',
                  px: 4, 
                  py: 2, 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  borderRadius: 2,
                  fontWeight: 600,
                  '&:hover': { bgcolor: 'grey.100' }
                }}
              >
                Schedule a Discovery Call
              </Typography>
            </Link>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  display: 'inline-block',
                  px: 4, 
                  py: 2, 
                  border: 2,
                  borderColor: 'white',
                  color: 'white',
                  borderRadius: 2,
                  fontWeight: 600,
                  '&:hover': { bgcolor: 'white', color: 'primary.main' }
                }}
              >
                Explore Our Services
              </Typography>
            </Link>
          </Stack>
        </Card>

        {/* Related Articles */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
            Related Insights
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Link href="/insights/aligning-product-teams-business-impact" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Chip label="Product Leadership" color="primary" size="small" sx={{ mb: 2 }} />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    Aligning Product Teams with Business Impact
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Essential strategies for aligning product teams with business impact objectives...
                  </Typography>
                </Link>
              </CardContent>
            </Card>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Link href="/insights/product-leadership-ethical-ecosystems" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Chip label="Product Leadership" color="primary" size="small" sx={{ mb: 2 }} />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    Product Leadership in Ethical Business Ecosystems
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Aligning product roadmaps with ethical frameworks while maintaining competitive advantage...
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}