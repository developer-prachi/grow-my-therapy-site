import { FeBlock, FeSection } from "@/components/ui/Fe";
import { expertise } from "@/content/site";

/**
 * Section 5: "Areas of expertise" (12 rows desktop / 27 mobile).
 * Each item is a two-row text block with a hairline in its second row,
 * exactly as the original builds it (cells copied 1:1).
 */
const LEFT_TEXT = [
  { d: "1/10/3/18", m: "4/2/6/10" },
  { d: "3/10/5/18", m: "6/2/8/10" },
  { d: "5/10/7/18", m: "8/2/10/10" },
  { d: "7/10/9/18", m: "10/2/12/10" },
  { d: "9/10/11/18", m: "12/2/14/10" },
  { d: "11/10/13/18", m: "14/2/16/10" },
];
const LEFT_HR = [
  { d: "2/10/3/17", m: "5/2/6/10" },
  { d: "4/10/5/17", m: "7/2/8/10" },
  { d: "6/10/7/17", m: "9/2/10/10" },
  { d: "8/10/9/17", m: "11/2/12/10" },
  { d: "10/10/11/17", m: "13/2/14/10" },
];
const RIGHT_TEXT = [
  { d: "1/18/3/26", m: "16/2/18/10" },
  { d: "3/18/5/26", m: "18/2/20/10" },
  { d: "5/18/7/26", m: "20/2/22/10" },
  { d: "7/18/9/26", m: "22/2/24/10" },
  { d: "9/18/11/26", m: "24/2/26/10" },
  { d: "11/18/13/26", m: "26/2/28/10" },
];
const RIGHT_HR = [
  { d: "2/18/3/25", m: "15/2/16/10" }, // on mobile this one closes the left list
  { d: "4/18/5/25", m: "17/2/18/10" },
  { d: "6/18/7/25", m: "19/2/20/10" },
  { d: "8/18/9/25", m: "21/2/22/10" },
  { d: "10/18/11/25", m: "23/2/24/10" },
];

export function Expertise() {
  const [left, right] = expertise.columns;
  return (
    <FeSection bg="bg-surface" rowsD={12} rowsM={27} gap={11} pad="8vmax" minH="80vh">
      <FeBlock d="1/3/4/9" m="1/2/3/10" vd="start">
        <h2 className="t-h3">
          {expertise.headlineBefore} <span className="script">{expertise.headlineScript}</span>
        </h2>
      </FeBlock>

      {left.map((item, i) => (
        <FeBlock key={item} d={LEFT_TEXT[i].d} m={LEFT_TEXT[i].m} vd="start" vm="start">
          <p className="t-eyebrow">{item}</p>
        </FeBlock>
      ))}
      {LEFT_HR.map((c) => (
        <FeBlock key={c.d} d={c.d} m={c.m}>
          <div className="sq-hr" />
        </FeBlock>
      ))}

      {right.map((item, i) => (
        <FeBlock key={item} d={RIGHT_TEXT[i].d} m={RIGHT_TEXT[i].m} vd="start" vm="start">
          <p className="t-eyebrow">{item}</p>
        </FeBlock>
      ))}
      {RIGHT_HR.map((c, i) => (
        <FeBlock key={`${c.d}-${i}`} d={c.d} m={c.m}>
          <div className="sq-hr" />
        </FeBlock>
      ))}
    </FeSection>
  );
}
