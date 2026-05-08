import { Compass, School, GraduationCap, Hammer, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Compass,
    title: "Architectural Design Consultancy",
    desc: "Comprehensive design solutions from concept to completion, emphasizing functionality, sustainability, and contextual aesthetics.",
  },
  {
    icon: School,
    title: "Liaisoning / Statutory Approvals",
    desc: "Expertise in preparing and submitting approval drawings, coordinating with planning authorities, and managing clearances such as Building Permission, Environmental, Fire, and related NOCs.",
  },
  {
    icon: GraduationCap,
    title: "Redevelopment Consultancy",
    desc: "Specialized services for housing and mixed-use redevelopment projects, including feasibility studies, planning, tendering, cost management, and execution coordination.",
  },

];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className="relative py-28 md:py-40 bg-foreground text-background overflow-hidden">
      {/* Decorative Background Number */}
      <div className="absolute top-10 left-10 text-[20rem] font-display font-bold text-background/5 leading-none select-none -z-10">
        02
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary/40"></div>
              <p className={`text-xs font-semibold tracking-[0.2em] uppercase text-primary ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                What We Do
              </p>
            </div>
            <h2
              className={`font-display text-4xl md:text-5xl font-light text-background text-balance leading-tight ${isVisible ? "animate-fade-up" : "opacity-0"
                }`}
              style={{ animationDelay: "0.1s" }}
            >
              Elevating spaces through bold <span className="font-semibold italic">vision</span> and flawless execution.
            </h2>
          </div>
          <p className={`text-background/70 font-light max-w-sm text-sm md:text-base leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            Our firm provides end-to-end professional services covering all stages of architectural and project development. With a multidisciplinary approach, we integrate design innovation, technical expertise, and regulatory compliance to deliver projects that are functional, sustainable, and aesthetically refined.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative p-10 md:p-14 border border-background/20 hover:bg-background/5 transition-colors duration-500 cursor-pointer ${isVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="mb-8 text-primary">
                  <Icon size={40} strokeWidth={1} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-2xl font-normal text-background mb-4">
                  {service.title}
                </h3>
                <p className="text-background/60 font-light text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="absolute bottom-10 left-10 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                  <ArrowRight strokeWidth={1.5} size={20} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Paragraph */}
        <div className={`mt-20 text-center max-w-4xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <p className="text-background/70 font-light text-lg md:text-xl leading-relaxed italic">
            "With extensive experience in diverse project typologies, we ensure every design aligns with technical standards, client vision, and urban regulations, resulting in well-executed and enduring built environments."
          </p>
          <div className="w-16 h-px bg-primary/30 mx-auto mt-8"></div>
        </div>
      </div>
    </section>
  );
}
