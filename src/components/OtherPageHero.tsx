import NaveBar from "@/components/NaveBar";
import Image from "next/image";
const OtherPageHero = ({ image, name }: any) => {
  return (
    <div className="w-full aspect-[1920/750] min-h-[300px] flex flex-col items-center overflow-hidden relative">
      <Image
        src={image}
        alt=""
        sizes="100%"
        layout="fill"
        className=" object-cover absolute inset-0 w-full h-full "
      />
      <NaveBar />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white break-words text-center font-frinkRio uppercase 2xl:text-[52px] text-4xl lg:text-6xl 2xl:leading-[36px] leading-8 font-semibold">
          {name}
        </h1>
      </div>
      <Image
        src="/VectorSmart.png"
        alt="Vector Smart"
        width={0}
        height={0}
        className="w-full object-cover absolute bottom-0 left-0"
      />
    </div>
  );
};

export default OtherPageHero;
