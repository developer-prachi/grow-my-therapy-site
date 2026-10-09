import Link from "next/link";

/**
 * Wordmark built from text (serif name + tracked caps descriptor), mirroring the
 * original's two-line logo image. Everything is in `em`, so it scales from the
 * single font-size set by the caller (16px ≈ the original's 257×75 logo).
 */
export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label="Dr. Maya Reynolds, PsyD, home page"
      className={`inline-block whitespace-nowrap leading-none ${className}`}
    >
      <span
        className={`block font-serif text-[2.55em] font-light tracking-[-0.01em] ${
          tone === "dark" ? "text-primary" : "text-surface"
        }`}
        style={{ lineHeight: 1 }}
      >
        Maya Reynolds
      </span>
      <span className="mt-[0.62em] block text-[0.74em] font-normal uppercase tracking-[0.34em] text-accent-strong">
        Clinical Psychologist
      </span>
    </Link>
  );
}
