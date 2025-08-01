'use client';

import { useEffect, useState } from 'react';
import BotD from '@fingerprintjs/botd';

interface BotDetectionResult {
  isBot: boolean | null;
  isLoading: boolean;
  confidence: number;
  reasons: string[];
}

export function useBotDetection(): BotDetectionResult {
  const [result, setResult] = useState<BotDetectionResult>({
    isBot: null,
    isLoading: true,
    confidence: 0,
    reasons: []
  });

  useEffect(() => {
    let mounted = true;

    const detectBot = async () => {
      try {
        // En mode développement, on désactive la détection de bot
        if (process.env.NODE_ENV === 'development') {
          if (!mounted) return;
          
          setResult({
            isBot: false,
            isLoading: false,
            confidence: 0,
            reasons: ['dev_mode_disabled']
          });
          
          console.log('Bot detection disabled in development mode');
          return;
        }

        // Initialiser BotD
        const botd = await BotD.load();
        
        if (!mounted) return;

        // Détecter si c'est un bot
        const detection = await botd.detect();
        
        if (!mounted) return;

        setResult({
          isBot: detection.bot,
          isLoading: false,
          confidence: detection.bot ? 1.0 : 0.0, // BotD retourne un boolean, pas de score de confiance
          reasons: detection.bot ? [detection.botKind || 'unknown'] : []
        });

        // Log pour debugging (à supprimer en production)
        console.log('Bot detection result:', {
          isBot: detection.bot,
          botKind: detection.bot ? detection.botKind : 'human',
          userAgent: navigator.userAgent
        });

      } catch (error) {
        console.error('Erreur lors de la détection de bot:', error);
        
        if (!mounted) return;
        
        // En cas d'erreur, on assume que ce n'est pas un bot (fail-safe)
        setResult({
          isBot: false,
          isLoading: false,
          confidence: 0,
          reasons: ['detection_failed']
        });
      }
    };

    // Délai léger pour éviter de bloquer l'interface
    const timeoutId = setTimeout(detectBot, 100);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, []);

  return result;
}
