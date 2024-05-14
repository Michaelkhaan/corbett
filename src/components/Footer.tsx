import React from "react";
import { AiFillTwitterCircle, AiOutlineCopyright } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="border rounded-full w-12 h-12 flex items-center justify-center bg-black fixed right-10 bottom-10">
        <FaWhatsapp className="text-2xl text-[#47e1d9]" />
      </div>
      <div className="w-full ">
        <div className="w-full flex flex-wrap gap-y-10 justify-between px-4 lg:px-20 py-10 bg-[#F8F9FD]">
          <div className="w-full md:w-1/2 lg:w-1/5">
            <h1 className="font-bold mb-2">Contact Us</h1>
            <h5>
              <span className="font-semibold">A : </span>
              A2,Ramnagar,Jim Corbette, Utranchal.
            </h5>
            <h5 className="mb-5">
              <span className="font-semibold">E : </span>info@jimcorbettour.com
            </h5>
            <h5 className="font-semibold">
              <span>M:</span>
              +91 88 504 501 4
            </h5>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/5">
            <h1 className="text-2xl font-bold mb-4">Corbett</h1>
            <h4 className="text-xl font-bold">ITS NOT JUST A HAIR.</h4>
            <h4 className="text-xl font-bold"> ITS STATE OF MIND.</h4>
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
          <div className="w-full md:w-1/2 lg:w-1/5 flex flex-col">
            <ul className="flex flex-col">
              <li className="text-left">Home</li>
              <li className="text-left">About us</li>
              <li>Packages</li>
              <li>Jeep Safari</li>
              <li>Canter Saferi</li>
              <li>Zone</li>
              <li>Dhikala Rest House</li>
            </ul>
          </div>
          <ul className="w-full md:w-1/2 lg:w-1/5">
            <li>Contact Us</li>
            <li>Terms & Conditions </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="bg-stone-700">
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
      </div>
    </>
  );
}

export default Footer;

{
  /*  */
}
