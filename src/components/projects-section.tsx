import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-4 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="text-sm text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repository
                    </Link>
                  )}

                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="text-sm text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
