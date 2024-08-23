import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

//

interface Props {
  openId?: any;
  setOpenId?: (x: any) => {};
  className?: string;
  question: string;
  answer?: string;
  id: string;
}

function Faq({ className, question, answer, id, openId, setOpenId }: Props) {
  const handleToggle = (currentId: string) => {
    setOpenId?.(openId === currentId ? null : currentId);
  };

  return (
    <>
      <div
        className={`w-full rounded-lg lg:rounded-full px-5 py-3 flex flex-col items-center justify-between mt-4 cursor-pointer ${className} ${
          openId === id
            ? "bg-black text-white"
            : "bg-white border border-black rounded-full text-black"
        }`}
        onClick={() => handleToggle(id)}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="font-Gotham font-bold text-sm">{question}</h1>
          {openId === id ? (
            <FaMinus className="text-[#f8bd00]" />
          ) : (
            <FaPlus className="text-black" />
          )}
        </div>
      </div>
      <div
        className={`w-full text-black transition-all duration-[2000ms] ease-in-out px-2 mt-2 overflow-hidden ${
          openId === id ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-black text-xs font-Gotham 2xl:text-[15px]">
          {answer}
        </p>
      </div>
    </>
  );
}

export default Faq;
