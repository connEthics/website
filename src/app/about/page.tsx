import { Box, Container, Grid, Typography } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard } from '@/components/mui';

export default function About() {
  const values = [
    {
      title: "Radical Candor",
      description: "Honest, direct communication that builds trust"
    },
    {
      title: "Integrity", 
      description: "Ethical consideration in every business decision"
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions for competitive environments"
    },
    {
      title: "Strategic Alignment",
      description: "Connecting technical excellence with business goals"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Identify Challenges",
      description: "We saw organizations struggling with identity management, competitive intelligence, and product strategy alignment."
    },
    {
      step: "2", 
      title: "Develop Solutions",
      description: "We created comprehensive methodologies for self-sovereign identity, ecosystem analysis, and product leadership."
    },
    {
      step: "3",
      title: "Drive Impact", 
      description: "We help organizations build ethical business ecosystems that create sustainable competitive advantage."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="default"
        title="About ConnEthics"
        subtitle="Ethical Connections in Competitive Environments"
        description="ConnEthics is founded on the principles of ethical connections. We build products and animate business ecosystems based on radical candor, integrity, and innovation, bringing clarity and purpose to challenging environments."
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Mission Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'text.primary' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', color: 'text.secondary', mb: 3 }}>
              Our mission is to foster ethical connections in a competitive world, bringing 
              clarity and purpose to challenging environments. We deliver high-quality 
              services that seamlessly align technical, operational, and execution 
              strategies with today&apos;s business standards.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary' }}>
              We ensure ethical alignment across external business goals, internal team 
              dynamics, our technical stack, and the broader societal context through 
              self-sovereign identity, competitive intelligence, and strategic product leadership.
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, lg: 6 }}>
            <ConnEthicsCard variant="elevated">
              <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'text.primary' }}>
                Our Values
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {values.map((value, index) => (
                  <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        mt: 1,
                        mr: 2,
                        flexShrink: 0
                      }}
                    />
                    <Box>
                      <Typography component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {value.title}:
                      </Typography>
                      <Typography component="span" sx={{ ml: 1, color: 'text.secondary' }}>
                        {value.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </ConnEthicsCard>
          </Grid>
        </Grid>

        {/* Why We Started Section */}
        <ConnEthicsCard variant="outlined" sx={{ p: 6, mb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" gutterBottom sx={{ color: 'text.primary' }}>
              Why We Started ConnEthics
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: '1.125rem', 
                color: 'text.secondary',
                maxWidth: '48rem',
                mx: 'auto'
              }}
            >
              In today&apos;s competitive business landscape, organizations need more than just 
              technical solutions—they need ethical frameworks that create sustainable 
              competitive advantage. We recognized the urgent need for services that combine 
              self-sovereign identity, strategic intelligence, and product leadership 
              to build trust in complex ecosystems.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {process.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </ConnEthicsCard>
      </Container>
    </Box>
  );
}
