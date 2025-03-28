import Link from "next/link";
import { Github } from "lucide-react";

interface ProfileSectionProps {
  name: string;
  bio: string[];
  imageUrl: string;
  contact: string;
  githubUrl: string;
}

export function ProfileSection({
  name,
  bio,
  // imageUrl,
  contact,
  githubUrl,
}: ProfileSectionProps) {
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div className="mx-auto md:mx-0">
          <div className="mx-auto md:mx-0 relative w-[300px] h-[400px] bg-gray-200 rounded-md shadow-md overflow-hidden">
            {/* <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            /> */}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{name}</h2>

          <div className="prose max-w-none">
            {bio.map((paragraph, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(
                      "Engineering Science",
                      '<a href="#">Engineering Science</a>'
                    )
                    .replace(
                      "University of Toronto",
                      '<a href="#">University of Toronto</a>'
                    ),
                }}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2 text-gray-600">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </Link>
            <span>/</span>
            <span>{contact}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
