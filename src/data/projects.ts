import { ProjectItem } from '../types/portfolio';

export const projects: ProjectItem[] = [
  {
    id: 'vehicle-auction-export',
    slug: 'vehicle-auction-export',
    title: 'Enterprise Vehicle Auction & Export Management System',
    typeLabel: 'Professional Experience • Company Project',
    isCompanyProject: true,
    tagline: 'International Vehicle Auction, Yard Operations & Japanese Customs Clearance Platform',
    description:
      'Enterprise application for managing vehicle auction and export operations from Japan to international destinations, including vehicle processing, yard operations, container management, export documentation, and Japanese Customs integration.',
    techLine: 'Java 8 • Spring MVC • Hibernate • MySQL • JasperReports',
    technologies: [
      'Java 8',
      'Spring MVC',
      'Hibernate',
      'MySQL',
      'JasperReports',
      'REST/API Integration',
      'Japanese Customs API'
    ],
    myRoleTitle: 'Java Developer / Backend Developer',
    myRoleDistinction: {
      systemOverview:
        'The overall application is an enterprise-scale logistics and auction ecosystem facilitating vehicle sourcing, auctioning, re-auctioning (Rekuso assignment), inward yard processing, container booking, container loading, export document preparation, and electronic Japanese Customs clearance for international shipments to Dubai, African regions, and other global destinations.',
      myFocus:
        'As a Java / Backend Developer on the engineering team, I worked on implementing and maintaining backend business logic, database entities and queries using Hibernate and MySQL, external Japanese Customs API integrations, document/report generation with JasperReports, testing, and defect resolution.'
    },
    businessPurpose:
      'The project is an enterprise application used to manage the vehicle auction and export process from Japan to international destinations, including Dubai and African markets. The application manages vehicles through different operational stages, from vehicle processing and auction-related activities to yard operations, container booking, loading, export documentation, and customs clearance. The system also integrates with Japanese Customs APIs to electronically submit required customs-related documents and receive customs clearance-related responses and information, supporting the entire operational workflow involved in preparing vehicles for international export.',
    functionalities: [
      'Vehicle Management',
      'Auction Management',
      'Re-auction / Rekuso Assignment',
      'Vehicle Inward Processing',
      'Yard Management',
      'Container Booking',
      'Container Loading',
      'Export Documentation',
      'Japanese Customs Documentation',
      'Japanese Customs API Integration',
      'Customs Clearance Processing',
      'Report Generation',
      'JasperReports-based Business Reports'
    ],
    workflow: [
      {
        step: 1,
        title: 'Vehicle',
        subtitle: 'Initial intake & vehicle profiling',
        iconName: 'Car'
      },
      {
        step: 2,
        title: 'Auction / Re-auction',
        subtitle: 'Auction bidding & Rekuso assignment',
        iconName: 'Gavel'
      },
      {
        step: 3,
        title: 'Inward Processing',
        subtitle: 'Arrival inspection & status verification',
        iconName: 'CheckCircle2'
      },
      {
        step: 4,
        title: 'Yard',
        subtitle: 'Physical storage & yard management',
        iconName: 'Warehouse'
      },
      {
        step: 5,
        title: 'Container Booking',
        subtitle: 'Freight reservation & scheduling',
        iconName: 'Boxes'
      },
      {
        step: 6,
        title: 'Container Loading',
        subtitle: 'Vessel loading & packing verification',
        iconName: 'PackageCheck'
      },
      {
        step: 7,
        title: 'Export Documentation',
        subtitle: 'Manifests, invoices & shipping records',
        iconName: 'FileText'
      },
      {
        step: 8,
        title: 'Japanese Customs API',
        subtitle: 'Electronic document submission to Customs',
        iconName: 'Network'
      },
      {
        step: 9,
        title: 'Customs Clearance',
        subtitle: 'Response processing & clearance status',
        iconName: 'ShieldCheck'
      },
      {
        step: 10,
        title: 'International Export',
        subtitle: 'Dispatch to Dubai, African & global ports',
        iconName: 'Ship'
      }
    ],
    myContributions: [
      'Developed and maintained backend functionality using Java 8 and Spring MVC.',
      'Implemented and maintained business logic required for vehicle auction and export operations.',
      'Worked on vehicle processing workflows such as inward processing, yard operations, container booking, and container loading.',
      'Developed and maintained database functionality using Hibernate and MySQL.',
      'Worked on functionality related to export and customs documentation.',
      'Worked with the Japanese Customs API for customs document submission and clearance-related processing.',
      'Implemented and maintained report generation functionality using JasperReports.',
      'Analyzed business requirements and converted them into application functionality.',
      'Investigated defects, performed debugging, and implemented fixes.',
      'Performed functional and integration-level testing for implemented features.',
      'Collaborated with team members to support application development and issue resolution.'
    ],
    challenges: [
      'Handling a multi-stage vehicle processing workflow.',
      'Maintaining consistency of vehicle information across different operational stages.',
      'Managing database operations for business-critical vehicle information.',
      'Integrating application functionality with an external Japanese Customs API.',
      'Handling customs document submission and API responses.',
      'Generating business documents and reports using JasperReports.',
      'Debugging and resolving issues across application and database layers.'
    ],
    highlights: [
      {
        title: 'Enterprise Application',
        description: 'Production-oriented business application supporting vehicle export operations.',
        iconName: 'Building2'
      },
      {
        title: 'API Integration',
        description: 'Integration with Japanese Customs APIs for customs-related document processing.',
        iconName: 'Radio'
      },
      {
        title: 'End-to-End Workflow',
        description: 'Supports multiple stages from vehicle processing through container loading and customs clearance.',
        iconName: 'Workflow'
      },
      {
        title: 'Backend Development',
        description: 'Java/Spring MVC/Hibernate-based backend development.',
        iconName: 'Server'
      },
      {
        title: 'Reporting',
        description: 'Business report and document generation using JasperReports.',
        iconName: 'BarChart3'
      }
    ],
    confidentialityNotice:
      'This project was developed as part of my professional experience. Due to company confidentiality and intellectual property restrictions, source code, internal URLs, customer information, screenshots, and certain implementation details are not publicly available. The information presented here describes my role and technical contribution at a high level.',
    featured: true
  },
  {
    id: 'online-vehicle-auction',
    slug: 'online-vehicle-auction',
    title: 'Online Vehicle Auction & Live Bidding Platform',
    typeLabel: 'Professional Experience • Company Project',
    isCompanyProject: true,
    tagline: 'Digital Vehicle Auction, Customer Live Bidding & Event-Driven Processing',
    description:
      'Online vehicle auction platform that enables customers to browse vehicles, participate in live auctions, place bids, and purchase vehicles through an online bidding workflow.',
    techLine: 'Java 8 • Spring MVC • MySQL • Apache Kafka • JasperReports • Web API Integration',
    technologies: [
      'Java 8',
      'Spring MVC',
      'MySQL',
      'Apache Kafka',
      'JasperReports',
      'Web API Integration'
    ],
    myRoleTitle: 'Java Developer / Backend Developer',
    myRoleDistinction: {
      systemOverview:
        'The application is an online vehicle auction platform providing a digital environment where customers can browse vehicle listings, participate in live auctions, submit competitive bids, track auction updates in real time, and complete vehicle purchases when winning an auction.',
      myFocus:
        'As a Java / Backend Developer on the project team, I worked on developing and maintaining backend business logic using Java 8 and Spring MVC, auction and bidding workflows, event-driven processing with Apache Kafka, MySQL data persistence, Web API integration, JasperReports generation, defect resolution, and testing.'
    },
    businessPurpose:
      'This is an online vehicle auction platform that enables customers to browse available vehicles and participate in online auctions through live bidding. Customers can participate in an active auction, place bids on vehicles, monitor the current bidding activity, and purchase the vehicle when they successfully win the auction according to the business rules. The platform provides an online environment for conducting vehicle auctions and connects customers with available vehicle listings through a digital bidding process.',
    functionalities: [
      'Online Vehicle Auction',
      'Vehicle Listing',
      'Vehicle Details',
      'Auction Listing',
      'Live Auction',
      'Customer Bidding',
      'Bid Processing',
      'Bid Status Tracking',
      'Auction Result Processing',
      'Vehicle Purchase / Winning Bid Processing',
      'Bid History',
      'Auction Status Management',
      'Web API Integration',
      'Report Generation',
      'Customer-facing Auction Workflow'
    ],
    workflow: [
      {
        step: 1,
        title: 'Vehicle Listed',
        subtitle: 'Vehicle inventory published for auction',
        iconName: 'Car'
      },
      {
        step: 2,
        title: 'Auction Created',
        subtitle: 'Auction session scheduled & configured',
        iconName: 'Calendar'
      },
      {
        step: 3,
        title: 'Customer Views Vehicle',
        subtitle: 'Participants explore vehicle specifications',
        iconName: 'Eye'
      },
      {
        step: 4,
        title: 'Auction Starts',
        subtitle: 'Live auction opened for active participation',
        iconName: 'Play'
      },
      {
        step: 5,
        title: 'Customer Places Bid',
        subtitle: 'Bid submitted through customer interface',
        iconName: 'BadgeDollarSign'
      },
      {
        step: 6,
        title: 'Bid Processing',
        subtitle: 'Backend validation & bid event handling',
        iconName: 'Cpu'
      },
      {
        step: 7,
        title: 'Live Auction Updates',
        subtitle: 'Auction status & price updates broadcast',
        iconName: 'Activity'
      },
      {
        step: 8,
        title: 'Highest Bid',
        subtitle: 'Current top bid identified and tracked',
        iconName: 'TrendingUp'
      },
      {
        step: 9,
        title: 'Auction Ends',
        subtitle: 'Bidding window concludes per rules',
        iconName: 'Timer'
      },
      {
        step: 10,
        title: 'Winning Bid',
        subtitle: 'Winning participant evaluated & finalized',
        iconName: 'Award'
      },
      {
        step: 11,
        title: 'Vehicle Purchase / Next Process',
        subtitle: 'Transaction completion & fulfillment handoff',
        iconName: 'CheckCircle2'
      }
    ],
    eventProcessing: {
      title: 'Event-Driven Auction Processing',
      subtitle: 'Asynchronous Messaging with Apache Kafka',
      description:
        'The application uses Apache Kafka to support event-driven processing related to the online auction workflow. Kafka is used to support asynchronous/event-driven communication between application components involved in auction and bidding-related processing.',
      flow: ['Customer Bid', 'Application', 'Kafka Event', 'Event Processing', 'Auction/Bid Update']
    },
    apiIntegration: {
      title: 'Web API Integration',
      description:
        'Worked with Web API integration to exchange application data with related systems and support the online auction business workflow.'
    },
    myContributions: [
      'Developed and maintained backend functionality using Java 8 and Spring MVC.',
      'Worked on functionality supporting the online vehicle auction workflow.',
      'Contributed to vehicle auction and bidding-related business functionality.',
      'Worked on backend processing associated with customer bidding and auction operations.',
      'Worked with Apache Kafka for event-driven application processing.',
      'Worked on Web API integration required for application functionality.',
      'Worked with MySQL for application data management.',
      'Developed and maintained business reports using JasperReports.',
      'Investigated application issues and implemented bug fixes.',
      'Supported functional and integration testing of implemented functionality.',
      'Analyzed requirements and worked with team members to implement business requirements.'
    ],
    challenges: [
      'Handling bidding-related business logic.',
      'Supporting auction workflows where bid activity can change dynamically.',
      'Processing events asynchronously using Kafka.',
      'Maintaining consistency of auction and bid-related data.',
      'Integrating Web APIs with the application.',
      'Managing database operations for auction and vehicle information.',
      'Generating business reports using JasperReports.',
      'Debugging and resolving issues across application, database, and integration layers.'
    ],
    highlights: [
      {
        title: 'Live Online Bidding',
        description: 'Customers can participate in vehicle auctions through an online bidding workflow.',
        iconName: 'Gavel'
      },
      {
        title: 'Event-Driven Processing',
        description: 'Apache Kafka is used for asynchronous/event-driven processing within the application.',
        iconName: 'Activity'
      },
      {
        title: 'API Integration',
        description: 'Web APIs are used to communicate between application components or external systems.',
        iconName: 'Radio'
      },
      {
        title: 'Backend Development',
        description: 'Java 8 and Spring MVC are used for backend application development.',
        iconName: 'Server'
      },
      {
        title: 'Database',
        description: 'MySQL is used for application data management.',
        iconName: 'Database'
      },
      {
        title: 'Reporting',
        description: 'JasperReports is used to generate business reports/documents.',
        iconName: 'BarChart3'
      }
    ],
    confidentialityNotice:
      'This project was developed as part of my professional experience. Due to company confidentiality and intellectual property restrictions, source code, internal URLs, customer information, screenshots, and certain implementation details are not publicly available. The information presented here describes my role and technical contribution at a high level.',
    featured: true
  }
];

