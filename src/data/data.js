import reactImage from "../assets/images/courses/React - The Complete Guide 2025 incl. Next.js, Redux.jpg";
import mckinseyImage from "../assets/images/courses/Screenshot 2025-11-30 125731.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaJira,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

function generateId() {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // fallback
  return Math.random().toString(36).substr(2, 9);
}

export const skillsData = [
  { skill: "HTML", icon: FaHtml5, id: generateId() },
  { skill: "CSS", icon: FaCss3Alt, id: generateId() },
  { skill: "JavaScript", icon: FaJs, id: generateId() },
  { skill: "TypeScript", icon: SiTypescript, id: generateId() },

  { skill: "React", icon: FaReact, id: generateId() },
  { skill: "Next.js", icon: SiNextdotjs, id: generateId() },
  { skill: "Redux Toolkit", icon: SiRedux, id: generateId() },
  { skill: "React Router", icon: FaReact, id: generateId() },

  { skill: "Tailwind CSS", icon: SiTailwindcss, id: generateId() },
  { skill: "Bootstrap", icon: FaBootstrap, id: generateId() },
  { skill: "Git", icon: FaGitAlt, id: generateId() },
  { skill: "GitHub", icon: FaGithub, id: generateId() },
  { skill: "Firebase", icon: SiFirebase, id: generateId() },
  { skill: "Jira", icon: FaJira, id: generateId() },
];
export const words = [
  "creative solutions",
  "interactive apps",
  "clean code",
  "efficient interfaces",
  "React & JS magic",
];

export const bringSkills = [
  "Problem-solving mindset",
  "Clean & maintainable code",
  "User-focused thinking",
  "Clear & effective communication",
  "Attention to detail",
  "Fast learner & adaptable"
]



export const courses = [
  {
    id: generateId(),
    name: "React – The Complete Guide 2025 (Udemy)",
    info: "A hands-on React course focused on building scalable, real-world applications, covering components, state management, hooks, routing, APIs, and clean code best practices.",
    image: reactImage,
    Skills: [
      "Component-based architecture",
      "JSX & rendering",
      "State & props",
      "React Hooks",
      "Forms & user input",
      "Side effects & lifecycle",
      "Routing (React Router)",
      "API integration & async data",
      "Global state (Redux basics)",
      "Clean & maintainable React code",
    ],
  },
  {
    id: generateId(),
    name: "McKinsey Forward Program",
    info: "Program focused on problem solving, critical thinking, data analysis, digital tools, and effective communication.",
    image: mckinseyImage,
    Skills: [
      "Problem solving",
      "Critical thinking",
      "Data analysis",
      "Digital tools",
      "Effective communication",
    ],
  },
];

export const experiencesData = [
  {
    company: "SMART BLOCKS",
    role: "Frontend Developer",
    period: "April 2025 to September 2025",
    description: [
      "Delivered 10+ internal features across React-based projects during a 6-month internship, enhancing application functionality.",
      "Developed 6+ reusable React components, enhancing UI/UX consistency across 4+ existing pages to improve user usability.",
      "Integrated Binance API to retrieve real-time crypto prices, enabling accurate comparison with internal data and enhancing data integrity.",
      "Revamped UI design across 3+ pages, implementing responsive layouts and modern styling with Bootstrap, improving user experience.",
      "Developed interactive user interfaces by applying core React concepts like state management and event handling, enhancing user experience in a live development setting.",
    ],
    skills: [
      "React",
      "JavaScript",
      "JSX",
      "Components",
      "State Management",
      "Frontend Development"
    ],
  },
  {
    company: "SMART BLOCKS KNOOZ",
    role: "Customer Support",
    period: "May 2023 to September 2025",
    description: [
      "Engineered end-to-end customer support workflows using Freshdesk and Freshchat, enhancing ticket routing efficiency by an estimated 35%.",
      "Developed 100+ knowledge base articles to address common user issues, decreasing repetitive support requests by an estimated 25% and enhancing team efficiency.",
      "Developed and implemented a new user onboarding plan for the crypto platform, improving beta user retention by 50% and reducing onboarding completion time by 30% over 3 months.",
      "Addressed 15+ critical issues from 50+ beta users in 3 months, enhancing platform stability.",
      "Built and structured chatbot workflows to guide users effectively and improve engagement.",
      "Automated KYC processes for 50+ users, cutting manual tracking time by 40% through new systems in a 3-month period.",
      "Spearheaded testing and rollout of 8+ new platform features, reducing post-launch bug reports."
    ],
    skills: [
      "Blockchain",
      "Cryptocurrency",
      "Freshdesk",
      "Freshchat",
      "Customer Support",
    ],
  },
  {
    company: "LIGHTIC Company",
    role: "Customer Service Team Leader",
    period: "January 2022 to March 2023",
    description: [
      "Launched and scaled customer service operations, developing core processes and training for 7 agents, improving initial response efficiency.",
      "Mentored a 5-person support team, achieving a 25% performance increase in 12 months via targeted training and management.",
      "Optimized workflows by implementing 5 targeted improvements, reducing process cycle time by 30%, and boosting operational efficiency by 20%.",
      "Enhanced customer experience by reducing response time by 35% and boosting satisfaction scores by 20% in 12 months through structured procedures.",
    ],
    skills: [
      "Team Leadership",
      "Mentoring",
      "Process Improvement",
      "Customer Satisfaction",
      "Data Analysis",
    ],
  },
  {
    company: "Eng. MOH'D M. MAJDALAWI Office",
    role: "Civil Engineering Trainee",
    period: "June 2021 to November 2021",
    description: [
      "Worked in an engineering office as a trainee, gaining hands-on experience in design and supervision.",
    ],
    skills: ["Design", "Supervision", "Civil Engineering Basics"],
  },
];

export const goals = [
  {
    id: generateId(),
    title: "Build advanced, real-world React projects",
    details:
      "Develop and refine complex, real-world React applications to strengthen my practical skills, focusing on clean architecture, reusable components, and performance-conscious patterns.",
  },
  {
    id: generateId(),
    title: "Deepen UI/UX and frontend design skills",
    details:
      "Apply modern UI/UX principles to create intuitive, accessible, and visually polished interfaces, with a strong focus on user experience and responsive design.",
  },
  {
    id: generateId(),
    title: "Master modern frontend tools and best practices",
    details:
      "Expand my frontend expertise by learning tools such as TypeScript, advanced state management patterns, and frameworks like Next.js to build scalable and maintainable applications.",
  },
  {
    id: generateId(),
    title: "Learn and apply the MERN stack for full-stack development",
    details:
      "Begin learning the MERN stack (MongoDB, Express, React, Node.js) to understand backend fundamentals, build full-stack applications, and broaden my capabilities as a well-rounded developer.",
  },
];

