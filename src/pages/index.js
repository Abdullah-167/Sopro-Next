import BusinessBenefits from "@/components/Home/BusinessBenefits";
import Hero from "@/components/Home/Hero";
import HowWorks from "@/components/Home/HowWorks";
import RealTime from "@/components/Home/RealTime";
import SaleGrow from "@/components/Home/SaleGrow";
import Reviews from "@/components/Reviews";
import Seo from "@/components/Seo";
import SoproValue from "@/components/Home/SoproValue";
import Pricing from "@/components/Home/Pricing";
import Awards from "@/components/Awards";
import Banner from "@/components/Banner";
import TeamSection from "@/components/Home/TeamSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Seo title="Home" />
      <Hero />
      <SaleGrow />
      <HowWorks />
      <SoproValue />
      <Reviews />
      <RealTime />
      <Pricing />
      <TeamSection />
      <BusinessBenefits />
      <Awards />
      <Banner />
    </div>
  );
}
