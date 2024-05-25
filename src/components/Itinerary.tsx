import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";

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
        className={`w-1/2 rounded-full  px-5 py-1.5 flex flex-col items-center justify-between mt-4 cursor-pointer ${className} ${
          openId === key ? "bg-[#f8bd00]" : "bg-[#e0e0e0]"
        }`}
        onClick={() => handleToggle(key)}
      >
        <div className="flex justify-between items-center  w-full">
          <h1 className="font-Gotham text-sm">{days}</h1>
          <FaMinus className={`text-black`} />
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
