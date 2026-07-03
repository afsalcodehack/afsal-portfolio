export const site = {
  name: "Mohammed Afsal",
  title: "Lead Software Engineer",
  tagline: "Full Stack + Agentic AI",
  url: "https://afsal-portfolio.pages.dev",
  location: "Qatar",
  linkedin: "https://linkedin.com/in/muhamed-afsal",
  github: "https://github.com/afsalcodehack",
  // email assembled at runtime to avoid scraper bots
  emailUser: "afsalnellissery",
  emailDomain: "gmail.com",
  description:
    "Lead Software Engineer with 12+ years building production-grade full-stack systems and shipping agentic AI solutions on Azure — LangGraph multi-agent workflows, RAG pipelines, and cost-efficient inference.",
};

export const profile = `Lead Software Engineer with 12+ years building production-grade full-stack systems and, over the last two years, designing and shipping agentic AI solutions on Azure. Comfortable owning end-to-end architecture — from React / Next.js frontends and .NET / Python APIs to multi-agent workflows, retrieval pipelines, and cloud deployment. Recent focus is agentic AI with LangGraph, RAG over vector databases, and cost-efficient inference using small open-weight models hardened with Azure-native security and identity controls.`;

export const stats = [
  { value: "12+", label: "Years of Engineering" },
  { value: "2+", label: "Years in Agentic AI" },
  { value: "3", label: "Countries Worked In" },
  { value: "E2E", label: "Architecture Ownership" },
];

export const skillGroups = [
  {
    title: "Agentic AI",
    icon: "🤖",
    skills: [
      "LangGraph multi-agent orchestration",
      "Tool calling",
      "Supervisor / worker patterns",
      "MCP",
      "Prompt engineering",
      "Evals & tracing (LangSmith)",
    ],
  },
  {
    title: "AI-Assisted Development",
    icon: "⚡",
    skills: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Context-window design",
      "RAG context curation",
    ],
  },
  {
    title: "AI Platform",
    icon: "☁️",
    skills: [
      "Azure OpenAI",
      "Azure AI Foundry",
      "Azure AI Search",
      "Small / open-weight models",
      "On-prem inference",
    ],
  },
  {
    title: "RAG & Retrieval",
    icon: "🔍",
    skills: [
      "Hybrid retrieval",
      "Semantic + keyword search",
      "Chunking & reranking",
      "pgvector",
      "Qdrant",
      "Embedding model evaluation",
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Angular"],
  },
  {
    title: "Backend",
    icon: "🛠️",
    skills: [".NET Core / C#", "Python (FastAPI, Flask)", "REST", "gRPC", "Microservices"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL (incl. pgvector)", "MS SQL Server", "MySQL", "MongoDB"],
  },
  {
    title: "Identity & Security",
    icon: "🔐",
    skills: [
      "Microsoft Entra ID (Azure AD)",
      "OAuth2 / OIDC / SSO",
      "Role-based access",
      "Secrets management",
      "PII redaction & responsible-AI guardrails",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "🚀",
    skills: [
      "Azure App Service / Functions",
      "Static Web Apps / Container Apps",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Azure DevOps",
    ],
  },
];

export const experience = [
  {
    role: "Lead Software Engineer",
    company: "Borncode Qatar",
    period: "Feb 2016 – Present",
    location: "Qatar",
    summary:
      "Lead engineer for a portfolio of citizen-facing services and internal platforms. Currently focused on bringing agentic AI into government workflows while continuing to own full-stack delivery on .NET and the Azure stack.",
    highlights: [
      "Designed and shipped multi-agent workflows with LangGraph (supervisor + specialist worker agents) for case triage, document review, and citizen-service automation, integrated with internal .NET APIs.",
      "Built RAG pipelines over policy documents, SOPs, and case history using pgvector and Azure AI Search; hybrid search and reranking lifted answer relevance and grounding accuracy materially over baseline.",
      "Evaluated and deployed small open-weight models for on-prem inference where data residency rules out hosted models, combined with Azure OpenAI for larger-context tasks.",
      "Embedded PII redaction, prompt-injection defenses, content safety, and audit logging; enforced auth via Microsoft Entra ID with OAuth2 / OIDC and SSO across services.",
      "Architected React / Next.js + TypeScript frontends backed by .NET Core APIs and Python (FastAPI) AI services, designed for scalability, observability, and zero-trust security.",
      "Owned CI/CD on GitHub Actions and Azure DevOps with automated tests, security scans, and progressive rollouts to Azure App Service, Functions, Static Web Apps, and Container Apps.",
      "Led a cross-functional team of engineers, set engineering standards, and mentored peers on AI engineering practices.",
    ],
    tags: ["LangGraph", "Azure OpenAI", "RAG", "Next.js", ".NET Core", "FastAPI", "Entra ID"],
  },
  {
    role: "Senior .NET Engineer",
    company: "OnTime Group",
    period: "Jan 2015 – Jan 2016",
    location: "Dubai",
    summary:
      "Owned end-to-end delivery — business analysis, technical design, implementation, and test automation — for enterprise web applications on ASP.NET and Web API.",
    highlights: [
      "Built high-performance, real-time dashboards using SignalR and AngularJS, replacing legacy polling and reducing perceived latency for operations users.",
      "Introduced unit and end-to-end tests across frontend and backend layers, raising deployment confidence and shortening release cycles.",
    ],
    tags: ["ASP.NET", "Web API", "SignalR", "AngularJS"],
  },
  {
    role: "Software Engineer",
    company: "Floges Software Solutions",
    period: "Jan 2014 – Dec 2015",
    location: "India",
    summary:
      "Designed and shipped multiple web and mobile products end-to-end — product design, code design, launch, and maintenance.",
    highlights: [
      "Built a school management system covering students, teachers, and events.",
      "Built an order management platform with an Android app, used by SMB customers to take orders online.",
    ],
    tags: ["Web", "Android", "Full-cycle delivery"],
  },
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  school: "AIMIT",
};
