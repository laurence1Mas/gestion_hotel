import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/primary_logo.png"
                alt="primary logo Zua Place"
                width={180}
                height={70}
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              La plateforme de réservation d&apos;hôtels en province
              d&apos;Ituri. Découvrez les meilleurs établissements de la région.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Liens Rapides</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Accueil
              </Link>
              <Link
                href="/hotels"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Tous les Hôtels
              </Link>
              <Link
                href="/auth/register"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Créer un Compte
              </Link>
              <Link
                href="/auth/register?type=hotel"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Inscrire mon Hôtel
              </Link>
            </nav>
          </div>

          {/* Villes */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">
              Villes Populaires
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/hotels?city=bunia"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Bunia
              </Link>
              <Link
                href="/hotels?city=mahagi"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Mahagi
              </Link>
              <Link
                href="/hotels?city=aru"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Aru
              </Link>
              <Link
                href="/hotels?city=djugu"
                className="text-background/70 hover:text-primary transition-colors text-sm"
              >
                Djugu
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-background flex-shrink-0" />
                <span>Bunia, Province de l&apos;Ituri, RDC</span>
              </div>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-background flex-shrink-0" />
                <span>+243 99 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-background flex-shrink-0" />
                <span>contact@ituristay.cd</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} Zua Place. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Politique de Confidentialité
            </Link>
            <Link
              href="#"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Conditions d&apos;Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
