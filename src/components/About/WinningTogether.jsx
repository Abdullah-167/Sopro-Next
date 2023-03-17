import React from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";

const WinningTogether = () => {
  return (
    <div className="pt-28">
      <div className=" max-w-[930px] mx-auto px-2">
        <div className="my-10">
          <SectionTitle align="center">We are our own best case study</SectionTitle>
          <div className="flex justify-center pt-3">
            <BorderLine />
          </div>
        </div>
        <p className="text-base text-primaryV2 text-center">
          Right from the start, we wanted our clients to have more than just
          logins and a weekly report. Sopro would be a supportive marketing
          service, prioritising transparency, compliance and the protection of
          our clients reputations. So we started hiring talented people, who
          bought-in to our vision. And people noticed. Awards and recognition
          followed, which spurred us all on even more.
        </p>
      </div>
      <div className="max-w-[2000px] mx-auto mt-14">
        <Image
          className="md:flex hidden"
          src="/winning-together.jpg"
          alt=""
          width={2000}
          height={1000}
        />
        <Image
          className="md:hidden flex"
          src="/winning-together-mob.jpg"
          alt=""
          width={2000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default WinningTogether;
