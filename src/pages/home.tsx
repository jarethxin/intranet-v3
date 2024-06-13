import { Footer } from "@/components/general/footer-section";
import { HeroSection1 } from "@/components/general/hero-section-1";
import { HeroSection2 } from "@/components/general/hero-section-2";
import { HeroSection3 } from "@/components/general/hero-section-3";
import { NavigationBarMenu } from "@/components/general/navigation-bar-menu";

export function Home() {
  return (
    <main>
      <NavigationBarMenu />
      <HeroSection1 />
      <HeroSection2 />
      <HeroSection3 />
      <Footer />
    </main>
  );
}
