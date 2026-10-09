import type { ReactNode } from "react";
import Link from "next/link";
import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Photo } from "@/components/ui/Photo";
import { about, methodAnchors } from "@/content/site";
import { images } from "@/content/images";

/** Wraps each method name in the bio text in a span with its own id (a scroll target for the Methods dropdown). */
function withMethodAnchors(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let rest = text;
  for (const a of methodAnchors) {
    const i = rest.indexOf(a.match);
    if (i < 0) continue;
    nodes.push(
      rest.slice(0, i),
      <span key={a.id} id={a.id} className="scroll-mt-[35vh]">
        {a.match}
      </span>,
    );
    rest = rest.slice(i + a.match.length);
  }
  nodes.push(rest);
  return nodes;
}

/**
 * Section 6: meet the therapist (bio and portrait). Fills the original's
 * "How we work" slot: same grid cells (24 rows desktop / 41 mobile, 20px gap).
 */
export function About() {
  return (
    <FeSection id="about" bg="bg-secondary" rowsD={24} rowsM={41} gap={20}>
      <FeBlock d="4/3/6/15" m="3/2/5/10" vd="start">
        <p className="t-eyebrow">{about.eyebrow}</p>
      </FeBlock>

      <FeBlock d="8/3/10/20" m="5/2/8/9">
        <h2 className="t-h2">{about.headline}</h2>
      </FeBlock>

      <FeBlock d="4/21/22/27" m="9/2/17/10" img>
        <Photo
          src={images.maya}
          alt={about.imageAlt}
          sizes="(min-width: 768px) 25vw, 88vw"
          position="50% 22%"
        />
      </FeBlock>

      <FeBlock d="11/3/20/11" m="18/2/28/10" vd="start">
        <div id="methods" className="sq-rich scroll-mt-24">
          <p className="t-eyebrow">{about.lead}</p>
          <p className="t-body">{withMethodAnchors(about.textA)}</p>
        </div>
      </FeBlock>

      <FeBlock d="11/11/20/19" m="28/2/38/10" vd="start" vm="start">
        <p className="t-body">{about.textB}</p>
      </FeBlock>

      <FeBlock d="21/3/23/19" m="38/2/40/10" vd="start">
        <Link href={about.cta.href} className="btn-text">
          {about.cta.label}
        </Link>
      </FeBlock>
    </FeSection>
  );
}
