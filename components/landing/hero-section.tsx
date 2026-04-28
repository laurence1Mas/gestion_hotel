"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export function HeroSection() {
  const [searchCity, setSearchCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/room.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center justify-center space-y-6">
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Trouvez le <span className="text-primary">lieu idéal</span> pour votre
          prochain <span className="text-primary">séjour</span>.
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
          Découvrez des établissements soigneusement sélectionnés pour votre
          confort dans un cadre élégant et raffiné.
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            href={`/hotels?city=${searchCity}&date=${checkIn}&guests=${guests}`}
          >
            <Button className="text-base bg-primary text-primary-foreground hover:bg-primary/80">
              Explorer les hôtels
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              className="text-base border-primary text-white hover:bg-white/10"
            >
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
