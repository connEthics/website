'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Chip, 
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Tabs,
  Tab,
  Divider,
  CircularProgress
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  Smartphone as SmartphoneIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

// Sample French Identity Card Data
const SAMPLE_FRENCH_ID_DATA = {
  documentType: 'French National Identity Card',
  documentNumber: 'FR123456789',
  surname: 'MARTIN',
  givenNames: 'Jean Pierre',
  nationality: 'FRA',
  dateOfBirth: '1985-03-15',
  placeOfBirth: 'Paris, France',
  sex: 'M',
  issueDate: '2020-01-15',
  expiryDate: '2030-01-15',
  issuingAuthority: 'Prefecture de Paris',
  documentHash: 'SHA256:a1b2c3d4e5f6...',
  chipUID: 'E002FF...',
  securityFeatures: ['RFID/NFC Chip', 'Digital Signature', 'Biometric Data'],
  dataGroups: {
    DG1: 'Machine Readable Zone',
    DG2: 'Facial Image',
    DG3: 'Fingerprint (if available)',
    DG14: 'Security Infos',
    DG15: 'Active Authentication Public Key'
  }
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`data-tabpanel-${index}`}
      aria-labelledby={`data-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function NFCFrenchIdentityReader() {
  const [isNFCSupported, setIsNFCSupported] = useState<boolean | null>(null);
  const [isReading, setIsReading] = useState(false);
  const [cardData, setCardData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [useSampleData, setUseSampleData] = useState(false);

  // Check NFC support on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const supported = 'NDEFReader' in window;
      setIsNFCSupported(supported);
    }
  }, []);

  const handleReadNFC = useCallback(async () => {
    if (!isNFCSupported) {
      setError('NFC is not supported on this device or browser.');
      return;
    }

    try {
      setIsReading(true);
      setError(null);

      // Note: Actual NFC reading would require more complex MRTD parsing
      // This is a simplified demonstration
      const ndef = new (window as any).NDEFReader();
      
      await ndef.scan();
      
      ndef.addEventListener('reading', () => {
        // In a real implementation, this would parse MRTD data
        // For now, we simulate reading French ID card data
        setCardData({
          ...SAMPLE_FRENCH_ID_DATA,
          readTimestamp: new Date().toISOString(),
          readMethod: 'NFC',
          rawData: 'Binary MRTD data would be displayed here...'
        });
        setIsReading(false);
      });

      // Simulate reading after 3 seconds if no real card is detected
      setTimeout(() => {
        if (isReading) {
          setError('No compatible card detected. Please try again or use sample data.');
          setIsReading(false);
        }
      }, 3000);

    } catch (err: any) {
      setError(`NFC Error: ${err.message}`);
      setIsReading(false);
    }
  }, [isNFCSupported, isReading]);

  const handleUseSampleData = () => {
    setCardData({
      ...SAMPLE_FRENCH_ID_DATA,
      readTimestamp: new Date().toISOString(),
      readMethod: 'Sample Data',
      rawData: 'Sample binary MRTD data for demonstration purposes...'
    });
    setUseSampleData(true);
    setError(null);
  };

  const handleClearData = () => {
    setCardData(null);
    setUseSampleData(false);
    setError(null);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const renderSummaryView = () => (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>Personal Information</Typography>
            <Stack spacing={1}>
              <Typography><strong>Name:</strong> {cardData.givenNames} {cardData.surname}</Typography>
              <Typography><strong>Date of Birth:</strong> {cardData.dateOfBirth}</Typography>
              <Typography><strong>Nationality:</strong> {cardData.nationality}</Typography>
              <Typography><strong>Sex:</strong> {cardData.sex}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>Document Information</Typography>
            <Stack spacing={1}>
              <Typography><strong>Document Type:</strong> {cardData.documentType}</Typography>
              <Typography><strong>Document Number:</strong> {cardData.documentNumber}</Typography>
              <Typography><strong>Issue Date:</strong> {cardData.issueDate}</Typography>
              <Typography><strong>Expiry Date:</strong> {cardData.expiryDate}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderDetailedView = () => (
    <Stack spacing={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>Complete Information</Typography>
          <Grid container spacing={2}>
            {Object.entries(cardData).map(([key, value]) => {
              if (key === 'dataGroups' || key === 'securityFeatures' || key === 'rawData') return null;
              return (
                <Grid size={{ xs: 12, sm: 6 }} key={key}>
                  <Typography variant="body2">
                    <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>
                    <br />
                    {typeof value === 'string' ? value : JSON.stringify(value)}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
      
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>Security Features</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {cardData.securityFeatures?.map((feature: string, index: number) => (
              <Chip key={index} label={feature} variant="outlined" size="small" />
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>Data Groups (MRTD Structure)</Typography>
          <Stack spacing={1}>
            {Object.entries(cardData.dataGroups || {}).map(([dg, description]) => (
              <Typography key={dg} variant="body2">
                <strong>{dg}:</strong> {description as string}
              </Typography>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );

  const renderTechnicalView = () => (
    <Stack spacing={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>Technical Metadata</Typography>
          <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.875rem' }}>
            {JSON.stringify(cardData, null, 2)}
          </Typography>
        </CardContent>
      </Card>
      
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>Raw MRTD Data</Typography>
          <Typography variant="body2" sx={{ fontFamily: 'monospace', fontSize: '0.875rem', color: 'text.secondary' }}>
            {cardData.rawData}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ pt: 4, pb: 8 }}>
        {/* Navigation */}
        <Box sx={{ mb: 4 }}>
          <Link href="/insights" style={{ textDecoration: 'none' }}>
            <Button variant="text" sx={{ color: 'primary.main' }}>
              ← Back to Insights
            </Button>
          </Link>
        </Box>

        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            NFC-enabled French Identity Card Reader
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3, maxWidth: '800px', mx: 'auto' }}>
            An educational tool demonstrating NFC technology for reading French identity documents.
            Learn about MRTD standards, NFC protocols, and digital identity verification.
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
            <Chip label="Educational Tool" color="primary" />
            <Chip label="NFC Technology" color="secondary" />
            <Chip label="MRTD Standards" variant="outlined" />
            <Chip label="Privacy-First" variant="outlined" />
          </Stack>
        </Box>

        {/* NFC Reader Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack spacing={3} alignItems="center">
                  <SmartphoneIcon sx={{ fontSize: 64, color: 'primary.main' }} />
                  <Typography variant="h5" component="h2" textAlign="center">
                    NFC Card Reader
                  </Typography>
                  
                  {isNFCSupported === null && (
                    <CircularProgress size={24} />
                  )}
                  
                  {isNFCSupported === false && (
                    <Alert severity="warning" sx={{ width: '100%' }}>
                      NFC is not supported on this device or browser. Please use Chrome on an Android device with NFC enabled.
                    </Alert>
                  )}
                  
                  {isNFCSupported === true && (
                    <Alert severity="info" sx={{ width: '100%' }}>
                      NFC is supported! Place a French identity card near your device to read it.
                    </Alert>
                  )}

                  {error && (
                    <Alert severity="error" sx={{ width: '100%' }}>
                      {error}
                    </Alert>
                  )}

                  <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                    <Button
                      variant="contained"
                      onClick={handleReadNFC}
                      disabled={!isNFCSupported || isReading}
                      startIcon={isReading ? <CircularProgress size={20} /> : <SmartphoneIcon />}
                      size="large"
                      fullWidth
                    >
                      {isReading ? 'Reading...' : 'Start NFC Reading'}
                    </Button>
                    
                    <Button
                      variant="outlined"
                      onClick={handleUseSampleData}
                      startIcon={<InfoIcon />}
                      size="large"
                      fullWidth
                    >
                      Use Sample Data
                    </Button>
                    
                    {cardData && (
                      <Button
                        variant="text"
                        onClick={handleClearData}
                        color="error"
                        size="large"
                        fullWidth
                      >
                        Clear Data
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Privacy & Security Notice
                </Typography>
                <Stack spacing={2}>
                  <Alert severity="success" icon={<CheckCircleIcon />}>
                    <strong>Client-side only:</strong> All data processing happens locally on your device.
                  </Alert>
                  <Alert severity="info" icon={<InfoIcon />}>
                    <strong>No data transmission:</strong> No information is sent to external servers.
                  </Alert>
                  <Alert severity="warning" icon={<WarningIcon />}>
                    <strong>Educational purpose:</strong> This tool is for learning about NFC technology.
                  </Alert>
                  
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    French identity cards contain sensitive personal information. Always ensure you have 
                    proper authorization before reading identity documents. This tool respects data 
                    protection regulations and processes information locally only.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Data Display Section */}
        {cardData && (
          <Card sx={{ mb: 6 }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Typography variant="h5" component="h2">
                  Card Data
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip 
                    label={useSampleData ? 'Sample Data' : 'Live Data'} 
                    color={useSampleData ? 'default' : 'success'} 
                    size="small" 
                  />
                  <Chip 
                    label={`Read: ${new Date(cardData.readTimestamp).toLocaleTimeString()}`} 
                    variant="outlined" 
                    size="small" 
                  />
                </Stack>
              </Stack>

              <Tabs value={currentTab} onChange={handleTabChange} sx={{ mb: 3 }}>
                <Tab label="Summary View" />
                <Tab label="Detailed View" />
                <Tab label="Technical View" />
              </Tabs>

              <TabPanel value={currentTab} index={0}>
                {renderSummaryView()}
              </TabPanel>
              <TabPanel value={currentTab} index={1}>
                {renderDetailedView()}
              </TabPanel>
              <TabPanel value={currentTab} index={2}>
                {renderTechnicalView()}
              </TabPanel>
            </CardContent>
          </Card>
        )}

        {/* Educational Content */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
          Understanding NFC Technology & Standards
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={3}>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">What is NFC and How Does it Work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    Near Field Communication (NFC) is a short-range wireless communication technology 
                    that enables devices to exchange data when they are within 4 centimeters of each other. 
                    French identity cards use NFC technology to store and transmit identity information securely.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    NFC operates at 13.56 MHz and can transfer data at speeds up to 424 kbps. The technology 
                    is based on electromagnetic induction and requires no power source for passive devices like 
                    identity cards.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">MRTD Standards (Machine Readable Travel Documents)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    Machine Readable Travel Documents (MRTD) are standardized by the International Civil 
                    Aviation Organization (ICAO). These standards define how identity information is stored 
                    and accessed on electronic documents.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Key MRTD Data Groups:</strong>
                  </Typography>
                  <ul>
                    <li><strong>DG1:</strong> Machine Readable Zone data</li>
                    <li><strong>DG2:</strong> Facial image</li>
                    <li><strong>DG3:</strong> Fingerprint data (when available)</li>
                    <li><strong>DG14:</strong> Security infos</li>
                    <li><strong>DG15:</strong> Active Authentication Public Key</li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">ISO 14443 & ICAO 9303 Standards</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    <strong>ISO 14443:</strong> Defines the physical characteristics and communication protocols 
                    for proximity cards. French identity cards implement ISO 14443 Type A for NFC communication.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>ICAO 9303:</strong> Specifies the technical specifications for machine readable 
                    travel documents, including security features, data structure, and authentication mechanisms.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    These standards ensure interoperability and security across different countries and systems.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Browser Compatibility & Web NFC API</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    The Web NFC API is currently supported in Chrome browsers on Android devices. 
                    Support is limited due to security and privacy considerations.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Requirements:</strong>
                  </Typography>
                  <ul>
                    <li>Chrome browser version 89 or later</li>
                    <li>Android device with NFC capability</li>
                    <li>HTTPS connection (required for security)</li>
                    <li>User permission for NFC access</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Technical Resources
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="outlined"
                    fullWidth
                    href="https://www.icao.int/publications/Documents/9303_p11_cons_en.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ICAO 9303 Specification
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    href="https://www.iso.org/standard/73599.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ISO 14443 Standard
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    href="https://web.dev/nfc/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web NFC API Guide
                  </Button>
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" gutterBottom>
                  Troubleshooting
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Card not detected?</strong>
                  <br />
                  • Ensure NFC is enabled on your device
                  <br />
                  • Hold the card flat against the back of your phone
                  <br />
                  • Try removing any case or cover
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Browser not supported?</strong>
                  <br />
                  • Use Chrome on Android
                  <br />
                  • Ensure you&apos;re on HTTPS
                  <br />
                  • Update your browser
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Legal and Ethical Considerations */}
        <Card sx={{ mb: 6 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Legal and Ethical Considerations
            </Typography>
            
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" gutterBottom>Data Protection & Privacy</Typography>
                <Typography variant="body1" paragraph>
                  French identity cards contain personal data protected under GDPR and French data protection laws. 
                  Reading identity documents without proper authorization may violate privacy regulations.
                </Typography>
                <Typography variant="body1" paragraph>
                  This educational tool processes all data locally and does not transmit any information to external servers.
                </Typography>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" gutterBottom>Responsible Use</Typography>
                <Typography variant="body1" paragraph>
                  Always obtain explicit consent before reading someone else&apos;s identity document. 
                  This tool should only be used for educational purposes and legitimate identity verification needs.
                </Typography>
                <Typography variant="body1" paragraph>
                  Organizations implementing similar technology must comply with applicable regulations 
                  and implement appropriate security measures.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
          <CardContent sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Need Help with Digital Identity Solutions?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              ConnEthics specializes in ethical implementation of digital identity technologies, 
              helping organizations navigate the complex landscape of privacy, security, and compliance.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': { bgcolor: 'grey.100' }
                }}
              >
                Contact Us
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/services"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'white',
                    color: 'primary.main'
                  }
                }}
              >
                Our Services
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}