"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { openContactDialog } from "@/components/ContactDialog";

/**
 * A normal `next/link` with two extras for links that point at a spot on the page:
 *
 * 1. `#contact` / `/#contact` opens the "Request a session" pop-up (on any page).
 * 2. On the homepage, `#id` / `/#id` always scrolls to its target. Browsers (and Next.js) ignore a
 *    click on `#section` when that hash is already in the URL, so a second click on the same menu
 *    item, after scrolling away, used to do nothing. Here it scrolls every time (respecting
 *    `scroll-margin` and the reduced-motion setting) and keeps the URL hash in sync.
 *
 * Every other link behaves as usual.
 */
export function HashLink({ href, onClick, ...rest }: ComponentProps<typeof Link>) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || typeof href !== "string") return;

    const match = href.match(/^\/?#(.+)$/);
    if (!match) return;
    // leave "open in new tab" style clicks alone
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const id = decodeURIComponent(match[1]);

    if (id === "contact") {
      e.preventDefault();
      openContactDialog();
      return;
    }

    if (window.location.pathname !== "/") return;
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    if (window.location.hash !== `#${match[1]}`) {
      window.history.pushState(null, "", `/#${match[1]}`);
    }
    target.scrollIntoView();
  }

  return <Link href={href} {...rest} onClick={handleClick} />;
}
