import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
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

          {/* Right Column - Profile Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal variant="right" className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative subtle orange glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-orange-200/50 via-orange-100/30 to-transparent blur-lg opacity-70" />

              {/* Photo Card Container */}
              <div className="relative rounded-3xl p-3 bg-white border border-orange-100 shadow-xl shadow-orange-500/5">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
                  <img
                    src={heroPhoto}
                    alt="Rawlings Junior Asomani - Full-Stack Developer"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle gradient for badge legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  {/* Name / Location Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <p className="font-display font-semibold text-sm drop-shadow-sm">Rawlings Junior Asomani</p>
                      <div className="flex items-center gap-1.5 text-xs text-white/90 drop-shadow-sm">
                        <MapPin size={12} className="text-primary" />
                        <span>Kumasi, Ghana</span>
                      </div>
                    </div>
                  </div>
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
