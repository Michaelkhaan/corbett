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
      <Image src="/deer.png" alt="" width={0} height={0} className="w-full" />
      <h1 className="text-xl font-semibold mt-2">{title}</h1>
      <h2 className="mt-2">{rooms}</h2>
      <h2 className="text-xl font-bold mt-2 flex items-center gap-1">
        <span>
          <Image
            src="/currency.png"
            alt=""
            width={0}
            height={0}
            className="w-6 aspect-square"
          />
        </span>
        {price}/ROOM
      </h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}

export default PackageCard;
