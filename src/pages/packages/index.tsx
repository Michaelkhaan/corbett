import Itinerary from "@/components/Itinerary";
import NaveBar from "@/components/NaveBar";
import Image from "next/image";
import React from "react";

function index() {
  const itineraryData = [
    {
      days: "Days 1",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
    {
      days: "1",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
    {
      days: "1",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
    {
      days: "1",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
  ];

  return (
    <div className="w-full">
      <NaveBar className="!bg-[#f8bd00]" />
      <div className="w-11/12 md:w-[70%] mx-auto mt-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full md:w-auto text-start">
          <h1 className="text-[32px] font-bold font-frinkRio whitespace-nowrap">
            The Jungle Book
          </h1>
          <p className="text-[16px] font-Gotham font-bold">
            1 Nights, 2 Guest{" "}
            <span className="text-base font-semibold font-Gotham">
              (No extra charges)
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col min-[300px]:flex-row items-center justify-between md:justify-end md:gap-32 gap-2">
          <div className="w-full md:w-auto text-start">
            <h1 className="text-[20px] font-Gotham font-regular">Start From</h1>
            <p className="flex items-center text-[32px] font-Gotham font-bold leading-[28px]">
              <span>
                <Image
                  src="/currency.png"
                  alt=""
                  width={0}
                  height={0}
                  className="w-4 aspect-square"
                />
              </span>
              35,990*
            </p>
            <p className="text-[8px] font-Gotham pl-5">per person</p>
          </div>
          <div className="w-full md:w-auto flex justify-start">
            <button className="bg-black text-white text-xs px-8 py-2 font-Gotham font-light ">
              ENQUERY
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-3/4 mx-auto mt-5">
        <Image
          src="/Layer 45.png"
          alt=""
          width={0}
          height={0}
          className="w-full"
        />
      </div>
      <div className="w-3/4 mx-auto flex gap-10">
        <div className="w-3/5">
          <div className="px-10">
            <h1 className="text-[26px] font-Gotham font-extrabold leading-7 tracking-tighter mt-5">
              Package-1 The Jungle Book
            </h1>
            <p className="text-xl font-Gotham leading-8 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quia sed consequuntur ab pariatur? Perferendis, adipisci at?
              Repudiandae, sit iusto?
            </p>
          </div>
          <div className="w-full border-b border-gray-700 mt-5" />
          <div className="px-10 mt-5">
            <h1 className="text-[21px] font-Gotham font-bold leading-8">
              Itinerary (Day Wise)
            </h1>
            <div className="mt-3">
              {itineraryData?.map((e, index) => (
                <Itinerary
                  className="mb-4"
                  key={index}
                  days={e?.days}
                  title={e?.title}
                  desc={e?.desc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/5">right side</div>
      </div>
    </div>
  );
}

export default index;
