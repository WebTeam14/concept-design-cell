import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
    setMobileDropdownOpen(false);
    if (href.startsWith("/#") && isHome) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md border-b border-border ${isOpen ? "bg-background" : ""}`}>
      <div className={`container mx-auto flex items-center justify-between transition-all duration-300 px-4 lg:px-8 ${isOpen ? "flex-row-reverse" : "flex-row"
        } ${scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}>

        <Link to="/" onClick={() => setIsOpen(false)} className={`flex items-center h-full transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100 pointer-events-auto"
          }`}>
          <img
            src={logo}
            alt="Concept Design Cell"
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-10 md:h-12" : "h-12 md:h-16 lg:h-20"
              }`}
          />
        </Link>


        {/* <Link to="/" className="flex flex-col leading-none" onClick={() => setIsOpen(false)}>
          <span className="font-display text-xl font-bold tracking-wide text-primary">
            CONCEPT
          </span>
          <span className="text-[10px] font-sans font-medium tracking-[0.3em] text-primary-foreground/70 uppercase">
            Design Cell
          </span>
        </Link> */}

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 h-full">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.href}
                className="relative h-full flex items-center"
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 uppercase h-full text-foreground hover:text-primary"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-background border border-border shadow-xl py-2 animate-fade-up">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        onClick={() => handleNavClick(sub.href)}
                        className="block px-5 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href} className="flex items-center h-full">
                {link.href.startsWith("/#") ? (
                  isHome ? (
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm font-medium tracking-wide transition-colors duration-200 uppercase text-foreground hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm font-medium tracking-wide transition-colors duration-200 uppercase text-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  )
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-medium tracking-wide transition-colors duration-200 uppercase text-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-all duration-300 active:scale-95 text-foreground hover:text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.href} className="border-b border-border last:border-0">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-between w-full py-4 px-6 text-sm font-semibold tracking-widest text-foreground hover:text-primary transition-colors uppercase"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180 text-primary" : "text-foreground/40"}`}
                    />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="bg-muted/30 py-1 border-t border-border/50">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => handleNavClick(sub.href)}
                          className="flex items-center justify-between py-3.5 px-10 text-xs font-medium tracking-wider text-foreground/70 hover:text-primary transition-colors uppercase border-b border-border/30 last:border-0"
                        >
                          {sub.label}
                          <ChevronDown size={14} className="-rotate-90 opacity-40" />
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href} className="border-b border-border last:border-0">
                  {link.href.startsWith("/#") && isHome ? (
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="block py-4 px-6 text-sm font-semibold tracking-widest text-foreground hover:text-primary transition-colors uppercase"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 px-6 text-sm font-semibold tracking-widest text-foreground hover:text-primary transition-colors uppercase"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
