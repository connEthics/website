import { CubeTransparentIcon, BuildingOffice2Icon, CpuChipIcon, CloudIcon, RocketLaunchIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { Box, Container, Typography, Grid, Stack, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from '@/components/mui';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service d'Ontologies pour Développement et IA - ConnEthics",
  description: "Service innovant pour gérer et exploiter les modèles d'ontologies. Intégration avec les LLMs, passerelle pour grandes entreprises, déploiement SaaS et On-Premise.",
  keywords: ["ontologies", "IA", "machine learning", "LLM", "graphes de connaissances", "développement", "entreprises"],
};

export default function OntologyService() {
  const mainFeatures = [
    {
      title: "Service d&apos;ontologies intégré",
      description: "Plateforme unifiée pour la gestion complète de vos modèles d&apos;ontologies avec outils de création, validation et déploiement.",
      icon: CubeTransparentIcon,
    },
    {
      title: "Passerelle pour grandes entreprises", 
      description: "Interface entreprise sécurisée permettant l'intégration avec vos systèmes existants et la gouvernance des ontologies à l'échelle.",
      icon: BuildingOffice2Icon,
    },
    {
      title: "Compatibilité avec les LLMs",
      description: "Optimisation native pour les modèles de langage, permettant une amélioration significative des performances et de la précision.",
      icon: CpuChipIcon,
    },
    {
      title: "Options de déploiement flexibles",
      description: "Choisissez entre SaaS pour une mise en œuvre rapide ou On-Premise pour un contrôle total de vos données et infrastructures.",
      icon: CloudIcon,
    }
  ];

  const keyBenefits = [
    "Réduction des coûts de développement jusqu'à 60%",
    "Diminution de la complexité architecturale",
    "Accélération du développement de 3 à 5 fois",
    "Amélioration des performances des IA de 40%",
    "Réduction du temps de mise sur le marché",
    "Optimisation de la précision des modèles ML"
  ];

  const useCases = [
    {
      title: "Développeurs AI/ML",
      description: "Intégrez rapidement des ontologies structurées dans vos projets d&apos;intelligence artificielle pour améliorer la compréhension contextuelle et la précision des modèles.",
      scenarios: [
        "Développement de chatbots intelligents",
        "Systèmes de recommandation avancés", 
        "Traitement automatique du langage naturel",
        "Classification automatique de données"
      ]
    },
    {
      title: "Grandes entreprises avec solutions internes",
      description: "Modernisez et optimisez vos systèmes d'ontologies existants avec notre passerelle entreprise sécurisée et nos outils de migration.",
      scenarios: [
        "Migration de systèmes legacy",
        "Intégration multi-plateforme",
        "Gouvernance centralisée des données",
        "Audit et conformité réglementaire"
      ]
    },
    {
      title: "Équipes graphes de connaissances",
      description: "Construisez et exploitez des graphes de connaissances sophistiqués avec nos outils spécialisés et notre expertise en modélisation sémantique.",
      scenarios: [
        "Construction de bases de connaissances",
        "Recherche sémantique avancée",
        "Découverte de relations cachées",
        "Visualisation interactive des données"
      ]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <ConnEthicsHero
        variant="gradient"
        title="Service d'Ontologies pour Développement et IA"
        subtitle="ConnEthics Ontology Platform"
        description="Libérez le potentiel de vos données avec notre service innovant de gestion et d&apos;exploitation des modèles d&apos;ontologies. Conçu pour les développeurs, les entreprises et les équipes travaillant sur l&apos;intelligence artificielle."
        primaryAction={{
          label: "Demander une démonstration",
          href: "/contact"
        }}
        secondaryAction={{
          label: "Découvrir nos services",
          href: "/services"
        }}
      />

      {/* Introduction Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
                Une nouvelle approche des ontologies
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Notre service d&apos;ontologies révolutionne la façon dont vous gérez et exploitez 
                vos modèles de connaissances. Que vous soyez développeur, entreprise ou équipe 
                spécialisée, nous vous offrons les outils et l&apos;expertise nécessaires pour 
                intégrer efficacement les ontologies dans vos solutions AI/ML.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Chip label="IA & Machine Learning" color="primary" />
                <Chip label="Entreprise" color="secondary" />
                <Chip label="Innovation" color="primary" variant="outlined" />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ConnEthicsCard variant="elevated" sx={{ p: 4, textAlign: 'center' }}>
                <CubeTransparentIcon style={{ width: 80, height: 80, color: '#2563eb', margin: '0 auto 24px' }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Plateforme Unifiée
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Une solution complète qui simplifie la création, la gestion et 
                  le déploiement d&apos;ontologies pour tous vos projets d&apos;IA.
                </Typography>
              </ConnEthicsCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Features Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
              Caractéristiques principales
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              Découvrez les fonctionnalités clés qui font de notre service d&apos;ontologies 
              la solution de choix pour vos projets d&apos;intelligence artificielle.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <ConnEthicsCard variant="elevated" sx={{ height: '100%', p: 4 }}>
                    <Stack direction="row" spacing={3} alignItems="flex-start">
                      <Box 
                        sx={{ 
                          width: 56, 
                          height: 56, 
                          bgcolor: 'primary.main', 
                          borderRadius: 2, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComponent style={{ width: 28, height: 28, color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </ConnEthicsCard>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Key Benefits Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
                Bénéfices clés
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Notre service d&apos;ontologies transforme votre approche du développement 
                et de l&apos;intelligence artificielle avec des résultats mesurables.
              </Typography>
              <List sx={{ p: 0 }}>
                {keyBenefits.map((benefit, index) => (
                  <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon style={{ width: 20, height: 20, color: '#059669' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={benefit}
                      primaryTypographyProps={{ 
                        variant: 'body1',
                        sx: { fontWeight: 500 }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 6 }}>
                  <ConnEthicsCard variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
                    <RocketLaunchIcon style={{ width: 40, height: 40, color: '#2563eb', margin: '0 auto 16px' }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      3-5x
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Plus rapide
                    </Typography>
                  </ConnEthicsCard>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <ConnEthicsCard variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
                    <ChartBarSquareIcon style={{ width: 40, height: 40, color: '#2563eb', margin: '0 auto 16px' }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      60%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Réduction des coûts
                    </Typography>
                  </ConnEthicsCard>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <ConnEthicsCard variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
                    <CpuChipIcon style={{ width: 40, height: 40, color: '#2563eb', margin: '0 auto 16px' }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      40%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Amélioration des performances IA
                    </Typography>
                  </ConnEthicsCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Use Cases Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
              Cas d&apos;utilisation
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}>
              Découvrez comment notre service d&apos;ontologies s&apos;adapte à différents 
              profils et besoins métier.
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {useCases.map((useCase, index) => (
              <Grid size={{ xs: 12, lg: 4 }} key={index}>
                <ConnEthicsCard variant="elevated" sx={{ height: '100%', p: 4 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
                    {useCase.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}>
                    {useCase.description}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: '1rem' }}>
                    Scénarios d&apos;application :
                  </Typography>
                  <List sx={{ p: 0 }}>
                    {useCase.scenarios.map((scenario, scenarioIndex) => (
                      <ListItem key={scenarioIndex} sx={{ p: 0, mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <Typography sx={{ color: 'primary.main', fontSize: '1rem', fontWeight: 'bold' }}>
                            ●
                          </Typography>
                        </ListItemIcon>
                        <ListItemText 
                          primary={scenario}
                          primaryTypographyProps={{ 
                            variant: 'body2',
                            sx: { color: 'text.secondary' }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </ConnEthicsCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
        <Container maxWidth="lg">
          <ConnEthicsCard variant="outlined" sx={{ bgcolor: 'primary.main', borderColor: 'primary.light', textAlign: 'center', p: 6 }}>
            <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
              Prêt à révolutionner vos projets d&apos;IA ?
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.100', mb: 4, maxWidth: '700px', mx: 'auto' }}>
              Contactez notre équipe dès maintenant pour une démonstration personnalisée 
              de notre service d&apos;ontologies et découvrez comment nous pouvons accélérer 
              votre développement.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <ConnEthicsButton
                variant="primary"
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  minWidth: 200,
                  '&:hover': {
                    bgcolor: 'grey.100'
                  }
                }}
              >
                Demander une démonstration
              </ConnEthicsButton>
              <ConnEthicsButton
                variant="outline"
                size="large"
                href="/services"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  minWidth: 200,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white'
                  }
                }}
              >
                Nos autres services
              </ConnEthicsButton>
            </Stack>
          </ConnEthicsCard>
        </Container>
      </Box>
    </Box>
  );
}