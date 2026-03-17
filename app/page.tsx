import { AISapience } from "./components/AiSapience";
import { Comparison } from "./components/Comparison";
import { FeaturesGrid } from "./components/FeaturesGrid";
import Hero from "./components/Hero";
import { LiveProcess } from "./components/Lifelog";
import { CreativeEdge } from "./components/NycLocal";
import { Pricing } from "./components/Pricing";
import { VoiceLab } from "./components/VoiceLab";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturesGrid />
      <Comparison />
      <LiveProcess />
      <VoiceLab />
      <Pricing />
      <AISapience />
      {/* <CreativeEdge /> */}
    </div>
  );
}
