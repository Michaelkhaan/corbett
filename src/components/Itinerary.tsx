import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  className?: string;
  days: string;
  key: string;
  title?: string;
  desc?: string;
}
function Itinerary({ className, days, title, desc, key }: Props) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id: any) => {
    console.log(id);
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <div
        className={`w-full 2xl:w-1/3 rounded-lg lg:rounded-full  px-5 py-1.5 flex flex-col items-center justify-between mt-4 cursor-pointer ${className} ${
          openId === key ? "bg-[#f8bd00]" : "bg-[#e0e0e0]"
        }`}
        onClick={() => handleToggle(key)}
      >
        <div className="flex justify-between items-center  w-full">
          <h1 className="font-Gotham font-bold text-sm">{days}</h1>
          {openId === key ? (
            <FaMinus className={`text-black`} />
          ) : (
            <FaPlus className="text-black" />
          )}
        </div>
      </div>
      <div
        className={`w-full text-black transition-all duration-1000 ease-in-out  ${
          openId === key ? "" : "hidden"
        }`}
      >
        <h1 className="text-sm text-black font-Gotham">{title}</h1>
        <p className="text-black text-xs font-Gotham">{desc}</p>
      </div>
    </>
  );
}

export default Itinerary;
