import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import { RxCross2 } from "react-icons/rx";
import BorderLine from "../BorderLine";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="w-full">
      <div className=" bg-primaryV2">
        <div className="main_container">
          <div className="hidden md:flex justify-between items-center">
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
      <div className="bg-primary hidden md:flex justify-center items-center gap-16 text-white text-sm ">
        {menuLinks.map((item, index) => {
          return (
            <Link href={item.url} key={index}>
              <span className="nav_link">{item.title}</span>
            </Link>
          );
        })}
      </div>

      {/* Responsive Navbar Started */}


      <div className=" bg-primaryV2">
        <div className="main_container">
          <div className="flex md:hidden justify-between items-center">
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
                className="hidden sm:flex cursor-pointer"
                src="phone.svg"
                alt=""
                width={20}
                height={10}
              />

              <Link href={"/"}>
                <span className="hidden sm:flex bg-secondary px-3 py-2.5 rounded-full text-[#fff] border-2 border-secondary hover:bg-white duration-300 hover:text-secondary">
                  Book Your Demo
                </span>
              </Link>
              <div className="max-w-[140px] hidden sm:flex justify-between items-center gap-7 hover:bg-transparent px-3 py-1 rounded-full text-[#fff] border-2 border-white hover:border-[#3B6FFF] hover:text-[#3B6FFF] duration-300 cursor-pointer">
                <a className="">Login</a>
                <Image
                  className="text-[#000]"
                  src="arrow.svg"
                  alt=""
                  width={30}
                  height={10}
                />
              </div>
              <div onClick={handleToggle}>
                {isOpen ? (
                  <RxCross2 className="text-4xl text-white cursor-pointer" />
                ) : (
                  <Image
                    className="cursor-pointer ml-10"
                    src="hamburger.svg"
                    alt=""
                    width={40}
                    height={0}
                  />)}
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className={`menu ${isOpen ? 'open' : ''}max-w-[250px] fixed inset-0 z-20 text-white cursor-pointer text-lg mt-[90px]`}>
            <div className="max-w-[600px] mx-auto px-8">
              {responiveLink.map((item, index) => {
                return (
                  <div key={index} className="flex justify-between items-center">
                    <span href={item.path} className="hover:text-white transition-all duration-400 lg:mx-12 py-3 block">{item.title}</span>
                    <span className="text-3xl">{item.plus}</span>
                  </div>
                )
              })}
              <div className="mt-5">
                <Link href={"/"}>
                  <span className="bg-white px-3 py-2.5 rounded-full text-secondary hover:text-black border-2 border-secondary hover:bg-white duration-300">
                    Book Your Demo
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
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

const responiveLink = [{
  title: 'Solutions',
  plus: '+',
  path: '/'
},
{
  title: 'Platform',
  plus: '+',
  path: '/'
}, {
  title: 'Results',
  plus: '+',
  path: '/'
}, {
  title: 'Resources',
  plus: '+',
  path: '/'
}, {
  title: 'About',
  plus: '+',
  path: '/'
}, {
  title: 'Contact',
  path: '/'
},]