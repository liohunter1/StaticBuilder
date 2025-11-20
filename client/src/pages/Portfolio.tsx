import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects, type Project } from '@/data/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectModal from '@/components/ProjectModal';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Portfolio() {
  usePageMeta({
    title: 'Portfolio - Our Projects | Esteel Construction Ltd Kenya',
    description: 'Explore Esteel Construction\'s portfolio of landmark projects across Kenya including Cedar Mall (Sh1.3bn), Mi Vida Homes (Sh12bn), UN Office Blocks, and more commercial, residential, and institutional developments.',
    ogTitle: 'Construction Portfolio - Multi-Billion Shilling Projects in Kenya',
    ogDescription: 'From commercial complexes to luxury residential developments, explore our track record of delivering landmark projects that have shaped Kenya\'s skyline.'
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const projectTypes = ['All', 'Commercial', 'Residential', 'Institutional'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 md:pt-24">
        <section className="relative py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Explore our track record of delivering landmark projects across Kenya, from commercial complexes 
              to luxury residential developments.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {projectTypes.map((type) => (
                <Badge
                  key={type}
                  variant={filter === type ? 'default' : 'outline'}
                  className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                    filter === type 
                      ? 'bg-primary hover:bg-primary' 
                      : 'hover-elevate'
                  }`}
                  onClick={() => setFilter(type)}
                  data-testid={`filter-${type.toLowerCase()}`}
                >
                  {type}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="group overflow-hidden hover-elevate transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  data-testid={`card-portfolio-${index}`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-white text-sm mb-2">{project.location}</p>
                        <p className="text-white/80 text-sm">Click to view case study</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="ml-2 whitespace-nowrap">
                        {project.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                      <span className="text-sm font-semibold text-accent">{project.value}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  );
}
