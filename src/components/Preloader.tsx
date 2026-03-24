import { motion } from "framer-motion";
import spinnerGif from "../assets/Spinner1.gif";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center gap-6">
        {/* GIF-based Spinner */}
        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
          <img 
            src={spinnerGif} 
            alt="Loading..." 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Minimalist Logo */}
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-base font-bold tracking-[0.4em] text-foreground/80 uppercase"
        >
          CONCEPT
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Preloader;
