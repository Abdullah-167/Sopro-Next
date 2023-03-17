import React from "react";
import HeroBtn from "./HeroBtn";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="bg-[#F3F6F7] relative">
      <div className="main-container">
        <div className="mt-[-20px] absolute top-0 left-0 right-0">
          <HeroBtn text="Client reviews" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-20 md:gap-0 gap-16">
          {review.map((item, index) => {
            return (
              <div key={index} className="">
                <div className="max-w-[120px] mx-auto">
                  <Image src={item.img1} alt="" width={1000} height={0} />
                </div>
                <div className="max-w-[100px] mx-auto py-8">
                  <Image src="score_stars.svg" alt="" width={1000} height={0} />
                </div>
                <div className="flex justify-center">
                  <span className="text-primary text-center border-b-2 border-secondary text-2xl">
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

const review = [
  {
    img1: "/sa.webp",
    title: "4.9 / 5",
  },
  {
    img1: "/tplogo.png",
    title: "4.6 / 5",
  },
  {
    img1: "/capterra.png",
    title: "4.9 / 5",
  },
  {
    img1: "/tplogo.png",
    title: "4.6 / 5",
  },
  {
    img1: "/gerapp.png",
    title: "4.9 / 5",
  },
];
