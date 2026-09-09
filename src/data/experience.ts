import { ExperienceItem } from '../types/portfolio';

export const experiences: ExperienceItem[] = [
  {
    id: "alchemy-techsol",
    company: "Alchemy Techsol Pvt. Ltd.",
    role: "Software Engineer – Bilingual",
    period: "May 2026 – Present",
    isCurrent: true,
    location: "India",
    description: "Developing Java & Spring Boot backend services and collaborating on Japanese client projects.",
    highlights: [
      "Java backend development",
      "Spring Boot",
      "Experience working on Japanese client projects",
      "Requirement understanding",
      "Technical communication",
      "Testing and debugging"
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "Japanese Client Projects", "Technical Communication", "Debugging"]
  },
  {
    id: "unikaihatsu-software",
    company: "Unikaihatsu Software Pvt. Ltd.",
    role: "Software Engineer",
    period: "July 2023 – May 2026",
    isCurrent: false,
    location: "India",
    description: "Engineered Java backend solutions, REST APIs, and microservices for Japanese client projects with thorough integration testing and log analysis.",
    highlights: [
      "Java development",
      "Spring Boot",
      "REST API development",
      "Database integration",
      "Microservices",
      "Debugging",
      "Log analysis",
      "Integration testing",
      "System testing"
    ],
    skills: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "MySQL", "REST APIs", "Microservices", "Log Analysis", "System Testing"]
  }
];

