import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import frontendStack from "@/assets/frontend-stack.jpg";
import backendStack from "@/assets/backend-stack.png";
import databaseStack from "@/assets/database-stack.jpg";
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
    imageBg: "bg-black/20",
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
    imageBg: "bg-black/20",
    alt: "Backend Stack - Node.js, JavaScript, Python, Django",
    description:
      "Architecting reliable REST APIs, server-side data workflows, authentication pipelines, and optimized business logic.",
    techs: ["Node.js", "Express.js", "Python", "Django", "REST APIs"],
  },
  {
    title: "Database Architecture",
    badge: "Core Specialization",
    icon: Database,
    image: databaseStack,
    imageFit: "object-contain p-4",
    imageBg: "bg-white",
    alt: "Database Stack - PostgreSQL, MySQL, Microsoft SQL Server, Oracle",
    description:
      "Engineering structured relational schemas, query performance optimization, indexing, and high-integrity transactional data storage.",
    techs: ["PostgreSQL", "MySQL", "SQL Server", "Oracle"],
  },
];

const supportingCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    techs: ["React Native", "Expo"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    techs: ["AWS", "Google Cloud", "Vercel", "Git"],
  },
  {
    title: "AI Integration",
    icon: Brain,
    techs: ["OpenAI API", "LangChain", "LLMs"],
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

        {/* Triple Core Pillars: Frontend, Backend & Database */}
        <ScrollReveal className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreStacks.map((stack) => (
              <div
                key={stack.title}
                className="bg-card rounded-2xl border border-border overflow-hidden card-hover group flex flex-col justify-between shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Header */}
                <div className={`relative w-full h-48 sm:h-52 overflow-hidden ${stack.imageBg} border-b border-border/50 flex items-center justify-center`}>
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

        {/* 3 Supporting Ecosystem Pillars */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
            {supportingCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-card rounded-2xl p-6 border border-border card-hover group stagger-item flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <cat.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-sm mb-3">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.techs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => navigate(`/projects?tech=${encodeURIComponent(tech)}`)}
                      className="text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary/25 hover:text-primary px-2.5 py-1 rounded-full transition-all cursor-pointer border border-transparent hover:border-primary/20 hover:scale-105 active:scale-95 duration-200"
                    >
                      {tech}
                    </button>
                  ))}
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
