import { ShieldCheckIcon, MapIcon, LockClosedIcon, ChartBarIcon, CogIcon } from "@heroicons/react/24/outline";

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
      icon: ShieldCheckIcon
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
      icon: MapIcon
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
      icon: LockClosedIcon
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
      icon: ChartBarIcon
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
      icon: CogIcon
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver high-quality services that seamlessly align technical, operational, 
            and execution strategies with today&apos;s business standards, ensuring ethical 
            alignment across all dimensions of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 p-12 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a structured methodology that ensures ethical alignment across 
              external business goals, internal team dynamics, technical stack, and 
              broader societal context.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 dark:bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive analysis of your current ecosystem and challenges.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 dark:bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300">Development of ethical frameworks and strategic roadmaps.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 dark:bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">Execution of solutions with continuous monitoring and optimization.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 dark:bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Evolution</h3>
              <p className="text-gray-600 dark:text-gray-300">Ongoing support and adaptation to changing business needs.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business Ecosystem?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how ConnEthics can bring clarity and purpose to your 
            challenging competitive environment.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
