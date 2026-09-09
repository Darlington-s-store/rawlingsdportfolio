import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-border/60 group-hover:border-primary/40 transition-all duration-300 shadow-sm shrink-0">
            <img src={logo} alt="Logo" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <span className="font-display font-bold text-[13px] min-[360px]:text-sm sm:text-base md:text-lg tracking-tight whitespace-nowrap">
            Rawlings Junior <span className="text-primary">Asomani</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 -mr-2 rounded-xl hover:bg-secondary/80 active:scale-95 transition-all flex items-center justify-center min-w-[44px] min-h-[44px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-4 py-4 space-y-1 shadow-xl animate-fade-up">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-primary/30"
                    : "text-foreground/80 hover:bg-secondary hover:text-primary"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-border/80 mt-2">
            <Link
              to="/contact"
              className="flex items-center justify-center w-full h-11 rounded-xl bg-primary text-white font-semibold text-sm shadow-md shadow-primary/25"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
