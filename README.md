# React Express - Frontend

Application React + TypeScript pour gérer une collection de jeux vidéo.

## 🚀 Démarrage Rapide

### Installation

```bash
npm install
npm run dev
```

L'app sera disponible à `http://localhost:3000`

## 🎮 Configuration des Mocks

Ce projet peut fonctionner avec des **mocks** (données fictives) ou avec le **backend réel**.

### Mode Mock (Développement Local)

Pour développer **sans backend**, activez les mocks :

1. Créez un fichier `.env.development.local` (ou modifiez `.env.development`) :
```
VITE_USE_MOCK=true
```

2. Redémarrez `npm run dev`

Les APIs utiliseront les données de `src/api/mocks/` :
- ✅ Auth (login/register)
- ✅ Jeux (games)
- ✅ Consoles
- ✅ Favoris

### Mode Réel (Avec Backend)

Pour utiliser le backend, assurez-vous que :

1. Le backend tourne sur `http://localhost:4000` (développement local)
2. `.env.development` a `VITE_USE_MOCK=false`
3. Ou utilisez le backend en ligne : `https://reactexpress-tnkm.onrender.com`

## 📦 Proxy API (Vite)

En développement, les requêtes `/api/**` sont automatiquement redirigées vers le backend grâce au proxy Vite configuré dans `vite.config.ts` :

```typescript
proxy: {
  "/api": {
    target: "http://localhost:4000/",
    changeOrigin: true
  }
}
```

## 🏗️ Structure du Projet

```
src/
├── api/
│   ├── mocks/           # Données fictives
│   ├── auth.api.ts
│   ├── games.api.ts
│   ├── consoles.api.ts
│   ├── favorite.api.ts
│   └── adminGames.api.ts
├── components/          # Composants React
├── pages/               # Pages de l'app
├── auth/                # Gestion de l'authentification
├── config/
│   └── api.config.ts    # Configuration des mocks
└── types/               # Types TypeScript
```

## ✨ Fonctionnalités

- 🔐 **Authentification** : Login/Register avec JWT
- 🎮 **Catalogue de Jeux** : Voir les jeux disponibles
- ❤️ **Favoris** : Ajouter/Retirer des jeux en favoris
- 👤 **Profil Utilisateur** : Voir les profils des autres utilisateurs
- 📝 **Admin** : Gérer les jeux et consoles (pour l'admin)

## 🌐 Déploiement (GitHub Pages)

Le projet se déploie automatiquement sur GitHub Pages à chaque push sur `main`.

**Workflow** : `.github/workflows/deploy.yml`

### Configuration requise

Activez GitHub Pages dans les paramètres du repo :
- Settings → Pages
- Source : Deploy from a branch
- Branch : `gh-pages`

L'app sera accessible à : `https://username.github.io/ReactExpress/`

## 📝 Notes pour les Contributeurs

- Les mocks sont dans `src/api/mocks/`
- Pour ajouter un mock : éditez le fichier correspondant et activez `VITE_USE_MOCK=true`
- Ne commitez pas `.env.development.local` (il est dans `.gitignore`)
- Le backend en ligne est sur `https://reactexpress-tnkm.onrender.com`

## 🔧 Scripts Disponibles

```bash
npm run dev      # Démarrer le serveur de développement
npm run build    # Build pour la production
npm run preview  # Prévisualiser le build
npm run lint     # Vérifier les erreurs de lint
```
# Backend Setup Guide

## 🚀 Démarrage Rapide

### Prérequis
- Node.js >= 18
- MongoDB (local ou cloud)

### Installation

```bash
cd back
npm install
```

### Variables d'environnement
Créez un fichier `.env` à la racine du dossier `back/` :

```env
MONGODB_URI=mongodb+srv://DBUSER:PasswordDB@xxx.xxx.mongodb.net
JWT_SECRET=your-secret-key-here
```

### Lancement

**Mode développement (avec rechargement automatique):**
```bash
npm run dev
```

**Mode production:**
```bash
npm start
```

Le serveur sera accessible sur `http://localhost:4000`

---

## 📦 Dépendances

| Package | Version | Utilité |
|---------|---------|---------|
| `express` | ^4.19.2 | Framework web |
| `mongoose` | ^9.1.2 | ODM MongoDB |
| `cors` | ^2.8.5 | Gestion CORS |
| `dotenv` | ^17.2.3 | Variables d'environnement |
| `bcrypt` | ^6.0.0 | Hash de mots de passe |
| `jsonwebtoken` | ^9.0.3 | Authentification JWT |
| `express-validator` | ^7.3.1 | Validation des requêtes |
| `nodemon` | ^3.0.3 | Auto-reload (dev seulement) |

---

## 📁 Structure du Projet

```
back/
├── src/
│   ├── index.js                    # Point d'entrée
│   ├── app.js                      # Configuration Express
│   ├── config/
│   │   └── db.js                   # Connexion MongoDB
│   ├── controllers/                # Logique métier
│   ├── models/                     # Schémas Mongoose
│   ├── routes/                     # Définitions des routes API
│   ├── middlewares/                # Middlewares (auth, validation, etc)
│   └── validators/                 # Validation des données
└── package.json
```

---

## 🔌 API Routes

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `POST /api/auth/logout` - Déconnexion

### Jeux
- `GET /api/games` - Lister les jeux
- `GET /api/games/:id` - Détail d'un jeu
- `POST /api/games` - Créer un jeu (admin)
- `PUT /api/games/:id` - Modifier un jeu (admin)
- `DELETE /api/games/:id` - Supprimer un jeu (admin)

### Consoles
- `GET /api/consoles` - Lister les consoles
- `POST /api/consoles` - Créer une console (admin)
- `PUT /api/consoles/:id` - Modifier une console (admin)
- `DELETE /api/consoles/:id` - Supprimer une console (admin)

### Favoris
- `GET /api/favorites` - Lister les favoris de l'utilisateur
- `POST /api/favorites/:gameId` - Ajouter un jeu aux favoris
- `DELETE /api/favorites/:gameId` - Retirer d'un jeu des favoris

### Admin
- `POST /api/admin/games` - Routes d'administration spéciales

### Santé
- `GET /api/ping` - Vérifier le statut du serveur

---

## 🔐 Authentification

Le système utilise JWT (JSON Web Tokens) :

1. **Inscription/Login** : Retourne un token JWT
2. **Stockage** : Le token est stocké côté client
3. **Utilisation** : Envoyé dans le header `Authorization: Bearer <token>`
4. **Middlewares** :
   - `auth.middleware.js` : Authentification obligatoire
   - `optionalAuth.middleware.js` : Authentification facultative
   - `validate.middleware.js` : Validation des données

---

## 💾 Base de Données

Utilise **MongoDB** avec **Mongoose** comme ODM.

### Modèles disponibles:
- **User** - Utilisateurs (email, mot de passe hashé)
- **Game** - Jeux vidéo
- **Console** - Consoles de jeu
- **Favorite** - Jeux favoris des utilisateurs
- **RevokedTokens** - Tokens révoqués (logout)

### Configuration
La connexion se fait via la variable `MONGODB_URI` dans `.env`

---

## 📝 Notes Importantes

- Les mots de passe sont hashés avec **bcrypt**
- Les tokens JWT expirent après une période définie
- CORS est activé pour accepter les requêtes du frontend
- Mode ES6 modules activé (`"type": "module"` dans package.json)

---

## 🔗 Intégration Frontend

Le frontend communique avec le backend sur `http://localhost:4000`

Variables d'environnement frontend (`.env`):
```env
VITE_API_URL=http://localhost:4000/api
```

---

## 📚 Ressources Additionnelles

- API externe pour images/screenshots : https://www.igdb.com/api
- Documentation MongoDB : https://docs.mongodb.com
- Documentation Express : https://expressjs.com
- Documentation JWT : https://jwt.io

