"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Star, Wifi, Car, Coffee, Phone, Mail, ArrowLeft, Users, BedDouble, Calendar, Check, Tv, Wind, ChevronLeft, ChevronRight} from "lucide-react"
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"

// Mock data - in production this would come from an API
const hotelsData: Record<string, {
  id: number
  name: string
  city: string
  address: string
  rating: number
  reviews: number
  description: string
  phone: string
  email: string
  images: string[]
  amenities: string[]
  rooms: {
    id: number
    type: string
    price: number
    capacity: number
    description: string
    amenities: string[]
    image: string
    available: boolean
  }[]
}> = {
  "1": {
    id: 1,
    name: "Hôtel Ituri Palace",
    city: "Bunia",
    address: "Avenue Principale, Centre-Ville, Bunia",
    rating: 4.8,
    reviews: 124,
    description: "L'Hôtel Ituri Palace est le premier établissement de luxe de Bunia, offrant une expérience hôtelière exceptionnelle au coeur de la province de l'Ituri. Notre établissement combine élégance moderne et hospitalité africaine authentique pour vous garantir un séjour inoubliable. Profitez de nos chambres spacieuses, de notre restaurant gastronomique et de notre service attentionné.",
    phone: "+243 99 123 4567",
    email: "contact@ituripalace.cd",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
    ],
    amenities: ["wifi", "parking", "restaurant", "tv", "ac"],
    rooms: [
      {
        id: 1,
        type: "Chambre Simple",
        price: 45,
        capacity: 1,
        description: "Chambre confortable pour voyageur solo avec lit simple et salle de bain privée.",
        amenities: ["wifi", "tv", "ac"],
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 2,
        type: "Chambre Double",
        price: 65,
        capacity: 2,
        description: "Chambre spacieuse avec lit double king size, coin salon et vue sur la ville.",
        amenities: ["wifi", "tv", "ac"],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 3,
        type: "Suite Deluxe",
        price: 85,
        capacity: 2,
        description: "Suite luxueuse avec salon séparé, lit king size, minibar et vue panoramique.",
        amenities: ["wifi", "tv", "ac", "parking"],
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
        available: true,
      },
      {
        id: 4,
        type: "Suite Premium",
        price: 120,
        capacity: 4,
        description: "Notre meilleure suite avec deux chambres, jacuzzi, service VIP et petit-déjeuner inclus.",
        amenities: ["wifi", "tv", "ac", "parking", "restaurant"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
        available: false,
      },
    ],
  },
}

// Add other hotels with similar structure
for (let i = 2; i <= 8; i++) {
  hotelsData[i.toString()] = {
    ...hotelsData["1"],
    id: i,
    name: `Hôtel ${i}`,
  }
}

const amenityDetails: Record<string, { label: string; icon: React.ReactNode }> = {
  wifi: { label: "WiFi Gratuit", icon: <Wifi className="w-5 h-5" /> },
  parking: { label: "Parking", icon: <Car className="w-5 h-5" /> },
  restaurant: { label: "Restaurant", icon: <Coffee className="w-5 h-5" /> },
  tv: { label: "TV", icon: <Tv className="w-5 h-5" /> },
  ac: { label: "Climatisation", icon: <Wind className="w-5 h-5" /> },
}

export default function HotelDetailPage() {
  const params = useParams()
  const router = useRouter()
  const hotelId = params.id as string
  const hotel = hotelsData[hotelId] || hotelsData["1"]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState<typeof hotel.rooms[0] | null>(null)
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
  })

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Button 
            variant="ghost" 
            className="rounded-full"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </div>

        {/* Image Gallery */}
        <section className="container mx-auto px-4 md:px-6 pb-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="aspect-[16/9] md:aspect-[21/9]">
              <img 
                src={hotel.images[currentImageIndex]}
                alt={`${hotel.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
            </div>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {hotel.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-background" : "bg-background/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Hotel Info */}
        <section className="container mx-auto px-4 md:px-6 pb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Hotel Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full bg-primary/10 text-primary">
                    <Star className="w-3 h-3 mr-1 fill-primary" />
                    {hotel.rating} ({hotel.reviews} avis)
                  </Badge>
                  <Badge variant="secondary" className="rounded-full">
                    {hotel.rooms.length} chambres
                  </Badge>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {hotel.name}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.address}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-semibold">À propos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {hotel.description}
                </p>
              </div>

              {/* Équipements */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-semibold">Équipements</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity) => {
                    const detail = amenityDetails[amenity]
                    return (
                      <div key={amenity} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                        <div className="text-primary">{detail.icon}</div>
                        <span className="text-sm font-medium">{detail.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Rooms */}
              <div className="space-y-4">
                <h2 className="font-serif text-xl font-semibold">Nos Chambres</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {hotel.rooms.map((room) => (
                    <Card key={room.id} className="rounded-2xl overflow-hidden">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={room.image}
                          alt={room.type}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{room.type}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span>{room.capacity} personne(s)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-serif text-xl font-bold text-primary">${room.price}</p>
                            <p className="text-xs text-muted-foreground">/nuit</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {room.description}
                        </p>
                        <div className="flex gap-1">
                          {room.amenities.map((amenity) => (
                            <div
                              key={amenity}
                              className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
                              title={amenityDetails[amenity]?.label}
                            >
                              {amenityDetails[amenity]?.icon}
                            </div>
                          ))}
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              className="w-full rounded-full bg-primary" 
                              disabled={!room.available}
                              onClick={() => setSelectedRoom(room)}
                            >
                              {room.available ? "Réserver" : "Indisponible"}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle className="font-serif">Réserver - {room.type}</DialogTitle>
                              <DialogDescription>
                                {hotel.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Check-in</label>
                                  <Input
                                    type="date"
                                    className="rounded-full"
                                    value={bookingData.checkIn}
                                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Check-out</label>
                                  <Input
                                    type="date"
                                    className="rounded-full"
                                    value={bookingData.checkOut}
                                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Voyageurs</label>
                                <Select 
                                  value={bookingData.guests} 
                                  onValueChange={(value) => setBookingData({...bookingData, guests: value})}
                                >
                                  <SelectTrigger className="rounded-full">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {[...Array(room.capacity)].map((_, i) => (
                                      <SelectItem key={i+1} value={(i+1).toString()}>
                                        {i+1} personne(s)
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="p-4 rounded-xl bg-muted space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Prix par nuit</span>
                                  <span>${room.price}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Acompte (40%)</span>
                                  <span className="font-semibold text-primary">${Math.round(room.price * 0.4)}</span>
                                </div>
                              </div>
                              <Button 
                                className="w-full rounded-full bg-primary" 
                                onClick={() => router.push("/auth/login")}
                              >
                                Continuer la Réservation
                              </Button>
                              <p className="text-xs text-center text-muted-foreground">
                                Vous devez être connecté pour finaliser la réservation
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Card */}
            <div className="space-y-6">
              <Card className="rounded-2xl sticky top-24">
                <CardHeader>
                  <CardTitle className="font-serif">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-medium">{hotel.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{hotel.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Adresse</p>
                      <p className="font-medium">{hotel.address}</p>
                    </div>
                  </div>
                  <Button className="w-full rounded-full bg-primary mt-4">
                    <Phone className="w-4 h-4 mr-2" />
                    Appeler Maintenant
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
