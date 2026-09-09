import { useSearchParams, Link } from "react-router-dom";
import { ChevronRight, X, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { projects, allTechs } from "@/data/projects";

const ProjectsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("tech") || "All";

  const setFilter = (newFilter: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (newFilter === "All") {
      nextParams.delete("tech");
    } else {
      nextParams.set("tech", newFilter);
    }
    setSearchParams(nextParams);
  };

  const filtered = filter === "All" ? projects : projects.filter((p) => p.techs.includes(filter));

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-semibold text-xs uppercase tracking-widest mb-3">Portfolio Showcase</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3">
            Featured <span className="text-gradient">production work</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mb-8">
            Real commercial applications, retail platforms, and social impact systems shipped to production.
          </p>
          {filter !== "All" && (
            <p className="text-muted-foreground text-sm mb-6">
              Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""} built with <span className="text-primary font-semibold">{filter}</span>
            </p>
          )}
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
            <button
              onClick={() => setFilter("All")}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === "All"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              All Projects
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === tech
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {tech}
                {filter === tech && <X size={13} strokeWidth={2.5} />}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        {filtered.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found with <span className="text-primary font-medium">{filter}</span></p>
              <button onClick={() => setFilter("All")} className="mt-4 text-sm text-primary hover:underline">
                Clear filter
              </button>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {filtered.map((project) => {
                let hostname = "case-study";
                try {
                  if (project.live) hostname = new URL(project.live).hostname.replace("www.", "");
                } catch {
                  hostname = "live-demo";
                }

                return (
                  <div
                    key={project.id}
                    className="bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col group stagger-item shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Browser Window Frame Header */}
                    <div className="bg-muted/40 border-b border-border/50 px-4 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400/40" />
                        <span className="w-2 h-2 rounded-full bg-amber-400/40" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/40" />
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground/70 truncate max-w-[180px]">
                        {hostname}
                      </span>
                    </div>

                    {/* Project Screenshot with Link to Details */}
                    <Link to={`/project/${project.id}`} className="relative overflow-hidden block aspect-video bg-black/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={1280}
                        height={800}
                      />
                      {project.status && (
                        <span className="absolute top-3 right-3 text-[10px] font-mono font-bold tracking-wider uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-md shadow-sm">
                          {project.status}
                        </span>
                      )}
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <Link to={`/project/${project.id}`}>
                          <h3 className="font-display font-bold text-lg leading-tight group-hover:text-primary transition-colors mb-2">
                            {project.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.techs.map((t) => (
                            <span
                              key={t}
                              onClick={(e) => { e.preventDefault(); setFilter(t); }}
                              className={`text-[11px] font-medium px-2 py-0.5 rounded-md cursor-pointer transition-colors ${
                                filter === t
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs">
                          <Link
                            to={`/project/${project.id}`}
                            className="inline-flex items-center text-primary font-semibold hover:underline"
                          >
                            Case Study <ChevronRight size={14} className="ml-0.5 group-hover:translate-x-1 transition-transform" />
                          </Link>

                          <div className="flex items-center gap-3">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Repository"
                                className="text-muted-foreground hover:text-primary transition-colors p-1"
                              >
                                <Github size={15} />
                              </a>
                            )}
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium"
                              >
                                Live <ArrowUpRight size={13} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
