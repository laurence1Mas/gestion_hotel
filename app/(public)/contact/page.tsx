"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);

    // 👉 plus tard: envoyer vers backend
    alert("Message envoyé !");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-gradient-to-br from-secondary via-background to-muted py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Contactez-nous</h1>

            <p className="text-muted-foreground">
              Une question, un problème ou une suggestion ? Notre équipe est là
              pour vous aider.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* INFOS */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Nos coordonnées</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact@hotelapp.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+243 900 000 000</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Kinshasa, RDC</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Nous répondons généralement dans un délai de 24h.
              </p>
            </div>

            {/* FORMULAIRE */}
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Votre message..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted text-center">
          <h2 className="text-2xl font-bold mb-4">
            Besoin d’aide pour réserver ?
          </h2>

          <p className="text-muted-foreground mb-6">
            Consultez nos hôtels disponibles et trouvez votre séjour idéal.
          </p>

          <Button className="rounded-full">Explorer les hôtels</Button>
        </section>
      </main>
    </div>
  );
}
