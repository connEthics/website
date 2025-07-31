'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { 
  Card, CardHeader, CardTitle, CardDescription, CardContent,
  Container, 
  Section,
  Grid,
  Stack,
  Heading,
  Text,
  Badge
} from "@/design-system/components";

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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      {/* Header Section */}
      <Section padding="xl" className="bg-white dark:bg-neutral-900">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h1" size="5xl" className="mb-6">
              Insights & Perspectives
            </Heading>
            <Text size="xl" variant="muted" className="max-w-4xl mx-auto">
              Thought leadership on ethical business practices, competitive intelligence, 
              and building trust in complex digital ecosystems.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section padding="xl" className="bg-neutral-100 dark:bg-neutral-800">
        <Container>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-2 rounded-full border transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-primary-600 hover:text-white hover:border-primary-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <Grid cols={1} responsive={{ md: 2 }} gap="lg" className="mb-20">
            {filteredArticles.map((article, index) => {
              // Check if article has a full page
              const hasFullArticle = article.slug;
              
              const getArticleUrl = () => {
                if (hasFullArticle) return `/insights/${article.slug}`;
                return "#";
              };
              
              return (
                <Card key={index} variant="elevated" padding="lg" className="h-full">
                  <CardHeader>
                    <Stack direction="horizontal" justify="between" align="start" className="mb-4">
                      <button
                        onClick={() => handleCategoryFilter(article.category)}
                        className="text-left"
                      >
                        <Badge variant="primary" size="sm" className="cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-800">
                          {article.category}
                        </Badge>
                      </button>
                      <Text size="sm" variant="subtle">{article.readTime}</Text>
                    </Stack>
                    <CardTitle size="xl" className="mb-3">
                      {hasFullArticle ? (
                        <Link href={getArticleUrl()} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                          {article.title}
                        </Link>
                      ) : (
                        article.title
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-6">
                      {article.excerpt}
                    </CardDescription>
                    <Stack direction="horizontal" justify="between" align="center">
                      <Text size="sm" variant="subtle">{article.date}</Text>
                      {hasFullArticle ? (
                        <Link 
                          href={getArticleUrl()}
                          className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200"
                        >
                          Read More →
                        </Link>
                      ) : (
                        <Text size="sm" variant="subtle" className="font-medium">
                          Coming Soon
                        </Text>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" className="bg-primary-900 text-white">
        <Container>
          <Card variant="default" padding="xl" className="bg-primary-900 border-primary-700 text-center">
            <CardHeader>
              <CardTitle size="3xl" className="text-white mb-4">
                Ready to Transform Your Business?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Text size="xl" className="mb-8 max-w-3xl mx-auto text-primary-100">
                Leverage our expertise in Self-Sovereign Identity, Competitive Intelligence, 
                and Ethical Product Leadership to drive meaningful change in your organization.
              </Text>
              <Stack direction="horizontal" gap="md" justify="center" className="flex-col sm:flex-row max-w-md mx-auto">
                <Link
                  href="/contact"
                  className="bg-white text-primary-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-neutral-100 transition-colors duration-200 flex-1 text-center"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary-900 transition-colors duration-200 flex-1 text-center"
                >
                  Explore Services
                </Link>
              </Stack>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </div>
  );
}
