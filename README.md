# Esteel Construction Ltd - Corporate Website

A production-ready static website for Esteel Construction Ltd, a premier general contractor and civil engineering firm based in Nairobi, Kenya.

## Overview

This is a fully responsive, accessible, and visually polished corporate website built with modern web technologies. The site showcases Esteel Construction's 25+ years of expertise, portfolio of landmark projects, and comprehensive construction services.

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **Wouter** - Lightweight routing
- **shadcn/ui** - High-quality UI components

## Design System

### Brand Colors
- **Primary**: Deep Industrial Blue (#1e3a8a) - Trust and professionalism
- **Secondary**: Steel Grey (#475569) - Strength and stability  
- **Accent**: Safety Orange (#f97316) - Action and energy

### Typography
- **Headings**: Oswald - Bold, authoritative
- **Body**: Inter - Clean, readable

## Project Structure

```
client/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navigation.tsx # Header with mobile menu
│   │   ├── Hero.tsx       # Landing hero section
│   │   ├── About.tsx      # Company overview
│   │   ├── Services.tsx   # Services grid
│   │   ├── Projects.tsx   # Portfolio grid
│   │   ├── ProjectModal.tsx # Project details modal
│   │   ├── Testimonials.tsx # Client testimonials carousel
│   │   └── Footer.tsx     # Site footer
│   ├── pages/            # Route pages
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # About page
│   │   ├── Services.tsx  # Services page
│   │   ├── Portfolio.tsx # Portfolio page
│   │   └── Contact.tsx   # Contact page
│   ├── data/             # Static data
│   │   ├── projects.ts   # Project portfolio
│   │   ├── services.ts   # Service offerings
│   │   └── testimonials.ts # Client testimonials
│   └── App.tsx           # Main app component
└── index.html            # HTML entry point
```

## Features

### Core Pages
- **Home** - Hero section, company overview, services preview, featured projects, testimonials
- **About** - Company history, values, team credentials
- **Services** - Detailed service descriptions with deliverables
- **Portfolio** - Complete project showcase with filtering and case studies
- **Contact** - Contact information, location map, business details

### Key Features
- ✅ Fully responsive design (mobile-first approach)
- ✅ Accessible (WCAG AA compliant)
- ✅ SEO optimized with meta tags
- ✅ Smooth animations and transitions
- ✅ Interactive project modals
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Testimonials carousel
- ✅ Project type filtering
- ✅ Fast loading with lazy-loaded images
- ✅ Keyboard navigation support

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd esteel-construction
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
```

This creates an optimized static build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This static site can be deployed to any hosting platform:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to GitHub Pages

### Traditional Web Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to your web server

## Customization

### Replacing Placeholder Images

The site currently uses Unsplash placeholder images. To use real project photos:

1. Add images to `client/public/images/`
2. Update image URLs in `client/src/data/projects.ts`

Example:
```typescript
image: '/images/cedar-mall.jpg'  // instead of Unsplash URL
```

### Adding Google Maps

To replace the static map placeholder with an interactive Google Map:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Add to `.env`:
```
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```
3. Update `client/src/pages/Contact.tsx` to use Google Maps embed

### Company Profile PDF

To enable the "Download Company Profile" button:

1. Add your PDF to `client/public/documents/company-profile.pdf`
2. Update button href in relevant components:
```tsx
<a href="/documents/company-profile.pdf" download>
  Download Company Profile
</a>
```

## Business Information

- **Company**: Esteel Construction Ltd
- **Established**: 1998
- **Address**: 17 Busia Rd, Industrial Area, Nairobi, Kenya
- **Phone**: 0114 098438
- **Plus Code**: MRQW+CM Nairobi
- **Status**: UN-registered vendor, Class 1 Building Works Contractor
- **Rating**: 4.4/5

## Notable Projects

- **Cedar Mall** (Nanyuki) - Sh1.3bn commercial development
- **Mi Vida Homes** (Garden City) - Sh12bn luxury residential
- **UNON Office Blocks** - United Nations office expansion
- **School Lane Offices** (Westlands) - Corporate office building

## Accessibility

The site follows WCAG AA standards:
- Semantic HTML5 markup
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus visible states
- Screen reader friendly

## Performance

- Optimized images with lazy loading
- Code splitting for faster initial load
- Minimal JavaScript bundle
- CSS utility classes for smaller stylesheets
- Fast Vite development server

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2025 Esteel Construction Ltd. All rights reserved.

## Support

For technical issues or questions about this website, contact the development team or Esteel Construction Ltd directly at:
- Phone: 0114 098438
- Email: info@esteelconstruction.co.ke
