import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon, MapIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { Button } from "@/design-system/components";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/design-system/components";

export default function HomeRefactored() {
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
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-800 dark:to-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Ethical Connections in a{" "}
              <span className="text-primary-900 dark:text-primary-400">Competitive World</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto">
              We build products and animate business ecosystems based on radical candor, 
              integrity, and innovation. Delivering high-quality services that align 
              technical, operational, and execution strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg"
                  rightIcon={<ArrowRightIcon className="h-5 w-5" />}
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline"
                  size="lg"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              We specialize in building ethical connections through self-sovereign identity, 
              competitive intelligence, and strategic product leadership.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} variant="elevated" className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
                Why Choose ConnEthics?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                Our unique approach combines deep technical expertise with ethical
                frameworks, ensuring your organization can build trust, enhance competitive 
                intelligence, and scale product teams while maintaining integrity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card variant="elevated" className="shadow-2xl">
              <CardHeader>
                <CardTitle as="h3" className="text-2xl">
                  Ready to Get Started?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  Schedule a consultation to discuss how we can help your
                  organization implement self-sovereign identity, gain competitive intelligence, 
                  and optimize product leadership strategies.
                </CardDescription>
                <Link href="/contact">
                  <Button 
                    rightIcon={<ArrowRightIcon className="h-4 w-4" />}
                    fullWidth
                  >
                    Book Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 dark:bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building Ethical Business Ecosystems
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join leading organizations that trust ConnEthics to deliver clarity 
            and purpose in challenging competitive environments.
          </p>
          <Link href="/about">
            <Button 
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRightIcon className="h-5 w-5" />}
            >
              Learn About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
