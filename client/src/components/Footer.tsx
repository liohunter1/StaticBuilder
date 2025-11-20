import { Link } from 'wouter';
import { Facebook, Linkedin, MapPin, Phone, Clock } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">ESTEEL</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building Kenya's future since 1998. Class 1 contractor and UN-registered vendor delivering 
              excellence in construction and civil engineering.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a 
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  17 Busia Rd, Industrial Area<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="tel:0114098438"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-phone"
                >
                  0114 098438
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Mon-Fri: 8:00 AM - 5:00 PM<br />
                  Sat-Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/80 text-sm">
            © 2025 Esteel Construction Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
              data-testid="link-facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
