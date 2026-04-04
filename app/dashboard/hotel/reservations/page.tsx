"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  CalendarDays, 
  Users, 
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Clock,
  Check,
  X
} from "lucide-react"

const reservations = [
  {
    id: 1,
    client: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "+243 99 111 2222",
    room: "Suite Deluxe",
    roomNumber: "301",
    checkIn: "15 Avril 2026",
    checkOut: "18 Avril 2026",
    status: "confirmed",
    price: 255,
    acompte: 100,
    guests: 2,
    createdAt: "10 Avril 2026",
  },
  {
    id: 2,
    client: "Marie Kabila",
    email: "marie.k@email.com",
    phone: "+243 99 333 4444",
    room: "Chambre Double",
    roomNumber: "205",
    checkIn: "16 Avril 2026",
    checkOut: "17 Avril 2026",
    status: "pending",
    price: 65,
    acompte: 25,
    guests: 2,
    createdAt: "12 Avril 2026",
  },
  {
    id: 3,
    client: "Pierre Mwamba",
    email: "pierre.m@email.com",
    phone: "+243 99 555 6666",
    room: "Chambre Simple",
    roomNumber: "102",
    checkIn: "17 Avril 2026",
    checkOut: "20 Avril 2026",
    status: "confirmed",
    price: 120,
    acompte: 50,
    guests: 1,
    createdAt: "11 Avril 2026",
  },
  {
    id: 4,
    client: "Sophie Kalala",
    email: "sophie.k@email.com",
    phone: "+243 99 777 8888",
    room: "Suite Premium",
    roomNumber: "401",
    checkIn: "18 Avril 2026",
    checkOut: "22 Avril 2026",
    status: "pending",
    price: 400,
    acompte: 150,
    guests: 3,
    createdAt: "13 Avril 2026",
  },
  {
    id: 5,
    client: "Paul Kisangani",
    email: "paul.k@email.com",
    phone: "+243 99 999 0000",
    room: "Chambre Double",
    roomNumber: "208",
    checkIn: "10 Avril 2026",
    checkOut: "12 Avril 2026",
    status: "completed",
    price: 130,
    acompte: 130,
    guests: 2,
    createdAt: "5 Avril 2026",
  },
  {
    id: 6,
    client: "Anne Mbeki",
    email: "anne.m@email.com",
    phone: "+243 99 123 4567",
    room: "Suite Deluxe",
    roomNumber: "303",
    checkIn: "20 Avril 2026",
    checkOut: "21 Avril 2026",
    status: "cancelled",
    price: 85,
    acompte: 0,
    guests: 2,
    createdAt: "8 Avril 2026",
  },
]

const statusConfig = {
  confirmed: { 
    label: "Confirmé", 
    icon: CheckCircle2, 
    class: "bg-primary/10 text-primary" 
  },
  pending: { 
    label: "En attente", 
    icon: AlertCircle, 
    class: "bg-accent/10 text-accent" 
  },
  completed: { 
    label: "Terminé", 
    icon: Clock, 
    class: "bg-muted text-muted-foreground" 
  },
  cancelled: { 
    label: "Annulé", 
    icon: XCircle, 
    class: "bg-destructive/10 text-destructive" 
  },
}

type ReservationStatus = keyof typeof statusConfig

export default function HotelReservationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredReservations = reservations.filter(r => {
    const matchesTab = activeTab === "all" || r.status === activeTab
    const matchesSearch = r.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.room.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.roomNumber.includes(searchQuery)
    return matchesTab && matchesSearch
  })

  const stats = {
    total: reservations.length,
    pending: reservations.filter(r => r.status === "pending").length,
    confirmed: reservations.filter(r => r.status === "confirmed").length,
    revenue: reservations.filter(r => r.status !== "cancelled").reduce((sum, r) => sum + r.acompte, 0),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="font-serif text-2xl font-bold">Gestion des Réservations</h2>
        <p className="text-muted-foreground">Suivez et gérez toutes les réservations de votre hôtel</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Réservations</p>
            <p className="font-serif text-2xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">En Attente</p>
            <p className="font-serif text-2xl font-bold text-accent">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Confirmées</p>
            <p className="font-serif text-2xl font-bold text-primary">{stats.confirmed}</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Acomptes Reçus</p>
            <p className="font-serif text-2xl font-bold text-chart-4">${stats.revenue}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher par client, chambre..."
          className="rounded-full pl-11"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs & List */}
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="rounded-full">
          <TabsTrigger value="all" className="rounded-full">Toutes</TabsTrigger>
          <TabsTrigger value="pending" className="rounded-full">En attente</TabsTrigger>
          <TabsTrigger value="confirmed" className="rounded-full">Confirmées</TabsTrigger>
          <TabsTrigger value="completed" className="rounded-full">Terminées</TabsTrigger>
          <TabsTrigger value="cancelled" className="rounded-full">Annulées</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredReservations.length > 0 ? (
            <div className="space-y-4">
              {filteredReservations.map((reservation) => {
                const status = statusConfig[reservation.status as ReservationStatus]
                const StatusIcon = status.icon
                return (
                  <Card key={reservation.id} className="rounded-2xl">
                    <CardContent className="p-5">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Client Info */}
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{reservation.client}</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3" />
                                {reservation.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                {reservation.phone}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Room Info */}
                        <div className="flex-1">
                          <p className="font-medium">{reservation.room} - {reservation.roomNumber}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <CalendarDays className="w-3 h-3" />
                            {reservation.checkIn} - {reservation.checkOut}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {reservation.guests} personne(s)
                          </p>
                        </div>

                        {/* Price Info */}
                        <div className="text-right">
                          <Badge className={`rounded-full mb-2 ${status.class}`}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {status.label}
                          </Badge>
                          <div className="space-y-1">
                            <p className="text-sm text-muted-foreground">
                              Total: <span className="font-semibold text-foreground">${reservation.price}</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Acompte: <span className="font-semibold text-primary">${reservation.acompte}</span>
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        {reservation.status === "pending" && (
                          <div className="flex gap-2 lg:flex-col">
                            <Button size="sm" className="rounded-full bg-primary flex-1">
                              <Check className="w-4 h-4 mr-1" />
                              Confirmer
                            </Button>
                            <Button size="sm" variant="outline" className="rounded-full text-destructive flex-1">
                              <X className="w-4 h-4 mr-1" />
                              Refuser
                            </Button>
                          </div>
                        )}
                        {reservation.status === "confirmed" && (
                          <Button size="sm" variant="outline" className="rounded-full">
                            Terminer
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <Card className="rounded-2xl">
              <CardContent className="py-12 text-center">
                <CalendarDays className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">Aucune réservation</h3>
                <p className="text-muted-foreground">
                  Aucune réservation dans cette catégorie.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
