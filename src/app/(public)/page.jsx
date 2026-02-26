import CtaSection from "@/components/home/CtaSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TechStackSection from "@/components/home/TechStackSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import TrustSection from "@/components/home/TrustSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <FeaturedProjects />
      <ServicesSection />
      <TechStackSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  );
}
