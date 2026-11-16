'use client';

import { useState } from 'react';
import Link from "next/link";
import { RocketLaunchIcon, GlobeAltIcon, FingerPrintIcon, ShieldExclamationIcon, UserIcon } from "@heroicons/react/24/outline";
import { Box, Container, Typography, Grid, Avatar, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ConnEthicsHero, ConnEthicsCard, ConnEthicsButton } from "@/components/mui";
import { motion } from "framer-motion";

export default function NewYear2026() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');

  const content = {
    en: {
      hero: {
        title: "2026: The Year of Deployment",
        subtitle: "Happy New Year from ConnEthics",
        description: "As we step into 2026, the time for preparation is over. It's time to execute. We wish you a year of visionary growth, strategic clarity, and bold action.",
        cta: "Let's Talk Strategy"
      },
      vision: {
        label: "LOOKING AHEAD",
        title: "Participate in the Transformation.",
        subtitle: "The landscape is changing faster than ever. 2026 brings pivotal shifts in AI, Identity, and Economic Intelligence.",
        text: "We invite you to join us in navigating these changes. Whether it's deploying AI in your enterprise, adapting to new value chains, or preparing for the B2B identity revolution of 2027, ConnEthics is your partner in turning these challenges into competitive advantages."
      },
      themes: {
        title: "Our Focus for 2026",
        subtitle: "The pillars of our strategic engagement for the year ahead.",
        items: [
          {
            title: "AI Deployment at Scale",
            description: "Moving beyond pilots. 2026 is about integrating AI into the core of your business operations to drive efficiency and innovation.",
            icon: RocketLaunchIcon,
          },
          {
            title: "Value Chain Transformation",
            description: "Redefining ecosystems. As value chains shift, we help you position your business to capture new opportunities and avoid commoditization.",
            icon: GlobeAltIcon,
          },
          {
            title: "Digital Identity & eIDAS 2.0",
            description: "The wallet is real. We guide you through the deployment of reusable identities, turning compliance into a conversion asset.",
            icon: FingerPrintIcon,
          },
          {
            title: "Strategic Defense & Conquest",
            description: "Preparing for 2027. B2B identities and economic intelligence are your tools for both defense and market conquest in a volatile world.",
            icon: ShieldExclamationIcon,
          },
        ]
      },
      personal: {
        title: "A Personal Note",
        text: "2026 is not just another year; it's a turning point. The technologies we've been discussing—AI, Digital Wallets, Decentralized Identity—are now hitting the ground. My commitment to you this year is simple: to provide the radical candor and strategic foresight you need to not just survive these changes, but to lead them.",
        signature: "Frédéric, Founder of ConnEthics"
      },
      footer: {
        title: "Ready for 2026?",
        subtitle: "Let's make this year a milestone in your strategic journey.",
        cta: "Contact Us"
      }
    },
    fr: {
      hero: {
        title: "2026 : L'Année du Déploiement",
        subtitle: "Bonne Année de la part de ConnEthics",
        description: "Alors que nous entrons en 2026, le temps de la préparation est révolu. Il est temps d'exécuter. Nous vous souhaitons une année de croissance visionnaire, de clarté stratégique et d'actions audacieuses.",
        cta: "Parlons Stratégie"
      },
      vision: {
        label: "PERSPECTIVES",
        title: "Participez à la Transformation.",
        subtitle: "Le paysage change plus vite que jamais. 2026 apporte des changements cruciaux dans l'IA, l'Identité et l'Intelligence Économique.",
        text: "Nous vous invitons à nous rejoindre pour naviguer dans ces changements. Qu'il s'agisse de déployer l'IA dans votre entreprise, de s'adapter aux nouvelles chaînes de valeur ou de se préparer à la révolution de l'identité B2B de 2027, ConnEthics est votre partenaire pour transformer ces défis en avantages concurrentiels."
      },
      themes: {
        title: "Nos Priorités pour 2026",
        subtitle: "Les piliers de notre engagement stratégique pour l'année à venir.",
        items: [
          {
            title: "Déploiement de l'IA à l'Échelle",
            description: "Au-delà des pilotes. 2026 consiste à intégrer l'IA au cœur de vos opérations commerciales pour stimuler l'efficacité et l'innovation.",
            icon: RocketLaunchIcon,
          },
          {
            title: "Transformation de la Chaîne de Valeur",
            description: "Redéfinir les écosystèmes. Alors que les chaînes de valeur évoluent, nous vous aidons à positionner votre entreprise pour saisir de nouvelles opportunités.",
            icon: GlobeAltIcon,
          },
          {
            title: "Identité Numérique & eIDAS 2.0",
            description: "Le portefeuille est réel. Nous vous guidons dans le déploiement d'identités réutilisables, transformant la conformité en atout de conversion.",
            icon: FingerPrintIcon,
          },
          {
            title: "Défense Stratégique & Conquête",
            description: "Préparer 2027. Les identités B2B et l'intelligence économique sont vos outils pour la défense et la conquête de marchés dans un monde volatile.",
            icon: ShieldExclamationIcon,
          },
        ]
      },
      personal: {
        title: "Le Mot du Fondateur",
        text: "2026 n'est pas juste une autre année ; c'est un tournant. Les technologies dont nous discutons — IA, Portefeuilles Numériques, Identité Décentralisée — deviennent réalité. Mon engagement envers vous cette année est simple : vous apporter la franchise radicale et la vision stratégique nécessaires pour non seulement survivre à ces changements, mais pour les diriger.",
        signature: "Frédéric, Fondateur de ConnEthics"
      },
      footer: {
        title: "Prêt pour 2026 ?",
        subtitle: "Faisons de cette année un jalon dans votre parcours stratégique.",
        cta: "Contactez-nous"
      }
    }
  };

  const t = content[lang];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Language Switcher */}
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <ToggleButtonGroup
          value={lang}
          exclusive
          onChange={(e, newLang) => newLang && setLang(newLang)}
          aria-label="language"
          size="small"
          sx={{ bgcolor: 'background.paper', boxShadow: 1 }}
        >
          <ToggleButton value="en">EN</ToggleButton>
          <ToggleButton value="fr">FR</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* 1. Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ConnEthicsHero
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          description={t.hero.description}
          primaryAction={{
            label: t.hero.cta,
            href: "/contact"
          }}
          variant="deep-ocean"
        />
      </motion.div>

      {/* 2. The Vision */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box 
              sx={{ 
                textAlign: 'left', 
                pl: { xs: 2, md: 4 }, 
                borderLeft: '4px solid', 
                borderColor: 'primary.main' 
              }}
            >
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'primary.main', 
                  fontWeight: 700, 
                  letterSpacing: 2, 
                  mb: 2, 
                  display: 'block',
                  fontFamily: 'monospace'
                }}
              >
                {t.vision.label}
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 4, color: 'text.primary', fontSize: { xs: '2rem', md: '3rem' } }}>
                {t.vision.title}
              </Typography>
              <Typography variant="h5" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 4, fontWeight: 500 }}>
                {t.vision.subtitle}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', lineHeight: 1.8, mb: 6 }}>
                {t.vision.text}
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 3. Key Themes for 2026 */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 800, mb: 3 }}>
              {t.themes.title}
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', fontWeight: 400 }}>
              {t.themes.subtitle}
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {t.themes.items.map((theme, index) => {
              const IconComponent = theme.icon;
              return (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ height: '100%' }}
                  >
                    <ConnEthicsCard variant="blueprint" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ p: 4, flexGrow: 1 }}>
                        <Box 
                          sx={{ 
                            width: 56, 
                            height: 56, 
                            bgcolor: 'white', 
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 1, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            mb: 3
                          }}
                        >
                          <IconComponent className="h-7 w-7 text-primary-700" strokeWidth={2} />
                        </Box>
                        <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700, letterSpacing: '-0.02em' }}>
                          {theme.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 0, lineHeight: 1.6 }}>
                          {theme.description}
                        </Typography>
                      </Box>
                    </ConnEthicsCard>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 4. Personal Note Section (New) */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'primary.50' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box 
              sx={{ 
                bgcolor: 'white', 
                p: { xs: 4, md: 6 }, 
                borderRadius: 4, 
                boxShadow: 3,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4
              }}
            >
              <Box sx={{ flexShrink: 0 }}>
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    bgcolor: 'primary.100',
                    color: 'primary.main'
                  }}
                >
                  <UserIcon className="h-16 w-16" />
                </Avatar>
              </Box>
              <Box>
                <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 2, color: 'primary.900' }}>
                  {t.personal.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'text.secondary', mb: 3 }}>
                  &quot;{t.personal.text}&quot;
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {t.personal.signature}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 5. Footer CTA */}
      <Box sx={{ py: 6, bgcolor: 'primary.900', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            {t.footer.title}
          </Typography>
          <Typography variant="h6" sx={{ color: 'primary.100', mb: 6, fontWeight: 400, lineHeight: 1.6 }}>
            {t.footer.subtitle}
          </Typography>
          <Link href="/contact">
            <ConnEthicsButton 
              variant="primary" 
              size="large" 
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.900',
                px: 6,
                '&:hover': { bgcolor: 'primary.50' }
              }}
            >
              {t.footer.cta}
            </ConnEthicsButton>
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
