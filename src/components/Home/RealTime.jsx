import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";
import Image from "next/image";
import Accordion from "../Accordion";
import ArrowBtn from "../ArrowBtn";

const RealTime = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-32">
      <div className="main-container">
        <div>
          <SectionTitle align="center">Real-time campaign portal</SectionTitle>
          <div className="flex justify-center mt-2">
            <BorderLine />
          </div>
        </div>
        <div className="flex md:flex-row flex-col py-20 gap-20">
          <div>
            <Accordion
              title="Total Control"
              para="  Adjust campaign targeting to zero in on your ideal
                    Monitor and exclude prospects at individual or company level.
                    Review and approve email templates."
            />
            <Accordion
              title="Full transparency"
              para="  Adjust campaign targeting to zero in on your ideal
                    Monitor and exclude prospects at individual or company level.
                    Review and approve email templates."
            />
            <Accordion
              title="Powerful simplicity"
              para="  Adjust campaign targeting to zero in on your ideal
                    Monitor and exclude prospects at individual or company level.
                    Review and approve email templates."
            />
          </div>
          <div>
            <div className="max-w-[450px] mx-auto">
              <Image src="/portalImage.png" alt="" width={1000} height={0} />
            </div>
          </div>
        </div>
        <div className="max-w-[180px] mx-auto mt-6 text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
            <ArrowBtn title="Product tour" />
          </div>
      </div>
    </div>
  );
};

export default RealTime;

