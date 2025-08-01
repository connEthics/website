import { NextRequest, NextResponse } from 'next/server';
import { 
  getFormeJuridiqueLabel, 
  formatAdresse
} from '@/lib/inpi-constants';
import { withNextBotProtection } from '@/lib/botDetection';

// Interface pour les paramètres de recherche INPI
interface INPISearchParams {
  siren?: string;
  companyName?: string; // Changé de denominationSociale à companyName selon l'API
  postalCode?: string; // Nouveau paramètre pour le code postal
  page?: number;
  size?: number; // Changé de taille à size
}

// Interface pour la réponse INPI (structure réelle basée sur les logs)
interface INPICompany {
  siren: string;
  companyName: string;
  legalForm?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  creationDate?: string;
  activity?: string;
  codeApe?: string;
  // Structure complète de l'API INPI
  formality?: {
    siren: string;
    content: {
      personneMorale?: {
        identite?: {
          entreprise?: {
            denomination?: string;
            formeJuridique?: string;
            nicSiege?: string;
            codeApe?: string;
            dateImmat?: string;
            nombreSalarie?: number;
          };
          description?: {
            objet?: string;
            montantCapital?: number;
            deviseCapital?: string;
          };
        };
        adresseEntreprise?: {
          adresse?: {
            pays?: string;
            codePostal?: string;
            commune?: string;
            typeVoie?: string;
            voie?: string;
            numVoie?: string;
            complementLocalisation?: string;
          };
        };
        autresEtablissements?: Array<{
          adresse?: {
            codePostal?: string;
            commune?: string;
            [key: string]: any;
          };
          [key: string]: any;
        }>;
      };
    };
  };
}

interface INPIApiResponse {
  data: INPICompany[];
  total: number;
  page: number;
  size: number;
  maxPage?: number;
}

// Configuration de l'API INPI
const INPI_API_BASE_URL = process.env.INPI_API_BASE_URL || 'https://registre-national-entreprises-pprod.inpi.fr/api';
const INPI_USERNAME = process.env.INPI_USERNAME;
const INPI_PASSWORD = process.env.INPI_PASSWORD;

// Cache pour le token d'authentification
let authToken: string | null = null;
let tokenExpiry: number = 0;

export const GET = withNextBotProtection(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    
    // Extraction des paramètres de recherche
    const params: INPISearchParams = {
      siren: searchParams.get('siren') || undefined,
      companyName: searchParams.get('companyName') || undefined,
      postalCode: searchParams.get('postalCode') || undefined,
      page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1,
      size: searchParams.get('size') ? parseInt(searchParams.get('size')!) : 10, // Limité à 10 par défaut
    };

    // Validation des paramètres
    if (!params.siren && !params.companyName) {
      return NextResponse.json(
        { error: 'Au moins un critère de recherche (SIREN ou nom d\'entreprise) est requis' },
        { status: 400 }
      );
    }

    // Si les credentials ne sont pas configurés, retourner des données simulées
    if (!INPI_USERNAME || !INPI_PASSWORD) {
      console.warn('Credentials INPI non configurés, utilisation de données simulées');
      return NextResponse.json(await simulateINPIData(params));
    }

    // Authentification et appel à l'API INPI réelle
    const token = await getAuthToken();
    const inpiResponse = await callINPIAPI(params, token);
    return NextResponse.json(inpiResponse);

  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API INPI:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
});

// Fonction pour obtenir le token d'authentification
async function getAuthToken(): Promise<string> {
  // Vérifier si le token est encore valide (avec une marge de 5 minutes)
  if (authToken && Date.now() < tokenExpiry - 300000) {
    return authToken;
  }

  try {
    console.log('Tentative d\'authentification INPI avec:', {
      url: `${INPI_API_BASE_URL}/sso/login`,
      username: INPI_USERNAME,
      hasPassword: !!INPI_PASSWORD
    });

    const response = await fetch(`${INPI_API_BASE_URL}/sso/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: INPI_USERNAME,
        password: INPI_PASSWORD,
      }),
    });

    console.log('Réponse d\'authentification INPI:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erreur d\'authentification INPI:', {
        status: response.status,
        statusText: response.statusText,
        url: `${INPI_API_BASE_URL}/sso/login`,
        body: errorText.substring(0, 500)
      });
      throw new Error(`Erreur d'authentification INPI: ${response.status} ${response.statusText} - ${errorText.substring(0, 200)}`);
    }

    // Vérifier le content-type pour l'authentification aussi
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text();
      console.error('Réponse d\'auth non-JSON:', textResponse.substring(0, 500));
      throw new Error(`L'endpoint d'authentification a retourné du ${contentType} au lieu de JSON`);
    }

    const authData = await response.json();
    console.log('Données d\'authentification reçues:', {
      hasToken: !!(authData.token || authData.access_token),
      keys: Object.keys(authData)
    });
    
    // Adapter selon la vraie structure de réponse de l'API INPI
    authToken = authData.token || authData.access_token;
    // Définir l'expiration (exemple : 1 heure, à adapter selon l'API)
    tokenExpiry = Date.now() + (authData.expires_in || 3600) * 1000;

    if (!authToken) {
      throw new Error('Token d\'authentification non reçu');
    }

    console.log('Authentification INPI réussie');
    return authToken;
  } catch (error) {
    console.error('Erreur lors de l\'authentification INPI:', error);
    throw error;
  }
}

// Fonction pour appeler l'API INPI réelle
async function callINPIAPI(params: INPISearchParams, token: string): Promise<INPIApiResponse> {
  const queryParams = new URLSearchParams();
  
  // Construction des paramètres de requête selon la documentation INPI
  if (params.siren) {
    // L'API INPI s'attend à recevoir le SIREN comme un tableau
    queryParams.append('siren[]', params.siren);
  }
  if (params.companyName) queryParams.append('companyName', params.companyName);
  if (params.postalCode) queryParams.append('postalCode', params.postalCode);
  if (params.page) queryParams.append('page', params.page.toString());
  if (params.size) queryParams.append('size', params.size.toString());

  const apiUrl = `${INPI_API_BASE_URL}/companies?${queryParams.toString()}`;
  console.log('Appel API INPI:', apiUrl);
  console.log('Token utilisé:', token.substring(0, 20) + '...');
  
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  console.log('Réponse API INPI:', {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Erreur API INPI:', {
      status: response.status,
      statusText: response.statusText,
      url: apiUrl,
      headers: Object.fromEntries(response.headers.entries()),
      body: errorText.substring(0, 500) // Premiers 500 caractères pour éviter les logs trop longs
    });
    
    if (response.status === 401) {
      // Token expiré, forcer la ré-authentification
      authToken = null;
      tokenExpiry = 0;
      throw new Error('Token d\'authentification expiré');
    }
    throw new Error(`Erreur API INPI: ${response.status} ${response.statusText} - ${errorText.substring(0, 200)}`);
  }

  // Vérifier le content-type avant de parser le JSON
  const contentType = response.headers.get('content-type');
  console.log('Content-Type de la réponse:', contentType);
  
  if (!contentType || !contentType.includes('application/json')) {
    const textResponse = await response.text();
    console.error('Réponse non-JSON reçue:', textResponse.substring(0, 500));
    throw new Error(`L'API INPI a retourné du ${contentType} au lieu de JSON`);
  }

  const data = await response.json();
  console.log('Données reçues de l\'API INPI:', JSON.stringify(data, null, 2));
  
  // Transformation des données selon la vraie structure de réponse de l'API INPI
  let transformedData: INPICompany[] = data.map((item: any) => {
    const formality = item.formality;
    const entreprise = formality?.content?.personneMorale?.identite?.entreprise;
    const description = formality?.content?.personneMorale?.identite?.description;
    const adresse = formality?.content?.personneMorale?.adresseEntreprise?.adresse;
    
    return {
      siren: item.siren || formality?.siren || 'N/A',
      companyName: entreprise?.denomination || 'Nom non disponible',
      legalForm: getFormeJuridiqueLabel(entreprise?.formeJuridique || 'N/A'),
      address: formatAdresse(adresse),
      city: adresse?.commune || 'N/A',
      postalCode: adresse?.codePostal || 'N/A',
      creationDate: entreprise?.dateImmat || 'N/A',
      activity: description?.objet || 'N/A',
      codeApe: entreprise?.codeApe || 'N/A',
      formality: formality
    };
  });

  // Filtrage côté client par code postal si spécifié
  if (params.postalCode) {
    const originalLength = transformedData.length;
    transformedData = transformedData.filter(item => {
      // Vérifier le code postal de l'adresse principale
      const mainPostalCode = item.postalCode;
      
      // Vérifier aussi les établissements secondaires
      const etablissements = item.formality?.content?.personneMorale?.autresEtablissements || [];
      const hasMatchingEtablissement = etablissements.some((etab: any) => 
        etab.adresse?.codePostal === params.postalCode
      );
      
      return mainPostalCode === params.postalCode || hasMatchingEtablissement;
    });
    
    console.log(`Filtrage par code postal ${params.postalCode}: ${originalLength} -> ${transformedData.length} résultats`);
  }
  
  // Utilisation des headers de pagination de l'API INPI
  const headers = Object.fromEntries(response.headers.entries());
  const originalTotal = parseInt(headers['pagination-count'] || '0');
  const currentPage = parseInt(headers['pagination-page'] || '1');
  const maxPage = parseInt(headers['pagination-max-page'] || '1');
  
  // Si on a filtré par code postal, ajuster le total
  const finalTotal = params.postalCode ? transformedData.length : originalTotal;
  
  return {
    data: transformedData,
    total: finalTotal,
    page: currentPage,
    size: params.size || 20,
    maxPage: params.postalCode ? Math.ceil(finalTotal / (params.size || 20)) : maxPage
  };
}

// Fonction de simulation pour les tests
async function simulateINPIData(params: INPISearchParams): Promise<INPIApiResponse> {
  // Simulation d'un délai d'API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const mockData: INPICompany[] = [
    {
      siren: '123456789',
      companyName: 'EXEMPLE SOCIÉTÉ SAS',
      legalForm: 'SAS',
      address: '123 Rue de la Tech',
      city: 'Paris',
      postalCode: '75001'
    },
    {
      siren: '987654321',
      companyName: 'CONNETHICS CONSULTING',
      legalForm: 'SASU',
      address: '456 Avenue de l\'Innovation',
      city: 'Lyon',
      postalCode: '69000'
    },
    {
      siren: '456789123',
      companyName: 'TECH INNOVATION SARL',
      legalForm: 'SARL',
      address: '789 Boulevard du Digital',
      city: 'Marseille',
      postalCode: '13000'
    },
    {
      siren: '789123456',
      companyName: 'DIGITAL SERVICES SA',
      legalForm: 'SA',
      address: '321 Place de la République',
      city: 'Toulouse',
      postalCode: '31000'
    },
    {
      siren: '147258369',
      companyName: 'AI ETHICS CONSULTING',
      legalForm: 'SAS',
      address: '654 Rue de l\'Éthique',
      city: 'Nantes',
      postalCode: '44000'
    }
  ];

  // Filtrage selon les paramètres
  let filteredData = mockData;
  
  if (params.siren) {
    filteredData = filteredData.filter(item => 
      item.siren.includes(params.siren!)
    );
  }
  
  if (params.companyName) {
    filteredData = filteredData.filter(item => 
      item.companyName.toLowerCase().includes(params.companyName!.toLowerCase())
    );
  }

  if (params.postalCode) {
    filteredData = filteredData.filter(item => 
      item.postalCode === params.postalCode
    );
  }

  // Pagination
  const page = params.page || 1;
  const size = params.size || 20;
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    total: filteredData.length,
    page,
    size,
  };
}
