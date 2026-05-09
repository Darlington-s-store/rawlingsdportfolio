import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{project.title}</span>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden border border-border mb-10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
              width={1280}
              height={800}
            />
          </div>

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
              {project.status && (
                <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {project.status}
                </span>
              )}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" /> GitHub
                  </a>
                </Button>
              )}
              {project.live && (
                <Button size="sm" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-3">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div>
                <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-3">The Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-3">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-primary mb-3">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((t) => (
                    <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="mt-12 pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/projects">
                <ArrowLeft size={16} className="mr-2" /> All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
