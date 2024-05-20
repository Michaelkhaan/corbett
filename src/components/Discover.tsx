import React, { useRef } from "react";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCards } from "swiper/modules";
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Discover() {
  const swiperRef = useRef<SwiperRef | null>(null);

  const goNext = () => {
    if (swiperRef?.current) {
      swiperRef?.current?.swiper?.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef?.current) {
      swiperRef?.current?.swiper?.slidePrev();
    }
  };
  return (
    <div className="w-full my-16 grid place-items-center">
      <div className="max-w-screen-lg w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            ref={swiperRef}
            className="rounded-xl"
            effect={"cards"}
            modules={[EffectCards]}
          >
            <SwiperSlide>
              <img
                src="/hero.png"
                className="w-full rounded-xl h-[360px] object-cover aspect-square"
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/saffarizone.png"
                className="w-full rounded-xl h-[360px] object-cover aspect-square"
                alt="slide_image"
              />
            </SwiperSlide>
          </Swiper>
          <div
            onClick={goPrev}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-[5px] border border-gray-300 rounded-full"
          >
            <svg
              className="rotate-[-90deg]"
              fill="gray"
              width="20px"
              height="20px"
              viewBox="0 0 36 36"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>arrow-line</title>
              <path d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z"></path>
              <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>
          </div>
          <div
            onClick={goNext}
            className="absolute -right-7 top-1/2 transform -translate-y-1/2 translate-x-1/2 p-[5px] border border-gray-300 rounded-full"
          >
            <svg
              className="rotate-[90deg]"
              fill="gray"
              width="20px"
              height="20px"
              viewBox="0 0 36 36"
              version="1.1"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>arrow-line</title>
              <path d="M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z"></path>
              <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>
          </div>
        </div>
        <div className=" text-left">
          <h1 className="text-2xl lg:text-4xl font-bold font-gotham leading-16 text-gray-500">
            Discover the World, specially curated for you!
          </h1>
          <p className="mt-4">
            Our exclusive customized holidays division can cater to every travel
            need: hotel, air tickets, VISA, sightseeings, transfer or the entire
            package, all designed keeping in mind your interests!
          </p>
          <div className="flex w-full flex-col mt-6">
            <p className="font-gotham  text-sm">
              Tell us what you want and what we will design it for you
            </p>
            <div className="flex mt-2 gap-6">
              <button className="bg-[#FED800] w-[180px] text-base font-gotham px-5 py-1 rounded">
                Enquire now
              </button>
              <p className="">or</p>
              <div className="flex items-center gap-1">
                <Image
                  src="/telephone.svg"
                  className="opacity-65"
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="text-lg font-bold text-[#2E488B]">1800 22 7979</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
