import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PartnersB2BSection from "@/components/sections/PartnersB2BSection";
import AISection from "@/components/sections/AISection";
import ImageGallerySection from "@/components/sections/ImageGallerySection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ImageGallerySection />
      <ComparisonSection />
      <PartnersB2BSection />
      <AISection />
      <CTASection />
      <Footer />
    </main>
  );
}
