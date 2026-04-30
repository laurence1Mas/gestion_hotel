"use client";

import { Building, CalendarCheck, Headset, Star } from "lucide-react";

export function Counters() {
  const stats = [
    { number: "120+", label: "Hôtels partenaires", icon: Building },
    { number: "5 000+", label: "Réservations", icon: CalendarCheck },
    { number: "4.7/5", label: "Satisfaction clients", icon: Star },
    { number: "24/7", label: "Support disponible", icon: Headset },
  ];

  return (
    <section className="relative -mt-12 z-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-foreground border border-white/10 py-8 text-white shadow-xl">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex flex-col items-center gap-4">
                <Icon className="w-8 h-8 text-primary" />

                <p className="text-2xl md:text-4xl font-bold">{item.number}</p>

                <p className="text-sm text-white/70 text-center">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
