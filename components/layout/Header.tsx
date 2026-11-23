"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Holiday Itineraries", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Hotels & Resorts", href: "/hotels" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-border-color sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link href="/" className="flex flex-col justify-center py-1 shrink-0">
          <span className="text-xl sm:text-2xl font-extrabold text-primary tracking-tight leading-none">
            UDAIPUR GATEWAY
          </span>
          <span className="text-[10px] sm:text-xs text-text-secondary tracking-wider font-semibold mt-1">
            Nothing Like Travel LLP
          </span>
          <span className="text-[9px] sm:text-[10px] text-text-secondary/80 font-normal tracking-tight mt-0.5">
            <span className="sm:hidden">Independent Travel Agency</span>
            <span className="hidden sm:inline">Independent Travel Information, Itinerary Planning & Enquiry Assistance</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 shrink-0">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors text-xs xl:text-sm whitespace-nowrap ${
                  isActive 
                    ? "text-accent font-semibold" 
                    : "text-text-primary hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/#enquire"
            className="bg-accent text-white px-4 xl:px-6 py-2.5 rounded-md font-semibold text-xs xl:text-sm hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 shadow-xs"
          >
            ENQUIRE NOW
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 top-20 bg-black/40 z-40 backdrop-blur-xs" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border-color shadow-xl p-5 flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-80px)] overflow-y-auto">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-accent/10 text-accent font-semibold" 
                      : "text-text-primary hover:bg-gray-50 hover:text-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/#enquire"
              className="bg-accent text-white text-center px-6 py-3 rounded-md font-semibold hover:opacity-90 mt-3 shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              ENQUIRE NOW
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
