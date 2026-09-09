import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase, Calendar, MapPin, ArrowUpRight, GraduationCap,
  Award, Code2, CheckCircle2, Layers, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { workExperience, educationList } from "@/data/experience";

const categories = [
  "All Roles",
  "Engineering & AI",
  "Academia & Teaching",
  "Fintech & Banking",
  "Operations & Finance",
] as const;

type CategoryFilter = (typeof categories)[number];

const educationIcons: Record<string, typeof GraduationCap> = {
  "bsc-it": GraduationCap,
  "ai-prompting": Code2,
  "accounting-cert": Award,
};

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All Roles");

  const filteredRoles = selectedCategory === "All Roles"
    ? workExperience
    : workExperience.filter((r) => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 animate-fade-up">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground/30">/</span>
            <span className="text-foreground font-medium">Experience & Education</span>
          </div>

          {/* Header */}
          <div className="space-y-3 mb-8 sm:mb-10 text-center sm:text-left">
            <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest">
              Career Timeline & Credentials
            </p>
            <h1 className="font-display text-2xl sm:text-4xl font-bold">
              Experience & Academic Foundations
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed">
              A comprehensive chronicle of my journey as a full-stack web and mobile engineer, systems consultant, computer science tutor, and operational systems specialist.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-start border-b border-border mb-8 sm:mb-10 overflow-x-auto no-scrollbar">
            <div className="flex gap-4 sm:gap-8 min-w-full sm:min-w-0">
              <button
                onClick={() => setActiveTab("work")}
                className={`pb-3.5 sm:pb-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 transition-all duration-300 shrink-0 ${
                  activeTab === "work"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Briefcase size={15} />
                  <span>Work Experience ({workExperience.length} Roles)</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`pb-3.5 sm:pb-4 text-xs sm:text-sm font-semibold tracking-wide border-b-2 transition-all duration-300 shrink-0 ${
                  activeTab === "education"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <GraduationCap size={16} />
                  <span>Education & Certifications ({educationList.length})</span>
                </div>
              </button>
            </div>
          </div>

          {/* Tabs Content */}
          <div className="space-y-0">
            {activeTab === "work" ? (
              <ScrollReveal className="space-y-6">
                {/* Category Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5 shrink-0 mr-1">
                    <Layers size={13} className="text-primary" /> Sector:
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

                <div className="stagger-children space-y-8">
                  {filteredRoles.map((role, index) => (
                    <div key={role.id} className="relative pl-7 sm:pl-12 pb-1 stagger-item">
                      {/* Line */}
                      {index < filteredRoles.length - 1 && (
                        <div className="absolute left-[13px] sm:left-[23px] top-8 bottom-0 w-px bg-border" />
                      )}
                      {/* Dot */}
                      <div className="absolute left-0 sm:left-2 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <Briefcase className="text-primary-foreground" size={13} />
                      </div>

                      <div className="bg-card rounded-2xl border border-border p-5 sm:p-8 card-hover shadow-sm">
                        {/* Category & Type */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                            0{index + 1} // {role.category}
                          </span>
                          <span className="font-mono text-xs font-semibold text-primary whitespace-nowrap">
                            {role.type}
                          </span>
                        </div>

                        {/* Title & Company */}
                        <h3 className="font-display text-lg sm:text-xl font-bold mb-1">{role.title}</h3>
                        <p className="font-medium text-sm text-foreground/85 mb-2">{role.company}</p>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-muted-foreground text-xs mb-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-primary" /> {role.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-primary" /> {role.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{role.description}</p>

                        {/* Achievements */}
                        <ul className="space-y-2.5 mb-5">
                          {role.achievements.map((ach, i) => (
                            <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              <ArrowUpRight size={14} className="text-primary mt-0.5 shrink-0" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                          {role.techs.map((t) => (
                            <span key={t} className="text-[11px] sm:text-xs font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal className="stagger-children space-y-6">
                {educationList.map((edu, index) => {
                  const EduIcon = educationIcons[edu.id] || GraduationCap;
                  return (
                    <div key={edu.id} className="relative pl-7 sm:pl-12 pb-1 stagger-item">
                      {/* Line */}
                      {index < educationList.length - 1 && (
                        <div className="absolute left-[13px] sm:left-[23px] top-8 bottom-0 w-px bg-border" />
                      )}
                      {/* Dot */}
                      <div className="absolute left-0 sm:left-2 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                        <EduIcon className="text-primary-foreground" size={13} />
                      </div>

                      <div className="bg-card rounded-2xl border border-border p-5 sm:p-8 card-hover shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <h3 className="font-display text-lg sm:text-xl font-bold">{edu.title}</h3>
                          <span className="font-mono text-xs font-semibold text-primary whitespace-nowrap self-start">
                            {edu.type}
                          </span>
                        </div>

                        <p className="font-medium text-sm text-foreground/85 mb-2">{edu.institution}</p>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-muted-foreground text-xs mb-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-primary" /> {edu.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-primary" /> {edu.location}
                          </span>
                        </div>

                        <ul className="space-y-2.5 pt-2">
                          {edu.details.map((detail, i) => (
                            <li key={i} className="flex gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </ScrollReveal>
            )}
          </div>

          {/* Bottom Action Card */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg mb-1">
                Looking for an engineer who delivers end-to-end?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Available for contract roles, high-impact web & mobile applications, and AI integrations.
              </p>
            </div>
            <Button className="rounded-xl px-6 h-11 text-sm font-semibold shrink-0 w-full sm:w-auto shadow-md shadow-primary/20" asChild>
              <Link to="/contact">
                Start a Conversation <ArrowRight size={14} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
