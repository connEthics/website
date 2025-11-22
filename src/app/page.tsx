import Link from "next/link";
import { ShieldCheckIcon, MapIcon, ChartBarIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from "@/components/mui";
import { articles } from "@/lib/articles";

export default function Home() {
  const pillars = [
    {
      title: "Identity Architecture",
      description: "The era of centralized identity is ending. We help you build the infrastructure for the user-centric future, moving from 'managing users' to 'empowering holders'.",
      icon: ShieldCheckIcon,
      link: "/services#self-sovereign-identity"
    },
    {
      title: "Strategic Intelligence", 
      description: "Your competitors are not just companies; they are ecosystems. We map the terrain—regulatory, technical, and competitive—so you can maneuver effectively.",
      icon: MapIcon,
      link: "/services#ecosystem-cartography"
    },
    {
      title: "Operational Excellence",
      description: "Execution is strategy. We optimize your delivery pipelines and team structures to ensure that what you build actually ships, on time and with quality.",
      icon: ChartBarIcon,
      link: "/services#product-management"
    },
  ];

  // Get the 3 most recent articles
  const latestArticles = articles.slice(0, 3);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* 1. Hero Section */}
      <ConnEthicsHero
        title="Architecting Trust in a Digital World"
        subtitle="ConnEthics"
        description="We help organizations navigate the complexity of the digital age. From Self-Sovereign Identity to Economic Warfare, we provide the maps and the tools to build ethical, resilient ecosystems."
        primaryAction={{
          label: "Start Your Journey",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Our Services", 
          href: "/services"
        }}
        variant="gradient"
      />

      {/* 2. The Shift (Manifesto) */}
      <Box sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
              THE SHIFT
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 6, color: 'text.primary' }}>
              The Old World is Dying.
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, fontWeight: 400 }}>
              Trust is broken. Data is weaponized. Complexity is paralyzing.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 6 }}>
              We believe that in this chaos, integrity is the ultimate competitive advantage. 
              But integrity without capability is just a sentiment. We provide the <strong>architectural blueprints</strong> to build systems that are secure by design, human-centric by default, and strategically resilient.
            </Typography>
            <Link href="/about" passHref legacyBehavior>
              <ConnEthicsButton variant="outline" size="large">
                Read Our Manifesto
              </ConnEthicsButton>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* 3. Strategic Pillars */}
      <Box sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
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
                  <ConnEthicsCard variant="elevated" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ p: 4, flexGrow: 1 }}>
                      <Box 
                        sx={{ 
                          width: 64, 
                          height: 64, 
                          bgcolor: 'primary.50', 
                          borderRadius: 2, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          mb: 3
                        }}
                      >
                        <IconComponent className="h-8 w-8 text-primary-600" />
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {pillar.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
                        {pillar.description}
                      </Typography>
                    </Box>
                    <Box sx={{ p: 4, pt: 0 }}>
                      <Link href={pillar.link} passHref legacyBehavior>
                        <Typography 
                          component="a" 
                          sx={{ 
                            color: 'primary.main', 
                            fontWeight: 600, 
                            display: 'flex', 
                            alignItems: 'center',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                          }}
                        >
                          Explore <ArrowRightIcon className="h-4 w-4 ml-2" />
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
      <Box sx={{ py: 12, bgcolor: 'white' }}>
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
            <Link href="/insights" passHref legacyBehavior>
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
            <Link href="/insights" passHref legacyBehavior>
              <ConnEthicsButton variant="outline" size="medium" fullWidth>
                View All Insights
              </ConnEthicsButton>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* 5. Footer CTA */}
      <Box sx={{ py: 12, bgcolor: 'primary.900', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Join the Vanguard
          </Typography>
          <Typography variant="h6" sx={{ color: 'primary.100', mb: 6, fontWeight: 400, lineHeight: 1.6 }}>
            The future belongs to those who build it with integrity. <br />
            Ready to architect your ecosystem?
          </Typography>
          <Link href="/contact" passHref legacyBehavior>
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
