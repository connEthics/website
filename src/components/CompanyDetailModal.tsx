'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Building2, MapPin, Calendar, Users, FileText, Briefcase, ExternalLink } from 'lucide-react';
import { 
  getFormeJuridiqueLabel, 
  getCodeApeLabel, 
  getRoleLabel,
  formatAdresse,
  formatDateClotureExercice
} from '@/lib/inpi-constants';

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
  formality?: any;
}

interface CompanyDetailModalProps {
  company: Company | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyDetailModal({ company, isOpen, onClose }: CompanyDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'establishments' | 'management' | 'history'>('general');

  if (!isOpen || !company) return null;

  const formality = company.formality;
  const entreprise = formality?.content?.personneMorale?.identite?.entreprise;
  const description = formality?.content?.personneMorale?.identite?.description;
  const adresse = formality?.content?.personneMorale?.adresseEntreprise?.adresse;
  const etablissements = formality?.content?.personneMorale?.autresEtablissements || [];
  const composition = formality?.content?.personneMorale?.composition;
  const observations = formality?.content?.personneMorale?.observations;

  const formatCurrency = (amount: number | null) => {
    if (amount === null || amount === undefined) return 'N/A';
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    if (!dateString || dateString === 'N/A') return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR');
    } catch {
      return dateString;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              {company.companyName}
            </h2>
            <p className="text-slate-600 mt-1">
              SIREN: {company.siren} • {company.legalForm}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="/inpi-search/documentation" 
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
            >
              <FileText className="w-4 h-4" />
              Documentation codes
              <ExternalLink className="w-3 h-3" />
            </a>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {[
            { id: 'general', label: 'Informations générales', icon: FileText },
            { id: 'establishments', label: 'Établissements', icon: Building2 },
            { id: 'management', label: 'Direction', icon: Users },
            { id: 'history', label: 'Historique', icon: Calendar }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === id
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              {/* Identité */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Identité de l&apos;entreprise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Identification</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>SIREN:</strong> {company.siren}</div>
                        <div><strong>SIRET siège:</strong> {entreprise?.nicSiege ? `${company.siren}${entreprise.nicSiege}` : 'N/A'}</div>
                        <div><strong>Forme juridique:</strong> {company.legalForm}</div>
                        <div><strong>Code APE:</strong> {company.codeApe} - {getCodeApeLabel(company.codeApe || '')}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Dates importantes</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Création:</strong> {formatDate(company.creationDate || '')}</div>
                        <div><strong>Immatriculation:</strong> {formatDate(entreprise?.dateImmat || '')}</div>
                        <div><strong>Début d&apos;activité:</strong> {formatDate(entreprise?.dateDebutActiv || '')}</div>
                        <div><strong>Fin d&apos;existence:</strong> {formatDate(description?.dateFinExistence || '')}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Informations économiques</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Capital:</strong> {formatCurrency(description?.montantCapital)}</div>
                        <div><strong>Effectif:</strong> {entreprise?.nombreSalarie || 'N/A'} salarié(s)</div>
                        <div><strong>Clôture exercice:</strong> {formatDateClotureExercice(description?.dateClotureExerciceSocial || '')}</div>
                        <div><strong>Durée:</strong> {description?.duree ? `${description.duree} ans` : 'N/A'}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Adresse */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Adresse du siège social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Adresse complète</h4>
                      <div className="text-sm space-y-1">
                        <div>{formatAdresse(adresse)}</div>
                        <div>{company.postalCode} {company.city}</div>
                        <div>{adresse?.pays || 'FRANCE'}</div>
                        {adresse?.complementLocalisation && (
                          <div className="text-slate-600">📍 {adresse.complementLocalisation}</div>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Détails géographiques</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Code INSEE:</strong> {adresse?.codeInseeCommune || 'N/A'}</div>
                        <div><strong>Pays:</strong> {adresse?.codePays || 'FRA'}</div>
                        {adresse?.indicateurValidationBANPresent && (
                          <Badge variant="outline" className="text-xs">
                            ✓ Adresse validée BAN
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Activité */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Activité et objet social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Objet social</h4>
                      <p className="text-sm text-slate-800 leading-relaxed">
                        {company.activity || 'Non renseigné'}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2">Classification</h4>
                        <div className="space-y-1 text-sm">
                          <div><strong>Code APE:</strong> {company.codeApe}</div>
                          <div><strong>Libellé APE:</strong> {getCodeApeLabel(company.codeApe || '')}</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2">Caractéristiques</h4>
                        <div className="flex flex-wrap gap-2">
                          {description?.ess && <Badge variant="outline">ESS</Badge>}
                          {description?.capitalVariable && <Badge variant="outline">Capital variable</Badge>}
                          {formality?.content?.natureCreation?.microEntreprise && <Badge variant="outline">Micro-entreprise</Badge>}
                          {formality?.content?.natureCreation?.entrepriseAgricole && <Badge variant="outline">Entreprise agricole</Badge>}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'establishments' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Établissements ({etablissements.length})</h3>
                <Badge variant="secondary">
                  {formality?.nombreEtablissementsOuverts || 0} ouvert(s)
                </Badge>
              </div>
              
              {etablissements.length > 0 ? (
                <div className="space-y-4">
                  {etablissements.map((etablissement: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-2">Identification</h4>
                            <div className="space-y-1 text-sm">
                              <div><strong>SIRET:</strong> {etablissement.descriptionEtablissement?.siret || 'N/A'}</div>
                              <div><strong>Rôle:</strong> {getRoleLabel(etablissement.descriptionEtablissement?.rolePourEntreprise || '')}</div>
                              <div><strong>Statut:</strong> 
                                <Badge 
                                  variant={etablissement.descriptionEtablissement?.statutPourFormalite === '4' ? 'default' : 'secondary'}
                                  className="ml-2"
                                >
                                  {etablissement.descriptionEtablissement?.statutPourFormalite === '4' ? 'Actif' : 'Fermé'}
                                </Badge>
                              </div>
                              {etablissement.descriptionEtablissement?.enseigne && (
                                <div><strong>Enseigne:</strong> {etablissement.descriptionEtablissement.enseigne}</div>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-2">Adresse</h4>
                            <div className="text-sm space-y-1">
                              <div>{formatAdresse(etablissement.adresse)}</div>
                              <div>{etablissement.adresse?.codePostal} {etablissement.adresse?.commune}</div>
                              {etablissement.adresse?.complementLocalisation && (
                                <div className="text-slate-600">📍 {etablissement.adresse.complementLocalisation}</div>
                              )}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-700 mb-2">Activités</h4>
                            <div className="space-y-2">
                              {etablissement.activites?.slice(0, 2).map((activite: any, actIndex: number) => (
                                <div key={actIndex} className="text-sm">
                                  <Badge variant="outline" className="text-xs mb-1">
                                    {activite.codeApe}
                                  </Badge>
                                  <p className="text-slate-700">{activite.descriptionDetaillee}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {etablissement.descriptionEtablissement?.dateEffetFermeture && (
                          <div className="mt-3 pt-3 border-t">
                            <Badge variant="destructive">
                              Fermé le {formatDate(etablissement.descriptionEtablissement.dateEffetFermeture)}
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  Aucun établissement secondaire répertorié
                </div>
              )}
            </div>
          )}

          {activeTab === 'management' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Direction et administration</h3>
              
              {composition?.pouvoirs && composition.pouvoirs.length > 0 ? (
                <div className="space-y-4">
                  {composition.pouvoirs.map((pouvoir: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-slate-900">
                              {pouvoir.typeDePersonne === 'INDIVIDU' ? 
                                `${pouvoir.individu?.descriptionPersonne?.prenoms?.[0] || ''} ${pouvoir.individu?.descriptionPersonne?.nom || ''}`.trim() :
                                pouvoir.entreprise?.denomination || 'Entreprise'
                              }
                            </h4>
                            <Badge variant="outline">
                              {getRoleLabel(pouvoir.roleEntreprise)}
                            </Badge>
                          </div>
                          <Badge variant={pouvoir.actif ? 'default' : 'secondary'}>
                            {pouvoir.actif ? 'Actif' : 'Inactif'}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          {pouvoir.typeDePersonne === 'INDIVIDU' ? (
                            <>
                              <div>
                                <strong>Informations personnelles</strong>
                                <div className="mt-1 space-y-1">
                                  {pouvoir.individu?.descriptionPersonne?.dateDeNaissance && (
                                    <div>Né(e) en {pouvoir.individu.descriptionPersonne.dateDeNaissance}</div>
                                  )}
                                  {pouvoir.individu?.descriptionPersonne?.genre === '1' && (
                                    <div>Genre: Masculin</div>
                                  )}
                                  {pouvoir.individu?.descriptionPersonne?.genre === '2' && (
                                    <div>Genre: Féminin</div>
                                  )}
                                </div>
                              </div>
                              <div>
                                <strong>Adresse</strong>
                                <div className="mt-1 space-y-1">
                                  <div>{pouvoir.individu?.adresseDomicile?.codePostal} {pouvoir.individu?.adresseDomicile?.commune}</div>
                                  <div>{pouvoir.individu?.adresseDomicile?.pays || 'FRANCE'}</div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                <strong>Informations société</strong>
                                <div className="mt-1 space-y-1">
                                  <div>SIREN: {pouvoir.entreprise?.siren}</div>
                                  <div>Forme: {getFormeJuridiqueLabel(pouvoir.entreprise?.formeJuridique || '')}</div>
                                  <div>Registre: {pouvoir.entreprise?.lieuRegistre}</div>
                                </div>
                              </div>
                              <div>
                                <strong>Adresse société</strong>
                                <div className="mt-1 space-y-1">
                                  <div>{pouvoir.adresseEntreprise?.voie}</div>
                                  <div>{pouvoir.adresseEntreprise?.codePostal} {pouvoir.adresseEntreprise?.commune}</div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  Aucune information sur la direction disponible
                </div>
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Historique et observations</h3>
              
              {observations?.rcs && observations.rcs.length > 0 ? (
                <div className="space-y-3">
                  {observations.rcs.map((obs: any, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium">
                              {formatDate(obs.dateAjout)}
                            </span>
                            {obs.numObservation && (
                              <Badge variant="outline" className="text-xs">
                                #{obs.numObservation}
                              </Badge>
                            )}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {obs.etatObs}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-slate-800 leading-relaxed">
                          {obs.texte}
                        </p>
                        
                        {obs.dateGreffe && (
                          <div className="mt-2 text-xs text-slate-500">
                            Greffe: {formatDate(obs.dateGreffe)}
                            {obs.dateDerModif && ` • Dernière modif: ${formatDate(obs.dateDerModif)}`}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500">
                  Aucun historique disponible
                </div>
              )}

              {/* Historique des événements */}
              {formality?.historique && formality.historique.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-semibold text-slate-700 mb-4">Événements récents</h4>
                  <div className="space-y-2">
                    {formality.historique.map((event: any, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded">
                        <Badge variant="outline" className="text-xs">
                          {event.codeEvenement}
                        </Badge>
                        <span className="text-sm">{formatDate(event.dateIntegration)}</span>
                        {event.numeroLiasse && (
                          <span className="text-xs text-slate-500">Liasse: {event.numeroLiasse}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
