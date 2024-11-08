import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image?: string;
  price: string;
  rooms: string;
  subtitle: string;
}

function PackageCard({ title, image, price, rooms, subtitle }: Props) {
  console.log(image, "image");
  return (
    <div className="w-full mt-4">
      <Image
        src={image || "/deer.png"}
        alt=""
        width={0}
        height={0}
        className="w-full lg:h-32 object-cover"
      />
      <h1 className="text-[16px] mt-2 font-GothamBook font-bold tracking-tight">
        {title}
      </h1>
      <h2 className="text-[10px] uppercase text-[#4c4b4b] font-GothamBook font-medium mt-1">
        {rooms ? rooms : null}
      </h2>
      <h2 className="text-sm font-bold font-GothamBook flex items-center gap-1 mt-1">
        Rs
        {" "+price}
      </h2>
      <p className="text-[#bbbbbb] text-xs font-GothamBook -mt-1">{subtitle}</p>
    </div>
  );
}

export default PackageCard;
