import React from "react";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";
import LeadershipCard from "../LeadershipCard";

const LeadershipTeam = () => {
  return (
    <div className="w-full">
      <div>
        <div className="my-14">
          <SectionTitle align="center">Our leadership team</SectionTitle>
          <div className="flex justify-center pt-3">
            <BorderLine />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {data.map(
            ({ name, designation, email, description, picture }, index) => {
              return (
                <LeadershipCard
                  key={index}
                  name={name}
                  designation={designation}
                  email={email}
                  description={description}
                  picture={picture}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;



const data = [
  {
    name: "",
    designation: ``,
    email: ``,
    description: `Every member of our team is focused on delivering success for our clients. And while we can't introduce every Sopro employee, you can meet our leadership team here.`,
    picture: "",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
  {
    name: "Rob Harlow",
    designation: `Co-founder and CINO`,
    email: `rob@sopro.io`,
    description: `Rob has been a dedicated geek ever since being given a ZX Spectrum at 8 years old and spending an entire summer copying the code for Hangman.
                  When he sold his first website aged 12 he started to consider doing it for a living. He currently looks after everything tech at Sopro: he wrote the first line of code and now manages a team of over 30 engineers.`,
    picture: "/rob-leadership.webp",
  },
];
