import Image from "next/image";
import HomeHero from "@/features/home/home-hero";
import HomeAbout from "@/features/home/home-about";
import HomeMission from "@/features/home/home-mission";
import HomeJewelry from "@/features/home/home-jewelry";
import StickyNavigation from "@/components/sticky-navigation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <StickyNavigation />
      <HomeHero />
      <HomeAbout />
      <HomeMission />
      <HomeJewelry />
      <Footer />
    </div>
  );
}
