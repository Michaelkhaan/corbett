import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  desc: string;
}

function TourCard({ image, title, desc }: Props) {
  return (
    <div className="w-full flex items-center gap-3 mt-5">
      <span className="w-28 aspect-square bg-[#f8f3f9] rounded-full flex items-center justify-center">
        <Image src={image} alt="" width={0} height={0} className="w-8" />
      </span>
      <div>
        <h1 className="lg:text-base 2xl:text-2xl font-Gotham font-semiblod text-gray-700">
          {title}
        </h1>
        <p className="text-[10px] text-gray-500 font-Gotham mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default TourCard;
