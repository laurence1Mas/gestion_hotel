import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  CreditCard, 
  Clock, 
  Headphones, 
  CheckCircle2, 
  Smartphone 
} from "lucide-react"

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Réservation Sécurisée",
    description: "Vos données personnelles et financières sont protégées avec les meilleurs standards de sécurité.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Paiement Mobile",
    description: "Payez facilement via Orange Money, M-Pesa ou Airtel Money. Simple et rapide.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Confirmation Instantanée",
    description: "Recevez votre confirmation de réservation immédiatement par SMS et email.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Support 24/7",
    description: "Notre équipe est disponible à tout moment pour vous assister dans vos réservations.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Hôtels Vérifiés",
    description: "Tous nos établissements partenaires sont vérifiés et respectent nos standards de qualité.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Accessible Partout",
    description: "Réservez depuis votre téléphone, tablette ou ordinateur, où que vous soyez.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pourquoi Choisir IturiStay?
          </h2>
          <p className="text-muted-foreground">
            Une plateforme conçue pour simplifier vos réservations d&apos;hôtels 
            avec des fonctionnalités adaptées aux besoins locaux.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="rounded-3xl border-border hover:shadow-lg transition-all duration-300 group bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
