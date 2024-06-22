import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import HeroCard from "@/components/HeroCard";
import ButtonCard from "@/components/ButtonCard";
import PackageCard from "@/components/PackageCard";
import FAQ from "@/components/FAQ";
import Buttons from "@/components/Buttons";
import PriceCard from "@/components/PriceCard";
import TourCard from "@/components/TourCard";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { useState } from "react";
import Explore from "@/components/Explore";
import OurGuestLoveUs from "@/components/OurGuestLoveUs";
import Image from "next/image";
import Footer from "@/components/Footer";
import Discover from "@/components/Discover";
import Nfooter from "@/components/Nfooter";
import Go from "@/components/Go";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById("video") as any;
    if (video?.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video?.pause();
      setIsPlaying(false);
    }
  };
  const heroCard = [
    {
      image: "/nightsleep.png",
      title: "Night Stay",
    },
    {
      image: "/jeep.png",
      title: "Saffari",
    },
    {
      image: "/packages.png",
      title: "Packages",
    },
    {
      image: "/resort.png",
      title: "Resorts",
    },
  ];

  const packagesData = [
    {
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/deer.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Bijrani Saffari zone",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
  ];

  const faq = [
    {
      title: "Is ATM Facility available in Haridwar?",
      answer: "answer 1",
    },
    {
      title: "Is ATM Facility available in Haridwar?",
      answer: "answer 2",
    },
    {
      title: "Is ATM Facility available in Haridwar?",
      answer: "answer 3",
    },
    {
      title: "Is ATM Facility available in Haridwar?",
      answer: "answer 4",
    },
  ];

  const priceCard = [
    {
      image: "/currency-1.png",
      name: "Price",
      title: "INR 7000-10000/ -Jeep",
      subtitle: "Maximum 6 person's and 2 childerns",
      desc: "Between - 5 to 12 years",
      subdesc: "allowed in ONE Jeep",
    },
    {
      image: "/currency-1.png",
      name: "Price",
      title: "INR 7000-10000/ -Jeep",
      subtitle: "Maximum 6 person's and 2 childerns",
      desc: "Between - 5 to 12 years",
      subdesc: "allowed in ONE Jeep",
    },
    {
      image: "/currency-1.png",
      name: "Price",
      title: "INR 7000-10000/ -Jeep",
      subtitle: "Maximum 6 person's and 2 childerns",
      desc: "Between - 5 to 12 years",
      subdesc: "allowed in ONE Jeep",
    },
    {
      image: "/currency-1.png",
      name: "Price",
      title: "INR 7000-10000/ -Jeep",
      subtitle: "Maximum 6 person's and 2 childerns",
      desc: "Between - 5 to 12 years",
      subdesc: "allowed in ONE Jeep",
    },
  ];

  const tourCard = [
    {
      image: "/building.png",
      title: "Accommodation",
      desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    },
    {
      image: "/building.png",
      title: "Accommodation",
      desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    },
    {
      image: "/building.png",
      title: "Accommodation",
      desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    },
    {
      image: "/building.png",
      title: "Accommodation",
      desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    },
    {
      image: "/building.png",
      title: "Accommodation",
      desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    },
    {
      image: "/building.png",
      title: "Accommodation",
      desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    },
    {
      image: "/building.png",
      title: "Accommodation",
      desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    },
  ];
  return (
    <div className="w-full">
      <Hero />
      {/* <img src="/test/hero.png" className="w-full"/> */}
      <div className="w-full lg:w-full flex flex-wrap justify-center mx-auto gap-2 md:gap-5  lg:-mt-14 -mt-5">
        {heroCard?.map((e, index) => (
          <HeroCard
            key={index}
            image={e?.image}
            title={e?.title}
            className={`
            ${index === 0 ? "aspect-[74/72] w-[74px]" : ""} 
            ${index === 1 ? "aspect-[117/72] w-[117px]" : ""} 
            ${index === 2 ? "aspect-[56/78] w-[56px]" : ""}
            ${index === 3 ? "aspect-[117/80] w-[117px]" : ""}`}
          />
        ))}
      </div>
      {/* <div className="w-11/12 lg:w-1/2 mx-auto mt-10"> */}
      <ButtonCard />
      {/* </div> */}
      <Explore />
      <div className="w-full flex flex-col items-center justify-center mt-10 mx-auto max-w-[1920px] ">
        <h1 className="2xl:text-[26.79px] lg:text-[26.79px] sm:text-[47px] text-[20px] leading-[23.69px] font-extrabold font-frinkRio">
          OUR PACKAGES
        </h1>
        <p className="2xl:text-base text-[15px] leading-[20px] font-semibold text-center font-Gotham lg:w-[470px] mt-4">
          We craft our packages based on your budget, taste & preference however
          these are some most popular packages our guest has chosen.
        </p>
        <div className="w-full flex flex-col font-gotham items-center justify-center mt-10">
          <h1 className="text-[22px] leading-[23px] font-[680px] text-black font-Gotham">
            Best priced packages with in your budget
          </h1>
          <div className="w-11/12 md:w-2/5 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2 mt-3">
            <div className="bg-[#f8bd01] rounded-full px-6 py-1 flex justify-center">
              <h1 className="text-[10px] text-white font-Gotham">
                Less then Rs 10,000
              </h1>
            </div>
            <div className="bg-white border rounded-full px-2 flex justify-center py-1">
              <h1 className="text-xs text-black font-Gotham">
                Rs 10,000 to Rs 20,000
              </h1>
            </div>
            <div className="bg-white border rounded-full px-1 py-1 flex justify-center">
              <h1 className="text-[10.74px] leading-4 text-black font-Gotham">
                Rs 30,000 to Rs 50,000
              </h1>
            </div>
          </div>
          <div className="w-11/12 lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
            {packagesData?.map((e, index) => (
              <PackageCard
                key={index}
                title={e?.title}
                image={e?.image}
                price={e?.prices}
                rooms={e?.rooms}
                subtitle={e?.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full border mt-20 relative">
        <video
          id="video"
          className="aspect-video w-full max-h-96 object-cover relative"
          src="https://videos.pexels.com/video-files/2491276/2491276-uhd_4096_2160_24fps.mp4"
        ></video>
        <span
          className="w-10 aspect-square bg-white/60 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <IoMdPause className="text-black" />
          ) : (
            <IoMdPlay className="text-black" />
          )}
        </span>
      </div>
      <OurGuestLoveUs />
      {/* <Image
        src="/image.png"
        alt=""
        width={0}
        height={0}
        className="w-full lg:w-3/5 mx-auto mt-10"
        unoptimized
        priority
      /> */}
      <Discover />
      <div className="px-4 lg:w-[80%] w-11/12 mx-auto mt-10 lg:mt-20">
        <div className="grid grid-cols-7  mx-auto gap-2">
          <div className="lg:col-span-2 col-span-12 mt-3">
            <h1 className="lg:text-xl 2xl:text-2xl font-bold font-Gotham lg:w-[300px] 2xl:w-[400px] w-full">
              FAQ Regarding Benzaara Travels
            </h1>
            <button className="bg-[#e9e951] rounded-md mt-6 px-3 py-2 text-[14px] font-Gotham">
              Enquire Now
            </button>
          </div>
          <div className="lg:col-span-5 col-span-12">
            {faq?.map((e, index) => (
              <FAQ
                key={index?.toString()}
                question={e?.title}
                answer={e?.answer}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f2f2f2] mt-20 py-8">
        <h1 className="text-2xl lg:text-5xl font-bold font-Gotham tracking-tighter text-center">
          Jim Corbett Saffari Price And Zones
        </h1>
        <div className="w-full mt-5">
          <Buttons />
        </div>
        <div className="w-11/12  2xl:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-20 mt-10 gap-5">
          {priceCard?.map((e, index) => (
            <PriceCard
              key={index}
              name={e?.name}
              title={e?.title}
              subtitle={e?.subtitle}
              desc={e?.desc}
              subdesc={e?.subdesc}
              image={e?.image}
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-20 px-4 lg:px-32">
        <h1 className="text-xl lg:text-2xl font-medium text-gray-700 font-Ghotam text-center">
          All inclusive tours, Chalo Bag Bharo Nikal Pado
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tourCard?.map((e, index) => (
            <TourCard
              key={index}
              image={e?.image}
              title={e?.title}
              desc={e?.desc}
            />
          ))}
        </div>
      </div>
      <Go/>
      {/* <Footer /> */}
      <Nfooter />
    </div>
  );
}
