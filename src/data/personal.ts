import { config } from "@/lib/constants";

export const personal = {
  name: "Yenugula Surya Naga Sivaram",
  shortName: "Sivaram Yenugula",
  initials: "YS",
  role: "Software Engineer",
  roles: [
    "Software Engineer",
    "Backend & Full-Stack Developer",
    "AI/ML Enthusiast",
  ],
  tagline:
    "Building scalable backend systems, modern full-stack applications, and practical AI-powered solutions.",
  status: "Software Engineer · Open to Opportunities",
  headline: ["Engineering reliable systems.", "Building meaningful products."],
  intro:
    "I'm a Computer Science and Information Technology engineer with hands-on experience in Java, Spring Boot, Python, SQL, full-stack development, enterprise application modernization, REST APIs, and AI/ML.",
  about: {
    introduction:
      "I'm a Computer Science and Information Technology engineer with hands-on experience spanning backend development, full-stack engineering, enterprise application modernization, databases, APIs, and AI/ML.",
    philosophy:
      "I like understanding systems end-to-end — from API contracts and database schemas to application logic, testing, deployment, and the user experience.",
    interests: [
      "Building practical software systems",
      "Backend engineering and REST APIs",
      "Enterprise application modernization",
      "Databases and data integrity",
      "AI/ML and computer vision",
    ],
    strengths: [
      "Java",
      "Spring Boot",
      "Python",
      "SQL",
      "REST APIs",
      "Full-stack web development",
      "Database engineering",
      "Git/GitHub",
      "Linux",
      "AI/ML",
    ],
  },
  metrics: [
    { label: "Enterprise Applications Analyzed", value: 109, suffix: "+" },
    { label: "Defects Investigated", value: 220, suffix: "+" },
    { label: "Functional Test Cases Executed", value: 56, suffix: "+" },
    { label: "GitHub Pull Requests", value: 20, suffix: "+" },
    { label: "Gesture Recognition Accuracy", value: 92, suffix: "%" },
    { label: "Coding Problems Solved", value: 200, suffix: "+" },
  ],
  ...config,
} as const;
