import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import frontendStack from "@/assets/frontend-stack.jpg";
import backendStack from "@/assets/backend-stack.png";
import databaseStack from "@/assets/database-stack.jpg";
import mobileStack from "@/assets/mobile-stack.jpg";
import cloudInfrastructure from "@/assets/cloud-infrastructure.jpg";
import aiStack from "@/assets/ai-stack.jpg";
import {
  Code2, Server, Database, Smartphone, Cloud, Brain,
} from "lucide-react";

const coreStacks = [
  {
    title: "Frontend Architecture",
    badge: "Core Specialization",
    icon: Code2,
    image: frontendStack,
    imageFit: "object-cover",
    imageBg: "bg-white",
    alt: "Frontend Stack - React 19, Next.js 15, TypeScript, Tailwind CSS",
    description:
      "Specialized in crafting modern, high-performance web applications, fluid micro-interactions, and scalable design systems.",
    techs: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend & API Systems",
    badge: "Core Specialization",
    icon: Server,
    image: backendStack,
    imageFit: "object-cover",
    imageBg: "bg-white",
    alt: "Backend Stack - Node.js, Express, REST APIs, Payments & Messaging",
    description:
      "Architecting reliable REST APIs, payment gateways (Paystack, Stripe, MoMo), SMS & email pipelines (Twilio, Resend), and secure business logic.",
    techs: ["Node.js", "Express.js", "Paystack & Stripe", "Twilio & Resend", "REST APIs"],
  },
  {
    title: "Database Management (DBMS)",
    badge: "Core Specialization",
    icon: Database,
    image: databaseStack,
    imageFit: "object-contain p-4",
    imageBg: "bg-white",
    alt: "Database Stack - PostgreSQL, MySQL, Supabase, Redis",
    description:
      "Comprehensive database management: normalized relational schemas (3NF), query indexing, Redis caching, transaction integrity, and automated backups.",
    techs: ["PostgreSQL", "MySQL", "Supabase", "Redis Caching", "Schema Modeling"],
  },
  {
    title: "Mobile App Development",
    badge: "Core Specialization",
    icon: Smartphone,
    image: mobileStack,
    imageFit: "object-contain p-2",
    imageBg: "bg-white",
    alt: "Mobile Stack - Android & iOS Mobile App Development with React Native, Expo, Apple iOS, Android",
    description:
      "Crafting high-performance, cross-platform mobile experiences for iOS and Android with unified React Native & Expo architectures.",
    techs: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    title: "Cloud & Infrastructure",
    badge: "Core Specialization",
    icon: Cloud,
    image: cloudInfrastructure,
    imageFit: "object-contain p-3",
    imageBg: "bg-white",
    alt: "Cloud Infrastructure - Compute, Storage, Networking, Virtualization, Security, Monitoring & Automation",
    description:
      "Deploying high-availability infrastructure, automated CI/CD pipelines, containerized environments, and cloud architecture.",
    techs: ["AWS", "Google Cloud", "Vercel", "Supabase", "Docker", "Git"],
  },
  {
    title: "AI & Intelligent Systems",
    badge: "Core Specialization",
    icon: Brain,
    image: aiStack,
    imageFit: "object-cover",
    imageBg: "bg-white",
    alt: "AI Stack - AI Integration & Intelligent Systems with LLMs, OpenAI API, LangChain, RAG",
    description:
      "Integrating cutting-edge AI capabilities, retrieval-augmented generation (RAG), prompt architecture, and agentic workflows.",
    techs: ["OpenAI API", "LangChain", "LLMs", "RAG Pipelines", "Prompt Engineering"],
  },
];

const TechStackSection = () => {
  const navigate = useNavigate();

  return (
    <section id="tech" className="px-6 pt-12 pb-20 md:px-12 md:pt-16 md:pb-24 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">Production Tooling</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Technologies I <span className="text-gradient">build with daily</span>
          </h2>
        </ScrollReveal>

        {/* 6 Core Pillars 3x2 Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreStacks.map((stack) => (
              <div
                key={stack.title}
                className="bg-card rounded-2xl border border-border overflow-hidden card-hover group flex flex-col justify-between shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Header */}
                <div className={`relative w-full h-48 sm:h-56 overflow-hidden ${stack.imageBg} border-b border-border/50 flex items-center justify-center`}>
                  <img
                    src={stack.image}
                    alt={stack.alt}
                    className={`w-full h-full ${stack.imageFit} group-hover:scale-105 transition-transform duration-700`}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <stack.icon className="text-primary" size={17} />
                      </div>
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                        {stack.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold mb-2">{stack.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                      {stack.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground/80 mb-3">Production technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {stack.techs.map((tech) => (
                        <button
                          key={tech}
                          onClick={() => navigate(`/projects?tech=${encodeURIComponent(tech)}`)}
                          className="text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary/25 hover:text-primary px-3 py-1 rounded-full transition-all cursor-pointer border border-transparent hover:border-primary/20 hover:scale-105 active:scale-95 duration-200"
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechStackSection;
