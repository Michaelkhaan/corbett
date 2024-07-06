import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  className?: string;
  question: string;
  key: string;
  answer?: string;
}
function Itinerary({ className, question, answer, key }: Props) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id: any) => {
    console.log(id);
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <div
        className={`w-full rounded-lg lg:rounded-full  px-5 py-3 flex flex-col items-center justify-between mt-4 cursor-pointer ${className} ${
          openId === key
            ? "bg-black text-white"
            : "bg-white border border-black rounded-full text-black"
        }`}
        onClick={() => handleToggle(key)}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="font-Gotham font-bold text-sm">{question}</h1>
          {openId === key ? (
            <FaMinus className={`text-[#f8bd00]`} />
          ) : (
            <FaPlus className="text-black" />
          )}
        </div>
      </div>
      <div
        className={`w-full text-black transition-all duration-1000 ease-in-out px-2 mt-2 ${
          openId === key ? "" : "hidden"
        }`}
      >
        <p className="text-black text-xs font-Gotham 2xl:text-[15px]">
          {answer}
        </p>
      </div>
    </>
  );
}

export default Itinerary;
