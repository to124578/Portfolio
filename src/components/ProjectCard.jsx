import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl p-6 sm:p-7 flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_16px_40px_-18px_var(--accent)]"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span
          className="h-1.5 w-1.5 rounded-full shrink-0"
          style={{ backgroundColor: project.status === "shipped" ? "var(--accent-2)" : "var(--accent)" }}
        />
        <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-widest leading-snug" style={{ color: "var(--text-dim)" }}>
          {project.role}{project.context ? ` · ${project.context}` : ""}
        </span>
      </div>
      <h3 className="font-[var(--font-display)] text-2xl font-semibold" style={{ color: "var(--text)" }}>
        {project.title}
      </h3>
      <p className="text-sm mt-1" style={{ color: "var(--text-dim)" }}>
        {project.tagline}
      </p>
      {project.metric && (
        <div
          className="inline-flex self-start mt-3 font-[var(--font-mono)] text-xs px-2.5 py-1.5 rounded-lg"
          style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
        >
          {project.metric}
        </div>
      )}

      <ul className="mt-4 space-y-2 flex-1">
        {project.description.map((d, i) => (
          <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: "var(--text)" }}>
            <span className="mt-2 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: "var(--text-dim)" }} />
            {d}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t, ti) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.06 + ti * 0.025 }}
            className="font-[var(--font-mono)] text-[11px] px-2 py-1 rounded-md"
            style={{ backgroundColor: "var(--surface-2)", color: "var(--text-dim)" }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium focus-ring rounded"
          style={{ color: "var(--text)" }}
        >
          <GithubIcon size={15} /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium focus-ring rounded"
            style={{ color: "var(--accent-2)" }}
          >
            <ExternalLink size={15} /> Live demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
