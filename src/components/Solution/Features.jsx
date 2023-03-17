// import React from "react";
// import Image from "next/image";
// import ArrowBtn from "../ArrowBtn";

// const Features = () => {
//   return (
//     <div className="mt-20">
//       <div className="main-container">
//         <div className="flex justify-center gap-20">
//           <div className="max-w-[520px]">
//             <Image src="f1.svg" alt="" width={1000} height={10} />
//           </div>
//           <div className="">
//             <div className="max-w-[350px] text-primaryV2 mt-10 z-10">
//               <h2 className="text-2xl font-normal mb-6">
//                 GDPR compliant brand protection
//               </h2>
//               <p className="text-base font-light">
//                 When we run your campaigns your brand reputation is secure. And
//                 because we do the sourcing for you, there’s no sharing of data
//                 either. Your prospecting is fully GDPR compliant.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center gap-20 mt-8">
//           <div className="">
//             <div className="max-w-[350px] text-primaryV2 mt-10 z-10">
//               <h2 className="text-2xl font-normal mb-6">
//                 Scalable for the long-term
//               </h2>
//               <p className="text-base font-light">
//                 Feel free to grow. To bring in new sales members. To bring in a
//                 whole new team. Whatever the volume of qualified prospects your
//                 business needs, Sopro can support it.
//               </p>
//             </div>
//           </div>
//           <div className="max-w-[520px]">
//             <Image src="f2.svg" alt="" width={1000} height={10} />
//           </div>
//         </div>
//         <div className="flex justify-center gap-20">
//           <div className="max-w-[520px]">
//             <Image src="f3.svg" alt="" width={1000} height={10} />
//           </div>
//           <div className="">
//             <div className="max-w-[350px] text-primaryV2 mt-10 z-10">
//               <h2 className="text-2xl font-normal mb-6">
//                 Fully integrated and customisable
//               </h2>
//               <p className="text-base font-light">
//                 Whatever systems you’re running, your Sopro solution will
//                 integrate seamlessly. Our tech plugs-in to all of the major CRMs
//                 and our team will fully customise your campaigns to support your
//                 goals.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center gap-20 mt-8">
//           <div className="">
//             <div className="max-w-[350px] text-primaryV2 mt-10 z-10">
//               <h2 className="text-2xl font-normal mb-6">
//                 No nurturing necessary
//               </h2>
//               <p className="text-base font-light">
//                 Your Sopro leads are qualified, engaged and ready to take
//                 action. We’ve taken them through awareness, intention and
//                 desire, so your marketing team gains more time and your sales
//                 team can focus on selling.
//               </p>
//             </div>
//           </div>
//           <div className="max-w-[520px]">
//             <Image src="f4.svg" alt="" width={1000} height={10} />
//           </div>
//         </div>
//         <div className="py-20 mt-16 px-20 bg-[#ECF7FF] border-2 border-[#2BB2ED] max-w-[930px] mx-auto relative">
//           <div className="max-w-[740px] mx-auto">
//             <h2 className="text-3xl font-normal mb-8 text-center">
//               Contact us today and go live in as little as two weeks.
//             </h2>
//             <p className="text-base font-light text-center mb-10">
//               Go from sign-up to a flowing qualified lead funnel in just two
//               weeks. We’re fast and efficient so you can see high- ROI, seize
//               opportunities and stay ahead. Get in touch to arrange a demo of
//               Sopro and discover the potential return for your business.
//             </p>
//             <div className="max-w-[250px] mx-auto text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
//               <ArrowBtn title="Book your demo Call" />
//             </div>
//           </div>
//           <div className="absolute top-[-50px] right-0 left-0 flex justify-center">
//           <Image src="points.svg" alt="" width={90} height={10} />
//           </div>
//         </div>
//         <div className="py-14 px-20 border-b-2 border-r-2 border-l-2 border-[#2BB2ED] max-w-[930px] mx-auto">
//           <div className="max-w-[740px] mx-auto">
//             <h2 className="text-3xl font-normal mb-8 text-center">
//               What you’ll get from the call:
//             </h2>
//             <div className="grid grid-cols-2 gap-8 pt-10">
//               <div className="flex items-center gap-5">
//                 <div>
//                 <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
//                 </div>
//                 <p>
//                   Speak to a business growth expert to learn how Sopro email
//                   marketing can increase your sales
//                 </p>
//               </div>
//               <div className="flex items-center gap-5">
//                 <div>
//                 <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
//                 </div>
//                 <p>
//                   Speak to a business growth expert to learn how Sopro email
//                   marketing can increase your sales
//                 </p>
//               </div>
//               <div className="flex items-center gap-5">
//                 <div>
//                 <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
//                 </div>
//                 <p>
//                   Speak to a business growth expert to learn how Sopro email
//                   marketing can increase your sales
//                 </p>
//               </div>
//               <div className="flex items-center gap-5">
//                 <div>
//                 <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
//                 </div>
//                 <p>
//                   Speak to a business growth expert to learn how Sopro email
//                   marketing can increase your sales
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from "react";
import Image from "next/image";
import ArrowBtn from "../ArrowBtn";

const Features = () => {
  return (
    <div className="mt-6 sm:mt-20">
      <div className="main-container">
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-center gap-x-20">
          <div className="hidden lg:flex max-w-[520px]">
            <Image src="f1.svg" alt="" width={1000} height={10} />
          </div>
          <div className="flex lg:hidden max-w-[760px]">
            <Image src="Group1.svg" alt="" width={1000} height={10} />
          </div>
          <div className="">
            <div className="max-w-full lg:max-w-[350px] text-primaryV2 mt-5 lg:mt-10 z-10">
              <h2 className="text-2xl font-normal mb-4 sm:mb-6">
                GDPR compliant brand protection
              </h2>
              <p className="text-base font-light">
                When we run your campaigns your brand reputation is secure. And
                because we do the sourcing for you, there’s no sharing of data
                either. Your prospecting is fully GDPR compliant.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-center gap-x-20 mt-8">
          <div className="">
            <div className="max-w-full lg:max-w-[350px] text-primaryV2 mt-10 z-10">
              <h2 className="text-2xl font-normal mb-6">
                Scalable for the long-term
              </h2>
              <p className="text-base font-light">
                Feel free to grow. To bring in new sales members. To bring in a
                whole new team. Whatever the volume of qualified prospects your
                business needs, Sopro can support it.
              </p>
            </div>
          </div>
          <div className="max-w-[520px]">
            <Image className="hidden lg:flex" src="f2.svg" alt="" width={1000} height={10} />
          </div>
          <div className="flex justify-start lg:hidden max-w-[760px] mt-5">
            <Image src="Group39.svg" alt="" width={1000} height={10} />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-center gap-x-20 mt-12 lg:mt-0">
          <div className="hidden lg:flex max-w-[520px]">
            <Image src="f3.svg" alt="" width={1000} height={10} />
          </div>
          <div className="flex lg:hidden max-w-[760px]">
            <Image src="Group3.svg" alt="" width={1000} height={10} />
          </div>
          <div className="">
            <div className="max-w-full lg:max-w-[350px] text-primaryV2 mt-10 z-10">
              <h2 className="text-2xl font-normal mb-6">
                Fully integrated and customisable
              </h2>
              <p className="text-base font-light">
                Whatever systems you’re running, your Sopro solution will
                integrate seamlessly. Our tech plugs-in to all of the major CRMs
                and our team will fully customise your campaigns to support your
                goals.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-center gap-x-20 mt-8">
          <div className="">
            <div className="max-w-full lg:max-w-[350px] text-primaryV2 mt-5 sm:mt-10 z-10">
              <h2 className="text-2xl font-normal mb-6">
                No nurturing necessary
              </h2>
              <p className="text-base font-light">
                Your Sopro leads are qualified, engaged and ready to take
                action. We’ve taken them through awareness, intention and
                desire, so your marketing team gains more time and your sales
                team can focus on selling.
              </p>
            </div>
          </div>
          <div className="hidden lg:flex max-w-[520px]">
            <Image src="f4.svg" alt="" width={1000} height={10} />
          </div>
          <div className="flex lg:hidden max-w-[760px] mt-8">
            <Image src="Group4.svg" alt="" width={1000} height={10} />
          </div>
        </div>
        <div className="py-20 mt-16 px-5 sm:px-20 bg-[#ECF7FF] border-2 border-[#2BB2ED] max-w-[930px] mx-auto relative">
          <div className="max-w-[740px] mx-auto">
            <h2 className="text-xl sm:text-3xl font-normal mb-8 text-center">
              Contact us today and go live in as little as two weeks.
            </h2>
            <p className="text-base font-light text-center mb-10">
              Go from sign-up to a flowing qualified lead funnel in just two
              weeks. We’re fast and efficient so you can see high- ROI, seize
              opportunities and stay ahead. Get in touch to arrange a demo of
              Sopro and discover the potential return for your business.
            </p>
            <div className="max-w-[250px] mx-auto text-[#fff] hover:bg-white border-2 border-[#3B6FFF] hover:text-[#3B6FFF] bg-[#3B6FFF] rounded-full duration-200">
              <ArrowBtn title="Book your demo Call" />
            </div>
          </div>
          <div className="hidden absolute top-[-50px] right-0 left-0 sm:flex  justify-center">
            <Image src="points.svg" alt="" width={90} height={10} />
          </div>
          <div className="sm:hidden absolute top-[-30px] right-0 left-0 flex justify-center">
            <Image src="points.svg" alt="" width={60} height={10} />
          </div>
        </div>
        <div className="py-14 px-5 sm:px-20 border-b-2 border-r-2 border-l-2 border-[#2BB2ED] max-w-[930px] mx-auto">
          <div className="max-w-[740px] mx-auto">
            <h2 className="text-xl sm:text-3xl font-normal mb-8 text-center">
              What you’ll get from the call:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5 sm:pt-10">
              <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5">
                <div>
                  <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
                </div>
                <p className="max-w-[300px] mx-auto text-center">
                  Speak to a business growth expert to learn how Sopro email
                  marketing can increase your sales
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5">
                <div>
                  <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
                </div>
                <p className="max-w-[300px] mx-auto text-center">
                  Speak to a business growth expert to learn how Sopro email
                  marketing can increase your sales
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5">
                <div>
                  <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
                </div>
                <p className="max-w-[300px] mx-auto text-center">
                  Speak to a business growth expert to learn how Sopro email
                  marketing can increase your sales
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-5">
                <div>
                  <Image src="/sopro-logo-alt.webp" alt="" width={50} height={10} />
                </div>
                <p className="max-w-[300px] mx-auto text-center">
                  Speak to a business growth expert to learn how Sopro email
                  marketing can increase your sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

