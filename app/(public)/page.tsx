import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Counters } from "@/components/landing/counters-section";
import { CTASection } from "@/components/landing/cta-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HotelsSection } from "@/components/landing/hotels-section";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <Counters />
        <HotelsSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
}
