import { Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">
          Experience
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Work Experience</h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-600 pl-6 ml-2"
                >
                  <h4 className="text-lg font-medium">{exp.title}</h4>
                  <h5 className="text-base text-gray-700 mb-2">
                    {exp.company}
                  </h5>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
