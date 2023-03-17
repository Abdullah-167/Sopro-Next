import Image from "next/image";
import ArrowBtn from "../ArrowBtn";
import SectionTitle from "../SectionTitle";
import BorderLine from "../BorderLine";

const LifeSopro = () => {
  return (
    <div className="bg-[#F4F9FE] py-10">
      <div className="mb-8">
        <SectionTitle align="center"> Life at Sopro</SectionTitle>
        <div className="flex justify-center pt-3">
          <BorderLine />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="w-full">
          <Image src="/lifeatsopro-g1.jpg" alt="" width={400} height={400} />
        </div>
        <div className="w-full">
          <Image src="/lifeatsopro-g5.jpg" alt="" width={400} height={400} />
        </div>
        <div className="w-full">
          <Image src="/lifeatsopro-g6.jpg" alt="" width={400} height={400} />
        </div>
        <div className="w-full">
          <Image src="/lifeatsopro-g4.jpg" alt="" width={400} height={400} />
        </div>
        <div className="w-full">
          <Image src="/lifeatsopro-g5.jpg" alt="" width={400} height={400} />
        </div>
        <div className="w-full">
          <Image src="/lifeatsopro-g6.jpg" alt="" width={400} height={400} />
        </div>
        <div className="min-h-[250px]">
          <Image src="/lifeatsopro-g8.jpg" alt="" width={400} height={400} />
        </div>
        <div className="w-full">
          <Image src="/lifeatsopro-g8.jpg" alt="" width={400} height={400} />
        </div>
      </div>
      <div className="max-w-[260px] py-1 mx-auto text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
        <ArrowBtn title="Check out Life at Sopro" />
      </div>
    </div>
  );
};

export default LifeSopro;
