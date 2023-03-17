import React from "react";
import Image from "next/image";
import HeroBtn from "./HeroBtn";

const Newsection2 = () => {
  return (
    <div className="bg-[#F3F6F7] py-20 mt-10 relative">
      <div className="max-w-[1470px] mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center justify-center md:gap-0 gap-10 px-4">
          {images.map((item, index) => {
            return (
              <div key={index}>
                <div className="max-w-[120px] mx-auto">
                  <Image src={item.firstImg} alt="" width={1000} height={100} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute top-[-16px] left-0 right-0">
            <HeroBtn text="Awards & Recognition"/>
        </div>
      </div>
    </div>
  );
};

export default Newsection2;

const images = [
  {
    firstImg: "/tech_awards.webp",
  },
  {
    firstImg: "/stevie-2021.jpg",
  },
  {
    firstImg: "/digital-city-awards.webp",
  },
  {
    firstImg: "/UKBA-21-icon.jpg",
  },
  {
    firstImg: "/company-culture-awards-2021-winn.webp",
  },
  {
    firstImg: "/brilliance-award-entreprenur-202.webp",
  },
  {
    firstImg: "/sme-2021-hq.webp",
  },
];
