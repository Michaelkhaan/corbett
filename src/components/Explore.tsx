import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Explore() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center gap-2 mt-20 ove">
        <div className="w-full lg:w-1/5 px-10 lg:pl-20">
          <h1 className="text-xl font-bold">BOOK A PERMIT</h1>
          <p className="text-base lg:w-[200px]">
            FOR JUNGLE SAFFARI CORBETT TOURISM
          </p>
          <button className="bg-black rounded-xs px-4 text-white">
            Book Saffari
          </button>
        </div>
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-center gap-1 relative px-10 lg:px-0">
          <span className="w-full lg:w-1/2 relative">
            <Image
              src="/Jeep.jpg"
              alt=""
              width={0}
              height={0}
              className="w-full h-52 relative"
            />
          </span>
          <h1 className="text-white text-2xl font-extrabold absolute bottom-5 left-5 lg:w-[100px]">
            JEEP SAFFARI
          </h1>
          <span className="w-full lg:w-1/2 relative">
            <Image
              src="/Tiger.jpg"
              alt=""
              width={0}
              height={0}
              className="w-full h-52 relative"
            />
            <h1 className="text-white text-2xl font-extrabold absolute bottom-5 left-5 lg:w-[100px]">
              CANTER SAFFARI
            </h1>
          </span>
        </div>
      </div>
      <div className="w-full flex items-center gap-3 mt-2">
        <span className="w-6 aspect-square rounded-full border border-black flex items-center justify-center">
          <IoIosArrowBack />
        </span>
        <span className="w-6 aspect-square rounded-full border border-black flex items-center justify-center">
          <IoIosArrowForward />
        </span>
      </div>
    </>
  );
}

export default Explore;
