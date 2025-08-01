'use client';

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ConnEthicsCard from './ConnEthicsCard';

interface ConnEthicsTestimonialProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  variant?: 'default' | 'featured';
}

const TestimonialCard = styled(ConnEthicsCard)<{ testimonialvariant?: string }>(({ theme, testimonialvariant }) => ({
  ...(testimonialvariant === 'featured' && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}20 100%)`,
    border: `1px solid ${theme.palette.primary.main}30`,
  }),
}));

const QuoteIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  opacity: 0.3,
  lineHeight: 1,
  fontFamily: 'serif',
}));

const ConnEthicsTestimonial: React.FC<ConnEthicsTestimonialProps> = ({
  quote,
  author,
  rating,
  variant = 'default',
}) => {
  return (
    <TestimonialCard variant="elevated" testimonialvariant={variant}>
      <Box sx={{ position: 'relative' }}>
        <QuoteIcon>&quot;</QuoteIcon>
        
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            fontStyle: 'italic',
            mb: 3,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {quote}
        </Typography>
        
        {rating && (
          <Box sx={{ mb: 2, display: 'flex', gap: 0.5 }}>
            {Array.from({ length: 5 }, (_, i) => (
              <Box
                key={i}
                sx={{
                  color: i < rating ? 'warning.main' : 'grey.300',
                  fontSize: '1.25rem',
                }}
              >
                ★
              </Box>
            ))}
          </Box>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={author.avatar}
            alt={author.name}
            sx={{
              width: 48,
              height: 48,
              bgcolor: 'primary.main',
            }}
          >
            {author.name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {author.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {author.title}
              {author.company && ` at ${author.company}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </TestimonialCard>
  );
};

export default ConnEthicsTestimonial;
