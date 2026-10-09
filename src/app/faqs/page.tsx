import type { Metadata } from "next";
import { HashLink } from "@/components/ui/HashLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeBlock, FeSection } from "@/components/ui/Fe";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQs | Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds",
  description:
    "Answers to common questions about anxiety, trauma, EMDR and burnout therapy with Dr. Maya Reynolds, PsyD, in person in Santa Monica, CA or by secure telehealth across California.",
  alternates: { canonical: "/faqs" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/**
 * FAQs page: same two-column layout as the original's /faqs page, on the same
 * fluid grid: intro on the left (cols 3 to 10), accordion on the right (cols 14 to 25).
 */
export default function FaqsPage() {
  return (
    <>
      <Header />
      <main>
        <FeSection bg="bg-canvas" rowsD={18} rowsM={21} gap={11} pad="6.6vmax" minH="66vh" underHeader>
          <FeBlock d="1/3/8/11" m="1/2/7/10" vd="start" vm="start">
            <div className="sq-rich">
              <h1 className="t-h1">{faqs.title}</h1>
              <p className="t-body">{faqs.intro}</p>
              <p className="t-body">
                {faqs.moreBefore}{" "}
                <HashLink href="/#contact" className="underline underline-offset-4">
                  {faqs.moreLink}
                </HashLink>
                {faqs.moreAfter}
              </p>
            </div>
          </FeBlock>

          <FeBlock d="1/14/19/26" m="8/2/22/10" vd="start" vm="start">
            <ul className="w-full">
              {faqs.items.map((f) => (
                <li key={f.q}>
                  <details className="faq-item">
                    <summary>
                      <span className="faq-plus" aria-hidden="true" />
                      <h2 className="t-h4 faq-q">{f.q}</h2>
                    </summary>
                    <div className="faq-a">
                      <p className="t-body">{f.a}</p>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </FeBlock>
        </FeSection>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
