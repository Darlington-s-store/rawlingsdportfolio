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

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-foreground animate-fade-up">
              Building high-impact <span className="text-primary">web & mobile applications</span>.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-up delay-1">
              I'm <span className="text-foreground font-semibold">Rawlings Junior Asomani</span>, a software engineer with 5+ years of experience engineering web platforms, native iOS & Android applications with React Native, Paystack & Stripe payment systems, and production databases.
            </p>

            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button size="lg" className="h-12 px-7 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/25" asChild>
                  <Link to="/projects">
                    Explore Selected Work <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-6 text-sm font-semibold rounded-xl border-2 border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all" asChild>
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

              {/* Clean Engineering Capability Matrix (No AI-template icon boxes) */}
              <div className="pt-8 border-t border-border/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">01 / Web</span>
                  <p className="font-display font-bold text-sm text-foreground">React 19 & Next.js</p>
                  <p className="text-xs text-muted-foreground">TypeScript · Node.js</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">02 / Mobile</span>
                  <p className="font-display font-bold text-sm text-foreground">React Native</p>
                  <p className="text-xs text-muted-foreground">iOS & Android · Expo</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">03 / Payments</span>
                  <p className="font-display font-bold text-sm text-foreground">Paystack & Stripe</p>
                  <p className="text-xs text-muted-foreground">MoMo · Webhooks</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">04 / Systems</span>
                  <p className="font-display font-bold text-sm text-foreground">PostgreSQL & APIs</p>
                  <p className="text-xs text-muted-foreground">SMS/Email · Voice AI</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Profile Picture (Significantly Larger & More Prominent) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <ScrollReveal variant="right" className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Subtle Warm Shadow Backing */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-orange-200/50 via-orange-100/30 to-transparent blur-2xl pointer-events-none" />

              {/* Clean Large Frame */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-white border-2 border-orange-200/80 shadow-2xl shadow-orange-500/10">
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
