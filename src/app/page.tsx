import Link from "next/link";
import { CheckCircleIcon, ShieldCheckIcon, MapIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent,
  Container, 
  Section,
  Grid,
  Stack,
  Heading,
  Text
} from "@/design-system/components";
import ConnEthicsHero from "@/components/mui/ConnEthicsHero";
import ConnEthicsButton from "@/components/mui/ConnEthicsButton";
import ConnEthicsCard from "@/components/mui/ConnEthicsCard";
import { Box } from "@mui/material";

export default function Home() {
  const services = [
    {
      title: "Self-Sovereign Identity",
      description: "Prepare for SSI integration and deployment. Empower individuals to securely control their digital identities.",
      icon: ShieldCheckIcon,
      features: ["SSI architecture design", "Digital identity strategy", "Secure control frameworks"]
    },
    {
      title: "Ecosystem Cartography", 
      description: "Generate actionable insights through competitive intelligence and economic warfare analysis.",
      icon: MapIcon,
      features: ["Competitive intelligence", "Economic warfare analysis", "Business ecosystem mapping"]
    },
    {
      title: "Product Leadership",
      description: "Align product roadmaps with strategic goals and OKRs using data-driven insights.",
      icon: ChartBarIcon,
      features: ["Strategic roadmap alignment", "OKR implementation", "Data-driven prioritization"]
    },
  ];

  const benefits = [
    "Self-sovereign identity implementation",
    "Strategic competitive intelligence",
    "Enhanced trust and verification systems",
    "Optimized product roadmaps and OKRs",
    "Scalable product team structures",
    "Ethical business ecosystem alignment",
  ];

  return (
    <div className="min-h-screen bg-white transition-colors">
      {/* Hero Section - Material UI Component */}
      <ConnEthicsHero
        title="Ethical Connections in a Competitive World"
        subtitle="ConnEthics"
        description="We build products and animate business ecosystems based on radical candor, integrity, and innovation. Delivering high-quality services that align technical, operational, and execution strategies."
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

      {/* Services Section */}
      <Section padding="xl" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" size="4xl" className="mb-4">
              Our Expertise
            </Heading>
            <Text size="xl" variant="muted" className="max-w-3xl mx-auto">
              We specialize in building ethical connections through self-sovereign identity, 
              competitive intelligence, and strategic product leadership.
            </Text>
          </div>
          
          <Grid cols={1} responsive={{ md: 3 }} gap="lg">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} variant="elevated" padding="lg" className="h-full">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle size="xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {service.description}
                    </CardDescription>
                    <Stack gap="xs">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          <Text size="sm" variant="muted">{feature}</Text>
                        </div>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="xl" className="bg-gray-50">
        <Container>
          <Grid cols={1} responsive={{ lg: 2 }} gap="xl" className="items-center">
            <div>
              <Heading as="h2" size="4xl" className="mb-6">
                Why Choose ConnEthics?
              </Heading>
              <Text size="lg" variant="muted" className="mb-8">
                Our unique approach combines deep technical expertise with ethical
                frameworks, ensuring your organization can build trust, enhance competitive 
                intelligence, and scale product teams while maintaining integrity.
              </Text>
              <Grid cols={1} responsive={{ sm: 2 }} gap="md">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <Text variant="body">{benefit}</Text>
                  </div>
                ))}
              </Grid>
            </div>
            
            <Box sx={{ maxWidth: 600 }}>
              <ConnEthicsCard
                variant="elevated"
                title="Ready to Get Started?"
                subtitle="Contact Us Today"
                actions={
                  <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <ConnEthicsButton variant="primary" size="large" fullWidth>
                      Book Consultation
                    </ConnEthicsButton>
                  </Link>
                }
              >
                <Text size="lg" variant="muted">
                  Schedule a consultation to discuss how we can help your
                  organization implement self-sovereign identity, gain competitive intelligence, 
                  and optimize product leadership strategies.
                </Text>
              </ConnEthicsCard>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section - Material UI Hero */}
      <ConnEthicsHero
        title="Building Ethical Business Ecosystems"
        description="Join leading organizations that trust ConnEthics to deliver clarity and purpose in challenging competitive environments."
        primaryAction={{
          label: "Learn About Us",
          href: "/about"
        }}
        variant="default"
      />
    </div>
  );
}
