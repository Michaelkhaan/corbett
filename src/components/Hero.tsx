import React from "react";
import NaveBar from "./NaveBar";
import Image from "next/image";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Hero() {
  const imageArray = [
    {
      src: "/hero.png",
    },
    {
      src: "/cantersaffari.png",
    },
  ];
  return (
    <div className="w-full aspect-[1920/790] min-h-[300px] flex flex-col items-center overflow-hidden relative lg:-z-10">
      <div className="absolute inset-0">
        <Swiper
          className="w-full h-full"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          // navigation={true}
          effect={'fade'}
          speed={3000}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {imageArray?.map((e, index) => (
            <SwiperSlide key={index}>
              <Image
                src={e?.src}
                alt=""
                width={0}
                height={0}
                className=" object-cover w-full h-full "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
      <div className="my-auto flex flex-col items-center z-[999]">
        <h1 className="text-xl lg:text-5xl 2xl:text-7xl text-white font-bold text-center font-frinkRio ">
          Adventure
        </h1>
        <h1 className="text-[40px] leading-[0.8] md:leading-[0.8] lg:text-[70px] 2xl:text-[110px] text-white font-extrabold tracking-widest text-center font-frinkRio">
          SAFARI <br /> CORBETT
        </h1>
        <div className="mt-5">
          <h1 className=" relative  text-xl text-white border border-white font-semibold  text-center  px-5 py-1">
            NATIONAL PARK
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
