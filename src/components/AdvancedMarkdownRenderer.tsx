'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

interface AdvancedMarkdownRendererProps {
  content: string;
  enableTOC?: boolean;
}

export default function AdvancedMarkdownRenderer({ content, enableTOC = true }: AdvancedMarkdownRendererProps) {
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (!enableTOC) return;

    // Extract table of contents from markdown content
    const headings = content.match(/^#{1,3}\s+(.+)$/gm) || [];
    const toc = headings.map((heading, index) => {
      const level = heading.match(/^#+/)?.[0].length || 1;
      const title = heading.replace(/^#+\s+/, '').replace(/[*_`]/g, '');
      const id = `section-${index}`;
      return { id, title, level };
    });
    
    setTableOfContents(toc);
  }, [content, enableTOC]);

  useEffect(() => {
    if (!mounted || !enableTOC) return;

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
  }, [tableOfContents, mounted, enableTOC]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Enhanced markdown parser
  const parseMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const result: React.ReactElement[] = [];
    let headingIndex = 0;
    
    interface ListItem {
      text: string;
      level: number;
      type: 'ul' | 'ol';
    }
    let listItems: ListItem[] = [];
    
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const renderNestedList = (items: ListItem[], baseLevel: number = 0): React.ReactElement => {
      if (items.length === 0) return <></>;

      const rootType = items[0].type;
      const Tag = rootType;
      const listClass = rootType === 'ul' ? "list-disc" : "list-decimal";
      
      const elements: React.ReactElement[] = [];
      let i = 0;
      
      while (i < items.length) {
        const item = items[i];
        const content = <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item.text) }} />;
        
        const children: ListItem[] = [];
        let j = i + 1;
        
        while (j < items.length && items[j].level > item.level) {
          children.push(items[j]);
          j++;
        }
        
        elements.push(
          <li key={i} className="text-lg leading-relaxed my-1">
            {content}
            {children.length > 0 && renderNestedList(children, item.level + 1)}
          </li>
        );
        
        i = j;
      }

      return (
        <Tag className={`${listClass} list-inside text-slate-700 mb-4 space-y-1 ${baseLevel > 0 ? 'ml-6' : 'ml-4'}`}>
          {elements}
        </Tag>
      );
    };

    const flushListItems = () => {
      if (listItems.length > 0) {
        const minLevel = Math.min(...listItems.map(i => i.level));
        const normalizedItems = listItems.map(i => ({ ...i, level: i.level - minLevel }));
        
        result.push(
          <div key={`list-${result.length}`} className="mb-6">
            {renderNestedList(normalizedItems)}
          </div>
        );
        listItems = [];
      }
    };

    const flushCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        result.push(
          <div key={`code-${result.length}`} className="mb-6">
            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm font-mono">
                {codeBlockContent.join('\n')}
              </code>
            </pre>
          </div>
        );
        codeBlockContent = [];
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        result.push(
          <div key={`table-${result.length}`} className="overflow-x-auto mb-8">
            <div className="bg-white rounded-lg shadow-sm">
              {tableRows.map((row, rowIndex) => (
                <div key={rowIndex} className={`grid gap-4 p-4 ${rowIndex === 0 ? 'bg-slate-50' : ''} ${rowIndex > 0 && rowIndex < tableRows.length - 1 ? 'border-b border-slate-100' : ''}`} style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}>
                  {row.map((cell, cellIndex) => (
                    <div key={cellIndex} className={`${rowIndex === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                      <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(cell) }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
        tableRows = [];
      }
    };

    const parseInlineMarkdown = (text: string): string => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline">$1</a>');
    };

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.match(/^```/)) {
        if (inCodeBlock) {
          // End code block
          inCodeBlock = false;
          flushCodeBlock();
        } else {
          // Start code block
          flushListItems();
          inCodeBlock = true;
          // Language detection removed to fix unused variable warning
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Handle headings
      if (line.match(/^#{1,3}\s+/)) {
        flushListItems();
        const level = line.match(/^#+/)?.[0].length || 1;
        const text = line.replace(/^#+\s+/, '');
        const id = `section-${headingIndex}`;
        headingIndex++;
        
        const className = level === 1 
          ? "text-4xl font-bold text-slate-900 mb-6 pt-8 scroll-mt-24"
          : level === 2 
          ? "text-3xl font-bold text-slate-900 mb-4 mt-12 pt-4 scroll-mt-24"
          : "text-2xl font-semibold text-slate-900 mb-3 mt-8 pt-2 scroll-mt-24";
        
        const HeadingTag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';
        
        result.push(
          <HeadingTag key={index} id={id} className={className}>
            <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(text) }} />
          </HeadingTag>
        );
        return;
      }
      
      // Handle lists
      const listMatch = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)/);
      if (listMatch) {
        const indent = listMatch[1].length;
        const type = listMatch[2].match(/\d+\./) ? 'ol' : 'ul';
        const text = listMatch[3];
        // Normalize indent (assuming 2 spaces per level)
        const level = Math.floor(indent / 2); 
        listItems.push({ text, level, type });
        return;
      }
      
      // Handle blockquotes
      if (line.match(/^>/)) {
        flushListItems();
        const text = line.replace(/^>\s*/, '');
        result.push(
          <blockquote key={index} className="border-l-4 border-blue-400 bg-blue-50 pl-4 py-2 mb-4 italic text-slate-700">
            <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(text) }} />
          </blockquote>
        );
        return;
      }
      
      // Handle tables
      if (line.includes('|') && line.trim() && !line.match(/^[-:\s|]+$/)) {
        flushListItems();
        
        const cells = line.split('|').map(cell => cell.trim()).filter(cell => cell);
        if (cells.length > 0) {
          if (!inTable) {
            inTable = true;
          }
          tableRows.push(cells);
        }
        return;
      }
      
      // Handle table separator lines (ignore them)
      if (line.match(/^[-:\s|]+$/)) {
        return;
      }
      
      // If we were in a table and this line is not a table, flush the table
      if (inTable && !line.includes('|')) {
        flushTable();
        inTable = false;
      }
      
      // Handle empty lines
      if (!line.trim()) {
        flushListItems();
        result.push(<div key={index} className="mb-2" />);
        return;
      }
      
      // Handle images
      const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)/);
      if (imageMatch) {
        flushListItems();
        const [, alt, src] = imageMatch;
        result.push(
          <div key={index} className="my-8">
            <Image 
              src={src} 
              alt={alt} 
              width={800}
              height={450}
              className="rounded-lg shadow-md w-full h-auto"
              style={{ width: '100%', height: 'auto' }}
            />
            {alt && (
              <p className="text-sm text-slate-500 text-center mt-2 italic">
                {alt}
              </p>
            )}
          </div>
        );
        return;
      }

      // Handle paragraphs
      // Allow lines starting with * (bold) or - (if not a list/hr) to be paragraphs if they weren't caught above
      if (line.trim() && !line.match(/^[#]|^\||^>/)) {
        flushListItems();
        result.push(
          <p key={index} className="text-lg text-slate-700 mb-4 leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(line) }} />
          </p>
        );
        return;
      }
    });

    // Flush any remaining items
    flushListItems();
    flushCodeBlock();
    flushTable();

    return result;
  };

  if (!mounted) {
    return null; // Prevent hydration issues
  }

  const parsedContent = parseMarkdown(content);

  return (
    <div className={`relative ${enableTOC ? 'lg:flex lg:flex-row-reverse lg:gap-8' : ''}`}>
      {/* Floating Navigation Toggle */}
      {enableTOC && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-20 right-4 z-50 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors lg:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-slate-600" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-slate-600" />
          )}
        </button>
      )}

      {/* Floating Table of Contents */}
      {enableTOC && (
        <nav
          className={`fixed top-16 right-0 bottom-0 w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:translate-x-0 lg:static lg:w-64 lg:shadow-none lg:bg-transparent lg:h-auto lg:block`}
        >
          <div className="h-full overflow-y-auto p-6 lg:p-0 lg:sticky lg:top-8 lg:max-h-[calc(100vh-4rem)]">
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
      )}

      {/* Overlay for mobile menu - transparent for content visibility */}
      {enableTOC && isMenuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <article className="prose prose-lg max-w-none">
          <div className="space-y-2">
            {parsedContent}
          </div>
        </article>
      </div>
    </div>
  );
}
