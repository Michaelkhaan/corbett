import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  className?: string;
  Title: string;
  key: string;
  Dhikala?: string;
  desc?: string;
  desc1?: string;
  canter?: string;
  canterdesc?: string;
  Elephant?: string;
  Elephdesc?: string;
  jeep?: string;
  jeepdesc?: string;
}
function JungleSaferi({
  className,
  Title,
  Dhikala,
  desc,
  desc1,
  canter,
  canterdesc,
  Elephant,
  Elephdesc,
  jeep,
  jeepdesc,
  key,
}: Props) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id: any) => {
    console.log(id);
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <div
        className={`w-full rounded-lg lg:rounded-full  px-5 py-2 flex flex-col items-center justify-between mt-4 cursor-pointer ${className} ${
          openId === key
            ? "bg-black text-white"
            : "bg-white border border-black rounded-full text-black"
        }`}
        onClick={() => handleToggle(key)}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-lg tracking-wider">{Title}</h1>
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
        <h5 className="text-black text-lg font-bold mt-2">{Dhikala}</h5>
        <p className="text-black text-xs">{desc}</p>
        <p className=" text-black text-xs mt-4 tracking-wide">{desc1}</p>
        <h1 className="text-black text-lg font-bold mt-6">{canter}</h1>
        <p className=" text-black text-xs tracking-wide mt-1">{canterdesc}</p>
        <h1 className="text-black text-lg font-bold mt-6">{Elephant}</h1>
        <p className="text-black text-xs tracking-wide mt-1">{Elephdesc}</p>
        <h1 className="text-black text-lg font-bold mt-6">{jeep}</h1>
        <p className="text-black text-xs tracking-wide mt-1">{jeepdesc}</p>
      </div>
    </>
  );
}

export default JungleSaferi;
