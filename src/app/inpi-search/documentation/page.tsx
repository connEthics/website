'use client';

import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { 
  FORMES_JURIDIQUES, 
  CODES_APE, 
  ROLES_ENTREPRISE, 
  TYPES_VOIE,
  STATUTS_ENTREPRISE 
} from '@/lib/inpi-constants';

export default function INPIDocumentationPage() {
  // Force le light mode sur cette page
  useEffect(() => {
    // Sauvegarder le thème actuel
    const currentTheme = document.documentElement.classList.contains('dark');
    
    // Forcer le light mode
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    
    // Ajouter des styles CSS pour forcer le mode clair
    const styleElement = document.createElement('style');
    styleElement.id = 'inpi-doc-force-light';
    styleElement.textContent = `
      .inpi-doc-light-forced * {
        color-scheme: light !important;
      }
      .inpi-doc-light-forced .dark\\:bg-slate-950 {
        background-color: white !important;
      }
      .inpi-doc-light-forced .dark\\:bg-slate-800 {
        background-color: #f1f5f9 !important;
      }
      .inpi-doc-light-forced .dark\\:text-slate-50 {
        color: #0f172a !important;
      }
      .inpi-doc-light-forced .dark\\:border-slate-800 {
        border-color: #e2e8f0 !important;
      }
      .inpi-doc-light-forced .dark\\:hover\\:bg-slate-800:hover {
        background-color: #e2e8f0 !important;
      }
      .inpi-doc-light-forced .dark\\:hover\\:bg-slate-700:hover {
        background-color: #e2e8f0 !important;
      }
      .inpi-doc-light-forced .dark\\:hover\\:text-slate-50:hover {
        color: #0f172a !important;
      }
      .inpi-doc-light-forced .text-slate-600 {
        color: #475569 !important;
      }
      .inpi-doc-light-forced .text-slate-700 {
        color: #334155 !important;
      }
      .inpi-doc-light-forced .text-slate-900 {
        color: #0f172a !important;
      }
      .inpi-doc-light-forced .text-slate-950 {
        color: #0f172a !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Restaurer le thème original au démontage du composant
    return () => {
      if (currentTheme) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
      // Supprimer les styles forcés
      const element = document.getElementById('inpi-doc-force-light');
      if (element) {
        element.remove();
      }
    };
  }, []);

  return (
    <div className="inpi-doc-light-forced light min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 text-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Bouton retour */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la recherche
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Documentation INPI - Énumérations et Codes
          </h1>
          <p className="text-lg text-slate-600">
            Référentiel des codes utilisés par l&apos;API INPI du Registre National des Entreprises
          </p>
          <Badge variant="outline" className="mt-2">
            📋 Documentation technique
          </Badge>
        </div>

        <div className="grid gap-8">
          {/* Formes Juridiques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🏢 Formes Juridiques
                <Badge variant="secondary">{Object.keys(FORMES_JURIDIQUES).length} codes</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(FORMES_JURIDIQUES)
                  .filter(([code]) => code !== 'DEFAULT' && code !== 'N/A')
                  .map(([code, label]) => (
                  <div key={code} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <code className="text-sm font-mono bg-slate-200 px-2 py-1 rounded">
                        {code}
                      </code>
                    </div>
                    <div className="text-sm text-slate-700 ml-3 flex-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Codes APE */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 Codes APE (Activité Principale Exercée)
                <Badge variant="secondary">{Object.keys(CODES_APE).length} codes</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(CODES_APE).map(([code, label]) => (
                  <div key={code} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                    <code className="text-sm font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded min-w-fit">
                      {code}
                    </code>
                    <div className="text-sm text-slate-700">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rôles d'Entreprise */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                👤 Rôles dans l&apos;Entreprise
                <Badge variant="secondary">{Object.keys(ROLES_ENTREPRISE).length} codes</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(ROLES_ENTREPRISE).map(([code, label]) => (
                  <div key={code} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                    <code className="text-sm font-mono bg-green-100 text-green-800 px-2 py-1 rounded">
                      {code}
                    </code>
                    <div className="text-sm text-slate-700">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Types de Voie */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🛣️ Types de Voie (Adresses)
                <Badge variant="secondary">{Object.keys(TYPES_VOIE).length} codes</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(TYPES_VOIE).map(([code, label]) => (
                  <div key={code} className="flex flex-col gap-1 p-2 bg-slate-50 rounded">
                    <code className="text-xs font-mono bg-purple-100 text-purple-800 px-1 py-0.5 rounded text-center">
                      {code}
                    </code>
                    <div className="text-xs text-slate-700 text-center">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statuts d'Entreprise */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔄 Statuts d&apos;Entreprise
                <Badge variant="secondary">{Object.keys(STATUTS_ENTREPRISE).length} statuts</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(STATUTS_ENTREPRISE).map(([key, value]) => (
                  <div key={key} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                    <Badge variant={value === 'Actif' ? 'default' : 'secondary'}>
                      {key}
                    </Badge>
                    <div className="text-sm text-slate-700">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
