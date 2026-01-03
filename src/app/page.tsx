import Image from "next/image";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { BoatShowcase } from "@/components/home/BoatShowcase";
import { DestinationsPreview } from "@/components/home/DestinationsPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <FeaturesSection />

      <BoatShowcase />

      <DestinationsPreview />
      <CTASection />
    </div>
  );
}
