import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientLogoSlider from "@/components/ClientLogoSlider";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

export default function Index() {
  return (
    <PageWrapper>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <ClientLogoSlider />
        <Footer />
      </div>
    </PageWrapper>
  );
}

