'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline';
import { Box, Container, Typography, Chip, Stack, Divider, Card, CardContent, Grid } from '@mui/material';

export default function VerifiableCredentialsArticle() {
  return (
    <Box sx={{ minHeight: '100vh', py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        {/* Back Navigation */}
        <Link href="/insights" style={{ textDecoration: 'none' }}>
          <Box 
            sx={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              color: 'primary.main', 
              mb: 4,
              '&:hover': { color: 'primary.dark' },
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowLeftIcon style={{ width: 16, height: 16, marginRight: 8 }} />
            Back to Insights
          </Box>
        </Link>

        {/* Article Header */}
        <Box component="header" sx={{ mb: 8 }}>
          <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap', gap: 1 }}>
            <Link href="/insights?filter=Trust & Identity" style={{ textDecoration: 'none' }}>
              <Chip
                icon={<TagIcon style={{ width: 16, height: 16 }} />}
                label="Trust & Identity"
                color="primary"
                size="small"
                clickable
                sx={{ '&:hover': { bgcolor: 'primary.dark' } }}
              />
            </Link>
            <Chip
              icon={<ClockIcon style={{ width: 16, height: 16 }} />}
              label="6 min read"
              variant="outlined"
              size="small"
            />
            <Chip
              icon={<CalendarIcon style={{ width: 16, height: 16 }} />}
              label="July 15, 2025"
              variant="outlined"
              size="small"
            />
          </Stack>
          
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
            Building Trust Through Verifiable Credentials
          </Typography>
          
          <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
            How organizations can implement verifiable credential systems to enhance trust and 
            streamline identity verification processes while maintaining privacy and security.
          </Typography>
        </Box>

        {/* Article Content */}
        <Box component="article">
          <Typography variant="body1" paragraph>
            In an increasingly digital world, trust has become the most valuable currency in business 
            relationships. Verifiable credentials represent a revolutionary approach to establishing 
            and maintaining trust through cryptographically secure, privacy-preserving digital certificates 
            that can be instantly verified without compromising sensitive information.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            The Trust Crisis in Digital Interactions
          </Typography>

          <Typography variant="body1" paragraph>
            Traditional methods of establishing trust—through physical documents, centralized authorities, 
            and reputation systems—are failing to meet the demands of our digital-first economy. 
            Organizations face mounting challenges:
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Identity fraud costs businesses billions annually</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Verification processes are slow, expensive, and error-prone</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Privacy regulations limit data sharing for verification purposes</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Cross-border transactions require costly intermediaries</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>Digital certificates can be easily forged or manipulated</Typography>
          </Box>

          <Typography variant="body1" paragraph>
            Verifiable credentials offer a solution that addresses these challenges while empowering 
            individuals and organizations with greater control over their digital identities.
          </Typography>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Understanding Verifiable Credentials
          </Typography>

          <Typography variant="body1" paragraph>
            Verifiable credentials are digital statements made by an issuer about a subject (person or organization) 
            that can be cryptographically verified by any party without revealing unnecessary information. 
            They consist of three core components:
          </Typography>

          <Card sx={{ my: 4, bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
            <CardContent>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 3, fontWeight: 600 }}>
                The Trust Triangle
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ mr: 2, fontSize: '1.2rem' }}>📋</Typography>
                  <Typography variant="body2">
                    <strong>Issuer:</strong> The entity that creates and digitally signs the credential 
                    (university, employer, government agency, certification body)
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ mr: 2, fontSize: '1.2rem' }}>👤</Typography>
                  <Typography variant="body2">
                    <strong>Holder:</strong> The individual or organization that receives and controls 
                    the credential in their digital wallet
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Typography sx={{ mr: 2, fontSize: '1.2rem' }}>✅</Typography>
                  <Typography variant="body2">
                    <strong>Verifier:</strong> Any party that needs to verify the authenticity of 
                    claims without contacting the original issuer
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Key Advantages of Verifiable Credentials
          </Typography>

          <Grid container spacing={3} sx={{ my: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', bgcolor: 'secondary.50', borderLeft: 4, borderColor: 'secondary.main' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2, fontWeight: 600 }}>
                    For Organizations
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Instant verification without third-party dependencies</Typography>
                    <Typography variant="body2">• Reduced fraud and compliance costs</Typography>
                    <Typography variant="body2">• Enhanced customer experience and onboarding</Typography>
                    <Typography variant="body2">• Automated verification processes</Typography>
                    <Typography variant="body2">• Global interoperability and recognition</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: '100%', bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                    For Individuals
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Complete control over personal credentials</Typography>
                    <Typography variant="body2">• Selective disclosure of information</Typography>
                    <Typography variant="body2">• Portable credentials across platforms</Typography>
                    <Typography variant="body2">• Enhanced privacy protection</Typography>
                    <Typography variant="body2">• Reduced paperwork and bureaucracy</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Real-World Implementation Scenarios
          </Typography>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Educational Credentials
          </Typography>
          <Card sx={{ mb: 3, bgcolor: 'grey.50' }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                Universities issue tamper-proof digital diplomas and certificates that students control. 
                Employers can instantly verify educational qualifications without contacting institutions.
              </Typography>
              <Typography variant="body1">
                <strong>Impact:</strong> 95% reduction in verification time, elimination of diploma mills, 
                global recognition of credentials.
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Professional Certifications
          </Typography>
          <Card sx={{ mb: 3, bgcolor: 'grey.50' }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                Professional bodies issue verifiable certifications for skills, training, and compliance. 
                These can include expiration dates and renewal requirements.
              </Typography>
              <Typography variant="body1">
                <strong>Impact:</strong> Enhanced professional mobility, simplified license verification, 
                reduced regulatory burden.
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Supply Chain Verification
          </Typography>
          <Card sx={{ mb: 3, bgcolor: 'grey.50' }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                Companies issue credentials for product authenticity, sustainability certifications, 
                and compliance with industry standards throughout the supply chain.
              </Typography>
              <Typography variant="body1">
                <strong>Impact:</strong> Transparent supply chains, reduced counterfeiting, 
                enhanced consumer trust.
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Healthcare Records
          </Typography>
          <Card sx={{ mb: 3, bgcolor: 'grey.50' }}>
            <CardContent>
              <Typography variant="body1" paragraph>
                Healthcare providers issue verifiable health credentials (vaccination records, 
                test results, treatment history) that patients control and share selectively.
              </Typography>
              <Typography variant="body1">
                <strong>Impact:</strong> Improved patient privacy, interoperable health records, 
                streamlined healthcare access.
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Technical Implementation Framework
          </Typography>

          <Typography variant="body1" paragraph>
            Implementing verifiable credentials requires careful consideration of technical architecture, 
            security requirements, and integration with existing systems.
          </Typography>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Core Technical Components
          </Typography>

          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Credential Schema Design:</strong> Define the structure and data fields 
              for different types of credentials
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Digital Signature Infrastructure:</strong> Implement cryptographic signing 
              and verification capabilities
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Decentralized Identifiers (DIDs):</strong> Create unique, verifiable 
              identifiers for issuers and holders
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Wallet Integration:</strong> Develop or integrate with digital wallet 
              solutions for credential storage
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 2 }}>
              <strong>Verification APIs:</strong> Build interfaces for third-party verification 
              of credentials
            </Typography>
          </Box>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Security and Privacy Considerations
          </Typography>

          <Stack spacing={2} sx={{ my: 3 }}>
            <Box sx={{ borderLeft: 4, borderColor: 'primary.main', pl: 2 }}>
              <Typography variant="body1"><strong>Zero-Knowledge Proofs:</strong> Enable verification of attributes without revealing the actual data</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>Example: Prove age over 18 without revealing exact birthdate</Typography>
            </Box>
            <Box sx={{ borderLeft: 4, borderColor: 'secondary.main', pl: 2 }}>
              <Typography variant="body1"><strong>Selective Disclosure:</strong> Allow holders to share only necessary information</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>Example: Share university name without revealing GPA or graduation date</Typography>
            </Box>
            <Box sx={{ borderLeft: 4, borderColor: 'primary.main', pl: 2 }}>
              <Typography variant="body1"><strong>Revocation Mechanisms:</strong> Enable issuers to revoke credentials when necessary</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>Example: Revoke professional licenses for misconduct</Typography>
            </Box>
          </Stack>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Implementation Roadmap
          </Typography>

          <Typography variant="body1" paragraph>
            Successful verifiable credential implementation requires a phased approach that builds 
            trust and adoption gradually across stakeholder communities.
          </Typography>

          <Stack spacing={3} sx={{ my: 4 }}>
            <Card sx={{ bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                  Phase 1: Foundation (Months 1-3)
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">• Define credential schemas and governance framework</Typography>
                  <Typography variant="body2">• Establish digital signature infrastructure</Typography>
                  <Typography variant="body2">• Develop pilot program with limited use case</Typography>
                  <Typography variant="body2">• Create stakeholder education and onboarding materials</Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor: 'secondary.50', borderLeft: 4, borderColor: 'secondary.main' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2, fontWeight: 600 }}>
                  Phase 2: Expansion (Months 4-8)
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">• Scale to additional credential types and use cases</Typography>
                  <Typography variant="body2">• Integrate with partner organizations and verifiers</Typography>
                  <Typography variant="body2">• Implement advanced privacy features</Typography>
                  <Typography variant="body2">• Optimize user experience and wallet integration</Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ bgcolor: 'primary.50', borderLeft: 4, borderColor: 'primary.main' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                  Phase 3: Ecosystem (Months 9-12)
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2">• Build network effects through partnerships</Typography>
                  <Typography variant="body2">• Implement cross-organizational verification</Typography>
                  <Typography variant="body2">• Develop marketplace for credential services</Typography>
                  <Typography variant="body2">• Establish industry standards and best practices</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Stack>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Measuring Success and ROI
          </Typography>

          <Typography variant="body1" paragraph>
            The success of verifiable credential implementations can be measured across multiple dimensions:
          </Typography>

          <Grid container spacing={3} sx={{ my: 4 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', bgcolor: 'warning.50', borderLeft: 4, borderColor: 'warning.main' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'warning.main', mb: 2, fontWeight: 600 }}>
                    Operational Metrics
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Verification time reduction</Typography>
                    <Typography variant="body2">• Processing cost savings</Typography>
                    <Typography variant="body2">• Error rate improvements</Typography>
                    <Typography variant="body2">• Customer satisfaction scores</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', bgcolor: 'error.50', borderLeft: 4, borderColor: 'error.main' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'error.main', mb: 2, fontWeight: 600 }}>
                    Security Metrics
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Fraud reduction rates</Typography>
                    <Typography variant="body2">• Security incident frequency</Typography>
                    <Typography variant="body2">• Compliance audit results</Typography>
                    <Typography variant="body2">• Data breach prevention</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%', bgcolor: 'info.50', borderLeft: 4, borderColor: 'info.main' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'info.main', mb: 2, fontWeight: 600 }}>
                    Adoption Metrics
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• User enrollment rates</Typography>
                    <Typography variant="body2">• Credential issuance volume</Typography>
                    <Typography variant="body2">• Partner integration success</Typography>
                    <Typography variant="body2">• Market penetration growth</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Future Directions and Innovation
          </Typography>

          <Typography variant="body1" paragraph>
            The verifiable credentials ecosystem is rapidly evolving, with emerging technologies 
            and standards creating new possibilities for trust and verification.
          </Typography>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Emerging Trends
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3 }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>AI-Enhanced Verification:</strong> Machine learning algorithms for fraud detection and risk assessment</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>Biometric Integration:</strong> Combining verifiable credentials with biometric authentication</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>IoT Credentials:</strong> Extending verifiable credentials to devices and sensors</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>Cross-Chain Interoperability:</strong> Standards for credential portability across blockchain networks</Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}><strong>Automated Compliance:</strong> Smart contracts for regulatory compliance verification</Typography>
          </Box>

          <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Regulatory Landscape
          </Typography>
          <Typography variant="body1" paragraph>
            Governments worldwide are developing frameworks for digital identity and verifiable credentials. 
            Organizations should monitor regulatory developments and participate in standards-setting processes 
            to ensure compliance and influence emerging requirements.
          </Typography>

          <Card sx={{ my: 4, bgcolor: 'grey.900', color: 'common.white' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ color: 'common.white', mb: 3, fontWeight: 'bold' }}>
                Ready to Build Trust Through Verifiable Credentials?
              </Typography>
              <Typography variant="body1" sx={{ color: 'common.white', mb: 3 }}>
                ConnEthics specializes in Trust and Identity Deployment, helping organizations implement 
                verifiable credential systems that enhance security, privacy, and user experience. 
                Our experts guide you through every step of the implementation process.
              </Typography>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box 
                  component="button"
                  sx={{ 
                    bgcolor: 'common.white', 
                    color: 'grey.900', 
                    px: 3, 
                    py: 1.5, 
                    borderRadius: 1, 
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'grey.100' },
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  Schedule a Trust & Identity Consultation
                </Box>
              </Link>
            </CardContent>
          </Card>

          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
            Conclusion
          </Typography>

          <Typography variant="body1" paragraph>
            Verifiable credentials represent a fundamental shift in how we establish and maintain trust 
            in digital interactions. By providing cryptographically secure, privacy-preserving verification 
            mechanisms, organizations can build more efficient, secure, and user-centric identity systems.
          </Typography>

          <Typography variant="body1" paragraph>
            Success in implementing verifiable credentials requires careful planning, stakeholder engagement, 
            and a commitment to privacy and security best practices. Organizations that invest in these 
            capabilities today will be well-positioned to thrive in the trust economy of tomorrow.
          </Typography>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Author & Sharing */}
        <Box sx={{ py: 4 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                ConnEthics Team
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Specialists in Trust & Identity solutions and verifiable credentials
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Related Articles */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
            Related Insights
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Card sx={{ flex: 1, '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.2s ease' }}>
              <CardContent>
                <Link href="/insights/future-self-sovereign-identity-enterprise" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Chip 
                    label="Self-Sovereign Identity" 
                    color="primary" 
                    size="small" 
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    The Future of Self-Sovereign Identity in Enterprise
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Exploring how SSI will transform enterprise identity management...
                  </Typography>
                </Link>
              </CardContent>
            </Card>
            
            <Card sx={{ flex: 1, '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.2s ease' }}>
              <CardContent>
                <Link href="/insights/competitive-intelligence-digital-age" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Chip 
                    label="Ecosystem Cartography" 
                    color="primary" 
                    size="small" 
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 2 }}>
                    Competitive Intelligence in the Digital Age
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Understanding economic warfare analysis and strategic advantages...
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
