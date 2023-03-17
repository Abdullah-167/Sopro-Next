import Image from "next/image";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ArrowBtn = ({ title }) => {
  return (
    <div className="flex justify-center items-center gap-7 px-3 py-2.5 rounded-full  duration-300 cursor-pointer">
      <span>{title}</span>
      <span className="text-2xl">
        <BsFillArrowRightCircleFill />
      </span>
    </div>
  );
};

export default ArrowBtn;
