import Link from "next/link";
import { BookOpenIcon, DocumentTextIcon, VideoCameraIcon, MicrophoneIcon, AcademicCapIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function Resources() {
  const resourceCategories = [
    {
      title: "Articles & Publications",
      description: "Insights approfondis sur l'éthique AI, l'architecture informationnelle et la souveraineté numérique.",
      icon: DocumentTextIcon,
      items: [
        "Self-Sovereign Identity: Beyond the Hype",
        "Ethical AI Implementation in Enterprise",
        "Information Architecture for Trust",
        "Competitive Intelligence Ethics"
      ],
      count: "12+ articles"
    },
    {
      title: "Guides Pratiques",
      description: "Méthodologies éprouvées et frameworks pour l'implémentation de solutions éthiques.",
      icon: BookOpenIcon,
      items: [
        "SSI Implementation Roadmap",
        "AI Ethics Assessment Framework",
        "Knowledge Management Best Practices",
        "Trust Deployment Checklist"
      ],
      count: "8 guides"
    },
    {
      title: "Webinaires & Formations",
      description: "Sessions d'expertise partagée avec les leaders de l'industrie.",
      icon: VideoCameraIcon,
      items: [
        "Monthly SSI Deep Dives",
        "AI Ethics Masterclass",
        "Product Leadership Workshop",
        "Ecosystem Mapping Sessions"
      ],
      count: "20+ sessions"
    },
    {
      title: "Podcast ConnEthics",
      description: "Conversations avec les pionniers de l'éthique technologique et de l'innovation responsable.",
      icon: MicrophoneIcon,
      items: [
        "Leaders in Digital Trust",
        "Ethics in Action",
        "Future of Identity",
        "Responsible Innovation"
      ],
      count: "50+ épisodes"
    },
    {
      title: "Recherche & Études",
      description: "Études de marché exclusives et recherches prospectives sur les tendances technologiques éthiques.",
      icon: AcademicCapIcon,
      items: [
        "State of SSI Report 2025",
        "AI Ethics Benchmark Study",
        "Digital Trust Index",
        "Enterprise Identity Trends"
      ],
      count: "6 études"
    },
    {
      title: "Communauté & Events",
      description: "Rejoignez notre communauté d'experts et participez aux événements de l'écosystème éthique.",
      icon: ChatBubbleLeftRightIcon,
      items: [
        "ConnEthics Community",
        "Ethics Tech Meetups",
        "Innovation Workshops",
        "Industry Roundtables"
      ],
      count: "500+ membres"
    }
  ];

  const featuredContent = [
    {
      type: "Article",
      title: "The Future of Self-Sovereign Identity in Enterprise",
      description: "Une analyse complète des défis et opportunités de l'implémentation SSI en entreprise.",
      readTime: "12 min",
      category: "SSI",
      link: "/resources/ssi-enterprise-future"
    },
    {
      type: "Guide",
      title: "AI Ethics Implementation Framework",
      description: "Guide pratique pour l'implémentation d'une gouvernance éthique de l'intelligence artificielle.",
      readTime: "25 min",
      category: "AI Ethics",
      link: "/resources/ai-ethics-framework"
    },
    {
      type: "Étude",
      title: "Digital Trust Report 2025",
      description: "Rapport exclusif sur l'état de la confiance numérique dans les entreprises françaises.",
      readTime: "45 min",
      category: "Research",
      link: "/resources/digital-trust-report-2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Section padding="xl" className="bg-gradient-to-br from-primary-50 to-primary-100">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Heading as="h1" size="6xl" className="mb-6 text-gray-900">
              Centre de <span className="text-primary-600">Ressources</span> ConnEthics
            </Heading>
            <Text size="xl" className="text-gray-600 mb-8">
              Expertise, insights et outils pour naviguer l'avenir éthique de la technologie. 
              Accédez aux recherches, guides et formations de référence dans l'écosystème de l'innovation responsable.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/newsletter"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors duration-200 cursor-pointer"
              >
                S'abonner à la Newsletter
              </Link>
              <Link 
                href="/resources/community"
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-600 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Rejoindre la Communauté
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Content */}
      <Section padding="xl" className="bg-white">
        <Container>
          <div className="text-center mb-12">
            <Text size="sm" className="text-primary-600 font-semibold uppercase tracking-wide mb-2">
              Contenus à la Une
            </Text>
            <Heading as="h2" size="4xl" className="text-gray-900 mb-4">
              Dernières Publications Expertes
            </Heading>
            <Text size="lg" className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos dernières recherches et analyses sur les tendances technologiques éthiques.
            </Text>
          </div>
          
          <Grid cols={3} gap="lg" className="mb-8">
            {featuredContent.map((content, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      {content.type}
                    </span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{content.title}</CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary-600 font-medium">{content.category}</span>
                    <Link 
                      href={content.link}
                      className="text-primary-600 hover:text-primary-700 font-medium transition-colors cursor-pointer"
                    >
                      Lire →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Resource Categories */}
      <Section padding="xl" className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Text size="sm" className="text-primary-600 font-semibold uppercase tracking-wide mb-2">
              Centre d'Expertise
            </Text>
            <Heading as="h2" size="4xl" className="text-gray-900 mb-4">
              Explorez nos Ressources par Domaine
            </Heading>
            <Text size="lg" className="text-gray-600 max-w-2xl mx-auto">
              Des contenus experts structurés pour approfondir votre compréhension et accélérer votre transformation éthique.
            </Text>
          </div>
          
          <Grid cols={3} gap="lg">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    <CardDescription className="mb-4">{category.description}</CardDescription>
                    <span className="text-sm text-primary-600 font-semibold">{category.count}</span>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={`/resources/${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 cursor-pointer"
                    >
                      Explorer
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="bg-primary-600">
        <Container>
          <div className="text-center text-white">
            <Heading as="h2" size="4xl" className="mb-4">
              Restez à la Pointe de l'Innovation Éthique
            </Heading>
            <Text size="lg" className="mb-8 text-primary-100 max-w-2xl mx-auto">
              Rejoignez plus de 500 leaders technologiques qui font confiance à notre expertise pour naviguer l'avenir éthique de la technologie.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                Demander une Consultation
              </Link>
              <Link 
                href="/resources/newsletter"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200 cursor-pointer"
              >
                Newsletter Expertise
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
