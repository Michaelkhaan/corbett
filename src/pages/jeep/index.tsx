import Attractions from "@/components/Attractions";
import Experience from "@/components/Experince";
import Hero from "@/components/Hero";
import NaveBar from "@/components/NaveBar";
import OverView from "@/components/OverView";
import TariffPrice from "@/components/TariffPrice";
import Image from "next/image";

const Jeep = () => {
  return (
   <div className="w-full">
   <div className="w-full aspect-[1920/790] min-h-[300px] flex flex-col items-center overflow-hidden relative">
   <Image
    src="/jeephero.png"
     alt=""
     sizes="100%"
     layout="fill"
     className=" object-cover absolute inset-0 w-full h-full -z-10 "
   />
   <NaveBar />
   <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white font-frinkRio 2xl:text-[52px] text-2xl 2xl:leading-[36px] leading-5 font-bold">
          Jeep Sapari
        </h1>
      </div>
          <Image
            src="/vectorsmart.png"
            alt="Vector Smart"
            width={0}
            height={0}
            className="w-full object-cover absolute bottom-0 left-0"
          />
    
    </div>
    <div className="w-full mt-5 flex justify-center items-center flex-col">
          <h1 className="font-frinkRio leading-8 font-semibold px-4 lg:text-lg text-base">Explore the world with JM Corbett Jeep Safari</h1>
          <p className="text-center w-full lg:text-[15px] text-xs px-4 font-frinkRio">
            Welcome to JM Corbett Jeep Safari,your gateway to adventure in the heart of nature's bounty!
          <br/>  Nestled amidst the picturesque landscapes of Jim Corbett National Park, <br/>
            our safari experiences offer an unparalleled opportunity to immerse yourself <br/>
             in the beauty and diversity of indian
          </p>
        </div>
        <div>
          
          <OverView/>
          <div className="w-full mt-12">
          <Experience/>
          </div>
          <TariffPrice/>
          <Attractions/>
        </div>
    </div>
  );
};

export default Jeep;


 {/* <div>
        <div className="w-full relative flex justify-center items-center flex-col">
          <Image
            src="/jeephero.png"
            alt="Jeep Hero"
            width={0}
            height={0}
            className="w-full object-cover"
          />
          <h1 className="text-white font-frinkRio 2xl:text-[39px] text-2xl 2xl:leading-[36px] leading-5 font-bold absolute">
            Jeep Sapari
          </h1>
          <Image
            src="/vectorsmart.png"
            alt="Vector Smart"
            width={0}
            height={0}
            className="w-full object-cover absolute bottom-0 left-0"
          />
        </div>
        <div className="w-full mt-5 flex justify-center items-center flex-col">
          <h1>Explore the world with JM Corbett Jeep Safari</h1>
          <p className="text-center w-[54%]">
            Welcome to JM Corbett Jeep Safari,your gateway to adventure in the heart of nature's bounty!
            Nestled amidst the picturesque landscapes of Jim Corbett National Park,
            potentially add some custom CSS. Here's a solution that addresses
            your requirement:
          </p>
        </div>
      </div> */}