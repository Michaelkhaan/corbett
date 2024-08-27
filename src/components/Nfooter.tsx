import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Nfooter() {
  return (
    <>
    <div className="w-full bg-[#F8F9FD] ">
      <div className="border rounded-full  flex items-center justify-center bg-black fixed lg:right-10 lg:bottom-20 bottom-4 right-4 p-2 z-50 ">
        {/* <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-shake"> */}
        <a href="https://wa.me/919837166431" target="_blank">
          <FaWhatsapp className="lg:text-2xl text-base text-[#47e1d9]" />
        </a>
      </div>
      <div className="2xl:w-[70%] lg:w-4/5 flex mx-auto py-10 flex-wrap w-11/12">
        <div className="2xl:w-[27%] lg:w-[33%] md:w-1/2 md:order-1">
          <div className="2xl:px-8">
            <h1 className="font-bold font-frinkRio text-base">contact us</h1>
            <h5 className="text-[14px] font-GothamBook ">
              <span className="font-bold">A : </span>
              A2,Ramnagar,Jim Corbette, Utranchal.
            </h5>
            <h5 className="text-[14px] font-GothamBook ">
              <span className="font-bold">E : </span>info@jimcorbettour.com
            </h5>
            <h5 className="text-base font-GothamBook font-bold mt-4">
              <span className="font-bold">M:</span>
              +91 88 504 501 4
            </h5>
          </div>
        </div>
        <div className="2xl:w-[37%] lg:w-[43%] md:w-1/2 w-full md:order-2 order-5">
          <div className="flex flex-col items-center">
            <Link href="/">
              <h1 className="2xl:text-3xl text-xl text-black font-bold relative font-frinkRio">
                corbett
                <span className="w-2 aspect-square rounded-full bg-[#00f9e9] absolute top-1 -right-2 "></span>
              </h1>
            </Link>

            <h4 className="text-[22px] font-bold font-frinkRio">
              ITS NOT JUST A HAIR.
            </h4>
            <h4 className="text-[22px] font-bold font-frinkRio">
              ITS STATE OF MIND.
            </h4>
            <div className="flex gap-2 items-center mt-3">
              <BsFacebook className="text-2xl" />
              <div className=" border rounded-full px-1 py-1 bg-black">
                <FaInstagram className="text-white" />
              </div>
              <div className="border rounded-full px-1 py-1 bg-black">
                <FaLinkedinIn className="text-white" />
              </div>
              <AiFillTwitterCircle className="text-[28px]" />
              <FaPinterest className="text-[26px]" />
              <div className="border rounded-full px-1 py-1 bg-black">
                <BsYoutube className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:w-[18%] lg:w-[12%] md:w-1/2 w-full md:order-3">
          <ul className="lg:px-4 2xl:px-8 text-[14px] font-GothamBook ">
            <li className="">
              {" "}
              <Link href="/">Home</Link>
            </li>
            <li className="">
              {" "}
              <Link href="/aboutUs">About us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/packages">Packages</Link>
            </li>
            <li>
              {" "}
              <Link href="/jeep">Jeep Safari</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="/cantersafari">Canter Saferi</Link>{" "}
            </li>
            <li> Zone </li>
            <li>
              {" "}
              <Link href="/dhikalaresthouse">Dhikala Rest House</Link>
            </li>
          </ul>
        </div>
        <div className="2xl:w-[18%] lg:w-[12%] md:w-1/2 w-full md:order-4">
          <ul className="lg:px-4 2xl:px-0 text-[14px] font-GothamBook ">
            <li>
              {" "}
              <Link href="/contact_us">Contact Us</Link>
            </li>
            <li>Terms & Conditions </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      
    </div>
    <div className="bg-stone-700 py-1 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <h4 className="text-sm text-white px-1">2024 ©</h4>

          <p className="text-sm text-white px-1">
            copyright corbetttour.com
            <span className="text-white"> | </span>
          </p>

          <p className="text-sm text-white px-2">
            Designed by www.feelbrand.in
          </p>
        </div>
      </div>
    </>
  );
}
