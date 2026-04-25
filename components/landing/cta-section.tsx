import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hotel, Users } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-24  text-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* For Clients */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Réservez Votre Chambre Maintenant
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
              Créez votre compte gratuitement et accédez à des centaines de
              chambres disponibles dans toute la province de l&apos;Ituri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="default" variant="default">
                <Link href="/auth/register">
                  Créer un Compte
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="default" variant="outline">
                <Link href="/hotels">Voir les Hôtels</Link>
              </Button>
            </div>
          </div>

          {/* For Hotels */}
          <div className="text-primary p-8 space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Inscrivez Votre Établissement
            </h3>
            <p className="text-muted-foreground">
              Rejoignez notre plateforme et augmentez la visibilité de votre
              hôtel. Gérez facilement vos chambres et réservations.
            </p>
            <ul className="space-y-3">
              {[
                "Gestion simplifiée des réservations",
                "Tableau de bord intuitif",
                "Paiements sécurisés",
                "Support dédié",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-muted-foreground "
                >
                  <div className="w-5 h-5 rounded-full bg-muted-foreground flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground text-xs">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="default"
              variant="outline"
              className="w-full rounded-none"
            >
              <Link href="/auth/register?type=hotel">
                Inscrire Mon Hôtel
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
