import {
  Code2, Server, Database, Smartphone, Cloud, GitBranch, Brain,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    techs: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    techs: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    techs: ["Flutter", "React Native"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    techs: ["Azure", "Google Cloud"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    techs: ["Git", "GitHub", "Postman"],
  },
  {
    title: "AI Tools",
    icon: Brain,
    techs: ["OpenAI API", "ChatGPT", "GitHub Copilot"],
  },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Technologies I <span className="text-gradient">work with</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  <span
                    key={tech}
                    className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
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
