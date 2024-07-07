import Image from "next/image";
import React from "react";
import { GiOpenedFoodCan } from "react-icons/gi";

export default function Touricons() {
  return (
    <div className="border border-[#5d5d5d] w-full bg-[#2d2e2500] pb-3">
      <h1 className="text-[16px] text-[#000000] font-bold font-frinkRio leading-[26px] px-5 lg:px-14 py-6">
        Tour includes
      </h1>
      <div className="grid grid-cols-3 items-center justify-center gap-y-4 px-3 lg:px-8">
        <div className="flex flex-col items-center">
          <span className="w-16 aspect-square rounded-full bg-black flex items-center justify-center">
            <Image src="/Layer 47 copy.png" alt="" width={40} height={40} />
          </span>
          <h1>Hotel</h1>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-16 aspect-square rounded-full bg-black flex items-center justify-center">
            <Image src="/Layer 48.png" alt="" width={40} height={40} />
          </span>
          <h1>Meals</h1>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-16 aspect-square rounded-full bg-black flex items-center justify-center">
            <Image src="/Layer 47 copy.png" alt="" width={40} height={40} />
          </span>
          <h1>Transport</h1>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-16 aspect-square rounded-full bg-black flex items-center justify-center">
            <Image src="/Layer 47 copy.png" alt="" width={40} height={40} />
          </span>
          <h1>Flight</h1>
        </div>
        <div className="flex flex-col items-center">
          <span className="w-16 aspect-square rounded-full bg-black flex items-center justify-center">
            <Image src="/Layer 48.png" alt="" width={40} height={40} />
          </span>
          <h1>Sightseeing</h1>
        </div>
      </div>
    </div>
  );
}
