// import Image from "next/image";
import Link from "next/link";
import type { Publication } from "../lib/data";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const { title, authors, highlightedAuthor, description, links } = publication;

  const formattedAuthors = authors
    .map((author) =>
      author === highlightedAuthor
        ? `<span class="font-bold">${author}</span>`
        : author
    )
    .join(", ");

  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="mx-auto md:mx-0">
        <div className="mx-auto md:mx-0 relative w-[200px] h-[150px] bg-gray-200 rounded-md shadow-sm overflow-hidden">
          {/* <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
          /> */}
        </div>
      </div>
      <div>
        <p
          className="mb-1 text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: formattedAuthors }}
        />
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className={`${links ? "" : "italic"} text-sm md:text-base`}>
          {description}
          {links &&
            links.map((link, index) => (
              <span key={index}>
                {" "}
                <Link href={link.url} className="text-primary">
                  ({link.label})
                </Link>
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}
