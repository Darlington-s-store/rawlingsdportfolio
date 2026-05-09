import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="hero-gradient px-6 py-12 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">Asomani Rawlings <span className="text-primary">Junior</span></span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Full-stack developer building scalable web apps, payment systems, and backend APIs from Accra, Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white/90">Quick Links</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/experience" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-gray-400 hover:text-primary transition-all duration-300 w-fit">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white/90">Connect</p>
            <div className="flex gap-4">
              <a href="https://github.com/Darlington-s-store" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253?" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:asomanirawlingsjunior5333@gmail.com" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()}  Rawlings Junior Asomani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
