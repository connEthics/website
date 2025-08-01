'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Chip, Stack, Divider, Card, CardContent } from '@mui/material';

export default function ProductLeadershipArticle() {
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
              label="8 min read"
              variant="outlined"
              size="small"
            />
            <Chip
              icon={<CalendarIcon style={{ width: 16, height: 16 }} />}
              label="July 10, 2025"
              variant="outlined"
              size="small"
            />
          </Stack>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
            Product Leadership in Ethical Business Ecosystems
          </Typography>
          
          <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            Aligning product roadmaps with ethical frameworks while maintaining competitive advantage 
            and driving innovation in complex business ecosystems.
          </Typography>
        </Box>

        {/* Article Content */}
        <Box component="article">
          <Typography variant="body1" paragraph>
            Product leadership in today&apos;s business environment extends far beyond feature development 
            and market positioning. It requires navigating complex ethical considerations while building 
            products that create sustainable value for all stakeholders in increasingly interconnected 
            business ecosystems.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Evolution of Product Leadership
          </Typography>

          <Typography variant="body1" paragraph>
            Traditional product management focused primarily on user needs, market fit, and competitive 
            positioning. However, modern product leaders must consider broader implications of their decisions.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Conclusion
          </Typography>

          <Typography variant="body1" paragraph>
            Product leadership in ethical business ecosystems requires a fundamental shift in how we approach 
            product development. By integrating ethical frameworks, expanding stakeholder considerations, and 
            implementing systematic approaches to ethical decision-making, product leaders can create sustainable 
            value while maintaining competitive advantage.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
