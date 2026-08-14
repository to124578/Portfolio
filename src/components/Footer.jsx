import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-[var(--font-mono)] text-xs" style={{ color: "var(--text-dim)" }}>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-[var(--font-mono)] text-xs" style={{ color: "var(--text-dim)" }}>
          built with React · Vite · Tailwind
        </p>
      </div>
    </footer>
  );
}
