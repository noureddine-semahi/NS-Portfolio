"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, NAME, NAV } from "@/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const drawer = drawerRef.current;
    const burger = burgerRef.current;
    document.body.style.overflow = "hidden";
    drawer?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !drawer) return;
      const focusable = [
        ...drawer.querySelectorAll<HTMLElement>("a, button"),
        ...(burger ? [burger] : []),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      burger?.focus();
    };
  }, [open]);

  return (
    <>
      <div ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />
      <header className="site-header" data-scrolled={scrolled}>
        <a className="site-header__logo" href="#top">
          {NAME}
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--sm site-header__cta" href={`mailto:${CONTACT_EMAIL}`}>
          Email me
        </a>
        <button
          ref={burgerRef}
          type="button"
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger__bar" />
          <span className="burger__bar" />
        </button>
      </header>

      <div ref={drawerRef} className="drawer" id="drawer" hidden={!open}>
        <nav className="drawer__nav" aria-label="Mobile">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn drawer__cta" href={`mailto:${CONTACT_EMAIL}`} onClick={() => setOpen(false)}>
          Email me
        </a>
      </div>
    </>
  );
}
