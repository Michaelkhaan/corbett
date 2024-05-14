import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Discover() {
  return (
    <div className="w-full flex">
      <div className="w-full lg:w-1/2">
        <Swiper
          className="myswiper"
          modules={[Pagination, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
        //   centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 500,
            modifier: 3,
            slideShadows: true,
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1560: {
              slidesPerView: 3,
            },
          }}
        >
          {Array?.from({ length: 10 })?.map((data, index) => (
            <SwiperSlide key={index} className="myswiper-slider">
              <img src="/saffarizone.png" alt="slide_image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full lg:w-1/2">
        <h1>Discover the World, specially curated for you!</h1>
        <p>
          Our exclusive customized holidays division can cater to every travel
          need: hotel, air tickets, VISA, sightseeings, transfer or the entire
          package, all designed keeping in mind your interests!
        </p>
      </div>
    </div>
  );
}
