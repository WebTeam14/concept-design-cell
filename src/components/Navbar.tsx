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

  // TRUE when sitting over a dark hero (transparent navbar, white text)
  const onDarkHero = !scrolled && isHome && !isOpen;

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
            ? "bg-black/75 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
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
                ${scrolled ? "bg-white" : "bg-black/55 backdrop-blur-sm"}
              `}
            >
              <Search size={17} className={scrolled ? "text-neutral-400" : "text-white/55"} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Type to search…"
                className={`
                  flex-1 px-4 bg-transparent outline-none text-[13px] tracking-wider font-medium
                  ${scrolled ? "text-black placeholder-neutral-400" : "text-white placeholder-white/45"}
                `}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className={`p-2 transition-colors ${scrolled ? "text-neutral-500 hover:text-black" : "text-white/65 hover:text-white"
                  }`}
              >
                <X size={19} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Main bar ────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between h-[80px] md:h-[90px] lg:h-[90px] px-5 md:px-8 lg:px-14 xl:px-20">

          {/* LOGO — far left */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center shrink-0 group py-2"
          >
            <img
              src={logo}
              alt="Concept Design Cell"
              className={`
                h-14 md:h-16 lg:h-20 w-auto object-contain
                transition-all duration-500
              `}
            />
          </Link>

          {/* DESKTOP LINKS — far right, pipe-separated */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, i) => (
              <div key={link.href} className="flex items-center">
                {/* Pipe separator */}
                {i > 0 && (
                  <span
                    className="mx-4 xl:mx-5 select-none font-thin text-base leading-none text-white/30"
                  >
                    |
                  </span>
                )}

                {link.dropdown ? (
                  /* Dropdown trigger */
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`
                      flex items-center gap-1.5
                      text-[13px] md:text-[14px] font-bold tracking-[0.2em] uppercase
                      transition-colors duration-200
                      text-white/85 hover:text-white
                    `}
                    >
                      {link.label}
                      <ChevronDown
                        size={10}
                        className={`transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full right-0 mt-4 w-52 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.13)] border-t-[2px] border-neutral-800"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => handleNavClick(sub.href)}
                              className="block px-5 py-3 text-[9.5px] font-bold tracking-[0.18em] uppercase text-neutral-600 hover:text-black hover:bg-neutral-50 transition-all border-b border-neutral-100 last:border-0"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  /* Regular link */
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="
                      relative text-[13px] md:text-[14px] font-bold tracking-[0.2em] uppercase
                      transition-colors duration-200
                      after:absolute after:-bottom-0.5 after:left-0
                      after:w-0 after:h-px after:transition-all after:duration-300
                      hover:after:w-full
                      text-white/85 hover:text-white after:bg-white
                    "
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Pipe + Search icon */}
            <span className="mx-4 xl:mx-5 select-none font-thin text-base leading-none text-white/30">|</span>
            <button
              onClick={() => setSearchOpen(true)}
              className="transition-colors duration-200 text-white/75 hover:text-white"
            >
              <Search size={18} strokeWidth={2.2} />
            </button>
          </div>

          {/* MOBILE: search + hamburger */}
          <div className="flex lg:hidden items-center gap-0.5">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2.5 transition-colors ${onDarkHero || isOpen ? "text-white/80 hover:text-white" : "text-neutral-700 hover:text-black"
                }`}
            >
              <Search size={19} strokeWidth={2} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 transition-colors ${onDarkHero || isOpen ? "text-white hover:text-white/70" : "text-neutral-800 hover:text-black"
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Scrolled bottom border */}
        {scrolled && <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />}
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════
          MOBILE FULL-SCREEN MENU (dark overlay, like ethique.in)
      ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#1c1a18] flex flex-col"
          >
            {/* Mobile Header with Logo and Close Button */}
            <div className="flex items-center justify-between h-[80px] md:h-[90px] px-5 md:px-8">
              <Link to="/" onClick={() => setIsOpen(false)} className="py-2">
                <img
                  src={logo}
                  alt="Concept Design Cell"
                  className="h-14 md:h-16 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 text-white hover:text-white/70 transition-colors"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            <div className="h-px w-full bg-white/10" />

            <ul className="flex flex-col px-7 pt-4 pb-10 overflow-y-auto flex-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 + i * 0.055, duration: 0.28 }}
                  className="border-b border-white/[0.07]"
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        className="flex items-center justify-between w-full py-6 text-[15px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-300 ${openDropdown === link.label ? "rotate-180" : ""
                            }`}
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
                                className="flex items-center gap-3 py-3 pl-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 hover:text-white/65 transition-colors"
                              >
                                <span className="w-3 h-px bg-white/20 inline-block shrink-0" />
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
                      className="block py-6 text-[15px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
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