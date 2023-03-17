import React from "react";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";
import ArrowBtn from "../ArrowBtn";
import Image from "next/image";

const HowWorks = () => {
  return (
    <div className="bg-primaryV2 py-28 relative">
      <div className="main-container">
        <div>
          <SectionTitle align="center" color="#fff">
            How it works
          </SectionTitle>
          <div className="flex justify-center mt-2">
            <BorderLine />
          </div>
        </div>
        <div className="flex justify-between gap-0 py-16">
          {workFeature.map((item, index) => {
            return(
              <div key={index}>
              <div className="max-w-[120px]">
              <Image src={item.img} alt="" width={1000} height={0} />
              <p className="text-center text-white mt-4">
                {item.description}
              </p>
            </div>
            </div>
            );
          })}
         
        </div>
        <div className="py-10 px-10 mt-10 text-center text-white max-w-[720px] mx-auto bg-[#424A6A] rounded-3xl">
          <p>
            Every company is different, so let’s have a conversation about the
            sales potential of Sopro email marketing for your specific business.
            On one demo call, a Sopro business growth expert can take you
            through your market size, your industry’s average response stats and
            what’s needed to start your first campaign.
          </p>
          <p>Discover how Sopro will support your business.</p>
          <div className="max-w-[230px] mx-auto mt-6 text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
            <ArrowBtn title="Book a demo Call" />
          </div>
        </div>
       <div className="absolute top-[-100px] md:top-[-130px] right-0 max-w-[100px] md:max-w-[150px]">
       <Image src="right_dark_triangle.svg" alt="" width={1000} height={0} />
       </div>
      </div>
    </div>
  );
};

export default HowWorks;

const workFeature = [
  {
    img: "works1.svg",
    description: "You tell us about your product/service, target audience and USPs",
  },
  {
    img: "works2.svg",
    description: "We source and verify an audience of relevant individuals",
  },
  {
    img: "works3.svg",
    description: "We write your engaging, relevant and on-brand message",
  },
  {
    img: "works4.svg",
    description: "Your email campaign goes live, delivered 1-to-1 to prospects",
  },
  {
    img: "works5.svg",
    description: "You receive sales enquiries direct, and do what you do best",
  },
]
