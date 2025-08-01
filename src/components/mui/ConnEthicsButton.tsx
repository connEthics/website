'use client';

import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ConnEthicsButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled(Button)<{ customvariant?: string }>(({ theme, customvariant }) => ({
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
  
  ...(customvariant === 'primary' && {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
    },
  }),
  
  ...(customvariant === 'secondary' && {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
      transform: 'translateY(-1px)',
    },
  }),
  
  ...(customvariant === 'outline' && {
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      transform: 'translateY(-1px)',
    },
  }),
  
  ...(customvariant === 'ghost' && {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.primary.main + '10',
      transform: 'translateY(-1px)',
    },
  }),
}));

const ConnEthicsButton: React.FC<ConnEthicsButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <StyledButton
      customvariant={variant}
      size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ConnEthicsButton;
