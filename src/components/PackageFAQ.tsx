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
            ? "bg-[#333]"
            : "bg-white border border-black rounded-full text-black"
        }`}
        onClick={() => handleToggle(id)}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className={`font-GothamBook font-bold lg:text-sm text-[12px] ${openId === id ? "text-white" : ""} `}>{question}</h1>
          {openId === id ? (
            <FaMinus className="text-[#f8bd00]" fill="#f8bd00" />
          ) : (
            <FaPlus className="text-black"  />
          )}
        </div>
      </div>
      <div
        className={`w-full text-black transition-all ease-in-out px-2 mt-2 overflow-hidden ${
          openId === id ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="text-black text-xs font-GothamBook 2xl:text-[15px]">
          {answer}
        </p>
      </div>
    </>
  );
}

export default Faq;
