import llama2Img from "@/assets/llama-2-snip.png";

export type ProjectCard = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  github?: string;
  liveDemo?: string;
  hasCaseStudy: boolean;
  featured: boolean;
};

export type CaseStudySection = {
  title: string;
  body?: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  impactLine: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
  sections: CaseStudySection[];
};

export const projects: ProjectCard[] = [
  {
    id: 1,
    slug: "aws-network-deployment",
    title: "AWS Network Deployment Automation",
    tagline: "Distributed infrastructure • AWS • Automation",
    description:
      "Event-driven orchestration that automated AWS Data Transfer Terminal network infrastructure deployment, cutting NDE effort from ~2 weeks to under an hour.",
    category: "Infrastructure Automation",
    technologies: ["AWS SWF", "Lambda", "Python", "Networking", "Distributed Systems"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: 2,
    slug: "llama-2-inference",
    title: "LLaMA-2 Inference Optimization",
    tagline: "ML Systems • CUDA • C++",
    description:
      "Systems-level optimization of LLaMA-2 inference using KV caching, quantization, and GPU memory techniques — 45% lower latency and peak memory on a single 12GB GPU.",
    category: "ML Systems",
    technologies: ["C++", "Python", "PyTorch", "CUDA", "Transformers"],
    image: llama2Img,
    github: "https://github.com/vibhu-dixit/Llama-2",
    liveDemo:
      "https://docs.google.com/presentation/d/1nD79Gjl_E-mwHx-hff1kB3_GH-QSa4MjRQ56aXW-Kag/edit?slide=id.p#slide=id.p",
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: 3,
    slug: "conversational-ai-security",
    title: "Conversational AI Cybersecurity Assistant",
    tagline: "GenAI • Edge • Real-time",
    description:
      "Real-time conversational threat-intelligence assistant on Llama 3.1 with Cloudflare Workers, Durable Objects, WebSockets, and live CVE retrieval.",
    category: "GenAI / Edge",
    technologies: [
      "Llama 3.1",
      "Cloudflare Workers",
      "Durable Objects",
      "WebSockets",
      "JavaScript",
    ],
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: 4,
    slug: "nokia-network-management",
    title: "Nokia Distributed Network Management",
    tagline: "SDN • NETCONF • Distributed Systems",
    description:
      "Production SDN/network-management systems for global telecom operators — provisioning automation, sharded configuration state, and NETCONF inventory.",
    category: "Networking / SDN",
    technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Kubernetes", "NETCONF"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    id: 5,
    slug: "distributed-streaming",
    title: "Distributed Streaming Platform",
    tagline: "Kafka • Spark • AWS",
    description:
      "Real-time pipeline processing 1M+ events/day with exactly-once semantics, checkpoints, DLQ, and analytical storage in S3/Parquet.",
    category: "Data Infrastructure",
    technologies: ["Kafka", "Spark Structured Streaming", "Redis", "AWS S3", "Python", "Parquet"],
    hasCaseStudy: false,
    featured: true,
  },
  {
    id: 6,
    slug: "ml-network-anomaly",
    title: "ML Network Anomaly Detection",
    tagline: "ML • Networking • C++",
    description:
      "Packet-capture to ML inference pipeline for detecting DDoS, port scans, malware traffic, and exfiltration patterns across TCP/IP protocols.",
    category: "Network Security",
    technologies: ["C++", "Python", "scikit-learn", "NumPy", "Pandas", "libpcap"],
    hasCaseStudy: false,
    featured: true,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "aws-network-deployment",
    number: "01",
    title: "Automating AWS Network Infrastructure",
    impactLine: "2 weeks → <1 hour | $1M+ estimated annual impact",
    technologies: [
      "AWS SWF",
      "Lambda",
      "Python",
      "Networking",
      "Control Plane",
      "Data Plane",
    ],
    sections: [
      {
        title: "Problem",
        body: "Network infrastructure deployment for AWS Data Transfer Terminal required approximately two weeks of Network Development Engineer effort per deployment, with high operational overhead and limited repeatability.",
      },
      {
        title: "Constraints",
        bullets: [
          "Infrastructure spanning AWS data centers and colocation environments",
          "Dependency-aware ordering across control-plane and data-plane operations",
          "Need for validation, retries, and failure recovery in production",
          "Support for HPC and distributed AI/ML workload infrastructure",
        ],
      },
      {
        title: "Architecture",
        body: "Designed an event-driven infrastructure orchestration workflow using AWS SWF and Lambda. Deployment was decomposed into dependency-aware operations with explicit state tracking.",
      },
      {
        title: "Failure model",
        bullets: [
          "State tracking for in-progress and completed operations",
          "Validation gates before advancing workflow steps",
          "Retries and failure recovery for transient infrastructure faults",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Built orchestration around SWF workflows and Lambda workers",
          "Encoded operational dependencies so steps could run safely in parallel where possible",
          "Focused on repeatability, reliability, and operational efficiency for NDE teams",
        ],
      },
      {
        title: "Result",
        body: "Reduced NDE effort from approximately two weeks per deployment to under one hour, delivering $1M+ in estimated annual engineering savings.",
      },
      {
        title: "Lessons",
        bullets: [
          "Explicit state and dependency modeling beats ad-hoc runbooks at scale",
          "Automation ROI compounds when deployment is frequent and high-touch",
          "Control-plane and data-plane work must be designed as one operational system",
        ],
      },
    ],
  },
  {
    slug: "nokia-network-management",
    number: "02",
    title: "Building Distributed Network Management at Nokia",
    impactLine: "5 days → 55 minutes",
    technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Kubernetes", "NETCONF", "SDN"],
    sections: [
      {
        title: "Problem",
        body: "Telecom operators needed reliable automation for network-device lifecycle operations across large inventories. Manual provisioning was slow, error-prone, and hard to operate at customer scale.",
      },
      {
        title: "Architecture",
        bullets: [
          "Java/Spring Boot microservices for provisioning, configuration, and monitoring",
          "Sharded configuration datastore for device configuration and state",
          "NETCONF microservice for live device inventory and on-demand snapshots",
          "Event-driven services on Kafka with Redis for caching and coordination",
        ],
      },
      {
        title: "Implementation",
        bullets: [
          "Automated provisioning, configuration sync, and operational monitoring",
          "Designed partitioning and concurrent write paths for configuration updates",
          "Built NETCONF GET RPC flows to retrieve and visualize actual device state",
          "Hardened services with circuit breakers, retries, backpressure, and graceful degradation",
          "Migrated Kubernetes deployments to RollingUpdate for zero-downtime upgrades",
        ],
      },
      {
        title: "Result",
        bullets: [
          "Network-device provisioning reduced from ~5 days to ~55 minutes",
          "Configuration write performance improved by ~95%",
          "Service throughput improved by ~30% through JVM/Linux performance work",
          "Pod startup reduced from ~10 minutes to ~1 minute",
          "Validated 6M+ XML configuration nodes in under 15 seconds",
        ],
      },
      {
        title: "Lessons",
        bullets: [
          "NETCONF and distributed state are first-class networking engineering problems",
          "Customer escalations force end-to-end ownership across app, JVM, infra, and network",
          "Availability work (ingress, rolling updates) is as critical as feature velocity",
        ],
      },
    ],
  },
  {
    slug: "llama-2-inference",
    number: "03",
    title: "Optimizing LLaMA-2 Inference",
    impactLine: "45% lower latency & GPU memory",
    technologies: ["C++", "Python", "PyTorch", "CUDA", "Transformers"],
    github: "https://github.com/vibhu-dixit/Llama-2",
    liveDemo:
      "https://docs.google.com/presentation/d/1nD79Gjl_E-mwHx-hff1kB3_GH-QSa4MjRQ56aXW-Kag/edit?slide=id.p#slide=id.p",
    image: llama2Img,
    sections: [
      {
        title: "Problem",
        body: "Run LLaMA-2 efficiently in a resource-constrained GPU environment without sacrificing output quality.",
      },
      {
        title: "Engineering",
        bullets: [
          "KV caching",
          "Weight quantization",
          "Memory-efficient attention",
          "GPU memory optimization",
          "Inference benchmarking across latency, peak memory, and quality",
        ],
      },
      {
        title: "Result",
        bullets: [
          "45% reduction in inference latency and peak GPU memory usage",
          "Enabled execution on a single 12GB GPU",
          "Outperformed 58% of evaluated open-source peer implementations on the internal evaluation benchmark",
        ],
      },
      {
        title: "Lessons",
        body: "This project demonstrates C++ systems programming combined with CUDA, ML systems, transformers, and performance engineering — the same measurement-first mindset applied to AI infrastructure.",
      },
    ],
  },
  {
    slug: "conversational-ai-security",
    number: "04",
    title: "Building a Real-Time Conversational AI System at the Edge",
    impactLine: "95% fewer external API calls | <50ms cached edge latency",
    technologies: [
      "Llama 3.1 8B",
      "Cloudflare Workers",
      "Durable Objects",
      "WebSockets",
      "NVD APIs",
      "JavaScript",
    ],
    sections: [
      {
        title: "Problem",
        body: "Build a conversational cybersecurity / threat-intelligence assistant that can retrieve live CVE data, maintain conversation state, and respond in real time at the edge.",
      },
      {
        title: "Architecture",
        bullets: [
          "Natural-language query → LLM orchestration",
          "Live CVE retrieval via NVD APIs",
          "Context enrichment and response generation",
          "Real-time client updates over WebSockets",
          "Cloudflare Workers for serverless execution",
          "Durable Objects for stateful distributed conversations",
          "Edge caching to reduce external API load",
        ],
      },
      {
        title: "Result",
        bullets: [
          "Reduced external API calls by 95% through intelligent caching",
          "Achieved sub-50ms edge latency for cached workflows",
        ],
      },
      {
        title: "Future extension",
        bullets: [
          "Tool / function calling",
          "RAG and vector retrieval",
          "Evaluation harness for hallucination and groundedness",
          "Agent workflows",
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);
