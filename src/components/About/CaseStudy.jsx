import React from "react";
import ArrowBtn from "../ArrowBtn";
import Image from "next/image";
import BorderLine from "../BorderLine";

const CaseStudy = () => {
  return (
    <div className="bg-[#FFF1EF] py-20 relative">
      <div className="main-container">
        <div className="flex md:flex-row flex-col justify-center gap-0 md:gap-28 items-center">
          <div className="max-w-[560px]">
            <div className="my-10">
              <h2 className="text-4xl font-normal  text-primaryV2 pb-3">
                We are our own best case study
              </h2>
              <div>
                <BorderLine />
              </div>
            </div>
            <h2 className="text-4xl font-normal mb-2 mt-10 text-secondary">
              70 % of our new business
            </h2>
            <p className="text-xl font-normal text-primaryV2 mb-12">
              comes from our own email marketing campaigns
            </p>
            <p className="text-base text-primaryV2">
              We’re proud of the success stories we’ve created for our clients,
              transforming businesses large and small through optimised email
              marketing. Back in 2015, Sopro’s first customer was… Sopro. We
              used our own technology to grow our business, perfecting the
              service through those initial campaigns.
              <br />
              <br />
              Discover what’s possible for your business.
            </p>
            <div className="max-w-[250px] mt-10 md:mt-4 mb-10 text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
              <ArrowBtn title="Book your demo Call" />
            </div>
          </div>
          <div>
            <div className="max-w-[250px] md:max-w-[200px]">
              <Image src="/rs-about-us.png" alt="" width={1000} height={0} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-60px] left-0">
          <Image src="left_coral_triangle.svg" alt="" width={200} height={0} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
