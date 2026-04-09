import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ClientLogoSlider from "@/components/ClientLogoSlider";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function Services() {
  return (
    <PageWrapper>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <PageHeader 
          title="Our Services"
          description="Specialized architectural expertise across institutional, educational, and high-impact redevelopment projects."
        />
        <ServicesSection />
        <ClientLogoSlider />
        <Footer />
      </div>
    </PageWrapper>
  );
}
