export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'David Kimani',
    company: 'Cedar Mall Management',
    role: 'Project Director',
    content: 'Esteel Construction delivered the Cedar Mall project on time and within budget. Their attention to detail and professional approach made them an excellent partner.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Mwangi',
    company: 'Mi Vida Group',
    role: 'Development Manager',
    content: 'Working with Esteel on our luxury residential project was seamless. Their expertise in high-rise construction and commitment to quality exceeded our expectations.',
    rating: 5
  },
  {
    id: '3',
    name: 'John Omondi',
    company: 'UNON Facilities',
    role: 'Senior Engineer',
    content: 'Excellent services. We have earned a good reputation through delivering quality projects. Esteel maintains the highest standards of safety and professionalism.',
    rating: 4
  }
];

export const trustLogos = [
  { name: 'United Nations', alt: 'UN Logo' },
  { name: 'Mi Vida', alt: 'Mi Vida Logo' },
  { name: 'Cedar Mall', alt: 'Cedar Mall Logo' }
];
