import { Compass, School, GraduationCap, Hammer, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Compass,
    title: "Architectural Design",
    desc: "Comprehensive design solutions from concept sketches to detailed construction drawings.",
  },
  {
    icon: School,
    title: "Institutional Services",
    desc: "Designing civic and community landmarks that serve the public with dignity and efficiency.",
  },
  {
    icon: GraduationCap,
    title: "Educational Services",
    desc: "State-of-the-art schools and learning centers designed to inspire curiosity and academic excellence.",
  },
  {
    icon: Hammer,
    title: "Redevelopment Services",
    desc: "Transforming existing structures through modern upgrades, structural enhancements, and creative repurposing.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className="relative py-28 md:py-40 bg-[#f9f9f9] dark:bg-muted/10 overflow-hidden">
      {/* Decorative Background Number */}
      <div className="absolute top-10 left-10 text-[20rem] font-display font-bold text-muted/20 leading-none select-none -z-10">
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
              className={`font-display text-4xl md:text-5xl font-light text-foreground text-balance leading-tight ${isVisible ? "animate-fade-up" : "opacity-0"
                }`}
              style={{ animationDelay: "0.1s" }}
            >
              Elevating spaces through bold <span className="font-semibold italic">vision</span> and flawless execution.
            </h2>
          </div>
          <p className={`text-muted-foreground/80 font-light max-w-sm text-sm md:text-base leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            We provide a holistic approach to design, merging engineering precision with timeless aesthetics to create enduring landmarks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative p-10 md:p-14 border-t border-r border-border/20 last:border-r-0 hover:bg-background transition-colors duration-500 cursor-pointer ${isVisible ? "animate-fade-up" : "opacity-0"
                  }`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="mb-8 text-primary">
                  <Icon size={40} strokeWidth={1} className="transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="font-display text-2xl font-normal text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground/80 font-light text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="absolute bottom-10 left-10 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                  <ArrowRight strokeWidth={1.5} size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
