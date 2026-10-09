"use client";

import { HashLink } from "@/components/ui/HashLink";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { nav } from "@/content/site";

/** The original's thin chevron (22×22 viewBox, 0.5 stroke). Points down; CSS rotates it. */
function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 22"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`mm-chev ${className}`}
    >
      <path d="M18 7L11 14L4 7" />
    </svg>
  );
}

/**
 * Overlay header (scrolls away with the page, like the original).
 * ≥ 800px: logo left, text nav (with dropdowns) + outlined oval button right.
 * < 800px: logo left, three-line menu button that opens a full-screen menu whose folders
 * (Specialties, Methods) slide in as a second panel with a "Back" control.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState<number | null>(null);
  const menuRef = useRef<HTMLElement>(null);

  // lock page scroll + Escape (back out of a folder first, then close)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setFolder((f) => {
        if (f === null) setOpen(false);
        return null;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // move keyboard focus into whichever panel is showing
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => {
      menuRef.current
        ?.querySelector<HTMLElement>('.mm-panel[data-state="active"] .mm-link')
        ?.focus({ preventScroll: true });
    }, 60);
    return () => window.clearTimeout(t);
  }, [open, folder]);

  const closeMenu = () => setOpen(false);
  const toggle = () => {
    if (!open) setFolder(null);
    setOpen(!open);
  };

  const folders = nav.links.flatMap((l, i) =>
    "children" in l && l.children ? [{ index: i, link: l }] : [],
  );

  return (
    <header className="site-header">
      <Logo className="logo-box relative z-50" />

      {/* Desktop navigation */}
      <nav aria-label="Primary" className="hidden min-[800px]:block">
        <ul className="nav-list">
          {nav.links.map((l) => (
            <li key={l.label} className="nav-item relative">
              <HashLink href={l.href} className="nav-link">
                {l.label}
              </HashLink>
              {"children" in l && l.children && (
                <div className="nav-panel">
                  {l.children.map((c) => (
                    <HashLink key={c.label} href={c.href}>
                      {c.label}
                    </HashLink>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li>
            <HashLink href={nav.cta.href} className="btn-pill">
              {nav.cta.label}
            </HashLink>
          </li>
        </ul>
      </nav>

      {/* Mobile menu button: three 1px lines that turn into an X */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={toggle}
        data-open={open}
        className="burger min-[800px]:hidden"
      >
        <span className="burger-box" aria-hidden="true">
          <span className="burger-bar" data-bar="top" />
          <span className="burger-bar" data-bar="mid" />
          <span className="burger-bar" data-bar="bottom" />
        </span>
      </button>

      {/* Mobile full-screen menu */}
      <nav
        id="mobile-menu"
        ref={menuRef}
        aria-label="Mobile"
        aria-hidden={!open}
        data-open={open}
        className="mm"
      >
        <div className="mm-stage">
          {/* root panel */}
          <div className="mm-panel" data-state={folder === null ? "active" : "left"}>
            <div className="mm-body">
              <ul className="mm-list">
                {nav.links.map((l, i) => (
                  <li key={l.label} className="mm-item">
                    {"children" in l && l.children ? (
                      <button
                        type="button"
                        className="mm-link"
                        aria-haspopup="true"
                        onClick={() => setFolder(i)}
                      >
                        {l.label}
                        <Chevron className="mm-chev-next" />
                      </button>
                    ) : (
                      <HashLink href={l.href} className="mm-link" onClick={closeMenu}>
                        {l.label}
                      </HashLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mm-cta">
              <HashLink href={nav.cta.href} className="btn-pill" onClick={closeMenu}>
                {nav.cta.label}
              </HashLink>
            </div>
          </div>

          {/* one panel per folder */}
          {folders.map(({ index, link }) => (
            <div
              key={link.label}
              className="mm-panel"
              data-state={folder === index ? "active" : "right"}
            >
              <div className="mm-body">
                <ul className="mm-list">
                  <li className="mm-item mm-back">
                    <button type="button" className="mm-link" onClick={() => setFolder(null)}>
                      <Chevron className="mm-chev-prev" />
                      Back
                    </button>
                  </li>
                  {link.children.map((c) => (
                    <li key={c.label} className="mm-item">
                      <HashLink href={c.href} className="mm-link" onClick={closeMenu}>
                        {c.label}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
