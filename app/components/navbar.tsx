// components/navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, Globe } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-hotel-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="h-8 w-8 rounded-md bg-hotel-fond"
              />
              <span
                className="text-2xl font-bold text-hotel-fond"
              >
                Reserva
              </span>
              <span
                className="text-2xl font-bold text-hotel-accent"
              >
                hub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            <Link href="/landing/home" className="flex items-center space-x-1 text-sm font-medium text-hotel-fond transition-colors hover:opacity-80"
            >
              <span>Accueil</span>
            </Link>
            <Link
              href="/landing/about" className="text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
            >
              Apropos
            </Link>
            <Link
              href="/landing/service" className="text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
            >
              Services
            </Link>
            <Link
              href="/landing/rooms" className="text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
            >
              Hotels
            </Link>
            <Link
              href="/landing/cotact" className="text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
            >
              Contact
            </Link>

          </div>

          {/* Right side buttons */}
          <div className="hidden items-center space-x-3 lg:flex text-hotel-fond">
            <Button
              variant="ghost"
              size="sm"
              className="relative"
            >
              <Globe className="h-4 w-4" />
              <span className="ml-2">EN</span>
            </Button>

            <Button
              size="sm"
              className="font-semibold bg-hotel-accent text-hotel-fond"
            ><User className="h-4 w-4" />
              Se connectez
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              className="text-hotel-fond"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link href="/landing/home" className="flex items-center space-x-2 text-sm font-medium text-hotel-fond transition-colors hover:opacity-80"
              >
                <span>Accueil</span>
              </Link>
              <Link
                href="/landing/about" className="flex items-center space-x-2 text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
              >
                Apropos
              </Link>
              <Link
                href="/landing/service" className="flex items-center space-x-2 text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
              >
                Services
              </Link>
              <Link
                href="/landing/rooms" className="flex items-center space-x-2 text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
              >
                Hotels
              </Link>
              <Link
                href="/landing/cotact" className="flex items-center space-x-2 text-sm font-medium transition-colors hover:opacity-80 text-hotel-fond"
              >
                Contact
              </Link>
              <div className="mt-4 space-y-2 px-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  style={{
                    borderColor: "var(--hotel-accent)",
                    color: "var(--hotel-foreground)"
                  }}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  English
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  style={{
                    borderColor: "var(--hotel-accent)",
                    color: "var(--hotel-foreground)"
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button
                  className="w-full"
                  style={{
                    backgroundColor: "var(--hotel-accent)",
                    color: "var(--hotel-primary)"
                  }}
                >
                  List your property
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}