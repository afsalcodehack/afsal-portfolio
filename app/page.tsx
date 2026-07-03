import fs from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { site, profile, skillGroups, experience, education } from "@/lib/data";

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="font-mono text-sm text-accent">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  // Checked at build time (static export) — hero shows initials until the photo lands in /public.
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "profile.jpg"));

  return (
    <>
      <Nav />
      <main>
        <Hero hasPhoto={hasPhoto} />

        {/* About */}
        <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28">
          <SectionHeading kicker="01 · About" title="Profile" />
          <Reveal delay={100}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">{profile}</p>
          </Reveal>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28">
          <SectionHeading kicker="02 · Skills" title="Core Skills" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 3) * 100}>
                <div className="card h-full rounded-2xl p-6">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <span aria-hidden>{group.icon}</span>
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28">
          <SectionHeading kicker="03 · Experience" title="Where I've Worked" />
          <div className="relative mt-12 space-y-12 before:absolute before:inset-y-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-cyan-400/60 before:via-violet-400/40 before:to-transparent sm:space-y-16">
            {experience.map((job) => (
              <Reveal key={job.company} className="relative pl-10">
                <span
                  className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-cyan-400 bg-background"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="text-accent">@ {job.company}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-muted">
                  {job.period} · {job.location}
                </p>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{job.summary}</p>
                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="card flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6">
              <div>
                <p className="font-mono text-xs text-accent">Education</p>
                <h3 className="mt-1 font-semibold">{education.degree}</h3>
                <p className="text-sm text-muted">{education.school}</p>
              </div>
              <span className="text-3xl" aria-hidden>
                🎓
              </span>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:py-28">
          <SectionHeading kicker="04 · Contact" title="Get In Touch" />
          <Reveal className="mt-10" delay={100}>
            <Contact />
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 text-xs text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono">
            Built with Next.js 16 · Tailwind v4 · Deployed on Cloudflare Pages
          </p>
        </div>
      </footer>
    </>
  );
}
