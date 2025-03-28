// import Image from "next/image";
import Link from "next/link";
import type { Project } from "../lib/data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, links } = project;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-200">
        {/* <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
        /> */}
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {links && links.length > 0 && (
          <div className="flex gap-3 pt-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-primary text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
