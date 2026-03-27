import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
    if (href.startsWith("/#") && isHome) {
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setIsOpen(false)}>
          <span className="font-display text-xl font-bold tracking-wide text-primary">
            CONCEPT
          </span>
          <span className="text-[10px] font-sans font-medium tracking-[0.3em] text-primary-foreground/70 uppercase">
            Design Cell
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-primary transition-colors duration-200 uppercase"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-52 bg-background border border-border shadow-xl py-2 animate-fade-up">
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
              <li key={link.href}>
                {link.href.startsWith("/#") ? (
                  isHome ? (
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-primary transition-colors duration-200 uppercase"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-primary transition-colors duration-200 uppercase"
                    >
                      {link.label}
                    </Link>
                  )
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-primary transition-colors duration-200 uppercase"
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
          className="md:hidden text-primary-foreground/80 hover:text-primary transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-sm border-t border-primary-foreground/10">
          <ul className="flex flex-col items-center gap-1 py-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.href} className="w-full text-center">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="inline-flex items-center gap-1 py-3 px-6 text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-primary transition-colors uppercase"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="pb-2">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => handleNavClick(sub.href)}
                          className="block py-2 px-6 text-xs font-medium tracking-wide text-primary-foreground/60 hover:text-primary transition-colors uppercase"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  {link.href.startsWith("/#") && isHome ? (
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="block py-3 px-6 text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-primary transition-colors uppercase"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href.startsWith("/#") ? link.href : link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-6 text-sm font-medium tracking-wide text-primary-foreground/80 hover:text-primary transition-colors uppercase"
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
