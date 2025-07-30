export default function Cookies() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="space-y-8">
              {/* Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h2 className="text-lg font-semibold text-green-900 mb-2">Good News!</h2>
                    <p className="text-green-800">
                      ConnEthics does not use traditional cookies on this website. We believe in respecting your privacy 
                      and keeping our website simple and transparent.
                    </p>
                  </div>
                </div>
              </div>

              {/* What are Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Common uses of cookies include remembering your preferences, keeping you logged in, tracking your 
                  behavior for advertising purposes, and analyzing website performance.
                </p>
              </div>

              {/* Our Approach */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Privacy-First Approach</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Why We Don&apos;t Use Cookies</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>We respect your privacy and don&apos;t want to track your personal browsing behavior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>We believe in transparency and simplicity in our digital practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Our website functions perfectly without storing data on your device</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>We align our technical choices with our ethical consulting values</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Analytics */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Website Analytics</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    While we don&apos;t use traditional cookies, we do want to understand how our website is performing 
                    and how we can improve it for our visitors. For this purpose, we use Vercel Analytics.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">About Vercel Analytics</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Privacy-focused:</strong> Vercel Analytics is designed with privacy in mind and 
                        doesn&apos;t use traditional cookies or track personal information.
                      </p>
                      <p>
                        <strong>Aggregated data only:</strong> We only receive aggregated, anonymized data about 
                        page views, popular content, and general website performance.
                      </p>
                      <p>
                        <strong>No personal tracking:</strong> Vercel Analytics doesn&apos;t create user profiles, 
                        track you across websites, or store personally identifiable information.
                      </p>
                      <p>
                        <strong>GDPR compliant:</strong> The analytics solution is designed to be compliant with 
                        European privacy regulations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Learn more:</strong> You can read more about Vercel Analytics and their privacy practices 
                      in the{' '}
                      <a 
                        href="https://vercel.com/docs/analytics" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        official Vercel Analytics documentation
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Collect */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Analytics Data We Collect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">We Do Collect (Anonymously)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Page views and popular content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>General geographic regions (country level)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Device types (mobile, desktop, tablet)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Referral sources (which sites link to us)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">We Don&apos;t Collect</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Personal identifiers or IP addresses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Detailed location data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Browsing behavior across other websites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>Personal preferences or login information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to external websites or services. These third-party websites 
                  may use their own cookies and have their own privacy policies. We are not responsible for 
                  the privacy practices of these external sites.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We recommend reviewing the privacy policies of any external websites you visit from our site.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Options</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">No Action Needed</h3>
                    <p className="text-green-800">
                      Since we don&apos;t use cookies, you don&apos;t need to accept or decline anything to use our website. 
                      Your privacy is protected by default.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Browser Settings</h3>
                    <p className="text-blue-800">
                      You can always configure your browser to block cookies from all websites if you prefer. 
                      This won&apos;t affect your experience on our website since we don&apos;t rely on them.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  If we ever decide to implement cookies in the future, we will update this policy and notify 
                  you prominently on our website. We are committed to maintaining transparency about any 
                  changes to our privacy practices.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Questions About Our Cookie Policy?</h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about our cookie policy or our privacy practices, we&apos;re here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:dpo@connethics.com"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Contact Data Protection Officer
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      General Contact Form
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-gray-600 text-sm mb-2">
                Last updated: July 30, 2025
              </p>
              <p className="text-gray-500 text-xs">
                This policy reflects our commitment to privacy-first web practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
