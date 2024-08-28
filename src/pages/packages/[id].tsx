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
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ItenararyList from "@/components/ItenararyList";
import FaqList from "@/components/FaqList";

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

  const { data, isPending } = useGetPackageByIdQuery(
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
        images: data?.images || [],
        title: data?.title || "",
        rooms: "",
        subtitle: "per person" || "",
        prices: data?.price?.toString() || "",
      };
    });
  }, [packages]);

  return (
    <div className="w-full">
      <NaveBar className="!bg-[#f8bd00]" />
      <div className="w-full flex justify-center mt-2">
        <div className="w-11/12 lg:w-3/4 flex">
          <p
            className="cursor-pointer pr-1 font-GothamBook text-[10px] flex items-center"
            onClick={() => router.push("/")}
          >
            Home <span className="pl-[3px] mt-[1px]">{">"}</span>
          </p>
          <p
            className="cursor-pointer pr-1 font-GothamBook text-[10px] flex items-center"
            onClick={() => router.push("/packages")}
          >
            Package <span className="pl-[3px] mt-[1px]">{">"}</span>
          </p>
          <p className=" pr-1 font-GothamBook text-[10px] font-bold flex items-center">
            {data?.getPackageById?.name}{" "}
            <span className="pl-[3px] mt-[1px]"></span>
          </p>
        </div>
      </div>

      <div className="w-11/12 lg:w-3/4 2xl:w-[3/4] mx-auto  flex flex-col md:flex-row md:items-center md:justify-between gap-2 ">
        <div className="w-full md:w-auto text-left ">
          <h1 className="text-base lg:text-lg 2xl:text-[26px] font-Gotham font-extrabold leading-7 tracking-tighter  ">
            {data?.getPackageById?.name}
          </h1>
          {data?.getPackageById?.night || data?.getPackageById?.day ? (
            <p className="text-xs lg:text-[14px] 2xl:text-[16px] font-GothamBook font-bold">
              {data?.getPackageById?.night
                ? data?.getPackageById?.night + ", "
                : ""}
              {data?.getPackageById?.day ? data?.getPackageById?.day : ""}
              {/* Nights, 2 Guest */}
              <span className="text-[12px] 2xl:text-base font-semibold font-GothamBook">
                {" "}
                (No extra charges)
              </span>
            </p>
          ) : null}
        </div>
        <div className="w-full md:w-1/2 flex flex-col min-[300px]:flex-row  pr-0 2xl:pr-20 items-center justify-between md:justify-end lg:gap-20 2xl:gap-40 gap-2">
          <div className="w-full md:w-auto text-start">
            <h1 className="text-xm 2xl:w-[150px] lg:text-base 2xl:text-[16px] font-GothamBook 2xl:break-words font-regular leading-[20px] lg:leading-[20px]">
              Start From
            </h1>
            <p className="flex items-center lg:text-3xl text-lg 2xl:text-[36px] font-GothamBook font-bold leading-[20px]">
              <span className="lg:text-2xl">
              ₹
              </span>
              {data?.getPackageById?.price}*
            </p>
            <p className="text-[12px] font-GothamBook leading-[2px]">per person</p>
          </div>
          <div
            className="w-full md:w-auto flex justify-start sm:justify-end"
            onClick={onClick}
          >
            <button className="bg-black text-white text-sm 2xl:text-lg tracking-widest px-8 py-3 font-GothamBook font-medium ">
              ENQUERY
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto mt-4">
        <Swiper
          className="w-full h-full"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          navigation={true}
          speed={3000}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {data?.getPackageById?.images?.map((e, index) => (
            <SwiperSlide key={index}>
              <Image
                src={e?.toString() || "/Layer 45.png"}
                alt=""
                width={0}
                height={0}
                className="w-full h-[350px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto 2xl:w-3/4  flex lg:flex-row justify-between flex-col gap-10">
        <div className="w-full lg:w-3/4 mx-auto text-left 2xl:text-left">
          <div className=" mt-5">
            {isPending ? (
              <div className="bg-slate-200 animate-pulse h-4 w-1/2 md:w-1/3" />
            ) : (
              <h1 className="text-base lg:text-lg 2xl:text-[26px] font-Gotham  font-extrabold leading-7 tracking-tighter ">
                {data?.getPackageById?.title}
              </h1>
            )}

            {isPending ? (
              Array.from({ length: 6 }).map((e, index) => (
                <div
                  key={index?.toString()}
                  className={`bg-slate-200 animate-pulse h-2 mt-1 ${
                    index === 5 ? "w-1/2" : ""
                  }`}
                />
              ))
            ) : (
              <p className="lg:text-xs text-xs 2xl:text-xl font-GothamBook leading-8 mt-2 text-wrap break-words">
                {data?.getPackageById?.description}
              </p>
            )}
          </div>
          <div className="w-11/12 border-b border-gray-700 mt-5" />
          {data?.getPackageById?.Itinerary?.length ? (
            <ItenararyList data={data?.getPackageById?.Itinerary} />
          ) : null}
          <div className="w-full mx-auto pb-5 mt-14">
            {!!data?.getPackageById?.Inclusions?.length || isPending ? (
              <Package
                data={data?.getPackageById?.Inclusions as any}
                isLoading={isPending}
              />
            ) : null}

            {!!data?.getPackageById?.Exclusions?.length || isPending ? (
              <Packageexc
                data={data?.getPackageById?.Exclusions as any}
                isLoading={isPending}
              />
            ) : null}
          </div>

          {data?.getPackageById?.Faqs?.length ? (
            <FaqList data={data?.getPackageById?.Faqs as any} />
          ) : null}
        </div>
        <div className="w-full lg:w-2/6 mx-auto mt-6">
          {data?.getPackageById?.Highlights?.length || isPending ? (
            <Highlight
              data={data?.getPackageById?.Highlights as any}
              isLoading={isPending}
            />
          ) : null}
          <div className="w-full mt-5">
            {data?.getPackageById?.Includes?.length || isPending ? (
              <Touricons
                data={data?.getPackageById?.Includes as any}
                isLoading={isPending}
              />
            ) : null}
          </div>
          <div className="w-full mt-10">
            <Data />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col font-GothamBook items-center justify-center mt-20">
        <h1 className="text-xl leading-[23px] font-medium text-gray-800 font-GothamBook px-3">
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
            <h1 className="text-sm font-GothamBook">Less than Rs 10,000</h1>
          </div>
          <div
            className={`${
              selectedPrice?.id === 2
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-2 flex justify-center py-2 cursor-pointer`}
            onClick={() => handleClick({ start: 10000, end: 20000, id: 2 })}
          >
            <h1 className="text-xs font-GothamBook">Rs 10,000 to Rs 20,000</h1>
          </div>
          <div
            className={`${
              selectedPrice?.id === 3
                ? "bg-[#f8bd01] text-white"
                : "bg-white border text-black"
            } rounded-full px-1 py-2 flex justify-center cursor-pointer`}
            onClick={() => handleClick({ start: 30000, end: 50000, id: 3 })}
          >
            <h1 className="text-[10.74px] leading-4 font-GothamBook">
              Rs 30,000 to Rs 50,000
            </h1>
          </div>
        </div>
        <div className="w-11/12 lg:w-[80%] 2xl:w-3/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6 mb-12">
          {packagesData?.map((e, index) => (
            <PackageCard
              key={index}
              title={e?.title}
              //@ts-ignore
              image={e?.images?.[0]}
              price={e?.prices}
              rooms={e?.rooms}
              subtitle={e?.subtitle}
            />
          ))}
        </div>
        {/* <div className="w-full mt-8 lg:mt-24 mb-8 lg:mb-16">
          <h1 className="text-lg font-medium font-GothamBook text-center">
            LET YOUR{" "}
            <span className="text-lg font-bold font-GothamBook">SAFFARI TOUR</span>{" "}
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
        <Model
          show={open}
          onClose={() => setOpen(false)}
          containerClass="!w-1/3"
        >
          <div className="bg-white">
            <Data onClose={() => setOpen(false)} />
          </div>
        </Model>
      </div>
      <Nfooter />
    </div>
  );
}

export default Index;
