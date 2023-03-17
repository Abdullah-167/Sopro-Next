import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
const PlayerCarusel = () => {
  const slider = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    // beforeChange: (current, next) => setUpdatedSlideIndex(next),
  };

  const nextSlide = () => {
    slider.current?.slickNext();
  };
  const prevSlide = () => {
    slider.current?.slickPrev();
  };

  return (
    <div className="">
      <div className="max-w-[970px] mx-auto relative">
        <div className="max-w-[670px] mx-auto px-4 py-20 relative">
          <Slider ref={slider} {...settings}>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allowfullscreen
              />
            </div>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allowfullscreen
              />
            </div>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allowfullscreen
              />
            </div>
            <div class="video-container">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allowfullscreen
              />
            </div>
          </Slider>
        </div>
        <div>
          <div
            onClick={prevSlide}
            className="absolute cursor-pointer top-[42%] left-0 z-20 2xl:left-[-59px] rounded-full bg-[#007bff]  transition-all hover:bg-[#2952D9]"
          >
            <Image src={"left.svg"} alt="prev" width={50} height={50} />
          </div>
          <div
            onClick={nextSlide}
            className="absolute cursor-pointer top-[42%] right-0 z-20 2xl:right-[-59px] rounded-full bg-[#007bff]  transition-all hover:bg-[#2952D9]"
          >
            <Image src={"right.svg"} alt="next" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCarusel;
