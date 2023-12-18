import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Spacing from "@/components/Spacing";
import { DEPARTAMENTOS } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Spacing />
      <Spacing size="15rem">
        <Features />
      </Spacing>

      <GetApp />
    </>
  );
}
