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
import Nfooter from "@/components/Nfooter";

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
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/jeepsaffari.png",
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/deer.png",
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Jeep Saffari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
  ];

  const faq = [
    {
      title: "Is ATM Facility available in Haridwar?",
    },
    {
      title: "Is ATM Facility available in Haridwar?",
    },
    {
      title: "Is ATM Facility available in Haridwar?",
    },
    {
      title: "Is ATM Facility available in Haridwar?",
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
      <div className="w-11/12 lg:w-full flex flex-wrap justify-center mx-auto gap-5 mt-5 lg:-mt-14">
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
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-extrabold">OUR PACKAGES</h1>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat
          eos facere similique sit rem.
        </p>
        <div className="w-full flex flex-col items-center justify-center mt-10">
          <h1 className="text-xl font-semibold">
            Best Price Packages{" "}
            <span className="text-sm">With in Your budget</span>
          </h1>
          <div className="w-11/12 md:w-2/5 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mt-3">
            <div className="bg-[#f8bd01] rounded-full px-6 py-1">
              <h1 className="text-xs text-white">Less then Rs 10,000</h1>
            </div>
            <div className="bg-white border rounded-full px-6 py-1">
              <h1 className="text-xs text-black">Less then Rs 10,000</h1>
            </div>
            <div className="bg-white border rounded-full px-6 py-1">
              <h1 className="text-xs text-black">Less then Rs 10,000</h1>
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
      <div className="w-full h-full border mt-5 relative">
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
      <Image
        src="/image.png"
        alt=""
        width={0}
        height={0}
        className="w-full lg:w-3/5 mx-auto mt-10"
        unoptimized
        priority
      />
      <div className="w-full lg:w-5/6 mx-auto px-4 lg:px-20 mt-10 lg:mt-20 flex flex-wrap items-start justify-center">
        <div className="w-full lg:w-1/5">
          <h1 className="text-2xl font-bold w-[300px]">
            FAQ Regarding Benzaara Travels
          </h1>
          <button className="bg-[#e9e951] rounded-lg mt-6 px-3 py-2">
            Enquire Now
          </button>
        </div>
        <div className="w-full lg:w-3/4 lg:pl-28">
          {faq?.map((e, index) => (
            <FAQ key={index} question={e?.title} />
          ))}
        </div>
      </div>
      <div className="w-full bg-[#f2f2f2] mt-20 py-8">
        <h1 className="text-2xl lg:text-5xl font-bold text-center">
          Jim Corbett Saffari Price and Zone
        </h1>
        <div className="w-full mt-5">
          <Buttons />
        </div>
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-20 mt-10 gap-5">
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
        <h1 className="text-2xl lg:text-3xl font-bold text-center">
          All Inclusive Tours, Chalo Bag Bharo Nikal Pado
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
      <div className="w-full mt-10">
        <h1 className="text-lg font-semibold text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          doloremque.
        </h1>
        <div className="w-full flex items-center justify-center gap-2 mt-3 pb-5 px-4">
          <input
            type="text"
            placeholder="+91 000000000"
            className="border border-black outline-none bg-transparent px-2 py-1 w-full lg:w-1/5"
          />
          <button className="bg-black rounded-sm px-4 py-1 text-white font-bold">
            GO
          </button>
        </div>
      </div>
      {/* <Footer /> */}
      <Nfooter/>
    </div>
  );
}
