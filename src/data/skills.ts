import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  { category: "Programming", skills: ["Java", "Python", "SQL", "C"] },
  {
    category: "Backend",
    skills: ["Spring Boot", "Flask", "REST APIs", "JDBC", "Maven", "JSON"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Jinja2"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Microsoft SQL Server", "MongoDB", "Supabase"],
  },
  {
    category: "AI / ML",
    skills: [
      "TensorFlow",
      "OpenCV",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "CNN",
      "NumPy",
      "AI/LLM concepts",
    ],
  },
  {
    category: "Messaging / Integration",
    skills: ["Apache Kafka", "ActiveMQ"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "Jira", "Power BI"],
  },
  {
    category: "Dev / System",
    skills: [
      "Linux",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "System Design fundamentals",
    ],
  },
  {
    category: "Core CS",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  { category: "Deployment", skills: ["Vercel", "Render"] },
];

/** Layered engineering stack visualization. */
export const engineeringStack = [
  {
    layer: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    layer: "Backend",
    skills: ["Java", "Spring Boot", "Flask", "REST APIs"],
  },
  {
    layer: "Data",
    skills: ["MySQL", "SQL Server", "MongoDB", "Supabase"],
  },
  {
    layer: "Infrastructure / Tools",
    skills: ["Linux", "Git", "Maven", "Jira", "Kafka", "ActiveMQ"],
  },
  {
    layer: "AI / ML",
    skills: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
  },
];

export const problemSolving = {
  count: "200+",
  label: "Problems Solved",
  platforms: ["LeetCode", "HackerRank", "CodeStudio"],
  focusAreas: [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Trees",
    "Graphs",
    "Dynamic Programming",
    "Recursion",
    "OOP",
    "Algorithms",
  ],
};
