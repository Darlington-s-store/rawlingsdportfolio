import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroPhoto from "@/assets/Hero.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/4 -right-24 w-[36rem] h-[36rem] rounded-full bg-orange-100/40 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-orange-50/60 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground animate-fade-up">
              Engineering high-impact <span className="text-primary">web, mobile, AI & data systems</span>.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-1">
              I'm <span className="text-foreground font-semibold">Rawlings Junior Asomani</span>, a full-stack, mobile & AI engineer with a deep focus on <span className="text-foreground font-medium">database administration (DBA)</span> and <span className="text-foreground font-medium">systems research</span>. With 5+ years of experience, I build resilient web & mobile applications, autonomous voice AI agents, and optimized, secure database architectures.
            </p>

            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
                <Button size="lg" className="h-12 px-6 sm:px-7 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/25 w-full sm:w-auto" asChild>
                  <Link to="/projects">
                    Explore Selected Work <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-6 text-sm font-semibold rounded-xl border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all w-full sm:w-auto" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>

                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 sm:pt-0 sm:ml-2">
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

              {/* Clean Engineering Capability Matrix */}
              <div className="pt-6 sm:pt-8 border-t border-border/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
                <div className="space-y-1 p-2.5 sm:p-0 rounded-xl bg-orange-50/30 sm:bg-transparent border border-orange-100/60 sm:border-0">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">01 / Web & Mobile</span>
                  <p className="font-display font-bold text-xs sm:text-sm text-foreground">React & Native</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">Next.js 15 · iOS & Android</p>
                </div>

                <div className="space-y-1 p-2.5 sm:p-0 rounded-xl bg-orange-50/30 sm:bg-transparent border border-orange-100/60 sm:border-0">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">02 / AI Engineering</span>
                  <p className="font-display font-bold text-xs sm:text-sm text-foreground">Voice AI & Agents</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">Atlaswave AI · OpenAI</p>
                </div>

                <div className="space-y-1 p-2.5 sm:p-0 rounded-xl bg-orange-50/30 sm:bg-transparent border border-orange-100/60 sm:border-0">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">03 / Database Admin</span>
                  <p className="font-display font-bold text-xs sm:text-sm text-foreground">PostgreSQL & MySQL</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">DBA · Indexing · Redis</p>
                </div>

                <div className="space-y-1 p-2.5 sm:p-0 rounded-xl bg-orange-50/30 sm:bg-transparent border border-orange-100/60 sm:border-0">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">04 / Systems Research</span>
                  <p className="font-display font-bold text-xs sm:text-sm text-foreground">Data Modeling & Pay</p>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">USTED · Paystack MoMo</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <ScrollReveal variant="right" className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              {/* Subtle Warm Shadow Backing */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-orange-200/50 via-orange-100/30 to-transparent blur-2xl pointer-events-none" />

              {/* Clean Large Frame */}
              <div className="relative rounded-3xl p-2.5 sm:p-4 bg-white border-2 border-orange-200/80 shadow-2xl shadow-orange-500/10">
                <div className="overflow-hidden rounded-2xl bg-orange-50/20">
                  <img
                    src={heroPhoto}
                    alt="Rawlings Junior Asomani"
                    className="w-full h-auto object-cover rounded-2xl block hover:scale-[1.01] transition-transform duration-500"
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
