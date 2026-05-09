import projectWedding from "@/assets/wedding.png";
import projectTransport from "@/assets/Trip.jpeg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTravel from "@/assets/image.png";
import projectLearning from "@/assets/fun.png";
import projectNova from "@/assets/nova-eye-care.png";
import projectElshadai from "@/assets/elshadai.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  features: string[];
  problem: string;
  solution: string;
  image: string;
  status?: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Rudi Finds Jem",
    description: "Custom Commercial Web Application: Delivered a bespoke, production web application for a commercial client, meeting specific branding and functional requirements.",
    techs: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    features: ["Bespoke branding", "Custom functional modules", "Stakeholder collaboration", "Full-stack architecture"],
    problem: "The client needed a tailored digital solution that perfectly matched their unique business vision and brand identity.",
    solution: "Architected a full-stack solution from database schema to final deployment, maintaining close collaboration with stakeholders throughout.",
    image: projectWedding,
    github: "https://github.com/Darlington-s-store/wedding",
    live: "https://rudifindsjem.com/",
  },
  {
    id: 2,
    title: "Nova Eye Care Services",
    description: "Healthcare Services Web Application: A professional healthcare platform for an eye care clinic with appointment booking and patient management.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: ["Appointment booking", "Patient information system", "Service showcase", "SEO optimized"],
    problem: "Patients faced difficulties in booking specialized eye care services and managing clinic appointments efficiently.",
    solution: "Created a unified portal for eye care services with real-time appointment scheduling and intuitive UI/UX flows.",
    image: projectNova,
    github: "https://github.com/Darlington-s-store/Nova-Eye-Care-Service",
    live: "https://novaeyecareservice-s.vercel.app/",
  },
  {
    id: 3,
    title: "AtlasWave Travel & Tours",
    description: "AI-Powered Travel & Tour Booking Platform: Enabling users to explore destinations and book tours with intelligent recommendations.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API"],
    features: ["AI-powered chatbot", "Real-time recommendations", "Tour booking", "User authentication (JWT)"],
    problem: "Travelers lacked a consolidated way to explore hidden gems and get personalized travel advice securely.",
    solution: "Built a full-featured platform with an OpenAI-powered chatbot for real-time recommendations and secure booking workflows.",
    image: projectTravel,
    github: "https://github.com/Darlington-s-store/atlasWave-travelsa",
    live: "https://atlaswavetravel.vercel.app/",
  },
  {
    id: 4,
    title: "Fun Lovable Learning Platform",
    description: "EdTech Platform: Interactive educational platform with progress tracking and gamified learning experiences.",
    techs: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    features: ["Course management", "Progress tracking", "Gamification", "Student analytics"],
    problem: "Educational platforms often lack the engaging elements needed to sustain student motivation and track progress.",
    solution: "Developed a modular LMS with progress gamification and an intuitive student dashboard.",
    image: projectLearning,
    github: "https://github.com/Darlington-s-store/spark-lms",
  },
  {
    id: 5,
    title: "Elshadai Millenium Travel & Shopping",
    description: "Premium travel and consultancy platform offering international travel packages and study abroad services.",
    techs: ["React", "Tailwind CSS", "Vite", "Node.js"],
    features: ["Study abroad consultancy", "Package booking", "WhatsApp integration", "Destination discovery"],
    problem: "Students and travelers needed reliable, all-in-one guidance for international travel and study plans.",
    solution: "Developed a responsive platform with educational modules and direct communication channels.",
    image: projectElshadai,
    github: "https://github.com/Darlington-s-store/mytravelconsult",
    live: "https://mytravelconsult.vercel.app/",
  },
];

export const allTechs = [...new Set(projects.flatMap((p) => p.techs))];
