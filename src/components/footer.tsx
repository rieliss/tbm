import Link from "next/link";
import { Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Alexander Alexiev. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/alex-alexiev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
