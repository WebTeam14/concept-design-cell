import { useState } from "react";
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

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <MemberCard key={member.id} member={member} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member, index, isVisible }: { member: any, index: number, isVisible: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Split bio by <br /> to handle paragraphs
  const paragraphs = member.bio.split('<br />').map((p: string) => p.trim()).filter((p: string) => p.length > 0);
  const firstPara = paragraphs[0];
  const words = firstPara.split(' ');
  const shouldTruncate = words.length > 30 || paragraphs.length > 1;
  const shortText = words.slice(0, 30).join(' ') + '...';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
      className="group flex flex-col items-center text-center"
    >
      <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-muted w-full max-w-sm rounded-lg shadow-lg">
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
      <p className="text-primary text-sm font-medium mb-4 uppercase tracking-wider">
        {member.role}
      </p>
      
      <div className="text-muted-foreground text-sm leading-relaxed max-w-prose">
        {!isExpanded ? (
          <p>{shortText}</p>
        ) : (
          <div className="space-y-4 text-center">
            {paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
      </div>

      {shouldTruncate && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-primary font-bold text-xs uppercase tracking-widest hover:underline focus:outline-none bg-primary/5 px-6 py-2 rounded-full transition-all hover:bg-primary/10"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </motion.div>
  );
}
