import { Experience } from "../lib/data";
import { ExperienceCard } from "./experience-card";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title text-red-500">Experience</h2>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
