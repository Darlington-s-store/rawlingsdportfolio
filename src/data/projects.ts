import projectWedding from "@/assets/wedding.png";
import projectHope from "@/assets/hope-for-prisoners.png";
import projectEcommerce from "@/assets/project-ecommerce.png";
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
    description: "NGO & Nonprofit Digital Platform: Designed and developed the web platform for a nonprofit supporting prisoners with relief, advocacy, vocational training, and community empowerment across Ghana.",
    techs: ["React", "Tailwind CSS", "Node.js"],
    features: ["Advocacy & relief showcases", "Vocational training programs", "Community donation flows", "Low-bandwidth accessibility"],
    problem: "The nonprofit needed an accessible, fast digital presence to showcase their humanitarian mission, reach supporters across Ghana, and allow staff to share updates and collect donations.",
    solution: "Designed and developed an optimized, responsive web application highlighting their relief programs, vocational training initiatives, and community support channels.",
    image: projectHope,
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
    title: "E-Commerce & Retail Storefront",
    description: "Full-Stack Retail Platform: An online e-commerce marketplace featuring Ghanaian Cedi (Ghc) pricing, responsive product catalogues, detailed item showcases, and modern checkout.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: ["Dynamic product catalogue", "Currency localized pricing (Ghc)", "Product detail showcases", "Cart & order management", "Dark mode support"],
    problem: "Local merchants and customers needed a clean, localized online shopping experience with transparent pricing in Ghanaian Cedis and mobile-first browsing.",
    solution: "Developed a fast, responsive e-commerce web application with rich product cards, real-time inventory indicators, instant search/filtering, and seamless checkout flows.",
    image: projectEcommerce,
  },
];

export const allTechs = [...new Set(projects.flatMap((p) => p.techs))];
