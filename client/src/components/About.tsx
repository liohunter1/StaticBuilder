import { Award, Users, Building, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const stats = [
  {
    icon: Building,
    label: '25+ Years Experience',
    value: 'Since 1998',
    description: 'Delivering excellence'
  },
  {
    icon: Star,
    label: '4.4/5 Client Rating',
    value: '4.4★',
    description: 'Client satisfaction'
  },
  {
    icon: Award,
    label: 'Class 1 Contractor',
    value: 'Certified',
    description: 'NCA registered'
  },
  {
    icon: Users,
    label: 'UN-registered vendor',
    value: 'Official',
    description: 'Global standards'
  }
];

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Building Excellence Since 1998
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Esteel Construction Ltd has been at the forefront of Kenya's construction industry for over 25 years. 
              As a UN-registered vendor and Class 1 Building Works Contractor, we've successfully delivered multi-billion 
              shilling projects across commercial, residential, and institutional sectors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the iconic Cedar Mall in Nanyuki (Sh1.3bn) to the prestigious Mi Vida Homes in Garden City (Sh12bn), 
              our commitment to safety, quality, and timely delivery has earned us a reputation as one of Nairobi's most 
              trusted construction partners.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="hover-elevate transition-all duration-300 h-full" data-testid={`card-stat-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-primary/10 p-4 mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-3xl font-heading font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="text-base"
              data-testid="button-download-profile"
            >
              Download Company Profile
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
