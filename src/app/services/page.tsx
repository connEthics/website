import { ShieldCheckIcon, MapIcon, LockClosedIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent,
  Container, 
  Section,
  Grid,
  Stack,
  Heading,
  Text,
  Badge
} from "@/design-system/components";

export default function Services() {
  const services = [
    {
      title: "Self-Sovereign Identity",
      description: "Prepare for Self-Sovereign Identity (SSI) integration and deployment. Empower individuals to securely control their digital identities using product management methodologies and tools.",
      features: [
        "SSI architecture design and implementation",
        "Digital identity strategy development",
        "Secure identity control frameworks",
        "Integration with existing systems",
        "Compliance and security auditing"
      ],
      icon: ShieldCheckIcon,
      category: "Identity"
    },
    {
      title: "Ecosystem Cartography",
      description: "Generate actionable insights through economic warfare analysis. Gain a comprehensive understanding of your business ecosystem, from competitive intelligence to strategic communication and lobbying.",
      features: [
        "Competitive intelligence gathering",
        "Economic warfare analysis",
        "Business ecosystem mapping",
        "Strategic communication planning",
        "Lobbying and influence strategies"
      ],
      icon: MapIcon,
      category: "Strategy"
    },
    {
      title: "Trust and Identity Deployment",
      description: "Define, build, and certify verifiable credentials. Ensure their secure adoption across your network to enhance trust and identity management.",
      features: [
        "Verifiable credential design",
        "Certification framework development",
        "Secure network deployment",
        "Trust relationship modeling",
        "Identity verification protocols"
      ],
      icon: LockClosedIcon,
      category: "Identity"
    },
    {
      title: "Product Leadership",
      description: "Align product roadmaps with strategic goals and OKRs. Prioritize initiatives using data-driven insights and foster a culture of innovation through continuous backlog refinement and stakeholder engagement.",
      features: [
        "Strategic roadmap alignment",
        "OKR framework implementation",
        "Data-driven prioritization",
        "Innovation culture development",
        "Stakeholder engagement strategies"
      ],
      icon: ChartBarIcon,
      category: "Leadership"
    },
    {
      title: "Product Management",
      description: "Initiate and scale product teams effectively. Implement robust release processes and manage dependencies to ensure timely delivery. Optimize team structures and interactions through event storming and continuous mapping.",
      features: [
        "Product team scaling",
        "Release process optimization",
        "Dependency management",
        "Event storming facilitation",
        "Continuous process mapping"
      ],
      icon: CogIcon,
      category: "Management"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Assessment",
      description: "Comprehensive analysis of your current ecosystem and challenges."
    },
    {
      number: "2", 
      title: "Strategy",
      description: "Development of ethical frameworks and strategic roadmaps."
    },
    {
      number: "3",
      title: "Implementation", 
      description: "Execution of solutions with continuous monitoring and optimization."
    },
    {
      number: "4",
      title: "Evolution",
      description: "Ongoing support and adaptation to changing business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      {/* Header Section */}
      <Section padding="xl" className="bg-white dark:bg-neutral-900">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h1" size="5xl" className="mb-6">
              Our Services
            </Heading>
            <Text size="xl" variant="muted" className="max-w-4xl mx-auto">
              We deliver high-quality services that seamlessly align technical, operational, 
              and execution strategies with today&apos;s business standards, ensuring ethical 
              alignment across all dimensions of your organization.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section padding="xl" className="bg-neutral-100 dark:bg-neutral-800">
        <Container>
          <Grid cols={1} responsive={{ lg: 2 }} gap="lg">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} variant="elevated" padding="lg" className="h-full">
                  <CardHeader>
                    <Stack direction="horizontal" align="center" gap="md" className="mb-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <Stack direction="horizontal" align="center" justify="between" className="mb-2">
                          <CardTitle size="2xl">{service.title}</CardTitle>
                          <Badge variant="primary" size="sm">{service.category}</Badge>
                        </Stack>
                      </div>
                    </Stack>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6">
                      {service.description}
                    </CardDescription>
                    <div>
                      <Text size="lg" weight="semibold" className="mb-4">Key Features:</Text>
                      <Stack gap="sm">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <span className="text-primary-600 dark:text-primary-400 mr-3 text-lg">✓</span>
                            <Text variant="muted">{feature}</Text>
                          </div>
                        ))}
                      </Stack>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="xl" className="bg-white dark:bg-neutral-900">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" size="4xl" className="mb-4">Our Approach</Heading>
            <Text size="lg" variant="muted" className="max-w-4xl mx-auto">
              We follow a structured methodology that ensures ethical alignment across 
              external business goals, internal team dynamics, technical stack, and 
              broader societal context.
            </Text>
          </div>
          
          <Grid cols={1} responsive={{ md: 2, lg: 4 }} gap="lg">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-900 dark:bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Text size="xl" weight="bold" className="text-white">{step.number}</Text>
                </div>
                <Heading as="h3" size="lg" className="mb-3">{step.title}</Heading>
                <Text variant="muted">{step.description}</Text>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="bg-primary-900 text-white">
        <Container>
          <Card variant="default" padding="xl" className="bg-primary-900 border-primary-700 text-center">
            <CardHeader>
              <CardTitle size="3xl" className="text-white mb-4">
                Ready to Transform Your Business Ecosystem?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text size="xl" className="mb-8 max-w-3xl mx-auto text-primary-100">
                Let&apos;s discuss how ConnEthics can bring clarity and purpose to your 
                challenging competitive environment.
              </Text>
              <a
                href="/contact"
                className="bg-white text-primary-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-neutral-100 transition-colors duration-200 inline-block"
              >
                Schedule a Consultation
              </a>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
