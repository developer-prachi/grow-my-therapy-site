import { HashLink } from "@/components/ui/HashLink";
import { FeBlock, FeSection } from "@/components/ui/Fe";
import { specialties } from "@/content/site";

/**
 * Section 8: "My specialties include…" (25 rows desktop / 44 mobile).
 * The original lays out four services in a 2×2 grid; the brief asks for three,
 * so the same cells are used and the fourth cell is left open.
 */
const CELLS = [
  // service 1 goes top-left, 2 top-right, 3 bottom-left
  { td: "4/11/11/18", tm: "6/2/13/10", ld: "11/11/13/18", lm: "13/2/15/10" },
  { td: "4/19/11/26", tm: "16/2/23/10", ld: "11/19/13/26", lm: "23/2/25/10" },
  { td: "15/11/22/18", tm: "26/2/33/10", ld: "22/11/24/18", lm: "33/2/35/10" },
];

export function Specialties() {
  return (
    <FeSection id="specialties" bg="bg-surface" rowsD={25} rowsM={44} gap={11}>
      <FeBlock d="3/3/7/10" m="3/2/5/10" vm="start">
        <h2 className="t-h3">
          {specialties.headlineBefore} <span className="script">{specialties.headlineScript}</span>{" "}
          {specialties.headlineAfter}
        </h2>
      </FeBlock>

      {specialties.items.map((item, i) => (
        <ServiceCells key={item.title} cell={CELLS[i]} item={item} />
      ))}
    </FeSection>
  );
}

function ServiceCells({
  cell,
  item,
}: {
  cell: (typeof CELLS)[number];
  item: { id: string; title: string; text: string };
}) {
  return (
    <>
      <FeBlock d={cell.td} m={cell.tm} vd="start" vm="start">
        {/* own scroll target for the "Specialties" dropdown / footer link */}
        <div id={item.id} className="sq-rich scroll-mt-[15vh]">
          <h3 className="t-h4">{item.title}</h3>
          <p className="t-body">{item.text}</p>
        </div>
      </FeBlock>
      <FeBlock d={cell.ld} m={cell.lm} vd="start">
        <HashLink href="#contact" className="btn-text">
          {specialties.cta}
        </HashLink>
      </FeBlock>
    </>
  );
}
