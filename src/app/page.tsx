import Link from "next/link";

// ── Placeholder content ────────────────────────────────────────────────
// Everything in [brackets] is a stand-in — swap it for your real details.
// The StandUp entry in PROJECTS is already written for real.

const NAME = "[Your Name]";
const TITLE = "[Your Title — e.g. Full-Stack Developer]";
const TAGLINE =
  "[One sentence on what you build and what you care about as an engineer.]";

const ABOUT = [
  "[A few sentences on your background — how you got into this work, what you've focused on, and what kind of problems you like solving.]",
  "[Optional second paragraph — what you're working on now, or what you're looking for next.]",
];

const EXPERIENCE: { role: string; org: string; period: string; summary: string }[] = [
  {
    role: "[Job Title]",
    org: "[Company Name]",
    period: "[Start — End]",
    summary: "[One or two lines on what you owned and what you shipped.]",
  },
  {
    role: "[Job Title]",
    org: "[Company Name]",
    period: "[Start — End]",
    summary: "[One or two lines on what you owned and what you shipped.]",
  },
];

const SKILLS = [
  "[Skill]",
  "[Skill]",
  "[Skill]",
  "[Skill]",
  "[Skill]",
  "[Skill]",
];

const PROJECTS = [
  {
    name: "StandUp",
    tagline: "A daily execution & accountability app",
    description:
      "A web app built around one rule: you can't plan tomorrow until you've reviewed today. Every evening you set at least three goals for the next day (only one can be top priority); every day you review what happened, mark outcomes honestly, and close the loop before planning again. Points, streaks, and levels reward daily consistency — not raw completion — and a missed day costs a streak, never points, so falling behind never becomes a reason to quit.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    href: "https://standup-app-two.vercel.app",
    videoPlaceholder: true,
  },
  {
    name: "[Project Name]",
    tagline: "[One-line description]",
    description: "[A short paragraph on what this project is, the problem it solves, and your role building it.]",
    stack: ["[Tech]", "[Tech]"],
    href: "",
    videoPlaceholder: false,
  },
];

const CONTACT_EMAIL = "[you@example.com]";
const LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "[https://github.com/yourhandle]" },
  { label: "LinkedIn", href: "[https://linkedin.com/in/yourhandle]" },
];

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-card-border">
        <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            {NAME}
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-muted">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top" className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <section className="min-h-[75vh] flex flex-col justify-center py-20">
          <p className="text-accent font-mono text-sm mb-4">{TITLE}</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6 max-w-3xl">
            {NAME}
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-xl leading-relaxed mb-10">{TAGLINE}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-85 transition-opacity"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-card-border font-medium hover:border-foreground/40 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 border-t border-card-border">
          <h2 className="text-sm font-mono text-accent mb-8 uppercase tracking-wider">About</h2>
          <div className="space-y-5 max-w-2xl text-lg text-muted leading-relaxed">
            {ABOUT.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12">
            <div className="text-sm font-mono text-muted mb-4 uppercase tracking-wider">Skills</div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="px-3 py-1.5 rounded-full text-sm border border-card-border bg-card-bg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 border-t border-card-border">
          <h2 className="text-sm font-mono text-accent mb-8 uppercase tracking-wider">Experience</h2>
          <div className="space-y-10">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8">
                <div className="text-sm text-muted font-mono pt-1">{job.period}</div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {job.role} <span className="text-muted font-normal">· {job.org}</span>
                  </h3>
                  <p className="mt-1.5 text-muted leading-relaxed">{job.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work / Projects */}
        <section id="work" className="py-24 border-t border-card-border">
          <h2 className="text-sm font-mono text-accent mb-8 uppercase tracking-wider">Work</h2>
          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-accent text-sm mt-1">{project.tagline}</p>
                  </div>
                  {project.href && (
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 px-4 py-2 rounded-full border border-card-border text-sm font-medium hover:border-foreground/40 transition-colors"
                    >
                      View live →
                    </Link>
                  )}
                </div>

                <p className="text-muted leading-relaxed mb-4">{project.description}</p>

                {project.videoPlaceholder && (
                  <div className="mb-4 aspect-video rounded-xl border border-dashed border-card-border flex items-center justify-center text-muted text-sm">
                    [ Intro video goes here — drop in an embed or file ]
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={`${tech}-${i}`} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 border-t border-card-border">
          <h2 className="text-sm font-mono text-accent mb-8 uppercase tracking-wider">Contact</h2>
          <p className="text-lg text-muted max-w-xl leading-relaxed mb-8">
            Have a project in mind or just want to say hello? I'd like to hear from you.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-2xl sm:text-3xl font-bold hover:text-accent transition-colors break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <div className="mt-8 flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground underline underline-offset-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="py-10 border-t border-card-border text-sm text-muted">
          © {new Date().getFullYear()} {NAME}
        </footer>
      </main>
    </>
  );
}
