import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['17 Busia Rd, Industrial Area', 'Nairobi, Kenya', 'Plus Code: MRQW+CM Nairobi']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['0114 098438'],
    link: 'tel:0114098438'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@esteelconstruction.co.ke'],
    link: 'mailto:info@esteelconstruction.co.ke'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday - Sunday: Closed']
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Get in touch with our team to discuss your construction project. We're here to help bring your vision to life.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're planning a commercial development, residential project, or infrastructure work, 
                  our team of experts is ready to assist. Reach out to us using any of the contact methods below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="hover-elevate transition-all" data-testid={`card-contact-${index}`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="rounded-lg bg-primary/10 p-3">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{info.title}</h3>
                              {info.details.map((detail, idx) => (
                                info.link && idx === 0 ? (
                                  <a 
                                    key={idx}
                                    href={info.link}
                                    className="text-muted-foreground hover:text-primary transition-colors block"
                                    data-testid={`link-${info.title.toLowerCase()}`}
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  <p key={idx} className="text-muted-foreground text-sm">
                                    {detail}
                                  </p>
                                )
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">Our Location</h2>
                <Card>
                  <CardContent className="p-0">
                    <div 
                      className="relative h-96 bg-muted/30 rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <MapPin className="h-12 w-12 mx-auto mb-4" />
                          <p className="text-lg font-semibold mb-2">Esteel Construction Ltd</p>
                          <p className="text-sm mb-1">17 Busia Rd, Industrial Area</p>
                          <p className="text-sm mb-3">Nairobi, Kenya</p>
                          <p className="text-xs bg-white/20 backdrop-blur-sm inline-block px-3 py-1 rounded">
                            Plus Code: MRQW+CM Nairobi
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Quick Facts</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Established in 1998</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Class 1 Building Works Contractor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>UN-registered vendor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>4.4/5 client satisfaction rating</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Contact us today to discuss your construction needs. Our experienced team is ready to provide 
                expert guidance and competitive quotes for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:0114098438"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent text-accent-foreground rounded-md font-medium transition-all hover-elevate"
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
                <a 
                  href="mailto:info@esteelconstruction.co.ke"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-md font-medium transition-all hover-elevate"
                  data-testid="button-email-us"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
