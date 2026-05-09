import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  techs: string[];
}

const roles: Role[] = [
  {
    title: "Full-Stack Software Developer",
    company: "Freelance & Team Collaborations",
    location: "Remote · Accra, Ghana",
    period: "2021 – Present",
    type: "Contract / Freelance",
    description:
      "Designing, building, and shipping scalable, production-ready web and mobile applications for global clients. Thriving in cross-functional teams with a focus on clean, maintainable code.",
    achievements: [
      "Architected end-to-end applications from intuitive React frontends to powerful Node.js and Python (Django/Flask) backends.",
      "Delivered a healthcare management platform (Nova Eye Care) with complex scheduling and patient records.",
      "Built an AI-powered travel platform (AtlasWave) integrating LLMs for real-time recommendations.",
      "Successfully delivered custom commercial applications (Rudi Finds Jem) meeting exact stakeholder requirements.",
    ],
    techs: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Supabase", "Neon"],
  },
  {
    title: "Junior Full-Stack Developer",
    company: "Early Career Projects",
    location: "Accra, Ghana",
    period: "2019 – 2021",
    type: "Freelance",
    description:
      "Built the foundation of my technical expertise by delivering small-to-medium scale business tools and web applications.",
    achievements: [
      "Developed a modular LMS (Fun Lovable Learning) with progress tracking and gamification.",
      "Integrated secure payment gateways (Stripe, Mobile Money) for local and international markets.",
      "Deployed and managed applications on cloud platforms like Vercel and Render.",
      "Mastered the software development lifecycle through hands-on project delivery.",
    ],
    techs: ["React", "Express.js", "MySQL", "Firebase", "Tailwind CSS"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          5 years of <span className="text-gradient">building</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          From freelance projects to leading full product builds — here's a timeline of my professional journey as a full-stack developer.
        </p>

        <div className="space-y-0">
          {roles.map((role, index) => (
            <div key={index} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < roles.length - 1 && (
                <div className="absolute left-[15px] md:left-[23px] top-8 bottom-0 w-px bg-border" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Briefcase className="text-primary-foreground" size={14} />
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-hover">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl font-bold">{role.title}</h3>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {role.type}
                  </span>
                </div>

                <p className="font-medium text-sm text-foreground/80 mb-1">{role.company}</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {role.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {role.location}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{role.description}</p>

                {/* Achievements */}
                <ul className="space-y-3 mb-5">
                  {role.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <ArrowUpRight size={14} className="text-primary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {role.techs.map((t) => (
                    <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
