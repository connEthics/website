import Link from "next/link";
import { ShieldCheckIcon, LightBulbIcon, WrenchScrewdriverIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from "@/components/mui";
import { articles } from "@/lib/articles";

export default function Home() {
  const pillars = [
    {
      title: "Knowledge Engineering",
      description: "Transform your tacit knowledge into a strategic asset. We extract context where it lives to feed your Sovereign AI without errors.",
      icon: LightBulbIcon,
      link: "/services#knowledge-engineering"
    },
    {
      title: "Debt Alignment", 
      description: "Unleash your value stream. We treat technical debt as a financial investment: we only pay back what yields a return or what costs too much in friction.",
      icon: WrenchScrewdriverIcon,
      link: "/services#debt-alignment"
    },
    {
      title: "Ecosystem Identity",
      description: "Turn compliance into a competitive edge. A hybrid approach to navigate trust disruptions (eIDAS 2.0) and position your ecosystem for the future.",
      icon: ShieldCheckIcon,
      link: "/services#ecosystem-identity"
    },
  ];

  // Get the 3 most recent articles
  const latestArticles = articles.slice(0, 3);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* 1. Hero Section */}
      <ConnEthicsHero
        title="Turn Compliance into Competitive Advantage"
        subtitle="eIDAS 2.0 Strategy Consulting"
        description="The European Digital Identity Wallet is not just a regulation—it's a Blue Ocean opportunity. We help you lower KYC costs, boost conversion, and build trust with Reusable Identity."
        primaryAction={{
          label: "Start Your Journey",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Our Services", 
          href: "/services"
        }}
        variant="deep-ocean"
      />

      {/* 2. The Shift (Manifesto) */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Box 
            sx={{ 
              textAlign: 'left', 
              pl: { xs: 2, md: 4 }, 
              borderLeft: '4px solid', 
              borderColor: 'primary.main' 
            }}
          >
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
              THE SHIFT
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', fontSize: { xs: '2rem', md: '3rem' } }}>
              The Rules of the Game Have Changed.
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 4, fontWeight: 500 }}>
              eIDAS 2.0 is shifting the power from platforms to people.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 6 }}>
              The drop in KYC barriers is a massive opportunity for those who move fast. 
              We move you from &quot;Managing Users&quot; to &quot;Empowering Holders&quot;. We provide the <strong>strategic intelligence</strong> and <strong>technical blueprints</strong> to turn this regulatory shift into your biggest growth engine.
            </Typography>
            <Link href="/about">
              <ConnEthicsButton variant="outline" size="large">
                Read Our Manifesto
              </ConnEthicsButton>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* 3. Strategic Pillars */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              Strategic Pillars
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', fontWeight: 400 }}>
              We don&apos;t just offer services; we provide a strategic framework for survival and growth.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <ConnEthicsCard variant="blueprint" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 4, flexGrow: 1 }}>
                      <Box 
                        sx={{ 
                          width: 56, 
                          height: 56, 
                          bgcolor: 'white', 
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 1, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          mb: 3
                        }}
                      >
                        <IconComponent className="h-7 w-7 text-primary-700" strokeWidth={2} />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700, letterSpacing: '-0.02em' }}>
                        {pillar.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
                        {pillar.description}
                      </Typography>
                    </Box>
                    <Box sx={{ p: 4, pt: 0 }}>
                      <Link href={pillar.link}>
                        <Typography 
                          component="span" 
                          sx={{ 
                            color: 'primary.main', 
                            fontWeight: 700, 
                            display: 'flex', 
                            alignItems: 'center',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            '&:hover': { textDecoration: 'underline' }
                          }}
                        >
                          Explore <ArrowRightIcon className="h-4 w-4 ml-2" strokeWidth={2.5} />
                        </Typography>
                      </Link>
                    </Box>
                  </ConnEthicsCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 4. Latest Intelligence */}
      <Box sx={{ py: 6, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 8 }}>
            <Box>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
                INSIGHTS
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 700 }}>
                Latest Intelligence
              </Typography>
            </Box>
            <Link href="/insights">
              <ConnEthicsButton variant="outline" size="medium" sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
                View All Insights
              </ConnEthicsButton>
            </Link>
          </Stack>

          <Grid container spacing={4}>
            {latestArticles.map((article, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <ConnEthicsCard variant="outlined" sx={{ height: '100%', '&:hover': { borderColor: 'primary.main' }, transition: 'border-color 0.2s' }}>
                  <Box sx={{ p: 3 }}>
                    <Chip 
                      label={article.category} 
                      size="small" 
                      sx={{ mb: 2, bgcolor: 'primary.50', color: 'primary.main', fontWeight: 600 }} 
                    />
                    <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600, lineHeight: 1.4 }}>
                      <Link href={`/insights/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {article.title}
                      </Link>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {article.excerpt}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 500 }}>
                      {article.date} • {article.readTime}
                    </Typography>
                  </Box>
                </ConnEthicsCard>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 6, textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
            <Link href="/insights">
              <ConnEthicsButton variant="outline" size="medium" fullWidth>
                View All Insights
              </ConnEthicsButton>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* 5. Footer CTA */}
      <Box sx={{ py: 6, bgcolor: 'primary.900', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Join the Vanguard
          </Typography>
          <Typography variant="h6" sx={{ color: 'primary.100', mb: 6, fontWeight: 400, lineHeight: 1.6 }}>
            The future belongs to those who build it with integrity. <br />
            Ready to architect your ecosystem?
          </Typography>
          <Link href="/contact">
            <ConnEthicsButton 
              variant="primary" 
              size="large" 
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.900',
                px: 6,
                '&:hover': { bgcolor: 'primary.50' }
              }}
            >
              Start the Conversation
            </ConnEthicsButton>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
