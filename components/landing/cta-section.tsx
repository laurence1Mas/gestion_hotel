import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
          Réservez votre séjour parfait en quelques clics
        </h2>

        {/* Paragraph */}
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Rejoignez notre plateforme et découvrez les meilleurs hôtels,
          sélectionnés pour vous offrir confort, qualité et tranquillité
          d’esprit.
        </p>

        {/* Button */}
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/80"
        >
          <Link href="/auth/register">
            S’inscrire gratuitement
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
