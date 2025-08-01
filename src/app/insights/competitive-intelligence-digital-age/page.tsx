'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Chip, Stack, Divider, Card, CardContent } from '@mui/material';

export default function CompetitiveIntelligenceArticle() {
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
            <Link href="/insights?filter=Ecosystem Cartography" style={{ textDecoration: 'none' }}>
              <Chip
                icon={<TagIcon style={{ width: 16, height: 16 }} />}
                label="Ecosystem Cartography"
                color="primary"
                size="small"
                clickable
                sx={{ '&:hover': { bgcolor: 'primary.dark' } }}
              />
            </Link>
            <Chip
              icon={<ClockIcon style={{ width: 16, height: 16 }} />}
              label="7 min read"
              variant="outlined"
              size="small"
            />
            <Chip
              icon={<CalendarIcon style={{ width: 16, height: 16 }} />}
              label="July 20, 2025"
              variant="outlined"
              size="small"
            />
          </Stack>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
            Competitive Intelligence in the Digital Age
          </Typography>
          
          <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            Understanding economic warfare analysis and how modern businesses can gain strategic advantages 
            through comprehensive ecosystem mapping and competitive intelligence.
          </Typography>
        </Box>

        {/* Article Content */}
        <Box component="article">
          <Typography variant="body1" paragraph>
            In today&apos;s interconnected business landscape, competitive intelligence has evolved from simple 
            market research to sophisticated ecosystem analysis. Organizations must now understand not just 
            their direct competitors, but the entire ecosystem of stakeholders, influencers, and market forces 
            that shape their competitive environment.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Evolution of Competitive Intelligence
          </Typography>

          <Typography variant="body1" paragraph>
            Traditional competitive analysis focused on direct competitors and market share. Modern competitive 
            intelligence encompasses a broader view that includes:
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Digital ecosystem participants and their relationships</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Technology convergence and disruption patterns</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Regulatory and policy influence networks</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Customer journey touchpoints across the ecosystem</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Data flows and information asymmetries</Typography>
          </Box>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Economic Warfare Analysis Framework
          </Typography>

          <Typography variant="body1" paragraph>
            Economic warfare analysis provides a structured approach to understanding competitive dynamics 
            in digital markets where traditional boundaries are increasingly blurred.
          </Typography>

          <Card sx={{ my: 4, bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 3, fontWeight: 600 }}>
                Strategic Intelligence Layers
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L1</Typography>
                  <Typography variant="body2">
                    <strong>Market Position:</strong> Direct competitor analysis and market share dynamics
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L2</Typography>
                  <Typography variant="body2">
                    <strong>Ecosystem Mapping:</strong> Stakeholder relationships and value chain analysis
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L3</Typography>
                  <Typography variant="body2">
                    <strong>Influence Networks:</strong> Power structures and decision-making pathways
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L4</Typography>
                  <Typography variant="body2">
                    <strong>Future Scenarios:</strong> Emerging threats and opportunity landscapes
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Digital Age Intelligence Gathering
          </Typography>

          <Typography variant="body1" paragraph>
            Modern competitive intelligence leverages digital tools and methodologies to gather, analyze, 
            and act on strategic information in real-time.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Implementation Strategy
          </Typography>

          <Typography variant="body1" paragraph>
            Building effective competitive intelligence capabilities requires systematic implementation:
          </Typography>

          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Establish Intelligence Requirements:</strong> Define what information is needed for strategic decisions
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Build Collection Networks:</strong> Develop systematic approaches to information gathering
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Implement Analysis Frameworks:</strong> Use structured methodologies to interpret intelligence
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Create Action Protocols:</strong> Establish processes for acting on intelligence insights
            </Typography>
          </Box>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Conclusion
          </Typography>

          <Typography variant="body1" paragraph>
            Competitive intelligence in the digital age requires a comprehensive understanding of business 
            ecosystems and the ability to analyze complex relationships and power dynamics. Organizations 
            that master these capabilities will be better positioned to navigate competitive challenges and 
            identify strategic opportunities.
          </Typography>

          <Typography variant="body1" paragraph>
            Success in this domain depends on combining traditional analytical skills with modern digital 
            tools and maintaining an ethical approach to intelligence gathering and analysis.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Author & Sharing */}
        <Box sx={{ py: 4 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                ConnEthics Team
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Experts in Ecosystem Cartography and competitive intelligence frameworks
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Related Articles */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
            Related Insights
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Card sx={{ flex: 1, '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.2s ease' }}>
              <CardContent>
                <Link href="/insights/future-self-sovereign-identity-enterprise" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Chip 
                    label="Self-Sovereign Identity" 
                    color="primary" 
                    size="small" 
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    The Future of Self-Sovereign Identity in Enterprise
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Exploring how SSI will transform enterprise identity management...
                  </Typography>
                </Link>
              </CardContent>
            </Card>
            
            <Card sx={{ flex: 1, '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.2s ease' }}>
              <CardContent>
                <Link href="/insights/building-trust-verifiable-credentials" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Chip 
                    label="Trust & Identity" 
                    color="primary" 
                    size="small" 
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    Building Trust Through Verifiable Credentials
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    How organizations can implement verifiable credential systems...
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
