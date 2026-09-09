import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Briefcase, Calendar, MapPin, ArrowUpRight, GraduationCap,
  Award, Code2, Clock, CheckCircle2, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  techs: string[];
}

const roles: Role[] = [
  {
    title: "Full-Stack Software Developer",
    company: "Remote - Freelance & Team Collaborations",
    location: "Remote · Accra, Ghana",
    period: "2022 – Present",
    type: "Contract / Freelance",
    description:
      "Design and develop full-stack web and mobile applications from requirements through to production deployment using React, TypeScript, Node.js, Python (Django/Flask), and React Native.",
    achievements: [
      "Architect and implement secure REST APIs for authentication (JWT), user management, booking systems, and complex business workflows.",
      "Collaborate in distributed remote teams using structured Git workflows (feature branching, pull requests, peer code reviews) ensuring code quality and team velocity.",
      "Integrate AI capabilities (OpenAI API, custom chatbots) directly into production applications, delivering intelligent user experiences.",
      "Design, optimize, and manage relational databases (PostgreSQL, MySQL) hosted on Neon and Supabase, applying best practices for performance and scalability.",
      "Deploy and maintain applications on Vercel, Render, and Google Cloud Platform, monitoring live environments and resolving production issues.",
      "Leverage AI-assisted development tools (Cursor, GitHub Copilot) as force multipliers to deliver higher-quality code faster without sacrificing engineering rigor."
    ],
    techs: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Supabase", "Neon"],
  },
  {
    title: "Junior Full-Stack Developer",
    company: "Early Career Projects",
    location: "Accra, Ghana",
    period: "2019 – 2021",
    type: "Freelance",
    description:
      "Started as a freelance developer building landing pages, custom dashboards, and business tools.",
    achievements: [
      "Built the core modules of an LMS (Fun Lovable Learning) supporting user dashboards and quizzes.",
      "Implemented Stripe and Mobile Money API payment flows for local e-commerce projects.",
      "Managed deployments and hosting on Vercel, Render, and Heroku.",
      "Learned version control (Git), relational databases, and agile workflows."
    ],
    techs: ["React", "Express.js", "MySQL", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Assistant Marketing Manager / IT Support",
    company: "KM Community Bank",
    location: "Kumasi, Ghana",
    period: "2022 – 2024",
    type: "Full-Time",
    description:
      "Managed marketing initiatives and provided IT support, bridging the bank's digital presence with technical infrastructure needs.",
    achievements: [
      "Managed IT system maintenance and troubleshooting for branch operations, reducing downtime and improving staff productivity.",
      "Developed and executed marketing campaigns that increased community engagement and brand visibility.",
      "Maintained and updated the bank's digital platforms, website content, and customer communication channels.",
      "Trained staff on internal software tools and provided ongoing technical support for daily banking operations."
    ],
    techs: ["IT Support", "Digital Marketing", "Microsoft Office", "Social Media Management", "Troubleshooting"],
  },
  {
    title: "Assistant Accountant / Bookstore Keeper",
    company: "Santasi SDA Preparatory School",
    location: "Kumasi, Ghana",
    period: "2021 – 2022",
    type: "Full-Time",
    description:
      "Managed financial records, assisted with accounting operations, and oversaw bookstore inventory and sales.",
    achievements: [
      "Maintained accurate financial records and reconciled accounts on a monthly basis.",
      "Managed bookstore inventory, procurement, and sales reporting for the school.",
      "Assisted in preparing financial statements and budget reports for school administration.",
      "Implemented basic digital record-keeping systems to improve tracking and reduce manual errors."
    ],
    techs: ["Accounting", "Inventory Management", "Microsoft Excel", "Record Keeping"],
  },
  {
    title: "Digital Marketing Assistant",
    company: "Freelance & Local Business Collaborations",
    location: "Kumasi, Ghana",
    period: "2020 – 2021",
    type: "Contract",
    description:
      "Supported small businesses with online presence, social media strategy, and digital content creation while building technical solutions for their needs.",
    achievements: [
      "Managed social media accounts and scheduled content calendars for 3 local businesses.",
      "Created basic landing pages and marketing websites using WordPress and custom HTML/CSS.",
      "Analyzed audience engagement data and adjusted content strategies to improve reach.",
      "Designed promotional graphics and email newsletters used for product launches."
    ],
    techs: ["WordPress", "HTML/CSS", "Canva", "Social Media Analytics"],
  },
  {
    title: "Teacher / Staff Secretary",
    company: "Nana Nkrumah Adventist Junior High School",
    location: "Kumasi, Ghana",
    period: "May 2018 – July 2019",
    type: "Full-Time",
    description:
      "Taught classes and served as staff secretary, managing school records and administrative tasks.",
    achievements: [
      "Delivered lessons across multiple subjects, improving student engagement and performance.",
      "Managed staff records, meeting minutes, and official school correspondence as secretary.",
      "Assisted in organizing school events and coordinating communication between staff and administration.",
      "Developed and maintained organized filing systems for student and staff documentation."
    ],
    techs: ["Teaching", "Administration", "Microsoft Office", "Record Management"],
  },
  {
    title: "Printing Press Operator / Graphic Design Assistant",
    company: "Printing Press",
    location: "Kumasi, Ghana",
    period: "2018",
    type: "Full-Time",
    description:
      "Operated printing equipment and assisted with graphic design and layout for various print projects.",
    achievements: [
      "Operated and maintained printing machinery for high-volume production runs.",
      "Assisted with graphic design layouts and prepress preparation using design software.",
      "Managed print print job scheduling and coordinated with clients to meet delivery deadlines.",
      "Ensured quality control across all printed materials before client delivery."
    ],
    techs: ["Graphic Design", "Print Production", "CorelDRAW", "Quality Control"],
  },
  {
    title: "Computer Science Tutor",
    company: "University of Skills Training and Entrepreneurial Development (USTED)",
    location: "Kumasi, Ghana",
    period: "2020 – 2022",
    type: "Part-Time",
    description:
      "Tutored undergraduate students in programming fundamentals, web development, and database concepts, bridging the gap between theory and practical application.",
    achievements: [
      "Led weekly tutorials for 30+ students on HTML, CSS, JavaScript, and Python basics.",
      "Designed hands-on coding exercises and graded assignments for introductory programming courses.",
      "Mentored students on personal projects, helping them build portfolios and debug real code.",
      "Developed supplementary learning materials that improved overall class pass rates."
    ],
    techs: ["JavaScript", "Python", "HTML/CSS", "MySQL"],
  },
];

const education = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "University of Skills Training and Entrepreneurial Development (USTED)",
    location: "Kumasi, Ghana",
    period: "Expected: 2026",
    type: "Degree Program",
    icon: GraduationCap,
    details: [
      "Core coursework in Systems Design, Database Management Systems, Data Structures, and Software Development.",
      "Completed practical lab implementations using SQL, JavaScript, Python, and responsive web design.",
      "Engaged in tutoring peers in core computer science modules, leading weekly lab reviews."
    ],
  },
  {
    title: "Accounting Fundamentals - Certificate",
    institution: "Corporate Finance Institute (CFI)",
    location: "Online Professional Certification",
    period: "September 2022",
    type: "Professional Credential",
    icon: Award,
    details: [
      "Mastered double-entry bookkeeping, ledger entries, and monthly accounts reconciliation processes.",
      "Developed competencies in preparing financial statements, balance sheets, and income reports.",
      "Applied accounting insights to support client project scoping and freelance business operations."
    ],
  },
  {
    title: "AI Prompting Essentials & Prompt Engineering",
    institution: "Professional Certificate",
    location: "Online Professional Certification",
    period: "Issued: 2025",
    type: "AI & Tech Credential",
    icon: Code2,
    details: [
      "Specialized in advanced prompting methods: zero-shot, few-shot, and Chain-of-Thought reasoning paradigms.",
      "Integrated OpenAI APIs and customized models into web applications for real-time recommendations.",
      "Leveraged AI-assisted development tools (Cursor IDE, GitHub Copilot) to accelerate team delivery velocity."
    ],
  },
];

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-8 animate-fade-up">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground/30">/</span>
            <span className="text-foreground font-medium">Experience & Education</span>
          </div>

          {/* Header */}
          <div className="space-y-3 mb-10 text-center sm:text-left">
            <h1 className="font-display text-3xl sm:text-4xl font-bold">Experience & Education</h1>
            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
              Discover my professional developer journey, administrative background, and technical credentials.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center sm:justify-start border-b border-border mb-10">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("work")}
                className={`pb-4 text-sm font-semibold tracking-wide border-b-2 transition-all duration-300 ${
                  activeTab === "work"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span>Work Experience</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`pb-4 text-sm font-semibold tracking-wide border-b-2 transition-all duration-300 ${
                  activeTab === "education"
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap size={17} />
                  <span>Education & Credentials</span>
                </div>
              </button>
            </div>
          </div>

          {/* Tabs Content */}
          <div className="space-y-0">
            {activeTab === "work" ? (
              <ScrollReveal className="stagger-children space-y-8">
                {roles.map((role, index) => (
                  <div key={index} className="relative pl-8 sm:pl-12 pb-1 stagger-item">
                    {/* Line */}
                    {index < roles.length - 1 && (
                      <div className="absolute left-[15px] sm:left-[23px] top-8 bottom-0 w-px bg-border" />
                    )}
                    {/* Dot */}
                    <div className="absolute left-0 sm:left-2 top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Briefcase className="text-primary-foreground" size={14} />
                    </div>

                    <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 card-hover shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg sm:text-xl font-bold">{role.title}</h3>
                        <span className="text-[10px] font-medium bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap self-start">
                          {role.type}
                        </span>
                      </div>

                      <p className="font-medium text-sm text-foreground/80 mb-2">{role.company}</p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-muted-foreground text-xs mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {role.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {role.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{role.description}</p>

                      <ul className="space-y-2.5 mb-5">
                        {role.achievements.map((ach, i) => (
                          <li key={i} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                            <ArrowUpRight size={13} className="text-primary mt-1 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                        {role.techs.map((t) => (
                          <span key={t} className="text-[10px] font-medium bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollReveal>
            ) : (
              <ScrollReveal className="stagger-children space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 sm:pl-12 pb-1 stagger-item">
                    {/* Line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-[15px] sm:left-[23px] top-8 bottom-0 w-px bg-border" />
                    )}
                    {/* Dot */}
                    <div className="absolute left-0 sm:left-2 top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <edu.icon className="text-primary-foreground" size={14} />
                    </div>

                    <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 card-hover shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg sm:text-xl font-bold">{edu.title}</h3>
                        <span className="text-[10px] font-medium bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap self-start">
                          {edu.type}
                        </span>
                      </div>

                      <p className="font-medium text-sm text-foreground/80 mb-2">{edu.institution}</p>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-muted-foreground text-xs mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} /> {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {edu.location}
                        </span>
                      </div>

                      <ul className="space-y-2.5 pt-2">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                            <CheckCircle2 size={13} className="text-primary mt-1 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </ScrollReveal>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExperiencePage;
