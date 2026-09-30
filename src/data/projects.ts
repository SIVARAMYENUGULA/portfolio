import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "subscription-management",
    slug: "subscription-management-system",
    title: "Subscription Management System",
    category: "Full Stack",
    priority: 1,
    featured: true,
    tagline: "Scalable subscription platform with role-based access control.",
    description:
      "A scalable subscription management system supporting role-based access control, subscription plan management, profile handling, administrative workflows, and reusable frontend/backend components.",
    technologies: ["Flask", "React", "MySQL", "Jinja2", "REST APIs"],
    features: [
      "Role-based access control",
      "User management",
      "Subscription plans",
      "Profile management",
      "CRUD operations",
      "Database optimization",
      "Reusable React components",
      "Jinja2 components",
      "Email notifications",
      "Live alerts",
      "Interactive dashboards",
    ],
    highlights: [
      "Improved query execution by approximately 30%",
      "AI-driven automation/insights",
      "Reusable frontend/backend components",
    ],
    keyAchievement: "~30% faster query execution",
    problem:
      "Managing subscription plans, users, and role-based permissions at scale requires a maintainable architecture with clear separation of concerns and optimized data access.",
    solution:
      "Built a Flask + React system with role-based access control, reusable UI components, and an optimized MySQL schema to support subscription workflows and administrative operations.",
    architecture: [
      "React / Jinja2 UI",
      "Flask REST API layer",
      "Business & subscription logic",
      "MySQL (optimized schema)",
    ],
    challenges: [
      "Designing a flexible role and permission model",
      "Optimizing frequent subscription queries",
      "Keeping frontend and backend components reusable",
    ],
    decisions: [
      "Used role-based access control for clear authorization boundaries",
      "Optimized MySQL queries and indexing for ~30% faster execution",
      "Componentized UI for reuse across admin and user views",
    ],
    results: [
      "~30% improvement in query execution",
      "Reusable component library for faster iteration",
    ],
  },
  {
    id: "event-management",
    slug: "enterprise-event-management-system",
    title: "Enterprise Event Management System",
    category: "Full Stack",
    priority: 2,
    featured: true,
    tagline:
      "Full-stack event platform with auth, dashboards, and AI insights.",
    description:
      "A full-stack event management platform supporting authentication, CRUD operations, administrative workflows, database validation, automated email notifications, secure session handling, live alerts, and interactive dashboards.",
    technologies: [
      "Flask",
      "Python",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs",
    ],
    features: [
      "User authentication",
      "CRUD operations",
      "Admin dashboard",
      "Event management",
      "SQL constraints",
      "Validation logic",
      "Automated email notifications",
      "Secure sessions",
      "Live alerts",
      "Interactive dashboards",
    ],
    highlights: [
      "AI chatbot capabilities",
      "Historical application data analysis",
      "ML/LLM-based insights",
    ],
    keyAchievement: "Secure sessions + automated notifications",
    problem:
      "Organizing events requires secure user management, reliable data validation, and timely notifications across administrators and attendees.",
    solution:
      "Developed a Flask-based platform with secure sessions, SQL constraints, automated email notifications, and interactive dashboards, extended with AI/ML-based insights over historical data.",
    architecture: [
      "HTML / CSS / JS UI",
      "Flask REST API layer",
      "Validation & business logic",
      "MySQL with constraints",
    ],
    challenges: [
      "Enforcing data integrity with SQL constraints",
      "Securing session handling",
      "Delivering timely automated notifications",
    ],
    decisions: [
      "Applied database-level constraints for data integrity",
      "Implemented secure session handling",
      "Added automated email notifications and live alerts",
    ],
    results: [
      "Reliable event workflows with validated data",
      "AI/ML-based insights over historical application data",
    ],
  },
  {
    id: "placemux",
    slug: "placemux-recruitment-management-system",
    title: "PlaceMux Recruitment Management System",
    category: "Full Stack",
    priority: 3,
    featured: true,
    tagline: "MERN recruitment platform with JWT auth and AI proctoring.",
    description:
      "A full-stack recruitment management platform designed to manage recruitment workflows and user roles.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
    ],
    features: [
      "REST APIs",
      "JWT authentication",
      "Role-based authorization",
      "Recruitment workflow management",
      "MongoDB integration",
    ],
    highlights: [
      "AI/ML-based camera fraud detection for assignment proctoring",
      "AI/ML-powered search",
    ],
    keyAchievement: "JWT auth + AI proctoring",
    problem:
      "Recruitment workflows involve multiple roles and assessments that need secure authentication, authorization, and integrity during proctored assignments.",
    solution:
      "Built a MERN-stack platform with JWT authentication, role-based authorization, and AI/ML-based camera fraud detection for assignment proctoring.",
    architecture: [
      "React.js UI",
      "Express.js REST API",
      "Auth & role logic (JWT)",
      "MongoDB",
    ],
    challenges: [
      "Securing multi-role access",
      "Integrating AI/ML proctoring signals",
    ],
    decisions: [
      "Used JWT for stateless authentication",
      "Applied role-based authorization",
      "Integrated AI/ML camera fraud detection",
    ],
    results: [
      "Secure, role-aware recruitment workflows",
      "AI/ML-powered search and proctoring",
    ],
  },
  {
    id: "hand-sign-detection",
    slug: "hand-sign-detection-system",
    title: "Hand Sign Detection System",
    category: "AI/ML",
    priority: 4,
    featured: true,
    tagline: "Real-time CNN hand gesture recognition at ~92% accuracy.",
    description:
      "A real-time hand gesture recognition system using a custom dataset and CNN-based classification.",
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "NumPy",
      "CNN",
      "Computer Vision",
    ],
    features: [
      "Image preprocessing",
      "Computer vision",
      "Hand gesture detection",
      "CNN model training",
      "Real-time prediction",
      "OpenCV processing",
    ],
    highlights: [
      "Approximately 92% recognition accuracy",
      "Custom dataset and CNN classification",
      "Real-time prediction pipeline",
    ],
    keyAchievement: "~92% recognition accuracy",
    problem:
      "Contactless communication can assist environments such as medical/surgical settings where touch-based input is impractical. This project explores that as an intended application concept.",
    solution:
      "Trained a CNN on a custom hand gesture dataset with OpenCV-based preprocessing to perform real-time gesture recognition.",
    architecture: [
      "Camera input",
      "Preprocessing (OpenCV)",
      "Feature extraction",
      "CNN model",
      "Real-time prediction",
    ],
    challenges: [
      "Building a reliable custom dataset",
      "Achieving real-time inference performance",
    ],
    decisions: [
      "Used a CNN for gesture classification",
      "Applied OpenCV preprocessing for robustness",
    ],
    results: [
      "~92% recognition accuracy",
      "Real-time gesture prediction (concept for contactless communication)",
    ],
  },
  {
    id: "smart-home",
    slug: "smart-home-automation",
    title: "Smart Home Automation",
    category: "IoT",
    priority: 5,
    tagline: "IoT prototype for environmental sensing and device control.",
    description:
      "IoT-based smart home automation prototype involving environmental sensing, motion detection, actuator control, and device automation.",
    technologies: [
      "NodeMCU ESP8266",
      "ESP32",
      "DHT11",
      "HC-SR501 PIR",
      "Relay module",
      "Servo",
    ],
    features: [
      "Environmental sensing",
      "Motion detection",
      "Actuator control",
      "Device automation",
    ],
    highlights: [
      "Environmental sensing with DHT11",
      "Motion detection with PIR sensor",
      "Relay and servo-based actuation",
    ],
    keyAchievement: "Sensor-driven home automation",
    problem:
      "Home automation requires coordinating sensors and actuators for responsive, automated device control.",
    solution:
      "Built an ESP8266/ESP32-based prototype integrating temperature/humidity sensing, motion detection, and relay/servo actuation.",
    architecture: [
      "Sensors (DHT11, PIR)",
      "Microcontroller (ESP8266/ESP32)",
      "Automation logic",
      "Actuators (Relay, Servo)",
    ],
    results: ["Working smart-home automation prototype"],
  },
  {
    id: "coffee-ordering",
    slug: "coffee-ordering-website",
    title: "Coffee Ordering Website",
    category: "Web",
    priority: 6,
    tagline: "Responsive coffee ordering site with dynamic interactions.",
    description:
      "A responsive coffee ordering website with dynamic interactions and ordering workflows.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive UI",
      "Dynamic interactions",
      "Ordering flow",
      "Email query functionality",
    ],
    highlights: [
      "Responsive layout",
      "Dynamic ordering interactions",
      "Email query functionality",
    ],
    keyAchievement: "Responsive ordering workflow",
    architecture: [
      "HTML structure",
      "CSS styling",
      "JavaScript interactions",
    ],
    results: ["Responsive ordering experience"],
  },
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Backend",
  "AI/ML",
  "Web",
  "IoT",
] as const;
