'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/app/images/PROPTECH_logo_alex_logo-3_alex_logo-3.png";

// Updated navItems array: Notice that "Partners" is placed after "Investor Pitch" and contains the "Media Partners" link.
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Conference",
    href: "#",
    dropdown: [
      { name: "About the Conference", href: "/conference/about" },
      { name: "Participants", href: "/conference/participants" },
      { name: "Speakers", href: "/conference/speakers" },
      { name: "Apply for Speaking", href: "/conference/apply" },
    ],
  },
  {
    name: "Exhibition",
    href: "#",
    dropdown: [
      { name: "About the Exhibition", href: "/exhibition/about" },
      { name: "Exhibitors", href: "/exhibition/exhibitors" },
      { name: "Information Brochure", href: "/exhibition/brochure" },
      { name: "Exhibit at #pts25", href: "/exhibition/exhibit" },
    ],
  },
  { name: "Investor Pitch", href: "/investor-pitch" },
  {
    name: "Partners",
    href: "#",
    dropdown: [
      { name: "Media Partners", href: "/partners/media" },
    ],
  },
  { name: "Get in Tech", href: "/register" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Proptech Expo 2025 Logo" width={150} height={30} />
              <span className="sr-only">Proptech Expo 2025</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0091EB] to-[#00D4D5] rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-950 h-full w-full fixed top-0 left-0 right-0 bottom-0 z-40 overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="block h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close main menu</span>
            </button>
          </div>
          <div className="px-2 pt-8 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium w-full text-left flex justify-between items-center"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
