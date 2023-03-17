import React from "react";
import Image from "next/image";
import ArrowBtn from "../ArrowBtn";

const Hero = () => {
  return (
    <>
      <div className="home-hero md:min-h-[570px] relative">
        <div className="main-container">
          <div className="py-14 sm:py-28 md:py-24 flex flex-col gap-x-12 sm:gap-12">
            <div className="max-w-[70px] sm:max-w-[100px] md:max-w-[100px] mx-auto">
              <Image
                src="logo_symbol_header.svg"
                alt=""
                width={1000}
                height={0}
              />
            </div>
            <h1 className="text-5xl md:text-[60px] py-3 sm:py-0 text-white text-center">
              Sell more <span className="text-secondary">.</span>
            </h1>
            <p className="text-center text-lg sm:text-2xl font-light py-3 sm:py-0 text-white">
              Start sales conversations with your ideal customers.
            </p>
            <div className="flex flex-wrap sm:flex-nowrap justify-center pt-3 gap-6">
            <div className="max-w-[260px] text-white hover:bg-white border-2 border-secondary hover:border-white hover:text-secondary bg-secondary rounded-full duration-200">
                <ArrowBtn title="Book your Demo Call" />
              </div>
              <div className="max-w-[230px] text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
                <ArrowBtn title="See Pricing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
