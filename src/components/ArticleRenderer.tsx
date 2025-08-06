'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface ArticleRendererProps {
  content: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ArticleRenderer({ content, title, description, tags }: ArticleRendererProps) {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Extract table of contents from markdown content
    const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];
    const toc = headings.map((heading, index) => {
      const level = heading.match(/^#+/)?.[0].length || 1;
      const title = heading.replace(/^#+\s+/, '').replace(/[^\w\s-]/g, '');
      const id = `section-${index}`;
      return { id, title, level };
    });
    
    setTableOfContents(toc);
  }, [content]);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-100px 0px -50% 0px',
      }
    );

    // Observe all headings
    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [tableOfContents, mounted]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const customComponents = {
    h1: ({ children, ...props }: any) => {
      const index = tableOfContents.findIndex(item => item.title === children);
      const id = index >= 0 ? tableOfContents[index].id : '';
      return (
        <h1 id={id} className="text-4xl font-bold text-slate-900 mb-6 pt-8 scroll-mt-24" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: any) => {
      const index = tableOfContents.findIndex(item => item.title === children);
      const id = index >= 0 ? tableOfContents[index].id : '';
      return (
        <h2 id={id} className="text-3xl font-bold text-slate-900 mb-4 mt-12 pt-4 scroll-mt-24" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: any) => {
      const index = tableOfContents.findIndex(item => item.title === children);
      const id = index >= 0 ? tableOfContents[index].id : '';
      return (
        <h3 id={id} className="text-2xl font-semibold text-slate-900 mb-3 mt-8 pt-2 scroll-mt-24" {...props}>
          {children}
        </h3>
      );
    },
    p: ({ children, ...props }: any) => (
      <p className="text-lg text-slate-700 mb-4 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: any) => (
      <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }: any) => (
      <li className="text-lg leading-relaxed" {...props}>
        {children}
      </li>
    ),
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border-collapse border border-slate-300" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: any) => (
      <th className="border border-slate-300 bg-slate-100 px-4 py-2 text-left font-semibold text-slate-900" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td className="border border-slate-300 px-4 py-2 text-slate-700" {...props}>
        {children}
      </td>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-blue-400 bg-blue-50 pl-4 py-2 mb-4 italic text-slate-700" {...props}>
        {children}
      </blockquote>
    ),
    code: ({ children, inline, ...props }: any) => 
      inline ? (
        <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm font-mono" {...props}>
          {children}
        </code>
      ) : (
        <pre className="bg-slate-900 text-green-400 p-4 rounded-lg mb-4 overflow-x-auto">
          <code className="text-sm font-mono" {...props}>
            {children}
          </code>
        </pre>
      ),
    strong: ({ children, ...props }: any) => (
      <strong className="font-bold text-slate-900" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }: any) => (
      <em className="italic text-slate-800" {...props}>
        {children}
      </em>
    ),
  };

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Floating Navigation Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors lg:hidden"
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-slate-600" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-slate-600" />
        )}
      </button>

      {/* Floating Table of Contents */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:translate-x-0 lg:w-64 lg:shadow-lg`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Table des matières
          </h3>
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg transition-colors text-sm ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  } ${item.level === 2 ? 'ml-4' : item.level === 3 ? 'ml-8' : ''}`}
                >
                  <span className="flex items-center">
                    {item.level > 1 && (
                      <ChevronRightIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                    )}
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:pr-64">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <article className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={customComponents}
            >
              {content}
            </ReactMarkdown>
          </article>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">
              Intéressé par l&apos;identité décentralisée ?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              ConnEthics vous accompagne dans la compréhension et l&apos;implémentation 
              des technologies d&apos;identité souveraine pour votre organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="/services"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Nos services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
