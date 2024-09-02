import Benefits from "@/entities/Benefits";
import FeaturesCards from "@/entities/FeaturesCards";
import IntroText from "@/entities/IntroText";
import JoinProject from "@/entities/JoinProject";
import Unique from "@/entities/Unique";
import { cn } from "@/shared/lib/utils/cn";
import Header from "../entities/Header";
import RoadMap from "@/entities/RoadMap";
import Footer from "@/entities/Footer";
import { useDevice } from "@/shared/lib/hooks/useDevice";

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center px-[15px] pt-[0.5rem] min-[1440px]:px-[75px] min-[1750px]:px-[193px]",
        "mobileBg",
        "desktopBg",
      )}
    >
      <Header />
      <IntroText />
      <JoinProject />
      <Unique />
      <Benefits />
      <FeaturesCards />
      <RoadMap />
      <Footer />
    </main>
  );
}
