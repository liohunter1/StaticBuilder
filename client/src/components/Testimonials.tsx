import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonials';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Trusted By Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence has earned the trust of prestigious clients across Kenya.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 grayscale opacity-60">
          <div className="text-xl md:text-2xl font-semibold text-foreground">United Nations</div>
          <div className="text-xl md:text-2xl font-semibold text-foreground">Mi Vida Homes</div>
          <div className="text-xl md:text-2xl font-semibold text-foreground">Cedar Mall</div>
        </div>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2" data-testid="card-testimonial">
              <CardContent className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-1 mb-6" aria-label={`${currentTestimonial.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-5 w-5 ${i < currentTestimonial.rating ? 'fill-accent text-accent' : 'text-muted'}`}
                        />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                      "{currentTestimonial.content}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {currentTestimonial.role}, {currentTestimonial.company}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          size="icon"
                          variant="outline"
                          onClick={previous}
                          aria-label="Previous testimonial"
                          data-testid="button-testimonial-previous"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon"
                          variant="outline"
                          onClick={next}
                          aria-label="Next testimonial"
                          data-testid="button-testimonial-next"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-muted'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      data-testid={`button-testimonial-dot-${index}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
