import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import PackageCard from "@/components/PackageCard";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Index() {
  const [selectedPrice, setSelectedPrice] = useState("lessThan10k");
  const router = useRouter();

  const onClick = (id: string) => {
    router.push("/packages/" + id);
  };

  const handleClick = (price: any) => {
    setSelectedPrice(price);
  };

  const packagesData = [
    {
      id: "1",
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      id: "2",
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      id: "3",
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      id: "4",
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      id: "5",
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      id: "6",
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      id: "7",
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      id: "8",
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
  ];

  return (
    <div className="w-full">
      <NaveBar className="!bg-[#f8bd00]" />
      <div className="w-full mx-auto flex flex-col font-gotham items-center justify-center mt-20 lg:mt-10">
        <h1 className="text-xl leading-[23px] font-medium text-gray-800 font-Gotham px-3">
          Best priced packages with in your budget
        </h1>

        <div className="w-11/12 lg:w-1/2 2xl:w-2/6 grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-2 mt-3">
          <div
            className={`${
              selectedPrice === "lessThan10k"
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-6 py-2 flex justify-center cursor-pointer`}
            onClick={() => handleClick("lessThan10k")}
          >
            <h1 className="text-[10px] font-Gotham">Less than Rs 10,000</h1>
          </div>
          <div
            className={`${
              selectedPrice === "10kTo20k"
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-2 flex justify-center py-2 cursor-pointer`}
            onClick={() => handleClick("10kTo20k")}
          >
            <h1 className="text-xs font-Gotham">Rs 10,000 to Rs 20,000</h1>
          </div>
          <div
            className={`${
              selectedPrice === "30kTo50k"
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-1 py-2 flex justify-center cursor-pointer`}
            onClick={() => handleClick("30kTo50k")}
          >
            <h1 className="text-[10.74px] leading-4 font-Gotham">
              Rs 30,000 to Rs 50,000
            </h1>
          </div>
        </div>
        <div className="w-11/12 lg:w-3/4 2xl:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
          {packagesData?.map((e) => (
            <div
              key={e.id}
              onClick={() => onClick(e.id)}
              className="cursor-pointer"
            >
              <PackageCard
                title={e?.title}
                image={e?.image}
                price={e?.prices}
                rooms={e?.rooms}
                subtitle={e?.subtitle}
              />
            </div>
          ))}
        </div>
        <div className="w-full mt-8 lg:mt-24 mb-8 lg:mb-16">
          <h1 className="text-lg font-medium font-Gotham text-center">
            LET YOUR{" "}
            <span className="text-lg font-bold font-Gotham">SAFFARI TOUR</span>{" "}
            WITH SPECIAL OFFERS AND DEALS!
          </h1>
          <div className="w-full flex items-center justify-center gap-2 mt-3 pb-5 px-4">
            <input
              type="text"
              placeholder="+91 000000000"
              className="border border-black outline-none bg-transparent px-2 py-1 w-full lg:w-1/5"
            />
            <button className="bg-black rounded-sm px-4 py-1 text-white font-bold">
              GO
            </button>
          </div>
        </div>
      </div>
      <Nfooter />
    </div>
  );
}

export default Index;
