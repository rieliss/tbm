import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  url?: string;
  isHighlighted?: boolean;
}

interface Publication {
  title: string;
  authors: Author[];
  description?: string;
  imageUrl: string;
  paperUrl?: string;
  pressUrl?: string;
  journalInfo?: string;
}

interface PublicationsSectionProps {
  publications: Publication[];
}

export default function PublicationsSection({
  publications,
}: PublicationsSectionProps) {
  return (
    <section id="publications" className="py-4 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">
          Publications and Patents
        </h2>

        <div className="space-y-12">
          {publications.map((pub, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/4">
                <div className="relative w-full h-48 md:h-40 overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src={pub.imageUrl || "/placeholder.svg"}
                    alt={pub.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="w-full md:w-3/4">
                <div className="flex flex-wrap gap-1 text-sm mb-2">
                  {pub.authors.map((author, idx) => (
                    <span key={idx}>
                      {idx > 0 && ", "}
                      {author.isHighlighted ? (
                        <span className="font-bold text-blue-700">
                          {author.name}
                        </span>
                      ) : author.url ? (
                        <Link href={author.url} className="font-medium">
                          {author.name}
                        </Link>
                      ) : (
                        <span>{author.name}</span>
                      )}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>

                {pub.journalInfo && (
                  <p className="text-sm text-gray-600 italic mb-2">
                    {pub.journalInfo}
                  </p>
                )}

                {pub.description && (
                  <p className="text-gray-700 mb-3">{pub.description}</p>
                )}

                <div className="flex gap-4 text-sm">
                  {pub.paperUrl && (
                    <Link
                      href={pub.paperUrl}
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Paper]
                    </Link>
                  )}

                  {pub.pressUrl && (
                    <Link
                      href={pub.pressUrl}
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [Press]
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
