export const NAME = "Noureddine Semahi";

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
    term: "Testing and validation",
    items:
      "Test Automation (Selenium, Playwright, Cypress), API Testing (Postman), Product Specification & User Stories",
  },
  {
    term: "Building",
    items: "React, Next.js, JavaScript, Supabase, Stripe Connect, Git & GitHub, UI/UX Design",
  },
  { term: "Data", items: "Python, SQL, Power BI" },
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

export const SHIPPED_PROJECT = {
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
  stack: "Next.js, Supabase, Vercel",
  href: "https://standup-app-two.vercel.app",
};

export const CONCEPT_PROJECTS = [
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
