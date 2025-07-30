'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';

export default function Insights() {
  const articles = useMemo(() => [
    {
      title: "Aligning Product Teams with Business Impact",
      excerpt: "Discover essential strategies for effectively aligning your product teams with business impact objectives and creating sustainable synergy in competitive environments.",
      date: "July 30, 2025",
      category: "Product Leadership",
      readTime: "8 min read",
      slug: "aligning-product-teams-business-impact"
    },
    {
      title: "The Future of Self-Sovereign Identity in Enterprise",
      excerpt: "Exploring how SSI will transform enterprise identity management and create new opportunities for secure, user-controlled digital interactions.",
      date: "July 25, 2025",
      category: "Self-Sovereign Identity",
      readTime: "5 min read",
      slug: "future-self-sovereign-identity-enterprise"
    },
    {
      title: "Competitive Intelligence in the Digital Age",
      excerpt: "Understanding economic warfare analysis and how modern businesses can gain strategic advantages through comprehensive ecosystem mapping.",
      date: "July 20, 2025", 
      category: "Ecosystem Cartography",
      readTime: "7 min read",
      slug: "competitive-intelligence-digital-age"
    },
    {
      title: "Building Trust Through Verifiable Credentials",
      excerpt: "How organizations can implement verifiable credential systems to enhance trust and streamline identity verification processes.",
      date: "July 15, 2025",
      category: "Trust & Identity",
      readTime: "6 min read",
      slug: "building-trust-verifiable-credentials"
    },
    {
      title: "Product Leadership in Ethical Business Ecosystems",
      excerpt: "Aligning product roadmaps with ethical frameworks while maintaining competitive advantage and driving innovation.",
      date: "July 10, 2025",
      category: "Product Leadership", 
      readTime: "8 min read",
      slug: "product-leadership-ethical-ecosystems"
    }
  ], []);

  const categories = useMemo(() => [
    "All",
    "Self-Sovereign Identity",
    "Ecosystem Cartography", 
    "Trust & Identity",
    "Product Leadership",
    "Business Ethics"
  ], []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Handle URL parameters for pre-filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam && categories.includes(filterParam)) {
      setSelectedCategory(filterParam);
    }
  }, [categories]);

  // Filter articles based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === selectedCategory));
    }
  }, [selectedCategory, articles]);

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (category === "All") {
      url.searchParams.delete('filter');
    } else {
      url.searchParams.set('filter', category);
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Insights & Perspectives
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thought leadership on ethical business practices, competitive intelligence, 
            and building trust in complex digital ecosystems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-6 py-2 rounded-full border transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-900 hover:text-white hover:border-blue-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredArticles.map((article, index) => {
            // Check if article has a full page
            const hasFullArticle = article.slug;
            
            const getArticleUrl = () => {
              if (hasFullArticle) return `/insights/${article.slug}`;
              return "#";
            };
            
            return (
              <article key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => handleCategoryFilter(article.category)}
                      className="inline-block bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors duration-200"
                    >
                      {article.category}
                    </button>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-900 dark:hover:text-blue-400 cursor-pointer">
                    {hasFullArticle ? (
                      <Link href={getArticleUrl()}>
                        {article.title}
                      </Link>
                    ) : (
                      article.title
                    )}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{article.date}</span>
                    {hasFullArticle ? (
                      <Link 
                        href={getArticleUrl()}
                        className="text-blue-900 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        Read More →
                      </Link>
                    ) : (
                      <button className="text-blue-900 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Leverage our expertise in Self-Sovereign Identity, Competitive Intelligence, 
            and Ethical Product Leadership to drive meaningful change in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex-1 text-center"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200 flex-1 text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
