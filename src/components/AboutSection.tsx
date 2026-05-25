import aboutTeam from "@/assets/about1.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: parallaxRef, offset } = useParallax(0.1);

  return (
    <section id="about" className="relative py-28 md:py-40 bg-background overflow-hidden">
      {/* Decorative Background Number */}
      <div className="absolute top-10 right-10 text-[20rem] font-display font-bold text-muted/10 leading-none select-none -z-10">
        01
      </div>

      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-center">

          {/* Text Content */}
          <div className={`md:col-span-5 ${isVisible ? "opacity-100 animate-slide-right" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary/40"></div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                Who We Are
              </p>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-[1.2] text-balance">
              We design <span className="font-semibold italic"> spaces with practical purpose.</span>
            </h2>

            <p className="text-muted-foreground/90 font-light leading-relaxed mb-6 text-pretty text-lg">

              As architects, we focus on simplicity, clarity, and impact—creating environments that are functional, elegant, and enduring to reflect the client’s vision.

            </p>
            {/* <p className="text-muted-foreground/80 font-light leading-relaxed mb-10 text-pretty">
              Every project is a collaboration between our visionary architects and our clients'
              aspirations. We transform concepts into living, breathing environments that define
              how people experience the world around them.
            </p> */}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 group text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors"
            >
              Discover More
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-2 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="md:col-span-7 relative">
            <div
              ref={parallaxRef}
              className={`relative z-10 p-2 md:p-4 border border-border/30 bg-background ${isVisible ? "opacity-100 animate-fade-up" : "opacity-0"}`}
              style={{
                transform: `rotateY(${offset * 0.01}deg) translateY(${offset * 0.1}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={aboutTeam}
                  alt="Team of architects reviewing blueprints"
                  className="w-full h-[450px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </div>
            {/* Subtle solid background block behind image */}
            <div className={`absolute -bottom-8 -left-8 w-2/3 h-full bg-muted/40 -z-10 ${isVisible ? "animate-slide-right" : "opacity-0"}`}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
