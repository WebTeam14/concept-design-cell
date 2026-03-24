import { teamMembers } from "@/data/team";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

export default function TeamSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium tracking-widest uppercase text-primary mb-3"
          >
            Our Experts
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Meet the Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A dedicated group of visionaries committed to transforming your ideas into reality.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
