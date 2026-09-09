export interface WorkRole {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  category: "Engineering & AI" | "Systems & Cloud" | "Academia & Teaching" | "Fintech & Banking" | "Operations & Finance";
  description: string;
  achievements: string[];
  techs: string[];
  featured?: boolean;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  type: string;
  details: string[];
}

export const workExperience: WorkRole[] = [
  {
    id: "lead-engineer",
    title: "Lead Full-Stack Web, Mobile & AI Solutions Engineer",
    company: "Autonomous Engineering & Production Contracts",
    location: "Remote · Kumasi & Accra, Ghana",
    period: "2023 – Present",
    type: "Contract / Full-Stack",
    category: "Engineering & AI",
    featured: true,
    description:
      "Engineering production web platforms, cross-platform mobile applications, end-to-end payment workflows, autonomous voice-powered AI agents, and secure backend microservices for commercial clients and high-traffic event systems.",
    achievements: [
      "Architected and deployed Tribes & Cliqs, a premier event ticketing platform in Ghana with Paystack Mobile Money & card checkout, automated QR code check-in ticketing, and live organizer analytics.",
      "Engineered Atlaswave Travels' voice-powered AI booking assistant, integrating natural language speech-to-text, real-time travel recommendations, and automated flight/hotel itinerary parsing.",
      "Built resilient transactional SMS and email notification pipelines using Arkesel, Twilio, and Resend with delivery webhooks, automatic retries, and idempotent message queues.",
      "Designed normalized relational database schemas across PostgreSQL, Supabase, and MySQL with connection pooling, index optimization, and strict Row-Level Security (RLS) policies.",
      "Enforced enterprise-grade system security: hardened JWT token refresh rotation, Bcrypt password hashing, Zod schema validation, CORS isolation, and role-based access control (RBAC).",
      "Leveraged developer AI tools (Cursor IDE, GitHub Copilot) as engineering force multipliers to accelerate boilerplate delivery and unit test coverage while preserving architectural rigor."
    ],
    techs: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "Paystack MoMo",
      "Voice AI",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "REST APIs"
    ],
  },
  {
    id: "systems-developer",
    title: "Full-Stack Systems Developer & Consultant",
    company: "Commercial Platforms & Institutional Deployments",
    location: "Kumasi, Ghana",
    period: "2022 – 2024",
    type: "Contract / Production",
    category: "Engineering & AI",
    featured: true,
    description:
      "Architected and deployed web applications, Database Management Systems (DBMS), and administrative portals for youth organizations, medical clinics, and automotive service providers.",
    achievements: [
      "Designed and launched the Hinterland Falcons PF Club (Santasi AYM) club portal, streamlining Pathfinder membership registration, attendance logging, dues accounting, and honors tracking.",
      "Engineered production web platforms for Nova Eye Care Clinic (patient appointment bookings, clinic services catalog) and Elshadai Auto Repair (service bookings and automated status alerts).",
      "Implemented multi-provider payment flows with Mobile Money (MTN MoMo, Telecel Cash, AT Money) and credit card processing with automated digital receipt generation.",
      "Managed cloud infrastructure and CI/CD deployment pipelines on Vercel, Render, and Neon PostgreSQL, achieving 99.9% application uptime.",
      "Implemented responsive, accessible mobile-first interfaces ensuring seamless cross-device compatibility across phones, tablets, and desktop workstations."
    ],
    techs: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "Mobile Money API",
      "SMS Gateway",
      "Render",
      "Vercel"
    ],
  },
  {
    id: "cs-tutor",
    title: "Computer Science & Web Development Tutor",
    company: "University of Skills Training and Entrepreneurial Development (USTED)",
    location: "Kumasi, Ghana",
    period: "2023 – 2024",
    type: "Academic / Part-Time",
    category: "Academia & Teaching",
    featured: true,
    description:
      "Instructed undergraduate students in Database Management Systems (DBMS), SQL, JavaScript, Python, and modern software engineering fundamentals.",
    achievements: [
      "Conducted practical laboratory sessions for 60+ computer science students, translating abstract data modeling concepts into hands-on SQL and relational schema implementations.",
      "Designed curriculum modules, code review templates, and hands-on coding exercises for web development, algorithm design, and client-server communication.",
      "Mentored students on software architecture, Git collaboration workflows, and security best practices for their capstone projects.",
      "Evaluated student project submissions and provided actionable feedback on code structure, algorithmic efficiency, and UI/UX design."
    ],
    techs: [
      "Database Systems (DBMS)",
      "SQL",
      "JavaScript",
      "Python",
      "Data Structures",
      "Git"
    ],
  },
  {
    id: "junior-developer",
    title: "Junior Full-Stack Developer",
    company: "Early Career & Freelance Builds",
    location: "Kumasi & Accra, Ghana",
    period: "2021 – 2022",
    type: "Freelance / Contract",
    category: "Engineering & AI",
    featured: true,
    description:
      "Delivered custom client websites, interactive e-learning modules, and digital tools while establishing professional full-stack development practices.",
    achievements: [
      "Built the core interactive modules of an e-learning platform (Fun Lovable Learning), implementing student dashboards, interactive quizzes, and progress analytics.",
      "Integrated early payment gateway prototypes and webhook notification handlers for local merchants.",
      "Developed responsive user interfaces with mobile-first design principles using React and Tailwind CSS.",
      "Managed cloud deployments on Vercel, Render, and Heroku with Git-based feature branching and code reviews."
    ],
    techs: [
      "React",
      "JavaScript",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "Firebase",
      "Git"
    ],
  },
  {
    id: "bank-it-support",
    title: "Assistant Marketing Manager & IT Systems Support",
    company: "KM Community Bank",
    location: "Kumasi, Ghana",
    period: "Mar 2022 – Jan 2023",
    type: "Full-Time",
    category: "Fintech & Banking",
    featured: false,
    description:
      "Managed branch IT infrastructure, workstation network security, and customer-facing digital marketing communications for daily banking operations.",
    achievements: [
      "Maintained branch hardware, local network uptime, and secure workstation configurations for daily banking operations.",
      "Supported customer account communication channels and digital banking touchpoints, boosting operational efficiency.",
      "Trained bank staff on internal software tools, security hygiene, and error troubleshooting.",
      "Coordinated marketing campaigns and promotional initiatives that increased community awareness and customer onboarding."
    ],
    techs: [
      "IT Systems Support",
      "Network Maintenance",
      "Hardware Troubleshooting",
      "Digital Communications",
      "Data Security"
    ],
  },
  {
    id: "software-intern",
    title: "Software Development & Web Intern",
    company: "Tech Collaborations & Client Projects",
    location: "Accra, Ghana",
    period: "2021 – 2022",
    type: "Internship",
    category: "Engineering & AI",
    featured: false,
    description:
      "Contributed to client-facing web features and internal dashboards in a collaborative agile engineering environment.",
    achievements: [
      "Built reusable UI component libraries with React and TypeScript, accelerating project turnaround times.",
      "Wrote unit tests and participated in pull request code reviews, reinforcing disciplined coding standards.",
      "Documented REST API endpoints and data models for developer onboarding and API contract consistency.",
      "Collaborated with UI/UX designers to translate Figma design tokens into clean, responsive React components."
    ],
    techs: [
      "React",
      "TypeScript",
      "REST APIs",
      "Git",
      "Figma",
      "Agile/Scrum"
    ],
  },
  {
    id: "accountant",
    title: "Assistant Accountant & Inventory Administrator",
    company: "Santasi SDA Preparatory School",
    location: "Kumasi, Ghana",
    period: "Aug 2020 – Dec 2020",
    type: "Full-Time",
    category: "Operations & Finance",
    featured: false,
    description:
      "Managed double-entry accounting ledgers, school fee reconciliations, and bookstore inventory logistics.",
    achievements: [
      "Maintained balance sheets, cash flow tracking, and monthly reconciliation for school accounts with zero discrepancy.",
      "Digitized manual bookkeeping processes into structured spreadsheet databases, cutting inventory audit times by 40%.",
      "Applied formal financial accounting principles that directly inform Rawlings' robust architecture of idempotent payment systems and billing databases today."
    ],
    techs: [
      "Financial Accounting",
      "Balance Sheet Reconciliation",
      "Inventory Systems",
      "Microsoft Excel"
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Web Solutions Assistant",
    company: "Local Business Collaborations",
    location: "Kumasi, Ghana",
    period: "2020 – 2021",
    type: "Contract",
    category: "Operations & Finance",
    featured: false,
    description:
      "Built digital presence, custom marketing landing pages, and lead-generation campaigns for local commercial businesses.",
    achievements: [
      "Developed custom landing pages and digital storefronts using responsive HTML/CSS and WordPress.",
      "Configured email newsletter automations and tracked campaign conversions.",
      "Created promotional digital assets and assisted businesses with social media customer outreach."
    ],
    techs: [
      "WordPress",
      "HTML/CSS",
      "Email Marketing",
      "Web Analytics"
    ],
  },
  {
    id: "teacher-secretary",
    title: "Teacher & Staff Administrative Secretary",
    company: "Nana Nkrumah Adventist Junior High School",
    location: "Kumasi, Ghana",
    period: "May 2018 – July 2019",
    type: "Full-Time",
    category: "Academia & Teaching",
    featured: false,
    description:
      "Managed official institutional correspondence, staff documentation, and student academic instruction.",
    achievements: [
      "Drafted official school correspondence, meeting agendas, and administrative records as staff secretary.",
      "Fostered analytical thinking and discipline across students in academic coursework.",
      "Organized school records and developed systematic filing methods to improve administrative efficiency."
    ],
    techs: [
      "Administration",
      "Record Keeping",
      "Executive Communication",
      "Documentation"
    ],
  },
  {
    id: "printing-press",
    title: "Printing Press & Prepress Graphic Specialist",
    company: "Printing Press",
    location: "Kumasi, Ghana",
    period: "2018",
    type: "Full-Time",
    category: "Operations & Finance",
    featured: false,
    description:
      "Operated high-precision production machinery and prepared digital vector layouts for commercial print runs.",
    achievements: [
      "Ensured pixel-perfect vector alignment, color separation, and prepress quality standards for high-volume commercial jobs.",
      "Coordinated client specifications and production scheduling to meet strict print delivery deadlines."
    ],
    techs: [
      "Vector Layouts",
      "CorelDRAW",
      "Prepress Production",
      "Quality Assurance"
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: "bsc-it",
    title: "Bachelor of Science in Information Technology",
    institution: "University of Skills Training and Entrepreneurial Development (USTED)",
    location: "Kumasi, Ghana",
    period: "2022 – Expected 2026",
    type: "Undergraduate Degree",
    details: [
      "Specialized in Database Management Systems (DBMS), Advanced Systems Design, Software Engineering, and Computer Networks.",
      "Conducted extensive laboratory work with relational database normalization (SQL, PostgreSQL, MySQL), distributed client-server architectures, and secure web services.",
      "Served as Computer Science Tutor for peers in programming fundamentals, algorithm design, and web development."
    ],
  },
  {
    id: "ai-prompting",
    title: "AI Prompting Essentials & Prompt Engineering",
    institution: "Professional Certificate",
    location: "Online Professional Credential",
    period: "Issued: 2025",
    type: "AI & Tech Credential",
    details: [
      "Specialized in advanced prompting methods: zero-shot, few-shot, Chain-of-Thought (CoT), and structured JSON schema generation.",
      "Integrated OpenAI APIs and customized models into web applications for real-time recommendations and voice booking agents.",
      "Leveraged AI-assisted development tools (Cursor IDE, GitHub Copilot) to accelerate team delivery velocity while maintaining strict code standards."
    ],
  },
  {
    id: "accounting-cert",
    title: "Accounting Fundamentals - Certificate",
    institution: "Corporate Finance Institute (CFI)",
    location: "Online Professional Credential",
    period: "September 2022",
    type: "Financial & Accounting Credential",
    details: [
      "Mastered double-entry bookkeeping, general ledgers, trial balance reconciliation, and financial statement analysis.",
      "Directly informs software engineering when architecting financial accounting modules, payment webhooks, and ledger databases."
    ],
  },
];
