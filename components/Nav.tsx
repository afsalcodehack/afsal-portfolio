"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="glass mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3 sm:mt-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-gradient">afsal</span>
          <span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-3 py-1.5 text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 p-1 sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-5xl rounded-2xl px-5 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted hover:text-foreground" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
