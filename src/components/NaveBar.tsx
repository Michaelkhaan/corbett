import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function NaveBar() {
  const navData = [
    "Home",
    "About Us",
    "Packages",
    "Jeep Safari",
    "Canter Safari",
    "Dhikala Rest House",
    "Contact Us",
  ];
  return (
    <div className="w-full bg-black/70 flex items-center justify-between px-10 lg:px-32 py-3 fixed top-0 z-50">
      <div>
        <h1 className="text-xl text-white font-bold">Corbett</h1>
      </div>
      <ul className="lg:flex items-center gap-5 hidden">
        {navData?.map((nav, index) => (
          <li key={index} className="text-white">
            {nav}
          </li>
        ))}
      </ul>
      <div className="lg:flex items-center gap-5 hidden">
        <FaWhatsapp className="text-green-500" />
        <h1 className="text-sm text-white">info@corbett.in</h1>
      </div>
      <GiHamburgerMenu className="block lg:hidden text-white" />
    </div>
  );
}

export default NaveBar;
