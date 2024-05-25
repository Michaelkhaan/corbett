import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function NaveBar() {
  const navData = [
    "Home",
    "AboutUs",
    "Packages",
    "Jeep Safari",
    "Canter Safari",
    "Dhikala Rest House",
    "Contact Us",
  ];
  return (
    <>
      {/* <img src="/test/image.png" className="w-full" /> */}

      <div className="w-full bg-black/70  py-3 ssssz-50">
        <div className="mx-auto w-11/12 lg:w-3/4 2xl:w-[70%] flex items-center justify-between lg:px-1 2xl:px-3 2xl:pr-12">
          <div className="relative">
            <h1 className="2xl:text-3xl text-2xl text-white font-bold font-frinkRio cursor-pointer">
              corbett
            </h1>
            <span className="w-2 aspect-square rounded-full bg-[#00f9e9] absolute top-1 -right-2 "></span>
          </div>
          <ul className="lg:flex items-center 2xl:gap-6 gap-3 hidden">
            {navData?.map((nav, index) => (
              <li
                key={index}
                className="text-white 2xl:text-base lg:text-xs font-semibold font-Gotham cursor-pointer"
              >
                {nav}
              </li>
            ))}
          </ul>
          <div className="lg:flex items-center 2xl:gap-5 lg:gap-2 hidden">
            <FaWhatsapp className="text-green-600 2xl:text-xl  lg:text-sm " />
            <h1 className="2xl:text-sm lg:text-xs text-white">
              info@corbett.in
            </h1>
          </div>
          <GiHamburgerMenu className="block lg:hidden text-white" />
        </div>
      </div>
    </>
  );
}

export default NaveBar;
