import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Home() {
  usePageMeta({
    title: 'Esteel Construction Ltd - Premier General Contractors in Nairobi, Kenya',
    description: 'UN-registered Class 1 Contractor with 25+ years of excellence in commercial, residential, and institutional construction. Building Kenya\'s future since 1998.',
    ogTitle: 'Esteel Construction Ltd - Building Kenya\'s Future Since 1998',
    ogDescription: 'Premier General Contractors & Civil Engineering Experts in Nairobi. Multi-billion shilling projects across Kenya including Cedar Mall, Mi Vida Homes, and UN office blocks.'
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}
