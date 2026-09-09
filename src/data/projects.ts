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
    description: "Intelligent Travel & Booking Platform: Built a full-stack platform featuring an autonomous voice-powered AI travel agent, personalized destination discovery, and hardened security protocols.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Web Speech API", "JWT & Security"],
    features: [
      "Voice-powered AI agent with speech recognition",
      "Real-time destination recommendations",
      "Hardened JWT auth & role-based access control",
      "Full-stack booking engine with PostgreSQL",
      "Defensive validation & secure payment flows",
    ],
    problem: "Travelers faced cumbersome booking forms and scattered itineraries, needing an intuitive, voice-enabled assistant to plan trips, get real-time answers, and securely reserve tours.",
    solution: "Engineered a high-performance frontend and resilient backend integrating OpenAI models with bidirectional voice synthesis/recognition, strict input sanitization, and encrypted data storage.",
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
    title: "Yaa Baby Enterprise",
    description: "E-Commerce & Retail Platform: An online retail storefront for Yaa Baby Enterprise featuring Ghanaian Cedi (Ghc) pricing, home appliances, responsive product catalogues, and streamlined ordering.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: ["Dynamic product catalogue", "Ghanaian Cedi (Ghc) pricing", "Product detail showcases", "Mobile-optimized shopping", "Dark mode support"],
    problem: "The enterprise needed a fast, reliable online retail portal to display inventory with transparent Ghanaian Cedi pricing and allow customers to browse and order products seamlessly on mobile.",
    solution: "Built a modern e-commerce storefront with product cards, category filtering, real-time stock status, and a smooth user interface tailored for Ghanaian retail shoppers.",
    image: projectEcommerce,
    live: "https://yaababyenterprise.com/",
  },
];

export const allTechs = [...new Set(projects.flatMap((p) => p.techs))];
