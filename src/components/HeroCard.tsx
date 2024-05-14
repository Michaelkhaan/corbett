import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  className?: string;
}

function HeroCard({ image, title, className }: Props) {
  return (
    <div className="w-[120px] aspect-square rounded-lg bg-black flex flex-col items-center justify-end pb-5">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        className={`w-14 ${className}`}
      />
      <h1 className="text-sm text-white mt-2">{title}</h1>
    </div>
  );
}

export default HeroCard;
