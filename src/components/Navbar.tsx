import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/ConceptCellDesgin-Logo-removebg-preview.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Projects",
    href: "/#projects",
    dropdown: [
      { label: "Completed Projects", href: "/projects/completed" },
      { label: "Ongoing Projects", href: "/projects/ongoing" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setDropdownOpen(false);
    if (href.startsWith("/#") && isHome) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      scrolled ? "pt-2 px-4 md:px-8 lg:px-12" : "pt-4 md:pt-6 px-4 md:px-8 lg:px-12"
    }`}>
      <div className={`mx-auto max-w-[1400px] flex items-center justify-between px-6 py-1 transition-all duration-500 shadow-xl ${
        isOpen ? "rounded-t-[32px] rounded-b-none shadow-2xl" : "rounded-full shadow-lg hover:shadow-xl"
      } bg-white/95 backdrop-blur-xl border border-black/5`}>
        
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center shrink-0 group py-1">
          <img
            src={logo}
            alt="Concept Design Cell"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Nav - Centered Links */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <ul className="flex items-center gap-6 xl:gap-10">
            {navLinks.slice(0, -1).map((link) =>
              link.dropdown ? (
                <li
                  key={link.href}
                  className="relative group py-2"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1.5 text-[13px] font-bold tracking-widest text-black/70 hover:text-black transition-all uppercase group-hover:scale-105"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-500 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 bg-white border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[24px] py-4 overflow-hidden z-[100]`}>
                    <div className="flex flex-col">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => handleNavClick(sub.href)}
                          className="block px-8 py-4 text-[12px] font-bold tracking-[0.12em] text-neutral-600 hover:text-black hover:bg-neutral-50 transition-all uppercase border-l-4 border-transparent hover:border-black"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[13px] font-bold tracking-widest text-black/70 hover:text-black transition-all uppercase hover:scale-105 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Desktop Right Side - Language, Search, Contact */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-1.5 text-black/60 hover:text-black cursor-pointer text-[12px] font-bold tracking-wider transition-colors">
            <Globe size={18} strokeWidth={2.5} />
            <span>EN</span>
          </div>
          
          <button className="text-black/60 hover:text-black p-2 transition-all hover:scale-110">
            <Search size={20} strokeWidth={2.5} />
          </button>

          <Link
            to="/contact"
            className="bg-black text-white px-9 py-3.5 rounded-full text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all shadow-lg hover:shadow-black/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="text-black/60 p-2 hover:scale-110 transition-transform">
            <Search size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-black/70 p-2 transition-all active:scale-90"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden mx-auto max-w-[1400px] bg-white/98 backdrop-blur-xl border-t border-black/5 rounded-b-[32px] shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col py-6">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-black/[0.03] last:border-0">
                  {link.dropdown ? (
                    <>
                      <div className="flex items-center justify-between py-4 px-10 text-[13px] font-bold tracking-[0.15em] text-black/80 uppercase">
                        {link.label}
                      </div>
                      <div className="bg-neutral-50 py-3">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => handleNavClick(sub.href)}
                            className="flex items-center justify-between py-4 px-14 text-[11px] font-bold tracking-[0.12em] text-neutral-500 hover:text-black transition-colors uppercase"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-5 px-10 text-[13px] font-bold tracking-[0.15em] text-black/80 hover:text-black transition-colors uppercase"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="px-10 pt-8 pb-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-black text-white text-center py-5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase shadow-xl"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
