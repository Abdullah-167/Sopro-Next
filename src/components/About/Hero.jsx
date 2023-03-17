import React from "react";
import HeroBtn from "../HeroBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="about-hero md:min-h-[500px] relative">
        <div className="main-container">
          <div className="py-28 md:py-40 flex flex-col gap-5">
            <HeroBtn text="About Us" />
            <h1 className="text-4xl md:text-[60px] text-white text-center mt-4">
              Meet your extended team.
            </h1>
          </div>
          <div className="absolute top-0 left-0 max-w-[120px] md:max-w-[300px]">
            <Image src="aboutHero-graphic.svg" alt="" width={1000} height={0} />
          </div>
        </div>
      </div>
      <div className="text-center text-primaryV2 max-w-[670px] mx-auto py-12 px-2">
        <p className="text-base pb-8"><a href={"/"} className="hover:text-[#3B6FFF] duration-200"> Home</a> / About Us</p>
        <p className="text-xl font-medium">
          Sopro is more than a tool: we are smart humans with unrivalled
          expertise and powerful technology. Our teams have doubled in size
          every year, thanks to the expertise, dedication and passion of our
          people.
        </p>
      </div>
    </>
  );
};

export default Hero;
