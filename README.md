# IturiStay - Application de Gestion des Réservations d'Hôtels

## Table des Matières

1. [Présentation du Projet](#présentation-du-projet)
2. [Technologies Utilisées](#technologies-utilisées)
3. [Structure du Projet](#structure-du-projet)
4. [Architecture de l'Application](#architecture-de-lapplication)
5. [Modules et Fonctionnalités](#modules-et-fonctionnalités)
6. [Guide de Développement](#guide-de-développement)
7. [Système de Design](#système-de-design)
8. [Données et Types](#données-et-types)
9. [Intégration Backend](#intégration-backend)
10. [Déploiement](#déploiement)

---

## Présentation du Projet

**IturiStay** est une plateforme centralisée de gestion des réservations de chambres d'hôtels pour la province d'Ituri en République Démocratique du Congo.

### Objectifs Principaux

- Permettre aux hôtels de s'inscrire et gérer leurs établissements
- Offrir aux clients une interface de recherche et réservation en ligne
- Supporter les paiements mobiles (Orange Money, M-Pesa, Airtel Money)
- Fournir des tableaux de bord pour la gestion des réservations

### Acteurs du Système

| Acteur | Description |
|--------|-------------|
| **Client** | Recherche des hôtels, réserve des chambres, paie un acompte |
| **Hôtel** | Gère son profil, ses chambres et ses réservations |
| **Administrateur** | Supervise la plateforme (à implémenter) |

---

## Technologies Utilisées

### Frontend

| Technologie | Version | Description |
|-------------|---------|-------------|
| **Next.js** | 15+ | Framework React avec App Router |
| **React** | 19+ | Bibliothèque UI |
| **TypeScript** | 5+ | Typage statique |
| **Tailwind CSS** | 4.0 | Framework CSS utilitaire |
| **shadcn/ui** | Latest | Composants UI accessibles |

### Bibliothèques Additionnelles

| Bibliothèque | Usage |
|--------------|-------|
| `lucide-react` | Icônes vectorielles |
| `date-fns` | Manipulation des dates |
| `recharts` | Graphiques et visualisations |
| `class-variance-authority` | Variantes de composants |
| `clsx` / `tailwind-merge` | Gestion des classes CSS |

### Polices

- **Playfair Display** - Titres et en-têtes (élégance)
- **Inter** - Corps de texte (lisibilité)

---

## Structure du Projet

```
/
├── app/                          # Routes et pages (App Router)
│   ├── page.tsx                  # Page d'accueil (Landing)
│   ├── layout.tsx                # Layout racine
│   ├── globals.css               # Styles globaux et tokens
│   │
│   ├── auth/                     # Module Authentification
│   │   ├── login/
│   │   │   └── page.tsx          # Page de connexion
│   │   └── register/
│   │       └── page.tsx          # Page d'inscription
│   │
│   ├── hotels/                   # Module Hôtels (Public)
│   │   ├── page.tsx              # Liste des hôtels
│   │   └── [id]/
│   │       └── page.tsx          # Détail d'un hôtel
│   │
│   └── dashboard/                # Tableaux de bord
│       ├── client/               # Dashboard Client
│       │   ├── layout.tsx        # Layout avec sidebar
│       │   ├── page.tsx          # Accueil dashboard
│       │   └── reservations/
│       │       └── page.tsx      # Gestion réservations
│       │
│       └── hotel/                # Dashboard Hôtel
│           ├── layout.tsx        # Layout avec sidebar
│           ├── page.tsx          # Accueil dashboard
│           ├── rooms/
│           │   └── page.tsx      # Gestion des chambres
│           └── reservations/
│               └── page.tsx      # Gestion réservations
│
├── components/                   # Composants réutilisables
│   ├── header.tsx                # Navigation principale
│   ├── footer.tsx                # Pied de page
│   │
│   ├── landing/                  # Composants Landing Page
│   │   ├── hero-section.tsx      # Section héros
│   │   ├── hotels-section.tsx    # Grille des hôtels
│   │   ├── features-section.tsx  # Fonctionnalités
│   │   └── cta-section.tsx       # Appel à l'action
│   │
│   ├── dashboard/                # Composants Dashboard
│   │   ├── sidebar.tsx           # Sidebar navigation
│   │   └── dashboard-header.tsx  # En-tête dashboard
│   │
│   └── ui/                       # Composants shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       ├── tabs.tsx
│       └── ... (autres composants)
│
├── hooks/                        # Hooks personnalisés
│   ├── use-mobile.ts             # Détection mobile
│   └── use-toast.ts              # Notifications toast
│
├── lib/                          # Utilitaires
│   └── utils.ts                  # Fonction cn() pour classes
│
└── public/                       # Assets statiques
    └── images/                   # Images (à ajouter)
```

---

## Architecture de l'Application

### Flux de Navigation

```
┌─────────────────────────────────────────────────────────────┐
│                      LANDING PAGE (/)                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │   Héros  │  │  Hôtels  │  │ Features │  │   CTA    │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
└─────────────────────────┬───────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
    ┌──────────┐   ┌──────────┐   ┌──────────┐
    │  Login   │   │ Register │   │  Hotels  │
    │ /auth/   │   │ /auth/   │   │ /hotels  │
    │  login   │   │ register │   │          │
    └────┬─────┘   └────┬─────┘   └────┬─────┘
         │              │              │
         │              │              ▼
         │              │        ┌──────────┐
         │              │        │  Hotel   │
         │              │        │ /hotels/ │
         │              │        │   [id]   │
         │              │        └──────────┘
         │              │
         ▼              ▼
┌─────────────────────────────────────────┐
│            DASHBOARDS                    │
│  ┌─────────────────┐ ┌─────────────────┐│
│  │     CLIENT      │ │      HOTEL      ││
│  │  /dashboard/    │ │  /dashboard/    ││
│  │    client/      │ │     hotel/      ││
│  │                 │ │                 ││
│  │ • Accueil       │ │ • Accueil       ││
│  │ • Réservations  │ │ • Chambres      ││
│  │ • Favoris*      │ │ • Réservations  ││
│  │ • Profil*       │ │ • Abonnement*   ││
│  └─────────────────┘ └─────────────────┘│
└─────────────────────────────────────────┘
                    * À implémenter
```

### Modules Principaux

#### 1. Module Landing (`/app/page.tsx`)

Point d'entrée de l'application avec:
- Recherche d'hôtels (ville, dates, voyageurs)
- Présentation des hôtels populaires
- Fonctionnalités de la plateforme
- Sections pour clients et hôteliers

#### 2. Module Authentification (`/app/auth/`)

| Page | Route | Description |
|------|-------|-------------|
| Login | `/auth/login` | Connexion client/hôtel avec onglets |
| Register | `/auth/register` | Inscription avec choix de rôle et abonnement |

**Logique d'inscription hôtel:**
```typescript
// Types d'abonnement
const subscriptionPlans = {
  monthly: { price: 25, duration: "mois" },
  quarterly: { price: 60, duration: "trimestre" },
  yearly: { price: 200, duration: "an" }
}
```

#### 3. Module Hôtels (`/app/hotels/`)

| Page | Route | Description |
|------|-------|-------------|
| Liste | `/hotels` | Recherche avec filtres |
| Détail | `/hotels/[id]` | Informations et chambres |

**Filtres disponibles:**
- Ville (Bunia, Mahagi, Aru, Irumu, Mambasa)
- Fourchette de prix
- Équipements (WiFi, Parking, Restaurant, etc.)
- Type de chambre

#### 4. Dashboard Client (`/app/dashboard/client/`)

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/dashboard/client` | Statistiques et réservations récentes |
| Réservations | `/dashboard/client/reservations` | Historique complet |

**Statistiques affichées:**
- Nombre de réservations
- Hôtels visités
- Nuits passées

#### 5. Dashboard Hôtel (`/app/dashboard/hotel/`)

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/dashboard/hotel` | Vue d'ensemble |
| Chambres | `/dashboard/hotel/rooms` | Gestion des chambres |
| Réservations | `/dashboard/hotel/reservations` | Gestion des demandes |

**Fonctionnalités:**
- Ajout/modification/suppression de chambres
- Confirmation/annulation de réservations
- Statistiques d'occupation

---

## Modules et Fonctionnalités

### Statuts de Réservation

```typescript
type ReservationStatus = 
  | "pending"      // En attente de confirmation
  | "confirmed"    // Confirmée par l'hôtel
  | "cancelled"    // Annulée
  | "completed"    // Séjour terminé
```

### Statuts de Chambre

```typescript
type RoomStatus = 
  | "available"    // Disponible
  | "occupied"     // Occupée
  | "maintenance"  // En maintenance
```

### Types de Chambre

```typescript
type RoomType = 
  | "simple"       // Chambre simple
  | "double"       // Chambre double
  | "suite"        // Suite
  | "deluxe"       // Deluxe
  | "familiale"    // Familiale
```

### Équipements

```typescript
const amenities = [
  "wifi",          // WiFi gratuit
  "parking",       // Parking
  "restaurant",    // Restaurant
  "pool",          // Piscine
  "spa",           // Spa
  "gym",           // Salle de sport
  "ac",            // Climatisation
  "tv",            // Télévision
  "minibar",       // Minibar
  "room-service"   // Room Service
]
```

---

## Guide de Développement

### Installation

```bash
# Cloner le projet
git clone <repository-url>
cd ituristay

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

### Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Serveur de développement |
| `pnpm build` | Build de production |
| `pnpm start` | Serveur de production |
| `pnpm lint` | Vérification ESLint |

### Ajouter une Nouvelle Page

1. Créer le fichier dans `/app/[route]/page.tsx`
2. Exporter un composant React par défaut
3. Ajouter la route dans la navigation si nécessaire

```typescript
// Exemple: /app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-serif font-bold">Contact</h1>
      {/* Contenu */}
    </main>
  )
}
```

### Ajouter un Composant

1. Créer dans `/components/[nom].tsx`
2. Utiliser TypeScript pour les props
3. Exporter le composant

```typescript
// Exemple: /components/hotel-card.tsx
interface HotelCardProps {
  name: string
  location: string
  price: number
  image: string
}

export function HotelCard({ name, location, price, image }: HotelCardProps) {
  return (
    <Card className="overflow-hidden">
      {/* Contenu */}
    </Card>
  )
}
```

### Utiliser les Composants UI

```typescript
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Utilisation
<Button variant="default" size="lg" className="rounded-full">
  Réserver
</Button>
```

---

## Système de Design

### Palette de Couleurs

| Token CSS | Usage | Valeur |
|-----------|-------|--------|
| `--primary` | Boutons, liens, accents | Vert forêt |
| `--accent` | Highlights, badges | Or/Ambre |
| `--background` | Fond de page | Crème clair |
| `--foreground` | Texte principal | Brun foncé |
| `--muted` | Fonds secondaires | Beige |
| `--destructive` | Erreurs, suppressions | Rouge |

### Utilisation des Couleurs

```tsx
// Classes Tailwind avec tokens
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Action principale
  </button>
  <span className="text-accent">Mise en avant</span>
  <p className="text-muted-foreground">Texte secondaire</p>
</div>
```

### Typographie

```tsx
// Titres (Playfair Display)
<h1 className="font-serif text-4xl font-bold">Titre Principal</h1>

// Corps de texte (Inter)
<p className="font-sans text-base">Paragraphe standard</p>

// Recommandations
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
<h2 className="text-2xl md:text-3xl font-serif font-semibold">
<h3 className="text-xl font-serif font-medium">
<p className="text-base leading-relaxed">
```

### Boutons Arrondis

```tsx
// Tous les boutons utilisent des coins arrondis
<Button className="rounded-full">Bouton pill</Button>
<Button className="rounded-xl">Bouton arrondi</Button>

// Variantes
<Button variant="default">Principal</Button>
<Button variant="outline">Secondaire</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Danger</Button>
```

### Espacements

```tsx
// Utiliser l'échelle Tailwind
<div className="p-4 md:p-6 lg:p-8">        // Padding responsive
<div className="space-y-4">                 // Espacement vertical
<div className="gap-4 md:gap-6">            // Gap pour flex/grid
<section className="py-16 md:py-24">        // Sections
```

### Responsive Design

```tsx
// Mobile-first avec breakpoints
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4 
  gap-4 md:gap-6
">
```

| Breakpoint | Taille | Usage |
|------------|--------|-------|
| `sm` | 640px | Téléphones paysage |
| `md` | 768px | Tablettes |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Grands écrans |

---

## Données et Types

### Interfaces TypeScript à Implémenter

```typescript
// types/index.ts (à créer)

export interface User {
  id: string
  email: string
  name: string
  phone: string
  role: "client" | "hotel" | "admin"
  createdAt: Date
}

export interface Hotel {
  id: string
  userId: string
  name: string
  description: string
  address: string
  city: string
  phone: string
  email: string
  images: string[]
  amenities: string[]
  rating: number
  subscriptionStatus: "active" | "expired" | "pending"
  subscriptionPlan: "monthly" | "quarterly" | "yearly"
  subscriptionEndDate: Date
  createdAt: Date
}

export interface Room {
  id: string
  hotelId: string
  number: string
  type: "simple" | "double" | "suite" | "deluxe" | "familiale"
  description: string
  price: number
  capacity: number
  amenities: string[]
  images: string[]
  status: "available" | "occupied" | "maintenance"
}

export interface Reservation {
  id: string
  clientId: string
  hotelId: string
  roomId: string
  checkIn: Date
  checkOut: Date
  guests: number
  totalPrice: number
  depositAmount: number
  depositPaid: boolean
  status: "pending" | "confirmed" | "cancelled" | "completed"
  paymentMethod: "orange_money" | "mpesa" | "airtel_money"
  createdAt: Date
}

export interface Subscription {
  id: string
  hotelId: string
  plan: "monthly" | "quarterly" | "yearly"
  price: number
  startDate: Date
  endDate: Date
  status: "active" | "expired" | "cancelled"
  paymentMethod: "orange_money" | "mpesa" | "airtel_money"
}
```

### Données Mock Actuelles

Les données sont actuellement en dur dans les composants. Elles devront être remplacées par des appels API.

**Localisation des données mock:**

| Fichier | Données |
|---------|---------|
| `/app/hotels/page.tsx` | Liste des hôtels |
| `/app/hotels/[id]/page.tsx` | Détails hôtel et chambres |
| `/app/dashboard/client/page.tsx` | Réservations client |
| `/app/dashboard/hotel/page.tsx` | Statistiques hôtel |
| `/app/dashboard/hotel/rooms/page.tsx` | Chambres de l'hôtel |
| `/components/landing/hotels-section.tsx` | Hôtels populaires |

---

## Intégration Backend

### API Routes à Implémenter

Créer dans `/app/api/`:

```
/app/api/
├── auth/
│   ├── login/route.ts
│   ├── register/route.ts
│   └── logout/route.ts
│
├── hotels/
│   ├── route.ts              # GET (liste), POST (créer)
│   └── [id]/
│       ├── route.ts          # GET, PUT, DELETE
│       └── rooms/
│           └── route.ts      # GET, POST
│
├── rooms/
│   └── [id]/
│       └── route.ts          # GET, PUT, DELETE
│
├── reservations/
│   ├── route.ts              # GET (liste), POST (créer)
│   └── [id]/
│       └── route.ts          # GET, PUT (confirm/cancel)
│
├── subscriptions/
│   └── route.ts              # GET, POST
│
└── payments/
    └── webhook/
        └── route.ts          # Webhooks paiement mobile
```

### Exemple d'API Route

```typescript
// /app/api/hotels/route.ts
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  
  // TODO: Remplacer par requête DB
  const hotels = await db.hotel.findMany({
    where: city ? { city } : undefined,
    include: { rooms: true }
  })
  
  return NextResponse.json(hotels)
}

export async function POST(request: Request) {
  const body = await request.json()
  
  // TODO: Validation et création
  const hotel = await db.hotel.create({ data: body })
  
  return NextResponse.json(hotel, { status: 201 })
}
```

### Base de Données Recommandée

**Option 1: Supabase (Recommandé)**
- PostgreSQL hébergé
- Authentification intégrée
- Row Level Security
- API REST automatique

**Option 2: Neon**
- PostgreSQL serverless
- Scaling automatique

**Option 3: PlanetScale**
- MySQL serverless
- Branching de base de données

### Schéma Prisma (Exemple)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String        @id @default(cuid())
  email        String        @unique
  password     String
  name         String
  phone        String?
  role         Role          @default(CLIENT)
  hotel        Hotel?
  reservations Reservation[]
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}

enum Role {
  CLIENT
  HOTEL
  ADMIN
}

model Hotel {
  id                 String        @id @default(cuid())
  userId             String        @unique
  user               User          @relation(fields: [userId], references: [id])
  name               String
  description        String?
  address            String
  city               String
  phone              String
  email              String
  images             String[]
  amenities          String[]
  rating             Float         @default(0)
  rooms              Room[]
  reservations       Reservation[]
  subscription       Subscription?
  createdAt          DateTime      @default(now())
  updatedAt          DateTime      @updatedAt
}

model Room {
  id           String        @id @default(cuid())
  hotelId      String
  hotel        Hotel         @relation(fields: [hotelId], references: [id])
  number       String
  type         RoomType
  description  String?
  price        Float
  capacity     Int
  amenities    String[]
  images       String[]
  status       RoomStatus    @default(AVAILABLE)
  reservations Reservation[]
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  @@unique([hotelId, number])
}

enum RoomType {
  SIMPLE
  DOUBLE
  SUITE
  DELUXE
  FAMILIALE
}

enum RoomStatus {
  AVAILABLE
  OCCUPIED
  MAINTENANCE
}

model Reservation {
  id            String            @id @default(cuid())
  clientId      String
  client        User              @relation(fields: [clientId], references: [id])
  hotelId       String
  hotel         Hotel             @relation(fields: [hotelId], references: [id])
  roomId        String
  room          Room              @relation(fields: [roomId], references: [id])
  checkIn       DateTime
  checkOut      DateTime
  guests        Int
  totalPrice    Float
  depositAmount Float
  depositPaid   Boolean           @default(false)
  status        ReservationStatus @default(PENDING)
  paymentMethod PaymentMethod?
  createdAt     DateTime          @default(now())
  updatedAt     DateTime          @updatedAt
}

enum ReservationStatus {
  PENDING
  CONFIRMED
  CANCELLED
  COMPLETED
}

model Subscription {
  id            String             @id @default(cuid())
  hotelId       String             @unique
  hotel         Hotel              @relation(fields: [hotelId], references: [id])
  plan          SubscriptionPlan
  price         Float
  startDate     DateTime
  endDate       DateTime
  status        SubscriptionStatus @default(ACTIVE)
  paymentMethod PaymentMethod
  createdAt     DateTime           @default(now())
  updatedAt     DateTime           @updatedAt
}

enum SubscriptionPlan {
  MONTHLY
  QUARTERLY
  YEARLY
}

enum SubscriptionStatus {
  ACTIVE
  EXPIRED
  CANCELLED
}

enum PaymentMethod {
  ORANGE_MONEY
  MPESA
  AIRTEL_MONEY
}
```

### Intégration Paiement Mobile

**Providers à intégrer:**
- Orange Money API
- M-Pesa (Vodacom)
- Airtel Money

```typescript
// lib/payments/index.ts (à créer)

interface PaymentProvider {
  initiatePayment(amount: number, phone: string): Promise<PaymentResult>
  checkStatus(transactionId: string): Promise<PaymentStatus>
}

// Implémenter pour chaque provider
```

---

## Déploiement

### Variables d'Environnement

Créer un fichier `.env.local`:

```env
# Base de données
DATABASE_URL="postgresql://..."

# Authentification
NEXTAUTH_SECRET="votre-secret-ici"
NEXTAUTH_URL="http://localhost:3000"

# Paiements (à configurer)
ORANGE_MONEY_API_KEY=""
ORANGE_MONEY_SECRET=""
MPESA_API_KEY=""
MPESA_SECRET=""
AIRTEL_MONEY_API_KEY=""
AIRTEL_MONEY_SECRET=""

# Optionnel
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Déploiement sur Vercel

1. Connecter le repository GitHub
2. Configurer les variables d'environnement
3. Déployer

```bash
# Via CLI
vercel --prod
```

### Checklist Pré-Production

- [ ] Configurer la base de données de production
- [ ] Ajouter les variables d'environnement
- [ ] Activer HTTPS
- [ ] Configurer les domaines
- [ ] Tester les webhooks de paiement
- [ ] Configurer les emails transactionnels
- [ ] Mettre en place le monitoring

---

## Prochaines Étapes de Développement

### Priorité Haute

1. **Intégration Base de Données**
   - Choisir et configurer Supabase/Neon
   - Créer le schéma
   - Migrer les données mock

2. **Authentification**
   - Implémenter NextAuth.js ou Supabase Auth
   - Protéger les routes dashboard
   - Gestion des sessions

3. **API Routes**
   - CRUD Hôtels
   - CRUD Chambres
   - CRUD Réservations

### Priorité Moyenne

4. **Paiements**
   - Intégrer Orange Money
   - Intégrer M-Pesa
   - Webhook de confirmation

5. **Notifications**
   - Emails de confirmation
   - SMS de rappel

6. **Dashboard Admin**
   - Supervision globale
   - Gestion des abonnements
   - Rapports

### Priorité Basse

7. **Améliorations UX**
   - Mode sombre
   - PWA
   - Optimisation images

8. **Fonctionnalités Avancées**
   - Système d'avis
   - Favoris
   - Comparaison d'hôtels

---

## Support et Contact

Pour toute question technique, contacter l'équipe de développement.

---

*Dernière mise à jour: Avril 2026*
