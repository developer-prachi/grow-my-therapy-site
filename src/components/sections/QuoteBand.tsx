import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Parallax } from "@/components/ui/Parallax";
import { Photo } from "@/components/ui/Photo";
import { quote } from "@/content/site";
import { images } from "@/content/images";

/**
 * Section 4: full-bleed photo with a tinted overlay (0.54, like the original) and a pull-quote.
 * The original gives this photo a light vertical parallax (intensity 6); so does this.
 */
export function QuoteBand() {
  return (
    <FeSection
      bg="bg-overlay"
      rowsD={10}
      rowsM={2}
      gap={11}
      pad="6.6vmax"
      minH="66vh"
      background={
        <div className="absolute inset-0 overflow-hidden">
          <Parallax intensity={6}>
            <Photo src={images.band} alt={quote.imageAlt} sizes="100vw" />
          </Parallax>
          <div className="absolute inset-0 bg-overlay opacity-[0.54]" />
        </div>
      }
    >
      <FeBlock d="5/3/11/19" m="1/2/3/10" vd="end" vm="end">
        <h2 className="t-h2 !text-surface">
          {quote.before} <em className="font-light italic">{quote.italic}</em>
        </h2>
      </FeBlock>
    </FeSection>
  );
}
