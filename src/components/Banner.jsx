import React from "react";
import ArrowBtn from "./ArrowBtn";

const Banner = () => {
  return (
    <div className="w-full bg-secondary py-6">
      <div className="max-w-[880px] mx-auto">
        <div className="flex justify-between gap-10 items-center lg:px-0 px-6">
          <p className="text-white text-base font-normal lg:flex hidden">
            We’ve run over 15,000 prospecting campaigns. The next one could be
            yours.
          </p>
          <p className="text-white text-base font-normal lg:hidden flex">
            Live Demo
          </p>
          <div>
            <div className="lg:flex hidden text-white hover:bg-white border-2 border-white hover:text-secondary bg-transparent rounded-full duration-200">
              <ArrowBtn className="" title="Speak to an Expert" />
            </div>
            <div className="lg:hidden flex text-white hover:bg-white border-2 border-white hover:text-secondary bg-transparent rounded-full duration-200">
              <ArrowBtn className="" title="Yes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
