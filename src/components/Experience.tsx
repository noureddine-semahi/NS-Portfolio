"use client";

import { useRef, useState } from "react";
import { EXPERIENCE } from "@/content";
import { OPEN_BY_DEFAULT } from "@/site";

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const [allOpen, setAllOpen] = useState(false);

  const toggleAll = () => {
    const next = !allOpen;
    listRef.current?.querySelectorAll("details").forEach((d) => {
      d.open = next;
    });
    setAllOpen(next);
  };

  return (
    <>
      <div className="section__head">
        <h2 className="h2">Experience</h2>
        <button type="button" className="link-btn" onClick={toggleAll}>
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="roles" ref={listRef}>
        <div className="roles__rail" aria-hidden="true" />
        {EXPERIENCE.map((job, i) => (
          <article className="role" key={`${job.org}-${job.period}`}>
            <div className="role__meta">
              <span className="role__period">{job.period}</span>
              <span className="role__loc">{job.location}</span>
            </div>
            <details open={OPEN_BY_DEFAULT.includes(job.org)}>
              <summary className="role__summary">
                <span>
                  <h3 className="role__title">{job.role}</h3>
                  <span className="role__org">{job.org}</span>
                </span>
                <span className="role__toggle" aria-hidden="true" />
              </summary>
              <ul className="ledger" role="list">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="ledger__row">
                    {b}
                  </li>
                ))}
              </ul>
            </details>
            {i === 0 && <span className="role__now" aria-hidden="true" />}
          </article>
        ))}
      </div>
    </>
  );
}
