import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import AboutExtras from "@/components/AboutExtras";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function About() {
  return (
    <PageWrapper>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <PageHeader 
          title="About Us"
          description="Learn about our journey, our philosophy, and the dedicated team behind our architectural excellence."
        />
        <AboutSection />
        <TeamSection />
        <AboutExtras />
        <Footer />
      </div>
    </PageWrapper>
  );
}
