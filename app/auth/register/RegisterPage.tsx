"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Hotel,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Loader2,
  Phone,
  MapPin,
  Building,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("type") === "hotel" ? "hotel" : "client";

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [clientForm, setClientForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [hotelForm, setHotelForm] = useState({
    hotelName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: "",
    subscription: "",
  });

  const handleClientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (clientForm.password !== clientForm.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/dashboard/client");
  };

  const handleHotelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hotelForm.password !== hotelForm.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/dashboard/hotel");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-muted flex items-center justify-center p-4 py-8">
      <div className="w-full max-w-lg">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        <Card className="rounded-3xl border-border shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Hotel className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="font-serif text-2xl">
              Créer un Compte
            </CardTitle>
            <CardDescription>
              Rejoignez Zua Place aujourd&apos;hui
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 rounded-full mb-6">
                <TabsTrigger
                  value="client"
                  className="rounded-full flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  Client
                </TabsTrigger>
                <TabsTrigger
                  value="hotel"
                  className="rounded-full flex items-center gap-2"
                >
                  <Hotel className="w-4 h-4" />
                  Hôtel
                </TabsTrigger>
              </TabsList>

              {/* Client Registration */}
              <TabsContent value="client">
                <form onSubmit={handleClientSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom Complet</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Jean Dupont"
                        className="rounded-full pl-11"
                        value={clientForm.name}
                        onChange={(e) =>
                          setClientForm({ ...clientForm, name: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        className="rounded-full pl-11"
                        value={clientForm.email}
                        onChange={(e) =>
                          setClientForm({
                            ...clientForm,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Téléphone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+243 99 123 4567"
                        className="rounded-full pl-11"
                        value={clientForm.phone}
                        onChange={(e) =>
                          setClientForm({
                            ...clientForm,
                            phone: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mot de passe</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="rounded-full pl-11 pr-11"
                        value={clientForm.password}
                        onChange={(e) =>
                          setClientForm({
                            ...clientForm,
                            password: e.target.value,
                          })
                        }
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="rounded-full pl-11"
                        value={clientForm.confirmPassword}
                        onChange={(e) =>
                          setClientForm({
                            ...clientForm,
                            confirmPassword: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full h-12 bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Création...
                      </>
                    ) : (
                      "Créer mon Compte"
                    )}
                  </Button>
                </form>
              </TabsContent>

              {/* Hotel Registration */}
              <TabsContent value="hotel">
                <form onSubmit={handleHotelSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Nom de l&apos;Hôtel
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Hôtel Ituri Palace"
                        className="rounded-full pl-11"
                        value={hotelForm.hotelName}
                        onChange={(e) =>
                          setHotelForm({
                            ...hotelForm,
                            hotelName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="email"
                          placeholder="hotel@email.com"
                          className="rounded-full pl-11"
                          value={hotelForm.email}
                          onChange={(e) =>
                            setHotelForm({
                              ...hotelForm,
                              email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Téléphone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="tel"
                          placeholder="+243..."
                          className="rounded-full pl-11"
                          value={hotelForm.phone}
                          onChange={(e) =>
                            setHotelForm({
                              ...hotelForm,
                              phone: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ville</label>
                      <Select
                        value={hotelForm.city}
                        onValueChange={(value) =>
                          setHotelForm({ ...hotelForm, city: value })
                        }
                      >
                        <SelectTrigger className="rounded-full">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bunia">Bunia</SelectItem>
                          <SelectItem value="mahagi">Mahagi</SelectItem>
                          <SelectItem value="aru">Aru</SelectItem>
                          <SelectItem value="djugu">Djugu</SelectItem>
                          <SelectItem value="irumu">Irumu</SelectItem>
                          <SelectItem value="mambasa">Mambasa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Adresse</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Rue..."
                          className="rounded-full pl-11"
                          value={hotelForm.address}
                          onChange={(e) =>
                            setHotelForm({
                              ...hotelForm,
                              address: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Abonnement</label>
                    <Select
                      value={hotelForm.subscription}
                      onValueChange={(value) =>
                        setHotelForm({ ...hotelForm, subscription: value })
                      }
                    >
                      <SelectTrigger className="rounded-full">
                        <SelectValue placeholder="Choisir un plan..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">
                          Mensuel - $20/mois
                        </SelectItem>
                        <SelectItem value="quarterly">
                          Trimestriel - $50/3 mois
                        </SelectItem>
                        <SelectItem value="yearly">Annuel - $180/an</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Mot de passe
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="rounded-full pl-11 pr-11"
                          value={hotelForm.password}
                          onChange={(e) =>
                            setHotelForm({
                              ...hotelForm,
                              password: e.target.value,
                            })
                          }
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Confirmer</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="rounded-full pl-11"
                          value={hotelForm.confirmPassword}
                          onChange={(e) =>
                            setHotelForm({
                              ...hotelForm,
                              confirmPassword: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full h-12 bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Création...
                      </>
                    ) : (
                      "Inscrire Mon Hôtel"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Déjà un compte?{" "}
              <Link
                href="/auth/login"
                className="text-primary font-medium hover:underline"
              >
                Se connecter
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
