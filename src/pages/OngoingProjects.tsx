import { useState } from "react";
import { ongoingProjects, Project } from "@/data/projects";
import ProjectImageSlider from "@/components/ProjectImageSlider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function OngoingProjects() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader 
          title="Ongoing Projects"
          description="Projects currently in design or under construction — shaping the future of architecture, one structure at a time."
        />

        {/* Grid */}
        <div ref={ref} className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {ongoingProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group cursor-pointer ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="overflow-hidden mb-4 relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-[260px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-semibold tracking-widest uppercase px-3 py-1">
                    In Progress
                  </div>
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.category} · {project.location}
                </p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Modal */}
        {selectedProject && (
          <ProjectImageSlider
            images={selectedProject.images}
            title={selectedProject.title}
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
        <Footer />
      </div>
    </PageWrapper>
  );
}

