import BusinessBenefits from "@/components/Home/BusinessBenefits";
import Seo from "@/components/Seo";
import Features from "@/components/Solution/Features";
import Hero from "@/components/Solution/Hero";
import Awards from "@/components/Awards";
import React from "react";
import Banner from "@/components/Banner";
import BenefitSlider from "@/components/BenefitsSlider";

const BusinessSales = () => {
  return (
    <>
      <Seo title={"Business-Sales"} />
      <Hero />
      <Features />
      <div className="py-28">
      <BenefitSlider/>
      </div>
     
      <Awards/>
      <Banner/>
    </>
  );
};

export default BusinessSales;
