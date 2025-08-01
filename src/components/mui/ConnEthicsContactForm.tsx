'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ConnEthicsCard from './ConnEthicsCard';

interface ConnEthicsContactFormProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (data: FormData) => Promise<void>;
  services?: string[];
}

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  newsletter: boolean;
}

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const ConnEthicsContactForm: React.FC<ConnEthicsContactFormProps> = ({
  title = 'Get in Touch',
  subtitle = 'Ready to discuss your project? Let&apos;s start a conversation.',
  onSubmit,
  services = [
    'AI Ethics Consulting',
    'Information Architecture',
    'Knowledge Management',
    'Product Leadership',
    'Digital Transformation',
    'Other',
  ],
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    newsletter: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (field: keyof FormData) => (event: any) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission logic
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) throw new Error('Failed to submit');
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        newsletter: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ConnEthicsCard variant="elevated">
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      {submitStatus === 'success' && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Thank you for your message! We'll get back to you within 24 hours.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert severity="error" sx={{ mb: 3 }}>
          There was an error sending your message. Please try again.
        </Alert>
      )}

      <StyledForm onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            fullWidth
            label="Full Name"
            value={formData.name}
            onChange={handleChange('name')}
            required
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            required
            variant="outlined"
          />
        </Box>

        <TextField
          fullWidth
          label="Company"
          value={formData.company}
          onChange={handleChange('company')}
          variant="outlined"
        />

        <FormControl fullWidth>
          <InputLabel>Service Interest</InputLabel>
          <Select
            value={formData.service}
            onChange={handleChange('service')}
            label="Service Interest"
          >
            {services.map((service) => (
              <MenuItem key={service} value={service}>
                {service}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange('message')}
          required
          variant="outlined"
          placeholder="Tell us about your project, goals, and how we can help..."
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.newsletter}
              onChange={handleChange('newsletter')}
              color="primary"
            />
          }
          label="Subscribe to our newsletter for insights on AI ethics and digital transformation"
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: '1.125rem',
            fontWeight: 600,
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </StyledForm>
    </ConnEthicsCard>
  );
};

export default ConnEthicsContactForm;
