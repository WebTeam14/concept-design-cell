import { motion, type MotionProps } from "framer-motion";

// Reusable animation helper (properly typed)
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.7,
    ease: "easeOut",
    delay,
  },
});

// ─── 1. Vision + Mission ─────────────────────────────────────────────────────
function VisionMission() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <motion.p
          {...fadeUp()}
          className="text-sm font-medium tracking-widest uppercase text-primary mb-3 text-center"
        >
          The Foundations We Stand On
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Vision &amp; Mission
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              label: "Vision",
              text:
                "To be recognized for delivering distinctive, high-quality architecture that defines modern living",
            },
            {
              label: "Mission",
              text:
                "To collaborate closely with clients to transform their vision into elegant, functional, and enduring spaces through precision and innovation.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              {...fadeUp(0.15 + i * 0.1)}
              className="border border-background/20 p-8 md:p-10 hover:border-primary transition-colors duration-500"
            >
              <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">
                {item.label}
              </span>
              <p className="text-background/80 leading-relaxed text-base md:text-lg">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 2. Timeline ─────────────────────────────────────────────────────────────
const milestones = [
  {
    year: "2002",
    title: "Initial Years",
    desc: "To Build trust through transparency, collaboration, and delivering value within budget and timelines. ",
  },

  {
    year: "2016",
    title: "Team Growth",
    desc: "Growing from individual expertise to a collaborative network of architects, engineers, and technical specialists",
  },
  {
    year: "2019",
    title: "Office Expansion",
    desc: "Expanding the practice as Principal Architect, leading and shaping redevelopment-focused projects in collaboration with Urban Analysis Consultancy Services.",
  },
  {
    year: "2023",
    title: "Milestones Achieved",
    desc: "Earned the confidence of prominent clients such as Arihant Superstrure LTD , Godrej Properties ,TODAY Global Builders , SUN _Builders & Developers ,Mitkar Group ,SARA Reality ,ashiyana housing.",
  },
];

function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.p
          {...fadeUp()}
          className="text-sm font-medium tracking-widest uppercase text-primary mb-3 text-center"
        >
          Our Journey
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
        >
          Progress Over The Years
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={m.year}
                  {...fadeUp(0.1 + i * 0.08)}
                  className={`relative flex items-start gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background md:-translate-x-1.5 translate-y-1.5" />

                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${isLeft
                      ? "md:pr-8 md:text-right"
                      : "md:ml-auto md:pl-8 md:text-left"
                      }`}
                  >
                    <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-1">
                      {m.year}
                    </span>

                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {m.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Philosophy ───────────────────────────────────────────────────────────
function Philosophy() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.p
          {...fadeUp()}
          className="text-sm font-medium tracking-widest uppercase text-primary mb-3 text-center"
        >
          How We Think
        </motion.p>




      </div>
    </section>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function AboutExtras() {
  return (
    <>
      <VisionMission />
      <Timeline />
    </>
  );
}