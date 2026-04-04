import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Hotel, Users } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* For Clients */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">
              <Users className="w-4 h-4" />
              Pour les Voyageurs
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Réservez Votre Chambre Maintenant
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto md:mx-0">
              Créez votre compte gratuitement et accédez à des centaines de chambres 
              disponibles dans toute la province de l&apos;Ituri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/auth/register">
                  Créer un Compte
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/hotels">
                  Voir les Hôtels
                </Link>
              </Button>
            </div>
          </div>

          {/* For Hotels */}
          <div className="bg-primary-foreground/10 rounded-3xl p-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm">
              <Hotel className="w-4 h-4" />
              Pour les Hôtels
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Inscrivez Votre Établissement
            </h3>
            <p className="text-primary-foreground/80">
              Rejoignez notre plateforme et augmentez la visibilité de votre hôtel. 
              Gérez facilement vos chambres et réservations.
            </p>
            <ul className="space-y-3">
              {[
                "Gestion simplifiée des réservations",
                "Tableau de bord intuitif",
                "Paiements sécurisés",
                "Support dédié",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground text-xs">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              asChild 
              size="lg" 
              className="rounded-full w-full bg-accent text-accent-foreground hover:bg-accent/90"
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
  )
}
