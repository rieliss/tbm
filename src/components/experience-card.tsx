// import Image from "next/image";
import { Experience } from "../lib/data";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, role, period, description, technologies } = experience;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0">
        <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0 bg-gray-200 rounded-full overflow-hidden">
          {/* <Image
            src={imageUrl || "/placeholder.svg"}
            alt={company}
            fill
            className="object-contain"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          /> */}
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <div>
          <h3 className="text-xl font-bold">{role}</h3>
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-gray-600">
            <span className="font-medium">{company}</span>
            <span className="hidden md:inline">•</span>
            <span>{period}</span>
          </div>
        </div>

        <div className="space-y-2">
          {description.map((paragraph, index) => (
            <p key={index} className="text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

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
      </div>
    </div>
  );
}
