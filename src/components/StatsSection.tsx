import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

function AnimatedNumber({ target, label, delay }: { target: number; label: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // easeOutQuart
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isVisible, target, delay]);

  return (
    <div ref={ref} className="text-center flex flex-col items-center justify-center py-8">
      <div className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tighter">
        {count}
      </div>
      <div className="w-6 h-[1px] bg-primary/40 mb-4"></div>
      <div className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { target: 57, label: "Projects Completed" },
    { target: 86, label: "Happy Clients" },
    { target: 94, label: "Working Hours (K)" },
    { target: 12, label: "Awards Won" },
  ];

  return (
    <section className="bg-[#111111] py-24 md:py-32 relative overflow-hidden">
      {/* Abstract blurred glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-16 text-center">
          <div className="w-8 h-[1px] bg-primary/30"></div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
            Our Legacy
          </p>
          <div className="w-8 h-[1px] bg-primary/30"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-t border-b border-white/10">
          {stats.map((stat, i) => (
            <AnimatedNumber key={stat.label} target={stat.target} label={stat.label} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
