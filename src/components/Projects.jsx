import { motion } from "framer-motion";
import { GithubIcon } from "./icons";
import { projects, sideProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 sm:px-8 max-w-5xl mx-auto">
      <SectionHeading eyebrow="01 — Build log" title="Things I've shipped" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-2xl p-6"
        style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
      >
        <h4 className="font-[var(--font-mono)] text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-dim)" }}>
          Also built
        </h4>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {sideProjects.map((sp, spi) => (
            <motion.a
              key={sp.name}
              href={sp.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: spi * 0.05 }}
              whileHover={{ x: 3 }}
              className="flex items-center justify-between gap-3 text-sm py-1.5 group focus-ring rounded"
              style={{ color: "var(--text)", borderBottom: "1px solid var(--border)" }}
            >
              <span className="flex items-baseline gap-2">
                {sp.name}
                <span className="font-[var(--font-mono)] text-xs" style={{ color: "var(--text-dim)" }}>
                  {sp.tech}
                </span>
              </span>
              <GithubIcon size={14} className="shrink-0" style={{ color: "var(--text-dim)" }} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em]" style={{ color: "var(--accent-2)" }}>
        {eyebrow}
      </p>
      <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold mt-2" style={{ color: "var(--text)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-xl" style={{ color: "var(--text-dim)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
