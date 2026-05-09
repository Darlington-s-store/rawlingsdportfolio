import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Calendar, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectTravel from "@/assets/AtlasWave_Travels.jpeg";
import projectNova from "@/assets/Nova_Eye_Care.jpeg";
import projectElshadai from "@/assets/Elshadai_Millenium.jpeg";

const backgroundImages = [projectTravel, projectNova, projectElshadai];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050508]"
    >
      {/* Background Slideshow */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentImage ? "opacity-40" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 animate-slow-zoom"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}

      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/90 via-[#050508]/80 to-[#050508]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-10 w-full mt-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-white/60 text-xs font-medium uppercase tracking-wider">Available for new opportunities</span>
          </div>

          <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.05] mb-8 text-white animate-fade-up">
            Rawlings Junior
            <br />
            <span className="text-primary">Asomani</span>
          </h1>

          <p className="text-lg md:text-xl font-medium mb-4 text-white/90 animate-fade-up delay-1 tracking-tight">
            Full-Stack Software Developer
          </p>
          
          <p className="text-base md:text-lg mb-12 leading-relaxed text-white/50 max-w-2xl animate-fade-up delay-2">
            Passionate developer with 5 years of experience building scalable, production-ready web and mobile applications. Specializing in clean architecture and robust system design from Accra, Ghana.
          </p>

          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up delay-3">
            <Button variant="hero" size="lg" className="h-14 px-8 text-base" asChild>
              <Link to="/projects">
                Explore Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="h-14 px-8 text-base" asChild>
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 animate-fade-up delay-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <Calendar size={16} />
                <span className="font-display text-2xl font-bold text-white">5+</span>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">Years Experience</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <Briefcase size={16} />
                <span className="font-display text-2xl font-bold text-white">10+</span>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">Handcrafted Projects</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <Users size={16} />
                <span className="font-display text-2xl font-bold text-white">8+</span>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-medium">Global Clients</p>
            </div>
            <div className="flex items-end gap-3 pt-2">
              <a
                href="https://github.com/Darlington-s-store"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/rawlings-junior-asomani-189a80253"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
