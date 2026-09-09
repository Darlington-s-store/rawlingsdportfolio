import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin, Mail, Github, Linkedin, Terminal, Cpu,
  CheckCircle2, Award, ArrowRight, Calendar, Briefcase,
  Users, Code2, Download, Phone, Smartphone, Globe, Layers,
  Check, Server, ShieldCheck, Zap, Clock, Sparkles, HelpCircle,
  FolderGit2, ChevronRight, CheckCircle, Mic, Volume2, Lock,
  Shield, KeyRound, Bot, Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import heroImage from "@/assets/Hero.jpeg";

const skills = [
  { name: "React 19 / Next.js 15 / Scalable Frontend Architecture", level: 96 },
  { name: "Node.js / Express.js / High-Throughput Backend APIs", level: 95 },
  { name: "AI Integration & Voice-Powered Agents (AtlasWave)", level: 94 },
  { name: "React Native / Expo / iOS & Android Mobile Apps", level: 93 },
  { name: "Application Security & Hardened Auth (JWT, RBAC, Zod)", level: 92 },
  { name: "PostgreSQL / MySQL / Supabase Database Architecture", level: 90 },
  { name: "Cloud & DevOps (AWS, Vercel, Docker, CI/CD)", level: 88 },
];

const techArsenal = [
  {
    category: "Frontend Engineering",
    icon: Globe,
    items: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Vite", "TanStack Query", "Redux Toolkit", "Zustand", "Figma to Code"],
  },
  {
    category: "Backend Architecture",
    icon: Server,
    items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSockets", "Microservices", "Event-Driven Systems", "Postman"],
  },
  {
    category: "AI & Voice Agents",
    icon: Bot,
    items: ["Voice-Powered Agents", "Web Speech API (STT / TTS)", "OpenAI API", "Claude API", "LangChain", "RAG Pipelines", "AI Developer Tooling"],
  },
  {
    category: "Application & System Security",
    icon: ShieldCheck,
    items: ["JWT Auth & Refresh Rotation", "Role-Based Access Control (RBAC)", "Zod Schema Validation", "SQL Injection Defense", "XSS & CSRF Mitigation", "Rate Limiting & Helmet"],
  },
  {
    category: "Cross-Platform Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo EAS", "iOS Development", "Android Development", "React Navigation", "Offline-First Sync", "Push Notifications"],
  },
  {
    category: "Databases & Cloud Infrastructure",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Supabase", "Prisma ORM", "Redis Caching", "AWS (EC2, S3)", "Vercel", "Docker", "CI/CD"],
  },
];

const securityPillars = [
  {
    icon: KeyRound,
    title: "Hardened Authentication",
    desc: "Implementing secure JWT access and refresh token lifecycles, bcrypt/Argon2 password hashing, and granular Role-Based Access Control (RBAC) to enforce strict authorization boundaries.",
  },
  {
    icon: Shield,
    title: "Defensive Input Validation",
    desc: "Using strict Zod schema validation across all API endpoints, parameterized SQL queries to prevent injection, and DOM sanitization to block Cross-Site Scripting (XSS).",
  },
  {
    icon: Lock,
    title: "End-to-End Data Encryption",
    desc: "Enforcing TLS/SSL encryption in transit, encrypting sensitive fields at rest, secure HTTP-only cookies, and zero-trust secrets management with environment isolation.",
  },
  {
    icon: ShieldCheck,
    title: "API Protection & Rate Limiting",
    desc: "Configuring Helmet security headers, fine-grained Cross-Origin Resource Sharing (CORS) rules, and IP-based rate limiting to insulate backends against DDoS and abuse.",
  },
];

const careerMilestones = [
  {
    period: "2024 — Present",
    role: "Senior Full-Stack, Mobile & AI Engineer",
    company: "Autonomous Engineering & International Consulting",
    desc: "Engineering secure, production-grade web platforms, cross-platform mobile apps, and autonomous voice-powered AI agents (such as AtlasWave Travels). Delivering end-to-end architectures that unite modern frontend aesthetics with resilient, hardened backend systems.",
  },
  {
    period: "2022 — 2024",
    role: "Full-Stack & Mobile Systems Engineer",
    company: "Commercial Platforms & High-Traffic Solutions",
    desc: "Architected scalable REST APIs, relational PostgreSQL databases, and cross-platform mobile prototypes with React Native. Delivered secure scheduling platforms and localized commercial engines with automated cloud deployments.",
  },
  {
    period: "2020 — 2022",
    role: "Full-Stack Web Developer",
    company: "Commercial Enterprises & Nonprofits",
    desc: "Delivered customized digital storefronts and inventory management platforms for clients including Yaa Baby Enterprise and Hope for Prisoners advocacy portal, ensuring 100% data integrity and payment security.",
  },
  {
    period: "2019 — 2020",
    role: "Software Engineering Inception",
    company: "Foundations & Academic Engineering",
    desc: "Mastered algorithmic programming, strict web standards, relational database architecture, and computer science fundamentals at USTED in Kumasi, Ghana.",
  },
];

const philosophy = [
  {
    icon: Terminal,
    title: "Full-Stack Craftsmanship",
    desc: "Equal mastery across the entire stack—delivering polished, accessible frontends backed by rock-solid, high-throughput Node.js and PostgreSQL engines.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Default",
    desc: "Treating security not as an afterthought, but as an architectural foundation: defensive validation, hardened authentication, and zero-trust data boundaries.",
  },
  {
    icon: Bot,
    title: "Intelligent AI Integration",
    desc: "Empowering user experiences with natural conversational and voice-powered AI agents, while using AI engineering tools to accelerate development velocity.",
  },
  {
    icon: Cpu,
    title: "Performance & Low Latency",
    desc: "Obsessing over sub-second web load times, efficient database query plans, minimal network payloads, and fluid 60fps mobile transitions.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Security Modeling",
    desc: "Deconstructing core business goals, relational schemas, API boundaries, threat models, and authentication lifecycles before writing code.",
  },
  {
    step: "02",
    title: "Frontend & Voice Agent Prototyping",
    desc: "Crafting fluid, accessible web and mobile interfaces with Tailwind CSS, integrating voice synthesis/recognition and AI agent response pipelines.",
  },
  {
    step: "03",
    title: "Hardened Backend & Data Persistence",
    desc: "Engineering high-throughput REST APIs, input sanitization, database indexing, rate-limiting, and encrypted persistence in PostgreSQL.",
  },
  {
    step: "04",
    title: "Verification, Auditing & Cloud Delivery",
    desc: "Rigorous vulnerability scanning, cross-device testing, bundle optimization, and zero-downtime CI/CD automated deployment to Vercel and AWS.",
  },
];

const valuePropositions = [
  {
    title: "Equally Strong in Backend & Frontend",
    desc: "No gaps between client and server. I build responsive, visually stunning user interfaces and back them with rock-solid, scalable backend APIs and relational databases.",
  },
  {
    title: "Voice-Powered AI & Intelligent Agents",
    desc: "Proven expertise integrating conversational and voice-powered AI agents (demonstrated in AtlasWave Travels) that provide hands-free recommendations and automated customer workflows.",
  },
  {
    title: "Ironclad System Security",
    desc: "All applications are protected with hardened JWT authentication, RBAC authorization, strict Zod validation, parameterized queries, and defensive error boundaries.",
  },
  {
    title: "AI-Accelerated Velocity",
    desc: "I leverage cutting-edge AI engineering tools to automate boilerplate, streamline debugging, and deliver high-quality, production-ready software in record turnaround times.",
  },
];

const faqs = [
  {
    q: "How do you integrate AI and voice agents into production systems?",
    a: "In projects like AtlasWave Travels, I integrate OpenAI LLMs with bidirectional Web Speech APIs (speech recognition & natural synthesis) and custom agentic prompts. This allows users to speak directly to the application, receive spoken guidance, and automatically trigger booking actions with full data validation.",
  },
  {
    q: "Are you equally proficient in both frontend and backend development?",
    a: "Yes. My development philosophy is rooted in full-stack ownership. I architect fast, accessible interfaces with React 19, Next.js 15, and Tailwind CSS, while simultaneously engineering high-throughput backends using Node.js, Express, PostgreSQL, and Supabase.",
  },
  {
    q: "How do you ensure projects and systems are well-secured?",
    a: "Security is built in from the ground up: hardened JWT auth with refresh rotation, role-based access control, strict Zod schema validation to stop malformed payloads, parameterized queries to prevent SQL injection, DOM sanitization against XSS, and rate limiting against DDoS.",
  },
  {
    q: "Do you use modern AI tools in your daily development workflow?",
    a: "Yes. I actively use AI-assisted developer tooling to accelerate architecture scaffolding, generate test cases, refactor complex routines, and optimize queries. This allows me to build faster, smarter, and with superior precision.",
  },
  {
    q: "Are you available for international remote roles or contracts?",
    a: "Yes. I regularly collaborate with international teams and clients across North America, Europe, and Africa. My schedule is structured to provide comfortable working overlap across multiple timezones.",
  },
];

const references = [
  {
    name: "Prof. Portia Addai Boadu",
    role: "Lecturer, USTED",
    phone: "+233 24 358 7655",
  },
  {
    name: "Dr. Frank Gorden",
    role: "Senior Lecturer, USTED",
    phone: "+233 24 365 8174",
  },
  {
    name: "Pr. Kofi Ahenkan",
    role: "CEO, Saint Publications (Kumasi | Canada)",
    phone: "+233 26 400 9020",
  },
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
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-mono font-semibold">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <ScrollReveal>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-muted-foreground/30">/</span>
              <span className="text-foreground font-medium">About Me</span>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Sticky Profile Details */}
            <ScrollReveal variant="left" className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="bg-card border border-border p-6 rounded-3xl text-center space-y-6 shadow-sm">
                <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-orange-200/80 shadow-md shadow-orange-500/5 bg-white">
                  <img src={heroImage} alt="Rawlings Junior Asomani" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <h1 className="font-display text-2xl font-bold text-foreground">Rawlings Junior Asomani</h1>
                  <p className="text-primary text-sm font-semibold">Full-Stack Web & Mobile Developer</p>
                  <p className="text-muted-foreground text-xs pt-1 max-w-xs mx-auto">
                    Powerhouse in Frontend & Backend engineering, voice-powered AI agents, cross-platform mobile apps, and hardened application security.
                  </p>
                </div>

                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-800 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Web, Mobile & AI Projects
                </div>

                {/* Security Focus Indicator */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground bg-secondary/50 py-1.5 px-3 rounded-lg border border-border/60">
                  <ShieldCheck size={13} className="text-primary" />
                  <span className="font-medium text-foreground">Security-First Architecture</span>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-border text-xs text-muted-foreground text-left max-w-xs mx-auto">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                    <span>Kumasi, Ghana (Open to Remote & Relocation)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail size={15} className="text-primary shrink-0 mt-0.5" />
                    <span className="break-all">asomanirawlingsjunior5333@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Phone size={15} className="text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1 text-[11px]">
                      <span>+233 55 294 5333</span>
                      <span>+233 20 031 0301</span>
                      <span>+233 25 750 1827</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-border bg-orange-50/40 rounded-xl">
                  {[
                    { value: "5+ Yrs", label: "Experience", icon: Calendar },
                    { value: "10+", label: "Projects", icon: Briefcase },
                    { value: "8+", label: "Clients", icon: Users },
                  ].map((s) => (
                    <div key={s.label} className="text-center space-y-0.5">
                      <div className="flex items-center justify-center gap-1 text-primary">
                        <s.icon size={13} />
                        <span className="font-display text-sm font-bold text-foreground">{s.value}</span>
                      </div>
                      <p className="text-muted-foreground text-[9px] uppercase tracking-widest font-medium">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Info Grid */}
                <div className="space-y-2 pt-2 text-left text-xs">
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">Core Superpowers:</span>
                    <span className="font-medium text-foreground">Full-Stack, Mobile & AI</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">AI Specialization:</span>
                    <span className="font-medium text-primary">Voice-Powered Agents</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">Timezone:</span>
                    <span className="font-medium text-foreground">GMT / UTC (Global Overlap)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-border/60">
                    <span className="text-muted-foreground">Languages:</span>
                    <span className="font-medium text-foreground">English (Fluent), Twi</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="font-medium text-foreground">B.Sc. IT (USTED)</span>
                  </div>
                </div>

                <div className="flex gap-3 justify-center pt-2">
                  <a href="https://github.com/Darlington-s-store" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-xl bg-secondary border border-border text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors">
                    <Github size={17} />
                  </a>
                  <a href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-xl bg-secondary border border-border text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors">
                    <Linkedin size={17} />
                  </a>
                  <a href="mailto:asomanirawlingsjunior5333@gmail.com" aria-label="Email" className="p-2.5 rounded-xl bg-secondary border border-border text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors">
                    <Mail size={17} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Deep Narrative Content */}
            <div className="lg:col-span-7 space-y-12">
              {/* Detailed Narrative Biography */}
              <ScrollReveal variant="right" className="space-y-5">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">Background & Philosophy</p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                    Engineering secure, high-impact systems with full-stack mastery and intelligent AI.
                  </h2>
                </div>

                <div className="space-y-4 text-foreground/85 text-sm sm:text-base leading-relaxed">
                  <p>
                    I'm <span className="text-foreground font-semibold">Rawlings Junior Asomani</span>, a full-stack software engineer based in Kumasi, Ghana, with over 5 years of hands-on experience delivering commercial web applications, cross-platform mobile apps, and intelligent AI systems.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I pride myself on being exceptionally strong across <span className="text-foreground font-medium">both the backend and the frontend</span>. On the backend, I design resilient, high-throughput Node.js architectures, relational PostgreSQL databases, and secure RESTful APIs. On the frontend, I create fast, intuitive, and responsive interfaces with React 19, Next.js 15, and React Native for iOS and Android.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A defining pillar of my engineering capability is <span className="text-foreground font-medium">AI integration</span>. As demonstrated in my work on the <span className="text-foreground font-semibold">AtlasWave Travels</span> project, I integrated an autonomous <span className="text-foreground font-semibold">voice-powered AI agent</span> with natural speech synthesis and recognition, allowing travelers to discover destinations, plan custom itineraries, and book tours using conversational speech.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Furthermore, I love leveraging modern AI tools to accelerate development workflows, streamline complex refactoring, and automate boilerplate—allowing me to ship polished software at remarkable speed without sacrificing quality. Above all, I ensure that <span className="text-foreground font-medium">every system I build is rigorously secured</span>: protected with hardened authentication, strict input validation, data encryption, and zero-trust access controls.
                  </p>
                </div>
              </ScrollReveal>

              {/* Spotlight: Voice-Powered AI & AtlasWave Travels */}
              <ScrollReveal>
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-orange-50 via-card to-orange-50/30 border-2 border-orange-200/90 space-y-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md shadow-primary/25">
                        <Mic size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold">Featured AI Case Study</span>
                        <h3 className="font-display font-bold text-lg text-foreground">Voice-Powered AI Agent &middot; AtlasWave Travels</h3>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100/80 text-orange-900 border border-orange-200">
                      OpenAI + Web Speech API
                    </span>
                  </div>

                  <p className="text-foreground/85 text-xs sm:text-sm leading-relaxed">
                    In the <strong>AtlasWave Travels</strong> platform, I engineered a fully autonomous, voice-powered AI travel concierge. By bridging OpenAI's language models with real-time speech recognition and text-to-speech voice synthesis, users can converse naturally with the system—asking travel questions, requesting tailored recommendations, and booking tours hands-free.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-background/90 border border-border/80 p-3.5 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-primary text-xs font-semibold">
                        <Volume2 size={14} /> Voice Synthesis
                      </div>
                      <p className="text-[11px] text-muted-foreground">Natural, low-latency audio responses with speech synthesis.</p>
                    </div>
                    <div className="bg-background/90 border border-border/80 p-3.5 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-primary text-xs font-semibold">
                        <Bot size={14} /> Agentic Reasoning
                      </div>
                      <p className="text-[11px] text-muted-foreground">Dynamic prompt pipelines generating personalized travel plans.</p>
                    </div>
                    <div className="bg-background/90 border border-border/80 p-3.5 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-primary text-xs font-semibold">
                        <Sparkles size={14} /> AI-Powered Velocity
                      </div>
                      <p className="text-[11px] text-muted-foreground">Leveraging modern AI tools to accelerate development workflows.</p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">View the live project on the Projects page</span>
                    <Button size="sm" variant="outline" className="rounded-xl h-8 text-xs border-primary/40 text-primary hover:bg-primary/10" asChild>
                      <Link to="/projects">Inspect AtlasWave Case Study <ArrowRight size={12} className="ml-1" /></Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Robust Security & Defense Architecture */}
              <ScrollReveal>
                <div className="space-y-5 pt-8 border-t border-border">
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <ShieldCheck size={16} />
                      <p className="text-xs font-semibold uppercase tracking-wider">Enterprise-Grade Protection</p>
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Bulletproof Security Architecture</h2>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                      Ensuring every project, database, and endpoint is hardened against modern attack vectors.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {securityPillars.map((p) => (
                      <div key={p.title} className="bg-card border border-border p-5 rounded-2xl space-y-2 hover:border-primary/40 transition-all">
                        <div className="flex items-center gap-2 text-primary">
                          <p.icon size={17} />
                          <h3 className="font-display font-semibold text-sm text-foreground">{p.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Dual Web & Mobile Mastery Feature */}
              <ScrollReveal>
                <div className="space-y-5 pt-8 border-t border-border">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Dual Specialization</p>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground">Web & Mobile Application Mastery</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      Delivering top-tier user experiences across browsers and mobile devices with unified engineering standards.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 pt-2">
                    {/* Web Card */}
                    <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:border-primary/40 hover:shadow-md transition-all">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-primary">
                        <Globe size={22} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-foreground mb-1.5">Web Application Architecture</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Sub-second load times, server-side rendering with Next.js 15, accessible UI components, reactive state management, and optimized SEO pipelines for commercial storefronts and SaaS platforms.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                        {["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "RESTful APIs"].map((tag) => (
                          <span key={tag} className="text-[11px] font-medium bg-secondary px-2.5 py-0.5 rounded-md text-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Card */}
                    <div className="bg-card border border-border p-6 rounded-2xl space-y-4 hover:border-primary/40 hover:shadow-md transition-all">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-primary">
                        <Smartphone size={22} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base text-foreground mb-1.5">Cross-Platform Mobile Development</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          Native-feel iOS and Android applications with unified React Native and Expo ecosystems, fluid 60fps animations, offline-first data caching, push notifications, and hardware integrations.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                        {["React Native", "Expo", "iOS", "Android", "Offline Sync"].map((tag) => (
                          <span key={tag} className="text-[11px] font-medium bg-secondary px-2.5 py-0.5 rounded-md text-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Technical Proficiencies with Progress Bars */}
              <ScrollReveal>
                <div className="space-y-5 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold text-foreground">Technical Proficiencies</h2>
                    <span className="text-xs text-muted-foreground">Self-rated by production depth</span>
                  </div>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Categorized Tech Stack Arsenal */}
              <ScrollReveal>
                <div className="space-y-5 pt-8 border-t border-border">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Comprehensive Toolset</p>
                    <h2 className="font-display text-xl font-bold text-foreground">Technology Matrix & Ecosystem</h2>
                    <p className="text-muted-foreground text-xs mt-1">
                      A categorized breakdown of the technologies, runtimes, and frameworks I use on a daily basis.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {techArsenal.map((cat) => (
                      <div key={cat.category} className="bg-card border border-border p-5 rounded-2xl space-y-3 hover:border-primary/40 transition-all">
                        <div className="flex items-center gap-2 text-primary">
                          <cat.icon size={17} />
                          <h3 className="font-display font-semibold text-sm text-foreground">{cat.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.items.map((item) => (
                            <span key={item} className="text-[11px] font-medium bg-secondary/80 border border-border/60 px-2.5 py-1 rounded-md text-foreground">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Career Milestones & Journey Timeline */}
              <ScrollReveal>
                <div className="space-y-6 pt-8 border-t border-border">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Career Journey</p>
                    <h2 className="font-display text-xl font-bold text-foreground">Milestones & Experience Timeline</h2>
                  </div>

                  <div className="relative border-l-2 border-orange-200 ml-3 space-y-8 pl-6">
                    {careerMilestones.map((m, i) => (
                      <div key={i} className="relative group">
                        <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-primary border-4 border-background" />
                        <div className="space-y-1.5">
                          <span className="font-mono text-xs font-semibold text-primary bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/80 inline-block">
                            {m.period}
                          </span>
                          <h3 className="font-display font-bold text-base text-foreground">{m.role}</h3>
                          <p className="text-xs font-medium text-muted-foreground">{m.company}</p>
                          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-1">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Engineering Process */}
              <ScrollReveal>
                <div className="space-y-5 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl font-bold text-foreground">My Engineering Process</h2>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Concept to Production</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {workflowSteps.map((p) => (
                      <div key={p.step} className="bg-card border border-border p-5 rounded-2xl space-y-2 hover:border-primary/40 transition-all">
                        <span className="font-mono text-xs font-bold text-primary">{p.step}</span>
                        <h3 className="font-display font-semibold text-sm text-foreground">{p.title}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Why Work With Me / Value Propositions */}
              <ScrollReveal>
                <div className="space-y-5 pt-8 border-t border-border">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Collaboration Value</p>
                    <h2 className="font-display text-xl font-bold text-foreground">What I Bring to Your Team</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {valuePropositions.map((vp) => (
                      <div key={vp.title} className="bg-card border border-border p-5 rounded-2xl space-y-2 hover:border-primary/40 transition-all">
                        <div className="flex items-center gap-2 text-primary">
                          <CheckCircle size={16} />
                          <h3 className="font-display font-semibold text-sm text-foreground">{vp.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">{vp.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Core Philosophy */}
              <ScrollReveal className="stagger-children">
                <div className="space-y-5 pt-8 border-t border-border">
                  <h2 className="font-display text-xl font-bold text-foreground">Engineering Principles</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {philosophy.map((v, i) => (
                      <div key={i} className="bg-card border border-border p-5 rounded-2xl space-y-2.5 stagger-item hover:border-primary/40 transition-all">
                        <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-primary">
                          <v.icon size={18} />
                        </div>
                        <h3 className="font-display font-semibold text-sm text-foreground">{v.title}</h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Education & Certifications */}
              <ScrollReveal className="stagger-children">
                <div className="space-y-5 pt-8 border-t border-border">
                  <h2 className="font-display text-xl font-bold text-foreground">Education & Certifications</h2>
                  <div className="space-y-3">
                    {[
                      { title: "Bachelor of Science - Information Technology", meta: "Expected: 2026 · USTED" },
                      { title: "Accounting Fundamentals - Certificate", meta: "2022 · Corporate Finance Institute (CFI)" },
                      { title: "AI Prompting Essentials & Prompt Engineering - Certificate", meta: "Issued: 2025" },
                    ].map((e) => (
                      <div key={e.title} className="flex items-center justify-between bg-card border border-border p-4 rounded-xl stagger-item hover:border-primary/30 transition-colors">
                        <div>
                          <h3 className="font-medium text-sm text-foreground">{e.title}</h3>
                          <p className="text-muted-foreground text-xs">{e.meta}</p>
                        </div>
                        <Code2 size={16} className="text-primary shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Professional References */}
              <ScrollReveal className="stagger-children">
                <div className="space-y-5 pt-8 border-t border-border">
                  <h2 className="font-display text-xl font-bold text-foreground">Professional References</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {references.map((r, i) => (
                      <div key={i} className="bg-card border border-border p-4 rounded-xl space-y-2 text-left stagger-item hover:border-primary/30 transition-colors">
                        <h3 className="font-medium text-xs text-foreground leading-tight">{r.name}</h3>
                        <p className="text-[10px] text-primary font-semibold">{r.role}</p>
                        <p className="text-muted-foreground text-[10px] flex items-center gap-1 pt-1 border-t border-border mt-1">
                          <Phone size={10} className="text-primary shrink-0" />
                          {r.phone}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Frequently Asked Questions */}
              <ScrollReveal>
                <div className="space-y-5 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 text-primary">
                    <HelpCircle size={18} />
                    <h2 className="font-display text-xl font-bold text-foreground">Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="bg-card border border-border p-5 rounded-2xl space-y-2">
                        <h3 className="font-display font-semibold text-sm text-foreground flex items-center gap-2">
                          <ChevronRight size={14} className="text-primary shrink-0" />
                          {faq.q}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pl-5">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Callouts */}
              <ScrollReveal>
                <div className="p-6 rounded-3xl bg-orange-50 border border-orange-200/80 space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-foreground">Have an ambitious project in mind?</h3>
                    <p className="text-xs text-muted-foreground">Let's discuss how we can engineer your web, mobile, or AI-powered vision with rock-solid security.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
                    <Button size="lg" className="rounded-xl h-11 px-6 text-sm font-semibold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/25" asChild>
                      <Link to="/contact">Get in Touch <ArrowRight size={15} className="ml-2" /></Link>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-xl h-11 px-6 text-sm border-2 border-border bg-white text-foreground hover:border-primary hover:text-primary transition-all" asChild>
                      <Link to="/projects">View Projects</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
