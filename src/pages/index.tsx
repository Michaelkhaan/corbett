import Image from "next/image";
import { Inter } from "next/font/google";
import NaveBar from "@/components/NaveBar";
import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import HeroCard from "@/components/HeroCard";
import ButtonCard from "@/components/ButtonCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const heroCard = [
    {
      image: "/nightsleep.png",
      title: "Night Stay",
    },
    {
      image: "/jeep.png",
      title: "Saffari",
    },
    {
      image: "/packages.png",
      title: "Packages",
    },
    {
      image: "/resort.png",
      title: "Resorts",
    },
  ];
  return (
    <div className="w-full">
      {/* <NaveBar /> */}
      <Hero />
      <div className="w-11/12 lg:w-1/2 flex flex-wrap justify-center mx-auto gap-5 lg:-mt-14">
        {heroCard?.map((e, index) => (
          <HeroCard key={index} image={e?.image} title={e?.title} />
        ))}
      </div>
      <div className="w-11/12 lg:w-1/2 mx-auto mt-10">
        <ButtonCard />
      </div>
      <div className="w-full mt-20 flex flex-col items-center">
        <div className="px-10 lg:px-0">
          <h1 className="text-[18px] lg:text-[26.5px] font-bold">
            Explore the Untamed Destinations of jim corbett
          </h1>
          <p className="text-base lg:w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            minima optio hic rerum nemo reprehenderit.
          </p>
        </div>
        <Explore />
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-extrabold">OUR PACKAGES</h1>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat
          eos facere similique sit rem.
        </p>
        <div className="w-full flex flex-col items-center justify-center mt-10">
          <h1 className="text-xl font-semibold">
            Best Price Packages{" "}
            <span className="text-sm">With in Your budget</span>
          </h1>
          <div className="w-full flex items-center justify-center gap-5 mt-3">
            <div className="bg-[#f8bd01] rounded-full px-6 py-1">
              <h1 className="text-xs text-white">Less then Rs 10,000</h1>
            </div>
            <div className="bg-white border rounded-full px-6 py-1">
              <h1 className="text-xs text-black">Less then Rs 10,000</h1>
            </div>
            <div className="bg-white border rounded-full px-6 py-1">
              <h1 className="text-xs text-black">Less then Rs 10,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
