import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

// ─── Nav data ─────────────────────────────────────────────────────────────────
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
      { label: "Liasioning Projects", href: "/projects/liasioning" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 50);
  }, [searchOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setOpenDropdown(null);
    if (href.startsWith("/#") && isHome) {
      document.getElementById(href.replace("/#", ""))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onDarkHero = !scrolled && isHome && !isOpen;

  // Link text color: white on hero, yellow when scrolled
  const linkColor = scrolled
    ? "text-[#D4A017] hover:text-yellow-300"
    : "text-white/90 hover:text-white";

  const linkAfterBg = scrolled ? "after:bg-[#D4A017]" : "after:bg-white";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          NAVBAR
      ═══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? "bg-[#0a0a0a] shadow-[0_2px_30px_rgba(0,0,0,0.6)]"
            : "bg-black/40 backdrop-blur-sm"
          }
        `}
      >
        {/* ── Search overlay ──────────────────────────────────────────────── */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`
                absolute inset-0 z-20 flex items-center px-6 md:px-12
                ${scrolled ? "bg-[#0a0a0a]" : "bg-black/55 backdrop-blur-sm"}
              `}
            >
              <Search size={17} className="text-[#D4A017]" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Type to search…"
                className={`
                  flex-1 px-4 bg-transparent outline-none text-[13px] tracking-wider font-medium
                  ${scrolled ? "text-white placeholder-white/30" : "text-white placeholder-white/45"}
                `}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <X size={19} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main bar ────────────────────────────────────────────────────── */}
        {/* 
          Layout strategy: logo left-of-center, links right-of-center.
          Using a max-w container with padding so logo sits ~20% from left
          and nav links cluster more centrally rather than hugging the edges.
        */}
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[72px] md:h-[84px] lg:h-[90px] px-6 md:px-10 lg:px-16">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center shrink-0 group py-1"
          >
            <img
              src={logo}
              alt="Concept Design Cell"
              className={`
                h-12 md:h-14 lg:h-16 xl:h-[72px] w-auto object-contain
                transition-all duration-500
                ${scrolled ? "brightness-110" : ""}
              `}
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link, i) => (
              <div key={link.href} className="flex items-center">
                {/* Pipe separator */}
                {i > 0 && (
                  <span className={`mx-4 xl:mx-5 select-none font-thin text-sm leading-none ${scrolled ? "text-[#D4A017]/40" : "text-white/25"}`}>
                    |
                  </span>
                )}

                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`
                        flex items-center gap-1.5
                        text-[12px] xl:text-[13px] font-bold tracking-[0.18em] uppercase
                        transition-colors duration-200
                        ${linkColor}
                      `}
                    >
                      {link.label}
                      <ChevronDown
                        size={10}
                        className={`transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full right-0 mt-4 w-56 bg-[#0a0a0a] shadow-[0_8px_30px_rgba(0,0,0,0.4)] border-t-[2px] border-[#D4A017]"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => handleNavClick(sub.href)}
                              className="block px-5 py-3.5 text-[10px] font-bold tracking-[0.18em] uppercase text-white/50 hover:text-[#D4A017] hover:bg-white/5 transition-all border-b border-white/[0.06] last:border-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`
                      relative text-[12px] xl:text-[13px] font-bold tracking-[0.18em] uppercase
                      transition-colors duration-200
                      after:absolute after:-bottom-0.5 after:left-0
                      after:w-0 after:h-px after:transition-all after:duration-300
                      hover:after:w-full
                      ${linkColor} ${linkAfterBg}
                    `}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Search */}
            <span className={`mx-4 xl:mx-5 select-none font-thin text-sm leading-none ${scrolled ? "text-[#D4A017]/40" : "text-white/25"}`}>|</span>
            <button
              onClick={() => setSearchOpen(true)}
              className={`transition-colors duration-200 ${scrolled ? "text-[#D4A017]/70 hover:text-[#D4A017]" : "text-white/70 hover:text-white"}`}
            >
              <Search size={17} strokeWidth={2.2} />
            </button>
          </div>

          {/* MOBILE: search + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2.5 transition-colors ${onDarkHero || isOpen ? "text-white/80 hover:text-white" : "text-white/80 hover:text-white"}`}
            >
              <Search size={20} strokeWidth={2} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 transition-colors ${onDarkHero || isOpen ? "text-white hover:text-white/70" : "text-white hover:text-white/70"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Scrolled bottom accent line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent" />
        )}
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE FULL-SCREEN MENU
      ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-[72px] md:h-[84px] px-5 md:px-8 border-b border-white/[0.08]">
              <Link to="/" onClick={() => setIsOpen(false)} className="py-2">
                <img
                  src={logo}
                  alt="Concept Design Cell"
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 text-white hover:text-[#D4A017] transition-colors"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>

            {/* Gold accent line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4A017]/60 to-transparent" />

            <ul className="flex flex-col px-7 pt-2 pb-10 overflow-y-auto flex-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 + i * 0.055, duration: 0.28 }}
                  className="border-b border-white/[0.06]"
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className="flex items-center justify-between w-full py-5 text-[13px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-[#D4A017] transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-300 ${openDropdown === link.label ? "rotate-180 text-[#D4A017]" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                onClick={() => handleNavClick(sub.href)}
                                className="flex items-center gap-3 py-3 pl-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 hover:text-[#D4A017] transition-colors"
                              >
                                <span className="w-3 h-px bg-[#D4A017]/30 inline-block shrink-0" />
                                {sub.label}
                              </Link>
                            ))}
                            <div className="pb-2" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="block py-5 text-[13px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-[#D4A017] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="px-7 py-5 border-t border-white/[0.06]">
              <p className="text-[9px] tracking-[0.35em] uppercase text-white/20 font-semibold">
                © {new Date().getFullYear()} Concept Design Cell
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}