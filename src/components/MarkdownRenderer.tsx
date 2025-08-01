'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to extract text content from React children recursively
  const extractTextContent = (node: any): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractTextContent).join('');
    if (node && typeof node === 'object' && node.props) {
      if (node.props.children) {
        return extractTextContent(node.props.children);
      }
    }
    return '';
  };

  // Color block detection function
  const getBlockquoteComponent = (children: any) => {
    const textContent = extractTextContent(children).toLowerCase();
    
    // Always return blockquote initially to match SSR, then enhance on client
    const baseClassName = "border-l-4 pl-4 mb-4 p-4 rounded-r-lg";
    
    // Determine color variant
    let colorClasses = "border-gray-300 italic text-gray-600 bg-gray-50"; // default
    let isColorBlock = false;
    
    if (mounted) {
      // Yellow blocks - legal compliance, caution, attention needed (check first for priority)
      if (textContent.includes('⚖️') || 
          textContent.includes('legal compliance') || 
          textContent.includes('caution') ||
          textContent.includes('attention') ||
          textContent.includes('statutory')) {
        colorClasses = "border-yellow-400 bg-yellow-50";
        isColorBlock = true;
      }
      // Red blocks - warnings, mandatory requirements, errors
      else if (textContent.includes('⚠️') || 
          textContent.includes('mandatory requirement') || 
          textContent.includes('warning') ||
          textContent.includes('required') ||
          textContent.includes('must comply')) {
        colorClasses = "border-red-400 bg-red-50";
        isColorBlock = true;
      }
      // Green blocks - success, approval, positive information
      else if (textContent.includes('✅') || 
          textContent.includes('approval criteria') || 
          textContent.includes('success') ||
          textContent.includes('approved') ||
          textContent.includes('compliance achieved')) {
        colorClasses = "border-green-400 bg-green-50";
        isColorBlock = true;
      }
      // Blue blocks - information, regulatory context, notes
      else if (textContent.includes('📋') || 
          textContent.includes('regulatory context') || 
          textContent.includes('information') ||
          textContent.includes('note:') ||
          textContent.includes('important:')) {
        colorClasses = "border-blue-400 bg-blue-50";
        isColorBlock = true;
      }
    }

    const textColorClass = mounted && isColorBlock 
      ? (colorClasses.includes('yellow') ? 'text-yellow-800 font-medium' :
         colorClasses.includes('red') ? 'text-red-800 font-medium' :
         colorClasses.includes('green') ? 'text-green-800 font-medium' :
         colorClasses.includes('blue') ? 'text-blue-800 font-medium' :
         'text-gray-600 italic')
      : 'text-gray-600 italic';

    return (
      <blockquote 
        className={`${baseClassName} ${colorClasses}`}
        suppressHydrationWarning={true}
      >
        <div className={textColorClass}>
          {children}
        </div>
      </blockquote>
    );
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          blockquote: ({ children }) => getBlockquoteComponent(children),
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-700">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-800">{children}</em>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 px-4 py-2">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}