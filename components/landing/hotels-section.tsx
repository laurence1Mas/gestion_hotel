"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, ArrowRight } from "lucide-react";

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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3 h-3" />,
  parking: <Car className="w-3 h-3" />,
  restaurant: <Coffee className="w-3 h-3" />,
};

export function HotelsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between items-center gap-4 mb-12">
          <div className="space-y-2 text-start">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Nos sélections d’hôtels
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Découvrez notre sélection d’établissements soigneusement choisis
              pour vous offrir un séjour confortable, agréable et inoubliable.
            </p>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
              <Card className="group bg-background overflow-hidden rounded-none border-0 shadow-sm  p-0 hover:scale-102   transition-all duration-300 h-full">
                <div className="relative overflow-hidden aspect-4/3 ">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-none object-center transition-transform duration-500"
                  />
                  {hotel.featured && (
                    <Badge className="absolute top-4 left-4 rounded-full bg-yellow-500 text-accent-foreground">
                      Populaire
                    </Badge>
                  )}
                </div>
                <CardContent className="pb-6 px-4">
                  <div className="flex items-start justify-between gap-2 mb-0">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="w-3 h-3 " />
                        {hotel.city}
                      </div>
                      <div className=" py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500  fill-yellow-500" />
                        <span className="font-semibold text-sm">
                          {hotel.rating}
                        </span>
                        <span className="text-xs text-muted-foreground ">
                          ({hotel.reviews}) notes
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <p className="font-serif text-xl font-bold text-secondary">
                        ${hotel.price}{" "}
                        <span className="text-xs text-muted-foreground font-light">
                          par nuit
                        </span>
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {hotel.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
                          title={amenity}
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
        <Button asChild variant="outline" className=" w-fit">
          <Link href="/hotels">
            Découvrez tous les hôtels
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
