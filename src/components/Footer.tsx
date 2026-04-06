import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.ico";  

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden font-sans">
      {/* Background Watermark with Motion (Large Boxy CDC Style) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-1">
        <svg width="100%" height="100%" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
          <motion.g
            animate={{
              x: ["-2%", "2%", "-2%"],
              y: ["-1%", "1%", "-1%"]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="opacity-[0.03]"
          >
            {/* Logo Instance 1 (Large) */}
            <g transform="translate(50, 50) scale(1.5)">
              <rect x="0" y="0" width="80" height="120" fill="none" stroke="white" strokeWidth="4" rx="2" />
              <rect x="100" y="0" width="80" height="120" fill="none" stroke="white" strokeWidth="4" rx="30" />
              <rect x="200" y="0" width="80" height="120" fill="none" stroke="white" strokeWidth="4" rx="2" />
              <text x="12" y="85" fontSize="60" fontWeight="900" fill="white" className="font-display">C</text>
              <text x="112" y="85" fontSize="60" fontWeight="900" fill="white" className="font-display">D</text>
              <text x="212" y="85" fontSize="60" fontWeight="900" fill="white" className="font-display">C</text>
            </g>

            {/* Logo Instance 2 (Medium, Offset) */}
            <g transform="translate(500, 150) scale(1.1) rotate(5)">
              <rect x="0" y="0" width="80" height="120" fill="none" stroke="white" strokeWidth="3" rx="2" />
              <rect x="100" y="0" width="80" height="120" fill="none" stroke="white" strokeWidth="3" rx="30" />
              <rect x="200" y="0" width="80" height="120" fill="none" stroke="white" strokeWidth="3" rx="2" />
            </g>

            {/* Scattered Outline Shapes */}
            <rect x="800" y="0" width="200" height="200" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <circle cx="900" cy="400" r="100" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
          </motion.g>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1: Philosophy */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Concept Design Cell"
                className="h-32 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              />
            </Link>

            {/* <Link to="/" className="flex flex-col leading-none group">
              <span className="font-display text-2xl font-bold tracking-wide text-primary transition-colors group-hover:text-primary/80">
                CONCEPT
              </span>
              <span className="text-[10px] font-sans font-medium tracking-[0.3em] text-white/50 uppercase">
                Design Cell
              </span>
            </Link> */}
            <p className="text-sm text-white/50 leading-loose max-w-sm font-light">
              The company principle of Concept Design Cell is the collective conception.
              From the very beginning, the practice has believed in the virtues of exchange,
              crossing ideas, common effort, shared knowledge and enthusiasm.
            </p>
          </div>

          {/* Column 2: Get In Touch */}
          <div className="space-y-6">
            <h3 className="text-sm font-light tracking-[0.3em] uppercase text-white/80">
              GET IN TOUCH
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone size={14} className="text-primary" />
                </div>
                <a href="tel:+919876543210" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail size={14} className="text-primary" />
                </div>
                <a href="mailto:demo@gmail.com" className="text-sm font-light text-white/60 hover:text-white transition-colors">
                  demo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors shrink-0 mt-1">
                  <MapPin size={14} className="text-primary" />
                </div>
                <address className="not-italic text-sm font-light text-white/60 leading-relaxed">
                  Studio #401, 4th Floor, Platinum Square,<br />
                  Next to Creative Gardens, CBD Belapur,<br />
                  Navi Mumbai - 400614
                </address>
              </li>
            </ul>
          </div>

          {/* Column 3: QR Code Section */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="w-32 h-32 bg-white/5 border border-white/10 p-2 rounded-sm group hover:border-primary/50 transition-colors">
              <div className="w-full h-full bg-white/10 flex items-center justify-center overflow-hidden">
                {/* Placeholder QR Code SVG */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="text-white/20">
                  <path d="M10 10h30v30H10zM60 10h30v30H60zM10 60h30v30H10zM60 60h10v10H60zM80 60h10v10H80zM70 70h10v10H70zM60 80h10v10H60zM80 80h10v10H80z" fill="currentColor" />
                  <path d="M20 20h10v10H20zM70 20h10v10H70zM20 70h10v10H20z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 text-center md:text-right">
              SCAN FOR CONTACT DETAILS
            </p>
          </div>
        </div>

        <div className="h-px bg-white/5 w-full mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <p className="text-[10px] font-medium tracking-[0.3em] text-white/20 uppercase text-center md:text-left">
            CONCEPT DESIGN CELL (C) {new Date().getFullYear()} ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-primary transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-white/30 hover:text-primary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-white/30 hover:text-primary transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

