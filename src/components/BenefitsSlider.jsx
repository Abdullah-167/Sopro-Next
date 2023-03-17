import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import SliderCard from "../components/SliderCard";

const BenefitSlider = () => {
  const slider = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    slider.current?.slickNext();
  };

  const prevSlide = () => {
    slider.current?.slickPrev();
  };

  return (
    <div className="">
      <div className="main-container relative">
        <div className="">
          <div className="max-w-[800px] mx-auto ">
            <Slider ref={slider} {...settings}>
              <SliderCard />
              <SliderCard />
              <SliderCard />
              <SliderCard />
            </Slider>
          </div>
          <div className="md:flex hidden">
            <div
              onClick={prevSlide}
              className="absolute cursor-pointer top-[42%] left-0 z-20 2xl:left-[-59px] rounded-full bg-[#007bff]  transition-all hover:bg-[#2952D9]"
            >
              <Image src={"left.svg"} alt="prev" width={50} height={50} />
            </div>
            <div
              onClick={nextSlide}
              className="absolute cursor-pointer top-[42%] right-0 z-20 2xl:right-[0px] rounded-full bg-[#007bff]  transition-all hover:bg-[#2952D9]"
            >
              <Image src={"right.svg"} alt="next" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSlider;
