import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon, MapIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent,
  Container, 
  Section,
  Grid,
  Stack,
  Heading,
  Text
} from "@/design-system/components";

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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      {/* Hero Section */}
      <Section padding="xl" className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-800 dark:to-neutral-900">
        <Container>
          <div className="text-center">
            <Heading as="h1" size="6xl" className="mb-6">
              Ethical Connections in a{" "}
              <span className="text-primary-600 dark:text-primary-400">Competitive World</span>
            </Heading>
            <Text size="xl" variant="muted" className="mb-8 max-w-4xl mx-auto">
              We build products and animate business ecosystems based on radical candor, 
              integrity, and innovation. Delivering high-quality services that align 
              technical, operational, and execution strategies.
            </Text>
            <Stack direction="horizontal" justify="center" gap="md" className="flex-col sm:flex-row">
              <Link
                href="/contact"
                className="bg-primary-900 dark:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-800 dark:hover:bg-primary-600 transition-colors duration-200 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-primary-900 dark:border-primary-400 text-primary-900 dark:text-primary-400 px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-900 dark:hover:bg-primary-400 hover:text-white dark:hover:text-neutral-900 transition-colors duration-200 text-center"
              >
                Our Services
              </Link>
            </Stack>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section padding="xl" className="bg-white dark:bg-neutral-900">
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
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
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
      <Section padding="xl" className="bg-neutral-100 dark:bg-neutral-800">
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
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                    <Text variant="body">{benefit}</Text>
                  </div>
                ))}
              </Grid>
            </div>
            
            <Card variant="elevated" padding="lg">
              <CardHeader>
                <CardTitle size="2xl">
                  Ready to Get Started?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  Schedule a consultation to discuss how we can help your
                  organization implement self-sovereign identity, gain competitive intelligence, 
                  and optimize product leadership strategies.
                </CardDescription>
                <Link
                  href="/contact"
                  className="bg-primary-900 dark:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-800 dark:hover:bg-primary-600 transition-colors duration-200 inline-flex items-center w-full justify-center"
                >
                  Book Consultation
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="bg-primary-900 dark:bg-primary-800 text-white">
        <Container>
          <div className="text-center">
            <Heading as="h2" size="4xl" className="mb-4 text-white">
              Building Ethical Business Ecosystems
            </Heading>
            <Text size="xl" className="mb-8 max-w-3xl mx-auto text-primary-100">
              Join leading organizations that trust ConnEthics to deliver clarity 
              and purpose in challenging competitive environments.
            </Text>
            <Link
              href="/about"
              className="bg-white dark:bg-neutral-100 text-primary-900 dark:text-primary-800 px-8 py-4 rounded-lg text-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-colors duration-200 inline-flex items-center"
            >
              Learn About Us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
