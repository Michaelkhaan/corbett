import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import PackageCard from "@/components/PackageCard";
import { useGetAllNightStayQuery, useGetAllPackagesQuery } from "@/queries/generated";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { start } from "repl";

function Index() {
  const [selectedPrice, setSelectedPrice] = useState({
    start: null,
    end: null,
    id: null,
  });
  const router = useRouter();

  const onClick = (id: string) => {
    router.push("/nightstay/" + id);
  };

  const handleClick = (price: any) => {
    setSelectedPrice(price);
  };

  const {data}=useGetAllNightStayQuery({
    startPrice: selectedPrice?.start,
    endPrice: selectedPrice?.end,
  })


  const packagesData = useMemo(() => {
    return data?.getAllNightStay?.data?.map((data)=>{
      return {
        id: data?.id?.toString() || "",
        images: data?.images || [],
        title: data?.name || "",
        subtitle: "per person" || "",
        prices: data?.price?.toString() || "",
      };
    });
  }, [data]);


  console.log(data);

  return (
    <div className="w-full">
      <NaveBar className="!bg-[#f8bd00]" />
      <div className="w-full flex justify-center mt-2">
        <div className="w-11/12 lg:w-3/4 flex">
          <p
            className="cursor-pointer pr-1 font-Gotham text-[10px] flex items-center"
            onClick={() => router.push("/")}
          >
            Home <span className="pl-[3px] mt-[1px]">{">"}</span>
          </p>
          <p className=" pr-1 font-Gotham text-[10px] flex items-center">
          <Link href={""}> Resorts </Link>  <span className="font-bold"> <Link href={"/nightstay"}> </Link> </span> <span className="pl-[3px] mt-[1px]"></span>
          </p>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col font-gotham items-center justify-center lg:mt-1">
        
      <h1 className="2xl:text-[26.79px] lg:text-[26.79px] sm:text-[47px] text-[20px] leading-[23.69px] font-extrabold font-frinkRio">
          OUR RESORTS
        </h1>
        <p className="2xl:text-base text-[15px] leading-[20px] text-center font-Gotham lg:w-[630px] mt-2">
          We craft our packages based on your budget, taste & preference however these are 
           some most popular packages our guest has chosen.
        </p>
        <h1 className="text-xl leading-[23px] font-bold text-gray-600 font-GothamBook px-3 mt-3">
          Best priced packages with in your budget
        </h1>

        <div className="w-11/12 lg:w-1/2 2xl:w-2/6 grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-2 mt-3">
          <div
            className={`${
              selectedPrice?.id === 1
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-6 py-2 flex justify-center cursor-pointer`}
            onClick={() => handleClick({ start: 0, end: 10000, id: 1 })}
          >
            <h1 className="text-[10px] font-Gotham">Less than Rs 10,000</h1>
          </div>
          <div
            className={`${
              selectedPrice?.id === 2
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-2 flex justify-center py-2 cursor-pointer`}
            onClick={() => handleClick({ start: 10000, end: 20000, id: 2 })}
          >
            <h1 className="text-xs font-Gotham">Rs 10,000 to Rs 20,000</h1>
          </div>
          <div
            className={`${
              selectedPrice?.id === 3
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-1 py-2 flex justify-center cursor-pointer`}
            onClick={() => handleClick({ start: 30000, end: 50000, id: 3 })}
          >
            <h1 className="text-[10.74px] leading-4 font-Gotham">
              Rs 30,000 to Rs 50,000
            </h1>
          </div>
        </div>
        <div className="w-11/12 mb-5 lg:w-3/4 2xl:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
          {packagesData?.map((e) => (
            <div
              key={e.id}
              onClick={() => onClick(e.id)}
              className="cursor-pointer"
            >
              <PackageCard
                title={e?.title}
                image={e?.images?.[0] as string}
                price={e?.prices}
                rooms={""}
                subtitle={e?.subtitle}
              />
            </div>
          ))}
        </div>
        {/* <div className="w-full mt-8 lg:mt-24 mb-8 lg:mb-16">
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
        </div> */}
      </div>
      <Nfooter />
    </div>
  );
}

export default Index;
