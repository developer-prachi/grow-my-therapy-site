import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { WhoIHelp } from "@/components/sections/WhoIHelp";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Expertise } from "@/components/sections/Expertise";
import { About } from "@/components/sections/About";
import { Honoring } from "@/components/sections/Honoring";
import { Specialties } from "@/components/sections/Specialties";
import { OurOffice } from "@/components/sections/OurOffice";
import { Cta } from "@/components/sections/Cta";

/**
 * Section order matches the original homepage 1:1, plus the new "Our Office"
 * section placed just before the closing call-to-action.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <WhoIHelp />
        <QuoteBand />
        <Expertise />
        <About />
        <Honoring />
        <Specialties />
        <OurOffice />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
