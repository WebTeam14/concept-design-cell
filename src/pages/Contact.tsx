import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  return (
    <PageWrapper>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <PageHeader 
          title="Contact Us"
          description="Get in touch with us to discuss your next project. We're here to turn your architectural dreams into reality."
        />
        <ContactSection />
        <Footer />
      </div>
    </PageWrapper>
  );
}
