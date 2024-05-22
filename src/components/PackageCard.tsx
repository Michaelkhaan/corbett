import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  price: string;
  rooms: string;
  subtitle: string;
}

function PackageCard({ title, image, price, rooms, subtitle }: Props) {
  return (
    <div className="w-full mt-4">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        className="w-full lg:h-24 object-cover"
      />
      <h1 className="text-[16px] mt-2 font-Gotham font-extrabold tracking-tight">
        {title}
      </h1>
      <h2 className="text-[10px] text-[#4c4b4b] font-Gotham font-medium mt-1">
        {rooms}
      </h2>
      <h2 className="text-sm font-bold font-Gotham flex items-center gap-1 mt-1 -ml-1">
        <span>
          <Image
            src="/currency.png"
            alt=""
            width={0}
            height={0}
            className="w-4 aspect-square"
          />
        </span>
        {price}/ROOM
      </h2>
      <p className="text-[#bbbbbb] text-xs font-Gotham -mt-1">{subtitle}</p>
    </div>
  );
}

export default PackageCard;
