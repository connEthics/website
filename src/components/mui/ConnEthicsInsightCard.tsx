'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import ConnEthicsCard from './ConnEthicsCard';
import ConnEthicsButton from './ConnEthicsButton';

interface ConnEthicsInsightCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime?: string;
  publishDate?: string;
  author?: string;
  image?: string;
  href?: string;
  tags?: string[];
  featured?: boolean;
}

const InsightCard = styled(ConnEthicsCard)<{ featured?: boolean }>(({ theme, featured }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
  },
  
  ...(featured && {
    border: `1px solid ${theme.palette.primary.main}`,
  }),
}));

const ImageContainer = styled(Box)({
  width: '100%',
  height: 200,
  overflow: 'hidden',
  position: 'relative',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});

const ConnEthicsInsightCard: React.FC<ConnEthicsInsightCardProps> = ({
  title,
  excerpt,
  category,
  readTime,
  publishDate,
  author,
  image,
  href,
  tags = [],
  featured = false,
}) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <InsightCard
      variant="elevated"
      featured={featured}
      onClick={handleClick}
      sx={{ p: 0 }}
    >
      {image && (
        <ImageContainer>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </ImageContainer>
      )}
      
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            label={category}
            size="small"
            sx={{
              bgcolor: featured ? 'primary.main' : 'primary.light',
              color: 'white',
              fontWeight: 600,
            }}
          />
        </Box>
        
        <Typography
          variant="h5"
          component="h3"
          sx={{
            mb: 2,
            fontWeight: 600,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5,
          }}
        >
          {excerpt}
        </Typography>
        
        {tags.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {tags.slice(0, 3).map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: '0.75rem',
                    height: 24,
                  }}
                />
              ))}
              {tags.length > 3 && (
                <Chip
                  label={`+${tags.length - 3}`}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: '0.75rem',
                    height: 24,
                  }}
                />
              )}
            </Box>
          </Box>
        )}
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto',
          }}
        >
          <Box>
            {author && (
              <Typography variant="caption" color="text.secondary">
                By {author}
              </Typography>
            )}
            {publishDate && (
              <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                • {publishDate}
              </Typography>
            )}
          </Box>
          
          {readTime && (
            <Chip
              label={readTime}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.75rem',
                height: 24,
              }}
            />
          )}
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <ConnEthicsButton
            variant="ghost"
            size="small"
            sx={{ p: 0, minWidth: 'auto' }}
          >
            Read More →
          </ConnEthicsButton>
        </Box>
      </Box>
    </InsightCard>
  );
};

export default ConnEthicsInsightCard;
