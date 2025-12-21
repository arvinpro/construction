import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import LogoSection from "@/components/home/LogoSection";
import OurServices from "@/components/home/OurServices";
import LatestWork from "@/components/home/LatestWork";
import OurGallery from "@/components/home/OurGallery";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <LogoSection />
      <OurServices />
      <LatestWork />
      <OurGallery />
      <ContactSection />
    </div>
  );
}
