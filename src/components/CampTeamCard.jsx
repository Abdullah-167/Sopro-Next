import Image from "next/image";

const CampTeamCard = ({ indexNumber, title, description, img }) => {
  return (
    <div
      className={`flex md:flex-row flex-col items-center gap-14 md:mb-0 mb-20 ${
        indexNumber % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="max-w-[180px] md:max-w-[300px]">
        <Image src={img} alt="" width={1000} height={0} />
      </div>
      <div className="max-w-[600px]">
        <h3
          className={`${
            indexNumber % 2 !== 0 ? "md:text-right" : "md:text-left"
          } font-medium text-2xl text-secondary mb-5  text-center`}
        >
          {title}
        </h3>
        <p
          className={`${
            indexNumber % 2 !== 0 ? "md:text-right" : "md:text-left"
          } font-normal text-lg text-primaryV2 text-center`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CampTeamCard;
