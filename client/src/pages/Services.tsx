import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { services } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ServicesPage() {
  usePageMeta({
    title: 'Construction Services - General Contracting & Civil Engineering | Esteel',
    description: 'Comprehensive construction services including General Building Works, Civil Engineering, Project Management, and Design-Build solutions. Expert contractors serving Nairobi and Kenya.',
    ogTitle: 'Construction Services - Esteel Construction Ltd',
    ogDescription: 'From general contracting to civil engineering and project management, we deliver construction solutions tailored to your needs with expertise and precision.'
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Comprehensive construction solutions delivered with expertise, precision, and unwavering commitment to quality.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={service.id}
                    className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                      !isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={isEven ? '' : 'md:order-2'}>
                      <div className="rounded-lg bg-primary/10 w-16 h-16 flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Key Deliverables:</h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-3"
                            >
                              <span className="text-accent font-bold mt-1">✓</span>
                              <span className="text-muted-foreground">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={isEven ? '' : 'md:order-1'}>
                      <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                        <img 
                          src={
                            index === 0 
                              ? 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
                              : index === 1
                              ? 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80'
                              : index === 2
                              ? 'https://images.unsplash.com/photo-1590496793907-4d0b4c5c3d9e?w=800&q=80'
                              : 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
                          }
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 bg-muted/30 rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
