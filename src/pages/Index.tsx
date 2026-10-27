import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FirstVisitSection from "@/components/FirstVisitSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FirstVisitSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
