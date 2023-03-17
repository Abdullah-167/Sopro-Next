import Image from "next/image";
import Link from "next/link";
import ArrowBtn from "../ArrowBtn";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className=" bg-primaryV2">
        <div className="main_container">
          <div className="flex justify-between items-center">
            <div className="py-4 cursor-pointer">
              <Image
                src="/partner-lead-gen.png"
                alt="Partner Lead Gen"
                width={120}
                height={120}
              />
            </div>
            <div className="flex justify-between items-center gap-5">
              <Image
                className="cursor-pointer"
                src="phone.svg"
                alt=""
                width={20}
                height={10}
              />

              <Link href={"/"}>
                <span className="bg-secondary px-3 py-2.5 rounded-full text-[#fff] border-2 border-secondary hover:bg-white duration-300 hover:text-secondary">
                  Book Your Demo
                </span>
              </Link>
              <div className="max-w-[140px] flex justify-between items-center gap-7 hover:bg-transparent px-3 py-1 rounded-full text-[#fff] border-2 border-white hover:border-[#3B6FFF] hover:text-[#3B6FFF] duration-300 cursor-pointer">
                <a className="">Login</a>
                <Image
                  className="text-[#000]"
                  src="arrow.svg"
                  alt=""
                  width={30}
                  height={10}
                />
              </div>
              <Image
                className="cursor-pointer ml-10"
                src="hamburger.svg"
                alt=""
                width={40}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary flex justify-center items-center gap-16 text-white text-sm ">
        {menuLinks.map((item, index) => {
          return (
            <Link href={item.url} key={index}>
              <span className="nav_link">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
const menuLinks = [
  {
    title: "Solutions",
    url: "/",
  },
  {
    title: "Platform",
    url: "/",
  },
  {
    title: "Pricing",
    url: "/",
  },
  {
    title: "Results",
    url: "/",
  },
  {
    title: "Resources",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/",
  },
];
