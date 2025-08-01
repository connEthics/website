/**
 * Constantes et énumérations pour l'API INPI
 * Basées sur la documentation officielle et les données réelles observées
 */

// Formes juridiques selon le référentiel INPI/INSEE
export const FORMES_JURIDIQUES: Record<string, string> = {
  // Sociétés commerciales
  '5410': 'SA à directoire (société anonyme à directoire)',
  '5415': 'SA à conseil d\'administration (société anonyme à conseil d\'administration)',
  '5422': 'SARL (société à responsabilité limitée)',
  '5426': 'EURL (entreprise unipersonnelle à responsabilité limitée)',
  '5430': 'SNC (société en nom collectif)',
  '5440': 'SCS (société en commandite simple)',
  '5450': 'SCA (société en commandite par actions)',
  '5460': 'SEM (société d\'économie mixte)',
  '5470': 'SE (société européenne)',
  '5480': 'SELARL (société d\'exercice libéral à responsabilité limitée)',
  '5485': 'SELAFA (société d\'exercice libéral à forme anonyme)',
  '5490': 'SELCA (société d\'exercice libéral en commandite par actions)',
  '5495': 'SELAS (société d\'exercice libéral par actions simplifiée)',
  '5499': 'SAS (société par actions simplifiée)',
  
  // Société à responsabilité limitée et variantes
  '5505': 'SASU (société par actions simplifiée unipersonnelle)',
  '5510': 'SELARL (société d\'exercice libéral à responsabilité limitée)',
  '5515': 'SELAFA (société d\'exercice libéral à forme anonyme)',
  '5520': 'SELCA (société d\'exercice libéral en commandite par actions)',
  '5525': 'SELAS (société d\'exercice libéral par actions simplifiée)',
  '5530': 'SELASU (société d\'exercice libéral par actions simplifiée unipersonnelle)',
  '5540': 'SNC (société en nom collectif)',
  '5550': 'SCS (société en commandite simple)',
  '5560': 'SCA (société en commandite par actions)',
  '5570': 'SEM (société d\'économie mixte)',
  '5580': 'SE (société européenne)',
  '5585': 'SEURL (société d\'exercice libéral unipersonnelle à responsabilité limitée)',
  '5590': 'SCP (société civile professionnelle)',
  '5595': 'SCM (société civile de moyens)',
  '5599': 'Autre société commerciale',
  
  // Formes spécifiques observées dans l'API INPI
  '5710': 'SAS (société par actions simplifiée)', // Observé pour ERNST & YOUNG AUDIT et GEODIS
  '5720': 'SASU (société par actions simplifiée unipersonnelle)',
  
  // Entreprises individuelles
  '1000': 'Entrepreneur individuel',
  '1100': 'Artisan-commerçant',
  '1200': 'Commerçant',
  '1300': 'Artisan',
  '1400': 'Officier public ou ministériel',
  '1500': 'Profession libérale',
  '1600': 'Exploitant agricole',
  '1700': 'Agent commercial',
  '1800': 'Auto-entrepreneur',
  
  // Associations et fondations
  '9210': 'Association déclarée',
  '9220': 'Association déclarée d\'utilité publique',
  '9230': 'Association de droit local (Alsace-Moselle)',
  '9240': 'Association ou union de syndicats',
  '9260': 'Fondation',
  '9300': 'Syndicat de salariés',
  '9310': 'Syndicat patronal',
  '9320': 'Syndicat de copropriétaires',
  '9330': 'Association syndicale autorisée',
  '9340': 'Association syndicale libre',
  
  // Personnes morales de droit public
  '7110': 'Autorité constitutionnelle',
  '7120': 'Autorité administrative indépendante',
  '7150': 'Service central d\'un ministère',
  '7160': 'Service du ministère de la Défense',
  '7171': 'Service déconcentré à compétence nation. de la direction générale des finances publiques',
  '7172': 'Service déconcentré de la direction générale des finances publiques',
  '7190': 'Autre service de l\'état',
  '7210': 'Commune',
  '7220': 'Département',
  '7225': 'Territoire d\'Outre-mer',
  '7229': 'Groupement de collectivités territoriales',
  '7230': 'Région',
  '7312': 'Commune associée',
  '7313': 'Section de commune',
  '7314': 'Ensemble urbain',
  '7321': 'Association syndicale autorisée',
  '7322': 'Association foncière urbaine',
  '7323': 'Association foncière de remembrement',
  '7331': 'Établissement public local d\'enseignement',
  '7340': 'Pôle métropolitain',
  '7341': 'Secteur de commune',
  '7342': 'District urbain',
  '7343': 'Communauté urbaine',
  '7344': 'Communauté d\'agglomération',
  '7345': 'Communauté de communes',
  '7346': 'Communauté de villes',
  '7347': 'Communauté métropolitaine',
  '7348': 'Syndicat intercommunal à vocation multiple',
  '7349': 'Syndicat intercommunal à vocation unique',
  '7354': 'Syndicat mixte fermé',
  '7355': 'Syndicat mixte ouvert',
  '7356': 'Commission syndicale pour la gestion des biens indivis des sections de commune',
  '7361': 'Centre communal d\'action sociale',
  '7362': 'Caisse des écoles',
  '7363': 'Caisse de crédit municipal',
  '7364': 'Établissement d\'hospitalisation',
  '7365': 'Syndicat inter hospitalier',
  '7366': 'Établissement public local social et médico-social',
  '7371': 'Office public d\'habitation à loyer modéré',
  '7372': 'Service départemental d\'incendie et de secours',
  '7373': 'Établissement public local culturel',
  '7378': 'Régie d\'une collectivité locale à caractère administratif',
  '7379': 'Régie d\'une collectivité locale à caractère industriel et commercial',
  '7381': 'Organisme consulaire',
  '7382': 'Établissement public national ayant fonction d\'administration centrale',
  '7383': 'Établissement public national à caractère scientifique culturel et professionnel',
  '7384': 'Autre établissement public national d\'enseignement',
  '7385': 'Autre établissement public national administratif à compétence territoriale limitée',
  '7389': 'Établissement public national à caractère administratif',
  '7410': 'Groupement d\'intérêt public (GIP)',
  '7430': 'Établissement public des cultes d\'Alsace-Lorraine',
  '7440': 'Organisme gérant un régime de protection sociale à adhésion obligatoire',
  '7450': 'Organisme mutualiste',
  '7470': 'Groupement de coopération sanitaire à gestion publique',
  '7490': 'Autre personne morale de droit administratif',
  
  // Organismes de placement collectif
  '6100': 'Caisse nationale de sécurité sociale',
  '6210': 'Mutuelle',
  '6220': 'Coopérative d\'assurance',
  '6290': 'Autre organisme d\'assurance',
  '6316': 'Fonds commun de placement',
  '6317': 'Fonds d\'investissement de proximité',
  '6318': 'Fonds de placement immobilier',
  '6411': 'Caisse d\'épargne et de prévoyance',
  '6511': 'Banque',
  '6521': 'Banque coopérative',
  '6532': 'Compagnie financière',
  '6533': 'Société de gestion de portefeuille',
  '6534': 'Société d\'investissement à capital fixe',
  '6535': 'Société d\'investissement à capital variable',
  '6536': 'Société civile de placement immobilier',
  
  // Codes par défaut
  'DEFAULT': 'Forme juridique non renseignée',
  'N/A': 'Non disponible'
};

// Codes APE (Activité Principale Exercée) couramment observés
export const CODES_APE: Record<string, string> = {
  '5229A': 'Messagerie, fret express',
  '5229B': 'Affrètement et organisation des transports',
  '7010Z': 'Activités des sièges sociaux',
  '8211Z': 'Services administratifs combinés de bureau',
  '6202A': 'Conseil en systèmes et logiciels informatiques',
  '6201Z': 'Programmation informatique',
  '7022Z': 'Conseil pour les affaires et autres conseils de gestion',
  '6920Z': 'Activités comptables',
  '7112B': 'Ingénierie, études techniques',
  '4690Z': 'Commerce de gros (commerce interentreprises) non spécialisé',
  '4941A': 'Transports routiers de fret interurbains',
  '4941B': 'Transports routiers de fret de proximité',
  '5210B': 'Entreposage et stockage non frigorifique',
  '5224A': 'Manutention portuaire',
  '5224B': 'Manutention non portuaire',
  '6311Z': 'Traitement de données, hébergement et activités connexes',
  '6312Z': 'Portails internet',
  '8559A': 'Formation continue d\'adultes',
  '8559B': 'Autres enseignements',
  '9001Z': 'Arts du spectacle vivant',
  '9002Z': 'Activités de soutien au spectacle vivant'
};

// Statuts d'entreprise
export const STATUTS_ENTREPRISE = {
  ACTIF: 'Actif',
  INACTIF: 'Inactif',
  CESSE: 'Cessé',
  RADIE: 'Radié',
  LIQUIDE: 'En liquidation'
} as const;

// Rôles pour entreprise (observés dans l'API)
export const ROLES_ENTREPRISE: Record<string, string> = {
  '1': 'Siège social',
  '4': 'Établissement secondaire',
  '11': 'Établissement fermé',
  '14': 'Établissement fermé définitivement',
  '30': 'Président',
  '71': 'Commissaire aux comptes titulaire',
  '73': 'Directeur général'
};

// Types de voies pour les adresses
export const TYPES_VOIE: Record<string, string> = {
  'RUE': 'Rue',
  'AVE': 'Avenue',
  'BD': 'Boulevard',
  'PL': 'Place',
  'ALL': 'Allée',
  'IMP': 'Impasse',
  'CHE': 'Chemin',
  'QUAI': 'Quai',
  'SQ': 'Square',
  'COUR': 'Cour',
  'ESP': 'Esplanade',
  'PROM': 'Promenade',
  'PASS': 'Passage',
  'GAL': 'Galerie',
  'PONT': 'Pont',
  'TER': 'Terrasse',
  'MAIL': 'Mail',
  'CRS': 'Cours',
  'LOT': 'Lotissement',
  'RES': 'Résidence',
  'ZI': 'Zone Industrielle',
  'ZA': 'Zone d\'Activité',
  'ZAC': 'Zone d\'Aménagement Concerté'
};

// Fonction utilitaire pour obtenir le libellé d'une forme juridique
export function getFormeJuridiqueLabel(code: string): string {
  return FORMES_JURIDIQUES[code] || FORMES_JURIDIQUES['DEFAULT'];
}

// Fonction utilitaire pour obtenir le libellé d'un code APE
export function getCodeApeLabel(code: string): string {
  return CODES_APE[code] || 'Activité non répertoriée';
}

// Fonction utilitaire pour obtenir le libellé d'un rôle
export function getRoleLabel(code: string): string {
  return ROLES_ENTREPRISE[code] || 'Rôle non défini';
}

// Fonction utilitaire pour obtenir le libellé d'un type de voie
export function getTypeVoieLabel(code: string): string {
  return TYPES_VOIE[code] || code;
}

// Fonction pour formater une adresse complète
export function formatAdresse(adresse: any): string {
  if (!adresse) return 'Adresse non disponible';
  
  const parts: string[] = [];
  
  if (adresse.numVoie) parts.push(adresse.numVoie);
  if (adresse.typeVoie) parts.push(getTypeVoieLabel(adresse.typeVoie));
  if (adresse.voie) parts.push(adresse.voie);
  if (adresse.complementLocalisation) parts.push(adresse.complementLocalisation);
  
  return parts.length > 0 ? parts.join(' ') : 'Adresse non disponible';
}

// Fonction pour déterminer le statut d'une entreprise
export function determinerStatutEntreprise(nombreEtablissementsOuverts: number): string {
  return nombreEtablissementsOuverts > 0 ? STATUTS_ENTREPRISE.ACTIF : STATUTS_ENTREPRISE.INACTIF;
}

// Fonction pour formater une date de clôture d'exercice (format jjmm vers date lisible)
export function formatDateClotureExercice(dateClotureCode: string): string {
  if (!dateClotureCode || dateClotureCode === 'N/A' || dateClotureCode.length !== 4) {
    return 'Non renseignée';
  }
  
  try {
    const jour = parseInt(dateClotureCode.substring(0, 2));
    const mois = parseInt(dateClotureCode.substring(2, 4));
    
    if (jour < 1 || jour > 31 || mois < 1 || mois > 12) {
      return dateClotureCode; // Retourne le code original si invalide
    }
    
    const moisNoms = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
    
    return `${jour} ${moisNoms[mois - 1]}`;
  } catch {
    return dateClotureCode; // Retourne le code original en cas d'erreur
  }
}
