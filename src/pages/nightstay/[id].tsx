import Data from "@/components/Data";
import Highlight from "@/components/Highlight";
import Model from "@/components/Model";
import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import PackageCard from "@/components/PackageCard";
import Touricons from "@/components/Touricons";
import {
  useGetAllNightStayQuery,
  useGetNightStayByIdQuery,
} from "@/queries/generated";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FaqList from "@/components/FaqList";
import RoomType from "@/components/RoomType";
import Link from "next/link";

const priceRanges = [
  { start: 0, end: 10000, id: 1, label: "Less than Rs 10,000" },
  { start: 10000, end: 20000, id: 2, label: "Rs 10,000 to Rs 20,000" },
  { start: 30000, end: 50000, id: 3, label: "Rs 30,000 to Rs 50,000" },
];

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

  const { data, isPending } = useGetNightStayByIdQuery(
    {
      getNightStayByIdId: router?.query?.id?.toString() || "",
    },
    {
      enabled: !!router?.query?.id?.toString(),
    }
  );

  const { data: packages } = useGetAllNightStayQuery({
    startPrice: selectedPrice?.start,
    endPrice: selectedPrice?.end,
  });

  const packagesData = useMemo(() => {
    return packages?.getAllNightStay?.data?.map((data) => {
      return {
        id: data?.id?.toString() || "",
        images: data?.images || [],
        title: data?.name || "",
        rooms: "",
        subtitle: "per person" || "",
        prices: data?.price?.toString() || "",
      };
    });
  }, [packages]);

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
          <p
            className="cursor-pointer pr-1 font-GothamBook text-[12px] lg:text-[14px] flex items-center"
            onClick={() => router.push("/nightstay")}
          >
            Resort <span className="pl-[3px] mt-[1px]">{">"}</span>
          </p>
          <p className=" pr-1 font-GothamBook text-[12px] lg:text-[14px] font-bold flex items-center">
            {data?.getNightStayById?.name}{" "}
            <span className="pl-[3px] mt-[1px]"></span>
          </p>
        </div>
      </div>

      <div className="w-11/12 lg:w-3/4 2xl:w-[3/4] mx-auto  flex flex-col md:flex-row md:items-center md:justify-between gap-2 ">
        <div className="w-full md:w-auto text-left ">
          <h1 className="text-base lg:text-lg 2xl:text-[26px] font-Gotham font-extrabold leading-7 tracking-tighter  ">
            {data?.getNightStayById?.name}
          </h1>
          {data?.getNightStayById?.location ? (
            <p className="text-xs lg:text-[14px] 2xl:text-[16px] font-GothamBook font-bold">
              {data?.getNightStayById?.location}
            </p>
          ) : null}
        </div>
        <div className="w-full md:w-1/2 flex flex-col min-[300px]:flex-row  pr-0 2xl:pr-20 items-center justify-between md:justify-end lg:gap-20 2xl:gap-40 gap-2">
          <div className="w-full md:w-auto text-start">
            <h1 className="text-xm 2xl:w-[150px] lg:text-base 2xl:text-[16px] font-GothamBook 2xl:break-words font-regular leading-[20px] lg:leading-[20px]">
              Start From
            </h1>
            <p className="flex items-center lg:text-3xl text-lg 2xl:text-[36px] font-GothamBook font-bold leading-[20px]">
              <span className="lg:text-2xl">₹</span>
              {data?.getNightStayById?.price}*
            </p>
            <p className="text-[12px] font-GothamBook leading-[8px]">
              per person
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-end" onClick={onClick}>
            <button className="bg-black text-white text-sm 2xl:text-lg tracking-widest px-8 py-3 font-GothamBook font-medium ">
              ENQUERY
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-3/4 mx-auto mt-5">
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
          {data?.getNightStayById?.images?.map((e, index) => (
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
      <div className="w-11/12 lg:w-3/4 mx-auto 2xl:w-[3/4] flex lg:flex-row justify-between flex-col gap-10">
        <div className="w-full lg:w-3/5 mx-auto text-left">
          <div className="2xl:px-10 mt-5 ">
            {isPending ? (
              <div className="bg-slate-200 animate-pulse h-4 w-1/2 md:w-1/3" />
            ) : (
              <h1 className="text-base lg:text-lg 2xl:text-[26px]  font-GothamBook font-extrabold leading-7 tracking-tighter ">
                {data?.getNightStayById?.title}
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
              <p className="lg:text-sm text-xs 2xl:text-xl font-GothamBook leading-8 mt-2 text-wrap break-words">
                {data?.getNightStayById?.description}
              </p>
            )}
          </div>
          <div className="w-11/12 border-b border-gray-700 mt-5" />
          <RoomType data={data} />

          {data?.getNightStayById?.Faqs?.length ? (
            <FaqList data={data?.getNightStayById?.Faqs as any} />
          ) : null}
        </div>
        <div className="w-full lg:w-2/6 mx-auto mt-6">
          {data?.getNightStayById?.Prices?.length || isPending ? (
            <Highlight
              data={data?.getNightStayById?.Prices as any}
              isLoading={isPending}
            />
          ) : null}
          <div className="w-full mt-5">
            {data?.getNightStayById?.Includes?.length || isPending ? (
              <Touricons
                name="Amenities"
                data={data?.getNightStayById?.Includes as any}
                isLoading={isPending}
              />
            ) : null}
          </div>
          <div className="w-full mt-10">
            <Data />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col font-GothamBook items-center justify-center mt-20 lg:mt-40">
        <h1 className="text-xl leading-[23px] font-medium text-gray-800 font-GothamBook px-3 text-center">
          Best priced packages with in your budget
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
        <div className="w-11/12 lg:w-[60%] 2xl:w-3/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
          {packagesData?.map((e, index) => (
            <Link key={index} href={"/nightstay/" + e?.id}>
              <PackageCard
                key={index}
                title={e?.title}
                //@ts-ignore
                image={e?.images?.[0]}
                price={e?.prices}
                rooms={e?.rooms}
                subtitle={e?.subtitle}
              />
            </Link>
          ))}
        </div>
        <Model
          show={open}
          onClose={() => setOpen(false)}
          containerClass="mx-auto w-11/12 md:w-1/2 lg:w-1/3"
        >
          <div className="bg-white mx-auto p-5 w-full">
            <Data onClose={() => setOpen(false)} />
          </div>
        </Model>
      </div>
      <Nfooter />
    </div>
  );
}

export default Index;
