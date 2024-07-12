import Data from "@/components/Data";
import Highlight from "@/components/Highlight";
import Itinerary from "@/components/Itinerary";
import Model from "@/components/Model";
import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import Package from "@/components/Package";
import PackageCard from "@/components/PackageCard";
import PackageFAQ from "@/components/PackageFAQ";
import Packageexc from "@/components/Packageexc";
import Touricons from "@/components/Touricons";
import {
  useGetAllPackagesQuery,
  useGetPackageByIdQuery,
} from "@/queries/generated";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { start } from "repl";

function Index() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [selectedPrice, setSelectedPrice] = useState({
    start: null,
    end: null,
    id: null,
  });

  const handleClick = (price: any) => {
    setSelectedPrice(price);
  };

  const onClick = () => {
    setOpen(!open);
  };

  const { data } = useGetPackageByIdQuery(
    {
      getPackageByIdId: router?.query?.id?.toString() || "",
    },
    {
      enabled: !!router?.query?.id?.toString(),
    }
  );

  const { data: packages } = useGetAllPackagesQuery({
    startPrice: selectedPrice?.start,
    endPrice: selectedPrice?.end,
  });

  const packagesData = useMemo(() => {
    return packages?.getAllPackages?.data?.map((data) => {
      return {
        id: data?.id?.toString() || "",
        image: data?.image || "",
        title: data?.title || "",
        rooms: "3 rooms" || "",
        subtitle: "per person" || "",
        prices: data?.price?.toString() || "",
      };
    });
  }, [packages]);

  return (
    <div className="w-full">
      <NaveBar className="!bg-[#f8bd00]" />
      <div className="w-11/12 lg:w-[73%] 2xl:w-[70%] mx-auto mt-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full md:w-auto text-start">
          <h1 className="text-lg lg:text-[24px] 2xl:text-[32px] font-bold font-frinkRio whitespace-nowrap">
            {data?.getPackageById?.Category?.name}
          </h1>
          <p className="text-xs lg:text-[14px] 2xl:text-[16px] font-Gotham font-bold">
            1 Nights, 2 Guest{" "}
            <span className="text-[12px] 2xl:text-base font-semibold font-Gotham">
              (No extra charges)
            </span>
          </p>
        </div>
        <div className="w-1/2 flex flex-col min-[300px]:flex-row pr-0 2xl:pr-20 items-center justify-between md:justify-end lg:gap-20 2xl:gap-40 gap-2">
          <div className="w-full md:w-auto text-start">
            <h1 className="text-sm lg:text-base 2xl:text-[20px] font-Gotham font-regular">
              Start From
            </h1>
            <p className="flex items-center lg:text-2xl text-lg 2xl:text-[32px] font-Gotham font-bold leading-[28px]">
              <span>
                <Image
                  src="/currency.png"
                  alt=""
                  width={0}
                  height={0}
                  className="w-4 aspect-square"
                />
              </span>
              {data?.getPackageById?.price}*
            </p>
            <p className="text-[8px] font-Gotham pl-5">per person</p>
          </div>
          <div className="w-full md:w-auto flex justify-end" onClick={onClick}>
            <button className="bg-black text-white text-sm 2xl:text-lg tracking-widest px-8 py-3 font-Gotham font-medium ">
              ENQUERY
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto mt-5">
        <Image
          src={data?.getPackageById?.image || "/Layer 45.png"}
          alt=""
          width={0}
          height={0}
          className="w-full h-[350px] object-cover"
        />
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto flex lg:flex-row justify-between flex-col gap-10">
        <div className="w-full lg:w-3/5 mx-auto">
          <div className="2xl:px-10">
            <h1 className="text-base lg:text-lg 2xl:text-[26px] font-Gotham font-extrabold leading-7 tracking-tighter mt-5">
              {data?.getPackageById?.title}
            </h1>
            <p className="lg:text-sm text-xs 2xl:text-xl font-Gotham leading-8 mt-2">
              {data?.getPackageById?.title}
            </p>
          </div>
          <div className="w-11/12 border-b border-gray-700 mt-5" />
          {data?.getPackageById?.Itinerary?.length && (
            <div className="2xl:px-10 mt-5">
              <h1 className="lg:text-lg text-sm 2xl:text-[21px] font-Gotham font-bold leading-8">
                Itinerary (Day Wise)
              </h1>
              <div className="w-full lg:w-1/2 2xl:w-full mt-3">
                {data?.getPackageById?.Itinerary?.map((e, index) => (
                  <Itinerary
                    className="mb-1"
                    key={index?.toString()}
                    days={e?.name || ""}
                    title={e?.title}
                    desc={e?.description || ""}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="w-full mx-auto pb-5 mt-14">
            {!!data?.getPackageById?.Inclusions?.length && (
              <Package data={data?.getPackageById?.Inclusions as any} />
            )}

            {!!data?.getPackageById?.Exclusions?.length && (
              <Packageexc data={data?.getPackageById?.Exclusions as any} />
            )}
          </div>
          <div className="w-full mx-auto mt-14 2xl:px-6">
            <h1 className="text-xl font-Gotham font-bold lg:px-5">
              FAQ Regarding Corbett Saffari!
            </h1>
            {data?.getPackageById?.Faqs?.map((e, index) => (
              <PackageFAQ
                key={index?.toString()}
                question={e?.title || ""}
                answer={e?.description || ""}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/6 mx-auto mt-6">
          {data?.getPackageById?.Highlights?.length && (
            <Highlight data={data?.getPackageById?.Highlights as any} />
          )}
          <div className="w-full mt-5">
            {data?.getPackageById?.Includes?.length && (
              <Touricons data={data?.getPackageById?.Includes as any} />
            )}
          </div>
          <div className="w-full mt-10">
            <Data />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col font-gotham items-center justify-center mt-20 lg:mt-40">
        <h1 className="text-xl leading-[23px] font-medium text-gray-800 font-Gotham px-3">
          Best priced packages with in your budget
        </h1>

        <div className="w-11/12 lg:w-1/2 2xl:w-2/6 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2 mt-3">
          <div
            className={`${
              selectedPrice?.id === 1
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-6 py-2 flex justify-center cursor-pointer`}
            onClick={() => handleClick({ start: 1, end: 10000, id: 1 })}
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
        <div className="w-11/12 lg:w-[60%] 2xl:w-3/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
          {packagesData?.map((e, index) => (
            <PackageCard
              key={index}
              title={e?.title}
              image={e?.image || "/deer.png"}
              price={e?.prices}
              rooms={e?.rooms}
              subtitle={e?.subtitle}
            />
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
        <Model
          show={open}
          onClose={() => setOpen(false)}
          containerClass="!w-1/3"
        >
          <div className="bg-white">
            <Data />
          </div>
        </Model>
      </div>
      <Nfooter />
    </div>
  );
}

export default Index;