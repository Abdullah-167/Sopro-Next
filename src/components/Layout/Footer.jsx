import Image from "next/image";
import Logo from "../../../public/sopro.svg";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primaryV2 pt-20">
      <div className="main_container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-14 mb-20">
          {menuData.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="text-lg text-white border-b-[1px] border-b-[#EF5E4F] pb-5 mb-10">
                  {item.title}
                </h3>

                {item.link.map(({ title, url }, index) => {
                  return (
                    <Link href={url} key={index}>
                      <span className="py-2 block text-white transition-all hover:text-secondary">
                        {title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-full flex justify-center md:mb-0 mb-10">
            <Image
              src="/partner-lead-gen.png"
              alt="Partner Lead Gen"
              width={120}
              height={120}
            />
          </div>
          <div className="flex self-center">
            <div className="flex gap-5">
              <a href="/" target="_blank" className="social_link">
                <FaLinkedinIn />
              </a>
              <a href="/" target="_blank" className="social_link">
                <BsTwitter />
              </a>
              <a href="/" target="_blank" className="social_link">
                <FaFacebookF />
              </a>
              <a href="/" target="_blank" className="social_link">
                <AiOutlineInstagram />
              </a>
              <a href="/" target="_blank" className="social_link">
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2E3454] mt-32">
        <p className="text-center text-white max-w-[700px] m-auto py-9">
          Sopro is a trading brand of Prospect Global Ltd, Reg. UK Co. 09648733.
          Prospect Global Limited is a wholly owned subsidiary of Sopro Holdings
          Limited, Reg. UK Co. 10358168
        </p>
      </div>
    </div>
  );
};

export default Footer;
const menuData = [
  {
    title: "Solutions",
    link: [
      {
        title: "Businesses with sales teams",
        url: "/",
      },
      {
        title: "Businesses without sales teams",
        url: "/",
      },
      {
        title: "Enterprise businesses",
        url: "/",
      },
      {
        title: "Industry solutions",
        url: "/",
      },
    ],
  },
  {
    title: "Results",
    link: [
      {
        title: "Success stories",
        url: "/",
      },
      {
        title: "Awards and recognition",
        url: "/",
      },
      {
        title: "Live stats – all campaigns",
        url: "/",
      },
      {
        title: "IThe State of Prospecting",
        url: "/",
      },
    ],
  },
  {
    title: "Resources",
    link: [
      {
        title: "Blog",
        url: "/",
      },
      {
        title: "2023 Whitepaper",
        url: "/",
      },
      {
        title: "Email awesomeness checker",
        url: "/",
      },
      {
        title: "Market mapper",
        url: "/",
      },
    ],
  },
  {
    title: "About",
    link: [
      {
        title: "About us",
        url: "/",
      },
      {
        title: "Life at Sopro",
        url: "/",
      },
      {
        title: "Careers",
        url: "/",
      },
      {
        title: "Sopro springboard",
        url: "/",
      },
      {
        title: "The Sopro Group",
        url: "/",
      },
    ],
  },
  {
    title: "Legal",
    link: [
      {
        title: "Cookie Policy",
        url: "/",
      },
      {
        title: "Privacy policy",
        url: "/",
      },
      {
        title: "Terms",
        url: "/",
      },
      {
        title: "GDPR Compliance",
        url: "/",
      },
      {
        title: "GDPR FAQ",
        url: "/",
      },
      {
        title: "Change cookie settings",
        url: "/",
      },
      {
        title: "Do Not Sell My Personal Information",
        url: "/",
      },
    ],
  },
  {
    title: "Platform",
    link: [
      {
        title: "Product tour",
        url: "/",
      },
      {
        title: "Our data",
        url: "/",
      },
      {
        title: "A team not a tool",
        url: "/",
      },
    ],
  },
];
