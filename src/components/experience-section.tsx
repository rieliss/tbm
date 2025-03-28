import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  imageUrl: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-4 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">
          Experience
        </h2>
        <div className="space-y-12">
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              console.log("exp.imageUrl", exp.imageUrl);
              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:justify-between border-b mb-8 pb-4 border-gray-200 gap-4 sm:gap-8"
                >
                  <div className="ml-2 w-full sm:w-3/4">
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {exp.title}
                    </h4>
                    <h5 className="text-base sm:text-lg text-gray-700 mb-2">
                      {exp.company}
                    </h5>

                    <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm sm:text-base mr-0 sm:mr-24 pl-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative overflow-hidden rounded-lg w-40 h-40 sm:w-60 sm:h-60 mx-auto sm:mx-0">
                    <Image
                      src={exp.imageUrl}
                      alt={exp.title}
                      width={160}
                      height={160}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
