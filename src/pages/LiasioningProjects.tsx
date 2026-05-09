import { useNavigate } from "react-router-dom";
import { liasioningProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function LiasioningProjects() {
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader 
          title="Liasioning Projects"
          description="A showcase of our project management and structural liasioning expertise."
        />

        {/* Grid */}
        <div ref={ref} className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {liasioningProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group cursor-pointer relative aspect-square border border-border/40 p-3 hover:border-primary transition-colors duration-500 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 z-10">
                    Liasioning
                  </div>

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

        <Footer />
      </div>
    </PageWrapper>
  );
}
