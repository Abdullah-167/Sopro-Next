import React from "react";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";

const SaleGrow = () => {
  return (
    <div className="py-40">
      <div className="main-container">
        <div className="flex md:flex-row flex-col justify-center gap-10 md:gap-20">
          <div className="max-w-[460px]">
            <div className="text-left">
            <SectionTitle>Watch your sales grow</SectionTitle>
            </div>
            <BorderLine />
            <p className="mt-14">
              Sopro helps you sell more by starting new sales conversations with
              the people that matter. We source your ideal prospects, engage
              them with personalised emails, and connect them directly to you
              when they are ready to talk business.
              <br />
              <br />
              We do the hard work, so you can do your best work.
              <br /> <br />
              Discover how Sopro will support your business.
            </p>
          </div>
          <div className="">
            <iframe
             className="w-full md:min-w-[470px] md:h-full min-h-[250px]"
              src="https://www.youtube.com/embed/6Pd-3nvYDRk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleGrow;
