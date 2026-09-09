import projectTribes from "@/assets/tribes-and-cliqs.png";
import projectFalcons from "@/assets/hinterland-falcons.png";
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
    title: "Tribes & Cliqs — Premier Events, Concerts & Ticketing",
    description: "Full-Stack Event Discovery & Ticketing Platform: Engineered an end-to-end event management platform featuring real-time revenue analytics in Ghanaian Cedi (GH₵), Paystack Mobile Money & card payments, automated QR ticket generation, and door check-in scanning.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Paystack", "SMS & Email"],
    features: [
      "Live organizer dashboard with real-time revenue (GH₵) & ticket analytics",
      "Paystack integration for Mobile Money (MTN MoMo, Telecel Cash) and cards",
      "Automated digital ticket generation with secure QR code verification",
      "Door check-in scanner and live attendee arrival tracking",
      "Automated transactional SMS and email ticket delivery",
      "Role-based organizer permissions & team collaboration",
    ],
    problem: "Event organizers and concert promoters in Ghana suffered from fragmented ticketing channels, delayed Mobile Money reconciliations, and manual paper check-ins that created massive entrance bottlenecks.",
    solution: "Built a centralized, high-throughput ticketing portal with integrated Paystack checkout, instant SMS/email delivery of QR tickets, and an organizer dashboard providing live sales metrics and quick scanner check-ins.",
    image: projectTribes,
    status: "Live Platform",
    live: "https://tribesandcliqsevent.vercel.app/",
  },
  {
    id: 2,
    title: "Hinterland Falcons PF Club (Santasi AYM Portal)",
    description: "District Club Administration & Member Portal: Engineered a comprehensive management system for the Santasi AYM District Pathfinder Club, automating applicant registration, multi-tier intake approvals, dues accounting, attendance tracking, and honors curriculum progress.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "DBMS", "RBAC"],
    features: [
      "Online applicant registration & executive verification review workflow",
      "Member directory management across all district churches",
      "Club dues, finances & uniform request tracking with reporting",
      "Weekly attendance logging, event management & curriculum honors tracking",
      "Executive role-based access control (RBAC) and external church portal linking",
    ],
    problem: "The Santasi AYM Pathfinder District managed applicant registrations, weekly attendance, and financial dues across multiple churches with paper registers, leading to lost records and administrative delays.",
    solution: "Engineered a secure, cloud-hosted administrative portal that centralizes applicant intake, tracks member attendance and dues, and provides real-time reporting for executive club directors.",
    image: projectFalcons,
    status: "Live System",
    live: "https://hinterlandfalconspfclub.vercel.app/",
  },
  {
    id: 3,
    title: "AtlasWave Travel & Tours",
    description: "Intelligent Travel & Booking Platform: Built a full-stack platform featuring an autonomous voice-powered AI travel agent, personalized destination discovery, and hardened security protocols.",
    techs: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Web Speech API", "JWT & Security"],
    features: [
      "Voice-powered AI agent with speech recognition and natural voice synthesis",
      "Real-time destination recommendations and automated itinerary planning",
      "Hardened JWT auth & role-based access control",
      "Full-stack booking engine with PostgreSQL persistence",
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
    id: 5,
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
    id: 6,
    title: "Yaa Baby Enterprise",
    description: "E-Commerce & Retail Platform: An online retail storefront for Yaa Baby Enterprise featuring Ghanaian Cedi (GH₵) pricing, home appliances, responsive product catalogues, and streamlined ordering.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Paystack"],
    features: ["Dynamic product catalogue", "Ghanaian Cedi (GH₵) pricing", "Product detail showcases", "Mobile-optimized shopping", "Dark mode support"],
    problem: "The enterprise needed a fast, reliable online retail portal to display inventory with transparent Ghanaian Cedi pricing and allow customers to browse and order products seamlessly on mobile.",
    solution: "Built a modern e-commerce storefront with product cards, category filtering, real-time stock status, and a smooth user interface tailored for Ghanaian retail shoppers.",
    image: projectEcommerce,
    live: "https://yaababyenterprise.com/",
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    title: "Wedding Management & Gift Platform",
    description: "Full-Stack Event Platform: Built a feature-rich wedding platform for event planning, guest management, and online gift coordination.",
    techs: ["React", "Node.js", "Express.js", "PostgreSQL"],
    features: ["Guest management", "Gift registries", "Role-based access", "Mobile responsive"],
    problem: "Couples faced coordination friction managing guests, registries, and RSVPs across multiple fragmented tools.",
    solution: "Built a centralized full-stack wedding event platform featuring guest RSVP tracking, role-based authorization, and registry coordination.",
    image: projectWedding,
  },
];

export const allTechs = [...new Set(projects.flatMap((p) => p.techs))];
