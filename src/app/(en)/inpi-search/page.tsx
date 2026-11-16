'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Search, Building2, AlertCircle, Eye } from 'lucide-react';
import { getCodeApeLabel } from '@/lib/inpi-constants';
import CompanyDetailModal from '@/components/CompanyDetailModal';
import { BotProtection } from '@/components/BotProtection';

interface Company {
  siren: string;
  companyName: string;
  legalForm?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  creationDate?: string;
  activity?: string;
  codeApe?: string;
}

interface SearchParams {
  siren?: string;
  companyName?: string;
  postalCode?: string;
  page?: number;
  size?: number;
}

export default function INPISearchPage() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    page: 1,
    size: 10 // Limité à 10 résultats par défaut
  });
  const [results, setResults] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [needsPostalCodeRefinement, setNeedsPostalCodeRefinement] = useState(false);

  // Force le light mode sur cette page
  useEffect(() => {
    // Sauvegarder le thème actuel
    const currentTheme = document.documentElement.classList.contains('dark');
    
    // Forcer le light mode
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    
    // Ajouter des styles CSS pour forcer le mode clair
    const styleElement = document.createElement('style');
    styleElement.id = 'inpi-force-light';
    styleElement.textContent = `
      .inpi-light-forced * {
        color-scheme: light !important;
      }
      .inpi-light-forced .dark\\:bg-slate-950 {
        background-color: white !important;
      }
      .inpi-light-forced .dark\\:bg-slate-800 {
        background-color: #f1f5f9 !important;
      }
      .inpi-light-forced .dark\\:text-slate-50 {
        color: #0f172a !important;
      }
      .inpi-light-forced .dark\\:border-slate-800 {
        border-color: #e2e8f0 !important;
      }
      .inpi-light-forced .dark\\:hover\\:bg-slate-800:hover {
        background-color: #e2e8f0 !important;
      }
      .inpi-light-forced .dark\\:hover\\:bg-slate-700:hover {
        background-color: #e2e8f0 !important;
      }
      .inpi-light-forced .dark\\:hover\\:text-slate-50:hover {
        color: #0f172a !important;
      }
      .inpi-light-forced .text-slate-600 {
        color: #475569 !important;
      }
      .inpi-light-forced .text-slate-700 {
        color: #334155 !important;
      }
      .inpi-light-forced .text-slate-900 {
        color: #0f172a !important;
      }
      .inpi-light-forced .text-slate-950 {
        color: #0f172a !important;
      }
      /* Préserver les styles des boutons primaires */
      .inpi-light-forced .bg-blue-600 {
        background-color: #2563eb !important;
      }
      .inpi-light-forced .hover\\:bg-blue-700:hover {
        background-color: #1d4ed8 !important;
      }
      .inpi-light-forced .text-white {
        color: white !important;
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
      const element = document.getElementById('inpi-force-light');
      if (element) {
        element.remove();
      }
    };
  }, []);

  const openCompanyDetails = (company: Company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const queryParams = new URLSearchParams();
      
      if (searchParams.siren) queryParams.append('siren', searchParams.siren);
      if (searchParams.companyName) queryParams.append('companyName', searchParams.companyName);
      if (searchParams.postalCode) queryParams.append('postalCode', searchParams.postalCode);
      if (searchParams.page) queryParams.append('page', searchParams.page.toString());
      if (searchParams.size) queryParams.append('size', searchParams.size.toString());

      const response = await fetch(`/api/inpi/search?${queryParams.toString()}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de la recherche');
      }
      
      const data = await response.json();
      setResults(data.data);
      setTotalResults(data.total);
      
      // Affiche l'option de filtrage par code postal si plus de 10 résultats et recherche par nom
      if (data.total > 10 && searchParams.companyName && !searchParams.postalCode) {
        setNeedsPostalCodeRefinement(true);
      } else {
        setNeedsPostalCodeRefinement(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la recherche. Veuillez réessayer.');
      console.error('Erreur API INPI:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handler pour la soumission du formulaire (Enter ou clic sur bouton)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  // Handler pour la touche Enter sur les champs
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="inpi-light-forced light min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 text-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <BotProtection 
          loadingMessage="Vérification de sécurité..."
          blockedMessage="Accès limité : cette fonctionnalité est protégée contre l&apos;usage automatisé"
          onBotDetected={() => {
            console.warn('Bot détecté tentant d\'accéder au formulaire INPI');
            // Optionnel : envoyer une alerte à un service de monitoring
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Recherche d&apos;Entreprises INPI
          </h1>
          <p className="text-lg text-slate-600">
            Recherchez et consultez les informations d&apos;entreprises du registre national
          </p>
        </div>

        {/* Formulaire de recherche */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Critères de recherche
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} role="search" aria-label="Recherche d'entreprises INPI">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="siren">SIREN</Label>
                  <Input
                    id="siren"
                    name="siren"
                    type="text"
                    placeholder="123456789"
                    value={searchParams.siren || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchParams(prev => ({ ...prev, siren: e.target.value }))}
                    onKeyPress={handleKeyPress}
                    aria-describedby="siren-help"
                    autoComplete="off"
                  />
                  <p id="siren-help" className="sr-only">
                    Saisissez le numéro SIREN de l&apos;entreprise (9 chiffres)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName">Nom d&apos;entreprise</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Nom de l&apos;entreprise"
                    value={searchParams.companyName || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchParams(prev => ({ ...prev, companyName: e.target.value }))}
                    onKeyPress={handleKeyPress}
                    aria-describedby="company-help"
                    autoComplete="organization"
                  />
                  <p id="company-help" className="sr-only">
                    Saisissez le nom ou une partie du nom de l&apos;entreprise
                  </p>
                </div>
                
                {/* Afficher le code postal uniquement si plus de 10 résultats */}
                {totalResults > 10 && (
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="postalCode">Code postal</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      placeholder="75001"
                      value={searchParams.postalCode || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchParams(prev => ({ ...prev, postalCode: e.target.value }))}
                      onKeyPress={handleKeyPress}
                      aria-describedby="postal-help"
                      autoComplete="postal-code"
                    />
                    <p id="postal-help" className="sr-only">
                      Affinez votre recherche en spécifiant un code postal
                    </p>
                    {needsPostalCodeRefinement && (
                      <p className="text-xs text-amber-600" role="status" aria-live="polite">
                        ⚠️ Plus de 10 résultats trouvés. Utilisez le code postal pour affiner.
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              <Button 
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                aria-describedby="search-help"
              >
                {loading ? 'Recherche en cours...' : 'Rechercher'}
              </Button>
              <p id="search-help" className="sr-only">
                Appuyez sur Entrée ou cliquez sur ce bouton pour lancer la recherche
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Affichage des erreurs */}
        {error && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Résultats */}
        {results.length > 0 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-slate-900">
                Résultats ({totalResults})
              </h2>
            </div>
            
            {/* Message d'information sur la limitation */}
            {totalResults > 10 && !searchParams.postalCode && searchParams.companyName && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-amber-600 text-lg">⚠️</div>
                  <div>
                    <h3 className="font-semibold text-amber-800">Résultats limités à 10</h3>
                    <p className="text-amber-700 text-sm mt-1">
                      {totalResults} entreprises trouvées. Pour voir plus de résultats, affinez votre recherche avec un code postal.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="grid gap-6">
              {results.map((company, index) => (
                <Card key={`${company.siren}-${index}`} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <Building2 className="w-5 h-5" />
                          {company.companyName}
                        </CardTitle>
                        <p className="text-sm text-slate-600 mt-1">
                          SIREN: {company.siren}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        {company.legalForm && company.legalForm !== 'N/A' && (
                          <Badge variant="outline">
                            {company.legalForm}
                          </Badge>
                        )}
                        {company.creationDate && company.creationDate !== 'N/A' && (
                          <Badge variant="secondary" className="text-xs">
                            📅 {new Date(company.creationDate).toLocaleDateString('fr-FR')}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Adresse */}
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-700 flex items-center gap-1">
                          📍 Adresse
                        </div>
                        <div className="text-sm">
                          {company.address && company.address !== 'Adresse non disponible' ? (
                            <>
                              <p className="font-medium">{company.address}</p>
                              {company.postalCode && company.city && 
                                company.postalCode !== 'N/A' && company.city !== 'N/A' && (
                                <p className="text-slate-600">
                                  {company.postalCode} {company.city}
                                </p>
                              )}
                            </>
                          ) : (
                            <p className="text-slate-400 italic">Non disponible</p>
                          )}
                        </div>
                      </div>

                      {/* Activité */}
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-slate-700 flex items-center gap-1">
                          🏢 Activité
                        </div>
                        <div className="text-sm space-y-1">
                          {company.activity && company.activity !== 'N/A' ? (
                            <p className="text-slate-800">{company.activity}</p>
                          ) : (
                            <p className="text-slate-400 italic">Non renseignée</p>
                          )}
                          {company.codeApe && company.codeApe !== 'N/A' && (
                            <p className="text-xs text-slate-600">
                              <span className="font-mono">{company.codeApe}</span> - {getCodeApeLabel(company.codeApe)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Section détails supplémentaires */}
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openCompanyDetails(company)}
                          className="flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Voir les détails
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination masquée - pagination désactivée */}
          </div>
        )}

                {/* État initial */}
        {!loading && results.length === 0 && !error && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="w-16 h-16 mx-auto text-slate-400 mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                Recherchez des entreprises
              </h3>
              <p className="text-slate-600">
                Utilisez les critères ci-dessus pour rechercher des entreprises du registre national INPI
              </p>
            </CardContent>
          </Card>
        )}
        </BotProtection>
      </div>
      
      {/* Modal des détails de l'entreprise */}
      <CompanyDetailModal
        company={selectedCompany}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
