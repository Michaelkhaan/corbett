import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  className?: string;
}

function HeroCard({ image, title, className }: Props) {
  return (
    <div className="w-[14%] min-w-[170px] max-w-[210px] rounded-[20px] bg-black flex flex-col items-center justify-end p-5 py-8">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        className={`${className}`}
      />
      <h1 className="text-[20px] font-Gotham font-semibold text-white mt-2">{title}</h1>
    </div>
  );
}

export default HeroCard;
