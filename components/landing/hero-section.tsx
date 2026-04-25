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
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&auto=format&fit=crop')",
        }}
      />
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40" />{" "}
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white flex flex-col items-center justify-center space-y-6">
        <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Trouvez le lieu idéal pour votre prochain séjour.
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
          Découvrez des établissements soigneusement sélectionnés pour votre
          confort dans un cadre élégant et raffiné.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {/* Primary Button */}
          <Link
            href={`/hotels?city=${searchCity}&date=${checkIn}&guests=${guests}`}
          >
            <Button className="text-base bg-white text-primary hover:bg-white/90">
              Explorer les hôtels
            </Button>
          </Link>

          {/* Secondary Button */}
          <Link href="/contact">
            <Button
              variant="outline"
              className="text-base border-white text-white hover:bg-white/10 "
            >
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
