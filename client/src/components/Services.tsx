import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { services } from '@/data/services';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive construction solutions tailored to your project needs, delivered with expertise and precision.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Card 
                  className="group hover-elevate transition-all duration-300 h-full"
                  data-testid={`card-service-${index}`}
                >
                <CardHeader>
                  <div className="rounded-lg bg-primary/10 w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-accent mt-1">•</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
