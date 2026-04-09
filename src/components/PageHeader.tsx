import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  backTo?: string;
  backText?: string;
}

export default function PageHeader({ 
  title, 
  description, 
  backTo = "/", 
  backText = "Back to Home" 
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-foreground pt-36 pb-20 md:pt-48 md:pb-32">
      {/* Background Animated SVG Text (Prague Style) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="xMinYMid meet">
          <motion.text
            x="20"
            y="55%"
            textAnchor="start"
            className="text-[100px] md:text-[150px] font-bold tracking-tight uppercase font-display"
            style={{
              fill: "transparent",
              stroke: "rgba(255,255,255,0.5)",
              strokeWidth: "2.5px",
              strokeDasharray: "2500px",
            }}
            initial={{ strokeDashoffset: "2500px", opacity: 0 }}
            animate={{ strokeDashoffset: "0px", opacity: 1 }}
            transition={{ 
              duration: 3, 
              ease: "easeInOut",
              opacity: { duration: 1 }
            }}
          >
            {title}
          </motion.text>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            {backText}
          </Link>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-background leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-background/50 max-w-xl text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
