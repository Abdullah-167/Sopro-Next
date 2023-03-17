import Hero from "@/components/About/Hero";
import Founder from "@/components/About/Founder";
import CampaignTeam from "@/components/About/CampaignTeam";
import LifeSopro from "@/components/About/LifeSopro";
import SoproNumbers from "@/components/About/SoproNumbers";
import CaseStudy from "@/components/About/CaseStudy";
import WinningTogether from "@/components/About/WinningTogether";
import Banner from "@/components/Banner";
import LeadershipTeam from "@/components/About/LeadershipTeam";
import Seo from "@/components/Seo";
import PlayerCarusel from "@/components/PlayerCarusel";

const AboutPage = () => {
  return (
    <>
      <Seo title={"About"} />
      <Hero />
      <Founder />
      <PlayerCarusel />
      <CampaignTeam />
      <LifeSopro />
      <LeadershipTeam />
      <SoproNumbers />
      <CaseStudy />
      <WinningTogether />
      <Banner />
    </>
  );
};

export default AboutPage;
