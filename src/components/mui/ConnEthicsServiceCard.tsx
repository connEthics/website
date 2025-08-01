'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ConnEthicsCard from './ConnEthicsCard';
import ConnEthicsButton from './ConnEthicsButton';

interface ConnEthicsServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price?: {
    amount: string;
    period?: string;
  };
  badge?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  featured?: boolean;
}

const ServiceCardContainer = styled(ConnEthicsCard)<{ featured?: boolean }>(({ theme, featured }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  
  ...(featured && {
    border: `2px solid ${theme.palette.primary.main}`,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    },
  }),
}));

const ConnEthicsServiceCard: React.FC<ConnEthicsServiceCardProps> = ({
  title,
  description,
  features,
  price,
  badge,
  ctaLabel = 'Get Started',
  onCtaClick,
  featured = false,
}) => {
  return (
    <ServiceCardContainer 
      variant={featured ? 'outlined' : 'elevated'}
      featured={featured}
      sx={{ p: 0 }}
    >
      <Box sx={{ p: 3, flexGrow: 1 }}>
        {badge && (
          <Box sx={{ mb: 2 }}>
            <Chip
              label={badge}
              color="primary"
              size="small"
              sx={{
                fontWeight: 600,
                bgcolor: featured ? 'primary.main' : 'primary.light',
                color: 'white',
              }}
            />
          </Box>
        )}
        
        <Typography variant="h4" component="h3" gutterBottom>
          {title}
        </Typography>
        
        {price && (
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'baseline',
                gap: 1,
              }}
            >
              {price.amount}
              {price.period && (
                <Typography
                  variant="body1"
                  component="span"
                  color="text.secondary"
                  sx={{ fontWeight: 400 }}
                >
                  / {price.period}
                </Typography>
              )}
            </Typography>
          </Box>
        )}
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
        
        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
          {features.map((feature, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 1,
                '&::before': {
                  content: '"✓"',
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mr: 1,
                  mt: 0.25,
                },
              }}
            >
              <Typography variant="body2">{feature}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      
      <Box sx={{ p: 3, pt: 0 }}>
        <ConnEthicsButton
          variant={featured ? 'primary' : 'outline'}
          fullWidth
          size="large"
          onClick={onCtaClick}
        >
          {ctaLabel}
        </ConnEthicsButton>
      </Box>
    </ServiceCardContainer>
  );
};

export default ConnEthicsServiceCard;
