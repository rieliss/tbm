import { Publication } from "../lib/data";
import { PublicationCard } from "./publication-card";

interface PublicationsSectionProps {
  publications: Publication[];
}

export function PublicationsSection({
  publications,
}: PublicationsSectionProps) {
  return (
    <section id="publications" className="section-container bg-white">
      <h2 className="section-title">Publications and Patents</h2>

      <div className="space-y-8">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </section>
  );
}
