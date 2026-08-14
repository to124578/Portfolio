import { motion } from "framer-motion";
import { skillGroups } from "../data/profile";
import { SectionHeading } from "./Projects";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
      <SectionHeading eyebrow="02 — Toolset" title="What I build with" />
      <div className="mt-10 grid sm:grid-cols-2 gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: gi * 0.06 }}
            whileHover={{ y: -3 }}
            className="rounded-2xl p-5 transition-shadow hover:shadow-[0_12px_32px_-16px_var(--accent)]"
            style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
          >
            <h4 className="font-[var(--font-mono)] text-xs uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item, ii) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.06 + ii * 0.02 }}
                  whileHover={{ y: -2, backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
                  className="text-xs px-2.5 py-1 rounded-md cursor-default"
                  style={{ backgroundColor: "var(--surface-2)", color: "var(--text)" }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
