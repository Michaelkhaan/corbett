import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from 'swiper/modules';
import SwiperCore from "swiper"

SwiperCore.use([Navigation]);
function Explore() {
  const swiperRef = useRef(null);

  const slideNext = () => {
    
  };

  const slidePrev = () => {
    
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-2 mt-20">
      <div className="flex flex-col w-full lg:w-1/4 items-center">
        <h1 className="text-xl font-bold">BOOK A PERMIT</h1>
        <p className="text-base">
          FOR JUNGLE SAFFARI <br /> CORBETT TOURISM
        </p>
        <button className="bg-black rounded-xs px-4 text-white">
          Book Saffari
        </button>
      </div>
      <div className="flex flex-col w-full lg:w-3/4">
        <div className="w-full">
          <Swiper
          ref={swiperRef}
          navigation={true} modules={[Navigation]}
            spaceBetween={2}
            slidesPerView={2.5}
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {Array?.from({ length: 10 })?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full relative">
                  <Image
                    src={index % 2 === 0 ? "/Jeep.jpg" : "/Tiger.jpg"}
                    alt=""
                    width={0}
                    height={0}
                    className="w-full aspect-video object-cover relative"
                  />
                  <h1 className="text-white text-2xl font-extrabold absolute bottom-5 left-5 lg:w-[100px]">
                    JEEP SAFFARI
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full flex items-center gap-3 mt-2">
          <span  onClick={slideNext} className="w-6 aspect-square rounded-full border border-black flex items-center justify-center">
            <IoIosArrowBack />
          </span>
          <span onClick={slidePrev}className="w-6 aspect-square rounded-full border border-black flex items-center justify-center">
            <IoIosArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Explore;
