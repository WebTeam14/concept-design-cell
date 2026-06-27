import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider2 from "@/assets/Slider2.jpeg";
import slider3 from "@/assets/slider3.jpeg";
import slider4 from "@/assets/Ongoingprojects/SHUBHAM ARTESIA/3959_VASHI RESIDENTIAL_Image_02.jpg";

// Add this to your index.html <head>:
// <style>@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap');</style>
// OR add this import at the top of your global CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap');

const slides = [
  {
    id: 1,
    image: slider3,
    title: "Defining the Contemporary Skyline",
    subtitle: "Transforming functional commercial spaces into iconic landmarks.",
    link: "#contact",
    cta: "Get in Touch",
  },
  {
    id: 2,
    image: slider2,
    title: "Crafting Exceptional Spaces",
    subtitle: "Blending functionality and aesthetics to create unique living environments.",
    link: "#services",
    cta: "Our Services",
  },
  {
    id: 3,
    image: slider4,
    title: "Innovative Architecture for Tomorrow",
    subtitle: "Designing spaces that inspire, endure, and elevate lifestyles.",
    link: "#contact",
    cta: "Get in Touch",
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
    <section
      id="home"
      className="relative h-screen min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Background Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2 } }}
          transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 opacity-90" />
        </motion.div>
      </AnimatePresence>

      {/* Content — left-aligned */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 max-w-6xl mx-auto flex flex-col items-start justify-center text-left h-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div key={current} className="flex flex-col items-start w-full">

            {/* Title — Cinzel font */}
            <div className="overflow-hidden mb-4 sm:mb-6 py-2">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontOpticalSizing: "auto",
                  fontWeight: 600,
                  fontStyle: "normal",
                }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-white max-w-4xl"
              >
                {slides[current].title}
              </motion.h1>
            </div>

            {/* Subtitle — existing font */}
            <div className="overflow-hidden mb-8 sm:mb-10">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-sans max-w-2xl"
              >
                {slides[current].subtitle}
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            >
              <a
                href={slides[current].link}
                className="inline-block bg-primary text-primary-foreground font-semibold text-xs sm:text-sm tracking-widest uppercase px-8 sm:px-10 py-3 sm:py-4 hover:brightness-110 transition-all duration-300 active:scale-[0.97] border border-transparent hover:border-primary-foreground/20"
              >
                {slides[current].cta}
              </a>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${current === idx
              ? "w-10 bg-white"
              : "w-4 bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}