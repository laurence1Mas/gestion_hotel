"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Users, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [searchCity, setSearchCity] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [guests, setGuests] = useState("2")

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Découvrez les{" "}
              <span className="text-primary">meilleurs hôtels</span>{" "}
              de l&apos;Ituri
            </h1>
            
            {/* <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Réservez facilement votre chambre dans les plus beaux établissements de la région. 
              Paiement sécurisé via Orange Money, M-Pesa et Airtel Money.
            </p> */}

            {/* Search Box */}
            <div className="bg-card rounded-3xl p-4 md:p-6 shadow-lg border border-border max-w-2xl mx-auto lg:mx-0">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    Ville
                  </label>
                  <Input
                    placeholder="Bunia, Mahagi..."
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="rounded-full border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    Date d&apos;arrivée
                  </label>
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="rounded-full border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    Voyageurs
                  </label>
                  <Input
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="rounded-full border-border"
                  />
                </div>
              </div>
              <Button asChild className="w-full mt-4 rounded-full h-12 text-base bg-primary hover:bg-primary/90">
                <Link href={`/hotels?city=${searchCity}&date=${checkIn}&guests=${guests}`}>
                  <Search className="w-5 h-5 mr-2" />
                  Rechercher
                </Link>
              </Button>
            </div>
          </div>
          {/* Right Content - Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="h-64 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop')] bg-cover bg-center" />
                </div>
                <div className="h-48 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
