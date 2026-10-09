import Image from "next/image";

/**
 * A cropped photo that fills its parent (parent sets size + `relative`).
 * Falls back to a soft tinted block while an image hasn't been supplied,
 * so the layout can be reviewed independently of the photography.
 */
export function Photo({
  src,
  alt,
  sizes = "(min-width: 800px) 40vw, 100vw",
  priority = false,
  position = "50% 50%",
  className = "",
}: {
  src?: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 bg-linear-to-br from-secondary to-accent/40 ${className}`}
      />
    );
  }
  // Next.js 16 deprecates `priority`; for an image that is above the fold on
  // desktop but not on mobile, the docs recommend eager loading + high fetch priority.
  const eager = priority ? ({ loading: "eager", fetchPriority: "high" } as const) : {};
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      {...eager}
      className={`object-cover ${className}`}
      style={{ objectPosition: position }}
    />
  );
}
