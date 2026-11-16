import { Metadata } from 'next'
import Link from 'next/link'
import ArtifactGovernanceMatrix from '@/components/interactive/ArtifactGovernanceMatrix'
import AiGovernanceSimulator from '@/components/interactive/AiGovernanceSimulator'
import { ConnEthicsHero } from '@/components/mui'
import { DocumentTextIcon, ServerIcon, CodeBracketIcon, CpuChipIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'AI Context Governance | ConnEthics',
  description: 'Master the "Secret Sauce" of Agentic AI. Explore our interactive framework for managing IP and operational risks in AI-driven development.',
  keywords: ['Agentic AI', 'AI Governance', 'Intellectual Property', 'Shadow AI', 'PromptOps', 'Cursor', 'MCP'],
}

export default function AiGovernanceLanding() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="The New Secret Sauce"
        subtitle="AGENTIC_AI_STRATEGY"
        description="Navigating Intellectual Property, DevOps, and Delivery in the age of .agent, .cursorrules, and AI Workflows. Your code is commodity; your context is the asset."
      />

      {/* Section 1: The Artifact Explosion */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm font-semibold mb-6">
                The New Reality
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Artifact Explosion
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A modern AI-native repository is no longer just code. It is flooded with <strong>Context Artifacts</strong>—files that tell the AI <em>how</em> to code, <em>what</em> to know, and <em>who</em> to be.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <CodeBracketIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Business Logic (Code)</h4>
                    <p className="text-sm text-slate-500">The traditional application code. Now generated faster than ever.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <CpuChipIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">AI Prompts & Rules</h4>
                    <p className="text-sm text-slate-500"><code>.cursorrules</code>, <code>prompts/</code>. The instructions that drive quality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <ServerIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Knowledge & RAG</h4>
                    <p className="text-sm text-slate-500"><code>docs/</code>, Vector DBs. The proprietary intelligence of the company.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Representation of "Explosion" */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl transform rotate-3 opacity-10"></div>
              <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-slate-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
                <h3 className="text-white font-mono mb-6 text-sm border-b border-slate-700 pb-2">
                  repo-structure/
                </h3>
                <ul className="space-y-3 font-mono text-sm">
                  <li className="text-slate-400 pl-2 border-l-2 border-slate-700">src/</li>
                  <li className="text-slate-400 pl-2 border-l-2 border-slate-700">components/</li>
                  <li className="text-cyan-400 pl-2 border-l-2 border-cyan-500 bg-cyan-900/20 py-1 rounded-r">
                    .cursorrules <span className="text-xs text-cyan-600 ml-2"># Context</span>
                  </li>
                  <li className="text-purple-400 pl-2 border-l-2 border-purple-500 bg-purple-900/20 py-1 rounded-r">
                    agent.yaml <span className="text-xs text-purple-600 ml-2"># Behavior</span>
                  </li>
                  <li className="text-green-400 pl-2 border-l-2 border-green-500 bg-green-900/20 py-1 rounded-r">
                    knowledge/ <span className="text-xs text-green-600 ml-2"># IP Asset</span>
                  </li>
                  <li className="text-slate-400 pl-2 border-l-2 border-slate-700">package.json</li>
                </ul>
                <div className="mt-8 text-center">
                  <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded border border-red-500/30">
                    Warning: 40% of Repo Value is now in Context Files
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Simulator (Reason against AI) */}
      <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Audit Your Governance Maturity
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Are you treating your AI context as a secure asset or a disposable config? 
              Interact with our governance engine to assess your risk profile.
            </p>
          </div>

          <AiGovernanceSimulator />
        </div>
      </section>

      {/* Section 3: The Matrix */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Artifact Governance Matrix
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Where you store your AI configurations determines who owns them. 
              Explore the four models of detention to understand your legal and operational exposure.
            </p>
          </div>

          <ArtifactGovernanceMatrix />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Don&apos;t Let Your &quot;Secret Sauce&quot; Leak
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            The shift to Agentic AI requires a new operating model. Download our comprehensive whitepaper to get the full legal analysis, delivery strategies, and audit checklists.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/insights/gouvernance-contexte-ia-agentique"
              className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/30"
            >
              <DocumentTextIcon className="w-6 h-6 mr-2" />
              Read the Whitepaper (FR)
            </Link>
            <Link 
              href="/contact"
              className="flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-400 text-slate-700 font-bold rounded-lg transition-all"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
