import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Self-Sovereign Identity', href: '/services#self-sovereign-identity' },
        { name: 'Ecosystem Cartography', href: '/services#ecosystem-cartography' },
        { name: 'Trust & Identity Deployment', href: '/services#trust-identity' },
        { name: 'Product Leadership', href: '/services#product-leadership' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Careers', href: '/contact' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/insights' },
        { name: 'White Papers', href: '/insights' },
        { name: 'Case Studies', href: '/insights' },
        { name: 'Newsletter', href: '/contact' },
        { name: 'MUI Demo', href: '/mui-demo' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4 text-white">ConnEthics</div>
            <p className="text-gray-300 mb-4">
              Building ethical connections in competitive environments through radical candor, 
              integrity, and innovation.
            </p>
            <p className="text-gray-400 text-sm">
              Fostering clarity and purpose in challenging business ecosystems.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} ConnEthics. All rights reserved.
              </p>
              <div id="wcb" className="carbonbadge wcb-d"></div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="text-gray-400 hover:text-white text-sm transition-all duration-200"
              >
                Legal Mentions
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-all duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
