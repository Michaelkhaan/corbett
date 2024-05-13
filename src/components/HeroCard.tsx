import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
}

function HeroCard({ image, title }: Props) {
  return (
    <div className="w-[100px] aspect-square rounded-lg bg-black flex flex-col items-center justify-center">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        className="w-16 aspect-square"
      />
      <h1 className="text-sm text-white">{title}</h1>
    </div>
  );
}

export default HeroCard;
