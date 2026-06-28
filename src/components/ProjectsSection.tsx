import { useSearchParams, Link } from "react-router-dom";
import { ChevronRight, X } from "lucide-react";
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
    <section id="projects" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-gradient">work</span>
        </h2>
        {filter !== "All" && (
          <p className="text-muted-foreground text-sm mb-8">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""} using <span className="text-primary font-medium">{filter}</span>
          </p>
        )}

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "All" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tech ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {tech}
              {filter === tech && <X size={14} strokeWidth={2.5} />}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found with <span className="text-primary font-medium">{filter}</span></p>
            <button onClick={() => setFilter("All")} className="mt-4 text-sm text-primary hover:underline">
              Clear filter
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col group"
              >
                {/* Project Screenshot */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1280}
                    height={800}
                  />
                  {project.status && (
                    <span className="absolute top-3 right-3 text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((t) => (
                      <span
                        key={t}
                        onClick={(e) => { e.preventDefault(); setFilter(t); }}
                        className={`text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition-colors ${
                          filter === t
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary text-sm font-medium">
                    View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
