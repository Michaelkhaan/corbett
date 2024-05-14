import React from "react";
import NaveBar from "./NaveBar";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full h-[600px] flex flex-col items-center overflow-hidden relative">
      <Image
        src="/hero.png"
        alt=""
        sizes="100%"
        layout="fill"
        className=" object-cover absolute inset-0 w-full h-full -z-10 "
      />
      <NaveBar />
      <div className="my-auto flex flex-col items-center">
        <h1 className="text-xl text-white font-bold text-center">Adventure</h1>
        <h1 className="text-2xl lg:text-5xl text-white font-extrabold lg:w-[300px] tracking-widest text-center">
          SAFARI CORBETT
        </h1>
        <h1 className="text-xl text-white font-semibold border border-white text-center mt-5 px-5 py-1">
          NATIONAL PARK
        </h1>
      </div>
    </div>
  );
}

export default Hero;
