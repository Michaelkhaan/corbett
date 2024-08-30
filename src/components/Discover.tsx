import React, { useRef } from "react";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCards } from "swiper/modules";
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay , Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

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
      <div className="max-w-screen-lg w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-between items-center overflow-hidden">
          <div
            onClick={goPrev}
            className="p-[5px] border border-gray-300 rounded-full cursor-pointer absolute left-0 lg:block"
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
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            ref={swiperRef}
            className="rounded-xl w-4/5"
            effect={"cards"}
            modules={[EffectCards ,Autoplay, Navigation, Pagination]}

            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            // navigation={true}
            speed={3000}
          >
            <SwiperSlide>
              <Image
                width={0}
                height={0}
                src="/hero.png"
                className="w-full rounded-xl aspect-video object-cover"
                alt="slide_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={0}
                height={0}
                src="/saffarizone.png"
                className="w-full rounded-xl aspect-video object-cover"
                alt="slide_image"
              />
            </SwiperSlide>
          </Swiper>

          <div
            onClick={goNext}
            className=" p-[5px] border border-gray-300 rounded-full cursor-pointer absolute right-0 lg:block"
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
        <div className="text-left px-4 lg:px-0">
          <h1 className="text-2xl 2xl:text-4xl lg:text-3xl font-semibold font-GothamBook leading-16 text-gray-700">
            Discover the World,
            <br /> specially curated for you!
          </h1>
          <p className="mt-4 font-GothamBook  2xl:text-base text-sm text-gray-600">
            Our exclusive customized holidays division can cater to every travel
            need: hotel, air tickets, VISA, sightseeings, transfer or the entire
            package, all designed keeping in mind your interests!
          </p>
          <div className="flex w-full flex-col mt-6">
            <p className="font-GothamBook  text-sm font-medium text-gray-600">
              Tell us what you want and what we will design it for you
            </p>
            <div className="flex mt-2 gap-2 flex-col items-center md:flex-row md:gap-6">
              {/* <button className="bg-[#f8bd01] w-[180px] text-gray-700 font-medium text-base font-GothamBook px-5 py-1 rounded">
                Enquire now
              </button> */}

              <a
                href="https://wa.me/919837166431"
                className="bg-[#f8bd01] w-[180px] text-gray-700 font-medium text-base font-GothamBook px-5 py-1 rounded flex gap-2 items-center justify-center"
                target="_blank"
              >
                <FaWhatsapp className="lg:text-2xl text-base text-black" />
                 <span className="font-bold">Enquiry</span>
              </a>
              {/* <button
  className=""
  onClick={() => window.location.href = 'tel:1800 22 7979'} // Replace with the actual number
>
  WhatsApp Enquire
</button> */}

              <p className="">or</p>
              <div className="flex items-center gap-1">
                <Image
                  onClick={() => (window.location.href = "tel:1800 22 7979")}
                  src="/telephone.svg"
                  className="opacity-65 cursor-pointer"
                  alt=""
                  width={20}
                  height={20}
                />
                <p
                  className="text-lg font-bold text-[#2E488B] cursor-pointer"
                  onClick={() => (window.location.href = "tel:1800 22 7979")}
                >
                  1800 22 7979
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
