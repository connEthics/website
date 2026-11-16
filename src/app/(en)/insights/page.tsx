'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from '@/components/mui';
import { getArticlePath, rootIndexArticles } from '@/lib/articles';

export default function Insights() {
  // Single source of truth: src/lib/articles.ts (root-index articles, same order).
  const articles = rootIndexArticles;

  const categories = useMemo(() => [
    "All",
    "DORA 2025",
    "Self-Sovereign Identity",
    "Ecosystem Cartography", 
    "Trust & Identity",
    "Product Leadership",
    "Business Ethics",
    "Developer Tools",
    "AI Governance"
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
    <Box sx={{ minHeight: '10vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="deep-ocean"
        title="Insights &amp; Perspectives"
        subtitle="THOUGHT_LEADERSHIP"
        description="Strategic intelligence on eIDAS 2.0, Self-Sovereign Identity, and building trust in complex digital ecosystems."
      />

      {/* Content Section */}
      <Box sx={{ py: '32px', bgcolor: (theme) => theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50' }}>
        <Container maxWidth="lg">
          {/* Category Filter */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 3 }}>
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
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
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
                if (hasFullArticle) return getArticlePath(article);
                return "#";
              };
              
              return (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ConnEthicsCard 
                    variant="blueprint" 
                    sx={{ 
                      height: '100%',
                      ...(article.featured && {
                        border: 2,
                        borderColor: 'primary.main'
                      }),
                      '& .MuiCardContent-root': {
                        padding: 0
                      }
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                        <Chip
                          label={article.category}
                          color="primary"
                          size="small"
                          onClick={() => handleCategoryFilter(article.category)}
                          sx={{ cursor: 'pointer' }}
                        />
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {article.readTime}
                          </Typography>
                          {article.featured && (
                            <Box
                              sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '50%',
                                width: 20,
                                height: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '10px'
                              }}
                            >
                              ⭐
                            </Box>
                          )}
                        </Stack>
                      </Stack>
                      
                      <Typography variant="h5" component="h3" sx={{ mb: 1.5, fontWeight: 600 }}>
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
                      
                      <Typography variant="body1" sx={{ mb: 2.5, color: 'text.secondary' }}>
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
      <Box 
        sx={{ 
          py: 8, 
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#030712' : '#0f172a',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', p: 6 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'primary.400', 
                fontWeight: 700, 
                letterSpacing: 2, 
                mb: 2, 
                display: 'block',
                fontFamily: 'monospace'
              }}
            >
              READY_TO_DEPLOY
            </Typography>
            <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h6" sx={{ color: 'grey.400', mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Leverage our expertise in eIDAS 2.0, Verifiable Credentials, 
              and Strategic Intelligence to turn regulation into revenue.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ maxWidth: '400px', mx: 'auto' }}>
              <ConnEthicsButton
                variant="primary"
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'grey.900',
                  fontFamily: 'monospace',
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                INITIALIZE →
              </ConnEthicsButton>
              <ConnEthicsButton
                variant="outline"
                size="large"
                href="/services"
                sx={{ 
                  borderColor: 'grey.600',
                  color: 'grey.300',
                  fontFamily: 'monospace',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'grey.400'
                  }
                }}
              >
                VIEW SERVICES
              </ConnEthicsButton>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
