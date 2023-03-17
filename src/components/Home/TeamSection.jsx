import React from "react";
import HomeTeamCard from "./HomeTeamCard";
import Image from "next/image";
import ArrowBtn from "../ArrowBtn";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";

const TeamSection = () => {
  return (
    <div className="w-full bg-secondary relative">
      <div className="flex md:flex-row flex-col justify-center gap-10">
        <div className="">
          <div className="px-5 lg:pl-[150px]  py-40">
           <SectionTitle color="white">Meet your new Team</SectionTitle>
           <div className="pt-4">
           <BorderLine color="white"/>
           </div>
          
            <div>
              <p className="text-lg leading-6 text-[white] pt-14">
                As a Sopro client you’ll have a dedicated two-person team
                ensuring your campaigns are optimised and your enquires are
                qualified.
              </p>
              <p className="text-lg leading-6 text-[white] pt-4">
                But there’s a bigger team of experts behind those two familiar
                faces, all focused on smashing your expectations.
              </p>
            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {icon.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex items-center gap-5 py-2">
                      <span ca>
                        <Image src={item.icons} alt="" width={25} height={0} />
                      </span>
                      <p className="text-white text-xl leading-6">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-[250px] mt-10 text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
              <ArrowBtn title="Meet your new Team" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#394063] w-full lg:min-w-[600px] md:max-h-full py-20">
          {data.map(({ name, designation, picture }, index) => {
            return (
              <HomeTeamCard
                key={index}
                name={name}
                designation={designation}
                picture={picture}
              />
            );
          })}
        </div>
        <div className="absolute bottom-[-5s0px] md:bottom-[-80px] left-0 max-w-[120px] md:max-w-[150px]">
          <Image src="left-coral.svg" alt="" width={1000} height={0} />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

const data = [
  {
    name: "Ryan Welmans",
    designation: `Meet our co-founder and CEO`,
    picture: "/firstperson.webp",
  },
  {
    name: "A team not a tool",
    designation: `Meet the experts behind the scenes`,
    picture: "/secondperson.jpg",
  },
  {
    name: "Ryan Welmans",
    designation: `Meet our co-founder and CEO`,
    picture: "/thirdperson.jpg",
  },
  {
    name: "Ryan Welmans",
    designation: `Meet our co-founder and CEO`,
    picture: "/fourthperson.webp",
  },
];

const icon = [
  {
    icons: "/icon.webp",
    text: "Campaign operations manager",
  },
  {
    icons: "/icon.webp",
    text: "Campaign operations manager",
  },
  {
    icons: "/icon.webp",
    text: "Campaign operations manager",
  },
  {
    icons: "/icon.webp",
    text: "Campaign operations manager",
  },
  {
    icons: "/icon.webp",
    text: "Campaign operations manager",
  },
  {
    icons: "/icon.webp",
    text: "Campaign operations manager",
  },
];
