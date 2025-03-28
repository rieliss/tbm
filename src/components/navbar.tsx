"use client";

import Link from "next/link";
import type { NavItem } from "../lib/data";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-auto flex justify-between items-center">
          <h1 className="text-xl font-medium">Alexander Alexiev</h1>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex w-full md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-6">
            {items.map((item) => (
              <li key={item.title} className="w-full md:w-auto text-center">
                <Link
                  href={item.href}
                  className="block py-2 md:py-0 hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
