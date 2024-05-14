import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function OurGuestLoveUs() {
  return (
    <div className="w-full bg-[url('/bglayers.png')] py-10 mt-10 px-4s">
      <h1 className="text-center text-3xl font-extrabold mb-10">
        OUR GUEST LOVE US
      </h1>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        slidesOffsetBefore={50}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4.3,
            spaceBetween: 50,
            slidesOffsetBefore: 200,
          },
        }}
      >
        {/* <SwiperSlide className="hidden" /> */}
        {Array?.from({ length: 10 })?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center gap-4">
              <Image
                src={index % 2 === 0 ? "/Jeep.jpg" : "/Tiger.jpg"}
                alt=""
                width={0}
                height={0}
                className="w-8 aspect-square object-cover rounded-full"
              />
              <div className="">
                <h1 className="text-gray/60 text-[10px] ">
                  Good service and staff as well
                </h1>
                <h2 className="text-gray/60 text-[10px] ">
                  Our experience were good for Jeep safari!
                </h2>
                <p className="text-[10px] ">
                  <span className="font-bold">sakshi Thakur, </span>
                  Director seta media Pune
                </p>
              </div>

              <p></p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
