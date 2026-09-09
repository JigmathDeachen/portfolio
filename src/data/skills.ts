import { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    category: "Backend Development",
    description: "Core server-side engineering with high-performance Java frameworks and robust architectural patterns.",
    skills: [
      "Java 17",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Web API Integration",
      "JasperReports"
    ]
  },
  {
    id: "microservices",
    category: "Microservices & Distributed Systems",
    description: "Decoupled microservice architecture, service discovery, resilient inter-service communication, and gateways.",
    skills: [
      "Microservices",
      "Eureka",
      "API Gateway",
      "OpenFeign",
      "Load Balancing",
      "Resilience4j",
      "Circuit Breaker",
      "Retry"
    ]
  },
  {
    id: "security",
    category: "Security & Authentication",
    description: "Stateless security, token-based authentication, and role-based access control.",
    skills: [
      "Spring Security",
      "JWT",
      "Authentication",
      "Authorization"
    ]
  },
  {
    id: "database",
    category: "Database & Persistence",
    description: "Relational schema management, query optimization, and Object-Relational Mapping.",
    skills: [
      "MySQL",
      "SQL",
      "JPA / Hibernate"
    ]
  },
  {
    id: "testing",
    category: "Testing, QA & Debugging",
    description: "Rigorous quality assurance, verification of business logic, test case execution, and deep log diagnostics.",
    skills: [
      "Integration Testing",
      "System Testing",
      "API Testing",
      "Test Case Analysis",
      "Log Analysis",
      "Debugging"
    ]
  },
  {
    id: "tools",
    category: "Development Tools & Environment",
    description: "Version control, build automation, API client tooling, and standard Unix environments.",
    skills: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "Eclipse",
      "VS Code",
      "Linux"
    ]
  }
];
