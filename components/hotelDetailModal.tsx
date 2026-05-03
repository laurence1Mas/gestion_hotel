// components/HotelDetailView.tsx
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Star, Phone, Mail, Users, Tv, Wind, Wifi, Car, Coffee, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// On définit ce que le composant doit recevoir
interface HotelDetailViewProps {
  hotel: any;           // Les données de l'hôtel choisi
  onClose: () => void;  // La fonction pour fermer la vue
}

export function HotelDetailView({ hotel, onClose }: HotelDetailViewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingData, setBookingData] = useState({ checkIn: "", checkOut: "", guests: "1" });

  if (!hotel) return null;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);

  return (
    <div className="space-y-6 pb-10">
      {/* Bouton Fermer (L'X de la boîte) */}
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" onClick={onClose} className="rounded-full">
          <X className="mr-2 w-4 h-4" /> Fermer
        </Button>
      </div>

      {/* Galerie d'images */}
      <div className="relative rounded-3xl aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img src={hotel.images[currentImageIndex]} className="w-full h-full object-cover" />
        <button onClick={prevImage} className="top-1/2 left-4 absolute bg-white/80 p-2 rounded-full -translate-y-1/2"><ChevronLeft /></button>
        <button onClick={nextImage} className="top-1/2 right-4 absolute bg-white/80 p-2 rounded-full -translate-y-1/2"><ChevronRight /></button>
      </div>

      {/* Infos de l'hôtel  */}
      <div className="gap-8 grid lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <h1 className="font-serif font-bold text-3xl">{hotel.name}</h1>
          <p className="text-muted-foreground">{hotel.description}</p>
          
          {/* Liste des chambres */}
          <div className="gap-4 grid sm:grid-cols-2">
            {hotel.rooms.map((room: any) => (
              <Card key={room.id} className="rounded-2xl overflow-hidden">
                <img src={room.image} className="w-full h-32 object-cover" />
                <CardContent className="p-4">
                  <h4 className="font-bold">{room.type}</h4>
                  <p className="font-bold text-primary">${room.price}/nuit</p>
                  <Button className="mt-2 rounded-full w-full" size="sm">Réserver</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact à droite */}
        <Card className="top-4 sticky p-6 rounded-2xl h-fit">
          <h3 className="mb-4 font-bold">Contact</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {hotel.phone}</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {hotel.email}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}