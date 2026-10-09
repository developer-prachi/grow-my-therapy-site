import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Photo } from "@/components/ui/Photo";
import { whoIHelp } from "@/content/site";
import { images } from "@/content/images";

const cardImages = [images.card1, images.card2, images.card3];

/** Cell areas for the three cards: [image desktop, image mobile, text desktop, text mobile] */
const CARDS = [
  { id: "4/5/15/12", im: "4/2/13/10", td: "16/5/21/12", tm: "14/2/20/10" },
  { id: "4/12/15/19", im: "21/2/30/10", td: "16/12/22/19", tm: "31/2/37/10" },
  { id: "4/19/15/26", im: "38/2/47/10", td: "16/19/22/26", tm: "48/2/54/10" },
];

/** Section 3: "Adults I help" (21 rows desktop / 53 mobile, 20px gap). */
export function WhoIHelp() {
  return (
    <FeSection bg="bg-surface" rowsD={21} rowsM={53} gap={20} pad="6.6vmax" minH="66vh">
      <FeBlock d="1/2/3/10" m="1/2/3/10">
        <h2 className="t-h2">
          {whoIHelp.headlineBefore} <span className="script">{whoIHelp.headlineScript}</span>
        </h2>
      </FeBlock>

      {whoIHelp.items.map((item, i) => (
        <CardPair key={item.title} cell={CARDS[i]} src={cardImages[i]} item={item} />
      ))}
    </FeSection>
  );
}

function CardPair({
  cell,
  src,
  item,
}: {
  cell: (typeof CARDS)[number];
  src: string;
  item: { title: string; text: string; imageAlt: string };
}) {
  return (
    <>
      <FeBlock d={cell.id} m={cell.im} img>
        <Photo src={src} alt={item.imageAlt} sizes="(min-width: 768px) 25vw, 88vw" />
      </FeBlock>
      <FeBlock d={cell.td} m={cell.tm} vd="start" vm="start">
        <div className="sq-rich">
          <h3 className="t-h4">{item.title}</h3>
          <p className="t-body">{item.text}</p>
        </div>
      </FeBlock>
    </>
  );
}
