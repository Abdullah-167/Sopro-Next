import React from "react";
import CampTeamCard from "../CampTeamCard";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";

const CampaignTeam = () => {
  return (
    <div className="pt-20 md:pb-20 pb-10">
      <div className="main-container">
        <div className="text-primaryV2 max-w-[1092px] mx-auto text-center">
        <div className="mb-8">
        <SectionTitle align="center"> Meet your Campaign Team</SectionTitle>
        <div className="flex justify-center pt-3">
          <BorderLine />
        </div>
      </div>
          <p className="text-base md:text-xl font-medium">
            Sopro is more than a tool: we are smart humans with unrivalled
            expertise and powerful technology. Our teams have doubled in size
            every year, thanks to the expertise, dedication and passion of our
            people.
          </p>
        </div>
        <div className="py-10">
          {teamData.map((item, index) => {
            return (
              <CampTeamCard
                key={index}
                indexNumber={index}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CampaignTeam;

const teamData = [
  {
    title: "Customer Success",
    description:
      "The face of Sopro, and your go to trusted advisors. Our Customer Success team are proactive, innovative, and creative. And they will go the extra mile to build the campaign you deserve.",
    img: "/Kristijan_Mladenov_TP.png",
  },
  {
    title: "Operations",
    description:
      "The wizards behind the campaigns, these guys don't rest until they've pulled every lever and tweaked every button, in their never-ending pursuit of the perfect campaign.",
    img: "/ops.png",
  },
  {
    title: "Tech",
    description:
      "The brains behind our world-class software, this team of self-confessed geeks build systems that deliver emails at an astonishing rate, and create cutting edge tech to take prospecting to the next level.",
    img: "/Vladimir_Cvetkoski_TP.png",
  },
  {
    title: "Compliance and data",
    description:
      "The number boffins, our compliance and data experts are next-level clever, making sure everything we do is best in class and watertight.",
    img: "/Kristijan_Todorov_TP.png",
  },

  {
    title: "Specialist copywriters",
    description:
      "These guys aren’t just expert writers, they are expert prospecting writers. They know exactly how to grab someones attention and secure that all-important call.",
    img: "/copywriters.png",
  },
];
