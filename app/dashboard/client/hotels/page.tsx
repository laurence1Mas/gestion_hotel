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
        <h1>Hôtels disponibles</h1>
        <p>
          Chaque detail est bien pensé pour vous offrir un séjour de votre goût
        </p>

        <div className="w-full h-auto flex flex-col md:flex-row p-8 bg-white-100">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="w-full md:w-1/2">
              <Link href={`/hotels/${hotel.id}`}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
