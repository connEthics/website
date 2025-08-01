'use client';

import React, { ReactNode } from 'react';
import { useBotDetection } from '@/hooks/useBotDetection';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, ShieldAlert, Loader2 } from 'lucide-react';

interface BotProtectionProps {
  children: ReactNode;
  onBotDetected?: () => void;
  allowBots?: boolean; // Pour le mode développement
  loadingMessage?: string;
  blockedMessage?: string;
}

export function BotProtection({
  children,
  onBotDetected,
  allowBots = false,
  loadingMessage = "Vérification de sécurité en cours...",
  blockedMessage = "Accès restreint : activité suspecte détectée"
}: BotProtectionProps) {
  const { isBot, isLoading, confidence, reasons } = useBotDetection();

  // Pendant le chargement de la détection
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <p className="text-sm text-slate-600">{loadingMessage}</p>
        </div>
      </div>
    );
  }

  // Si un bot est détecté et qu'on ne les autorise pas
  if (isBot && !allowBots) {
    // Appeler le callback si fourni
    if (onBotDetected) {
      onBotDetected();
    }

    return (
      <Alert className="border-red-200 bg-red-50">
        <ShieldAlert className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          {blockedMessage}
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-2 text-xs">
              <summary className="cursor-pointer">Détails techniques (dev)</summary>
              <ul className="mt-1 list-disc list-inside">
                <li>Confiance: {confidence}</li>
                <li>Raisons: {reasons.join(', ')}</li>
                <li>User Agent: {navigator.userAgent}</li>
              </ul>
            </details>
          )}
        </AlertDescription>
      </Alert>
    );
  }

  // Si ce n'est pas un bot ou si on autorise les bots
  return (
    <div>
      {/* Indicateur de sécurité (optionnel) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-4">
          <Alert className="border-green-200 bg-green-50">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 text-xs">
              ✅ Vérification anti-bot réussie 
              {confidence > 0 && ` (confiance: ${Math.round(confidence * 100)}%)`}
            </AlertDescription>
          </Alert>
        </div>
      )}
      {children}
    </div>
  );
}
