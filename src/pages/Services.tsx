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
          description="From conceptual design to project management, we offer a wide range of architectural services tailored to your vision."
        />
        <ServicesSection />
        <ClientLogoSlider />
        <Footer />
      </div>
    </PageWrapper>
  );
}
