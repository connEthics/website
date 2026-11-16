'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Chip, Stack, Divider, Card, CardContent } from '@mui/material';
import ArticleHeader from '@/components/ArticleHeader';

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
        <ArticleHeader 
          title="Product Leadership in Ethical Business Ecosystems"
          description="Aligning product roadmaps with ethical frameworks while maintaining competitive advantage and driving innovation in complex business ecosystems."
          tags={["Product Leadership", "Ethics", "Innovation", "Strategy"]}
          targetAudience="Product Leaders, CPOs, Innovation Managers"
          keyTakeaways={[
            "Evolution of product leadership",
            "Ethical decision-making frameworks",
            "Stakeholder value creation",
            "Sustainable innovation strategies"
          ]}
          difficulty="Intermediate"
          readTime="8 min read"
          publishedDate="July 10, 2025"
        />

        {/* Article Content */}
        <Box component="article">
          <Typography variant="body1" paragraph>
            You are no longer just building features; you are shaping ecosystems. In a world where every digital interaction has a ripple effect, Product Leadership has morphed into a role of ethical stewardship. The question is no longer just &quot;Can we build it?&quot; or &quot;Will it sell?&quot;, but &quot;Should we build it?&quot; and &quot;What is the cost to the ecosystem?&quot;.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Shift: From Feature Factory to Ecosystem Steward
          </Typography>

          <Typography variant="body1" paragraph>
            We have all been there: the pressure to deliver, the race for engagement metrics, the sprint to the next release. Traditional product management often trapped us in a &quot;Feature Factory&quot; mindset, focusing on output rather than outcome.
          </Typography>
          
          <Typography variant="body1" paragraph>
            But the landscape has changed. Users are demanding transparency. Regulators are scrutinizing algorithms. Your product does not exist in a vacuum; it lives in a complex web of stakeholders, from your supply chain to your user&apos;s mental health.
          </Typography>

          <Card sx={{ my: 4, bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                The New Product Mandate
              </Typography>
              <Typography variant="body2">
                <strong>Old Way:</strong> &quot;Move fast and break things.&quot;<br/>
                <strong>New Way:</strong> &quot;Move purposefully and build resilience.&quot;
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Radical Pragmatism: Operationalizing Ethics
          </Typography>

          <Typography variant="body1" paragraph>
            Let&apos;s be honest: &quot;Ethics&quot; can feel like a buzzword that dies in the backlog. How do you make it actionable? At ConnEthics, we believe in integrating ethical frameworks directly into your product rituals.
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Consequence Scanning:</strong> Before a line of code is written, ask: &quot;What are the unintended consequences of this feature?&quot; Make this a standard part of your PRD.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Stakeholder Mapping 2.0:</strong> Go beyond the user. Map the impact on the community, the environment, and the marginalized.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>The &quot;Front Page&quot; Test:</strong> If your decision was on the front page of a major newspaper tomorrow, would you be proud?
            </Typography>
          </Box>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Building Trust as a Competitive Advantage
          </Typography>

          <Typography variant="body1" paragraph>
            Ethical leadership is not a tax on innovation; it is your greatest differentiator. In an era of data breaches and dark patterns, trust is the ultimate currency. Products built on integrity retain users longer and navigate regulatory waters with ease.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Conclusion
          </Typography>

          <Typography variant="body1" paragraph>
            The future belongs to leaders who build trust, not just products. By embracing your role as an ecosystem steward, you don&apos;t just protect your business; you elevate it. It starts with a simple choice in your next sprint planning: to prioritize the long-term health of your ecosystem over short-term gains.
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
