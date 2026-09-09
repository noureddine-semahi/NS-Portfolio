import Link from "next/link";

const NAME = "Noureddine Semahi";
const TITLE = "Validation & QA Engineer · Web Developer · Data Analyst";
const TAGLINE =
  "I test it, I build it, I analyze it. Ten years making complex systems reliable, from autonomous vehicles to medical software to the apps I build myself.";

const ABOUT = [
  "I came into technology through quality: figuring out why systems fail, documenting it precisely enough that someone can fix it, and building the processes that stop it happening again. That work has taken me across autonomous vehicles at Waymo, Tesla, and Avride, medical device software at Join Parachute, and large-scale data quality at Google, Apple, and YouTube.",
  "Along the way I started building the things I wanted to exist. I work across React and Next.js, and I take projects from concept through brand, specification, and business case rather than stopping at code. My Data Analytics training at Vijay Computer Academy closed the loop between testing systems, building them, and reading what the data says about both.",
  "[What are you looking for next — a specific role, freelance work, a particular kind of team?]",
];

const EXPERIENCE: { role: string; org: string; period: string; summary: string }[] = [
  {
    role: "Vehicle Safety Operator",
    org: "Avride (via HireArt)",
    period: "Apr 2026 — Present",
    summary:
      "Operate autonomous vehicles in live on-road testing, collecting performance data on proprietary LiDAR and camera systems and reporting system behavior to engineering teams.",
  },
  {
    role: "Validation Specialist / QA Test Engineer",
    org: "Join Parachute LLC",
    period: "Mar 2023 — Jul 2025",
    summary:
      "Owned the validation process end to end for SaMD and regulated equipment under FDA 21 CFR Part 11/820 and ISO 13485. Built an automated solution for tracking validation progress and test coverage, plus an equipment management system with role-based permissions.",
  },
  {
    role: "Autopilot Software Test Operator",
    org: "Tesla",
    period: "Feb 2024 — Jun 2024",
    summary:
      "Executed structured test plans for Autopilot and Full Self-Driving, logging anomalies and performing post-drive log analysis that fed directly into engineering triage.",
  },
  {
    role: "Validation Specialist / Software QA Test Engineer",
    org: "Google",
    period: "Aug 2021 — Mar 2023",
    summary:
      "Designed and executed test cases for Google Maps and Wear OS across Agile sprints, including API testing, accessibility validation, and ADB/USB device debugging.",
  },
  {
    role: "Fleet Response Specialist / Remote Assistance Dispatch",
    org: "Waymo",
    period: "Aug 2018 — Nov 2019",
    summary:
      "Provided real-time human guidance to live driverless vehicles, building path solutions to resolve stuck-vehicle edge cases and supporting fleet escalations.",
  },
  {
    role: "Trust & Safety Quality Analyst",
    org: "YouTube",
    period: "Mar 2018 — Aug 2021",
    summary:
      "Audited large-scale content moderation workflows, running calibration audits measuring accuracy, agreement rates, and reviewer drift.",
  },
];

const SKILLS = [
  "React",
  "Next.js",
  "JavaScript",
  "Python",
  "SQL",
  "Supabase",
  "Stripe Connect",
  "Git & GitHub",
  "Test Automation (Selenium, Playwright, Cypress)",
  "API Testing (Postman)",
  "Power BI",
  "Product Specification & User Stories",
  "UI/UX Design",
];

// Shipped and live.
const SHIPPED_PROJECT = {
  name: "StandUp",
  tagline: "Daily execution and goal tracking",
  description:
    "A Next.js app for planning tomorrow, executing today, and building streaks that mean something. Turns intentions into a closed loop: plan, work, close the day, carry forward what's left.",
  highlights: [
    "Today and Tomorrow planning pages with goal creation and rescheduling",
    "Reschedule flow moving goals to Tomorrow with an origin badge",
    "Points system backed by an event-log table, totals derived by sum",
    "Streaks computed from closed daily plans rather than stored counters",
    "Close-day flow: carry-over prompt, then a celebration receipt with real stats",
    "Calendar view with glanceable per-day dots",
    "Recurring goals as tap-to-add suggestion chips from templates",
    "Supabase authentication",
  ],
  stack: ["Next.js", "Supabase", "Vercel"],
  href: "https://standup-app-two.vercel.app",
  videoPlaceholder: true,
};

// Fully scoped — briefs, user stories, and business planning complete;
// development pending.
const CONCEPT_PROJECTS = [
  {
    name: "TrackApply",
    tagline: "Job application management",
    description:
      "Email intake via a unique forwarding address, tiered match-confidence logic, a recruiter contact hub, and AI resume-fit analysis against job descriptions. 21 user stories and a phased roadmap complete.",
  },
  {
    name: "Privé",
    tagline: "Premium by-the-hour chauffeur booking",
    description:
      "The driver operates your own vehicle and is exclusively yours for the window. Completed an 11-section business plan covering service model, unit economics, chauffeur vetting, legal and insurance risk, and a three-phase go-to-market strategy.",
  },
  {
    name: "Let's Go Y'all",
    tagline: "Group trip planning",
    description:
      "Members vote to approve activities and everyone pays their share upfront before the trip funds and books. Stripe Connect payment architecture, planned for web, iOS, and Android on a shared backend.",
  },
  {
    name: "Invitely",
    tagline: "Printable invitations with digital RSVP",
    description:
      "Printable invitation cards with embedded QR codes bridging to digital RSVP tracking. Brand identity, product brief, and interactive React prototype complete.",
  },
];

const CONTACT_EMAIL = "noureddine.semahi@gmail.com";
const LINKS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/noureddine-semahi" },
  { label: "GitHub", href: "[https://github.com/your-handle]" },
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
              <div key={i} className="grid sm:grid-cols-[200px_1fr] gap-2 sm:gap-8">
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

          <div className="text-sm font-mono text-muted mb-4 uppercase tracking-wider">Built &amp; Deployed</div>
          <article className="rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-2xl font-bold">{SHIPPED_PROJECT.name}</h3>
                <p className="text-accent text-sm mt-1">{SHIPPED_PROJECT.tagline}</p>
              </div>
              <Link
                href={SHIPPED_PROJECT.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-4 py-2 rounded-full border border-card-border text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                View live →
              </Link>
            </div>

            <p className="text-muted leading-relaxed mb-4">{SHIPPED_PROJECT.description}</p>

            {SHIPPED_PROJECT.videoPlaceholder && (
              <div className="mb-4 aspect-video rounded-xl border border-dashed border-card-border flex items-center justify-center text-muted text-sm text-center px-6">
                [ Intro video goes here — drop in an embed or file ]
              </div>
            )}

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
              {SHIPPED_PROJECT.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent mt-1">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {SHIPPED_PROJECT.stack.map((tech, i) => (
                <span key={`${tech}-${i}`} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </article>

          <div className="text-sm font-mono text-muted mb-4 mt-14 uppercase tracking-wider">
            In Design &amp; Specification
          </div>
          <p className="text-sm text-muted mb-6 max-w-xl">
            Fully scoped products with completed briefs, user stories, and business planning — development pending.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {CONCEPT_PROJECTS.map((project) => (
              <article key={project.name} className="rounded-2xl border border-card-border bg-card-bg p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <span className="flex-shrink-0 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/5 text-muted">
                    Concept
                  </span>
                </div>
                <p className="text-accent text-xs mb-2">{project.tagline}</p>
                <p className="text-sm text-muted leading-relaxed">{project.description}</p>
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
