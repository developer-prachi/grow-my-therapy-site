import { HashLink } from "@/components/ui/HashLink";
import { FeBlock, FeSection } from "@/components/ui/Fe";
import { Logo } from "@/components/ui/Logo";
import { footer, therapist } from "@/content/site";

const linkClass = "text-accent-strong transition-colors hover:text-primary";

/** Footer = the original's last two sections: the link grid and the thin bottom bar. */
export function Footer() {
  const { street, city, region, zip } = therapist.address;
  return (
    <footer>
      <FeSection bg="bg-surface" rowsD={9} rowsM={29} gap={11} pad="4.5vmax" minH="45vh">
        {/* logo scales with its cell (container-query units), like the original's logo image */}
        <FeBlock d="1/2/5/9" m="2/2/5/10" vd="start">
          <div className="[container-type:inline-size]">
            <Logo className="text-[6.23cqw]" />
          </div>
        </FeBlock>

        <FeBlock d="4/2/9/10" m="5/2/10/10" vd="start" vm="start">
          <p className="t-body">{footer.blurb}</p>
        </FeBlock>

        <FeBlock d="1/12/6/16" m="10/3/15/9" vd="start">
          <div className="sq-rich t-small">
            <p className="t-eyebrow">{footer.navigateTitle}</p>
            <ul>
              {footer.navigate.map((l) => (
                <li key={l.label}>
                  <HashLink href={l.href} className={linkClass}>
                    {l.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </FeBlock>

        <FeBlock d="1/21/10/26" m="15/3/23/9" vd="start">
          <div className="sq-rich t-small">
            <p className="t-eyebrow">{footer.contactTitle}</p>
            <address className="not-italic">
              {street}
              <br />
              {city}, {region} {zip}
            </address>
            <p className="italic">{footer.serving}</p>
            <p>
              <HashLink href="#contact" className={linkClass}>
                {footer.contactCta}
              </HashLink>
            </p>
          </div>
        </FeBlock>

        <FeBlock d="1/16/8/21" m="23/3/30/9" vd="start">
          <div className="sq-rich t-small">
            <p className="t-eyebrow">{footer.specialtiesTitle}</p>
            <ul>
              {footer.specialties.map((s) => (
                <li key={s.label}>
                  <HashLink href={s.href} className={linkClass}>
                    {s.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        </FeBlock>
      </FeSection>

      <FeSection bg="bg-primary" rowsD={1} rowsM={2} gap={11} pad="0.5vmax" minH="5vh">
        <FeBlock d="1/2/2/26" m="1/2/3/10" vm="start">
          <p className="t-small text-secondary">{footer.legal}</p>
        </FeBlock>
      </FeSection>
    </footer>
  );
}
