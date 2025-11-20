# Esteel Construction Ltd - Corporate Website

## Overview

A production-ready corporate website for Esteel Construction Ltd, a premier general contractor and civil engineering firm based in Nairobi, Kenya. The site showcases 25+ years of expertise through a fully responsive, accessible, and visually polished single-page application with multiple route-based views.

The application presents the company's services, portfolio of landmark projects (including Cedar Mall - Sh1.3bn and Mi Vida Homes - Sh12bn), client testimonials, and contact information. Built as a static website with modern web technologies, it emphasizes professional presentation, mobile-first design, and performance optimization for Nairobi users.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite as the build tool and development server. The application follows a component-based architecture with clear separation between reusable UI components, page components, and data modules.

**Routing**: Wouter for lightweight client-side routing. The site implements a traditional multi-page structure with routes for Home (/), About (/about), Services (/services), Portfolio (/portfolio), and Contact (/contact).

**Component Structure**:
- **Reusable Components** (`client/src/components/`): Navigation, Hero, About, Services, Projects, Testimonials, Footer, ProjectModal, AnimatedSection
- **Page Components** (`client/src/pages/`): Home, About, Services, Portfolio, Contact, NotFound
- **UI Components** (`client/src/components/ui/`): shadcn/ui component library including buttons, cards, badges, dialogs, forms, and various primitives from Radix UI

**State Management**: React Query (@tanstack/react-query) for server state management and data fetching. Local component state managed with React hooks (useState, useEffect, useRef).

**Design System**:
- **Brand Colors**: Primary (Deep Industrial Blue #1e3a8a), Secondary (Steel Grey #475569), Accent (Safety Orange #f97316)
- **Typography**: Oswald for headings (bold, authoritative), Inter for body text (clean, readable)
- **Styling**: Tailwind CSS with custom configuration, utility-first approach with CSS variables for theming
- **Animations**: Framer Motion for entrance animations, scroll-triggered animations, and smooth transitions
- **Icons**: Lucide React for consistent, scalable iconography

**Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation support, focus management for modals and mobile menus, screen reader considerations.

**Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop. Grid layouts adapt from single column on mobile to 2-3 columns on larger screens.

### Backend Architecture

**Server**: Express.js server serving both the API and static frontend assets. Development mode uses Vite middleware for hot module replacement.

**API Structure**: Minimal backend with placeholder routes (`server/routes.ts`). Currently implements a basic storage interface (`server/storage.ts`) with in-memory user management as an example, though the static website doesn't actively use authentication.

**Build Process**:
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles Express server to `dist/index.js`
- Production: Single Node.js process serves both static assets and API endpoints

**Development Workflow**: 
- `npm run dev`: Runs Express server with Vite middleware for HMR
- `npm run build`: Builds both frontend and backend for production
- `npm start`: Runs production build

### Data Architecture

**Static Data Models** (`client/src/data/`):
- Projects: Portfolio items with title, location, value, type, images, and detailed case study information
- Services: Service offerings with icons, descriptions, and deliverables
- Testimonials: Client feedback with ratings and company information

**Schema Definition** (`shared/schema.ts`): Drizzle ORM schema with PostgreSQL dialect. Currently defines a basic users table as example structure. The application is set up to use Drizzle with Neon Database (@neondatabase/serverless) though the static website doesn't require a database for its current functionality.

**Type Safety**: TypeScript throughout with strict mode enabled. Shared types between frontend and backend via `shared/` directory. Drizzle-Zod integration for runtime validation.

### External Dependencies

**UI Framework & Components**:
- Radix UI: Headless component primitives (Dialog, Dropdown, Navigation, Accordion, etc.)
- shadcn/ui: Pre-styled components built on Radix UI primitives
- Framer Motion: Animation and gesture library
- Lucide React: Icon library

**Data Management**:
- @tanstack/react-query: Server state management and caching
- React Hook Form (@hookform/resolvers): Form handling and validation
- Zod: Schema validation (via drizzle-zod)

**Database & ORM**:
- Drizzle ORM: Type-safe database toolkit
- @neondatabase/serverless: Neon PostgreSQL driver
- drizzle-kit: Database migration tool

**Build Tools**:
- Vite: Frontend build tool and dev server
- esbuild: Backend bundler
- TypeScript: Type checking
- PostCSS + Autoprefixer: CSS processing
- Tailwind CSS: Utility-first CSS framework

**Development Tools**:
- @replit/vite-plugin-runtime-error-modal: Error overlay for Replit
- @replit/vite-plugin-cartographer: Development tooling
- @replit/vite-plugin-dev-banner: Development banner

**Session Management**:
- express-session: Session middleware (configured but not actively used)
- connect-pg-simple: PostgreSQL session store

**Utilities**:
- clsx + tailwind-merge: Class name manipulation
- class-variance-authority: Component variant management
- date-fns: Date formatting and manipulation
- wouter: Lightweight routing library

**Image Assets**: Unsplash API for placeholder images of construction sites, steel structures, and commercial buildings. Images referenced via direct URLs in component code.

**Environment Configuration**: Database URL configured via `DATABASE_URL` environment variable for Drizzle/PostgreSQL connection, though not required for static website functionality.