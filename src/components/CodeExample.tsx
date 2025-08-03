'use client'

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { 
  Box, 
  IconButton, 
  Typography, 
  Snackbar, 
  Alert 
} from '@mui/material'
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material'

interface CodeExampleProps {
  code: string
  language: string
  title?: string
}

export default function CodeExample({ code, language, title }: CodeExampleProps) {
  const [copied, setCopied] = useState(false)
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  
  const handleCloseCopied = () => {
    setCopied(false)
  }
  
  return (
    <Box sx={{ position: 'relative', mb: 2 }}>
      {title && (
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
          {title}
        </Typography>
      )}
      <Box 
        sx={{ 
          position: 'relative',
          borderRadius: 1,
          overflow: 'hidden',
          '& pre': {
            margin: 0,
            padding: '16px !important',
            fontSize: '0.875rem',
            maxHeight: '400px',
            overflow: 'auto'
          }
        }}
      >
        <IconButton
          onClick={handleCopy}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)'
            }
          }}
          size="small"
        >
          <ContentCopyIcon fontSize="small" />
        </IconButton>
        
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: '4px'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
      
      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={handleCloseCopied}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseCopied} severity="success" sx={{ width: '100%' }}>
          Code copié dans le presse-papiers !
        </Alert>
      </Snackbar>
    </Box>
  )
}