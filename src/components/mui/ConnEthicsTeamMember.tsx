'use client';

import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ConnEthicsCard from './ConnEthicsCard';

interface ConnEthicsTeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  skills?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  featured?: boolean;
}

const TeamCard = styled(ConnEthicsCard)<{ featured?: boolean }>(({ theme, featured }) => ({
  textAlign: 'center',
  height: '100%',
  
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

const ConnEthicsTeamMember: React.FC<ConnEthicsTeamMemberProps> = ({
  name,
  role,
  bio,
  avatar,
  skills = [],
  social,
  featured = false,
}) => {
  return (
    <TeamCard variant="elevated" featured={featured}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          src={avatar}
          alt={name}
          sx={{
            width: 120,
            height: 120,
            mb: 2,
            bgcolor: 'primary.main',
            fontSize: '2rem',
            fontWeight: 600,
          }}
        >
          {name.split(' ').map(n => n[0]).join('')}
        </Avatar>
        
        <Typography variant="h5" component="h3" gutterBottom>
          {name}
        </Typography>
        
        <Typography
          variant="subtitle1"
          color="primary.main"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          {role}
        </Typography>
        
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.6 }}
        >
          {bio}
        </Typography>
        
        {skills.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                justifyContent: 'center',
              }}
            >
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
        
        {social && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {social.linkedin && (
              <Box
                component="a"
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  '&:hover': { color: 'primary.dark' },
                  fontSize: '1.5rem',
                }}
              >
                in
              </Box>
            )}
            
            {social.twitter && (
              <Box
                component="a"
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  '&:hover': { color: 'primary.dark' },
                  fontSize: '1.5rem',
                }}
              >
                @
              </Box>
            )}
            
            {social.email && (
              <Box
                component="a"
                href={`mailto:${social.email}`}
                sx={{
                  color: 'primary.main',
                  '&:hover': { color: 'primary.dark' },
                  fontSize: '1.5rem',
                }}
              >
                ✉
              </Box>
            )}
          </Box>
        )}
      </Box>
    </TeamCard>
  );
};

export default ConnEthicsTeamMember;
