import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/Hero.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Linear gradient overlay for readability and depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(5, 5, 8, 0.92) 0%, rgba(5, 5, 8, 0.82) 36%, rgba(20, 12, 6, 0.64) 68%, rgba(249, 115, 22, 0.32) 100%)",
        }}
      />
      {/* Accent glow */}
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6 animate-fade-up">
            <span className="text-primary text-sm font-medium">Available for projects</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up-delay-1 text-white">
            Asomani Rawlings
            <br />
            <span className="text-gradient">Junior</span>
          </h1>

          <p className="text-lg md:text-xl mb-3 animate-fade-up-delay-2 leading-relaxed text-white/80">
            Full-Stack Software Developer
          </p>
          <p className="text-base md:text-lg mb-10 animate-fade-up-delay-3 leading-relaxed text-white/60 max-w-xl">
            5 years building scalable web apps, secure payment systems, and backend APIs across fintech, logistics, and e-commerce.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up-delay-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View My Work <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Stats strip */}
          <div className="flex gap-8 mb-10 animate-fade-up-delay-3">
            <div>
              <p className="font-display text-2xl font-bold text-white">5+</p>
              <p className="text-white/50 text-xs uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-white">10+</p>
              <p className="text-white/50 text-xs uppercase tracking-wider">Projects</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-white">8+</p>
              <p className="text-white/50 text-xs uppercase tracking-wider">Clients</p>
            </div>
          </div>

          <div className="flex gap-3 animate-fade-up-delay-3">
            <a
              href="https://github.com/Darlington-s-store"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 text-white/60 transition-colors hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253?"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 text-white/60 transition-colors hover:bg-primary/10 hover:border-primary/30 hover:text-primary"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
