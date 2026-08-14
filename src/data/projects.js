// ─────────────────────────────────────────────────────────────
// ADD YOUR PROJECTS HERE.
// Copy an existing object, change the fields, and it shows up
// on the site automatically — no other file needs to change.
//
// Fields:
//   title       — project name
//   tagline     — one line, what it does
//   role        — "Solo Project" | "Backend Lead, Team of 4" | etc.
//   context     — where/when, e.g. "ET AI Hackathon 2026" (optional)
//   description — 2-4 short bullet strings, most impressive first
//   tech        — array of tech tags
//   github      — repo link (required)
//   demo        — live link, leave "" if none yet
//   metric      — one standout number/result to headline the card (optional)
//   status      — "shipped" | "in-progress" | "archived"
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    title: "VayuDrishti",
    tagline: "AI-powered urban air quality forecasting platform",
    role: "Solo Project",
    context: "ET AI Hackathon 2026",
    description: [
      "Full-stack platform built end-to-end: data pipeline, XGBoost forecasting model, FastAPI/SQLAlchemy backend, React/TypeScript/Leaflet frontend.",
      "Forecasts AQI 24-72h ahead across 20 zones spanning Delhi NCR and Chennai.",
      "Geospatial dashboard with a ranked zone list, a what-if policy simulator, and Claude API-powered multilingual advisories.",
      "Shipped with 32 passing pytest tests, GitHub Actions CI, and one-command Docker Compose deployment.",
    ],
    tech: ["Python", "FastAPI", "XGBoost", "React", "TypeScript", "Leaflet.js", "Docker", "SQLAlchemy"],
    github: "https://github.com/to124578/VayuDrishti",
    demo: "",
    metric: "70-74% lower RMSE vs. baseline",
    status: "shipped",
  },
  {
    title: "GuardianAI",
    tagline: "Industrial safety intelligence platform",
    role: "Backend Lead, Team of 4",
    context: "ET AI Hackathon 2026",
    description: [
      "Led backend architecture flagging real-time safety risks from sensor and event data.",
      "LangGraph multi-agent orchestration with a pgvector-backed RAG pipeline.",
      "Defined Pydantic event schemas as the data contract across agents; coordinated a 4-person team under deadline.",
    ],
    tech: ["LangGraph", "RAG", "pgvector", "Pydantic", "Python"],
    github: "https://github.com/to124578",
    demo: "",
    metric: "4-agent real-time pipeline",
    status: "shipped",
  },
  {
    title: "Cherry",
    tagline: "Voice-first personal AI assistant",
    role: "Solo Project",
    context: "",
    description: [
      "FRIDAY-inspired voice assistant with multi-agent task distribution.",
      "ChromaDB + SQLite memory layer for long-term context.",
      "Shipped as a 120+ file codebase with a React/Tauri desktop UI.",
    ],
    tech: ["Python", "LangChain", "Claude API", "ChromaDB", "React", "Tauri"],
    github: "https://github.com/to124578",
    demo: "",
    metric: "120+ file codebase",
    status: "shipped",
  },
  {
    title: "Crisis + Everyday Help Network",
    tagline: "Live map platform for emergency triage & hyperlocal help",
    role: "Solo Project",
    context: "",
    description: [
      "Dual-mode real-time map: AI-triaged emergency coordination + everyday micro-help requests on shared infra.",
      "Rule-based urgency triage and content moderation, plus PostGIS geo-fuzzing to protect requester location.",
      "MCP server exposes live emergency/help data as tools for AI assistants; Three.js 'distress globe' as signature UI.",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "Socket.io", "Three.js", "Mapbox"],
    github: "https://github.com/to124578",
    demo: "",
    metric: "Dual-mode live map, 11 passing tests",
    status: "in-progress",
  },
  {
    title: "Global Focus & Movement Challenge",
    tagline: "Real-time shared-streak habit platform",
    role: "Solo Project",
    context: "",
    description: [
      "Duolingo-style unified streak engine: studying or working out, either keeps the same streak alive.",
      "Live pulse counters and country/university/team leaderboards pushed via Socket.io, no polling.",
      "Three.js particle 'energy orb' blends color and motion live from focus vs. movement activity ratio.",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Socket.io", "Three.js", "Recharts"],
    github: "https://github.com/to124578",
    demo: "",
    metric: "Unified streak engine, 6 passing tests",
    status: "in-progress",
  },
  {
    title: "Live Local Price & Help Network",
    tagline: "Real-time crowdsourced prices & hyperlocal help map",
    role: "Solo Project",
    context: "",
    description: [
      "Worldwide live map combining crowdsourced local prices and proximity-matched help requests.",
      "PostGIS geo-radius queries with location fuzzing, plus a z-score anomaly check flagging outlier price submissions.",
      "Verified end-to-end with real integration tests: submit -> persist to PostGIS -> retrieve by geo-radius.",
    ],
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "Socket.io", "Mapbox", "scikit-learn"],
    github: "https://github.com/to124578",
    demo: "",
    metric: "Real-time geo map, integration-tested pipeline",
    status: "in-progress",
  },
];

// Smaller/side projects — rendered as a compact list, not full cards.
export const sideProjects = [
  { name: "IoT Attendance & Intrusion Detection System", tech: "Arduino Uno", github: "https://github.com/to124578" },
  { name: "ChatApp — WhatsApp-style chat platform", tech: "raw sockets, SQLite", github: "https://github.com/to124578" },
  { name: "MapExplorer", tech: "Leaflet, Flask", github: "https://github.com/to124578" },
  { name: "Universal File Compressor & Converter", tech: "Python", github: "https://github.com/to124578" },
  { name: "Hospital Management System", tech: "Django", github: "https://github.com/to124578" },
  { name: "Telegram bot, contact book manager, encoder/decoder suite", tech: "Python", github: "https://github.com/to124578" },
];

export const publication = {
  title: "Iterative RAG Framework",
  venue: "International Journal of Sciences and Innovation Engineering (IJSCI)",
  date: "June 2026",
  detail: "Proposed a custom evaluation metric — Retrieval Gap Coverage Score — for RAG systems. ISSN 3049-0251, Crossref-indexed.",
  link: "",
};
