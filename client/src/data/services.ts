import { Building2, Construction, Factory, ClipboardCheck } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: 'general-contracting',
    title: 'General Contracting',
    description: 'Complete construction solutions for commercial and residential projects with a proven track record of excellence.',
    icon: Building2,
    deliverables: [
      'Commercial building construction',
      'Residential developments',
      'Renovation and remodeling',
      'Project estimation and bidding'
    ]
  },
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    description: 'Infrastructure development including roads, bridges, and urban development projects across Kenya.',
    icon: Construction,
    deliverables: [
      'Road construction and maintenance',
      'Bridge and overpass construction',
      'Site preparation and earthworks',
      'Drainage and sewerage systems'
    ]
  },
  {
    id: 'steel-structures',
    title: 'Steel Structures',
    description: 'Specialized fabrication and erection of steel frameworks for warehouses, factories, and commercial buildings.',
    icon: Factory,
    deliverables: [
      'Warehouse construction',
      'Factory shed fabrication',
      'Steel framework erection',
      'Structural steel detailing'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'End-to-end project supervision with Design-Build capabilities, ensuring timely delivery and quality assurance.',
    icon: ClipboardCheck,
    deliverables: [
      'Design-Build project delivery',
      'Construction supervision',
      'Quality control and assurance',
      'Budget and schedule management'
    ]
  }
];
