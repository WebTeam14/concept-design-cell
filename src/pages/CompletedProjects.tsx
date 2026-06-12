import { useNavigate } from "react-router-dom";
import { completedProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function CompletedProjects() {
  const { ref, isVisible } = useScrollReveal(0.05);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader 
          title="Completed Projects"
          description="A curated collection of our delivered works — residences, commercial spaces, and restorations brought to life."
        />

        {/* Grid */}
        <div ref={ref} className="container mx-auto px-4 py-20 md:py-28">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mb-12 border-b border-border/10 pb-6">
            {[
              { label: "Completed", href: "/projects/completed" },
              { label: "Ongoing", href: "/projects/ongoing" },
              { label: "Liasioning", href: "/projects/liasioning" },
              { label: "Upcoming", href: "/projects/upcoming" }
            ].map((tab) => {
              const isActive = tab.label === "Completed";
              return (
                <button
                  key={tab.label}
                  onClick={() => navigate(tab.href)}
                  className={`relative text-xs font-bold tracking-[0.2em] uppercase py-2 transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary animate-slide-right" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="w-full">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance] box-border">
              {completedProjects.map((project, i) => (
                <div
                  key={project.id}
                  className={`break-inside-avoid inline-block w-full mb-4 group cursor-pointer relative border border-border/40 hover:border-primary transition-colors duration-500 overflow-hidden rounded-xl ${
                    isVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className="w-full relative">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="font-display text-xl font-bold tracking-widest text-white uppercase mb-4">
                        {project.title}
                      </h3>
                      <div className="w-12 h-[1px] bg-primary mb-4" />
                      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/80">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}


