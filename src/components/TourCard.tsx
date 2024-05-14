import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  desc: string;
}

function TourCard({ image, title, desc }: Props) {
  return (
    <div className="w-full flex items-center gap-2 mt-5">
      <span className="w-32 aspect-square bg-[#f8f3f9] rounded-full flex items-center justify-center">
        <Image src={image} alt="" width={0} height={0} className="w-8" />
      </span>
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default TourCard;
