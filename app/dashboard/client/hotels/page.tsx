"use client";

import { useMemo, useState } from "react";
import { hotels } from "@/lib/hotelData";
import Link from "next/link";
import Image from "next/image";

export default function HotelsPage() {
  const [city, setCity] = useState("Tous");

  // filtre les hotels
  const filteredHotels = useMemo(() => {
    if (city === "Tous") return hotels;
    return hotels.filter((h) => h.city === city);
  }, [city]);

  // récupérer villes uniques
  const cities = ["Tous", ...new Set(hotels.map((h) => h.city))];

  return (
    <div className="px-4 md:px-10 py-6 overflow-x-hidden">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Hôtels disponibles</h1>
        <p className="text-muted-foreground">Trouve ton séjour parfait</p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap justify-start items-center gap-2 mb-4">
        {cities.map((c) => (
          <button
            key={c}
            onClick={() => setCity(c)}
            className={` flex-1 md:flex-0  px-4 py-2 rounded-full text-sm border transition ${
              city === c ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((hotel) => (
          <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
            <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer bg-white">
              {/* IMAGE */}
              <div className="relative w-full h-52">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover"
                />

                {/* badge */}
                {hotel.featured && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="font-semibold text-lg line-clamp-1">
                  {hotel.name}
                </h2>

                <p className="text-sm text-muted-foreground">{hotel.city}</p>

                <p className="text-sm line-clamp-2">{hotel.description}</p>

                {/* footer */}
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold">
                    ${hotel.price}
                    <span className="text-sm font-normal"> / nuit</span>
                  </span>

                  <span className="text-sm">
                    ⭐ {hotel.rating} ({hotel.reviews})
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
