'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from '@/components/mui';

export default function Insights() {
  const articles = useMemo(() => [
    {
      title: "Guide Pratique : Identité Souveraine avec ACA-Py",
      excerpt: "Guide complet pour comprendre et implémenter l'identité souveraine (SSI) avec ACA-Py. Scénarios pratiques, exemples de code et cas d'usage entreprise.",
      date: "Août 2, 2025",
      category: "Self-Sovereign Identity",
      readTime: "15 min read",
      slug: "identite-souveraine-aca-py-guide",
      featured: true
    },
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
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="default"
        title="Insights & Perspectives"
        subtitle="Thought Leadership in Ethical Business"
        description="Thought leadership on ethical business practices, competitive intelligence, and building trust in complex digital ecosystems."
      />

      {/* Content Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          {/* Category Filter */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 6 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => handleCategoryFilter(category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                sx={{ 
                  px: 2, 
                  py: 0.5,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: selectedCategory === category ? 'primary.dark' : 'primary.main',
                    color: selectedCategory === category ? 'white' : 'white'
                  }
                }}
              />
            ))}
          </Box>

          {/* Articles Grid */}
          <Grid container spacing={4} sx={{ mb: 10 }}>
            {filteredArticles.map((article, index) => {
              // Check if article has a full page
              const hasFullArticle = article.slug;
              
              const getArticleUrl = () => {
                if (hasFullArticle) return `/insights/${article.slug}`;
                return "#";
              };
              
              return (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ConnEthicsCard 
                    variant="elevated" 
                    sx={{ 
                      height: '100%',
                      ...(article.featured && {
                        border: 2,
                        borderColor: 'primary.main',
                        position: 'relative',
                        '&::before': {
                          content: '"⭐"',
                          position: 'absolute',
                          top: -8,
                          right: -8,
                          backgroundColor: 'primary.main',
                          color: 'white',
                          borderRadius: '50%',
                          width: 24,
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          zIndex: 1
                        }
                      })
                    }}
                  >
                    <Box sx={{ p: 4 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
                        <Chip
                          label={article.category}
                          color="primary"
                          size="small"
                          onClick={() => handleCategoryFilter(article.category)}
                          sx={{ cursor: 'pointer' }}
                        />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {article.readTime}
                        </Typography>
                      </Stack>
                      
                      <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        {hasFullArticle ? (
                          <Link 
                            href={getArticleUrl()} 
                            style={{ 
                              textDecoration: 'none', 
                              color: 'inherit'
                            }}
                          >
                            <Box 
                              component="span"
                              sx={{
                                '&:hover': { color: 'primary.main' },
                                transition: 'color 0.2s ease'
                              }}
                            >
                              {article.title}
                            </Box>
                          </Link>
                        ) : (
                          article.title
                        )}
                      </Typography>
                      
                      <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        {article.excerpt}
                      </Typography>
                      
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {article.date}
                        </Typography>
                        {hasFullArticle ? (
                          <Link 
                            href={getArticleUrl()}
                            style={{ 
                              color: 'inherit', 
                              textDecoration: 'none',
                              fontWeight: 500
                            }}
                          >
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'primary.main', 
                                fontWeight: 500,
                                '&:hover': { color: 'primary.dark' }
                              }}
                            >
                              Read More →
                            </Typography>
                          </Link>
                        ) : (
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                            Coming Soon
                          </Typography>
                        )}
                      </Stack>
                    </Box>
                  </ConnEthicsCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <ConnEthicsCard variant="outlined" sx={{ bgcolor: 'primary.main', borderColor: 'primary.light', textAlign: 'center', p: 6 }}>
            <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.100', mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Leverage our expertise in Self-Sovereign Identity, Competitive Intelligence, 
              and Ethical Product Leadership to drive meaningful change in your organization.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ maxWidth: '400px', mx: 'auto' }}>
              <ConnEthicsButton
                variant="primary"
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                Get Started Today
              </ConnEthicsButton>
              <ConnEthicsButton
                variant="outline"
                size="large"
                href="/services"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'primary.main'
                  }
                }}
              >
                Explore Services
              </ConnEthicsButton>
            </Stack>
          </ConnEthicsCard>
        </Container>
      </Box>
    </Box>
  );
}
