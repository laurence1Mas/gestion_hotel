"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Loader2, User, Hotel } from "lucide-react";

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const type = searchParams.get("type") === "hotel" ? "hotel" : "client";

  const [isLoading, setIsLoading] = useState(false);

  const [clientData, setClientData] = useState({
    name: "",
    phone: "",
  });

  const [hotelData, setHotelData] = useState({
    hotelName: "",
    city: "",
    address: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    if (type === "hotel") {
      router.replace("/dashboard/hotel");
    } else {
      router.replace("/dashboard/client");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* HEADER */}
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-2">
            {type === "hotel" ? (
              <Hotel className="w-6 h-6" />
            ) : (
              <User className="w-6 h-6" />
            )}
          </div>

          <h1 className="text-2xl font-bold">
            {type === "hotel"
              ? "Complétez votre hôtel"
              : "Complétez votre profil"}
          </h1>

          <p className="text-sm text-muted-foreground mt-1">
            Dernière étape avant de commencer
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* CLIENT */}
          {type === "client" && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom complet</label>
                <Input
                  placeholder="Jean Dupont"
                  value={clientData.name}
                  onChange={(e) =>
                    setClientData({ ...clientData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Téléphone</label>
                <Input
                  type="tel"
                  placeholder="+243..."
                  value={clientData.phone}
                  onChange={(e) =>
                    setClientData({ ...clientData, phone: e.target.value })
                  }
                  required
                />
              </div>
            </>
          )}

          {/* HOTEL */}
          {type === "hotel" && (
            <>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nom de l’hôtel</label>
                <Input
                  placeholder="Hôtel Paradise"
                  value={hotelData.hotelName}
                  onChange={(e) =>
                    setHotelData({
                      ...hotelData,
                      hotelName: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Téléphone</label>
                <Input
                  type="tel"
                  placeholder="+243..."
                  value={hotelData.phone}
                  onChange={(e) =>
                    setHotelData({
                      ...hotelData,
                      phone: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Ville</label>
                <Input
                  placeholder="Kinshasa"
                  value={hotelData.city}
                  onChange={(e) =>
                    setHotelData({
                      ...hotelData,
                      city: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Adresse</label>
                <Input
                  placeholder="Rue / quartier"
                  value={hotelData.address}
                  onChange={(e) =>
                    setHotelData({
                      ...hotelData,
                      address: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </>
          )}

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Finalisation...
              </>
            ) : (
              "Terminer"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    }>
      <OnboardingContent />
    </Suspense>
  );
}
