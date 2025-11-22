export default function Legal() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Legal Information</h1>
          
          {/* Navigation to Legal Documents */}
          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-4">Legal Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <a 
                href="/legal/sales-terms-and-conditions" 
                className="block p-4 bg-white border border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-blue-900 mb-2">Sales Terms and Conditions</h3>
                <p className="text-sm text-blue-700">
                  Terms and conditions for our consulting services and business relationships
                </p>
              </a>
              <a 
                href="/legal/general-purchasing-conditions" 
                className="block p-4 bg-white border border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-blue-900 mb-2">General Purchasing Conditions</h3>
                <p className="text-sm text-blue-700">
                  Terms and conditions for our procurement and vendor relationships
                </p>
              </a>
              <a 
                href="/legal/ssip-safety-schemes" 
                className="block p-4 bg-white border border-red-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-red-900 mb-2">SSIP Safety Schemes</h3>
                <p className="text-sm text-red-700">
                  Safety requirements and certification standards for all suppliers
                </p>
              </a>
              <a 
                href="/privacy" 
                className="block p-4 bg-white border border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-blue-900 mb-2">Privacy Policy</h3>
                <p className="text-sm text-blue-700">
                  How we collect, use, and protect your personal information
                </p>
              </a>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Legal Notice</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Site Publisher</h3>
                <p className="text-gray-700 leading-relaxed">
                  This site is published by:
                </p>
                <div className="mt-3 text-gray-700">
                  <p><strong>ConnEthics SASU</strong></p>
                  <p>Registered with the R.C.S. of Nanterre under number 844 407 866</p>
                  <p>21 rue Paul Déroulède</p>
                  <p>92270 Bois-Colombes</p>
                  <p>France</p>
                  <p className="mt-2">
                    Professional liability insurance taken out with Coover and guaranteed by HISCOX
                  </p>
                  <p className="mt-2">
                    Email: <a href="mailto:contact@connethics.com" className="text-blue-600 hover:text-blue-800">contact@connethics.com</a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Publication Director</h3>
                <p className="text-gray-700">
                  Frederic CHOUDAT
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Hosting</h3>
                <p className="text-gray-700 mb-3">
                  This site is hosted by:
                </p>
                <div className="text-gray-700">
                  <p><strong>Vercel Inc.</strong></p>
                  <p>650 California St</p>
                  <p>San Francisco, CA 94108</p>
                  <p>United States</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hosting Infrastructure</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Region:</strong> Paris, France (West) - eu-west-3 - cdg1
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In accordance with our commitment to digital sovereignty, we have made the deliberate choice 
                  to host our data on French territory, while benefiting from Vercel&apos;s high-performance infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security and Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Although our hosting provider is an American company, we have implemented strict measures 
                  to guarantee the protection of your data on French territory. Vercel maintains high security 
                  standards, documented on their{' '}
                  <a 
                    href="https://security.vercel.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    security portal
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Last updated: July 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
