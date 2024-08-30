import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import Image from "next/image";

interface Props {
  className?: string;
  mainClassName?: string;
}
function NaveBar({ className = "", mainClassName = "" }: Props) {
  const router = useRouter();
  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/aboutUs",
    },
    {
      title: "Packages",
      link: "/packages",
    },
    {
      title: "Jeep Safari",
      link: "/jeep",
    },
    {
      title: "Canter Safari",
      link: "/cantersafari",
    },
    {
      title: "Dhikala Rest House",
      link: "/dhikalaresthouse",
    },
    {
      title: "Resorts",
      link: "/nightstay",
    },
    {
      title: "Contact Us",
      link: "/contact_us",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`w-full bg-black/70  py-3 z-[9999] absolute left-0 right-0 top-0 ${mainClassName}`}
      >
        <div className="mx-auto w-11/12 lg:w-3/4 2xl:w-[75%] flex items-center justify-between lg:px-1 2xl:px-3 2xl:pr-12">
          <div className="relative">
            <Link href="/">
              <h1 className="2xl:text-3xl text-2xl text-white font-bold font-frinkRio cursor-pointer">
                corbett
              </h1>

              <span
                className={`w-2 aspect-square rounded-full bg-[#00f9e9] absolute top-1 -right-2 ${className}`}
              ></span>
            </Link>
          </div>
          <ul
            className={`${
              open ? "left-0 " : "-left-[100%] lg:left-0 bottom-0"
            } flex lg:flex-row flex-col lg:items-center 2xl:gap-6 gap-3 absolute bg-black/70  top-14 px-8 lg:px-0 gap-y-4 py-4 lg:py-2 lg:relative lg:top-0 lg:bg-transparent w-full lg:w-auto transition-all duration-300 ease-in !z-[9999999] `}
          >
            {navData?.map((nav, index) => (
              <Link key={index} href={nav?.link}>
                <li
                  className="text-white whitespace-nowrap 2xl:text-base lg:text-xs font-semibold font-GothamBook cursor-pointer hover:text-[#00f9e9]"
                  style={{
                    color: nav?.link === router?.pathname ? "#f8bd01" : "white",
                  }}
                >
                  {nav?.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="lg:flex items-center 2xl:gap-5 lg:gap-2 hidden">
            <a href="https://wa.me/919837166431" target="_blank">
              <RiWhatsappFill
                className="text-[#25D366] text-2xl  "
                fill="#25D366"
              />
            </a>
            {/* <h1 className="2xl:text-sm lg:text-xs text-white">
              info@corbett.in
            </h1> */}

            <div className="flex items-center gap-3 rounded-2xl pr-5 bg-gray-600">
              <span className="bg-primary rounded-full p-1 ">
              <LuPhone
                onClick={() => (window.location.href = "tel:+919837166431")}
                className="text-sm text-white"
                fill="white"
                // stroke="white"
                strokeWidth={0}
              />
              </span>
              <p
                className="text-sm tracking-wider text-white cursor-pointer"
                onClick={() => (window.location.href = "tel:+919837166431")}
              >
                9837166431
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4 lg:hidden">
            <a href="https://wa.me/919837166431" target="_blank">
              <RiWhatsappFill
                className="text-[#25D366] text-xl  "
                fill="#25D366"
              />
            </a>

            <GiHamburgerMenu
              fill="white"
              onClick={() => setOpen(!open)}
              className="block lg:hidden text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NaveBar;
