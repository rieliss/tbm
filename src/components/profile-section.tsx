import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

interface ProfileSectionProps {
  name: string;
  bio: React.ReactNode;
  email?: string;
  githubUsername?: string;
  imageUrl?: string;
}

export default function ProfileSection({
  name,
  bio,
  email,
  githubUsername,
  imageUrl = "/placeholder.svg?height=300&width=300",
}: ProfileSectionProps) {
  return (
    <section id="home" className="pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={name}
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{name}</h1>

            <div className="space-y-4 text-gray-700 leading-relaxed">{bio}</div>

            <div className="mt-6 flex items-center gap-2">
              {githubUsername && (
                <Link
                  href={`https://github.com/${githubUsername}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  <span>{githubUsername}</span>
                </Link>
              )}

              {email && (
                <>
                  <span className="text-gray-400 mx-2">|</span>
                  <span className="text-gray-700">{email}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
