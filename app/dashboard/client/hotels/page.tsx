import React from "react";
import ListeHotel from "@/components/feature/listeHotel";
import { hotels } from "@/lib/hotelData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function page({ params }: { params: { id: string } }) {
  const hotel = hotels.find((h) => h.id === Number(params.id));

  // if (!hotel)
  //   return (
  //     <h1>Aucun Hotel disponible, veiller contacter le service client !</h1>
  //   );
  return (
    <div>
      <div>
        <h1 className="font-bold text-background-forground text-3xl">
          Hôtels disponibles
        </h1>
        <p>
          Chaque detail est bien pensé pour vous offrir un séjour de votre goût
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotels/${hotel.id}`} className="flex ">
              <div key={hotel.id}>
                <Image
                  src={hotel.image}
                  alt={hotel.image}
                  width={100}
                  height={100}
                />
                <div>
                  <h2>{hotel.name}</h2>
                  <p>{hotel.city}</p>
                  <p>{hotel.description}</p>
                  <div>
                    <h2>{hotel.price} par nuit</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
