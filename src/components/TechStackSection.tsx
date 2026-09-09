import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import frontendStack from "@/assets/frontend-stack.jpg";
import backendStack from "@/assets/backend-stack.png";
import databaseStack from "@/assets/database-stack.jpg";
import mobileStack from "@/assets/mobile-stack.jpg";
import cloudInfrastructure from "@/assets/cloud-infrastructure.jpg";
import aiStack from "@/assets/ai-stack.jpg";
const coreStacks = [
  {
    title: "Frontend Architecture",
    badge: "Core Specialization",
    image: frontendStack,
    imageFit: "object-cover",
    imageBg: "bg-white",
    alt: "Frontend Stack - React 19, Next.js 15, TypeScript, Tailwind CSS",
    description:
      "Engineering accessible web applications with clean component trees, responsive layouts, and efficient state management.",
    techs: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend & API Systems",
    badge: "Core Specialization",
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
    image: mobileStack,
    imageFit: "object-contain p-2",
    imageBg: "bg-white",
    alt: "Mobile Stack - Android & iOS Mobile App Development with React Native, Expo, Apple iOS, Android",
    description:
      "Engineering cross-platform mobile applications for iOS and Android with unified React Native & Expo codebases, native device APIs, and offline caching.",
    techs: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    title: "Cloud & Infrastructure",
    badge: "Core Specialization",
    image: cloudInfrastructure,
    imageFit: "object-contain p-3",
    imageBg: "bg-white",
    alt: "Cloud Infrastructure - Compute, Storage, Networking, Virtualization, Security, Monitoring & Automation",
    description:
      "Deploying high-availability infrastructure, automated CI/CD pipelines, containerized environments, and cloud architecture.",
    techs: ["AWS", "Google Cloud", "Vercel", "Supabase", "Docker", "Git"],
  },
  {
    title: "AI Engineering & Voice Agents",
    badge: "Core Specialization",
    image: aiStack,
    imageFit: "object-cover",
    imageBg: "bg-white",
    alt: "AI Stack - AI Engineering, Voice Agents, OpenAI API, Speech Synthesis, LLMs",
    description:
      "Engineering autonomous voice-driven AI agents (Atlaswave Travels), real-time speech recognition, structured LLM prompt workflows, and AI developer tooling.",
    techs: ["Voice AI Agents", "OpenAI API", "Web Speech API", "LLM Prompting", "Function Calling", "RAG Pipelines"],
  },
];

const TechStackSection = () => {
  const navigate = useNavigate();

  return (
    <section id="tech" className="px-4 sm:px-6 pt-12 pb-16 md:px-12 md:pt-16 md:pb-24 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">Production Tooling</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8 sm:mb-10">
            Technologies I <span className="text-gradient">build with daily</span>
          </h2>
        </ScrollReveal>

        {/* 6 Core Pillars 3x2 Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreStacks.map((stack, index) => (
              <div
                key={stack.title}
                className="bg-card rounded-2xl border border-border overflow-hidden card-hover group flex flex-col justify-between shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Header */}
                <div className={`relative w-full h-44 sm:h-52 md:h-56 overflow-hidden ${stack.imageBg} border-b border-border/50 flex items-center justify-center`}>
                  <img
                    src={stack.image}
                    alt={stack.alt}
                    className={`w-full h-full ${stack.imageFit} group-hover:scale-105 transition-transform duration-700`}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
                        0{index + 1} // {stack.badge}
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
                          className="text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary/15 hover:text-primary px-2.5 py-1 rounded-md transition-all cursor-pointer border border-transparent hover:border-primary/20 duration-200"
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
