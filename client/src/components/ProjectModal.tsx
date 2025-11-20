import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-project">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl md:text-3xl font-heading mb-2">
                {project.title}
              </DialogTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{project.type}</Badge>
                <Badge variant="outline">{project.location}</Badge>
                <Badge className="bg-accent text-accent-foreground">{project.value}</Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Our Role</h3>
              <p className="text-muted-foreground">{project.details.role}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Timeline</h3>
              <p className="text-muted-foreground">{project.details.timeline}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Key Deliverables</h3>
            <ul className="space-y-2">
              {project.details.deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-muted-foreground">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
