import { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, MapPin, ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { workExperience } from "@/data/experience";

const categories = [
  "All Roles",
  "Engineering & AI",
  "Academia & Teaching",
  "Fintech & Banking",
  "Operations & Finance",
] as const;

type CategoryFilter = (typeof categories)[number];

const ExperienceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All Roles");

  const filteredRoles = selectedCategory === "All Roles"
    ? workExperience
    : workExperience.filter((r) => r.category === selectedCategory);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">
                Career History
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                5+ years of <span className="text-gradient">engineering</span> & systems delivery
              </h2>
            </div>
            <Button variant="outline" className="rounded-xl self-start md:self-auto text-xs sm:text-sm h-10" asChild>
              <Link to="/experience">
                Full Experience & Education <ArrowRight size={14} className="ml-2" />
              </Link>
            </Button>
          </div>

          <p className="text-muted-foreground max-w-2xl mb-8 leading-relaxed text-sm sm:text-base">
            From architecting voice-enabled AI booking engines and Paystack payment platforms to leading database management and tutoring computer science undergraduates—here is my comprehensive professional timeline.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-12">
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 shrink-0 mr-1">
              <Layers size={13} className="text-primary" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-sm shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-0 stagger-children">
            {filteredRoles.map((role, index) => (
              <div key={role.id} className="relative pl-7 sm:pl-12 pb-10 sm:pb-12 last:pb-0 stagger-item">
                {/* Timeline line */}
                {index < filteredRoles.length - 1 && (
                  <div className="absolute left-[13px] sm:left-[23px] top-8 bottom-0 w-px bg-border" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-2 top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Briefcase className="text-primary-foreground" size={13} />
                </div>

                <div className="bg-card rounded-2xl border border-border p-5 sm:p-8 card-hover shadow-sm">
                  {/* Category label */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                      0{index + 1} // {role.category}
                    </span>
                    <span className="font-mono text-xs font-semibold text-primary whitespace-nowrap">
                      {role.type}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="font-display text-lg sm:text-xl font-bold">{role.title}</h3>
                  </div>

                  <p className="font-medium text-sm text-foreground/85 mb-2">{role.company}</p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-muted-foreground text-xs sm:text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-primary" /> {role.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-primary" /> {role.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{role.description}</p>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-5">
                    {role.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        <ArrowUpRight size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {role.techs.map((t) => (
                      <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-xl h-11 px-8 text-sm font-semibold shadow-md shadow-primary/20" asChild>
              <Link to="/experience">
                View Education, Academic Background & Full Credentials <ArrowRight size={15} className="ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
