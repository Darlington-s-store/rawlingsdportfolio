import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Code2, Server, Globe, Zap, Terminal, Cpu,
  CheckCircle2, Award, ArrowRight
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">About</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
          Who I <span className="text-gradient">am</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a Full-Stack Developer based in Kumasi, Ghana, with 5 years of experience building software that works. I design and build end-to-end applications, from clean frontends to optimized database schemas and APIs.
            </p>
            <p>
              I enjoy working in collaborative environments where code quality and reliable systems are valued. I focus on writing maintainable, performant code that translates directly to client needs.
            </p>
            <p>
              My primary stack includes React, Next.js, Node.js, Django, and PostgreSQL. I also build cross-platform mobile apps using React Native and Flutter, and work with cloud services like AWS.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Server, title: "System Architecture", desc: "Robust REST APIs and scalable backend systems" },
              { icon: Zap, title: "AI Integration", desc: "Leveraging OpenAI and LLMs for intelligent features" },
              { icon: Code2, title: "Frontend Mastery", desc: "Pixel-perfect React and TypeScript interfaces" },
              { icon: Globe, title: "Full-Stack Scale", desc: "End-to-end product delivery and cloud deployment" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 border border-border card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Row */}
        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="font-display text-xl font-bold mb-8">Education & Certifications</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm">BSc Information Technology</h4>
                <span className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">2022 - 2026</span>
              </div>
              <p className="text-muted-foreground text-xs">University of Skills Training and Entrepreneurial Development (USTED)</p>
            </div>
            <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm">Accounting Fundamentals</h4>
                <span className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">2022</span>
              </div>
              <p className="text-muted-foreground text-xs">Corporate Finance Institute (CFI)</p>
            </div>
            <div className="bg-card/50 rounded-2xl p-6 border border-border/50">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm">AI Prompting Essentials</h4>
                <span className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">2025</span>
              </div>
              <p className="text-muted-foreground text-xs">AI Prompting Essentials & Prompt Engineering</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          <Button className="rounded-xl h-11 px-6 text-sm" asChild>
            <Link to="/projects">
              View Projects <ArrowRight size={14} className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline" className="rounded-xl h-11 px-6 text-sm" asChild>
            <Link to="/contact">Let's Connect</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
