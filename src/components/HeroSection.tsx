import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Calendar, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]"
    >
      {/* Glowing Radial Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full bg-orange-600/5 blur-[100px] pointer-events-none" style={{ animationDuration: '12s' }} />

      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/95 via-[#050508]/85 to-[#050508]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-10 w-full mt-10">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.05] mb-8 text-white animate-fade-up">
            Rawlings Junior
            <br />
            <span className="text-primary">Asomani</span>
          </h1>

          <p className="text-lg md:text-xl font-medium mb-4 text-white/90 animate-fade-up delay-1 tracking-tight">
            Full-Stack Software Developer
          </p>
          
          <p className="text-base md:text-lg mb-12 leading-relaxed text-white/50 max-w-2xl mx-auto animate-fade-up delay-2">
            I'm a Full-Stack Developer specializing in React, Node.js, and Python. I build reliable web applications, solid APIs, and mobile interfaces that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up delay-3 justify-center">
            <Button variant="hero" size="lg" className="h-14 px-8 text-base rounded-2xl" asChild>
              <Link to="/projects">
                Explore Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-14 px-8 text-base rounded-2xl border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-up delay-3">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Calendar size={16} />
                <span className="font-display text-2xl font-bold text-white">4+</span>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">Years Experience</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Briefcase size={16} />
                <span className="font-display text-2xl font-bold text-white">10+</span>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">Handcrafted Projects</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Users size={16} />
                <span className="font-display text-2xl font-bold text-white">8+</span>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">Global Clients</p>
            </div>
            <div className="flex items-end justify-center gap-3 pt-2">
              <a
                href="https://github.com/Darlington-s-store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
