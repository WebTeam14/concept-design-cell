import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { completedProjects, ongoingProjects, liasioningProjects, Project } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const all = [...completedProjects, ...ongoingProjects, ...liasioningProjects];
    setAllProjects(all);
    const found = all.find((p) => p.id === id);
    if (found) {
      setProject(found);
      setCurrentIndex(all.indexOf(found));
    }
    // Scroll to top on project change
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return null;
  }

  const prevProject = allProjects[currentIndex - 1];
  const nextProject = allProjects[currentIndex + 1];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <div className="container mx-auto px-4 md:px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Gallery (Left) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`group relative border border-border/40 hover:border-primary transition-colors duration-500 overflow-hidden ${
                      index === 0 ? "md:col-span-2 aspect-video md:aspect-[16/10]" : "aspect-square"
                    }`}
                  >
                    <div className="w-full h-full">
                      <img
                        src={image}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Sidebar (Right) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="space-y-12">
                <div>
                  <Link
                    to={`/projects/${project.status}`}
                    className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-8 group"
                  >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to {project.status}
                  </Link>
                  <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight mb-4">
                    {project.title}
                  </h1>
                  <div className="w-12 h-1 bg-primary"></div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Location</p>
                    <p className="text-lg font-light tracking-wide">{project.location}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Category</p>
                    <p className="text-lg font-light tracking-wide">{project.category}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Year</p>
                    <p className="text-lg font-light tracking-wide">{project.year}</p>
                  </div>

                  {project.plotArea && project.plotArea.trim() && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Plot Area</p>
                      <p className="text-lg font-light tracking-wide">{project.plotArea}</p>
                    </div>
                  )}

                  {project.client && project.client.trim() && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Client</p>
                      <p className="text-lg font-light tracking-wide">{project.client}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Description</p>
                    <p className="text-base font-light leading-relaxed text-muted-foreground/90 text-pretty">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="container mx-auto px-4 md:px-8 pb-32">
          <div className="flex items-center justify-between py-12 border-t border-border/10">
            {prevProject ? (
              <Link 
                to={`/projects/${prevProject.id}`}
                className="group flex flex-col items-start gap-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                  <ArrowLeft size={14} /> Previous
                </span>
                <span className="text-sm font-medium hidden md:block">{prevProject.title}</span>
              </Link>
            ) : <div />}

            <Link 
              to={`/projects/${project.status}`}
              className="flex items-center gap-2 p-4 rounded-full border border-border/20 hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <Grid size={20} className="group-hover:rotate-90 transition-transform duration-500" />
            </Link>

            {nextProject ? (
              <Link 
                to={`/projects/${nextProject.id}`}
                className="group flex flex-col items-end gap-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                  Next <ArrowRight size={14} />
                </span>
                <span className="text-sm font-medium hidden md:block">{nextProject.title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
