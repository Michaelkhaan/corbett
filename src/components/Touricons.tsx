import Image from "next/image";
import React from "react";
import { GiOpenedFoodCan } from "react-icons/gi";
import TourSkeleton from "./TourSkeleton";

interface Data {
  name: string;
  image: string;
}

export default function Touricons({ data , isLoading }: { data: Data[] , isLoading?:boolean }) {
  return (
    <div className="border border-[#5d5d5d] w-full bg-[#2d2e2500] pb-3">
      <h1 className="text-[16px] text-[#000000] font-bold font-frinkRio leading-[26px] px-5 lg:px-14 py-6">
        Tour includes
      </h1>
      <div className="grid grid-cols-3 items-center justify-center gap-y-4 px-3 lg:px-8">
      {isLoading ? Array.from({ length: 3 }).map((e, index) => (
              <TourSkeleton key={index} />
            )) : null}
        {data?.map((e, index) => (
          <div key={index} className="flex flex-col items-center">
            
            <span className="w-16 aspect-square rounded-full bg-black flex items-center justify-center">
              
              <Image
                src={e?.image || "/Layer 47 copy.png"}
                alt=""
                width={40}
                height={40}
              />
            </span>
            <h1>{e?.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
