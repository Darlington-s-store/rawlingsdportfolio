import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Code2, Server, Globe, Zap, Terminal, Cpu,
  CheckCircle2, Award, ArrowRight
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 pt-20 pb-16 md:px-12 md:pt-24 md:pb-20 lg:px-24 xl:px-32 section-alt">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">Philosophy & Background</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Engineering software with <span className="text-gradient">craftsmanship & purpose</span>.
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Narrative Left Column */}
          <ScrollReveal className="lg:col-span-6">
            <div className="space-y-5 text-foreground/80 leading-relaxed text-base sm:text-lg">
              <p>
                I approach software development from first principles: clean data models, reliable API contracts, and fast, accessible user interfaces that work flawlessly across devices.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Over the past 5 years in Kumasi, Ghana, I have designed and deployed end-to-end applications for real organizations and commercial clients—including localized retail platforms like <span className="text-foreground font-medium">Yaa Baby Enterprise</span>, nonprofit initiatives like <span className="text-foreground font-medium">Hope for Prisoners</span>, and tailored booking engines like <span className="text-foreground font-medium">Rudi Finds Jem</span>.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                My primary production stack centers on <span className="text-foreground font-medium">React, Next.js, Node.js, and PostgreSQL</span>, backed by cross-platform mobile development in React Native. I prioritize maintainable code, testable architecture, and clear client communication.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button className="rounded-xl h-11 px-6 text-sm font-semibold shadow-sm" asChild>
                  <Link to="/experience">
                    View Career Timeline <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-xl h-11 px-6 text-sm" asChild>
                  <Link to="/projects">See Live Work</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Tangible Engineering Principles */}
          <ScrollReveal variant="right" className="lg:col-span-6">
            <div className="grid sm:grid-cols-2 gap-4 stagger-children">
              {[
                {
                  icon: Zap,
                  title: "Performance First",
                  desc: "Sub-second load times, lightweight bundle budgets, and low-bandwidth optimization designed for real-world devices.",
                },
                {
                  icon: Server,
                  title: "Type-Safe Backend",
                  desc: "Robust REST APIs, strict TypeScript validation, and optimized relational schemas in PostgreSQL & Supabase.",
                },
                {
                  icon: Code2,
                  title: "Modern Frontend",
                  desc: "Modular component systems built with React 19, Next.js 15, accessible ARIA patterns, and responsive Tailwind CSS.",
                },
                {
                  icon: Globe,
                  title: "Production Ownership",
                  desc: "Hands-on delivery from architecture diagrams and UX flows to automated CI/CD deployments on Vercel and AWS.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-6 border border-border card-hover stagger-item flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-base mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
