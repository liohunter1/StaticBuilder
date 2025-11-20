import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, type Project } from '@/data/projects';
import ProjectModal from './ProjectModal';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcasing our commitment to excellence through landmark projects across Kenya.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Card 
              className="group overflow-hidden hover-elevate transition-all duration-300 cursor-pointer h-full"
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${index}`}
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
                <p className="text-muted-foreground mb-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.location}</span>
                  <span className="text-sm font-semibold text-accent">{project.value}</span>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
