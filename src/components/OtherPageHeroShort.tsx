import NaveBar from "@/components/NaveBar";
import Image from "next/image";
const OtherPageHeroShort = ({ image, name }: any) => {
  return (
    <div className="w-full aspect-[1920/490] min-h-[300px] flex flex-col items-center overflow-hidden relative">
      <Image
        src={image}
        alt=""
        sizes="100%"
        layout="fill"
        className=" object-cover absolute inset-0 w-full h-full  "
      />
      <NaveBar />
      <h1 className="lg:text-6xl text-4xl 2xl:text-7xl text-white font-frinkRio font-bold left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] absolute">
        {name}
      </h1>
    </div>
  );
};

export default OtherPageHeroShort;
