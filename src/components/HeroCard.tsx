import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  className?: string;
  link?: string;
}

function HeroCard({ image, title, className, link = '#'}: Props) {
  return (
    <Link
      className="w-[14%] min-w-[145px] max-w-[210px] rounded-[20px] bg-black/70 flex flex-col items-center justify-end p-5 py-5  hover:scale-[1.1]"
      href={link}
    >
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        className={`${className}`}
      />
      <h1 className="text-[18px] font-GothamBook font-semibold text-white mt-2">
        {title}
      </h1>
    </Link>
  );
}

export default HeroCard;
