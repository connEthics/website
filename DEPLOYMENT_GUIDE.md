# Guide de Déploiement - ConnEthics Website avec INPI

## ✅ Build Réussi

Le projet compile maintenant sans erreurs avec toutes les nouvelles fonctionnalités :
- ✅ Protection anti-bot avec BotD
- ✅ Recherche INPI complète avec filtres
- ✅ Mode sombre forcé sur les pages INPI
- ✅ Accessibilité (navigation clavier, Enter key)
- ✅ Interface simplifiée (pas de pagination)

## 🔧 Variables d'Environnement Vercel

### Configuration Obligatoire

Dans les **Environment Variables** de votre projet Vercel, ajoutez :

```bash
# Production et Preview
NODE_ENV=production

# API INPI (Registre National des Entreprises)
INPI_API_BASE_URL=https://registre-national-entreprises.inpi.fr/api
INPI_USERNAME=votre_username_inpi
INPI_PASSWORD=votre_password_inpi
```

### Variables Optionnelles

```bash
# Configuration Bot Protection (optionnel)
FINGERPRINTJS_PUBLIC_KEY=votre_clé_publique_fingerprintjs
FINGERPRINTJS_SECRET_KEY=votre_clé_secrète_fingerprintjs

# Debug (optionnel - uniquement pour preview)
DEBUG=true
```

## 🚀 Étapes de Déploiement

### 1. Commit et Push du Code

```bash
# Ajouter tous les nouveaux fichiers
git add .

# Commit avec message descriptif
git commit -m "feat: Intégration complète INPI avec protection anti-bot

- Ajout recherche INPI avec API RNE
- Protection BotD en client/serveur
- Interface accessible (Enter key, ARIA)
- Mode sombre forcé sur pages INPI
- Filtrage par code postal automatique
- UI simplifiée sans pagination
- Corrections ESLint complètes"

# Push vers GitHub
git push origin feature/inpi-comptes-annuels
```

### 2. Configuration Vercel

1. **Accédez à votre dashboard Vercel**
2. **Sélectionnez votre projet ConnEthics**
3. **Allez dans Settings > Environment Variables**
4. **Ajoutez les variables listées ci-dessus**

### 3. Variables par Environnement

| Variable | Production | Preview | Development |
|----------|------------|---------|-------------|
| `NODE_ENV` | `production` | `production` | `development` |
| `INPI_API_BASE_URL` | ✅ Requis | ✅ Requis | ✅ Requis |
| `INPI_USERNAME` | ✅ Requis | ✅ Requis | ✅ Requis |
| `INPI_PASSWORD` | ✅ Requis | ✅ Requis | ✅ Requis |

## 🛡️ Protection Anti-Bot

### Comportement par Environnement

- **Development (`NODE_ENV=development`)**: 
  - ❌ Protection désactivée
  - ✅ Accès direct aux APIs
  - 📝 Logs dans la console

- **Production (`NODE_ENV=production`)**:
  - ✅ Protection BotD active
  - 🔒 Vérification client + serveur
  - 🚫 Blocage des requêtes automatisées

### Obtenir un Accès INPI

1. **Créez un compte sur** : https://registre-national-entreprises.inpi.fr/
2. **Demandez l'accès API** auprès de l'INPI
3. **Récupérez vos identifiants** (username + password)
4. **Ajoutez-les dans les variables Vercel**

> **Note** : L'API utilise vos identifiants pour obtenir automatiquement un token d'accès via l'endpoint `/sso/login`

## 📋 Checklist de Déploiement

### Avant le Déploiement
- [x] Build local réussi (`npm run build`)
- [x] Tests de fonctionnalité en local
- [x] Variables d'environnement configurées
- [x] Token INPI valide obtenu
- [x] Code committed et pushé

### Après le Déploiement
- [ ] Vérifier que la page `/inpi-search` se charge
- [ ] Tester la recherche INPI avec un SIREN valide
- [ ] Vérifier que la protection anti-bot fonctionne
- [ ] Tester l'accessibilité (navigation clavier)
- [ ] Vérifier le mode sombre forcé sur INPI

## 🧪 Tests de Validation

### 1. Test de Recherche INPI
```
1. Aller sur /inpi-search
2. Saisir SIREN: 552081317 (Chanel)
3. Appuyer sur Entrée ou cliquer Rechercher
4. Vérifier que les résultats s'affichent
```

### 2. Test Protection Anti-Bot
```
1. Ouvrir les DevTools Network
2. Essayer d'accéder directement à /api/inpi/search
3. Vérifier que la requête est bloquée sans interface
```

### 3. Test Accessibilité
```
1. Utiliser uniquement le clavier (Tab, Enter)
2. Vérifier que tous les champs sont accessibles
3. Tester la recherche avec la touche Entrée
```

## 🔧 Dépannage

### ⚠️ Bug Connu - Code Postal Persistant
```
Comportement : Lors d'une recherche avec >10 résultats, si l'utilisateur 
saisit un code postal, celui-ci reste envoyé dans les requêtes API suivantes.

Impact : Mineur - n'empêche pas l'utilisation de l'application
Status : Accepté pour cette version
```

### Erreur "Unexpected token 'I', "Internal S"... is not valid JSON"
```
Cette erreur indique que l'API INPI retourne du HTML/texte au lieu de JSON.
Causes possibles :
1. URL d'API incorrecte
2. Authentification qui échoue
3. Endpoint non disponible

Solutions :
1. Vérifier INPI_API_BASE_URL (doit finir par /api)
2. Tester vos identifiants avec: node debug-inpi-api.js
3. Consulter les logs serveur pour plus de détails
```

### Erreur 401 - Identifiants INPI Invalides
```
Vérifier INPI_USERNAME et INPI_PASSWORD dans Vercel Environment Variables
```

### Bot Protection trop Strict
```
Ajouter FINGERPRINTJS_PUBLIC_KEY et FINGERPRINTJS_SECRET_KEY
ou désactiver temporairement en dev
```

### Build qui Échoue
```
Vérifier les erreurs ESLint
npm run build en local pour diagnostiquer
```

## 📊 Métriques de Performance

Le build optimisé génère :
- **Page INPI** : 16.9 kB (126 kB First Load)
- **Documentation** : 5.6 kB (115 kB First Load)
- **API Routes** : 133 B (99.8 kB)

## 🔄 Mises à Jour Futures

Pour ajouter des fonctionnalités INPI :
1. Modifier `/src/app/inpi-search/page.tsx`
2. Étendre `/src/lib/inpi-constants.ts`
3. Tester en local avec `npm run build`
4. Déployer via git push

---

## 💡 Support Technique

- **Documentation INPI** : https://registre-national-entreprises.inpi.fr/api/docs
- **BotD Documentation** : https://fingerprint.com/botd/
- **Next.js Deployment** : https://nextjs.org/docs/deployment

🎯 **Le projet est prêt pour la production !**
