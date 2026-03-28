import projectWedding from "@/assets/wedding.png";
import projectTransport from "@/assets/Trip.jpeg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectTravel from "@/assets/image.png";
import projectLearning from "@/assets/fun.png";

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
    title: "Wedding Management & Gift Platform",
    description: "A full-featured wedding management platform with secure payment processing for gifts and event bookings.",
    techs: ["React", "Node.js", "PostgreSQL", "Stripe"],
    features: ["Stripe payment integration", "Event booking system", "Secure transactions", "User authentication"],
    problem: "Couples needed a centralized platform to manage wedding events and accept monetary gifts securely online.",
    solution: "Built a full-stack platform with Stripe-powered payments, event RSVP management, and a beautiful gift registry interface.",
    image: projectWedding,
    github: "https://github.com/Darlington-s-store/wedding",
    live: "https://rudifindsjem.com/",
  },
  {
    id: 2,
    title: "TripEase Ghana - Transport Management",
    description: "A comprehensive logistics and transport management system for managing buses, car rentals, and domestic flights in Ghana.",
    techs: ["Next.js", "Express.js", "PostgreSQL", "Firebase"],
    features: ["Driver management", "Admin dashboard", "Trip scheduling", "Role-based access control"],
    problem: "Manual transport scheduling was leading to inefficiencies and coordination errors for inter-city travel.",
    solution: "Built a centralized dashboard to automate bus and flight scheduling with real-time status tracking.",
    image: projectTransport,
    github: "https://github.com/Darlington-s-store/tripease-ghana",
  },
  {
    id: 3,
    title: "Drive & Thrive Marketplace",
    description: "A specialized e-commerce platform for automotive accessories and vehicle services.",
    techs: ["React", "Node.js", "MySQL", "Stripe"],
    features: ["Product catalog", "Cart & checkout", "Payment system", "Order management"],
    problem: "The automotive parts market lacked a simplified, secure way for users to find and purchase specialized accessories.",
    solution: "Developed an inventory-focused marketplace with integrated Stripe payments and streamlined product filtering.",
    image: projectEcommerce,
    github: "https://github.com/Darlington-s-store/drive-thrive-market",
  },
  {
    id: 4,
    title: "AtlasWave Travels",
    description: "A travel booking platform enabling users to discover, plan, and book local tours in Ghana with ease.",
    techs: ["React", "Express.js", "PostgreSQL"],
    features: ["Tour discovery", "Booking system", "User reviews", "Payment integration"],
    problem: "Travelers in the region lacked a consolidated way to explore hidden gems and book verified tours securely.",
    solution: "Developed the AtlasWave platform with interactive search, localized tour filtering, and a seamless booking flow.",
    image: projectTravel,
    github: "https://github.com/Darlington-s-store/atlasWave-travelsa",
     live: "https://atlaswavetravel.vercel.app/",
  },
  {
    id: 5,
    title: "SparkLMS - Interactive Learning",
    description: "A specialized learning management system designed to enhance student engagement through progress tracking and modular course structures.",
    techs: ["Next.js", "Firebase", "Tailwind CSS"],
    features: ["Course management", "Progress tracking", "Interactive quizzes", "Student dashboard"],
    problem: "Educational platforms often lack the engaging, interactive elements needed to sustain student motivation.",
    solution: "Developed a modular LMS with progress gamification, clear learning paths, and an intuitive student dashboard.",
    image: projectLearning,
    github: "https://github.com/Darlington-s-store/spark-lms",
  },
];

export const allTechs = [...new Set(projects.flatMap((p) => p.techs))];
