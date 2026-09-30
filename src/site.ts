export const NAME = "Noureddine Semahi";

// Vercel exposes the production domain at build time, so a custom domain is
// picked up automatically. The fallback is the current deployment URL.
export const SITE_URL = `https://${
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "ns-portfolio-mocha.vercel.app"
}`;

export const HERO = {
  headline: "I find where complex systems fail, then build the fix.",
  subhead:
    "Ten years in quality and validation, from FDA-regulated medical device software to mobile and wearable platforms at Google to autonomous vehicles at Waymo, Tesla and Avride.",
  location: "Austin, TX · open to remote",
};

export const ABOUT = [
  "I came into technology through quality: figuring out why systems fail, documenting it precisely enough that someone can fix it, and building the processes that stop it happening again.",
  "I currently operate autonomous vehicles in live on-road testing at Avride. Before that, I owned end-to-end validation for FDA-regulated medical device software and equipment at Join Parachute, and earlier I tested Google Maps and Wear OS across mobile and wearable platforms.",
  "Along the way I started building the things I wanted to exist. I work across React and Next.js, and I take projects from concept through brand, specification, and business case rather than stopping at code. My Data Analytics training at Vijay Computer Academy closed the loop between testing systems, building them, and reading what the data says about both.",
  "I'm looking for a validation or QA engineering role where the work is substantive: owning test strategy, not just executing someone else's plan. Regulated environments and autonomous systems are where I'm strongest, and I'm drawn to teams that treat quality as a design input rather than a final gate. I'm based in Austin and open to remote.",
];

// Roles open by default in the Experience ledger (matched on org).
export const OPEN_BY_DEFAULT = ["Avride (via HireArt)", "Join Parachute LLC", "Google"];

export const SKILL_GROUPS: { term: string; items: string }[] = [
  {
    term: "Validation and compliance",
    items:
      "Computer System Validation (CSV), IQ/OQ/PQ, Process Validation, Equipment Qualification, Validation Plans and Summary Reports, Requirements Traceability, Risk Assessment, Change Control, CAPA and Deviation Management, Audit Readiness",
  },
  {
    term: "Regulatory frameworks",
    items: "FDA 21 CFR Part 11, FDA 21 CFR Part 820, ISO 13485, ISO 14971, GAMP 5, GxP, SaMD",
  },
  {
    term: "Testing",
    items:
      "Manual, Functional, Regression, Integration, UAT, Exploratory, Smoke and Sanity, Accessibility, Defect Triage and Lifecycle Management, Test Automation (Selenium, Playwright, Cypress), API Testing (Postman)",
  },
  {
    term: "Data and analysis",
    items: "Python, SQL, Power BI, Data Integrity Validation, Data Profiling, Root Cause Analysis",
  },
  {
    term: "Building",
    items:
      "React, Next.js, JavaScript, Supabase, Stripe Connect, Git and GitHub, UI/UX Design, Product Specification and User Stories",
  },
  {
    term: "Platforms and tools",
    items:
      "JIRA, Confluence, Power Apps, Power Automate, Dataverse, SharePoint, Microsoft 365, Azure AD, Jenkins",
  },
  {
    term: "AI-assisted workflows",
    items: "Claude, ChatGPT, Microsoft Copilot, AI-assisted test scoping and generation",
  },
];

export const EDUCATION: { term: string; detail: string }[] = [
  {
    term: "Full Stack Web Development Certificate",
    detail: "University of Texas at Austin, 2020",
  },
  { term: "Data Analytics", detail: "Vijay Computer Academy (in progress)" },
  {
    term: "BSc, Sciences of Language and Didactics",
    detail: "Abderrehmane Mira University, 2010",
  },
  {
    term: "Linguistics and Didactics, Graduate Coursework",
    detail: "Paris Descartes University, 2011",
  },
];

export const LANGUAGES: { term: string; detail: string }[] = [
  { term: "French", detail: "Fluent" },
  { term: "English", detail: "Fluent" },
  { term: "Arabic", detail: "Fluent" },
  { term: "Berber", detail: "Native" },
];

export const SHIPPED_PROJECT = {
  name: "StandUp",
  tagline: "Daily execution, accountability, and a social layer built around keeping your word",
  description:
    "A Next.js app that turns intentions into a closed loop — plan tomorrow, execute today, close the day honestly, and carry forward what's left — now extended into a full social accountability platform where you can share your progress, assign goals to others, and hold each other to it.",
  engineeringNotes: [
    "Postgres Row-Level Security is the only access-control layer — there's no service-role key anywhere in the project, including the one server API route, which calls Supabase with the requesting user's own token",
    "State is computed on read wherever possible (streaks, points totals, notification counts) instead of stored and risking drift",
    "Every cross-user read/write (goal assignments, mentions, sharing) goes through security-definer functions that re-validate authorization server-side, never trusting the client",
    "Vitest for unit/smoke tests, deployed on Vercel with auto-deploy on push to main",
  ],
  groups: [
    {
      title: "Core execution loop",
      items: [
        "Plan Tomorrow → Review Today → Close Day → Carry Forward, with goals, checklists, file attachments, and a full chronological timeline per goal (status changes, reschedules, notes — one real history, not scattered logs)",
        "Streaks computed live from closed daily plans, never a stored counter that can drift; a points system backed by an event log, totals derived by sum",
        "A level system and unlockable achievement badges layered on top of points, streaks, and lifetime stats",
        "Weekly “streak passes” — two forgiven misses per week for a 5-of-7 pace, spendable retroactively on a missed day or proactively on a future one (cover tomorrow in advance and it closes itself automatically, with anything still drafted on it rescheduled forward for you)",
        "Recurring goal templates (tap-to-add suggestion chips) and long-term, target-dated goals as a Backlog extension",
      ],
    },
    {
      title: "Social layer",
      items: [
        "Connections: send/accept requests, a discovery feed to find people, and a privacy toggle to opt out of being discoverable at all",
        "A unified feed (goal “glimpses,” achievement unlocks, and freeform motivational posts — text, photo, or video) with reactions, threaded comments and replies, and @mentions that notify the person tagged",
        "Share any visible post directly to one of your connections, extending its visibility within your own network without leaking it further",
        "Goal assignments: hand one of your own goals to a connection, who can accept or decline it; once accepted it materializes as their own independent goal (with your checklist/attachments carried over). Assignments are shared (fully independent) or exclusive (locks you out of your own copy once accepted) by choice — and either side can retract or cancel later, pulling the goal back off both people's day and notifying the other with a reason",
        "Admin moderation tools (full visibility past normal privacy rules, removal, audit log) and a first-time community-guidelines gate, since the feed is meant to stay motivational",
      ],
    },
    {
      title: "AI assistant",
      items: [
        "A Dashboard assistant for plain-language goal actions, with voice input and a small fixed tool set (including a delete tool that always confirms first)",
        "Runs on a free Gemini tier by default with Anthropic as a paid fallback, behind one normalized provider interface — a genuinely free feature with a hard usage cap, not a cost center",
      ],
    },
    {
      title: "Everything else",
      items: [
        "Full English/Spanish localization, built from scratch as a lightweight React context (no i18n library) — the English dictionary is the source of truth, and the build fails if a string ships untranslated",
        "A cohesive dark-mode-first, LED/seven-segment visual identity applied across the entire app, with per-profile theme preference and an app-wide icon system (no emoji-as-UI)",
        "Role-based admin tooling (Member/Admin/Sys Admin), landing-page analytics, and growth stats",
      ],
    },
  ],
  stack:
    "Next.js 16 (App Router, TypeScript), Tailwind CSS v4, Supabase (Postgres, Auth, Storage), Vercel",
  href: "https://standup-app-two.vercel.app",
};

export const CONCEPT_PROJECTS = [
  {
    name: "TrackApply",
    tagline: "Job application management",
    status: "In active development",
    description:
      "Desktop-first application for managing job applications end to end. Email intake via a unique forwarding address auto-creates or updates records from forwarded job emails, with tiered match-confidence logic (exact, partial, and recruiter-identity-only, in both directions). A recruiter and contact hub surfaces every linked application, communication, and status in one place, and AI resume-fit analysis checks a resume against a job description using the candidate profile as source of truth. 21 user stories and a phased roadmap complete, with IP protection and patent strategy assessed ahead of build.",
  },
  {
    name: "Privé",
    tagline: "Premium by-the-hour chauffeur booking",
    status: "Concept",
    description:
      "A chauffeur who drives your own vehicle and is exclusively yours for the booking window, waiting while you shop, holding your spot, learning your preferences over time. Two-tier pricing, membership packages with pre-purchased hours, and corporate accounts, on a platform commission model. Serves corporate executives, luxury vehicle owners, license-restricted drivers, affluent professionals, event attendees, and elderly clients who own vehicles but no longer drive. Completed 11-section business plan covering service model, unit economics, chauffeur vetting, legal and insurance risk, and a three-phase go-to-market strategy.",
  },
  {
    name: "Let's Go Y'all",
    tagline: "Group trip planning with collective payment",
    status: "Concept",
    description:
      "Solves the two things that kill group trips: nobody agrees, and nobody pays. An organizer invites members and proposes activities and bookings, the group votes to approve, and every member pays their share upfront before the trip funds and books. Stripe Connect embedded checkout as the primary payment path, deliberately chosen to avoid handling banking data directly, with Venmo, Cash App, and PayPal links as fallback. Planned for web, iOS, and Android on a shared backend, with vendor partnerships envisioned after MVP traction.",
  },
  {
    name: "Invitely",
    tagline: "Printable invitations with digital RSVP",
    status: "Concept",
    description:
      "Physical keepsake cards carrying embedded QR codes that bridge to digital RSVP tracking, closing the gap between a printed invitation and live guest-list management. Full brand identity, product brief, and interactive React prototype complete. A provisional patent opportunity was identified for the physical-to-digital QR bridge concept.",
  },
];

export const CONTACT_EMAIL = "noureddine.semahi@gmail.com";
export const LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/noureddine-semahi" },
  { label: "GitHub", href: "https://github.com/noureddine-semahi" },
];

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
