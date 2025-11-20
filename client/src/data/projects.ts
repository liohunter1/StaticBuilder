export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  value: string;
  type: 'Commercial' | 'Residential' | 'Institutional';
  image: string;
  details: {
    role: string;
    timeline: string;
    deliverables: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'cedar-mall',
    title: 'Cedar Mall',
    location: 'Nanyuki',
    description: 'Modern shopping center development',
    value: 'Sh1.3bn',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
    details: {
      role: 'Main contractor for structural works and finishing',
      timeline: '24 months (2020-2022)',
      deliverables: [
        'Complete structural framework',
        'Interior finishing and MEP systems',
        'Parking and external works',
        'Landscaping and signage'
      ]
    }
  },
  {
    id: 'mi-vida-homes',
    title: 'Mi Vida Homes',
    location: 'Garden City',
    description: 'Luxury residential development',
    value: 'Sh12bn',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    details: {
      role: 'Lead contractor for residential tower construction',
      timeline: '36 months (2018-2021)',
      deliverables: [
        'High-rise residential towers',
        'Premium finishes and amenities',
        'Underground parking structure',
        'Clubhouse and recreational facilities'
      ]
    }
  },
  {
    id: 'unon-office',
    title: 'UNON Office Blocks',
    location: 'Nairobi',
    description: 'United Nations office expansion',
    value: 'Undisclosed',
    type: 'Institutional',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    details: {
      role: 'Expansion and renovation of existing office blocks',
      timeline: '18 months (2019-2020)',
      deliverables: [
        'Office block expansion',
        'Modern MEP upgrades',
        'Security and access systems',
        'LEED-certified sustainable features'
      ]
    }
  },
  {
    id: 'school-lane',
    title: 'School Lane Offices',
    location: 'Westlands',
    description: 'Corporate office building',
    value: 'Undisclosed',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    details: {
      role: 'Complete construction of Grade A office building',
      timeline: '20 months (2021-2023)',
      deliverables: [
        'Modern office spaces',
        'Energy-efficient systems',
        'Retail ground floor',
        'Multi-level parking'
      ]
    }
  }
];
