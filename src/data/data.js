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
    role: "Frontend Intern",
    period: "April 2025 to September 2025",
    description: [
      "Worked on internal web tasks and small projects to gain hands-on Frontend experience.",
      "Learned and applied React fundamentals, building simple interactive components.",
      "Implemented UI features and basic web functionality using modern web technologies.",
      "Practiced state management, event handling, and API integration in React."
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
      "Provided customer support for a cryptocurrency exchange, optimizing queries via Freshdesk and Freshchat.",
      "Developed a knowledge base, reducing support requests and improving self-service.",
      "Streamlined ticketing processes, enhancing response times and customer satisfaction.",
      "Applied blockchain and cryptocurrency knowledge to resolve complex inquiries.",
      "Ensured KYC compliance, improving verification efficiency.",
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
      "Co-founded the company and built customer service operations from the ground up.",
      "Led and mentored a high-performing team, achieving a 20% increase in customer satisfaction.",
      "Ensured SLA compliance, maintaining a 90% adherence rate to service level agreements.",
      "Analyzed performance data, optimizing processes and reducing response time by 30%",
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
      "Working in an engineering office as a trainee in design and supervision.",
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

