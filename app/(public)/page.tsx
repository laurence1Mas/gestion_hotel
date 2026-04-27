import { HeroSection } from "@/components/landing/hero-section";
import { HotelsSection } from "@/components/landing/hotels-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { CTASection } from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <HotelsSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
}
