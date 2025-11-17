# SEIMEN 2026 - Plateforme Web Officielle

Plateforme web pour le Salon & Exposition Internationale des Mines et de l'Énergie du Niger (SEIMEN 2026)

## 🎯 Description

Site web officiel pour la première édition du SEIMEN qui se tiendra du **20 au 23 avril 2026** au Centre International de Conférences Mahatma Gandhi à Niamey, Niger.

## 🎨 Design

### Palette de Couleurs

- **Vert Principal** (#2D9B4E) - Boutons, liens, accents
- **Vert Foncé** (#1B7535) - Navigation, headers
- **Or/Doré** (#F6B93B) - Accents premium, CTA
- **Gris Foncé** (#1a1a1a) - Footer, textes sombres
- **Gris Clair** (#f8f9fa) - Fonds, sections alternées

## 🚀 Technologies Utilisées

- **Next.js 16.0.3** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Bootstrap 5** - Framework CSS
- **React-Bootstrap** - Composants Bootstrap pour React
- **Bootstrap Icons** - Bibliothèque d'icônes

## 📁 Structure du Projet

```
seimen-platform/
├── app/
│   ├── globals.css          # Styles globaux et thème
│   ├── layout.tsx           # Layout principal avec Header/Footer
│   ├── page.tsx            # Page d'accueil
│   ├── presentation/       # Présentation de l'événement
│   ├── categories/         # Catégories de participants
│   ├── catalogue/          # Catalogue interactif
│   ├── faq/               # Questions fréquentes
│   ├── contact/           # Page de contact
│   └── inscription/       # Formulaire d'inscription
├── components/
│   ├── Header.tsx         # Navigation principale
│   └── Footer.tsx         # Pied de page
└── public/                # Assets statiques
```

## 📄 Pages Créées

### Pages Principales
1. **Accueil** (/) - Vue d'ensemble du SEIMEN 2026
2. **Présentation** (/presentation) - Détails complets de l'événement
3. **Catégories** (/categories) - Types de participants et tarifs
4. **Catalogue** (/catalogue) - Parrains, Sponsors, Exposants
5. **FAQ** (/faq) - Questions fréquentes
6. **Contact** (/contact) - Formulaire de contact
7. **Inscription** (/inscription) - Formulaire d'inscription en ligne

### Catégories de Participants

- **Délégués Généraux** - 1.000.000 FCFA HT
- **Sociétés Minières** - 600.000 FCFA HT
- **Sociétés Émergentes** - 600.000 FCFA HT
- **Investisseurs** - Gratuit (sur approbation)
- **Acheteurs en Aval** - Gratuit (sur approbation)
- **Jeunes Professionnels** - Gratuit (sur validation)
- **Presse** - Gratuit (sur accréditation)

## 🛠️ Installation et Lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet
cd seimen-platform

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Autres Commandes

```bash
# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

## ✨ Fonctionnalités Principales

### 🎨 Design & UX
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Animations fluides et transitions
- ✅ Cartes interactives avec effets hover
- ✅ Navigation intuitive et accessible
- ✅ Palette de couleurs cohérente

### 📱 Navigation
- ✅ Header avec menu déroulant
- ✅ Navigation sticky
- ✅ Menu mobile responsive
- ✅ Footer informatif avec liens

### 📝 Contenu
- ✅ Présentation complète de l'événement
- ✅ Détails des catégories de participants
- ✅ Formulaire d'inscription complet
- ✅ Système de FAQ avec accordéons
- ✅ Formulaire de contact
- ✅ Informations pratiques

### 🎯 Composants Clés
- Stats avec animations
- Cards avec hover effects
- Badges de catégories
- Formulaires stylisés
- Sections hero attractives
- Boutons CTA premium

## 📧 Contact

- **Email**: contact@seimen2026.ne
- **Téléphone**: +227 XX XX XX XX
- **Adresse**: Centre Mahatma Gandhi, Niamey, Niger

## 🎯 Contacts Spécialisés

- **Investisseurs**: investisseurs@seimen.com
- **Acheteurs**: acheteurs@seimen.com
- **Gouvernements**: government@seimen.com
- **Presse**: presse@seimen.com

## 📅 Dates Importantes

- **Événement**: 20-23 Avril 2026
- **Lieu**: Centre International de Conférences Mahatma Gandhi, Niamey

## 🔄 Développement Futur

### Fonctionnalités à Ajouter
- [ ] Système de paiement en ligne
- [ ] Espace membre/dashboard
- [ ] Catalogue exposants dynamique avec recherche
- [ ] Agenda interactif des conférences
- [ ] Système de réservation de stands
- [ ] Application mobile companion
- [ ] Plateforme de networking B2B
- [ ] Streaming des conférences
- [ ] Traduction multilingue (FR/EN/AR)

### Améliorations Techniques
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Analytics integration
- [ ] Backend API
- [ ] Base de données
- [ ] Système d'authentification
- [ ] Gestion des utilisateurs
- [ ] Email notifications

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (< 576px)
- 📱 Tablette (576px - 992px)
- 💻 Desktop (> 992px)

## 🎨 Composants Bootstrap Utilisés

- Container, Row, Col (Layout)
- Button (CTA et actions)
- Card (Contenu structuré)
- Form (Formulaires)
- Navbar (Navigation)
- Accordion (FAQ)
- ListGroup (Listes)
- Badge (Tags et labels)

## 📖 Documentation

Pour plus d'informations sur les technologies utilisées :
- [Next.js Documentation](https://nextjs.org/docs)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## 👨‍💻 Développement

Ce projet a été créé avec create-next-app et utilise :
- App Router de Next.js 16
- TypeScript pour le typage
- Bootstrap pour le styling
- Components modulaires et réutilisables

## 🌟 Thème Central

> « Ressources naturelles et transition énergétique : catalyser l'innovation, les investissements et le développement durable en Afrique »

---

**SEIMEN 2026** - Première Édition | Niamey, Niger | 20-23 Avril 2026
