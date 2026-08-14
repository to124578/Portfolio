import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/profile";
import { SectionHeading } from "./Projects";

// ── SETUP (2 minutes) ──────────────────────────────────────────
// 1. Go to https://formspree.io and sign up free.
// 2. Create a new form, it gives you an endpoint like:
//      https://formspree.io/f/xxxxabcd
// 3. Paste that endpoint below, replacing the placeholder.
// That's it — submissions land in your Formspree inbox/email.
// ────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgawokdj";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 max-w-5xl mx-auto">
      <SectionHeading
        eyebrow="04 — Let's talk"
        title="Open to internships & collaborations"
        subtitle="Recruiter, trainer, or just building something interesting? Send a message — I read everything."
      />

      <div className="mt-10 grid md:grid-cols-5 gap-6">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 rounded-2xl p-6 space-y-4"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" type="text" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Message" name="message" type="textarea" required />

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full focus-ring transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
          >
            <Send size={15} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm" style={{ color: "var(--accent-2)" }}>Sent — thanks, I'll reply soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm" style={{ color: "#D96C6C" }}>
              Something went wrong. Email me directly at {profile.email}.
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="md:col-span-2 rounded-2xl p-6 flex flex-col justify-between"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)" }}
        >
          <div className="space-y-4">
            <ContactLink icon={<Mail size={16} />} label={profile.email} href={`mailto:${profile.email}`} />
            <ContactLink icon={<GithubIcon size={16} />} label="github.com/to124578" href={profile.github} />
            {profile.linkedin && (
              <ContactLink icon={<LinkedinIcon size={16} />} label="LinkedIn" href={profile.linkedin} />
            )}
          </div>
          <p className="text-xs mt-6" style={{ color: "var(--text-dim)" }}>
            Based in {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type, required }) {
  const base = "w-full rounded-lg px-3 py-2.5 text-sm focus-ring outline-none";
  const style = { backgroundColor: "var(--surface-2)", color: "var(--text)", border: "1px solid var(--border)" };
  return (
    <label className="block text-xs" style={{ color: "var(--text-dim)" }}>
      {label}
      {type === "textarea" ? (
        <textarea name={name} required={required} rows={4} className={`${base} mt-1.5 resize-none`} style={style} />
      ) : (
        <input name={name} type={type} required={required} className={`${base} mt-1.5`} style={style} />
      )}
    </label>
  );
}

function ContactLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 text-sm font-medium focus-ring rounded group"
      style={{ color: "var(--text)" }}
    >
      <span
        className="flex items-center justify-center h-9 w-9 rounded-lg shrink-0 transition-transform group-hover:-translate-y-0.5"
        style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent)" }}
      >
        {icon}
      </span>
      {label}
    </a>
  );
}
