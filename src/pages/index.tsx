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
import { useMemo, useState } from "react";
import Explore from "@/components/Explore";
import OurGuestLoveUs from "@/components/OurGuestLoveUs";
import Image from "next/image";
import Footer from "@/components/Footer";
import Discover from "@/components/Discover";
import Nfooter from "@/components/Nfooter";
import Go from "@/components/Go";
import { useGetAllPackagesQuery } from "@/queries/generated";
import { useRouter } from "next/router";
import PackageLoader from "@/components/PackageLoader";
import { title } from "process";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  const [selectedPrice, setSelectedPrice] = useState({
    start: null,
    end: null,
    id: null,
  });

  const handleClick = (price: any) => {
    setSelectedPrice(price);
  };

  const { data: packages, isPending } = useGetAllPackagesQuery({
    startPrice: selectedPrice?.start,
    endPrice: selectedPrice?.end,
  });

  const packagesData = useMemo(() => {
    return packages?.getAllPackages?.data?.map((data) => {
      return {
        id: data?.id?.toString() || "",
        images: data?.images || [],
        title: data?.name || "",
        rooms: `${data?.day} ${data?.night}`,
        subtitle: "per person" || "",
        prices: data?.price?.toString() || "",
      };
    });
  }, [packages]);

  const onClick = (id: string) => {
    router.push("/packages/" + id);
  };

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
      link: "/dhikalaresthouse",
    },
    {
      image: "/jeep.png",
      title: "Saffari",
      link: "/jeep",
    },
    {
      image: "/packages.png",
      title: "Packages",
      link: "/packages",
    },
    {
      image: "/resort.png",
      title: "Resorts",
      link: "/dhikalaresthouse",
    },
  ];

  const faq = [
    {
      title: "What should I bring for the safari?",
      answer: "We recommend bringing comfortable clothing, sturdy footwear, sunscreen, a hat, binoculars, and a camera to capture your wildlife encounters.",
    },
    {
      title: "Are children allowed on the safari?",
      answer: "Yes, children are welcome on the safari! It's a really fantastic opportunity for them to connect with nature and learn about wildlife in a safe and supervised environment.",
    },
    {
      title: "Is it safe to encounter wildlife up close?",
      answer: "While encountering wildlife up close can be very exciting, it's essential to follow safety guidelines and instructions from our expert guides. They are trained to ensure a safe and memorable experience for all visitors.",
    },
    {
      title: "Can I customise my safari experience?",
      answer: "Absolutely! At JM Corbett Safari, we offer customisable packages to suit your preferences and interests. Whether you're interested in specific wildlife sightings, photography opportunities, or exploring particular areas of the park, we can tailor your safari experience to make it truly unforgettable.",
    },
    {
title:"How do I book a safari?",
answer:"Booking a safari with us is easy! Simply visit our website or contact our booking office to check availability and reserve your spot. Our friendly staff will assist you in selecting the perfect safari package for your preferences and schedule, ensuring a seamless booking process from start to finish.",
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
      image: "/Accommodation.png",
      title: "Accommodation",
      desc: "Stay in comfort with our carefully selected hotels. Each one is chosen by our expert hotel management team to ensure a pleasant and convenient stay.",
    },
    {
      image: "/TourManagers.png",
      title: "Tour Managers",
      desc: "Benefit from our dedicated team of 350 specialized tour managers, with expertise in both Indian and international tours.",
    },
    {
      image: "/Meals.png",
      title: "All Meals",
      desc: "Enjoy meals to your heart’s content—breakfast, lunch, and dinner. Our packages offer the best value, with every meal taken care of.",
    },
    {
      image: "/Itineraries.png",
      title: "Best Value Itineraries",
      desc: "Our experienced product and destination research team works diligently to create the most cost-effective and enriching itineraries, ensuring you get the best value for your money.",
    },
    {
      image: "/Transport.png",
      title: "On-Tour Transport",
      desc: "Relax and enjoy your journey with all rail, sea, and road transport included in your itinerary. We handle the logistics so you can travel stress-free.",
    },
    {
      image: "/Airfare.png",
      title: "Round-Trip Airfare",
      desc: "Veena World tours include airfare from many major hubs within India, or you can choose the joining/leaving option if you prefer.",
    },
    // {
    //   image: "/building.png",
    //   title: "Accommodation",
    //   desc: "Comfortables and Convenient hotels cherry picked by our hotel managment team.",
    // },
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
            link={e?.link}
            className={`
            ${index === 0 ? "aspect-[74/72] w-[74px]" : ""} 
            ${index === 1 ? "aspect-[74/72] w-[74px]" : ""} 
            ${index === 2 ? "aspect-[74/72] w-[74px]" : ""}
            ${index === 3 ? "aspect-[74/72] w-[74px]" : ""}`}
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

        <div className="w-full mx-auto flex flex-col font-gotham items-center justify-center mt-20 lg:mt-10">
          <h1 className="text-xl leading-[23px] font-medium text-gray-800 font-Gotham px-3">
            Best priced packages with in your budget
          </h1>

          <div className="w-11/12 lg:w-1/2 2xl:w-2/6 grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-2 mt-3">
            <div
              className={`${
                selectedPrice?.id === 1
                  ? "bg-[#f8bd01] text-white"
                  : "bg-white border text-black"
              } rounded-full px-6 py-2 flex justify-center cursor-pointer`}
              onClick={() => handleClick({ start: 0, end: 10000, id: 1 })}
            >
              <h1 className="text-sm font-Gotham">Less than Rs 10,000</h1>
            </div>
            <div
              className={`${
                selectedPrice?.id === 2
                  ? "bg-[#f8bd01] text-white"
                  : "bg-white border text-black"
              } rounded-full px-2 flex justify-center py-2 cursor-pointer`}
              onClick={() => handleClick({ start: 10000, end: 20000, id: 2 })}
            >
              <h1 className="text-sm font-Gotham">Rs 10,000 to Rs 20,000</h1>
            </div>
            <div
              className={`${
                selectedPrice?.id === 3
                  ? "bg-[#f8bd01] text-white"
                  : "bg-white border text-black"
              } rounded-full px-1 py-2 flex justify-center cursor-pointer`}
              onClick={() => handleClick({ start: 30000, end: 50000, id: 3 })}
            >
              <h1 className="text-sm leading-4 font-Gotham">
                Rs 30,000 to Rs 50,000
              </h1>
            </div>
          </div>
          <div className="w-11/12 lg:w-3/4 2xl:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
            {isPending
              ? Array.from({ length: 4 }).map((e, index) => (
                  <PackageLoader key={index} />
                ))
              : null}
            {packagesData?.map((e: any) => (
              <div
                key={e.id}
                onClick={() => onClick(e.id)}
                className="cursor-pointer"
              >
                <PackageCard
                  title={e?.title}
                  image={e?.images?.[0]}
                  price={e?.prices}
                  rooms={e?.rooms}
                  subtitle={e?.subtitle}
                />
              </div>
            ))}
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
                FAQ Regarding Travels
              </h1>
              <button className="bg-primary rounded-md mt-6 px-3 py-2 text-[14px] font-Gotham text-black">
                Enquire Now
              </button>
            </div>
            <div className="lg:col-span-5 col-span-12">
              {faq?.map((e, index) => (
                <FAQ
                  id=""
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
        <div className="w-full 2xl:w-[70%] mx-auto mt-20 px-4 lg:px-32 2xl:px-16">
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
        <Go />
        {/* <Footer /> */}
        <Nfooter />
      </div>
    </div>
  );
}
