import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import Model from "./Model";
import Data from "./Data";

SwiperCore.use([Navigation]);
function Explore() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [Modal, setModal] = useState(false);

  const slideNext = () => {
    if (swiperRef?.current) {
      swiperRef?.current?.swiper?.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef?.current) {
      swiperRef?.current?.swiper?.slidePrev();
    }
  };
  const imageArray = [
    {
      src: "/jeepsaffari.png",
      title: "JEEP SAFARI",
    },
    {
      src: "/cantersaffari.png",
      title: "CANTER SAFARI",
    },
    {
      src: "/dhikalaresort.png",
      title: "DHIKALA RESORT",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center gap-2 mt-20">
        <div className="flex w-full lg:w-1/4 items-start px-4">
          <div className="mx-auto flex flex-col lg:items-start items-center">
            <h1 className="2xl:text-[29px] text-xl font-bold font-Gotham">
              BOOK A PERMIT
            </h1>
            <p className="2xl:text-[20px] 2xl:leading-6 text-xs font-Gotham text-center lg:text-left ">
              FOR JUNGLE SAFFARI <br />
              CORBETT TOURISM
            </p>
            <button
              onClick={() => setModal(true)}
              className="bg-primary 2xl:text-base text-[16px] font-Gotham rounded-xs px-4 py-[10px] leading-[22px] text-white mt-2 2xl:mt-3"
            >
              Book Saffari
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-3/4 px-4">
          <h1 className="2xl:text-[33px] text-xl font-bold font-frinkRio">
            Explore the Untamed Destinations of jim corbett
          </h1>
          <p className="font-Gotham font-semibold 2xl:text-[15px] leading-6 text-base mt-4">
            We craft tour packages based on your budget, taste & preference
            however these are
            <br />
            some most popular packages our guests have chosen.
          </p>
          <div className="w-full mt-5">
            <Swiper
              ref={swiperRef}
              spaceBetween={3}
              slidesPerView={2.5}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: 1.7,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2.1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 2.3,
                  spaceBetween: 0,
                },
                1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 0,
                },
              }}
            >
              {imageArray?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full relative pr-2">
                    <Image
                      src={image?.src}
                      alt={image?.title}
                      width={0}
                      height={0}
                      className="w-full !aspect-[1.2] object-cover relative"
                    />
                    <h1 className="text-white font-frinkRio 2xl:text-[41px] text-2xl 2xl:leading-[36px] leading-5 font-bold absolute bottom-5 left-5 lg:w-[100px]">
                      {image?.title}
                    </h1>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex items-center gap-3 mt-2">
            <span
              onClick={slideNext}
              className="w-6 aspect-square rounded-full border border-black flex items-center justify-center"
            >
              <IoIosArrowBack />
            </span>
            <span
              onClick={slidePrev}
              className="w-6 aspect-square rounded-full border border-black flex items-center justify-center"
            >
              <IoIosArrowForward />
            </span>
          </div>
        </div>
      </div>
      <Model show={Modal} containerClass="bg-white" onClose={() => setModal(false)}>
        <Data onClose={()=>setModal(false)} />
      </Model>
    </>
  );
}

export default Explore;
