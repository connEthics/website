import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard } from '@/components/mui';
import { LightBulbIcon, ScaleIcon, EyeIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

export default function About() {
  const principles = [
    {
      title: "Radical Candor",
      description: "We tell you what you need to hear, not what you want to hear. In a crisis, clarity is kindness.",
      icon: EyeIcon
    },
    {
      title: "Systemic Thinking", 
      description: "We don't fix symptoms; we re-architect systems. We look at the second and third-order effects of every decision.",
      icon: CubeTransparentIcon
    },
    {
      title: "Ethical Realism",
      description: "Ethics is not a constraint; it's a survival strategy. In a transparent world, bad actors eventually lose.",
      icon: ScaleIcon
    },
    {
      title: "Pragmatic Innovation",
      description: "We love technology, but we don't worship it. We use what works, whether it's AI, Blockchain, or a spreadsheet.",
      icon: LightBulbIcon
    }
  ];

  const protocol = [
    {
      step: "01",
      title: "Reconnaissance",
      description: "We map the terrain. We analyze your competitors, your regulatory environment, and your internal capabilities. No assumptions."
    },
    {
      step: "02", 
      title: "Architecture",
      description: "We design the solution. Not just the software, but the governance, the team structure, and the economic model."
    },
    {
      step: "03",
      title: "Deployment", 
      description: "We build the reality. We work alongside your teams to implement the changes, ensuring they stick long after we leave."
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="gradient"
        title="About ConnEthics"
        subtitle="Architects of the New Digital Order"
        description="We exist to arm ethical leaders with the tools they need to survive and thrive. We believe that in a hyper-competitive world, integrity is the ultimate competitive advantage."
      />

      <Container maxWidth="lg" sx={{ py: 12 }}>
        {/* Mission Section - The "Why" */}
        <Box sx={{ mb: 16, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
            OUR MANIFESTO
          </Typography>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 6, color: 'text.primary' }}>
            We are not consultants.<br/>We are ecosystem builders.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
            The digital world is becoming a battlefield. Data is weaponized, trust is eroding, and complexity is paralyzing. 
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: 'text.secondary', lineHeight: 1.8 }}>
            Most agencies will sell you a tool to patch a leak. We provide the blueprint to rebuild the ship. We help you navigate chaos by aligning your technical stack with your ethical values.
          </Typography>
        </Box>

        <Divider sx={{ mb: 16 }} />

        {/* Principles Section - The "How" */}
        <Box sx={{ mb: 16 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 8, textAlign: 'center' }}>
            Operating Principles
          </Typography>
          <Grid container spacing={4}>
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ConnEthicsCard variant="elevated" sx={{ height: '100%', p: 4 }}>
                    <Stack direction="row" spacing={3} alignItems="flex-start">
                      <Box 
                        sx={{ 
                          p: 2, 
                          borderRadius: 2, 
                          bgcolor: 'primary.50', 
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </ConnEthicsCard>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Protocol Section - The "What" */}
        <Box sx={{ bgcolor: 'primary.900', borderRadius: 4, p: { xs: 4, md: 8 }, color: 'white' }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.400', fontWeight: 700, letterSpacing: 2, mb: 2, display: 'block' }}>
              THE METHODOLOGY
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, color: 'white' }}>
              The ConnEthics Protocol
            </Typography>
          </Box>
          
          <Grid container spacing={6}>
            {protocol.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{ position: 'relative', pl: 4, borderLeft: '2px solid', borderColor: 'primary.600' }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      position: 'absolute', 
                      top: -20, 
                      left: 16, 
                      opacity: 0.1, 
                      fontWeight: 900, 
                      color: 'white',
                      fontSize: '4rem'
                    }}
                  >
                    {item.step}
                  </Typography>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600, color: 'white', position: 'relative' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'grey.400', lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
