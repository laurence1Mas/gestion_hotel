"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Hotel } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
            <Hotel className="w-5 h-5" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground">IturiStay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="/hotels" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Hôtels
          </Link>
          <Link href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full">
                <User className="w-4 h-4 mr-2" />
                Connexion
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/auth/login" className="w-full cursor-pointer">
                  Client
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/auth/login?type=hotel" className="w-full cursor-pointer">
                  Responsable Hôtel
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
            <Link href="/auth/register">
              {"S'inscrire"}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <Link 
              href="/" 
              className="px-4 py-3 rounded-full text-sm font-medium hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/hotels" 
              className="px-4 py-3 rounded-full text-sm font-medium hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hôtels
            </Link>
            <Link 
              href="#features" 
              className="px-4 py-3 rounded-full text-sm font-medium hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-3 rounded-full text-sm font-medium hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button asChild variant="outline" className="rounded-full w-full">
                <Link href="/auth/login">Connexion Client</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full w-full">
                <Link href="/auth/login?type=hotel">Connexion Hôtel</Link>
              </Button>
              <Button asChild className="rounded-full w-full bg-primary">
                <Link href="/auth/register">{"S'inscrire"}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
