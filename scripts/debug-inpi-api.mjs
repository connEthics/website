#!/usr/bin/env node

/**
 * Script de debug pour tester l'API INPI directement
 * Usage: node scripts/debug-inpi-api.mjs
 */

const INPI_API_BASE_URL = process.env.INPI_API_BASE_URL || 'https://registre-national-entreprises-pprod.inpi.fr/api';
const INPI_USERNAME = process.env.INPI_USERNAME;
const INPI_PASSWORD = process.env.INPI_PASSWORD;

async function testINPIAPI() {
  console.log('🔍 Test de l\'API INPI...');
  console.log('URL de base:', INPI_API_BASE_URL);
  console.log('Username:', INPI_USERNAME ? 'Configuré' : 'NON CONFIGURÉ');
  console.log('Password:', INPI_PASSWORD ? 'Configuré' : 'NON CONFIGURÉ');
  console.log('');

  if (!INPI_USERNAME || !INPI_PASSWORD) {
    console.error('❌ Variables INPI_USERNAME et INPI_PASSWORD non configurées');
    console.log('Créez un fichier .env.local avec :');
    console.log('INPI_USERNAME=votre_username');
    console.log('INPI_PASSWORD=votre_password');
    return;
  }

  try {
    // Test 1: Authentification
    console.log('🔐 Test d\'authentification...');
    const authUrl = `${INPI_API_BASE_URL}/sso/login`;
    console.log('URL d\'auth:', authUrl);
    
    const authResponse = await fetch(authUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username: INPI_USERNAME,
        password: INPI_PASSWORD,
      }),
    });

    console.log('Status auth:', authResponse.status);
    console.log('Headers auth:', Object.fromEntries(authResponse.headers.entries()));
    
    if (!authResponse.ok) {
      const errorText = await authResponse.text();
      console.error('❌ Erreur d\'authentification:', errorText);
      return;
    }

    const contentType = authResponse.headers.get('content-type');
    console.log('Content-Type:', contentType);
    
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await authResponse.text();
      console.error('❌ Réponse non-JSON:', textResponse);
      return;
    }

    const authData = await authResponse.json();
    console.log('✅ Authentification réussie');
    console.log('Structure de réponse:', Object.keys(authData));
    console.log('Auth data:', JSON.stringify(authData, null, 2));

    const token = authData.token || authData.access_token || authData.accessToken;
    if (!token) {
      console.error('❌ Aucun token trouvé dans la réponse');
      return;
    }

    console.log('Token obtenu:', token.substring(0, 20) + '...');

    // Test 2: Recherche d'entreprise
    console.log('\n🏢 Test de recherche d\'entreprise...');
    const searchUrl = `${INPI_API_BASE_URL}/companies?siren=552081317`;
    console.log('URL de recherche:', searchUrl);

    const searchResponse = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log('Status recherche:', searchResponse.status);
    console.log('Headers recherche:', Object.fromEntries(searchResponse.headers.entries()));

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      console.error('❌ Erreur de recherche:', errorText);
      return;
    }

    const searchContentType = searchResponse.headers.get('content-type');
    console.log('Content-Type recherche:', searchContentType);
    
    if (!searchContentType || !searchContentType.includes('application/json')) {
      const textResponse = await searchResponse.text();
      console.error('❌ Réponse de recherche non-JSON:', textResponse);
      return;
    }

    const searchData = await searchResponse.json();
    console.log('✅ Recherche réussie');
    console.log('Structure des données:', Array.isArray(searchData) ? 'Array' : 'Object');
    console.log('Nombre de résultats:', Array.isArray(searchData) ? searchData.length : 'N/A');
    console.log('Premier résultat:', JSON.stringify(searchData[0] || searchData, null, 2));

  } catch (error) {
    console.error('❌ Erreur générale:', error.message);
    console.error('Stack:', error.stack);
  }
}

// Exécuter le test si appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  testINPIAPI();
}

export { testINPIAPI };
