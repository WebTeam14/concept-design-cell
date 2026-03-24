import { useState } from "react";
import { completedProjects, Project } from "@/data/projects";
import ProjectImageSlider from "@/components/ProjectImageSlider";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function CompletedProjects() {
  const { ref, isVisible } = useScrollReveal(0.05);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            {completedProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group cursor-pointer ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="overflow-hidden mb-4">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">
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


