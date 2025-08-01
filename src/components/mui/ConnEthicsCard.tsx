'use client';

import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/material/styles';

interface ConnEthicsCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const StyledCard = styled(Card)<{ customvariant?: string }>(({ theme, customvariant }) => ({
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out',
  border: `1px solid ${theme.palette.divider}`,
  
  ...(customvariant === 'elevated' && {
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
    },
  }),
  
  ...(customvariant === 'outlined' && {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0 4px 20px rgba(14, 165, 233, 0.15)',
    },
  }),
  
  ...(customvariant === 'default' && {
    '&:hover': {
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },
  }),
}));

const ConnEthicsCard: React.FC<ConnEthicsCardProps> = ({
  title,
  subtitle,
  children,
  actions,
  variant = 'default',
  className,
  sx,
  onClick,
}) => {
  return (
    <StyledCard 
      customvariant={variant} 
      className={className}
      sx={sx}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {(title || subtitle) && (
        <CardContent sx={{ pb: subtitle ? 1 : 2 }}>
          {title && (
            <Typography variant="h5" component="h3" gutterBottom>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </CardContent>
      )}
      
      <CardContent sx={{ pt: title || subtitle ? 0 : 2 }}>
        {children}
      </CardContent>
      
      {actions && (
        <CardActions sx={{ p: 2, pt: 0 }}>
          {actions}
        </CardActions>
      )}
    </StyledCard>
  );
};

export default ConnEthicsCard;
