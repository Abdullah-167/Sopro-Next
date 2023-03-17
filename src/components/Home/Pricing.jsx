import React from "react";
import ArrowBtn from "../ArrowBtn";
import BorderLine from "../BorderLine";
import SectionTitle from "../SectionTitle";

const Pricing = () => {
  return (
    <div className="bg-[#F5F7FF] pt-20 pb-64">
      <div className="main-container">
        <div className="pb-14">
          <div className="my-6">
            <SectionTitle> Pricing and ROI</SectionTitle>
            <BorderLine />
          </div>

          <p className="text-lg text-primaryV2 font-light max-w-[620px] pt-5">
            Our simple pricing structure means you pay for the number of
            prospects that we approach on your behalf. We take care of the whole
            outreach campaign, and you get a reliable flow of new sales
            conversations.{" "}
          </p>
          <p className="text-lg text-primaryV2 font-light max-w-[620px] pt-7">
            Our simple pricing structure means you pay for the number of
            prospects that we approach on your behalf. We take care of the whole
            outreach campaign, and you get a reliable flow of new sales
            conversations.{" "}
          </p>
        </div>

        <div className="bg-primaryV2 w-full rounded-lg py-10 relative">
          <div className="px-10">
            <h1 className="text-white text-4xl font-light">
              New prospects engaged per month
            </h1>
            <p className="text-white text-base font-light pt-3">
              Pricing is based on the volume of prospects you want us to reach
              out to each month.
            </p>
            <div className="pt-10">
              <input className="w-[400px]" type="range" name="vol" min="0" />
              <div className="flex gap-16 text-white items-center">
                <p>10</p>
                <p>20</p>
                <p>30</p>
                <p>40</p>
                <p>50</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-funnel absolute -top-20"></div>
            <div className="absolute -top-40">
              <div className="py-9">
                <div className="clip1 flex  justify-between px-8 py-2 max-w-[476px] mx-auto my-4 bg-[#3C6FFF] text-white items-center text-xl rounded-sm">
                  <p>Propects</p>
                  <span>100</span>
                </div>
                <div className="clip1 flex  justify-between px-8 py-2 max-w-[410px] mx-auto my-4 bg-[#3C6FFF] text-white items-center text-xl rounded-sm">
                  <p>Response</p>
                  <span>20</span>
                </div>
                <div className="clip1 flex  justify-between px-8 py-2 max-w-[340px] mx-auto my-4 bg-[#3C6FFF] text-white items-center text-xl rounded-sm">
                  <p>Propects</p>
                  <span>100</span>
                </div>
                <div className="clip1 flex  justify-between px-8 py-2 max-w-[290px] mx-auto my-4 bg-[#3C6FFF] text-white items-center text-xl rounded-sm">
                  <p>Propects</p>
                  <span>100</span>
                </div>
                <div className="clip1 flex  justify-between px-8 py-2 text-center  max-w-[240px] mx-auto my-4 bg-secondary text-white items-center text-xl rounded-sm">
                  <p>Propects</p>
                  <span>100</span>
                </div>
                <div className="clip1 flex gap-5 justify-center px-8 py-2 text-center  max-w-[180px] mx-auto my-4 bg-secondary text-white items-center text-xl rounded-sm">
                  <p>Propects</p>
                  <span>100</span>
                </div>
              </div>
              <div className="max-w-[210px] mx-auto text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
                <ArrowBtn title="View Pricing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
