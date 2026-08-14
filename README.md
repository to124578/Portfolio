# Tushar Ojha — Portfolio

**Live site:** [tushar-ojha-portfolio.vercel.app](https://tushar-ojha-portfolio.vercel.app/)

## About Me

I'm Tushar Ojha, a third-year B.Tech Computer Science and Engineering student at
Quantum University, Roorkee (Class of 2028). I build across full-stack development,
AI/ML, and systems programming — from real-time multi-agent platforms to forecasting
pipelines and low-level networked systems — and I've published peer-reviewed research
alongside my project work.

Some of what's on this site:

- **Cherry** — a FRIDAY-inspired, voice-first personal AI assistant with multi-agent
  task distribution and a ChromaDB + SQLite long-term memory layer.
- **VayuDrishti** — a full-stack air quality forecasting platform (FastAPI, React/TS,
  XGBoost) built for ET AI Hackathon 2026, with a verified 70–74% RMSE improvement
  over baseline.
- **GuardianAI** — a multi-agent safety platform (LangGraph, pgvector, RAG) built with
  a four-person team, where I served as Backend Lead.
- A custom **intercom/telecom system**, a **WhatsApp-style chat platform**, and other
  systems-level projects built from scratch in Python.

I'm currently looking for internship opportunities across Data Analyst, AI/ML, and
SDE/Backend tracks. Feel free to reach out through the contact form below, or check
out more of my work on GitHub.

## About This Website

This is my personal portfolio site, built to showcase my projects, skills, and
background in one place. It's a fully custom build — no template — designed and
coded from scratch.

**Stack:** React + Vite + Tailwind CSS v4 + Framer Motion

---

## Run it locally

```
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173/)

## Add / edit projects (no other file needs to change)

Open `src/data/projects.js` and edit the `projects` array. Each object is one project
card. Copy an existing entry, change the fields, save — it appears on the site
automatically.

Smaller projects go in the `sideProjects` array in the same file (rendered as a
compact list under the main cards).

## Edit your info

- `src/data/profile.js` — name, email, GitHub, LinkedIn, skills, certifications,
  education, leadership lines.
- Add your LinkedIn URL to the `linkedin` field once you have one — it's currently
  blank and hidden until filled in.

## Set up the contact form (2 minutes, free)

1. Go to formspree.io and sign up.
2. Create a new form — it gives you an endpoint like `https://formspree.io/f/xxxxabcd`.
3. Open `src/components/Contact.jsx` and replace the `FORMSPREE_ENDPOINT` constant
   near the top with your real endpoint.
4. Submissions land in your Formspree inbox / forwarded email.

## Swap in your resume

Replace `public/resume/Tushar_Ojha_Resume.pdf` with your latest resume, keeping the
same filename (or update `resumeUrl` in `src/data/profile.js` if you rename it).

## Deploy (free, ~2 minutes)

**Vercel (recommended):**

1. Push this folder to a GitHub repo.
2. Go to vercel.com -> New Project -> import the repo.
3. Framework preset: Vite. Click Deploy. Done — you get a live URL, and every push to
   main auto-redeploys.

**Netlify:** same flow — import from GitHub, build command `npm run build`, publish
directory `dist`.

**GitHub Pages:** run `npm run build`, then deploy the `dist/` folder using the
`gh-pages` package or GitHub Actions.
