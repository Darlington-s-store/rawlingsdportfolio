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
    description: "A tailored web application built for a commercial client to manage event bookings and client interactions.",
    techs: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    features: ["Bespoke branding", "Custom functional modules", "Stakeholder collaboration", "Full-stack architecture"],
    problem: "The client needed a tailored booking platform matching their brand guidelines and specific client onboarding workflow.",
    solution: "Built a custom web application from database design to hosting, ensuring clear interfaces and booking management.",
    image: projectWedding,
    github: "https://github.com/Darlington-s-store/wedding",
    live: "https://rudifindsjem.com/",
  },
  {
    id: 2,
    title: "Nova Eye Care Services",
    description: "A clinic portal enabling patient registration, appointment scheduling, and service discovery.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: ["Appointment booking", "Patient information system", "Service showcase", "SEO optimized"],
    problem: "Patients had to call or visit to book appointments, and the clinic lacked a central system for schedules.",
    solution: "Created a professional web application with patient registration, doctor schedules, and clean service showcases.",
    image: projectNova,
    github: "https://github.com/Darlington-s-store/Nova-Eye-Care-Service",
    live: "https://novaeyecareservice-s.vercel.app/",
  },
  {
    id: 3,
    title: "AtlasWave Travel & Tours",
    description: "A travel booking dashboard with a built-in AI guide for personalized destination recommendations.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API"],
    features: ["AI-powered chatbot", "Real-time recommendations", "Tour booking", "User authentication (JWT)"],
    problem: "Users spent hours browsing travel blogs and wanted a single place to get custom guides and book tours.",
    solution: "Designed a dashboard incorporating OpenAI models for chatbot support alongside direct booking options.",
    image: projectTravel,
    github: "https://github.com/Darlington-s-store/atlasWave-travelsa",
    live: "https://atlaswavetravel.vercel.app/",
  },
  {
    id: 4,
    title: "Fun Lovable Learning Platform",
    description: "A learning management portal featuring progress gamification, quizzes, and student analytics.",
    techs: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    features: ["Course management", "Progress tracking", "Gamification", "Student analytics"],
    problem: "Online learning platforms often feel passive and fail to keep students motivated or track progress detail.",
    solution: "Developed an LMS dashboard with progress points, gamification elements, and simple quiz modules.",
    image: projectLearning,
    github: "https://github.com/Darlington-s-store/spark-lms",
  },
  {
    id: 5,
    title: "Elshadai Millenium Travel & Shopping",
    description: "A travel agency website helping students and tourists explore and apply for international consultancy packages.",
    techs: ["React", "Tailwind CSS", "Vite", "Node.js"],
    features: ["Study abroad consultancy", "Package booking", "WhatsApp integration", "Destination discovery"],
    problem: "Prospective students struggled to find clear requirements for study packages and direct consultancy contacts.",
    solution: "Built a fast, responsive site highlighting consultancy paths and linking directly with WhatsApp chat support.",
    image: projectElshadai,
    github: "https://github.com/Darlington-s-store/mytravelconsult",
    live: "https://mytravelconsult.vercel.app/",
  },
  {
    id: 6,
    title: "Hope for Prisoners & Social Justice",
    description: "NGO / Nonprofit Web Presence: Designed and developed the full digital presence for a nonprofit organization focused on social justice and prisoner rehabilitation.",
    techs: ["React", "Tailwind CSS", "Node.js"],
    features: ["Resource management", "Independent updates", "Low bandwidth performance"],
    problem: "The nonprofit needed an accessible, fast digital presence to reach audiences on low-bandwidth connections and allow staff to update resources independently.",
    solution: "Designed and developed a highly optimized, fully accessible React web application with content management capabilities.",
    image: projectTransport,
    live: "https://hopeforprisonersandsocialjustice.org/",
  },
  {
    id: 7,
    title: "Wedding Management & Gift Platform",
    description: "Full-Stack Event Platform: Built a feature-rich wedding platform for event planning, guest management, and online gift coordination.",
    techs: ["React", "Node.js", "Express.js", "PostgreSQL"],
    features: ["Guest management", "Gift registries", "Role-based access", "Mobile responsive"],
    problem: "Couples faced coordination friction managing guests, registries, and RSVPs across multiple fragmented tools.",
    solution: "Built a centralized full-stack wedding event platform featuring guest RSVP tracking, role-based authorization, and registry coordination.",
    image: projectWedding,
  },
  {
    id: 8,
    title: "E-Commerce Platform",
    description: "In Progress: Building a scalable multi-vendor e-commerce solution with product catalogue, cart, order management, and vendor dashboards.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
    features: ["Product catalogue", "Order management", "Vendor dashboards", "Admin permission flows"],
    problem: "Small vendors lack a unified, scalable ecosystem to list products, manage order state, and track earnings.",
    solution: "Architected a multi-vendor e-commerce platform with robust role permissions, catalog tracking, and vendor metrics dashboards.",
    image: projectEcommerce,
  },
];

export const allTechs = [...new Set(projects.flatMap((p) => p.techs))];
