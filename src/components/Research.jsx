import { motion } from "framer-motion";
import { FileText, Award, GraduationCap } from "lucide-react";
import { certifications, profile, leadership } from "../data/profile";
import { publication } from "../data/projects";
import { SectionHeading } from "./Projects";

export default function Research() {
  return (
    <section id="research" className="py-16 px-5 sm:px-8 max-w-5xl mx-auto">
      <SectionHeading eyebrow="03 — Beyond code" title="Research, credentials & involvement" />

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl p-6 md:col-span-2"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <FileText size={16} style={{ color: "var(--accent)" }} />
            <h4 className="font-[var(--font-mono)] text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              Published research
            </h4>
          </div>
          <h3 className="font-[var(--font-display)] text-xl font-semibold" style={{ color: "var(--text)" }}>
            {publication.title}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--accent-2)" }}>
            {publication.venue} · {publication.date}
          </p>
          <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-dim)" }}>
            {publication.detail}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="rounded-2xl p-6"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Award size={16} style={{ color: "var(--accent)" }} />
            <h4 className="font-[var(--font-mono)] text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              Certifications
            </h4>
          </div>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="text-sm" style={{ color: "var(--text)" }}>
                {c.name}
                <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
                  {c.issuer}{c.date ? ` · ${c.date}` : ""}
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="rounded-2xl p-6"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={16} style={{ color: "var(--accent)" }} />
            <h4 className="font-[var(--font-mono)] text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
              Education & leadership
            </h4>
          </div>
          <p className="text-sm" style={{ color: "var(--text)" }}>{profile.education.degree}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
            {profile.education.school} · {profile.education.period} · CGPA {profile.education.cgpa}
          </p>
          <ul className="mt-4 space-y-2">
            {leadership.map((l, i) => (
              <li key={i} className="text-xs leading-relaxed flex gap-2" style={{ color: "var(--text-dim)" }}>
                <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: "var(--accent-2)" }} />
                {l}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
