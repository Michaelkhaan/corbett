import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import PackageCard from "@/components/PackageCard";
import { useGetAllPackagesQuery } from "@/queries/generated";
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
    router.push("/packages/" + id);
  };

  const handleClick = (price: any) => {
    setSelectedPrice(price);
  };

  const priceRanges = [
    { start: null, end: null, id: 0, label: "All" }, 
    { start: 10000, end: 20000, id: 2, label: "Rs 10,000 to Rs 20,000" },
    { start: 30000, end: 50000, id: 3, label: "Rs 30,000 to Rs 50,000" },
  ];
  
  

  const { data: packages } = useGetAllPackagesQuery({
    startPrice: selectedPrice?.start,
    endPrice: selectedPrice?.end,
  });

  const packagesData = useMemo(() => {
    return packages?.getAllPackages?.data?.map((data) => {
      return {
        id: data?.id?.toString() || "",
        images: data?.images || [],
        title: data?.name || "",
        rooms: `${data?.day} ${data?.night}`,
        subtitle: "per person" || "",
        prices: data?.price?.toString() || "",
      };
    });
  }, [packages]);

  console.log(packages);

  return (
    <div className="w-full">
      <NaveBar className="!bg-[#f8bd00] " mainClassName="!relative" />
      <div className="w-full flex justify-center mt-2">
        <div className="w-11/12 lg:w-3/4 flex">
          <p
            className="cursor-pointer pr-1 font-GothamBook text-[12px] lg:text-[14px] flex items-center"
            onClick={() => router.push("/")}
          >
            Home <span className="pl-[3px] mt-[1px]">{">"}</span>
          </p>
          <p className=" pr-1 font-GothamBook text-[12px] lg:text-[14px] flex items-center">
            package <span className="pl-[3px] mt-[1px]"></span>
          </p>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col font-GothamBook items-center justify-center my-6 ">
        <h1 className="2xl:text-[26.79px] lg:text-[26.79px] sm:text-[47px] text-[28px] leading-[23.69px] font-extrabold font-frinkRio border-b-2 border-black uppercase">
          All Packages
        </h1>

        <div className="w-11/12 lg:w-2/3 2xl:w-1/2 grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-2 gap-y-3 mt-3">
          {priceRanges.map((price) => (
            <div
              key={price.id}
              className={`${
                selectedPrice?.id === price.id
                  ? "bg-[#f8bd01] text-white"
                  : "bg-white border text-black"
              } rounded-full px-6 py-2 flex justify-center cursor-pointer`}
              onClick={() =>
                handleClick({
                  start: price.start,
                  end: price.end,
                  id: price.id,
                })
              }
            >
              <h1
                className={`text-sm font-GothamBook  ${
                  selectedPrice?.id === price.id ? " text-white" : " text-black"
                }`}
              >
                {price.label}
              </h1>
            </div>
          ))}
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
                rooms={e?.rooms}
                subtitle={e?.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
      <Nfooter />
    </div>
  );
}

export default Index;
