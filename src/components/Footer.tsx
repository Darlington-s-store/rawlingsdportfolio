import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
              Full-stack developer building scalable web apps, payment systems, and backend APIs from Accra, Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-semibold text-sm mb-3">Quick Links</p>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Experience", href: "/experience" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-display font-semibold text-sm mb-3">Connect</p>
            <div className="flex gap-3">
              <a href="https://github.com/Darlington-s-store" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/kwame-darlington-junior-189a80253" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:asomanirawlingsjunior5333@gmail.com" className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Asomani Rawlings Junior
          </p>
          <p className="text-xs text-muted-foreground">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
