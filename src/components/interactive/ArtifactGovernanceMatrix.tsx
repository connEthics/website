'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheckIcon, UserIcon, ServerIcon, CodeBracketIcon, ExclamationTriangleIcon, LightBulbIcon } from '@heroicons/react/24/outline';

interface ArtifactType {
  id: string;
  title: string;
  icon: React.ElementType;
  examples: string;
  owner: string;
  risk: string;
  recommendation: string;
  color: string;
}

const artifacts: ArtifactType[] = [
  {
    id: 'in-repo',
    title: 'In-Repo (Code Source)',
    icon: CodeBracketIcon,
    examples: '.cursorrules, .github/prompts',
    owner: 'Client (Foreground IP)',
    risk: 'Public Leakage',
    recommendation: 'Treat as Source Code (Review, Scan)',
    color: 'bg-blue-500'
  },
  {
    id: 'shared-repo',
    title: 'Shared Repo (Client)',
    icon: ShieldCheckIcon,
    examples: '.agent, agent.yaml, .skills',
    owner: 'Client (Trade Secret)',
    risk: 'Obsolescence',
    recommendation: 'Appoint a "Knowledge Manager"',
    color: 'bg-green-500'
  },
  {
    id: 'vendor-asset',
    title: 'Vendor Asset (ESN)',
    icon: ServerIcon,
    examples: 'MCP Servers, complex skprompt.txt',
    owner: 'Vendor (Background IP)',
    risk: 'Vendor Lock-in',
    recommendation: 'Negotiate Perpetual License or Reversibility',
    color: 'bg-purple-500'
  },
  {
    id: 'user-prefs',
    title: 'User Preferences',
    icon: UserIcon,
    examples: 'User Rules (Global), IDE Profiles',
    owner: 'Developer (Individual)',
    risk: 'Shadow AI / Knowledge Loss',
    recommendation: 'Prohibit for critical rules. Force sync.',
    color: 'bg-red-500'
  }
];

export default function ArtifactGovernanceMatrix() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {artifacts.map((artifact) => (
          <motion.div
            key={artifact.id}
            layoutId={artifact.id}
            onClick={() => setSelectedId(artifact.id)}
            className={`relative p-6 rounded-xl cursor-pointer overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
              selectedId === artifact.id ? 'ring-4 ring-offset-2 ring-blue-400' : ''
            } bg-white border border-slate-200`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 ${artifact.color}`} />
            
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${artifact.color} bg-opacity-10`}>
                <artifact.icon className={`w-8 h-8 ${artifact.color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {artifact.id.replace('-', ' ')}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">{artifact.title}</h3>
            <p className="text-sm text-slate-500 mb-4 font-mono">{artifact.examples}</p>
            
            <div className="flex items-center text-sm font-medium text-slate-700">
              <span className="mr-2">Owner:</span>
              <span className={`px-2 py-0.5 rounded text-xs ${artifact.color} bg-opacity-10 text-slate-800`}>
                {artifact.owner}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-slate-900 text-white rounded-xl p-8 shadow-2xl border border-slate-700"
          >
            {artifacts.filter(a => a.id === selectedId).map((artifact) => (
              <div key={artifact.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <artifact.icon className="w-8 h-8 mr-3 text-blue-400" />
                    {artifact.title}
                  </h4>
                  <p className="text-slate-300 mb-6 text-lg">
                    Artifacts like <code className="bg-slate-800 px-2 py-1 rounded text-blue-300">{artifact.examples}</code> fall into this category.
                  </p>
                  <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
                    <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Legal Owner</span>
                    <span className="font-semibold text-white">{artifact.owner}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-500/20 p-2 rounded-lg mr-4 mt-1">
                      <ExclamationTriangleIcon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h5 className="font-bold text-red-400 mb-1">Primary Risk</h5>
                      <p className="text-slate-300">{artifact.risk}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-500/20 p-2 rounded-lg mr-4 mt-1">
                      <LightBulbIcon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h5 className="font-bold text-green-400 mb-1">Strategic Recommendation</h5>
                      <p className="text-slate-300">{artifact.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <span className="sr-only">Close</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!selectedId && (
        <div className="text-center text-slate-500 mt-8 italic">
          Select a quadrant to explore the governance model
        </div>
      )}
    </div>
  );
}
