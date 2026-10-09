import { HashLink } from "@/components/ui/HashLink";
import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Photo } from "@/components/ui/Photo";
import { cta } from "@/content/site";
import { images } from "@/content/images";

/** Section 9: closing call to action (16 rows desktop / 31 mobile). */
export function Cta() {
  return (
    <FeSection id="contact" bg="bg-canvas" rowsD={16} rowsM={31} gap={11} pad="6.6vmax" minH="66vh">
      <FeBlock d="4/1/16/4" m="1/1/7/6" img>
        <Photo src={images.ctaLeft} alt="" sizes="20vw" />
      </FeBlock>

      <FeBlock d="1/6/3/16" m="8/2/10/10" vd="start">
        <p className="t-eyebrow">{cta.eyebrow}</p>
      </FeBlock>

      <FeBlock d="4/6/8/16" m="10/2/13/10" vd="start" vm="start">
        <h2 className="t-h2">
          {cta.headlineBefore} <span className="script">{cta.headlineScript}</span>
          {cta.headlineAfter}
        </h2>
      </FeBlock>

      <FeBlock d="8/6/14/16" m="13/2/21/10" vd="start" vm="start">
        <div className="sq-rich">
          {cta.text.map((t) => (
            <p key={t} className="t-body">
              {t}
            </p>
          ))}
        </div>
      </FeBlock>

      <FeBlock d="14/6/16/16" m="21/2/23/10">
        <div>
          <HashLink href={cta.button.href} className="btn-pill">
            {cta.button.label}
          </HashLink>
        </div>
      </FeBlock>

      <FeBlock d="1/18/16/27" m="24/3/32/11" img>
        <Photo src={images.ctaRight} alt="" sizes="(min-width: 768px) 35vw, 83vw" />
      </FeBlock>
    </FeSection>
  );
}
