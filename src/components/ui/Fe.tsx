import type { CSSProperties, ReactNode } from "react";

/**
 * Fluid-grid primitives: a faithful port of the original template's layout
 * engine (see the "FLUID LAYOUT ENGINE" notes in globals.css).
 *
 *  <FeSection>  one full-width band. It owns the background, the minimum height
 *               (in vh), the vertical padding (in vmax) and the grid itself.
 *  <FeBlock>    one rectangle on that grid, given as CSS grid-area strings
 *               "rowStart/colStart/rowEnd/colEnd" for desktop (d) and mobile (m).
 */

type Align = "start" | "center" | "end";
const ALIGN: Record<Align, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

type CssVars = CSSProperties & Record<`--${string}`, string | number | undefined>;

export function FeSection({
  id,
  bg = "bg-canvas",
  rowsD,
  rowsM,
  gap = 11,
  pad = "0px",
  minH = "0px",
  underHeader = false,
  background,
  className = "",
  children,
}: {
  id?: string;
  /** Tailwind background utility, e.g. "bg-canvas" */
  bg?: string;
  /** number of grid rows on desktop / mobile */
  rowsD: number;
  rowsM: number;
  /** column gap in px (the original uses 11 or 20 depending on the section) */
  gap?: 11 | 20;
  /** vertical padding, e.g. "7vmax" */
  pad?: string;
  /** minimum section height, e.g. "70vh" */
  minH?: string;
  /** first section: pushed down by the (overlaid) header's height */
  underHeader?: boolean;
  /** optional full-bleed background layer (image + overlay) */
  background?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const section: CssVars = { "--min-h": minH };
  if (underHeader) section.paddingTop = "var(--header-h)";
  const wrap: CssVars = { "--pad": pad };
  const fe: CssVars = { "--gap": `${gap}px`, "--rows-d": rowsD, "--rows-m": rowsM };
  return (
    <section id={id} className={`fe-section ${bg} ${className}`} style={section}>
      {background}
      <div className="fe-wrap relative" style={wrap}>
        <div className="fe" style={fe}>
          {children}
        </div>
      </div>
    </section>
  );
}

export function FeBlock({
  d,
  m,
  vd = "center",
  vm = "center",
  img = false,
  className = "",
  children,
}: {
  /** desktop grid-area "rowStart/colStart/rowEnd/colEnd" */
  d: string;
  /** mobile grid-area */
  m: string;
  /** vertical alignment of the content inside the block (desktop / mobile) */
  vd?: Align;
  vm?: Align;
  /** image block: the child fills the whole cell */
  img?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  const style: CssVars = { "--d": d, "--m": m, "--vd": ALIGN[vd], "--vm": ALIGN[vm] };
  return (
    <div className={`fe-block ${img ? "!block" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
