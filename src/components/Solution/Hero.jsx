import React from "react";
import HeroBtn from "../HeroBtn";
import Image from "next/image";
import ArrowBtn from "../ArrowBtn";


const Hero = () => {
  return (
    <>
      <div className="about-hero md:min-h-[500px] relative">
        <div className="main-container">
          <div className="py-28 md:py-40 flex flex-col gap-12">
            <HeroBtn text="Businesses with sales teams" />
            <h1 className="text-4xl md:text-[60px] text-white text-center">
              Fill your funnel. Protect your brand.
            </h1>
          </div>
          <div className="absolute top-0 left-0 max-w-[120px] md:max-w-[300px]">
            <Image src="/solution-hero-graphics.png" alt="" width={1000} height={0} />
          </div>
        </div>
      </div>
      <div className="text-center text-primaryV2 max-w-[670px] mx-auto py-12 px-2">
        <p className="text-base pb-8">
          <a href={"/"} className="hover:text-[#3B6FFF] duration-200">
            {" "}
            Home
          </a>{" "}
          / Solutions / Businesses with sales teams
        </p>
        <p className="text-xl font-medium">
          Some of the biggest businesses in the world trust us to deliver
          qualified prospects. More than a tool, Sopro is a powerful sales
          service. Our efficient technology quickly reduces the cost of each
          sale you make, and our expert team brings a depth and breadth of
          skills to support your success.
          <br />
          <br />
          Discover how your business can sell more with Sopro.
        </p>
        <div className="max-w-[230px] mx-auto mt-6 text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
        <ArrowBtn title="Book a demo Call"/>
        </div>
       
      </div>
    </>
  );
};

export default Hero;
