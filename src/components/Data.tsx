import React from "react";

export default function Data() {
  return (
    <div className="w-full">
      <h1 className="text-[#000000] font-extrabold font-Gotham text-[16px] leading-[59px] px-6">
        Where do you want to go?
      </h1>
      <div>
        <div className="border border-[#5d5d5d] opacity-#0.000 w-[317px] h-[35px] flex items-center px-6">
          <p>Travel Date</p>
        </div>
        <div className="border border-[#5d5d5d] opacity-#0.000 w-[317px] h-[35px] flex items-center px-6">
          <p>Number</p>
        </div>
        <div className="border border-[#5d5d5d] opacity-#0.000 w-[317px] h-[35px] flex items-center px-6">
          <p>City</p>
        </div>
      </div>
    </div>
  );
}
