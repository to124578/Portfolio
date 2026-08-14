import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "./icons";
import { profile } from "../data/profile";

const READOUTS = [
  { label: "RMSE vs baseline", value: "-70–74%", note: "VayuDrishti" },
  { label: "tests passing", value: "32/32", note: "CI green" },
  { label: "agents orchestrated", value: "4", note: "GuardianAI" },
  { label: "codebase", value: "120+ files", note: "Cherry" },
  { label: "papers published", value: "1", note: "IJSCI, Jun '26" },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 px-5 sm:px-8 max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2"
        style={{ color: "var(--accent-2)" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: "var(--accent-2)" }} />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent-2)" }} />
        </span>
        status: building
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-[var(--font-display)] font-semibold leading-[1.04] tracking-tight text-[2.6rem] sm:text-6xl"
        style={{ color: "var(--text)" }}
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed"
        style={{ color: "var(--text-dim)" }}
      >
        I build full working systems, not isolated exercises — forecasting pipelines, multi-agent
        RAG platforms, and the backend APIs that hold them together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full focus-ring transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
        >
          See the projects
          <ArrowDown size={15} strokeWidth={2.5} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full focus-ring transition-transform hover:-translate-y-0.5"
          style={{ border: "1px solid var(--border)", color: "var(--text)" }}
        >
          <Mail size={15} />
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full focus-ring transition-transform hover:-translate-y-0.5"
          style={{ border: "1px solid var(--border)", color: "var(--text)" }}
        >
          <GithubIcon size={15} />
          GitHub
        </a>
      </motion.div>

      {/* Signature element: telemetry strip pulling real numbers from the projects below */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="mt-16 rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5 font-[var(--font-mono)] text-[11px] uppercase tracking-widest"
          style={{ borderBottom: "1px solid var(--border)", color: "var(--text-dim)" }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
          system telemetry — last shipped work
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0" style={{ borderColor: "var(--border)" }}>
          {READOUTS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
              whileHover={{ backgroundColor: "var(--accent-soft)" }}
              className="px-4 py-4 transition-colors"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="font-[var(--font-mono)] text-xl sm:text-2xl font-semibold" style={{ color: "var(--text)" }}>
                {r.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>
                {r.label}
              </div>
              <div className="text-[11px] mt-0.5 font-[var(--font-mono)]" style={{ color: "var(--accent-2)" }}>
                {r.note}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
