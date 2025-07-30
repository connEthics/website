'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, ShieldCheckIcon, EyeIcon, UserIcon, DocumentTextIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Privacy() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    summary: true, // Start with summary expanded
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const summaryPoints = [
    {
      icon: <UserIcon className="h-5 w-5" />,
      title: "What we collect",
      description: "Name, email, phone number when you contact us"
    },
    {
      icon: <EyeIcon className="h-5 w-5" />,
      title: "How we use it",
      description: "To respond to your inquiries and improve our services"
    },
    {
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      title: "How we protect it",
      description: "Industry-standard security measures and French hosting"
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      title: "Your rights",
      description: "Access, correct, or delete your data anytime"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We believe in transparency. Here&apos;s how we handle your personal information with care and respect.
          </p>
        </div>

        {/* Privacy Summary - Always Visible */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300 flex items-center">
              <DocumentTextIcon className="h-6 w-6 mr-2" />
              Privacy at a Glance
            </h2>
            <button
              onClick={() => toggleSection('summary')}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              {expandedSections.summary ? (
                <ChevronDownIcon className="h-5 w-5" />
              ) : (
                <ChevronRightIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          
          {expandedSections.summary && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summaryPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-blue-600 dark:text-blue-400 mt-1">{point.icon}</div>
                  <div>
                    <h3 className="font-medium text-blue-900 dark:text-blue-300">{point.title}</h3>
                    <p className="text-blue-700 dark:text-blue-400 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:dpo@connethics.com?subject=Data%20Access%20Request"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Request My Data
            </a>
            <a
              href="mailto:dpo@connethics.com?subject=Data%20Deletion%20Request"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Delete My Data
            </a>
            <a
              href="mailto:dpo@connethics.com?subject=Privacy%20Question"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Ask a Question
            </a>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-4">
          {/* Introduction */}
          <CollapsibleSection
            id="introduction"
            title="Introduction"
            icon={<DocumentTextIcon className="h-5 w-5" />}
            isExpanded={expandedSections.introduction}
            onToggle={() => toggleSection('introduction')}
          >
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This Privacy Policy describes our policies and procedures on the collection, use, and disclosure 
                of your information when you use our service. We&apos;ll tell you about your privacy rights and how 
                the law protects you.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                We use your personal data to provide and improve our service. By using our service, you agree 
                to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>
          </CollapsibleSection>

          {/* What We Collect */}
          <CollapsibleSection
            id="collect"
            title="What Information We Collect"
            icon={<UserIcon className="h-5 w-5" />}
            isExpanded={expandedSections.collect}
            onToggle={() => toggleSection('collect')}
          >
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Personal Information You Provide</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Name and email address (when contacting us)</li>
                  <li>• Phone number (if you choose to provide it)</li>
                  <li>• Company information (for business inquiries)</li>
                  <li>• Message content (in consultation requests)</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Information We Collect Automatically</h4>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Device information (browser type, operating system)</li>
                  <li>• Usage data (pages visited, time spent)</li>
                  <li>• IP address and location data</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          {/* How We Use Information */}
          <CollapsibleSection
            id="use"
            title="How We Use Your Information"
            icon={<EyeIcon className="h-5 w-5" />}
            isExpanded={expandedSections.use}
            onToggle={() => toggleSection('use')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Primary Uses</h4>
                <ul className="space-y-1 text-blue-800 dark:text-blue-400">
                  <li>• Respond to your inquiries</li>
                  <li>• Provide consultation services</li>
                  <li>• Send service updates</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">Improvement Uses</h4>
                <ul className="space-y-1 text-green-800 dark:text-green-400">
                  <li>• Analyze website usage</li>
                  <li>• Improve our services</li>
                  <li>• Develop new features</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          {/* Data Security */}
          <CollapsibleSection
            id="security"
            title="How We Protect Your Data"
            icon={<ShieldCheckIcon className="h-5 w-5" />}
            isExpanded={expandedSections.security}
            onToggle={() => toggleSection('security')}
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GlobeAltIcon className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">French Data Hosting</h4>
                  <p className="text-gray-700 dark:text-gray-300">Your data is hosted on French territory (Paris region) in compliance with European data protection standards.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Security Measures</h4>
                  <p className="text-gray-700 dark:text-gray-300">We use industry-standard encryption, secure data transmission, and regular security audits to protect your information.</p>
                </div>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  <strong>Important:</strong> While we implement strong security measures, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Your Rights */}
          <CollapsibleSection
            id="rights"
            title="Your Privacy Rights"
            icon={<ClockIcon className="h-5 w-5" />}
            isExpanded={expandedSections.rights}
            onToggle={() => toggleSection('rights')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Under GDPR, you have the right to:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span><strong>Access</strong> your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span><strong>Correct</strong> inaccurate information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span><strong>Delete</strong> your data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span><strong>Restrict</strong> processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span><strong>Data portability</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span><strong>Object</strong> to processing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">How to exercise your rights:</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:dpo@connethics.com"
                    className="block p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                  >
                    <div className="font-medium text-blue-900 dark:text-blue-300">Email our DPO</div>
                    <div className="text-blue-700 dark:text-blue-400 text-sm">dpo@connethics.com</div>
                  </a>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <div className="font-medium text-gray-900 dark:text-white">Response Time</div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm">We&apos;ll respond within 30 days</div>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Contact Information */}
          <CollapsibleSection
            id="contact"
            title="Questions or Concerns?"
            icon={<DocumentTextIcon className="h-5 w-5" />}
            isExpanded={expandedSections.contact}
            onToggle={() => toggleSection('contact')}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">We&apos;re Here to Help</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Have questions about this privacy policy or how we handle your data?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:dpo@connethics.com"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Contact Data Protection Officer
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    General Contact Form
                  </a>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Last updated: July 30, 2025
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs">
              This privacy policy is designed to be clear and accessible. If you need clarification on any point, please don&apos;t hesitate to contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Collapsible Section Component
interface CollapsibleSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

function CollapsibleSection({ title, icon, children, isExpanded, onToggle }: CollapsibleSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          <div className="text-blue-600 dark:text-blue-400">{icon}</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  );
}
