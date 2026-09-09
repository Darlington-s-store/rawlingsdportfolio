import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroPhoto from "@/assets/Hero.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center overflow-hidden bg-white pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Subtle Warm Orange Ambient Light */}
      <div className="absolute top-1/4 -right-24 w-[32rem] h-[32rem] rounded-full bg-orange-100/50 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-orange-50/70 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6 text-foreground animate-fade-up">
              Building modern web products with <span className="text-primary">clarity & speed</span>.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 animate-fade-up delay-1">
              I'm <span className="text-foreground font-semibold">Rawlings Junior Asomani</span>, a full-stack engineer with 5+ years of production experience shipping booking platforms, NGO portals, and localized e-commerce storefronts across React, Next.js, Node.js, and PostgreSQL.
            </p>

            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" className="h-13 px-8 text-base rounded-xl font-semibold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/25" asChild>
                  <Link to="/projects">
                    Explore Selected Work <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-13 px-7 text-base rounded-xl border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>

                <div className="flex items-center gap-2 ml-0 sm:ml-2 pt-2 sm:pt-0">
                  <a
                    href="https://github.com/Darlington-s-store"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-11 h-11 flex items-center justify-center rounded-xl border border-border text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-11 h-11 flex items-center justify-center rounded-xl border border-border text-foreground/70 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Profile Picture (Fully Displayed) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal variant="right" className="relative w-full max-w-md lg:max-w-lg">
              {/* Subtle ambient orange glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-orange-200/40 via-orange-100/30 to-transparent blur-xl pointer-events-none" />

              {/* Clean White Card Frame */}
              <div className="relative rounded-3xl p-2 sm:p-2.5 bg-white border border-orange-200/70 shadow-xl shadow-orange-500/5">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src={heroPhoto}
                    alt="Rawlings Junior Asomani"
                    className="w-full h-auto object-contain rounded-2xl block hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
