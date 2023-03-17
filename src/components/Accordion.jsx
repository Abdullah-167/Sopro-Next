import React, { useState } from "react";
import {
    IoIosArrowDropupCircle,
    IoIosArrowDropdownCircle,
  } from "react-icons/io";

const Accordion = ({title, para}) => {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <div>
            <div className="mb-8 max-w-[450px] bg-[#F2F5FF]">
              <div className="border-[0.5px] border-[#9498A9] rounded-xl shadow-sm border-borderc mb-[10px] px-4 md:px-0">
                <div
                  className={`py-5 w-full cursor-pointer flex justify-between tracking-faq-open`}
                  onClick={() => setOpen(!open)}
                >
                  <div className="flex">
                    <p
                      className={` min-w-[26px] hidden md:flex justify-center items-center h-[26px] rounded-full text-white`}
                    ></p>
                    <p className="text-[#9498A9] text-xl font-semibold">
                     {title}
                    </p>
                  </div>
                  <div
                    className={` text-2xl md:mr-4 flex self-center text-[#007bff]`}
                  >
                    {open ? (
                      <IoIosArrowDropdownCircle />
                    ) : (
                      <IoIosArrowDropupCircle />
                    )}
                  </div>
                </div>
                <div className={`${open ? "open" : "collapse"}`}>
                  <div className="px-7 pb-7 pt-2">
                    {para}
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Accordion