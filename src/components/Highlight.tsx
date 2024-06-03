import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Highlight() {
  return (
    <div className="w-full 2xl:px-8">
      <h1 className="text-xl text-[#000000] font-bold font-Gotham leading-[26px] tracking-wide lg:px-4">
        Highlights
      </h1>
      <ul className="text-[#000000] leading-[34px] font-Gotham  text-[16px] mt-3">
        <span className="flex items-center gap-3">
          <Image src="Layer 46.png" alt="" width={20} height={20} />{" "}
          <li>Beautiful beachfront</li>
        </span>
        <span className="flex items-center gap-3">
          <Image src="Layer 46.png" alt="" width={20} height={20} />{" "}
          <li>Ultimate outdoor pool</li>
        </span>
        <span className="flex items-center gap-3">
          {" "}
          <Image src="Layer 46.png" alt="" width={20} height={20} />
          <li>Doctor on call</li>
        </span>
        <span className="flex items-center gap-3">
          <Image src="Layer 46.png" alt="" width={20} height={20} />
          <li>Romantic dinner arrangements</li>
        </span>
        <span className="flex items-center gap-3">
          {" "}
          <Image src="Layer 46.png" alt="" width={20} height={20} />{" "}
          <li>Modern rooms</li>
        </span>
      </ul>
    </div>
  );
}
