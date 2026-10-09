import { HashLink } from "@/components/ui/HashLink";
import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Photo } from "@/components/ui/Photo";
import { hero } from "@/content/site";
import { images } from "@/content/images";

/** Section 1: hero. Grid cells copied from the original (18 rows desktop / 24 mobile). */
export function Hero() {
  return (
    <FeSection bg="bg-canvas" rowsD={18} rowsM={24} gap={11} underHeader>
      <FeBlock d="2/12/4/20" m="2/2/5/10">
        <p className="t-eyebrow">{hero.eyebrow}</p>
      </FeBlock>

      <FeBlock d="7/12/15/24" m="5/2/12/10" vm="start">
        <div className="sq-rich">
          <h1 className="t-h1">
            {hero.headlineBefore} <span className="script">{hero.headlineScript}</span>
            {hero.headlineAfter}
          </h1>
          <p className="t-body">{hero.sub}</p>
        </div>
      </FeBlock>

      <FeBlock d="15/12/17/24" m="12/2/14/10">
        <HashLink href={hero.cta.href} className="btn-text">
          {hero.cta.label}
        </HashLink>
      </FeBlock>

      {/* a large photo bleeding off the left edge … */}
      <FeBlock d="2/1/17/10" m="15/1/24/8" img>
        <Photo src={images.heroMain} alt={hero.imageAlt} priority sizes="(min-width: 768px) 35vw, 72vw" />
      </FeBlock>
      {/* … and a sliver peeking in from the right */}
      <FeBlock d="7/25/17/27" m="18/9/24/11" img>
        <Photo src={images.heroSliver} alt="" sizes="10vw" position="30% 50%" />
      </FeBlock>
    </FeSection>
  );
}
