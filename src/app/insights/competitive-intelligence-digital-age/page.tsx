'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Chip, Stack, Divider, Card, CardContent } from '@mui/material';
import ArticleHeader from '@/components/ArticleHeader';

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
        <ArticleHeader 
          title="Competitive Intelligence in the Digital Age"
          description="Understanding economic warfare analysis and how modern businesses can gain strategic advantages through comprehensive ecosystem mapping and competitive intelligence."
          tags={["Ecosystem Cartography", "Competitive Intelligence", "Strategy", "Analysis"]}
          targetAudience="Strategy Directors, Business Analysts, CEOs"
          keyTakeaways={[
            "Evolution of competitive intelligence",
            "Economic warfare analysis framework",
            "Strategic intelligence layers",
            "Implementation strategy"
          ]}
          difficulty="Intermediate"
          readTime="7 min read"
          publishedDate="July 20, 2025"
        />

        {/* Article Content */}
        <Box component="article">
          <Typography variant="body1" paragraph>
            The map is not the territory. In the digital age, your competitor isn&apos;t just the company selling the same product. It&apos;s the platform controlling your distribution, the regulator drafting new laws, and the algorithm deciding your visibility. Welcome to the era of Ecosystem Cartography.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Beyond Market Share: Seeing the Invisible
          </Typography>

          <Typography variant="body1" paragraph>
            Traditional competitive intelligence asks: &quot;What is their price?&quot; or &quot;What is their feature set?&quot;. This is necessary, but insufficient.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Modern intelligence asks: &quot;Who influences the standard body?&quot;, &quot;Where is the talent flowing?&quot;, and &quot;What are the hidden dependencies in our supply chain?&quot;.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Economic Warfare: It&apos;s About Survival
          </Typography>

          <Typography variant="body1" paragraph>
            The term &quot;Economic Warfare&quot; sounds aggressive, but in our view, it is about lucid survival. It is the discipline of understanding how information, law, and norms are used as weapons to gain market dominance.
          </Typography>

          <Card sx={{ my: 4, bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 3, fontWeight: 600 }}>
                The 4 Layers of Strategic Intelligence
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L1</Typography>
                  <Typography variant="body2">
                    <strong>Market Position:</strong> The visible layer. Product, Price, Promotion.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L2</Typography>
                  <Typography variant="body2">
                    <strong>Ecosystem Mapping:</strong> The structural layer. Who partners with whom? Where is the data flowing?
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L3</Typography>
                  <Typography variant="body2">
                    <strong>Influence Networks:</strong> The human layer. Who sits on which board? Who funds which think tank?
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ color: 'primary.main', mr: 2, fontWeight: 'bold', minWidth: '30px' }}>L4</Typography>
                  <Typography variant="body2">
                    <strong>Normative Power:</strong> The rules layer. Who is writing the regulations (GDPR, AI Act) that will define the market tomorrow?
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The ConnEthics Approach: Map, Analyze, Act
          </Typography>

          <Typography variant="body1" paragraph>
            We don&apos;t just deliver reports; we build capabilities. Our goal is to turn your organization into a sensing organism.
          </Typography>

          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Establish Intelligence Requirements:</strong> Stop collecting &quot;news&quot;. Define the strategic questions that keep you up at night.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Build Human Networks:</strong> Algorithms can&apos;t have coffee with a regulator. Human intelligence (HUMINT) remains king.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Create Action Protocols:</strong> Intelligence without action is trivia. We help you build the &quot;Red Phone&quot; processes to react to threats.
            </Typography>
          </Box>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Conclusion
          </Typography>

          <Typography variant="body1" paragraph>
            In a complex world, naivety is a fault. Competitive intelligence is not about spying; it is about clarity. It is about understanding the board so you can play your own game, ethically and effectively. Don&apos;t just navigate the ecosystem; map it.
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
