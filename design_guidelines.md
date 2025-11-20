# Esteel Construction Ltd - Static Website Design Guidelines

## Design Approach
**Reference-Based**: Corporate construction industry standards with emphasis on authority, professionalism, and trust. Draw inspiration from professional contractor websites while maintaining minimalist, grid-based layouts with substantial negative space.

## Brand Identity
**Company**: Esteel Construction Ltd (Est. 1998, Class 1 Contractor, UN-registered vendor)
**Vibe**: Corporate, sturdy, authoritative, minimalist - avoid playful elements

### Color Palette
- **Primary**: Deep Industrial Blue `#1e3a8a`
- **Secondary**: Steel Grey `#475569`
- **Accent**: Safety Orange `#f97316`
- **Backgrounds**: `#f8fafc`, `#f1f5f9`

### Typography
- **Headings**: Oswald (uppercase for logo, bold, strong hierarchy)
- **Body**: Inter (clean, professional, highly readable)

## Layout System
**Spacing**: Tailwind units - use `p-4`, `p-6`, `p-8`, `p-12`, `p-16`, `p-20` for consistent rhythm
**Containers**: `max-w-7xl` for full sections, `max-w-6xl` for content areas
**Grid**: Mobile-first - 1 column mobile, 2-3 columns tablet/desktop

## Component Library

### Navigation
- Logo left (text-based "ESTEEL" in Oswald, uppercase, bold)
- Horizontal links: Home, About Us, Services, Portfolio, Contact
- CTA button "Get a Quote" (Safety Orange, right-aligned desktop)
- Mobile: Hamburger menu with focus trap, accessible overlay

### Hero Section
- **Large background image**: Construction crane/steel structure from Unsplash
- **Dark gradient overlay** for text legibility
- **Headline**: "Building Kenya's Future Since 1998." (large, bold Oswald)
- **Subheadline**: "Premier General Contractors & Civil Engineering Experts in Nairobi."
- **Dual CTAs**: Primary "View Our Projects" (Safety Orange), Secondary "Contact Us" (Deep Blue outline)
- **Trust row**: Small badges below - "UN-registered vendor • Class 1 Contractor • 25+ Years Experience • 4.4/5"

### Cards
- **Service Cards**: Icon (Lucide), title, 2-3 line description, subtle lift on hover
- **Project Cards**: Image, title, location, value tag, type badge, hover overlay with "View Case Study"
- **Stats Cards**: Large number/icon, label, clean borders

### Modals
- Project case studies with image gallery, description, role, timeline, deliverables
- Accessible with focus trap, ESC to close, dark backdrop

### Buttons
- **Primary CTA**: Safety Orange background, white text, subtle shadow, scale on hover
- **Secondary**: Deep Blue outline, transparent background
- **On Images**: Blurred background (`backdrop-blur-sm`), no custom hover states

### Footer
- Multi-column layout: Quick links, contact info, social icons (LinkedIn, Facebook)
- Copyright: "© 2025 Esteel Construction Ltd"

## Page Sections

### Home
1. Hero (full-width background image with overlay)
2. About (company history paragraph + 4 stats cards)
3. Services (4 cards grid with icons)
4. Featured Projects (grid: Cedar Mall, Mi Vida Homes, UNON, School Lane)
5. Trust/Testimonials (logo strip + 3 testimonials carousel)

### About Page
- Extended company history
- Key achievements and certifications
- "Download Company Profile" CTA

### Services Page
1. General Contracting
2. Civil Engineering
3. Steel Structures
4. Project Management
(Each with icon, description, example deliverables list)

### Portfolio Page
- Expanded project grid with filtering
- Modal case studies for each project

### Contact Page
- **Two-column layout**:
  - Left: Address (17 Busia Rd, Industrial Area, Nairobi), Phone (0114 098438), Hours, Plus Code (MRQW+CM), map placeholder
  - Right: Static contact information display (no form for static site)

## Images
**Hero Image**: Construction site with crane/steel structure - dramatic, professional (Unsplash: construction, cranes, steel framework)
**Project Images**: Use Unsplash placeholders - Cedar Mall (modern shopping center), Mi Vida Homes (luxury residential), UNON (office complex), School Lane (corporate building)
**Sizes**: Mobile 640w, Tablet 1024w, Desktop 1920w
**Treatment**: Lazy-loading, responsive srcset

## Animations (Framer Motion)
- Hero entrance fade-up
- Cards reveal on scroll
- Mobile menu slide-in
- Project modal fade + scale
- Subtle hover lifts (4-8px)
- Respect `prefers-reduced-motion`

## Accessibility
- Semantic HTML5 landmarks
- ARIA labels on all interactive elements
- Keyboard navigation for modals and menus
- WCAG AA color contrast
- Alt text on all images
- Focus visible states

## Mobile Optimization
- Mobile-first breakpoints
- Large tappable areas (min 44x44px)
- Readable text sizes (16px minimum)
- Optimized images for low bandwidth
- Sticky/floating "Get a Quote" CTA on scroll (optional)

## SEO
- Title: "Esteel Construction Ltd — General Contractors & Civil Engineering | Nairobi"
- Meta description: "Esteel Construction Ltd — Class 1 contractor and UN-registered vendor based in Nairobi. Building Kenya's future since 1998. Contact: 0114 098438."
- Open Graph tags with project images