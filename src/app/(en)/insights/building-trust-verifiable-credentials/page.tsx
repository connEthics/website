'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Chip, Stack, Divider, Card, CardContent } from '@mui/material';
import ArticleHeader from '@/components/ArticleHeader';

export default function VerifiableCredentialsArticle() {
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
          title="Building Trust Through Verifiable Credentials"
          description="How organizations can implement verifiable credential systems to enhance trust and streamline identity verification processes while maintaining privacy and security."
          tags={["Trust & Identity", "Verifiable Credentials", "Privacy", "Security"]}
          targetAudience="Business Leaders, Compliance Officers, Product Managers"
          keyTakeaways={[
            "The Trust Triangle model",
            "Business benefits of VCs",
            "Implementation roadmap",
            "Success metrics"
          ]}
          difficulty="Beginner"
          readTime="6 min read"
          publishedDate="July 15, 2025"
        />

        {/* Article Content */}
        <Box component="article">
          <Typography variant="body1" paragraph>
            Trust is broken. In the physical world, we rely on plastic cards and paper documents. In the digital world, we rely on centralized giants to vouch for us. Neither system is working. Identity fraud is skyrocketing, and privacy is eroding.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Verifiable Credentials (VCs) are not just a new file format; they are a fundamental restructuring of digital trust. They allow you to prove who you are (or what you know) without revealing everything about yourself, and without phoning home to a central authority.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Why the Old Model is Failing You
          </Typography>

          <Typography variant="body1" paragraph>
            If you are a business leader, you are likely trapped in a costly dilemma: verification is expensive, slow, and creates a &quot;honeypot&quot; of personal data that hackers love.
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>The Liability Trap:</strong> Storing user data makes you a target.</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>The Friction Tax:</strong> Every second a user spends verifying their ID is a second they might churn.</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>The Silo Problem:</strong> Your verification doesn&apos;t work elsewhere, and vice versa.</Typography>
          </Box>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Trust Triangle: A New Paradigm
          </Typography>

          <Typography variant="body1" paragraph>
            To understand VCs, you need to understand the shift in power. In the old world, the Verifier held the power (and the data). In the new world, the Holder (User) is in control.
          </Typography>

          <Card sx={{ my: 4, bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 3, fontWeight: 600 }}>
                The Architecture of Trust
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ mr: 2, fontSize: '1.2rem' }}>📋</Typography>
                  <Typography variant="body2">
                    <strong>Issuer:</strong> The source of truth (e.g., University). They sign the credential, but they don&apos;t track its usage.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ mr: 2, fontSize: '1.2rem' }}>👤</Typography>
                  <Typography variant="body2">
                    <strong>Holder:</strong> The User. They store the credential in their wallet. They decide who sees it and when.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ mr: 2, fontSize: '1.2rem' }}>✅</Typography>
                  <Typography variant="body2">
                    <strong>Verifier:</strong> You. You verify the cryptographic signature, not the user&apos;s life story. Instant trust, zero liability.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            From Theory to Practice: Where to Start?
          </Typography>

          <Typography variant="body1" paragraph>
            We often see organizations paralyzed by the complexity of SSI. Our advice? Start small, but think big.
          </Typography>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            The &quot;Low Hanging Fruit&quot; Use Cases
          </Typography>
          
          <Card sx={{ mb: 3, bgcolor: 'grey.50' }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                <strong>Employee Onboarding:</strong> Issue a VC to your new hires. Let them use it to access the building, log in to Slack, and prove employment to a bank. It is a controlled environment perfect for a pilot.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3, bgcolor: 'grey.50' }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                <strong>B2B Supplier Verification:</strong> Stop emailing PDFs of ISO certifications. Issue VCs to your compliant suppliers. Automate your supply chain risk management.
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Technical Reality Check
          </Typography>

          <Typography variant="body1" paragraph>
            Implementing VCs isn&apos;t just about installing a library. It requires a rethink of your architecture.
          </Typography>

          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Schema Governance:</strong> Who defines what a &quot;Diploma&quot; looks like? You need to agree on standards (W3C, DIF) before you code.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Key Management:</strong> If the user loses their key, do they lose their identity? You need a recovery strategy that doesn&apos;t rely on a central &quot;God mode&quot;.
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Interoperability:</strong> Don&apos;t build a walled garden. Ensure your VCs can be stored in standard wallets (Apple Wallet, specialized SSI wallets).
            </Typography>
          </Box>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Conclusion
          </Typography>

          <Typography variant="body1" paragraph>
            Verifiable Credentials are coming. They are in the EU Digital Identity Wallet regulation (eIDAS 2.0). They are in the W3C standards. The question is: will you be a leader who shapes this ecosystem, or a follower scrambling to comply?
          </Typography>

          <Typography variant="body1" paragraph>
            At ConnEthics, we help you navigate this shift. We build the bridge between the cryptographic complexity and your business reality. Let&apos;s build a web of trust, together.
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
                Specialists in Trust & Identity solutions and verifiable credentials
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
                <Link href="/insights/competitive-intelligence-digital-age" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Chip 
                    label="Ecosystem Cartography" 
                    color="primary" 
                    size="small" 
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    Competitive Intelligence in the Digital Age
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Understanding economic warfare analysis and strategic advantages...
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
