/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { FiMail } from "react-icons/fi";

const LeadershipCard = ({ name, designation, email, description, picture }) => {
  return (
    <div className="relative w-full">
      {picture && (
        <Image
          src={picture}
          alt="Placeholder image"
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
      )}
      <div className={`${picture ? "absolute inset-0 w-full h-full bg-primaryV2 opacity-0 hover:opacity-75 transition-opacity" : "w-full h-full flex justify-center items-center"} `}>
        <div className={`md:pt-10 pb-12 pt-0 md:px-10 px-4 `}>
          <div className={`text-white text-center`}>
            {name && <h2 className="text-2xl font-bold text-left">{name}</h2>}
            {designation && (
              <p className="text-secondary text-left text-lg font-normal mb-1">
                {designation}
              </p>
            )}
            {email && (
              <a href="/" className="flex gap-1.5 mb-5 md:mb-20">
                <span className="flex self-center">
                  <FiMail className="text-white" />
                </span>
                <span className="text-white hover:underline flex self-center">
                  {email}
                </span>
              </a>
            )}
            <p className={`${picture ? "text-white font-normal text-base" : "text-primaryV2 font-bold text-lg"}  text-center md:text-left`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
