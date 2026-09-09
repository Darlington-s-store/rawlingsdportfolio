import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import frontendStack from "@/assets/frontend-stack.jpg";
import {
  Code2, Server, Database, Smartphone, Cloud, Brain,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    techs: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Express.js", "Python", "Django", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    techs: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Mobile",
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
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
        </ScrollReveal>

        {/* Featured First Stack: Frontend */}
        <ScrollReveal className="mb-6">
          <div className="bg-card rounded-2xl border border-border overflow-hidden card-hover group grid md:grid-cols-12 items-stretch shadow-sm">
            <div className="md:col-span-5 lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] overflow-hidden bg-black/20">
              <img
                src={frontendStack}
                alt="Frontend Stack - React 19, Next.js 15, TypeScript, Tailwind CSS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 md:col-span-7 lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code2 className="text-primary" size={18} />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Core Specialization
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Frontend Engineering</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Specialized in building responsive, high-performance web applications and production interfaces with React 19, Next.js 15, TypeScript, and Tailwind CSS.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3">Technologies in this stack:</p>
                <div className="flex flex-wrap gap-2">
                  {categories[0].techs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => navigate(`/projects?tech=${encodeURIComponent(tech)}`)}
                      className="text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary/25 hover:text-primary px-3.5 py-1.5 rounded-full transition-all cursor-pointer border border-transparent hover:border-primary/20 hover:scale-105 active:scale-95 duration-200"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Other Tech Categories */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 stagger-children">
            {categories.slice(1).map((cat) => (
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
