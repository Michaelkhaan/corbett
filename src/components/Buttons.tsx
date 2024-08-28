import React, { useState } from "react";

function Buttons({ tab , tabs , setTab} : any) {
  
  return (
    <div className="w-full md:w-1/2 mx-auto grid grid-cols-3 items-center justify-center gap-0.5 px-4">
      {tabs?.map((e:any, index:number) => (
        <button
          key={index}
          onClick={() => setTab(e?.key)}
          className={` ${
            tab === e.key ? "bg-[#f8bd01] text-white" : "bg-white text-black"
          }   lg:px-16 py-3  text-sm lg:text-xl font-bold font-GothamBook`}
        >
          {e?.name}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
