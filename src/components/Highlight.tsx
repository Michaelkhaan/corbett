import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface Data {
  id: any;
  name: string;
  package_id: any;
}

export default function Highlight({ data }: { data: Data[] }) {
  return (
    <div className="w-full 2xl:px-8">
      <h1 className="lg:text-lg text-base 2xl:text-xl text-[#000000] font-bold font-Gotham leading-[26px] tracking-wide lg:px-4">
        Highlights
      </h1>
      <ul className="text-[#000000] leading-[34px] font-Gotham text-sm 2xl:text-[16px] mt-3">
        {data?.map((item, index) => (
          <span key={index} className="flex items-center gap-3">
            <Image
              src="/Layer 46.png"
              alt=""
              width={0}
              height={0}
              className="w-4 2xl:w-5 aspect-square"
            />{" "}
            <li>{item?.name}</li>
          </span>
        ))}
      </ul>
    </div>
  );
}
