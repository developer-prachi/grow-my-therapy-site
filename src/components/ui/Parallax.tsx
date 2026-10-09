"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Vertical parallax for a section's background photo, ported from the original site's effect.
 *
 * The original (Squarespace "parallax" background, intensity 6, vertical) is a small GPU shader:
 *   amount   = intensity × 0.01 × 0.5                       (0.03 for intensity 6)
 *   zoom     : the photo is shown magnified by 1 / (1 - amount)   (about 3% bigger, constant)
 *   slide    : as "progress" goes from 0 to 1 the photo slides UP by `amount` × its own height
 *              (from -amount/2 to +amount/2 of the photo height, around the centre)
 *   progress : (viewportHeight - sectionTop) / (viewportHeight + sectionHeight), clamped between 0 and 1,
 *              i.e. 0 as the section enters at the bottom, 1 as it leaves at the top
 *   easing   : the shown progress chases the real one: each frame it covers 10% of the gap when
 *              scrolling down, and jumps straight to it when scrolling up or while off-screen.
 *              That chase is what makes the photo glide and keep settling after you stop.
 * Everything below mirrors those numbers. Like the original, it is switched off for "reduce motion".
 *
 * Put it inside a `relative overflow-hidden` frame the size of the section; the children
 * (e.g. a `fill` <Image>) fill the layer. The layer is a little taller than the frame so the
 * slide never shows an edge.
 */
export function Parallax({ intensity = 6, children }: { intensity?: number; children: ReactNode }) {
  const layer = useRef<HTMLDivElement>(null);
  const amount = intensity * 0.01 * 0.5;

  useEffect(() => {
    const el = layer.current;
    const frame = el?.parentElement;
    if (!el || !frame) return;
    const img = el.querySelector("img");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const zoom = 1 / (1 - amount);
    let raf = 0;
    let timer = 0;
    let shown = -1; // progress currently drawn (-1 = not drawn yet)
    let lastTransform = "";
    let lastOverscan = -1;

    /** Same progress the original uses (normalised for sections near the top/bottom of the page). */
    const scrollProgress = (top: number, height: number) => {
      const vh = window.innerHeight;
      const docTop = top + window.scrollY;
      const docBottom = document.body.scrollHeight - docTop - height;
      const f = Math.min(docTop, vh);
      const l = Math.min(docBottom, vh);
      const span = f + height + l - vh;
      const p = span <= 0 ? (top < 0 ? 1 : 0) : (-top + f) / span;
      return Math.min(1, Math.max(0, p));
    };

    const draw = (progress: number, width: number, height: number) => {
      // height of the photo as displayed with object-fit: cover
      const aspect = img && img.naturalWidth ? img.naturalWidth / img.naturalHeight : 1.5;
      const photoHeight = Math.max(height, width / aspect);
      const slide = (amount * (progress - 0.5) * photoHeight) / (1 - amount); // px the photo has risen
      const overscan = Math.round((((amount / 2) * photoHeight) / (1 - amount)) * 100) / 100;
      if (overscan !== lastOverscan) {
        el.style.top = el.style.bottom = `${-overscan}px`;
        lastOverscan = overscan;
      }
      const next = `translate3d(0, ${(-slide).toFixed(2)}px, 0) scale(${zoom.toFixed(4)})`;
      if (next !== lastTransform) {
        el.style.transform = next;
        lastTransform = next;
      }
    };

    const step = () => {
      if (reduce.matches) {
        if (lastTransform) {
          el.style.transform = "";
          lastTransform = "";
        }
        return;
      }
      const vh = window.innerHeight;
      const rect = frame.getBoundingClientRect();
      const target = scrollProgress(rect.top, rect.height);
      const onScreen = rect.bottom > 0 && rect.top < vh;

      if (shown < 0 || !onScreen) {
        shown = target; // off-screen (or first draw): already in place when it comes into view
      } else if (shown !== target) {
        const gap = target - shown;
        shown = gap < 0.01 ? target : shown + 0.1 * gap; // the original's easing, frame by frame
      }
      draw(shown, rect.width, rect.height);
      if (shown !== target) request(); // keep gliding until it has caught up
    };
    // Runs `step` on the next animation frame. If the browser is not painting frames (hidden or
    // covered window, remote session and so on) a short timer runs it instead, so the photo can never get
    // stuck waiting for a frame that does not come.
    const run = () => {
      if (raf) cancelAnimationFrame(raf);
      if (timer) window.clearTimeout(timer);
      raf = 0;
      timer = 0;
      step();
    };
    const request = () => {
      if (raf || timer) return;
      raf = requestAnimationFrame(run);
      timer = window.setTimeout(run, 120);
    };

    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    window.addEventListener("pageshow", request); // coming back via the browser's Back button
    document.addEventListener("visibilitychange", request); // returning to the tab after a while
    img?.addEventListener("load", request); // the photo's real proportions are known once it loads
    reduce.addEventListener("change", request);

    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      window.removeEventListener("pageshow", request);
      document.removeEventListener("visibilitychange", request);
      img?.removeEventListener("load", request);
      reduce.removeEventListener("change", request);
      if (raf) cancelAnimationFrame(raf);
      if (timer) window.clearTimeout(timer);
    };
  }, [amount]);

  // before the script runs: a layer 2.5% taller than the frame on each side (JS then sets the exact amount)
  return (
    <div
      ref={layer}
      className="absolute will-change-transform"
      style={{ left: 0, right: 0, top: "-2.5%", bottom: "-2.5%" }}
    >
      {children}
    </div>
  );
}
