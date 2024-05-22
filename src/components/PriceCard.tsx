import Image from "next/image";
import React from "react";
import { LuCheckCircle } from "react-icons/lu";

interface Props {
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  subdesc: string;
  image: string;
}

function PriceCard({ name, title, subtitle, desc, subdesc, image }: Props) {
  return (
    <div className="w-full bg-white rounded-lg shadow-card px-3 py-6">
      <span className="w-14 aspect-square border-2 border-[#3f2892] rounded-full flex items-center justify-center">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          className="w-10 aspect-square"
        />
      </span>
      <h1 className="text-lg font-bold font-Gotham mt-4">{name}</h1>
      <div className="flex items-center gap-2 mt-2">
        <LuCheckCircle className="text-[#3f2892]" />
        <h1 className="text-[10px] font-Gotham">{title}</h1>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <LuCheckCircle className="text-[#3f2892]" />
        <h1 className="text-[10px] font-Gotham">{subtitle}</h1>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <LuCheckCircle className="text-[#3f2892]" />
        <h1 className="text-[10px] font-Gotham">{desc}</h1>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <LuCheckCircle className="text-[#3f2892]" />
        <h1 className="text-[10px] font-Gotham">{subdesc}</h1>
      </div>
    </div>
  );
}

export default PriceCard;
