import React from "react";
import Image from "next/image";

const Founder = () => {
  return (
    <div className="relative">
      <div className="flex md:flex-row flex-col justify-center items-center gap-12 md:gap-20 bg-[#F4F9FE] my-10">
        <div className="w-full h-full">
          <Image src="/teamFounders.png" alt="" width={2000} height={1000} />
        </div>
        <div className="text-primaryV2 w-full pt-0 pb-20 md:pt-20 md:pb-20 px-2">
          <div className="max-w-[400px]">
            <h2 className="text-4xl font-normal pb-2 mb-4">
              2 founders. 1 unique idea.
            </h2>
            <p className="text-base">
              With their expertise, a vision and heaps of passion Ryan and Rob
              started Sopro in 2015, and it was all about the numbers.
              <br /> <br />
              It’s still about the numbers today, delivering transparent and
              measurable ROI for our clients, only now there’s a whole team of
              us, bringing professional expertise, passion and the power of
              human connection to what we do.
              <br /> <br />
              We’ve all come a long way in a short time.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-50px] right-0 max-w-[130px] md:max-w-[200px]">
        <Image src="founder-graphic.svg" alt="" width={1000} height={0} />
      </div>
    </div>
  );
};

export default Founder;
