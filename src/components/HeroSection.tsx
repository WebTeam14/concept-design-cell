import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-sketch-2.png";
import heroBg3 from "@/assets/project-1.jpg";

const slides = [
  {
    id: 1,
    image: heroBg,
    title: "Innovative Architecture for Tomorrow",
    subtitle: "Designing spaces that inspire, endure, and elevate lifestyles.",
    link: "#contact",
    cta: "Get in Touch",
    isPhoto: false
  },
  {
    id: 2,
    image: heroBg2,
    title: "Crafting Visionary Modern Residences",
    subtitle: "Where elegance meets sustainable and intelligent design.",
    link: "#projects",
    cta: "View Projects",
    isPhoto: false
  },
  {
    id: 3,
    image: heroBg3,
    title: "Defining the Contemporary Skyline",
    subtitle: "Transforming functional commercial spaces into iconic landmarks.",
    link: "#services",
    cta: "Our Services",
    isPhoto: true
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-background">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
          transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <img
            src={slides[current].image}
            alt="Architectural sketch"
            className={`w-full h-full object-cover ${slides[current].isPhoto ? 'grayscale contrast-125 brightness-110' : ''}`}
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full px-4 max-w-5xl mx-auto flex flex-col items-center justify-center text-center mt-24 md:mt-28 lg:mt-32">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="flex flex-col items-center">
            <div className="overflow-hidden mb-6 py-2 px-4">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white"
              >
                {slides[current].title}
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-10">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-white/80 font-sans max-w-2xl mx-auto"
              >
                {slides[current].subtitle}
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              <a
                href={slides[current].link}
                className="inline-block bg-primary text-primary-foreground font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:brightness-110 transition-all duration-300 active:scale-[0.97] border border-transparent hover:border-primary-foreground/20"
              >
                {slides[current].cta}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${current === idx ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
