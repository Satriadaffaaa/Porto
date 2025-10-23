import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { type Project } from "../data/projects";

interface ProjectDetailProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDetail({ project, open, onOpenChange }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription className="text-neutral-500 mt-1">
                {project.category} • {project.year}
              </DialogDescription>
            </div>
          
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          <div className="aspect-video overflow-hidden rounded-xl bg-neutral-100">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="mb-3">Overview</h3>
            <p className="text-neutral-600 leading-relaxed">{project.fullDescription}</p>
          </div>

          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.additionalImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-video overflow-hidden rounded-xl bg-neutral-100"
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-[600px] h-[300px] object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-3">Challenge</h3>
              <p className="text-neutral-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="mb-3">Solution</h3>
              <p className="text-neutral-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3">Results</h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-600">
                  <span className="text-neutral-400 mt-1">•</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
