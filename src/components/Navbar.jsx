import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { profile } from "../data/profile";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-[var(--font-mono)] text-sm tracking-tight" style={{ color: "var(--text)" }}>
          <span style={{ color: "var(--accent)" }}>~/</span>tushar-ojha
        </a>

        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium focus-ring rounded group py-1"
              style={{ color: "var(--text-dim)" }}
            >
              {l.label}
              <span
                className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full focus-ring transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
          >
            <Download size={14} strokeWidth={2.5} />
            Resume
          </a>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="p-2 rounded-full focus-ring transition-colors"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-full focus-ring"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden px-5 pb-4 flex flex-col gap-3"
          style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium" style={{ color: "var(--text)" }}>
              {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} download className="text-sm font-medium" style={{ color: "var(--accent)" }}>
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
