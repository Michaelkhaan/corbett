import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  openId: string | null;
  setOpenId: (x: any) => {};
  className?: string;
  days: string;
  index: string;
  title?: string;
  desc?: string;
  paraClass?: string;
  isOpen?: boolean;
}

function Itinerary({
  openId,
  setOpenId,
  className,
  days,
  title,
  desc,
  index: key,
  paraClass,
}: Props) {
  const handleToggle = (id: any) => {
    setOpenId((pre: any) => (pre === id ? null : id));
  };
  return (
    <>
      <div
        className={`w-full sm:w-1/3 lg:w-full xl:w-[70%] 2xl:w-1/2 rounded-lg lg:rounded-full px-5 py-1.5 flex flex-col items-center justify-between mt-4 cursor-pointer duration-500 transition-all ${className} ${
          openId === key ? "bg-[#f8bd00]" : "bg-[#e0e0e0]"
        }`}
        onClick={() => handleToggle(key)}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="font-Gotham font-bold text-sm">{days}</h1>
          {openId === key ? (
            <FaMinus className="text-black" />
          ) : (
            <FaPlus className="text-black" />
          )}
        </div>
      </div>
      <div
        className={`w-full text-black overflow-hidden transition-max-height duration-1000 ease-in-out ${
          openId === key ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } ${paraClass}`}
      >
        <h1 className="text-sm text-black font-Gotham font-extrabold">
          {title}
        </h1>
        <p className="text-black text-xs font-Gotham">{desc}</p>
      </div>
    </>
  );
}

export default Itinerary;
