import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-6 py-12 md:py-16 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-border group-hover:border-primary/50 transition-all duration-300">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-foreground">Rawlings Junior <span className="text-primary">Asomani</span></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Full-stack software developer building scalable web apps, APIs, and mobile solutions from Kumasi, Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">Quick Links</p>
            <div className="flex flex-col gap-2.5 sm:gap-3">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/experience" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 w-fit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-foreground">Contact</p>
            <div className="space-y-3">
              <a href="mailto:asomanirawlingsjunior5333@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                <Mail size={16} className="shrink-0" />
                <span className="break-all text-xs sm:text-sm">asomanirawlingsjunior5333@gmail.com</span>
              </a>
              <a href="tel:+233552945333" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+233 55 294 5333</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" className="shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Kumasi, Ghana</span>
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/Darlington-s-store" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-secondary/70 border border-border text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253?" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-secondary/70 border border-border text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} Rawlings Junior Asomani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
