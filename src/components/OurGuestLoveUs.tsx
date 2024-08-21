import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props{
  className?:string
}

const testimonials = [
  "Our trip to Jim Corbett was absolutely seamless, thanks to the exceptional services provided! Every detail, from the safari bookings to the cozy accommodations, was meticulously arranged. The team’s local expertise made our experience truly unforgettable. We can't wait to book with them again!",
  
  "We had the most amazing wildlife adventure at Jim Corbett, all thanks to the top-notch service. The personalised attention and well-planned itinerary allowed us to fully immerse ourselves in the beauty of the park. A must-book for anyone seeking a hassle-free and memorable experience!",

  "From the moment we arrived, everything was perfectly organised. The knowledgeable guides, comfortable stay, and thrilling safaris made our Jim Corbett trip one of the best we’ve ever had. Highly recommended for anyone looking to explore this stunning destination!",

  "Our Jim Corbett experience was incredible, thanks to the flawless arrangements. The team ensured that every aspect of our trip, including transport, safari, and lodging, was taken care of with precision. Their attention to detail made our vacation truly enjoyable and stress-free!",

  "A huge thank you to the team for organising such a wonderful Jim Corbett trip for us. The safari experience was exhilarating, and the hospitality was beyond our expectations. We felt completely taken care of throughout our stay. We highly recommend their services!"
];

export default function OurGuestLoveUs({className}:Props) {
  return (
    <div className={`w-full bg-[url('/bglayers.png')] py-16 px-4s ${className}`}>
      <h1 className="text-center text-[30.7px] font-Gotham font-medium mb-10">
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
            slidesPerView: 3,
            spaceBetween: 50,
            slidesOffsetBefore: 200,
          },
          1600: {
            slidesPerView: 4.3,
            spaceBetween: 50,
            slidesOffsetBefore: 400,
          },
        }}
      >
        {/* <SwiperSlide className="hidden" /> */}
        {testimonials?.map((item, index) => (
          <SwiperSlide key={index}
          >
            <div className="flex items-center gap-4">
              <Image
                src="Layer.png"
                alt=""
                width={0}
                height={0}
                className="w-8 aspect-square object-cover rounded-full"
              />

                <p className="text-xs font-Gotham ">{item}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
