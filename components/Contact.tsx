"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

// Email is assembled client-side so it never appears in the static HTML for scrapers.
export default function Contact() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${site.emailUser}@${site.emailDomain}`);
  }, []);

  return (
    <div className="card mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12">
      <h3 className="text-2xl font-bold sm:text-3xl">
        Let&apos;s build something <span className="text-gradient">intelligent</span>
      </h3>
      <p className="mx-auto mt-4 max-w-md text-muted">
        Whether it&apos;s agentic AI, a RAG platform, or full-stack architecture — I&apos;m happy
        to talk.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {email && (
          <a
            href={`mailto:${email}`}
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
          >
            {email}
          </a>
        )}
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
        >
          LinkedIn ↗
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  );
}
