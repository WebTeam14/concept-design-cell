import { useNavigate } from "react-router-dom";
import { upcomingProjects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

export default function UpcomingProjects() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHeader 
          title="Upcoming Projects"
          description="Proposed developments, layout approvals, and upcoming architectural projects on the horizon."
        />

        <div className="container mx-auto px-4 py-20 md:py-28">
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

          {upcomingProjects.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border rounded-xl">
              <p className="text-muted-foreground">No upcoming projects listed at the moment.</p>
            </div>
          ) : (
            <div className="relative w-full overflow-hidden py-16 md:py-20 border-y border-border/20">
              <div className="flex w-max animate-marquee space-x-8 md:space-x-16 px-4 md:px-8 items-center">
                {upcomingProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-shrink-0 cursor-pointer hover:text-primary transition-colors duration-300 group flex items-center"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <span className="text-sm md:text-lg lg:text-2xl font-bold tracking-wide whitespace-nowrap uppercase">
                      {project.title}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-muted-foreground/60 ml-2 md:ml-4 uppercase hidden md:inline">
                      {project.category}
                    </span>
                    <span className="mx-4 md:mx-8 text-primary/30 text-xl md:text-3xl font-light">|</span>
                  </div>
                ))}
                {upcomingProjects.map((project) => (
                  <div
                    key={`dup-${project.id}`}
                    className="flex-shrink-0 cursor-pointer hover:text-primary transition-colors duration-300 group flex items-center"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <span className="text-sm md:text-lg lg:text-2xl font-bold tracking-wide whitespace-nowrap uppercase">
                      {project.title}
                    </span>
                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-muted-foreground/60 ml-2 md:ml-4 uppercase hidden md:inline">
                      {project.category}
                    </span>
                    <span className="mx-4 md:mx-8 text-primary/30 text-xl md:text-3xl font-light">|</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
