import React, { useRef } from "react";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";
import BenefitSlider from "../BenefitsSlider";

const BusinessBenefits = () => {
  const slider = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <div className="py-40">
      <div className="main-container">
        <div className="max-w-[620px] mx-auto pb-28">
          <SectionTitle align="center">Powerful business benefits</SectionTitle>
          <div className="flex justify-center mt-2">
            <BorderLine />
          </div>
          <p className="text-center mt-8">
            When you sell more, you do more. Seize more opportunities, invest in
            growth and take bold steps. Discover how Sopro has helped hundreds
            of businesses sell more.
          </p>
        </div>
        <div>
          <BenefitSlider/>
        </div>
      </div>
    </div>
  );
};

export default BusinessBenefits;
