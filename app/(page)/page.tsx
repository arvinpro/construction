import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import LogoSection from "@/components/home/LogoSection";
import OurServices from "@/components/home/OurServices";
import LatestWork from "@/components/home/LatestWork";
import OurGallery from "@/components/home/OurGallery";
import ContactSection from "@/components/home/ContactSection";
import Reviews from "@/components/home/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Trusted construction company delivering quality projects in Nepal",
   openGraph: {
    title: "S & A Construction Company Nepal",
    description:
      "Trusted residential and commercial construction services across Nepal.",
    images: ["/og/og-home.png"],
  },
};

export default function Home() {
  return (
    <section className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
      <HeroSection />
      <AboutSection />
      <LogoSection />
      <OurServices />
      <LatestWork />
      <OurGallery />
      <Reviews />
      <ContactSection />
    </div>
    </section>
  );
}
