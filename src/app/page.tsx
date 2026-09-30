import { HomeHero } from "@/components/home/home-hero";
import { BusinessTools } from "@/components/home/business-tools";
import { BusinessShowcase } from "@/components/home/business-showcase";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <BusinessTools />
      <BusinessShowcase />
    </main>
  );
}
