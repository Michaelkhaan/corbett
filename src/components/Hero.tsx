import React from "react";
import NaveBar from "./NaveBar";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full aspect-[1920/790] flex flex-col items-center overflow-hidden relative">

      <Image
        src="/hero.png"
        alt=""
        sizes="100%"
        layout="fill"
        className=" object-cover absolute inset-0 w-full h-full -z-10 "
      />
      
      <NaveBar />
      <div className="my-auto flex flex-col items-center">
        <h1 className="text-xl 2xl:text-5xl text-white font-bold text-center font-frinkRio ">Adventure</h1>
        <h1 className="text-2xl lg:text-5xl 2xl:text-[134px] text-white font-extrabold tracking-widest text-center font-frinkRio">
          SAFARI <br/> CORBETT
        </h1>
        <h1 className="text-xl text-white font-semibold border border-white text-center mt-5 px-5 py-1">
          NATIONAL PARK
        </h1>
      </div>
    </div>
  );
}

export default Hero;
