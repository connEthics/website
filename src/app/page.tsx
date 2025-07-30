import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon, MapIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const services = [
    {
      title: "Self-Sovereign Identity",
      description: "Prepare for SSI integration and deployment. Empower individuals to securely control their digital identities.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Ecosystem Cartography", 
      description: "Generate actionable insights through competitive intelligence and economic warfare analysis.",
      icon: MapIcon,
    },
    {
      title: "Product Leadership",
      description: "Align product roadmaps with strategic goals and OKRs using data-driven insights.",
      icon: ChartBarIcon,
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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Ethical Connections in a{" "}
              <span className="text-blue-900 dark:text-blue-400">Competitive World</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We build products and animate business ecosystems based on radical candor, 
              integrity, and innovation. Delivering high-quality services that align 
              technical, operational, and execution strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-900 dark:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-900 dark:border-blue-400 text-blue-900 dark:text-blue-400 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-900 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We specialize in building ethical connections through self-sovereign identity, 
              competitive intelligence, and strategic product leadership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transition-shadow duration-200 border dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose ConnEthics?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our unique approach combines deep technical expertise with ethical
                frameworks, ensuring your organization can build trust, enhance competitive 
                intelligence, and scale product teams while maintaining integrity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Schedule a consultation to discuss how we can help your
                organization implement self-sovereign identity, gain competitive intelligence, 
                and optimize product leadership strategies.
              </p>
              <Link
                href="/contact"
                className="bg-blue-900 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors duration-200 inline-flex items-center"
              >
                Book Consultation
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 dark:bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building Ethical Business Ecosystems
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join leading organizations that trust ConnEthics to deliver clarity 
            and purpose in challenging competitive environments.
          </p>
          <Link
            href="/about"
            className="bg-white dark:bg-gray-100 text-blue-900 dark:text-blue-800 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200 inline-flex items-center"
          >
            Learn About Us
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
