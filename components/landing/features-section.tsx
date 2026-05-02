import { CreditCard, Headset, Search, ShieldCheck } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      number: "Hôtels vérifiés",
      label:
        "Tous nos hôtels sont sélectionnés et vérifiés pour garantir une qualité fiable et un confort optimal.",
      icon: ShieldCheck,
    },
    {
      number: "Recherche rapide",
      label:
        "Trouvez facilement l’hôtel idéal grâce à un système de recherche rapide et simple à utiliser.",
      icon: Search,
    },
    {
      number: "Paiement sécurisé",
      label:
        "Vos paiements sont protégés par des systèmes sécurisés et fiables pour une tranquillité totale.",
      icon: CreditCard,
    },
    {
      number: "Support 24/7",
      label:
        "Notre équipe est disponible à tout moment pour vous aider avant, pendant et après votre séjour.",
      icon: Headset,
    },
  ];

  return (
    <section className="relative w-full">
      {/* IMAGE SECTION */}
      <div className="relative h-[60vh] w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center max-w-3xl">
            Pourquoi choisir notre plateforme ?
          </h2>

          {/* Paragraph */}
          <p className="mt-4 text-center text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
            Une expérience de réservation simple, rapide et sécurisée avec des
            hôtels soigneusement sélectionnés pour votre confort.
          </p>
        </div>
      </div>

      {/* FLOATING CARDS */}
      <div className="relative z-20 -mt-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-foreground border border-white/10 py-8 text-white shadow-xl">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex flex-col p-6 items-center gap-4">
                <Icon className="w-8 h-8 text-primary" />

                <p className="text-lg md:text-2xl font-bold text-center">
                  {item.number}
                </p>

                <p className="text-sm text-white/70 text-center">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
