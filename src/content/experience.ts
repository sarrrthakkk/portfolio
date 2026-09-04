export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  dates: string;
  overview: string;
  flagshipImpact?: string;
  sections: {
    title: string;
    body?: string;
    bullets?: string[];
    impact?: string;
  }[];
  technologies?: string[];
  recognition?: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "aws",
    company: "Amazon Web Services",
    role: "Network Development Engineer Intern — Internet Edge",
    location: "Seattle, WA",
    dates: "May 2026 – August 2026",
    overview:
      "Worked on network infrastructure automation and control/data-plane systems across AWS data centers and colocation environments.",
    flagshipImpact:
      "Automated network infrastructure deployment for AWS Data Transfer Terminal using AWS SWF and Lambda, reducing NDE effort from approximately two weeks per deployment to under one hour and delivering $1M+ in estimated annual engineering savings.",
    sections: [
      {
        title: "Technical work",
        bullets: [
          "Designed an event-driven infrastructure orchestration workflow",
          "Decomposed deployment into dependency-aware operations",
          "Implemented state tracking, validation, retries, and failure recovery",
          "Worked across networking control-plane and data-plane software",
          "Worked with infrastructure spanning AWS data centers and colocation sites",
          "Contributed to infrastructure supporting HPC and distributed AI/ML workloads",
          "Focused on repeatability, reliability, automation, and operational efficiency",
        ],
      },
    ],
    technologies: [
      "AWS SWF",
      "Lambda",
      "Python",
      "Networking",
      "Control Plane",
      "Data Plane",
      "Distributed Systems",
      "Infrastructure Automation",
      "AWS",
    ],
  },
  {
    id: "nokia",
    company: "Nokia",
    role: "Technical Lead / Software Engineer — Distributed Systems & Cloud Infrastructure",
    location: "Chennai, India",
    dates: "July 2021 – December 2024",
    overview:
      "Built production software for Nokia's Software-Defined Access Networking / network-management platforms serving major telecommunications customers including Verizon, AT&T, NBN, and BT-OR.",
    flagshipImpact:
      "Reduced network-device provisioning from approximately 5 days to 55 minutes.",
    sections: [
      {
        title: "Network provisioning",
        body: "Built Java/Spring Boot services automating network-device lifecycle operations including provisioning, configuration, state synchronization, and operational monitoring.",
        impact: "Reduced network-device provisioning from approximately 5 days to 55 minutes.",
      },
      {
        title: "Distributed configuration datastore",
        body: "Designed a sharded configuration datastore for network-device configuration and state, covering partitioning, concurrent writes, consistency, and failure handling.",
        impact: "Improved configuration update/write performance by approximately 95%.",
      },
      {
        title: "NETCONF inventory system",
        bullets: [
          "Designed and developed a microservice from scratch that communicated with network devices using NETCONF",
          "Executed GET RPC operations to retrieve configuration and operational state",
          "Visualized actual device state and enabled on-demand network snapshots for operators",
        ],
      },
      {
        title: "Performance engineering",
        body: "Investigated JVM heap behavior, garbage collection, CPU utilization, thread contention, race conditions, thread dumps, jstack, and Linux system behavior.",
        impact: "Improved service throughput by 30%.",
      },
      {
        title: "Kubernetes / availability",
        bullets: [
          "Upgraded ingress infrastructure",
          "Reduced infrastructure pod startup from approximately 10 minutes to 1 minute",
          "Migrated legacy deployment strategy from Recreate to RollingUpdate",
          "Enabled zero-downtime service upgrades",
        ],
      },
      {
        title: "Configuration validation",
        body: "Built a concurrent automation framework for accelerated deployment and configuration validation.",
        impact: "Validated 6M+ XML configuration nodes in under 15 seconds.",
      },
      {
        title: "Reliability engineering",
        bullets: [
          "Circuit breakers, retries, and failure isolation",
          "Kafka reliability, backpressure, and graceful degradation",
          "Distributed failure handling across event-driven services",
        ],
      },
      {
        title: "Customer engineering",
        body: "Represented Nokia during critical global customer escalations. Diagnosed failures across Application ↔ JVM/Linux ↔ Infrastructure ↔ Network, performing real-time root-cause analysis of performance bottlenecks, network communication failures, deployment problems, configuration issues, and compatibility failures.",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "Microservices",
      "Kubernetes",
      "NETCONF",
      "SDN",
    ],
    recognition: "Nokia Q3 2023 Merit Award — recognized for technical excellence and engineering impact.",
  },
  {
    id: "asu-swe",
    company: "Arizona State University",
    role: "Software Engineer",
    location: "Tempe, AZ",
    dates: "May 2025 – Present",
    overview:
      "Building Smart-DART, an Uber-style campus mobility system designed for students with accessibility needs.",
    flagshipImpact:
      "Reduced student onboarding time by approximately 90% through workflow automation.",
    sections: [
      {
        title: "Architecture",
        body: "Designed workflows around three primary roles: Riders, Drivers, and Administrators.",
      },
      {
        title: "GIS integration",
        bullets: [
          "Built asynchronous REST integrations with ASU GIS APIs to dynamically retrieve geographic stops",
          "Used stops for distance calculations, path computation, dynamic routing, and point-to-point transportation workflows",
        ],
      },
      {
        title: "AI / OCR",
        body: "Designed the next phase around OCR-assisted document validation to automate eligibility and document verification.",
      },
    ],
    technologies: [
      "Python",
      "REST APIs",
      "Async Workflows",
      "GIS APIs",
      "RBAC",
      "OCR",
      "Backend Engineering",
    ],
  },
  {
    id: "asu-ta",
    company: "Arizona State University",
    role: "Graduate Teaching Assistant / Grader",
    location: "Tempe, AZ",
    dates: "2025 – Present",
    overview:
      "Mentor and evaluate graduate students on machine learning algorithms, statistical reasoning, implementation correctness, computational efficiency, and model evaluation.",
    sections: [
      {
        title: "CSE 575 — Statistical Machine Learning",
        bullets: [
          "Supervised learning",
          "Statistical inference",
          "Optimization",
          "Model evaluation",
          "ML algorithms",
        ],
      },
      {
        title: "CSE 572 — Data Mining (MCS Online)",
        bullets: [
          "Data mining",
          "Machine learning",
          "Algorithms",
          "Model and data analysis",
        ],
      },
    ],
  },
];
