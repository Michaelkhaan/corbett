import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  desc: string;
}

function TourCard({ image, title, desc }: Props) {
  return (
    <div className="w-full flex items-start gap-3 mt-5">
      <div className="!w-16 !aspect-square bg-[#f8f3f9] rounded-full flex items-center justify-center">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          className="w-8 aspect-square absolute"
        />
      </div>
      <div className="w-11/12">
        <h1 className="lg:text-base 2xl:text-2xl  font-semibold text-gray-600">
          {title}
        </h1>
        <p className="text-sm  text-gray-500   mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default TourCard;
