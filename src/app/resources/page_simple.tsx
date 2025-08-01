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
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Centre de <span className="text-primary-600">Ressources</span> ConnEthics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expertise, insights et outils pour naviguer l'avenir éthique de la technologie. 
              Accédez aux recherches, guides et formations de référence dans l'écosystème de l'innovation responsable.
            </p>
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
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary-600 font-semibold uppercase tracking-wide mb-2">
              Contenus à la Une
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dernières Publications Expertes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos dernières recherches et analyses sur les tendances technologiques éthiques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {content.type}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
                <p className="text-gray-600 mb-4">{content.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-600 font-medium">{content.category}</span>
                  <Link 
                    href={content.link}
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors cursor-pointer"
                  >
                    Lire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-primary-600 font-semibold uppercase tracking-wide mb-2">
              Centre d'Expertise
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explorez nos Ressources par Domaine
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des contenus experts structurés pour approfondir votre compréhension et accélérer votre transformation éthique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-sm text-primary-600 font-semibold block mb-4">{category.count}</span>
                  
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Restez à la Pointe de l'Innovation Éthique
            </h2>
            <p className="text-lg mb-8 text-primary-100 max-w-2xl mx-auto">
              Rejoignez plus de 500 leaders technologiques qui font confiance à notre expertise pour naviguer l'avenir éthique de la technologie.
            </p>
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
        </div>
      </section>
    </div>
  );
}
