'use client';

import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import ConnEthicsCard from './ConnEthicsCard';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

interface ConnEthicsFeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'cards' | 'simple';
}

const ConnEthicsFeatureGrid: React.FC<ConnEthicsFeatureGridProps> = ({
  title,
  subtitle,
  features,
  columns = 3,
  variant = 'cards',
}) => {
  const gridColumns = {
    xs: 1,
    sm: columns >= 3 ? 2 : columns,
    md: columns === 4 ? 2 : columns,
    lg: columns,
  };

  const renderFeature = (feature: Feature) => {
    const content = (
      <Box sx={{ textAlign: 'center', p: variant === 'simple' ? 2 : 0 }}>
        {feature.icon && (
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: 'center',
              '& svg': {
                fontSize: 48,
                color: 'primary.main',
              },
            }}
          >
            {feature.icon}
          </Box>
        )}
        
        <Typography variant="h5" component="h3" gutterBottom>
          {feature.title}
        </Typography>
        
        <Typography variant="body1" color="text.secondary">
          {feature.description}
        </Typography>
      </Box>
    );

    if (variant === 'cards') {
      return (
        <ConnEthicsCard
          key={feature.id}
          variant="elevated"
          sx={{
            height: '100%',
            cursor: feature.href ? 'pointer' : 'default',
            '&:hover': feature.href ? {
              transform: 'translateY(-6px)',
            } : {},
          }}
          onClick={feature.href ? () => {
            if (feature.href) window.location.href = feature.href;
          } : undefined}
        >
          {content}
        </ConnEthicsCard>
      );
    }

    return (
      <Box
        key={feature.id}
        sx={{
          cursor: feature.href ? 'pointer' : 'default',
          '&:hover': feature.href ? {
            transform: 'translateY(-2px)',
          } : {},
          transition: 'transform 0.2s ease-in-out',
        }}
        onClick={feature.href ? () => {
          if (feature.href) window.location.href = feature.href;
        } : undefined}
      >
        {content}
      </Box>
    );
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {(title || subtitle) && (
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            {title && (
              <Typography variant="h2" component="h2" gutterBottom>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: '1.25rem',
                  maxWidth: '600px',
                  mx: 'auto',
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid 
              size={{ 
                xs: gridColumns.xs, 
                sm: gridColumns.sm, 
                md: gridColumns.md, 
                lg: gridColumns.lg 
              }} 
              key={feature.id}
            >
              {renderFeature(feature)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ConnEthicsFeatureGrid;
