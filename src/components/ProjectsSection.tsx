import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { completedProjects, ongoingProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";


export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);


  const featured = [...completedProjects.slice(0, 2), ...ongoingProjects.slice(0, 1)];

  return (
    <section id="projects" className="relative py-28 md:py-40 bg-background overflow-hidden border-t border-border/20">
      
      {/* Decorative Background Number */}
      <div className="absolute top-10 right-10 text-[20rem] font-display font-bold text-muted/20 leading-none select-none -z-10">
        03
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary/40"></div>
              <p
                className={`text-xs font-semibold tracking-[0.2em] uppercase text-primary ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
              >
                Our Work
              </p>
            </div>
            <h2
              className={`font-display text-4xl md:text-5xl font-light text-foreground text-balance leading-tight ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Crafted with <span className="font-semibold italic">Passion</span>
            </h2>
          </div>
          
          {/* Links */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/projects/completed"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
            >
              Completed Projects
              <ArrowRight size={20} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <span className="hidden sm:block w-px h-5 bg-border" />
            <Link
              to="/projects/ongoing"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
            >
              Ongoing Projects
              <ArrowRight size={20} strokeWidth={1} className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Featured Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {featured.map((project, i) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`group relative aspect-square overflow-hidden block ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${0.2 + i * 0.1}s`,
              }}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-display text-2xl font-bold tracking-widest text-white uppercase mb-4">
                  {project.title}
                </h3>
                <div className="w-12 h-[1px] bg-primary mb-4" />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
