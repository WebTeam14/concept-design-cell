import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { completedProjects, ongoingProjects, Project } from "@/data/projects";
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
    const all = [...completedProjects, ...ongoingProjects];
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

        {/* Gallery Grid */}
        <div className="pt-48 pb-12 md:pt-64">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden group border-[0.5px] border-border/5">
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Info Section */}
        <div className="container mx-auto px-4 md:px-8 py-20 border-t border-border/10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Project Name (Left) */}
            <div className="md:col-span-5">
              <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-foreground">
                {project.title}
              </h1>
            </div>

            {/* Vertical Divider (Hidden on mobile) */}
            <div className="hidden md:block md:col-span-1 h-full w-px bg-border/20 mx-auto" />

            {/* Project Details (Right) */}
            <div className="md:col-span-6 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Location</p>
                  <p className="text-lg font-light tracking-wide">{project.location}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Category</p>
                  <p className="text-lg font-light tracking-wide">{project.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Year</p>
                  <p className="text-lg font-light tracking-wide">{project.year}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground/60">Description</p>
                  <p className="text-base font-light leading-relaxed text-muted-foreground max-w-xl">
                    {project.description}
                  </p>
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
              to="/projects/completed"
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
