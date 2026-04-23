"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import {
  Car,
  Coffee,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
    description:
      "Hôtel de luxe au coeur de Bunia avec vue panoramique sur la ville.",
    rooms: 24,
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
    description:
      "Établissement élégant près du lac avec restaurant gastronomique.",
    rooms: 18,
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
    description:
      "Résidence familiale avec chambres confortables et accueil chaleureux.",
    rooms: 12,
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
    description: "Auberge authentique offrant une expérience locale unique.",
    rooms: 8,
    featured: false,
  },
  {
    id: 5,
    name: "Hôtel Sunrise",
    city: "Bunia",
    rating: 4.7,
    reviews: 98,
    price: 75,
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking", "restaurant"],
    description:
      "Hôtel moderne avec équipements de qualité et service impeccable.",
    rooms: 20,
    featured: true,
  },
  {
    id: 6,
    name: "Villa Tropicale",
    city: "Djugu",
    rating: 4.4,
    reviews: 56,
    price: 55,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    amenities: ["wifi", "parking"],
    description: "Villa pittoresque entourée de verdure tropicale.",
    rooms: 10,
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
    description:
      "Hôtel bien situé au centre d'Irumu pour voyageurs d'affaires.",
    rooms: 15,
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
    description:
      "Lodge écologique au coeur de la nature avec activités de découverte.",
    rooms: 14,
    featured: true,
  },
];

const cities = [
  "Toutes",
  "Bunia",
  "Mahagi",
  "Aru",
  "Djugu",
  "Irumu",
  "Mambasa",
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  restaurant: <Coffee className="w-4 h-4" />,
};

export default function HotelsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Toutes");
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [sortBy, setSortBy] = useState("rating");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const filteredHotels = hotels
    .filter((hotel) => {
      const matchesSearch =
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCity =
        selectedCity === "Toutes" || hotel.city === selectedCity;
      const matchesPrice =
        hotel.price >= priceRange[0] && hotel.price <= priceRange[1];
      const matchesAmenities =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((a) => hotel.amenities.includes(a));
      return matchesSearch && matchesCity && matchesPrice && matchesAmenities;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity],
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-secondary via-background to-muted py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Trouvez Votre Hôtel Idéal
              </h1>
              <p className="text-muted-foreground">
                Explorez notre sélection d&apos;hôtels dans toute la province de
                l&apos;Ituri
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher un hôtel..."
                    className="rounded-full pl-12 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="w-full sm:w-50 sm:h-12 rounded-full pl-12 h-12 relative flex items-center">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6">
            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {filteredHotels.length}
                </span>{" "}
                hôtels trouvés
              </p>

              <div className="flex items-center gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-44 rounded-full">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Mieux notés</SelectItem>
                    <SelectItem value="price-low">Prix croissant</SelectItem>
                    <SelectItem value="price-high">Prix décroissant</SelectItem>
                    <SelectItem value="reviews">Plus d&apos;avis</SelectItem>
                  </SelectContent>
                </Select>

                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="rounded-full">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filtres
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="flex flex-col h-full p-0">
                    {/* HEADER */}
                    <div className="px-6 py-5 border-b space-y-2">
                      <SheetHeader>
                        <SheetTitle className="text-xl font-semibold">
                          Filtres
                        </SheetTitle>
                        <SheetDescription>
                          Personnalisez votre recherche
                        </SheetDescription>
                      </SheetHeader>

                      {/* ✅ COMPTEUR ICI */}
                      <p className="text-xl text-primary font-bold">
                        {filteredHotels.length} hôtel
                        {filteredHotels.length > 1 && "s"} trouvé
                        {filteredHotels.length > 1 && "s"}
                      </p>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-10">
                      {/* PRICE */}
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-base font-semibold">Budget</h4>
                          <p className="text-sm text-muted-foreground">
                            ${priceRange[0]} — ${priceRange[1]} / nuit
                          </p>
                        </div>

                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={150}
                          step={5}
                        />
                      </div>

                      {/* ✅ AMENITIES (CHECKBOX DESIGN) */}
                      <div className="space-y-4">
                        <h4 className="text-base font-semibold">Équipements</h4>

                        <div className="space-y-3">
                          {[
                            { id: "wifi", label: "WiFi" },
                            { id: "parking", label: "Parking" },
                            { id: "restaurant", label: "Restaurant" },
                          ].map((amenity) => {
                            const active = selectedAmenities.includes(
                              amenity.id,
                            );

                            return (
                              <label
                                key={amenity.id}
                                className={`flex items-center justify-between px-2 py-2 rounded-lg cursor-pointer transition
                ${active ? "bg-muted/60" : "hover:bg-muted/40"}
              `}
                              >
                                <div className="flex items-center gap-3">
                                  <Checkbox
                                    checked={active}
                                    onCheckedChange={() =>
                                      toggleAmenity(amenity.id)
                                    }
                                  />
                                  <span className="text-sm">
                                    {amenity.label}
                                  </span>
                                </div>

                                {/* petit indicateur visuel */}
                                {active && (
                                  <span className="text-xs text-primary font-medium">
                                    Actif
                                  </span>
                                )}
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* RESET */}
                      <button
                        onClick={() => {
                          setPriceRange([0, 150]);
                          setSelectedAmenities([]);
                        }}
                        className="text-sm text-muted-foreground hover:text-foreground transition text-left"
                      >
                        Réinitialiser les filtres
                      </button>
                    </div>

                    {/* FOOTER */}
                    <div className="p-5 border-t">
                      <Button
                        className="w-full rounded-full h-12 text-base"
                        onClick={() => setOpen(false)}
                      >
                        Appliquer les filtres
                      </Button>
                    </div>
                  </SheetContent>{" "}
                </Sheet>
              </div>
            </div>

            {/* Hotels Grid */}
            {filteredHotels.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredHotels.map((hotel) => (
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
                          <span className="font-semibold text-sm">
                            {hotel.rating}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({hotel.reviews})
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                              {hotel.name}
                            </h3>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm">
                              <MapPin className="w-3 h-3" />
                              {hotel.city}, Ituri
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {hotel.description}
                          </p>
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex gap-2">
                              {hotel.amenities.map((amenity) => (
                                <div
                                  key={amenity}
                                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
                                  title={amenity}
                                >
                                  {amenityIcons[amenity]}
                                </div>
                              ))}
                            </div>
                            <div className="text-right">
                              <p className="font-serif text-xl font-bold text-primary">
                                ${hotel.price}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                /nuit
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card className="rounded-3xl">
                <CardContent className="py-16 text-center">
                  <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    Aucun hôtel trouvé
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Essayez de modifier vos critères de recherche
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCity("Toutes");
                      setPriceRange([0, 150]);
                      setSelectedAmenities([]);
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
