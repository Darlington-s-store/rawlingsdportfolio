import { useNavigate } from "react-router-dom";
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
    techs: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    techs: ["React Native", "Expo", "Flutter"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    techs: ["AWS", "Docker", "Google Cloud", "Vercel", "Git"],
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
    <section id="tech" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Technologies I <span className="text-gradient">work with</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-2xl p-6 border border-border card-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-semibold text-sm mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
