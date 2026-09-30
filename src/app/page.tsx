import Header from "@/components/Header";
import Experience from "@/components/Experience";
import {
  ABOUT,
  CONCEPT_PROJECTS,
  CONTACT_EMAIL,
  EDUCATION,
  HERO,
  LINKS,
  NAME,
  NAV,
  SHIPPED_PROJECT,
  SKILL_GROUPS,
} from "@/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="wrap">
            <h1 className="hero__title">
              <span className="hero__line" style={{ "--d": "0ms" } as React.CSSProperties}>
                I find where complex systems
              </span>
              <span className="hero__line" style={{ "--d": "120ms" } as React.CSSProperties}>
                fail, then build the fix.
              </span>
            </h1>
            <p className="hero__sub">{HERO.subhead}</p>
            <div className="hero__actions">
              <a className="btn" href="#experience">
                Read my experience
              </a>
              <a className="text-link" href="#work">
                See my work
              </a>
            </div>
            <p className="hero__meta">{HERO.location}</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section section--tint">
          <div className="wrap split">
            <h2 className="h2">About</h2>
            <div className="prose">
              {ABOUT.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="section">
          <div className="wrap">
            <Experience />
          </div>
        </section>

        {/* Work */}
        <section id="work" className="section section--tint">
          <div className="wrap">
            <h2 className="h2">Work</h2>

            <article className="feature reveal">
              <div className="feature__head">
                <div>
                  <h3 className="feature__name">{SHIPPED_PROJECT.name}</h3>
                  <p className="feature__tag">{SHIPPED_PROJECT.tagline}</p>
                </div>
                <a
                  className="btn btn--ghost btn--sm"
                  href={SHIPPED_PROJECT.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live<span className="sr-only"> (opens in a new tab)</span>
                  <span aria-hidden="true" style={{ marginLeft: "0.35em" }}>
                    ↗
                  </span>
                </a>
              </div>
              <p className="feature__desc">{SHIPPED_PROJECT.description}</p>
              <ul className="ledger" role="list">
                {SHIPPED_PROJECT.highlights.map((h, i) => (
                  <li key={i} className="ledger__row">
                    {h}
                  </li>
                ))}
              </ul>
              <p className="feature__stack">Built with {SHIPPED_PROJECT.stack}.</p>
            </article>

            <h3 className="h3">In design and specification</h3>
            <p className="lede">
              Fully scoped products with completed briefs, user stories, and business planning.
              Development pending.
            </p>
            <dl className="defs reveal">
              {CONCEPT_PROJECTS.map((p) => (
                <div className="defs__row" key={p.name}>
                  <dt>
                    {p.name}
                    <span className="defs__sub">{p.tagline}</span>
                  </dt>
                  <dd>{p.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Skills and Education */}
        <section className="section">
          <div className="wrap duo">
            <div>
              <h2 className="h2">Skills</h2>
              <dl className="defs defs--stack">
                {SKILL_GROUPS.map((g) => (
                  <div className="defs__row" key={g.term}>
                    <dt>{g.term}</dt>
                    <dd>{g.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="h2">Education and credentials</h2>
              <dl className="defs defs--stack">
                {EDUCATION.map((e) => (
                  <div className="defs__row" key={e.term}>
                    <dt>{e.term}</dt>
                    <dd>{e.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="panel">
          <div className="wrap">
            <h2 className="panel__title">Looking for a validation or QA engineer? Write to me.</h2>
            <a className="panel__email" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <p className="panel__links">
              {LINKS.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span className="footer__mark">{NAME}</span>
          <nav aria-label="Footer" className="footer__nav">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <span className="footer__legal">© {new Date().getFullYear()} {NAME}</span>
        </div>
      </footer>
    </>
  );
}
