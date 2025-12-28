'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon, 
  CpuChipIcon, 
  ShieldExclamationIcon, 
  CheckBadgeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

type Option = {
  id: string;
  label: string;
  riskScore: number; // 0 = Low, 10 = High
  feedback: string;
};

type Question = {
  id: string;
  text: string;
  options: Option[];
};

const questions: Question[] = [
  {
    id: 'storage',
    text: "Where are your team's AI configurations (.cursorrules, prompts) currently stored?",
    options: [
      { id: 'local', label: "On developers' local machines (VS Code profiles)", riskScore: 10, feedback: "High Risk: This is 'Shadow AI'. If a developer leaves, the knowledge leaves with them." },
      { id: 'repo', label: "Committed in the Code Repository", riskScore: 2, feedback: "Good: Context travels with code. But beware of public leaks if the repo is open." },
      { id: 'vendor', label: "In the Vendor's Cloud / Platform", riskScore: 7, feedback: "Risk: Vendor Lock-in. You don't own your intelligence layer." },
    ]
  },
  {
    id: 'review',
    text: "How do you validate changes to Agent definitions (.agent, .skills)?",
    options: [
      { id: 'none', label: "We don't. Developers change them as needed.", riskScore: 9, feedback: "Dangerous: Non-deterministic behavior in production." },
      { id: 'pr', label: "Standard Pull Request process", riskScore: 3, feedback: "Better: But are your reviewers trained to spot prompt injections?" },
      { id: 'automated', label: "Automated 'PromptOps' pipeline (Eval & Scan)", riskScore: 0, feedback: "Excellent: You are treating Context as Code." },
    ]
  },
  {
    id: 'ownership',
    text: "In your contract with your ESN/Vendor, who owns the 'Prompt Engineering' output?",
    options: [
      { id: 'client', label: "Us (The Client)", riskScore: 0, feedback: "Correct: Ensure this covers the *files* (.agent), not just the output code." },
      { id: 'vendor', label: "The Vendor (Background IP)", riskScore: 8, feedback: "Warning: You are renting your own innovation." },
      { id: 'undefined', label: "It's not specified", riskScore: 10, feedback: "Critical: This is a legal minefield waiting to explode." },
    ]
  }
];

export default function AiGovernanceSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (option: Option) => {
    setAnswers(prev => ({ ...prev, [questions[currentStep].id]: option }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const calculateTotalRisk = () => {
    const total = Object.values(answers).reduce((acc, curr) => acc + curr.riskScore, 0);
    const max = questions.length * 10;
    return Math.round((total / max) * 100);
  };

  const getRiskLevel = (percentage: number) => {
    if (percentage < 30) return { label: "SECURE", color: "text-green-500", bg: "bg-green-500" };
    if (percentage < 70) return { label: "AT RISK", color: "text-yellow-500", bg: "bg-yellow-500" };
    return { label: "CRITICAL", color: "text-red-500", bg: "bg-red-500" };
  };

  if (showResults) {
    const risk = calculateTotalRisk();
    const level = getRiskLevel(risk);

    return (
      <div className="bg-slate-900 rounded-xl p-8 text-white shadow-2xl border border-slate-700 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-full mb-4">
            <CpuChipIcon className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Governance Analysis Complete</h3>
          <p className="text-slate-400">Based on your inputs, here is our assessment.</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="text-sm text-slate-400 uppercase tracking-wider mb-1">Risk Exposure</div>
            <div className={`text-5xl font-black ${level.color}`}>{risk}%</div>
            <div className={`text-sm font-bold mt-2 px-3 py-1 rounded-full bg-slate-800 ${level.color} inline-block`}>
              {level.label}
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {Object.entries(answers).map(([qId, option]) => (
            <div key={qId} className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-slate-600">
              <div className="text-xs text-slate-500 uppercase mb-1">
                {questions.find(q => q.id === qId)?.text}
              </div>
              <div className="font-medium text-white mb-2">{option.label}</div>
              <div className={`text-sm ${option.riskScore > 5 ? 'text-red-400' : 'text-green-400'}`}>
                <span className="font-bold">AI Insight:</span> {option.feedback}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button 
            onClick={reset}
            className="flex items-center px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <ArrowPathIcon className="w-5 h-5 mr-2" />
            Restart Analysis
          </button>
          <a 
            href="/contact"
            className="flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-bold"
          >
            <ShieldExclamationIcon className="w-5 h-5 mr-2" />
            Fix Vulnerabilities
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto border border-slate-200">
      <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
        <div className="flex items-center">
          <ChatBubbleLeftRightIcon className="w-6 h-6 text-cyan-400 mr-3" />
          <h3 className="font-bold text-lg">ConnEthics AI Auditor</h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          v1.0.4
        </div>
      </div>

      <div className="p-8 min-h-[400px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {isAnalyzing ? (
            <motion.div 
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <div className="inline-block w-16 h-16 border-4 border-slate-200 border-t-cyan-500 rounded-full animate-spin mb-6"></div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Processing Context...</h4>
              <p className="text-slate-500">Analyzing IP detention models and operational risks.</p>
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-2 text-cyan-600 font-bold text-sm tracking-wider">
                QUERY {currentStep + 1}/{questions.length}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                {questions[currentStep].text}
              </h4>

              <div className="space-y-3">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 rounded-lg border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700 group-hover:text-cyan-900">
                        {option.label}
                      </span>
                      <CheckBadgeIcon className="w-5 h-5 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
        <span>Session ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
        <span>ConnEthics Governance Engine</span>
      </div>
    </div>
  );
}
