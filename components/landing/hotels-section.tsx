"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Coffee, MapPin, Star, Wifi } from "lucide-react";
import Link from "next/link";

const hotels = [
  {
    id: 1,
    name: "Hôtel Ituri Palace",
    city: "Bunia",
    rating: 4.8,
    reviews: 124,
    price: 85,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking", "restaurant"],
    featured: true,
  },
  {
    id: 2,
    name: "Grand Hôtel du Lac",
    city: "Bunia",
    rating: 4.6,
    reviews: 89,
    price: 65,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
    amenities: ["wifi", "restaurant"],
    featured: false,
  },
  {
    id: 3,
    name: "Résidence Mahagi",
    city: "Mahagi",
    rating: 4.5,
    reviews: 67,
    price: 50,
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking"],
    featured: false,
  },
  {
    id: 4,
    name: "Auberge de l'Est",
    city: "Aru",
    rating: 4.3,
    reviews: 45,
    price: 40,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    amenities: ["wifi", "restaurant"],
    featured: false,
  },
  {
    id: 5,
    name: "Hôtel Sunrise",
    city: "Djugu",
    rating: 4.7,
    reviews: 98,
    price: 75,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking", "restaurant"],
    featured: true,
  },
  {
    id: 6,
    name: "Villa Tropicale",
    city: "Irumu",
    rating: 4.4,
    reviews: 56,
    price: 55,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking"],
    featured: false,
  },
  {
    id: 7,
    name: "Hôtel Central Irumu",
    city: "Irumu",
    rating: 4.2,
    reviews: 34,
    price: 45,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    amenities: ["wifi"],
    featured: false,
  },
  {
    id: 8,
    name: "Lodge Mambasa",
    city: "Mambasa",
    rating: 4.6,
    reviews: 42,
    price: 60,
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking", "restaurant"],
    featured: true,
  },
];
const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3 h-3" />,
  parking: <Car className="w-3 h-3" />,
  restaurant: <Coffee className="w-3 h-3" />,
};

export function HotelsSection() {
  return (
    <section className="pb-12 pt-28 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            Prêt à trouver votre prochain séjour idéal ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Rejoignez notre plateforme et accédez à des centaines d’hôtels
            soigneusement sélectionnés pour votre confort.
          </p>
        </div>
        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
              <Card className="group overflow-hidden border-0 shadow-sm hover:-translate-y-1 transition-all duration-300 h-full">
                {/* IMAGE */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {hotel.featured && (
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                      Populaire
                    </Badge>
                  )}
                </div>

                {/* CONTENT */}
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition">
                      {hotel.name}
                    </h3>

                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-3 h-3" />
                      {hotel.city}
                    </div>

                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">
                        {hotel.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({hotel.reviews})
                      </span>
                    </div>
                  </div>

                  {/* PRICE + AMENITIES */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-primary font-semibold">
                      ${hotel.price}
                      <span className="text-xs text-muted-foreground font-normal ml-1">
                        /nuit
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {hotel.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="w-7 h-7 rounded-full bg-muted flex items-center justify-center"
                        >
                          {amenityIcons[amenity]}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
