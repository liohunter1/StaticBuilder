import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Award, Target, Shield, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePageMeta } from '@/hooks/usePageMeta';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Unwavering commitment to workplace safety and regulatory compliance on every project.'
  },
  {
    icon: Target,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring excellence in every aspect of construction.'
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Building lasting relationships through transparent communication and exceptional service.'
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Embracing modern construction methods and sustainable building practices.'
  }
];

export default function About() {
  usePageMeta({
    title: 'About Us - Esteel Construction Ltd | Leading Contractors Since 1998',
    description: 'Learn about Esteel Construction Ltd, a UN-registered Class 1 Contractor with 25+ years of excellence. Discover our story, values, and commitment to quality construction in Kenya.',
    ogTitle: 'About Esteel Construction - Building Excellence Since 1998',
    ogDescription: 'Leading Kenya\'s construction industry with integrity, innovation, and excellence. From Cedar Mall to Mi Vida Homes, our portfolio speaks to our expertise.'
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About Esteel Construction
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Leading Kenya's construction industry with integrity, innovation, and excellence since 1998.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1998, Esteel Construction Ltd has grown from a small contracting firm to become 
                    one of Nairobi's most respected construction companies. Our journey is marked by landmark 
                    projects that have shaped Kenya's skyline and infrastructure.
                  </p>
                  <p>
                    As a Class 1 Building Works Contractor and UN-registered vendor, we've successfully delivered 
                    multi-billion shilling projects across commercial, residential, and institutional sectors. 
                    From the iconic Cedar Mall in Nanyuki to the prestigious Mi Vida Homes development, our 
                    portfolio speaks to our expertise and commitment to excellence.
                  </p>
                  <p>
                    Today, we employ cutting-edge construction methodologies while maintaining our core values 
                    of safety, quality, and timely delivery. Our team of experienced professionals brings together 
                    decades of industry knowledge to ensure every project exceeds client expectations.
                  </p>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Construction team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="hover-elevate transition-all">
                      <CardContent className="p-6">
                        <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Download our comprehensive company profile to learn more about our capabilities, 
                certifications, and completed projects.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                Download Company Profile
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
