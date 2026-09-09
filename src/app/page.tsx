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

const EXPERIENCE: { role: string; org: string; location: string; period: string; bullets: string[] }[] = [
  {
    role: "Vehicle Safety Operator, AV Test & Validation",
    org: "Avride (via HireArt)",
    location: "Austin, TX",
    period: "Apr 2026 — Present",
    bullets: [
      "Operate autonomous vehicles safely and lawfully on Golden Rides missions, alternating between manual driving and supervising autonomous mode alongside remote operators",
      "Support in-field testing and data collection, including hardware adjustments, software uploads, and basic technical troubleshooting",
      "Monitor on-road system performance and submit detailed reports that feed engineering advancements and operational improvements",
    ],
  },
  {
    role: "Validation Specialist / QA Test Engineer",
    org: "Join Parachute LLC",
    location: "Austin, TX",
    period: "Mar 2023 — Jul 2025",
    bullets: [
      "Owned validation end to end for SaMD and regulated equipment under FDA 21 CFR Part 11/820, ISO 13485/14971, and GAMP 5 — authoring plans, IQ/OQ/PQ protocols, risk assessments, and validation summary reports",
      "Designed and built a fully automated system tracking validation progress, test coverage, and equipment lifecycle with role-based permissions",
      "Built an AI-driven template filler that auto-generated validation and project plans, and contributed to a new Selenium-based regression test library",
    ],
  },
  {
    role: "Autopilot Software Test Operator",
    org: "Tesla",
    location: "Austin, TX",
    period: "Feb 2024 — Jun 2024",
    bullets: [
      "Drove engineering vehicles on 6–8 hour daily sessions collecting audio and camera data for Autopilot and Full Self-Driving training and testing",
      "Logged software anomalies across structured test plans, contributing to measurable reductions in FSD disengagements",
      "Performed post-drive log reviews and partnered with engineering to reproduce defects and validate firmware fixes",
    ],
  },
  {
    role: "Validation Specialist / Software QA Test Engineer",
    org: "Google",
    location: "Austin, TX",
    period: "Aug 2021 — Mar 2023",
    bullets: [
      "Designed and executed manual and exploratory test cases for Google Maps and Wear OS across Agile sprints",
      "Performed API testing with Postman and wrote Python and SQL scripts to validate payloads, status codes, and backend data consistency",
      "Conducted accessibility testing with NVDA, JAWS, TalkBack, and VoiceOver; built Power BI dashboards for defect trends and quality metrics",
    ],
  },
  {
    role: "Fleet Response Specialist / Remote Assistance Dispatch",
    org: "Waymo",
    location: "Austin, TX",
    period: "Aug 2018 — Nov 2019",
    bullets: [
      "Provided real-time human guidance to live driverless vehicles, building path solutions for stuck-vehicle edge cases",
      "Acted as on-shift point of contact for fleet escalations, intervening with precision guidance on safety-critical situations",
      "Contributed to a pilot program on operator fatigue detection and trained new dispatchers on procedures",
    ],
  },
  {
    role: "Trust & Safety Quality Analyst / Data Validation Specialist",
    org: "YouTube (Google)",
    location: "Austin, TX",
    period: "Mar 2018 — Aug 2021",
    bullets: [
      "Performed large-scale quality analysis of content moderation workflows supporting global policy enforcement",
      "Conducted calibration and quality audits measuring accuracy, agreement rates, and reviewer drift",
      "Tracked Trust & Safety performance metrics and translated findings into guideline and workflow improvements",
    ],
  },
  {
    role: "Data Quality & Trust and Safety Specialist",
    org: "Apple Maps",
    location: "Austin, TX",
    period: "Jul 2017 — Oct 2017",
    bullets: [
      "Validated large-scale geospatial points-of-interest datasets, ensuring data integrity and compliance with quality standards",
      "Designed SQL-based validation and audit queries to surface systemic data quality issues across multi-source datasets",
      "Developed repeatable validation workflows that improved risk detection and reduced manual review effort",
    ],
  },
  {
    role: "Jr. Test Engineer, Mobile & Hardware QA",
    org: "Nexar Inc.",
    location: "San Francisco, CA",
    period: "Jul 2015 — Jan 2017",
    bullets: [
      "Tested AI-powered dash cameras and companion mobile apps on iOS and Android for stability, performance, and video sync",
      "Wrote Python scripts to build data-driven test utilities simulating real-world capture and connectivity scenarios",
      "Integrated automated test execution into CI pipelines, reducing test cycle time by 25%",
    ],
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
                <div className="text-sm text-muted font-mono pt-1">
                  {job.period}
                  <div className="text-xs mt-1 opacity-70">{job.location}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {job.role} <span className="text-muted font-normal">· {job.org}</span>
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                        <span className="text-accent mt-1">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
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
