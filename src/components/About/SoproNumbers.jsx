import Image from "next/image";
import BorderLine from "../BorderLine";
import SectionTitle from "../SectionTitle";

const SoproNumbers = () => {
  return (
    <div className="bg-secondary">
      <div className="main-container">
        <div className="py-8">
          <div className="flex justify-center pt-10">
            <Image src="logo-icon.svg" alt="" width={70} height={0} />
          </div>
          <div className="my-10">
            <SectionTitle align="center" color="#FFFFFF">Sopro in numbers</SectionTitle>
            <div className="pt-3 flex justify-center">
              <BorderLine color="#FFFFFF" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 md:gap-32">
          {data.map((item, index) => {
            return (
              <div key={index} className="pb-16">
                <div className="text-center text-white">
                  <p className="text-lg font-normal">{item.title}</p>
                  <p className="text-5xl py-4 md:py-7 font-semibold">
                    {item.number}
                  </p>
                  <p className="text-lg font-normal">{item.title2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SoproNumbers;

const data = [
  {
    title: "We engage over",
    number: "1200",
    title2: "new prospects per hour",
  },
  {
    title: "Each year we generate    ",
    number: "£215m    ",
    title2: "of new deals for our clients",
  },
  {
    title: "We have experience of    ",
    number: "8,000    ",
    title2: "previous campaigns",
  },
  {
    title: "We support over    ",
    number: "600+    ",
    title2: "sales & marketing teams",
  },
];
