"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { contactDialog as t } from "@/content/site";

const OPEN_EVENT = "open-contact-dialog";

/** Opens the "Request a session" pop-up from anywhere (used by every Contact / Book link). */
export function openContactDialog() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/**
 * "Request a session" pop-up. Mounted once in the root layout.
 * Uses the native <dialog> element: it traps focus, closes on Esc and dims the page for free.
 * Front-end only: the form never leaves the browser, and the dialog says so.
 */
export function ContactDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [formKey, setFormKey] = useState(0); // remounting the form clears it on every open
  const [sentTo, setSentTo] = useState<string | null>(null);

  useEffect(() => {
    const open = () => {
      setSentTo(null);
      setFormKey((k) => k + 1);
      dialog.current?.showModal(); // page scroll is locked in CSS: html:has(dialog.cd[open])
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  // each time the pop-up opens (fresh form), put the cursor in the first field
  useEffect(() => {
    if (dialog.current?.open) {
      dialog.current.querySelector<HTMLInputElement>("input[name=name]")?.focus();
    }
  }, [formKey]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name") ?? "").trim();
    setSentTo(name.split(/\s+/)[0] || "");
  }

  return (
    <dialog
      ref={dialog}
      className="cd"
      aria-labelledby="cd-title"
      // a click on the dimmed backdrop lands on the <dialog> itself, not on the card inside it
      onClick={(e) => {
        if (e.target === e.currentTarget) dialog.current?.close();
      }}
    >
      <div className="cd-card">
        <button
          type="button"
          className="cd-close"
          aria-label={t.close}
          onClick={() => dialog.current?.close()}
        />

        {sentTo === null ? (
          <form key={formKey} onSubmit={onSubmit}>
            <p className="t-eyebrow">{t.eyebrow}</p>
            <h2 id="cd-title" className="t-h4 cd-title">
              {t.title}
            </h2>
            <p className="t-body">{t.intro}</p>

            <label className="cd-field">
              <span className="cd-label">{t.nameLabel}</span>
              <input name="name" type="text" required autoComplete="name" className="cd-input" />
            </label>
            <label className="cd-field">
              <span className="cd-label">{t.emailLabel}</span>
              <input name="email" type="email" required autoComplete="email" className="cd-input" />
            </label>
            <label className="cd-field">
              <span className="cd-label">{t.modeLabel}</span>
              <select name="mode" className="cd-input" defaultValue={t.modes[0]}>
                {t.modes.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </label>
            <label className="cd-field">
              <span className="cd-label">{t.messageLabel}</span>
              <textarea name="message" rows={2} className="cd-input" />
            </label>

            <div className="cd-actions">
              <button type="submit" className="btn-pill">
                {t.submit}
              </button>
              <p className="cd-note">{t.draftNote}</p>
            </div>
          </form>
        ) : (
          <div role="status">
            <p className="t-eyebrow">{t.eyebrow}</p>
            <h2 id="cd-title" className="t-h4 cd-title">
              {t.sentTitle}
              {sentTo ? `, ${sentTo}` : ""}.
            </h2>
            <p className="t-body">{t.sentText}</p>
            <div className="cd-actions">
              <button type="button" className="btn-pill" onClick={() => dialog.current?.close()}>
                {t.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
