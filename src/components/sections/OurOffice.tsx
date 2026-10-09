import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Photo } from "@/components/ui/Photo";
import { office, therapist } from "@/content/site";

/**
 * NEW SECTION (not in the original template): "Our Office".
 * Built on the same fluid grid as every other section (22 rows desktop / 46
 * mobile, 11px gap), with the same type scale, script accent word, eyebrow label,
 * hairline rules and staggered-photo rhythm, so it reads as part of the design.
 * Content comes only from the profile: office description, natural light,
 * quiet/private, in-person + telehealth, address, and her two office photos.
 */
const STRIP = [
  { d: "20/3/23/9", m: "35/2/38/10" },
  { d: "20/9/23/15", m: "38/2/41/10" },
  { d: "20/15/23/21", m: "41/2/44/10" },
  { d: "20/21/23/26", m: "44/2/47/10" },
];

export function OurOffice() {
  const { street, city, region, zip } = therapist.address;
  const details = [
    ...office.features,
    { label: office.location, detail: `${street}, ${city}, ${region} ${zip}` },
  ];

  return (
    <FeSection
      id="office"
      bg="bg-secondary"
      rowsD={22}
      rowsM={46}
      gap={11}
      pad="6.6vmax"
      minH="66vh"
    >
      <FeBlock d="2/3/4/13" m="2/2/4/10" vd="start">
        <p className="t-eyebrow">{office.eyebrow}</p>
      </FeBlock>

      <FeBlock d="4/3/9/13" m="4/2/8/10" vd="start" vm="start">
        <h2 className="t-h2">
          {office.headlineBefore} <span className="script">{office.headlineScript}</span>
          {office.headlineAfter}
        </h2>
      </FeBlock>

      <FeBlock d="9/3/17/13" m="8/2/16/10" vd="start" vm="start">
        <div className="sq-rich">
          {office.text.map((t) => (
            <p key={t} className="t-body">
              {t}
            </p>
          ))}
        </div>
      </FeBlock>

      <FeBlock d="3/13/13/20" m="17/2/25/10" img>
        <Photo
          src={office.images[0].src}
          alt={office.images[0].alt}
          sizes="(min-width: 768px) 26vw, 88vw"
          position="42% 50%"
        />
      </FeBlock>
      <FeBlock d="8/20/19/27" m="26/2/34/10" img>
        <Photo
          src={office.images[1].src}
          alt={office.images[1].alt}
          sizes="(min-width: 768px) 26vw, 88vw"
          position="62% 50%"
        />
      </FeBlock>

      {/* what to expect: four short points, each under a hairline */}
      {details.map((dt, i) => (
        <FeBlock key={dt.label} d={STRIP[i].d} m={STRIP[i].m} vd="start" vm="start">
          <div className="sq-hr" />
          <div className="mt-[15px]">
            <p className="t-eyebrow !text-accent-strong">{dt.label}</p>
            <p className="t-body">{dt.detail}</p>
          </div>
        </FeBlock>
      ))}
    </FeSection>
  );
}
