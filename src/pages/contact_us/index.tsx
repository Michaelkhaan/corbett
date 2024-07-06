import Go from "@/components/Go";
import { Youtube } from "@/components/Icons";
import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import Image from "next/image";
import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa6";

function index() {
  return (
    <div className="w-full">
      <div className="w-full aspect-[1920/790] min-h-[300px] flex flex-col items-center overflow-hidden relative">
        <Image
          src="/hero.png"
          alt=""
          sizes="100%"
          layout="fill"
          className=" object-cover absolute inset-0 w-full -z-10 "
        />
        <NaveBar />
        <h1 className="lg:text-4xl text-2xl whitespace-nowrap 2xl:text-6xl text-white font-frinkRio font-bold left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] absolute">
          CONTACT US
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 mt-8">
        <div className="w-full lg:w-1/2 px-4 lg:px-0 lg:pl-40 2xl:pl-56">
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-Gotham font-bold">
            Customer Support
          </h1>
          <p className="lg:text-sm text-xs 2xl:text-lg text-gray-700 font-Gotham font-semibold lg:w-[500px] 2xl:w-[600px]">
            Our customer support is committed to providing you with extensive
            knwoledge about our tours and procedures. we are here to guide you
            every step of the way, ensuring your travelling experience with
            Kesari Tours is seamless and memorable. Contact us now to have all
            of your travle-related question answered
          </p>
          <div className="mt-10">
            <h1 className="lg:text-2xl text-xl 2xl:text-3xl font-Gotham font-bold">
              Address
            </h1>
            <p className="lg:text-sm text-xs 2xl:text-lg text-gray-700 font-Gotham font-semibold mt-5">
              Block Road Khatari, Near Durga Mil, <br /> Noori Masjid, Ramnagar
              -244715 distt Nainital <br /> Uttarkand, India
            </p>
          </div>
          <div className="bg-black w-full lg:w-3/4 h-[1px] mt-5" />
          <div className="mt-6">
            <h1 className="lg:text-2xl text-xl 2xl:text-3xl font-Gotham font-bold">
              Call No.(24X7)
            </h1>
            <p className="text-sm lg:text-base 2xl:text-lg tracking-wide text-gray-700 font-Gotham font-bold flex items-center gap-2 mt-4">
              <FaPhone /> <span>+91-9917681111</span>{" "}
              <span>+91-9105531111</span>
            </p>
            <p className="text-sm lg:text-base 2xl:text-lg mt-2 tracking-wide text-gray-700 font-Gotham font-bold flex items-center gap-2">
              <BsEnvelope /> <span>booking@jimcorbettpark.co.in</span>
            </p>
          </div>
          <div className="bg-black w-full lg:w-3/4 h-[1px] mt-5" />
          <div className="mt-5">
            <h1 className="text-xl font-Gotham font-bold">
              We are on social networks
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <FaFacebookF className="text-white" />
              </span>
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <FaTwitter className="text-white" />
              </span>
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <FaInstagram className="text-white" />
              </span>
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <Youtube />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:-mt-8">
          {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
          <iframe
            width="100%"
            height="500"
            // id="gmap_canvas"
            src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
            // scrolling="no"
          ></iframe>
        </div>
      </div>
      <div className="pt-12 pb-6">
        <Go />
      </div>
      <Nfooter />
    </div>
  );
}

export default index;
