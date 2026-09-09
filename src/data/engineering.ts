import { EngineeringStep } from '../types/portfolio';

export const engineeringSteps: EngineeringStep[] = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Requirements & Specifications",
    description: "Understand business requirements, functional specifications, and client expectations before writing code.",
    iconName: "FileText",
    keyPractices: [
      "Requirement breakdown",
      "Domain model clarity",
      "Edge case identification"
    ]
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Architecture & Data Contracts",
    description: "Design clean REST APIs, database schemas, service boundaries, and robust data flow contracts.",
    iconName: "Compass",
    keyPractices: [
      "RESTful API design",
      "Schema normalization",
      "Microservice boundaries"
    ]
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Clean Code & Spring Boot",
    description: "Build maintainable, modular, and type-safe Java and Spring Boot applications adhering to OOP principles.",
    iconName: "Code",
    keyPractices: [
      "Clean layering (Controller, Service, Repo)",
      "Dependency Injection",
      "Stateless security"
    ]
  },
  {
    step: "04",
    title: "Test",
    subtitle: "Verification & Validation",
    description: "Perform thorough integration testing, system testing, and API verification to validate expected behavior.",
    iconName: "CheckCircle2",
    keyPractices: [
      "Integration testing",
      "API contract verification",
      "Negative scenario testing"
    ]
  },
  {
    step: "05",
    title: "Improve",
    subtitle: "Diagnostics & Reliability",
    description: "Debug edge case issues, analyze application logs, and continuously enhance system reliability and resilience.",
    iconName: "TrendingUp",
    keyPractices: [
      "Log analysis & tracing",
      "Performance optimization",
      "Error handling & circuit breaking"
    ]
  }
];
