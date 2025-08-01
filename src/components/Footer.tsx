'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import CarbonBadge from './CarbonBadge';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025); // Default fallback

  useEffect(() => {
    // Only set the current year on the client side to avoid hydration mismatch
    setCurrentYear(new Date().getFullYear());
  }, []);

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
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Legal Mentions', href: '/legal' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info - First */}
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

          {/* Footer Sections - Services, Company, Resources, Legal */}
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
        
        {/* Bottom section with copyright and carbon badge on same line */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-0">
              © {currentYear} ConnEthics. All rights reserved.
            </p>
            
            {/* Carbon badge */}
            <div className="flex-shrink-0">
              <CarbonBadge />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
