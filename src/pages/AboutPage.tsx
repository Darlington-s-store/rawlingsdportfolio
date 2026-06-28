import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, Mail, Github, Linkedin, Terminal, Cpu,
  CheckCircle2, Award, ArrowRight, Calendar, Briefcase,
  Users, Code2, Download, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Hero.jpeg";

const skills = [
  { name: "React / Next.js / Tailwind CSS", level: 95 },
  { name: "TypeScript / JavaScript (Advanced)", level: 92 },
  { name: "Node.js / Express.js / REST APIs", level: 90 },
  { name: "Python (Django / Flask)", level: 85 },
  { name: "PostgreSQL / MySQL / Supabase", level: 88 },
  { name: "AI Prompting & LLM Integration", level: 93 },
  { name: "Data Entry & CSV/Sheets Processing", level: 90 },
];

const philosophy = [
  { icon: Terminal, title: "Clean Code & Typing", desc: "Strongly-typed TypeScript and modular React code that is self-documenting and maintainable." },
  { icon: Cpu, title: "Performance First", desc: "Fast load times, lightweight bundles, and optimal database queries." },
  { icon: CheckCircle2, title: "Business Alignment", desc: "Matching technical features directly to stakeholder needs and business goals." },
  { icon: Award, title: "Reliable Deliveries", desc: "Production-ready apps with robust error handling and secure integrations." },
];

const references = [
  {
    name: "Prof. Portia Addai Boadu",
    role: "Lecturer, USTED",
    phone: "+233 24 358 7655"
  },
  {
    name: "Dr. Frank Gorden",
    role: "Senior Lecturer, USTED",
    phone: "+233 24 365 8174"
  },
  {
    name: "Pr. Kofi Ahenkan",
    role: "CEO, Saint Publications (Kumasi | Canada)",
    phone: "+233 26 400 9020"
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        setTimeout(() => setWidth(level), 200);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-foreground/80 font-medium">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10 animate-fade-up">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground/30">/</span>
            <span className="text-foreground font-medium">About Me</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Sticky Profile Details */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 animate-fade-up">
              <div className="bg-card border border-border p-6 rounded-2xl text-center space-y-6 shadow-sm">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border border-border">
                  <img src={heroImage} alt="Rawlings Junior Asomani" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <h1 className="font-display text-2xl font-bold text-foreground">Rawlings Junior Asomani</h1>
                  <p className="text-primary text-sm font-medium">Full-Stack Software Developer</p>
                </div>
                
                <div className="space-y-3.5 pt-4 border-t border-border text-xs text-muted-foreground text-left max-w-xs mx-auto">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                    <span>Accra, Ghana (Open to Remote & Relocation)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail size={14} className="text-primary shrink-0 mt-0.5" />
                    <span>asomanirawlingsjunior5333@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone size={14} className="text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1 text-[11px]">
                      <span>+233 55 294 5333</span>
                      <span>+233 20 031 0301</span>
                      <span>+233 25 750 1827</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-border">
                  {[
                    { value: "4+ Yrs", label: "Experience", icon: Calendar },
                    { value: "10+", label: "Projects", icon: Briefcase },
                    { value: "8+", label: "Clients", icon: Users },
                  ].map((s) => (
                    <div key={s.label} className="text-center space-y-0.5">
                      <div className="flex items-center justify-center gap-1 text-primary">
                        <s.icon size={12} />
                        <span className="font-display text-sm font-bold text-foreground">{s.value}</span>
                      </div>
                      <p className="text-muted-foreground/70 text-[9px] uppercase tracking-widest font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2.5 justify-center">
                  <a href="https://github.com/Darlington-s-store" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"><Github size={16} /></a>
                  <a href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"><Linkedin size={16} /></a>
                  <a href="mailto:asomanirawlingsjunior5333@gmail.com" className="p-2.5 rounded-xl bg-muted border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"><Mail size={16} /></a>
                </div>
              </div>
            </div>

            {/* Right Column - Narrative Content */}
            <div className="lg:col-span-7 space-y-10 animate-fade-up">
              {/* Bio */}
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  I'm a software engineer based in Kumasi, Ghana, with 5 years of experience building web applications, APIs, and mobile clients. I design end-to-end solutions - from React frontends to optimized PostgreSQL schemas.
                </p>
                <p>
                  I started freelancing in 2019 and have since worked with clients globally. I focus on clean architecture, type-safe code, and reliable delivery.
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-5 pt-6 border-t border-border">
                <h2 className="font-display text-lg font-bold text-foreground">Technical Skills</h2>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <div className="space-y-5 pt-6 border-t border-border">
                <h2 className="font-display text-lg font-bold text-foreground">How I Work</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {philosophy.map((v, i) => (
                    <div key={i} className="bg-card border border-border p-5 rounded-xl space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <v.icon size={16} />
                      </div>
                      <h3 className="font-display font-semibold text-xs text-foreground">{v.title}</h3>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="space-y-5 pt-6 border-t border-border">
                <h2 className="font-display text-lg font-bold text-foreground">Education & Certifications</h2>
                <div className="space-y-3">
                  {[
                    { title: "Bachelor of Science - Information Technology", meta: "Expected: 2026 · USTED" },
                    { title: "Accounting Fundamentals - Certificate", meta: "2022 · Corporate Finance Institute (CFI)" },
                    { title: "AI Prompting Essentials & Prompt Engineering - Certificate", meta: "Issued: 2025" },
                  ].map((e) => (
                    <div key={e.title} className="flex items-center justify-between bg-card border border-border p-4 rounded-xl">
                      <div>
                        <h3 className="font-medium text-sm text-foreground">{e.title}</h3>
                        <p className="text-muted-foreground text-xs">{e.meta}</p>
                      </div>
                      <Code2 size={16} className="text-primary shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* References */}
              <div className="space-y-5 pt-6 border-t border-border">
                <h2 className="font-display text-lg font-bold text-foreground">References</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {references.map((r, i) => (
                    <div key={i} className="bg-card border border-border p-4 rounded-xl space-y-2 text-left">
                      <h3 className="font-medium text-xs text-foreground leading-tight">{r.name}</h3>
                      <p className="text-[10px] text-primary font-medium">{r.role}</p>
                      <p className="text-muted-foreground text-[10px] flex items-center gap-1 pt-1 border-t border-border/40 mt-1">
                        <Phone size={10} className="text-primary shrink-0" />
                        {r.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
                <Button className="rounded-xl h-10 px-5 text-sm" asChild>
                  <Link to="/projects">View Projects <ArrowRight size={14} className="ml-2" /></Link>
                </Button>
                <Button variant="outline" className="rounded-xl h-10 px-5 text-sm" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" className="rounded-xl h-10 px-5 text-sm" asChild>
                  <a href="/resume.pdf" target="_blank"><Download size={14} className="mr-2" /> Resume</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
