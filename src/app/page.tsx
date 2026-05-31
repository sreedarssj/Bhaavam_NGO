import { HeroSection } from "@/components/home/hero-section";
import { MissionSection } from "@/components/home/mission-section";
import { InstagramSection } from "@/components/home/instagram-section";
import { ImpactStats } from "@/components/home/impact-stats";
import { CtaSection } from "@/components/home/cta-section";

/**
 * Home / Landing page for Bhaavam Foundation
 */
export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <MissionSection />
      <InstagramSection />
      <ImpactStats />
      <CtaSection />
    </main>
  );
}
