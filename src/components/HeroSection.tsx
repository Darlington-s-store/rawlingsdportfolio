import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Calendar, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]"
    >
      {/* Glowing Ambient Radial Accents */}
      <div className="absolute top-1/4 left-1/4 w-[34rem] h-[34rem] rounded-full bg-primary/10 blur-[130px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-orange-600/5 blur-[120px] pointer-events-none" style={{ animationDuration: '12s' }} />

      {/* Subtle Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Premium Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/90 via-[#050508]/80 to-[#050508]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-10 w-full mt-6">
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.06] mb-6 text-white animate-fade-up">
            Building modern web products with <span className="text-primary">clarity & speed</span>.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10 animate-fade-up delay-1">
            I'm <span className="text-white font-semibold">Rawlings Junior Asomani</span>, a full-stack engineer with 5+ years of production experience shipping booking platforms, NGO portals, and localized e-commerce storefronts across React, Next.js, Node.js, and PostgreSQL.
          </p>

          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Button variant="hero" size="lg" className="h-13 px-8 text-base rounded-xl font-semibold shadow-lg shadow-primary/20" asChild>
                <Link to="/projects">
                  Explore Selected Work <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" className="h-13 px-7 text-base rounded-xl border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>

              <div className="flex items-center gap-2 ml-0 sm:ml-2 pt-2 sm:pt-0">
                <a
                  href="https://github.com/Darlington-s-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all duration-200"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Real Metrics & Engineering Highlights */}
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 stagger-children">
              <div className="space-y-1 stagger-item">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">5+ Years</span>
                <p className="text-white/40 text-xs font-medium tracking-wide">Production Code</p>
              </div>
              <div className="space-y-1 stagger-item">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">8+ Apps</span>
                <p className="text-white/40 text-xs font-medium tracking-wide">Deployed & Live</p>
              </div>
              <div className="space-y-1 stagger-item">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">Full-Stack</span>
                <p className="text-white/40 text-xs font-medium tracking-wide">React • Node • Postgres</p>
              </div>
              <div className="space-y-1 stagger-item">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">Kumasi, GH</span>
                <p className="text-white/40 text-xs font-medium tracking-wide">Open to Remote / Relo</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
