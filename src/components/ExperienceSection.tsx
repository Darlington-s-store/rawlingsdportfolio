import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
  // Tech
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
    title: "Software Development Intern",
    company: "Tech Company Collaboration",
    location: "Accra, Ghana",
    period: "2021 – 2022",
    type: "Internship",
    description:
      "Contributed to internal tools and client-facing features in a collaborative development environment, gaining exposure to agile workflows and production codebases.",
    achievements: [
      "Developed and maintained reusable React components used across multiple internal dashboards.",
      "Wrote integration tests and participated in code reviews to uphold code quality standards.",
      "Collaborated with senior developers to ship bug fixes and minor features on weekly release cycles.",
      "Documented API endpoints and build processes to improve team onboarding and knowledge sharing."
    ],
    techs: ["React", "JavaScript", "Git", "REST APIs", "Figma"],
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
  // Bank
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
  // Assistant Accountant
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
  // Marketing
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
  // Teaching
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
      "Managed print job scheduling and coordinated with clients to meet delivery deadlines.",
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

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            5+ years of <span className="text-gradient">building</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            From freelance projects to leading full product builds - here's a timeline of my professional journey as a full-stack developer.
          </p>
        </ScrollReveal>

        <div className="space-y-0 stagger-children">
          {roles.map((role, index) => (
            <div key={index} className="relative pl-8 md:pl-12 pb-12 last:pb-0 stagger-item">
              {/* Timeline line */}
              {index < roles.length - 1 && (
                <div className="absolute left-[15px] md:left-[23px] top-8 bottom-0 w-px bg-border" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Briefcase className="text-primary-foreground" size={14} />
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-hover">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl font-bold">{role.title}</h3>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {role.type}
                  </span>
                </div>

                <p className="font-medium text-sm text-foreground/80 mb-1">{role.company}</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {role.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {role.location}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{role.description}</p>

                {/* Achievements */}
                <ul className="space-y-3 mb-5">
                  {role.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <ArrowUpRight size={14} className="text-primary mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {role.techs.map((t) => (
                    <span key={t} className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
