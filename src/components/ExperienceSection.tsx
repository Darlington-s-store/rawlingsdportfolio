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
    title: "Senior Full-Stack Developer",
    company: "Freelance / Contract",
    location: "Accra, Ghana · Remote",
    period: "Jan 2023 – Present",
    type: "Contract",
    description:
      "Leading end-to-end development of client projects, from architecture design to deployment. Focused on payment-integrated platforms and logistics systems.",
    achievements: [
      "Architected and shipped a wedding management platform processing GHS 50k+ in gifts through Stripe",
      "Built a transport management system handling 200+ daily trip schedules with real-time driver tracking",
      "Reduced API response times by 40% through query optimization and Redis caching on e-commerce platform",
      "Implemented role-based access control and multi-tenant architecture for 3 concurrent client projects",
    ],
    techs: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Firebase", "Azure"],
  },
  {
    title: "Full-Stack Developer",
    company: "Tech Startup (Contract)",
    location: "Accra, Ghana",
    period: "Jun 2021 – Dec 2022",
    type: "Full-time",
    description:
      "Worked on multiple product builds from MVP to production, handling both frontend interfaces and backend API development.",
    achievements: [
      "Developed a travel booking platform serving 1,000+ monthly users with real-time availability",
      "Integrated mobile money and card payment gateways for the Ghanaian market",
      "Set up CI/CD pipelines on Google Cloud, cutting deployment time from hours to minutes",
      "Mentored 2 junior developers and led code review processes for the backend team",
    ],
    techs: ["React", "Express.js", "PostgreSQL", "MySQL", "Google Cloud", "Flutter"],
  },
  {
    title: "Junior Web Developer",
    company: "Freelance",
    location: "Accra, Ghana",
    period: "Mar 2020 – May 2021",
    type: "Freelance",
    description:
      "Started building client websites and small business tools, learning the full development lifecycle hands-on.",
    achievements: [
      "Delivered 8+ client projects including business websites, dashboards, and booking systems",
      "Built a student learning platform with course management and progress tracking for a local school",
      "Learned and applied PostgreSQL, REST API design, and responsive frontend development",
      "Established a client base that grew into long-term contract relationships",
    ],
    techs: ["React", "Node.js", "MySQL", "Tailwind CSS", "Firebase"],
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
