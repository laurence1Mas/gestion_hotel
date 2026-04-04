"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Wifi, Car, Coffee, ArrowRight } from "lucide-react"

const hotels = [
  {
    id: 1,
    name: "Hôtel Ituri Palace",
    city: "Bunia",
    rating: 4.8,
    reviews: 124,
    price: 85,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    amenities: ["wifi", "restaurant"],
    featured: false,
  },
  {
    id: 5,
    name: "Hôtel Sunrise",
    city: "Bunia",
    rating: 4.7,
    reviews: 98,
    price: 75,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking", "restaurant"],
    featured: true,
  },
  {
    id: 6,
    name: "Villa Tropicale",
    city: "Djugu",
    rating: 4.4,
    reviews: 56,
    price: 55,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking"],
    featured: false,
  },
]

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-3 h-3" />,
  parking: <Car className="w-3 h-3" />,
  restaurant: <Coffee className="w-3 h-3" />,
}

export function HotelsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <Badge variant="secondary" className="rounded-full px-4 py-1">
              Nos Hôtels
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Hôtels Populaires en Ituri
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Découvrez notre sélection des meilleurs établissements de la province
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full w-fit">
            <Link href="/hotels">
              Voir tous les hôtels
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Hotels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
              <Card className="group overflow-hidden rounded-3xl border-border hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  {hotel.featured && (
                    <Badge className="absolute top-4 left-4 rounded-full bg-accent text-accent-foreground">
                      Populaire
                    </Badge>
                  )}
                  <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="font-semibold text-sm">{hotel.rating}</span>
                    <span className="text-xs text-muted-foreground">({hotel.reviews})</span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <MapPin className="w-3 h-3" />
                        {hotel.city}, Ituri
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
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
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">À partir de</p>
                      <p className="font-serif text-xl font-bold text-primary">${hotel.price}</p>
                      <p className="text-xs text-muted-foreground">/nuit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
