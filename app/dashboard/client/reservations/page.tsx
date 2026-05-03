"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Clock,
  Eye,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { mockReservations } from "@/data/mockData";

// const allReservations = [
//   {
//     id: 1,
//     hotel: "Hôtel Ituri Palace",
//     room: "Suite Deluxe",
//     roomNumber: "301",
//     checkIn: "15 Avril 2026",
//     checkOut: "18 Avril 2026",
//     status: "confirmed",
//     price: 255,
//     acompte: 100,
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
//     hotelPhone: "+243 99 123 4567",
//     hotelAddress: "Avenue Principale, Bunia",
//     guests: 2,
//   },
//   {
//     id: 2,
//     hotel: "Grand Hôtel du Lac",
//     room: "Chambre Double",
//     roomNumber: "205",
//     checkIn: "25 Mai 2026",
//     checkOut: "27 Mai 2026",
//     status: "pending",
//     price: 130,
//     acompte: 50,
//     image:
//       "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
//     hotelPhone: "+243 99 234 5678",
//     hotelAddress: "Rue du Commerce, Bunia",
//     guests: 2,
//   },
//   {
//     id: 3,
//     hotel: "Résidence Mahagi",
//     room: "Chambre Simple",
//     roomNumber: "102",
//     checkIn: "10 Février 2026",
//     checkOut: "12 Février 2026",
//     status: "completed",
//     price: 100,
//     acompte: 40,
//     image:
//       "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
//     hotelPhone: "+243 99 345 6789",
//     hotelAddress: "Centre Ville, Mahagi",
//     guests: 1,
//   },
//   {
//     id: 4,
//     hotel: "Auberge de l'Est",
//     room: "Chambre Double",
//     roomNumber: "108",
//     checkIn: "5 Janvier 2026",
//     checkOut: "6 Janvier 2026",
//     status: "cancelled",
//     price: 40,
//     acompte: 0,
//     image:
//       "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
//     hotelPhone: "+243 99 456 7890",
//     hotelAddress: "Quartier Est, Aru",
//     guests: 2,
//   },
// ];

const statusConfig = {
  confirmed: {
    label: "Confirmé",
    icon: CheckCircle2,
    class: "bg-primary/10 text-primary",
  },
  pending: {
    label: "En attente",
    icon: AlertCircle,
    class: "bg-accent/10 text-accent",
  },
  completed: {
    label: "Terminé",
    icon: Clock,
    class: "bg-muted text-muted-foreground",
  },
  cancelled: {
    label: "Annulé",
    icon: XCircle,
    class: "bg-destructive/10 text-destructive",
  },
};

type ReservationStatus = keyof typeof statusConfig;

interface Reservation {
  id: number;
  hotel: string;
  room: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: ReservationStatus;
  price: number;
  acompte: number;
  image: string;
  hotelPhone: string;
  hotelAddress: string;
  guests: number;
}

function ReservationCard({ reservation }: { reservation: Reservation }) {
  const status = statusConfig[reservation.status];
  const StatusIcon = status.icon;

  return (
    <Card className="rounded-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div
          className="w-full md:w-48 h-40 md:h-auto bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${reservation.image})` }}
        />
        <CardContent className="flex-1 p-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-3 flex-1">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{reservation.hotel}</h3>
                  <Badge className={`rounded-full ${status.class}`}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {status.label}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  {reservation.room} - Chambre {reservation.roomNumber}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarDays className="w-4 h-4" />
                  <span>
                    {reservation.checkIn} - {reservation.checkOut}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{reservation.hotelAddress}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="font-semibold text-lg text-primary">
                    ${reservation.price}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Acompte payé</p>
                  <p className="font-semibold">${reservation.acompte}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Reste à payer</p>
                  <p className="font-semibold">
                    ${reservation.price - reservation.acompte}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full flex-1 sm:flex-none"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Détails
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-serif">
                      {reservation.hotel}
                    </DialogTitle>
                    <DialogDescription>
                      Détails de votre réservation
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div
                      className="w-full h-48 rounded-xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${reservation.image})` }}
                    />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Type de chambre</p>
                        <p className="font-medium">{reservation.room}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Numéro</p>
                        <p className="font-medium">{reservation.roomNumber}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Check-in</p>
                        <p className="font-medium">{reservation.checkIn}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Check-out</p>
                        <p className="font-medium">{reservation.checkOut}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Voyageurs</p>
                        <p className="font-medium">
                          {reservation.guests} personne(s)
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Statut</p>
                        <Badge className={`rounded-full ${status.class}`}>
                          {status.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">
                          {reservation.hotelAddress}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">
                          {reservation.hotelPhone}
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              {reservation.status === "pending" && (
                <Button className="rounded-full flex-1 sm:flex-none bg-primary">
                  Payer Acompte
                </Button>
              )}
              {reservation.status === "confirmed" && (
                <Button
                  variant="outline"
                  className="rounded-full flex-1 sm:flex-none text-destructive hover:text-destructive"
                >
                  Annuler
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export default function ClientReservationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredReservations =
    activeTab === "all"
      ? mockReservations
      : mockReservations.filter((r) => r.status === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-bold">Mes Réservations</h2>
        <p className="text-muted-foreground">
          Gérez toutes vos réservations d&apos;hôtels
        </p>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="rounded-full">
          <TabsTrigger value="all" className="rounded-full">
            Toutes
          </TabsTrigger>
          <TabsTrigger value="confirmed" className="rounded-full">
            Confirmées
          </TabsTrigger>
          <TabsTrigger value="pending" className="rounded-full">
            En attente
          </TabsTrigger>
          <TabsTrigger value="completed" className="rounded-full">
            Terminées
          </TabsTrigger>
          <TabsTrigger value="cancelled" className="rounded-full">
            Annulées
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredReservations.length > 0 ? (
            <div className="space-y-4">
              {filteredReservations.map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                />
              ))}
            </div>
          ) : (
            <Card className="rounded-2xl">
              <CardContent className="py-12 text-center">
                <CalendarDays className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Aucune réservation
                </h3>
                <p className="text-muted-foreground">
                  Vous n'avez pas de réservation dans cette catégorie.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
