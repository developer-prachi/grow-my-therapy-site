import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Photo } from "@/components/ui/Photo";
import { intro } from "@/content/site";
import { images } from "@/content/images";

/** Section 2: "You look like you have it all together…" (17 rows desktop / 28 mobile, 20px gap). */
export function Intro() {
  return (
    <FeSection bg="bg-canvas" rowsD={17} rowsM={28} gap={20} pad="7vmax" minH="70vh">
      <FeBlock d="4/3/8/16" m="1/2/5/10" vm="start">
        <h2 className="t-h2">{intro.headline}</h2>
      </FeBlock>

      <FeBlock d="9/3/16/10" m="5/2/13/10" vd="start">
        <div className="sq-rich">
          <p className="t-eyebrow">{intro.lead}</p>
          <p className="t-body">{intro.textA}</p>
        </div>
      </FeBlock>

      <FeBlock d="1/19/17/27" m="14/2/21/10" img>
        <Photo src={images.intro} alt={intro.imageAlt} sizes="(min-width: 768px) 30vw, 90vw" />
      </FeBlock>

      <FeBlock d="9/10/17/17" m="22/2/29/10" vd="start" vm="start">
        <p className="t-body">{intro.textB}</p>
      </FeBlock>
    </FeSection>
  );
}
