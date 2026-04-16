"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Formations", href: "/formations" },
  { name: "Ateliers & Stages", href: "/ateliers-stages" },
  { name: "Entreprises", href: "/entreprises" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.svg" alt="Présence Thérapeutique" width={48} height={72} className="h-14 w-auto" />
            <div>
              <span className="font-serif text-lg text-text font-semibold tracking-tight">
                Présence
              </span>
              <span className="font-serif text-lg text-sage-dark font-semibold tracking-tight">
                {" "}Thérapeutique
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-text-light hover:text-sage-dark transition-colors rounded-lg hover:bg-sage/5"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/inscription"
              className="px-6 py-2.5 bg-sage text-white text-sm font-semibold rounded-full hover:bg-sage-dark transition-all hover:shadow-lg"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-text-light hover:bg-warm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 pt-2 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-text-light hover:text-sage-dark hover:bg-sage/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <Link
                  href="/inscription"
                  className="block text-center px-6 py-3 bg-sage text-white font-semibold rounded-full hover:bg-sage-dark transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  S&apos;inscrire à la formation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
