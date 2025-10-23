import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  onClick: () => void;
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group text-left overflow-hidden rounded-2xl bg-white hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <span className="text-neutral-500">{category}</span>
          <ArrowUpRight
            size={20}
            className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
          />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </button>
  );
}