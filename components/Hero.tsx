"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, stats } from "@/lib/data";

const roles = [
  "Agentic AI Engineer",
  "Full Stack Architect",
  "LangGraph & RAG Builder",
  "Azure Cloud Specialist",
];

function TypedRole() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), 1800);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIdx((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 35 : 70
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="cursor-blink">▌</span>
    </span>
  );
}

export default function Hero({ hasPhoto }: { hasPhoto: boolean }) {
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="orb left-[-10%] top-[10%] h-96 w-96 bg-cyan-500/60" aria-hidden />
      <div className="orb right-[-5%] bottom-[5%] h-80 w-80 bg-violet-500/60 [animation-delay:-6s]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to interesting problems · {site.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {site.name.split(" ")[0]}{" "}
            <span className="text-gradient">{site.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-3 text-lg text-muted sm:text-xl">
            {site.title} · <TypedRole />
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            12+ years shipping production full-stack systems. Now designing multi-agent AI
            workflows, RAG pipelines, and secure cloud architecture on Azure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 text-xs text-muted">{s.label}</dt>
                <dd className="text-2xl font-bold text-gradient">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-64 sm:w-72 md:w-full md:max-w-xs">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 to-violet-400/30 blur-2xl" aria-hidden />
          {hasPhoto ? (
            <Image
              src="/profile.jpg"
              alt={`Portrait of ${site.name}`}
              width={640}
              height={640}
              priority
              className="relative aspect-square rounded-[2rem] border border-line object-cover"
            />
          ) : (
            <div className="glass relative flex aspect-square items-center justify-center rounded-[2rem]">
              <span className="text-7xl font-bold text-gradient">MA</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
