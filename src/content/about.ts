export const about = {
  bio: [
    "I'm a systems engineer with 3.5+ years of full-time engineering experience building production networking and distributed infrastructure, followed by experience with AWS Internet Edge and graduate work in machine learning systems.",
    "At AWS, I automated network infrastructure deployment and worked across control-plane and data-plane systems spanning data centers and colocation environments. At Nokia, I built SDN/network-management systems for global telecom operators, working across device provisioning, distributed configuration management, event streaming, Kubernetes, observability, and production troubleshooting.",
    "My work increasingly extends into AI infrastructure. I've optimized LLaMA inference using C++, PyTorch, CUDA, KV caching, and quantization and built real-time conversational AI systems using Llama 3.1 and edge infrastructure.",
    "I'm most interested in difficult systems problems where performance, reliability, latency, and scale are first-class constraints.",
  ],
  howIEngineer: [
    {
      title: "Dive Deep",
      body: "I prefer understanding why a system fails over patching around symptoms—from JVM thread contention to network state and distributed workflow failures.",
    },
    {
      title: "Automate Repetition",
      body: "If an engineering process repeatedly consumes human time, I look for the right abstraction to automate it.",
      example: "AWS: 2 weeks → <1 hour",
    },
    {
      title: "Design for Failure",
      body: "Distributed systems fail partially. I design around retries, idempotency, state recovery, observability, and graceful degradation.",
    },
    {
      title: "Measure Before Optimizing",
      body: "Performance work starts with profiling and metrics, not assumptions.",
      example: "Nokia: +30% throughput · LLaMA: −45% latency/memory",
    },
    {
      title: "Own the Outcome",
      body: "I enjoy problems that require moving across application, infrastructure, networking, and customer boundaries until the actual root cause is found.",
    },
  ],
  researchInterests: [
    {
      title: "Statistical Machine Learning",
      items: [
        "Statistical inference",
        "Supervised learning",
        "Optimization",
        "Model evaluation",
        "Efficient ML systems",
      ],
    },
    {
      title: "LLM / Transformer Architectures",
      items: [
        "Transformer inference",
        "KV caching",
        "Attention",
        "Quantization",
        "Inference optimization",
        "Memory efficiency",
        "Model evaluation",
      ],
    },
    {
      title: "AI Infrastructure",
      items: [
        "GPU inference",
        "Distributed inference",
        "Model serving",
        "Inference caching",
        "Batching",
        "AI networking",
        "HPC infrastructure",
        "Observability",
        "Cost/performance optimization",
      ],
    },
    {
      title: "Distributed Systems",
      items: [
        "Distributed state",
        "Event streaming",
        "Fault tolerance",
        "Backpressure",
        "Circuit breaking",
        "Consistency",
        "Caching",
        "Distributed configuration",
        "Observability",
      ],
    },
    {
      title: "Networking",
      items: [
        "Control/data plane",
        "SDN",
        "Routing",
        "Network automation",
        "Device configuration/state",
        "Hyperscale networking",
        "Data-center networking",
      ],
    },
  ],
  awards: [
    {
      title: "Nokia Merit Award",
      date: "Q3 2023",
      description:
        "Recognized for technical excellence, engineering ownership, and impact on production networking systems.",
    },
  ],
  customers: {
    aws: "Cloud/data-center networking infrastructure",
    nokia: {
      description:
        "Telecommunications infrastructure serving major operators including:",
      names: ["Verizon", "AT&T", "NBN", "BT-OR"],
    },
  },
} as const;
