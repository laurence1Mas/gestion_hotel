"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] text-white">
      
      {/* Image de fond */}
      <Image
        src="/room.jpg"
        alt="Hotel"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6">

        {/* Texte Hero */}
        <div className="mt-20 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Your Dream Stay. Book Your Perfect Hotel Room Effortlessly.
          </h2>
        </div>

        {/* Barre de recherche */}
        <div className="mt-8 bg-white text-black rounded-full shadow-lg p-2 flex flex-col md:flex-row items-center gap-2">

          {/* Destination */}
          <input
            type="text"
            placeholder="Destination"
            defaultValue="Goma, DRC"
            className="px-4 py-2 rounded-full outline-none flex-1"
          />

          {/* Dates */}
          <input
            type="text"
            placeholder="Check-in / Check-out"
            defaultValue="Mar 20 - Mar 25, 2026"
            className="px-4 py-2 rounded-full outline-none flex-1"
          />

          {/* Guests */}
          <input
            type="text"
            placeholder="Guests"
            defaultValue="2 Adults, 1 Room"
            className="px-4 py-2 rounded-full outline-none flex-1"
          />

          {/* Button */}
          <Button className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold">
            Rechercher
          </Button>
        </div>

      </div>
    </section>
  );
}