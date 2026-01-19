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

## 📄 Licence

MIT

