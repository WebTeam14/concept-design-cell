import { useNavigate } from "react-router-dom";
import { upcomingProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function UpcomingProjects() {
  const { ref, isVisible } = useScrollReveal();
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader 
          title="Upcoming Projects"
          description="Proposed developments, layout approvals, and upcoming architectural projects on the horizon."
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
              const isActive = tab.label === "Upcoming";
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Masonry Columns */}
            <div className="lg:col-span-8 xl:col-span-9">
              {upcomingProjects.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-border rounded-xl">
                  <p className="text-muted-foreground">No upcoming projects listed at the moment.</p>
                </div>
              ) : (
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance] box-border">
                  {upcomingProjects.map((project, i) => (
                    <div
                      key={project.id}
                      className={`break-inside-avoid mb-4 group cursor-pointer relative border border-border/40 hover:border-primary transition-colors duration-500 overflow-hidden rounded-xl bg-card/10 backdrop-blur-sm ${
                        isVisible ? "animate-fade-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      <div className="w-full relative">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 z-10">
                          Upcoming
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
              )}
            </div>

            {/* Sidebar with all project tabs quicklinks */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-8 lg:sticky lg:top-32 h-fit">
              <div className="border border-border/40 p-6 rounded-xl bg-card/30 backdrop-blur-sm space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-widest text-foreground">
                    Project Types
                  </h3>
                  <div className="w-12 h-[2px] bg-primary mt-2" />
                </div>
                <ul className="space-y-4">
                  {[
                    { label: "Completed Projects", href: "/projects/completed" },
                    { label: "Ongoing Projects", href: "/projects/ongoing" },
                    { label: "Liasioning Projects", href: "/projects/liasioning" },
                    { label: "Upcoming Projects", href: "/projects/upcoming" }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4 group cursor-pointer" onClick={() => navigate(item.href)}>
                      <span className="font-display text-lg font-bold text-primary/70 group-hover:text-primary transition-colors">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
