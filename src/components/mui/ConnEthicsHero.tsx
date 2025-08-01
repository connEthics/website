'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import ConnEthicsButton from './ConnEthicsButton';

interface ConnEthicsHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  variant?: 'default' | 'gradient' | 'minimal';
}

const HeroContainer = styled(Box)<{ customvariant?: string; bgimage?: string }>(({ theme, customvariant, bgimage }) => ({
  position: 'relative',
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 0),
  
  ...(customvariant === 'gradient' && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}20 100%)`,
  }),
  
  ...(customvariant === 'minimal' && {
    backgroundColor: theme.palette.background.default,
  }),
  
  ...(bgimage && {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  }),
}));

const ConnEthicsHero: React.FC<ConnEthicsHeroProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  variant = 'default',
}) => {
  const handleAction = (action: { href?: string; onClick?: () => void }) => {
    if (action.onClick) {
      action.onClick();
    } else if (action.href) {
      window.location.href = action.href;
    }
  };

  return (
    <HeroContainer 
      customvariant={variant} 
      bgimage={backgroundImage}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: '800px',
            textAlign: { xs: 'center', md: 'left' },
            color: backgroundImage ? 'white' : 'inherit',
          }}
        >
          {subtitle && (
            <Typography
              variant="overline"
              component="p"
              sx={{
                mb: 2,
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: backgroundImage ? 'rgba(255, 255, 255, 0.8)' : 'primary.main',
              }}
            >
              {subtitle}
            </Typography>
          )}
          
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              lineHeight: 1.6,
              color: backgroundImage ? 'rgba(255, 255, 255, 0.9)' : 'text.secondary',
              maxWidth: '600px',
            }}
          >
            {description}
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'stretch', sm: 'center' },
            }}
          >
            {primaryAction && (
              <ConnEthicsButton
                variant="primary"
                size="large"
                onClick={() => handleAction(primaryAction)}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                }}
              >
                {primaryAction.label}
              </ConnEthicsButton>
            )}
            
            {secondaryAction && (
              <ConnEthicsButton
                variant={backgroundImage ? 'ghost' : 'outline'}
                size="large"
                onClick={() => handleAction(secondaryAction)}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.125rem',
                  ...(backgroundImage && {
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }),
                }}
              >
                {secondaryAction.label}
              </ConnEthicsButton>
            )}
          </Box>
        </Box>
      </Container>
    </HeroContainer>
  );
};

export default ConnEthicsHero;
