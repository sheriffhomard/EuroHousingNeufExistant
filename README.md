# 🇪🇺 Euro Housing Data — Observatoire Économique Européen

> **Application Web Progressive (PWA)** de référence pour l'exploration, la modélisation et la comparaison dynamique des **prix immobiliers (House Price Index — HPI)** et de l'**inflation (Harmonised Index of Consumer Prices — HICP)** dans les pays européens, alimentée par les données officielles d'**Eurostat**.

![Version](https://img.shields.io/badge/version-v1.2.4-blue?style=flat-square)
![Eurostat](https://img.shields.io/badge/Eurostat-REST_1.0-emerald?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-Offline_First-purple?style=flat-square)
![License](https://img.shields.io/badge/license-Apache_2.0-orange?style=flat-square)

---

## 📸 Aperçu de l'Interface

![Tableau de bord Euro Housing Data](/screenshot.jpg)

---

## 🏛️ Logo & Identité Visuelle

L'emblème officiel d'**Euro Housing Data** associe trois symboles forts de l'économie européenne :
1. **L'arche aux étoiles dorées** : Inspirée du drapeau européen, elle symbolise l'harmonisation statistique entre les États membres.
2. **Le fronton architectural stylisé** : Représente la stabilité et la structure du marché résidentiel (logements neufs et existants).
3. **La courbe de tendance ascendante dorée** : Incite à l'observation dynamique du pouvoir d'achat patrimonial réel déflaté de l'inflation.

---

## 🚀 Fonctionnalités Clés

### 1. 🍔 Menu Hamburger Catégorisé
Un tiroir de navigation ergonomique regroupe les fonctionnalités de l'application en 4 catégories distinctes :
- **📊 Analytique & Marchés** :
  - *Tableau de bord principal* : KPIs majeurs, double échelle et courbe interactive Recharts.
  - *Comparateur multi-pays* : Superposition simultanée de France, Allemagne, Espagne, Italie, etc.
  - *Vue « Depuis 2010 »* : Jauges comparatives horizontales (Prix nominaux vs Inflation vs Prix réels).
  - *Logements Neufs vs Existants* : Analyse structurelle de l'écart `DW_NEW` vs `DW_EXST`.
- **📁 Données & Exploration** :
  - *Table de données complète* : Recherche textuelle, tri par colonne, pagination, export direct **CSV** et **JSON**.
- **📖 Observatoire & Méthodologie** :
  - *Documentation & Formules* : Explication mathématique de la déflation et de l'agrégation.
  - *Visite guidée interactive* : Onboarding pas-à-pas accessible à tout moment.
  - *Lexique économique* : Définitions claires des concepts statistiques.
- **⚙️ Système & Paramètres** :
  - Panneau complet de diagnostic et de gestion du cycle de vie applicatif.

---

### 2. ⚙️ Menu de Paramètres Système & Mises à Jour

Le panneau de configuration système intégré permet de :
- 📅 **Consulter la date de sortie** de la version (`15 Octobre 2026 • v1.2.4`).
- 🕒 **Visualiser la date et l'heure de la dernière vérification** de mise à jour.
- 🔄 **Bouton « Vérifier les mises à jour »** : Interroge les serveurs Eurostat et le Service Worker pour détecter de nouvelles données ou un nouveau bundle de code.
- ⚡ **Bouton « Forcer la mise à jour »** : Purge les caches dynamiques, force l'activation du nouveau worker (`skipWaiting`) et recharge l'application instantanément.
- 💾 **Statut du stockage local & PWA** : Diagnostic en temps réel de l'état du Service Worker et estimation du volume utilisé en mémoire cache.
- 🗑️ **Bouton de purge du cache** : Réinitialisation propre d'IndexedDB et de localStorage.

---

### 3. 🤖 Système de Mises à Jour Automatiques en Arrière-Plan

L'application intègre un moteur autonome de mise à jour silencieuse :
- **Veille périodique programmable** : Vérification automatique toutes les 15 minutes, 30 minutes, 1 heure ou 6 heures (configurable dans les paramètres).
- **Détection proactive** : Lorsque de nouveaux trimestres sont diffusés par Eurostat ou qu'un nouveau code PWA est publié, le Service Worker le télécharge discrètement en arrière-plan.
- **Notification non-intrusive** : Une bannière élégante prévient l'utilisateur dès qu'une version est prête à être activée, avec un bouton « Activer maintenant ».

---

### 4. ☀️ Thème Clair & Confort Visuel

En complément du mode sombre par défaut, l'application dispose d'un **véritable Thème Clair** :
- Contrastes nets respectant les normes d'accessibilité **WCAG AA**.
- Nuances feutrées ardoise (`slate-50`, `white`) et accents bleus institutionnels.
- Bascule instantanée entre **Clair**, **Sombre** et **Système** via la barre d'en-tête ou le menu Hamburger.

---

### 5. 🧭 Onboarding & Visite Guidée

Un parcours d'accueil interactif en 4 étapes accueille les nouveaux utilisateurs :
1. **Bienvenue** : Présentation générale de l'observatoire.
2. **Double indice HPI & HICP** : Explication des sources statistiques Eurostat.
3. **Indice Réel & Rebasification** : Décryptage de la déflation de l'inflation et des bases mobiles (2015=100, 2010=100).
4. **PWA & Hors-ligne** : Conseils d'installation et fonctionnement sans connexion.

---

### 6. 💡 Aide Contextuelle & Infobulles

Des infobulles intelligentes interactives `(i)` sont disposées à côté de chaque terme technique et indicateur économique :
- **HPI** (House Price Index) : Définition du champ couvert.
- **HICP** (Harmonised Index of Consumer Prices) : Méthode de calcul de l'inflation.
- **Real HPI** : Formule de calcul $\frac{\text{HPI}}{\text{HICP}} \times 100$.
- **YoY & QoQ** : Explication des variations annuelles et trimestrielles.
- **Neuf vs Existant** : Facteurs de divergence de coût.
- Accessible aussi bien au survol à la souris qu'au toucher sur mobile.

---

## 🏗️ Architecture Technique

```text
Eurostat Dissemination REST API 1.0
     │
     ├── prc_hpi_q (House Price Index, trimestriel)
     └── prc_hicp_midx (All-items HICP, mensuel)
     │
     ▼
Data Access & Normalization Layer (TypeScript)
     │
     ├── JSON-stat 2.0 Multi-dimensional Reader & Strides Calculator
     ├── Statistical Aggregation (Mensuel → Moyenne Trimestrielle HICP)
     ├── Rebasification Dynamique (2015=100, 2010=100, Début=100)
     └── Calcul du HPI Réel : (HPI / HICP) × 100
     │
     ▼
Auto-Update & Persistent Caching (PWA Offline First)
     │
     ├── Auto-Update Background Service (Vérification périodique)
     ├── Workbox Service Worker (Stale-While-Revalidate)
     ├── Base Locale Structurée (IndexedDB & LocalStorage)
     └── Instantané Officiel de Secours (Snapshot Eurostat)
     │
     ▼
React 19 + Tailwind CSS + Recharts UI
     │
     ├── Menu Hamburger catégorisé (Drawer latéral)
     ├── Modal Paramètres Système & Diagnostic PWA
     ├── Onboarding interactif & Infobulles contextuelles
     ├── Tableau de bord (KPIs, Graphique interactif, zoom, brush)
     ├── Comparateur multi-pays synchronisé
     ├── Vue "Depuis 2010" (Gauges cumulatives)
     ├── Comparaison Neuf vs Existant
     ├── Table de données complète (Tri, filtres, export CSV & JSON)
     └── Méthodologie & Sources documentées
```

---

## 🧮 Méthodologie Statistique & Formules

### A. Calcul du HPI Réel (Inflation-Adjusted)
Les deux indices étant fournis sur la même année de base officielle (**2015 = 100**) par Eurostat :
$$\text{Real HPI}(t) = \left( \frac{\text{HPI}_{\text{nominal}}(t)}{\text{HICP}(t)} \right) \times 100$$
- Un indice supérieur à 100 indique un gain de pouvoir d'achat patrimonial net supérieur à l'inflation depuis 2015.

### B. Agrégation Trimestrielle de l'Inflation
Le HICP étant mensuel et le HPI trimestriel, chaque trimestre est agrégé selon la méthode standard de la BCE et d'Eurostat (moyenne arithmétique non pondérée) :
$$\text{HICP}_{Q1} = \frac{\text{Janvier} + \text{Février} + \text{Mars}}{3}$$

### C. Rebasification Dynamique
L'utilisateur peut basculer à la volée entre :
- `2015 = 100` (Base officielle Eurostat)
- `2010-Q1 = 100` (Base départ 2010)
- `Début de période = 100` (Base mobile)

$$\text{Indice}_{\text{rebasé}}(t) = \left( \frac{\text{Indice}(t)}{\text{Indice}(t_{\text{ref}})} \right) \times 100$$

---

## 💻 Installation & Démarrage

```bash
# 1. Installation des dépendances
npm install

# 2. Lancement du serveur de développement (port 3000)
npm run dev

# 3. Exécution de la suite de tests unitaires (Vitest)
npm run test

# 4. Compilation de production
npm run build

# 5. Prévisualisation locale du bundle de production
npm run preview
```

---

## 📂 Organisation des Fichiers

```text
src/
├── types/
│   └── eurostat.ts            # Définitions TypeScript (JSON-stat, séries, KPIs)
├── data/
│   └── countries.ts           # Métadonnées des pays européens (drapeaux, UE, Eurozone)
├── services/
│   ├── autoUpdateService.ts   # Moteur de mises à jour automatiques en arrière-plan
│   ├── jsonstat.ts            # Parseur JSON-stat 2.0 multi-dimensionnel avec calcul de foulées (strides)
│   ├── aggregation.ts         # Agrégation statistique mensuel -> trimestriel HICP
│   ├── calculations.ts        # HPI réel, variations QoQ, YoY, cumulée, rebasification
│   ├── cache.ts               # Couche de cache hybride IndexedDB + LocalStorage
│   ├── eurostatApi.ts         # Client API Eurostat REST 1.0 avec tolérance aux pannes
│   ├── snapshotData.ts        # Instantané authentique des données Eurostat pré-téléchargées
│   └── __tests__/
│       └── eurostat.test.ts   # Tests unitaires Vitest (calculs, parsing, agrégation, rebasification)
├── hooks/
│   ├── useEurostatData.ts     # Orchestrateur d'état des données et sélections
│   ├── useAutoUpdate.ts       # Hook de statut des mises à jour automatiques
│   ├── usePWAInstall.ts       # Détection d'installation et événements beforeinstallprompt
│   └── useOnlineStatus.ts     # Détection de connectivité réseau
├── components/
│   ├── Common/
│   │   ├── AppLogo.tsx        # Logo vectoriel officiel de l'application
│   │   ├── ContextualTooltip.tsx # Infobulles contextuelles interactives
│   │   └── HelpModal.tsx      # Modal de lexique économique complet
│   ├── Layout/
│   │   ├── Navbar.tsx         # Barre de navigation avec bouton Hamburger & accès rapide
│   │   ├── HamburgerMenu.tsx  # Menu Hamburger latéral structuré par catégorie
│   │   ├── OfflineIndicator.tsx # Toast d'information hors ligne
│   │   └── PWAInstallButton.tsx # Composant d'installation PWA universel
│   ├── Settings/
│   │   └── SystemSettingsModal.tsx # Panneau des paramètres système et mise à jour
│   ├── Onboarding/
│   │   └── OnboardingModal.tsx # Visite guidée pas-à-pas
│   ├── Dashboard/
│   │   ├── ControlsBar.tsx    # Sélecteurs pays, périodes, base, indicateur avec infobulles
│   │   └── KpiGrid.tsx        # Cartes métriques HPI, HICP, HPI réel, écart neuf/existant
│   ├── Charts/
│   │   └── MainChart.tsx      # Graphique interactif Recharts (zoom, brush, tooltip, export CSV)
│   ├── CountryComparison/
│   │   └── CountryComparisonView.tsx # Comparateur multi-pays simultané
│   ├── Since2010View/
│   │   └── Since2010View.tsx  # Vue comparative "Depuis 2010" avec jauges visuelles
│   ├── DwellingsView/
│   │   └── DwellingsView.tsx  # Analyse spécifique logements neufs vs existants
│   ├── DataTable/
│   │   └── DataTableView.tsx  # Table dynamique paginée, filtrable, triable avec export CSV/JSON
│   └── Methodology/
│       └── MethodologyView.tsx# Documentation méthodologique, équations et métadonnées
├── App.tsx                    # Composant racine orchestrant les vues et modals
├── main.tsx                   # Point d'entrée React 19
└── index.css                  # Tailwind CSS
```

---

## ⚖️ Licence & Droits

- **Données statistiques** : © Eurostat (Politique de libre réutilisation des données de la Commission européenne — Directive européenne sur les données ouvertes).
- **Code source** : Sous licence Apache 2.0.
