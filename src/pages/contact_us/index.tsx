import { Youtube } from "@/components/Icons";
import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import OtherPageHeroShort from "@/components/OtherPageHeroShort";
import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa6";

function index() {
  return (
    <div className="w-full">
      <NaveBar />
      <OtherPageHeroShort image="/hero.png" name="CONTACT US" />
      <div className="w-full flex flex-col lg:flex-row gap-10 mt-8">
        <div className="w-full lg:w-1/2 px-4 lg:px-0 lg:pl-40 2xl:pl-56">
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-GothamBook font-bold">
            Customer Support
          </h1>
          <p className="lg:text-sm text-xs 2xl:text-lg text-gray-700 font-GothamBook mt-3 lg:mt-5">
            Our customer support is committed to providing you with extensive
            knwoledge about our tours and procedures. we are here to guide you
            every step of the way, ensuring your travelling experience with
            Kesari Tours is seamless and memorable. Contact us now to have all
            of your travle-related question answered
          </p>
          <div className="bg-black w-full lg:w-3/4 h-[1px] mt-5" />
          <div className="mt-5">
            <h1 className="lg:text-2xl text-xl 2xl:text-3xl font-GothamBook font-bold">
              Address
            </h1>
            <p className="lg:text-sm text-xs 2xl:text-lg text-gray-700 font-GothamBook mt-3 lg:mt-5">
              KPK Dirstrict Kurram, <br /> Parachinar
               <br /> Pakistan
            </p>
          </div>
          <div className="bg-black w-full lg:w-3/4 h-[1px] mt-5" />
          <div className="mt-6">
            <h1 className="lg:text-2xl text-xl 2xl:text-3xl font-GothamBook font-bold">
              Call No.(24X7)
            </h1>
            <p className="text-sm lg:text-base 2xl:text-lg tracking-wide text-gray-700 font-GothamBook font-bold flex items-center gap-2 mt-4">
              <FaPhone /> <span>+92654654454</span>{" "}
              <span>+9276545566545</span>
            </p>
            <p className="text-sm lg:text-base 2xl:text-lg mt-2 tracking-wide text-gray-700 font-GothamBook font-bold flex items-center gap-2">
              <BsEnvelope /> <span>booking.com</span>
            </p>
          </div>
          <div className="bg-black w-full lg:w-3/4 h-[1px] mt-5" />
          <div className="mt-5">
            <h1 className="text-xl font-GothamBook font-bold">
              We are on social networks
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <FaFacebookF fill="white" />
              </span>
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <FaTwitter fill="white" />
              </span>
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <FaInstagram fill="white" />
              </span>
              <span className="w-8 aspect-square bg-black rounded-full flex items-center justify-center">
                <Youtube />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
          <iframe
            width="100%"
            height="500"
            // id="gmap_canvas"
           src="https://maps.google.com/maps?q=Kurram,+Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            // scrolling="no"
          ></iframe>
        </div>
      </div>
      <Nfooter />
    </div>
  );
}

export default index;
