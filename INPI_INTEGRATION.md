# Configuration de l'API INPI - Registre National des Entreprises

## Description

Cette fonctionnalité permet de rechercher et d'afficher les informations d'entreprises françaises via l'API du Registre National des Entreprises de l'INPI (Institut National de la Propriété Industrielle).

## Configuration

### 1. Credentials INPI

Pour utiliser l'API réelle de l'INPI, vous devez :

1. Créer un compte sur le portail du Registre National des Entreprises INPI
2. Obtenir des credentials (username/password) pour l'accès à l'API
3. Ajouter les credentials dans votre fichier `.env.local` :

```bash
INPI_USERNAME=votre_nom_utilisateur
INPI_PASSWORD=votre_mot_de_passe
INPI_API_BASE_URL=https://registre-national-entreprises-pprod.inpi.fr/api
```

### 2. Environnements

- **Test :** `https://registre-national-entreprises-pprod.inpi.fr/api`
- **Production :** `https://registre-national-entreprises.inpi.fr/api`

### 3. Mode Simulation

Si aucun credential n'est configuré, l'application fonctionne en mode simulation avec des données fictives pour les tests.

## Utilisation

### Page de Recherche

La page est accessible à l'URL : `/inpi-search`

**Note :** Cette page est cachée et n'apparaît pas dans la navigation principale du site.

### Critères de Recherche

- **SIREN** : Numéro d'identification unique de l'entreprise (9 chiffres)
- **Nom d'entreprise** : Nom de l'entreprise (recherche partielle)
- **Résultats par page** : Nombre de résultats affichés (10, 20, 50, 100)

### Fonctionnalités

- ✅ Recherche par SIREN ou nom d'entreprise
- ✅ Affichage des informations de base (nom, forme juridique, adresse)
- ✅ Pagination des résultats
- ✅ Interface responsive (mobile/desktop)
- ✅ Mode sombre/clair
- ✅ Simulation avec données fictives
- ✅ Gestion d'erreurs et authentification automatique

## API Endpoints

### POST `/api/sso/login` (INPI)

Authentification auprès de l'API INPI.

**Body JSON :**
```json
{
  "username": "your_username",
  "password": "your_password"
}
```

### GET `/api/companies` (INPI)

Recherche d'entreprises selon les critères fournis.

**Paramètres de requête :**
- `siren` (optionnel) : Numéro SIREN
- `companyName` (optionnel) : Nom de l'entreprise
- `page` (optionnel) : Numéro de page (défaut: 1)
- `size` (optionnel) : Taille de page (défaut: 20)

### GET `/api/inpi/search` (Notre API)

Notre proxy vers l'API INPI.

**Réponse :**
```json
{
  "data": [
    {
      "siren": "123456789",
      "companyName": "EXEMPLE SOCIÉTÉ SAS",
      "legalForm": "SAS",
      "address": "123 Rue de la Tech",
      "city": "Paris",
      "postalCode": "75001"
    }
  ],
  "total": 1,
  "page": 1,
  "size": 20
}
```

## Architecture

### Composants

- `/src/app/inpi-search/page.tsx` : Page principale de recherche
- `/src/app/api/inpi/search/route.ts` : Route API pour interfacer avec l'INPI
- `/src/components/ui/` : Composants UI réutilisables (Card, Button, Input, etc.)

### Types TypeScript

```typescript
interface Company {
  siren: string;
  companyName: string;
  legalForm?: string;
  address?: string;
  city?: string;
  postalCode?: string;
}

interface SearchParams {
  siren?: string;
  companyName?: string;
  page?: number;
  size?: number;
}
```

## Authentification

L'API utilise un système d'authentification par token :

1. **Login :** POST vers `/api/sso/login` avec username/password
2. **Token :** Récupération du token d'accès
3. **Requêtes :** Utilisation du token dans l'en-tête `Authorization: Bearer {token}`
4. **Cache :** Le token est mis en cache côté serveur avec gestion de l'expiration

## Sécurité

- Les credentials sont stockés côté serveur uniquement
- Aucun credential n'est exposé côté client
- Les requêtes passent par notre API Next.js en tant que proxy
- Gestion automatique du renouvellement de token

## Développement

### Tests Locaux

1. Démarrer le serveur de développement :
```bash
npm run dev
```

2. Accéder à la page : http://localhost:3000/inpi-search

3. Tester avec des données simulées (sans credentials configurés)

### Déploiement

Assurez-vous de configurer les variables d'environnement sur votre plateforme de déploiement :
- `INPI_USERNAME`
- `INPI_PASSWORD`
- `INPI_API_BASE_URL`

## Limitations Actuelles

- Mode simulation seulement (en attente des credentials INPI réels)
- Recherche limitée à SIREN et nom d'entreprise selon l'API INPI
- Pas de cache des requêtes (à implémenter si nécessaire)

## Améliorations Futures

- [ ] Cache Redis pour optimiser les performances
- [ ] Export des résultats en CSV/Excel
- [ ] Recherche avancée avec plus de critères
- [ ] Détails complets d'entreprise (si disponibles dans l'API)
- [ ] Historique des recherches
