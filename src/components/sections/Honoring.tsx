import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Photo } from "@/components/ui/Photo";
import { honoring } from "@/content/site";
import { images } from "@/content/images";

/** Section 7: photo left, statement right (14 rows desktop / 13 mobile). */
export function Honoring() {
  return (
    <FeSection bg="bg-surface" rowsD={14} rowsM={13} gap={11} pad="6.6vmax" minH="66vh">
      <FeBlock d="1/1/15/15" m="1/2/10/11" img>
        <Photo src={images.honoring} alt={honoring.imageAlt} sizes="(min-width: 768px) 55vw, 94vw" />
      </FeBlock>
      <FeBlock d="9/16/15/26" m="10/2/14/10" vd="end" vm="start">
        <h2 className="t-h2">
          {honoring.before} <span className="script">{honoring.script}</span> {honoring.after}
        </h2>
      </FeBlock>
    </FeSection>
  );
}
