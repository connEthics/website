import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ArticleHeader from '@/components/ArticleHeader';

export default function SSIEnterpriseArticle() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Link 
          href="/insights" 
          className="inline-flex items-center text-blue-900 hover:text-blue-800 mb-8 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Insights
        </Link>

        {/* Article Header */}
        <ArticleHeader 
          title="The Future of Self-Sovereign Identity in Enterprise"
          description="Exploring how Self-Sovereign Identity (SSI) will transform enterprise identity management and create new opportunities for secure, user-controlled digital interactions in the modern workplace."
          tags={["Self-Sovereign Identity", "Enterprise", "Digital Transformation", "Security"]}
          targetAudience="CIOs, IT Directors, Security Architects"
          keyTakeaways={[
            "Principles of SSI",
            "Enterprise identity challenges",
            "Transformation scenarios",
            "Business value and ROI"
          ]}
          difficulty="Intermediate"
          readTime="5 min read"
          publishedDate="July 25, 2025"
        />
        
        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            
            <p>
              Identity is the new perimeter. But the old perimeter was a wall; the new one is a user. Self-Sovereign Identity (SSI) represents a paradigm shift from centralized identity management to user-controlled, portable digital identities. For enterprises, this isn&apos;t just a tech upgrade; it&apos;s a strategic necessity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Enterprise Dilemma: Security vs. Usability
            </h2>

            <p>
              We have all faced the trade-off: lock down the system and frustrate the user, or open it up and risk a breach. SSI offers a third way. By decentralizing identity, we can have high security <em>and</em> low friction.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">The 3 Pillars of SSI</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span><strong>User Control:</strong> You don&apos;t own your employees&apos; identity; they do. You just attest to their role.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span><strong>Portability:</strong> A credential issued by HR can be verified by IT, a partner, or a bank, instantly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span><strong>Verifiability:</strong> Math replaces trust. Cryptography proves the claim, not a phone call.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Why Now? The Perfect Storm
            </h2>

            <p>
              Three forces are converging to make SSI inevitable for the enterprise:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The Password Problem:</strong> They are insecure, expensive to reset, and hated by users. Passkeys and VCs are the exit strategy.</li>
              <li><strong>Regulatory Pressure:</strong> GDPR, eIDAS 2.0, and CCPA are demanding data minimization. SSI is privacy-by-design.</li>
              <li><strong>Remote Work:</strong> The perimeter is gone. We need to verify identity everywhere, all the time.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Transformation Scenarios: Where to Start
            </h2>

            <p>
              Don&apos;t boil the ocean. Here are the high-impact areas where we see enterprises succeeding with SSI today.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. The &quot;Zero-Trust&quot; Employee Badge</h3>
              <p className="text-gray-700 mb-3">
                Replace the plastic card with a VC in a mobile wallet. Use it to log in to workstations (passwordless), access physical buildings, and sign documents.
              </p>
              <p className="text-gray-700">
                <strong>ROI:</strong> Reduced helpdesk tickets (no password resets), stronger security.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Vendor & Partner Onboarding</h3>
              <p className="text-gray-700 mb-3">
                Stop managing accounts for contractors. Ask them to present a VC from their employer proving they are certified and employed.
              </p>
              <p className="text-gray-700">
                <strong>ROI:</strong> Faster onboarding, automated compliance checks.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              The Road Ahead
            </h2>

            <p>
              The future of enterprise identity is not about building higher walls; it&apos;s about smarter gates. SSI allows you to verify anyone, anywhere, without owning their data.
            </p>

            <p>
              At ConnEthics, we help you navigate this transition. From selecting the right ledger (or no ledger) to integrating with your existing IAM (Active Directory, Okta), we ensure your journey to SSI is secure and scalable.
            </p>

            <div className="bg-gray-900 text-white p-8 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">Ready to Explore Self-Sovereign Identity?</h3>
              <p className="mb-6">
                ConnEthics specializes in Self-Sovereign Identity strategy and implementation. 
                We help enterprises navigate the transition to user-controlled identity systems.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                Schedule an SSI Consultation
              </Link>
            </div>

          </div>
        </article>

        {/* Author & Share Section */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">
                <strong>ConnEthics Team</strong> - Leaders in Self-Sovereign Identity and digital trust solutions
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Share on LinkedIn
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Share on Twitter
              </button>
            </div>
          </div>
        </footer>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                Trust & Identity
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Building Trust Through Verifiable Credentials
              </h4>
              <p className="text-gray-600 text-sm">
                How organizations can implement verifiable credential systems to enhance trust...
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                Ecosystem Cartography
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Competitive Intelligence in the Digital Age
              </h4>
              <p className="text-gray-600 text-sm">
                Understanding economic warfare analysis and comprehensive ecosystem mapping...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
