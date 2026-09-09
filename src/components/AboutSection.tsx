import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="px-4 sm:px-6 pt-16 pb-14 md:px-12 md:pt-24 md:pb-20 lg:px-24 xl:px-32 section-alt">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">Background & Architecture</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8 sm:mb-12">
            Engineering software with <span className="text-gradient">precision & reliability</span>.
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Narrative Left Column */}
          <ScrollReveal className="lg:col-span-6">
            <div className="space-y-4 sm:space-y-5 text-foreground/85 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                I build software from practical fundamentals: normalized data models, documented API contracts, and responsive, accessible interfaces engineered for real-world devices.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Over the past 5 years in Kumasi, Ghana, I have delivered production systems for businesses, non-profits, and community institutions. Projects include the event ticketing platform <span className="text-foreground font-medium">Tribes & Cliqs</span>, the <span className="text-foreground font-medium">Hinterland Falcons PF Club</span> administration system, retail storefront <span className="text-foreground font-medium">Yaa Baby Enterprise</span>, and the <span className="text-foreground font-medium">Hope for Prisoners</span> humanitarian network.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                My core work spans the complete engineering lifecycle: Node.js backend services and database administration (PostgreSQL, MySQL, Supabase, Redis), modern web and mobile frontends in React 19, Next.js 15, and React Native, alongside dedicated <span className="text-foreground font-medium">AI engineering</span> (autonomous voice agents, LLM pipelines, speech synthesis). I regularly integrate critical services like payment gateways (Paystack Mobile Money & cards, Stripe), automated SMS/email notifications, and developer AI workflows—always structured around defensive validation and data privacy.
              </p>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button className="rounded-xl h-11 px-6 text-sm font-semibold shadow-sm w-full sm:w-auto" asChild>
                  <Link to="/experience">
                    View Career Timeline <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-xl h-11 px-6 text-sm w-full sm:w-auto" asChild>
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
                  num: "01 // WEB & MOBILE",
                  title: "Modular Web & Mobile Apps",
                  desc: "Accessible interfaces and cross-platform native mobile applications built with React 19, Next.js 15, and React Native.",
                },
                {
                  num: "02 // ARCHITECTURE & DBMS",
                  title: "Type-Safe Backend & DBMS",
                  desc: "Predictable REST APIs, strict schema validation, and normalized relational database schemas across PostgreSQL and MySQL.",
                },
                {
                  num: "03 // AI ENGINEERING",
                  title: "Voice AI & Agent Pipelines",
                  desc: "Autonomous conversational agents (Atlaswave Travels), real-time speech recognition, structured LLM prompts, and AI developer tooling.",
                },
                {
                  num: "04 // SECURITY & PAYMENTS",
                  title: "Security & Payment Systems",
                  desc: "Paystack Mobile Money & card checkouts, hardened authentication (JWT, RBAC), encrypted payloads, and webhook verification.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-6 border border-border card-hover stagger-item flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[11px] font-bold text-primary tracking-wider block mb-3">{item.num}</span>
                    <h3 className="font-display font-semibold text-base mb-2 text-foreground">{item.title}</h3>
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
