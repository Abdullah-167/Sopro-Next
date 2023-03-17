import React from "react";
import SectionTitle from "./SectionTitle";
import BorderLine from "./BorderLine";
import Image from "next/image";
import { IoMdArrowDropright } from 'react-icons/io';



const SliderCard = () => {
  return (
    <div className="max-w-[377px] mx-auto border border-[#a2afb1] rounded-2xl relative">
      <div className="px-4 sm:px-8 py-10">
        <SectionTitle size="20px" leading="28px">
          Sopro turbo-charged our outreach compared to other channels
        </SectionTitle>
        <div className="mt-3">
        <BorderLine width="80" color="#9498a9" />
        </div>
       
        <p className="italic text-sm py-6">
          We were ready to launch an exciting new proposition but needed a
          service provider we could rely on to reach the right people at the
          right time with the right message. Sopro has more than ticked those
          boxes and turbo-charged our outreach compared to other channels.
        </p>
      </div>
      <div>
        <div className="bg-[#8BA7AB] py-4 mt-10 relative rounded-b-2xl">
          <div className="max-w-[50px] sm:max-w-[80px] mx-auto absolute top-[-25px] sm:top-[-40px] left-6 ">
            <Image src="/William-Geldart-1.jpg" alt="" width={1000} height={0} className="rounded-lg" />
          </div>
          <div className="sm:ml-36 max-w-[200px] mx-auto">
          <div className="pt-5 sm:pt-0 max-w-[50px] pb-1">
            <Image src="linkedin.svg" alt="" width={1000} height={0} />
          </div>
          <p className="text-sm text-white">William Geldart, Marketing Manager</p>
          <p className="text-primaryV2 text-sm font-semibold">BPS World</p>
          </div>
        </div>
      </div>
      <div className="">
        <span className="text-secondary text-[12px] bg-white px-3 py-3 absolute top-[-20px] left-10 z-20">Client Feedback</span>
        <span className="text-secondary text-5xl absolute top-10 left-[-18px] bg-white"><IoMdArrowDropright/></span>
      </div>
    </div>
  );
};

export default SliderCard;
