import Data from "@/components/Data";
import Highlight from "@/components/Highlight";
import Itinerary from "@/components/Itinerary";
import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import Package from "@/components/Package";
import PackageCard from "@/components/PackageCard";
import PackageFAQ from "@/components/PackageFAQ";
import Packageexc from "@/components/Packageexc";
import Touricons from "@/components/Touricons";
import Image from "next/image";
import React from "react";

function index() {
  const itineraryData = [
    {
      days: "Days 1",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
    {
      days: "Days 2",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
    {
      days: "Days 3",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
    {
      days: "Days 4",
      title: "Arrival at the Jungle Book Resort",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, sed blanditiis? Libero molestiae ex dolores.",
    },
  ];

  const faq = [
    {
      question: "What type of climate does thailand have?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
    },
    {
      question: "What type of climate does thailand have?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
    },
    {
      question: "What type of climate does thailand have?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
    },
    {
      question: "What type of climate does thailand have?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
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

  return (
    <div className="w-full">
      <NaveBar className="!bg-[#f8bd00]" />
      <div className="w-11/12 md:w-[70%] mx-auto mt-5 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full md:w-auto text-start">
          <h1 className="text-[32px] font-bold font-frinkRio whitespace-nowrap">
            The Jungle Book
          </h1>
          <p className="text-[16px] font-Gotham font-bold">
            1 Nights, 2 Guest{" "}
            <span className="text-base font-semibold font-Gotham">
              (No extra charges)
            </span>
          </p>
        </div>
        <div className="w-full flex flex-col min-[300px]:flex-row pr-20 items-center justify-between md:justify-end md:gap-40 gap-2">
          <div className="w-full md:w-auto text-start">
            <h1 className="text-[20px] font-Gotham font-regular">Start From</h1>
            <p className="flex items-center text-[32px] font-Gotham font-bold leading-[28px]">
              <span>
                <Image
                  src="/currency.png"
                  alt=""
                  width={0}
                  height={0}
                  className="w-4 aspect-square"
                />
              </span>
              35,990*
            </p>
            <p className="text-[8px] font-Gotham pl-5">per person</p>
          </div>
          <div className="w-full md:w-auto flex justify-start">
            <button className="bg-black text-white text-lg tracking-widest px-8 py-3 font-Gotham font-medium ">
              ENQUERY
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-3/4 mx-auto mt-5">
        <Image
          src="/Layer 45.png"
          alt=""
          width={0}
          height={0}
          className="w-full"
        />
      </div>
      <div className="w-11/12 2xl:w-3/4 mx-auto flex lg:flex-row justify-between flex-col gap-10">
        <div className="w-full 2xl:w-3/5 mx-auto">
          <div className="2xl:px-10">
            <h1 className="text-[26px] font-Gotham font-extrabold leading-7 tracking-tighter mt-5">
              Package-1 The Jungle Book
            </h1>
            <p className="text-xl font-Gotham leading-8 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quia sed consequuntur ab pariatur? Perferendis, adipisci at?
              Repudiandae, sit iusto?
            </p>
          </div>
          <div className="w-11/12 border-b border-gray-700 mt-5" />
          <div className="2xl:px-10 mt-5">
            <h1 className="text-[21px] font-Gotham font-bold leading-8">
              Itinerary (Day Wise)
            </h1>
            <div className="w-full mt-3">
              {itineraryData?.map((e, index) => (
                <Itinerary
                  className="mb-4"
                  key={index?.toString()}
                  days={e?.days}
                  title={e?.title}
                  desc={e?.desc}
                />
              ))}
            </div>
          </div>
          <div className="w-full mx-auto pb-5 mt-14">
            <Package />
            <Packageexc className="mt-16" />
          </div>
          <div className="w-full mx-auto mt-14 2xl:px-6">
            <h1 className="text-xl font-Gotham font-bold lg:px-5">
              FAQ Regarding Corbett Saffari!
            </h1>
            {faq?.map((e, index) => (
              <PackageFAQ
                key={index?.toString()}
                question={e?.question}
                answer={e?.answer}
              />
            ))}
          </div>
        </div>
        <div className="w-full 2xl:w-2/6 mx-auto mt-6">
          <Highlight />
          <div className="w-full mt-5">
            <Touricons />
          </div>
          <div className="w-full">
            <Data />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col font-gotham items-center justify-center mt-20 lg:mt-40">
        <h1 className="text-xl leading-[23px] font-medium text-gray-800 font-Gotham px-3">
          Best priced packages with in your budget
        </h1>
        <div className="w-11/12 md:w-2/6 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2 mt-3">
          <div className="bg-[#f8bd01] rounded-full px-6 py-2 flex justify-center">
            <h1 className="text-[10px] text-white font-Gotham">
              Less then Rs 10,000
            </h1>
          </div>
          <div className="bg-white border rounded-full px-2 flex justify-center py-2">
            <h1 className="text-xs text-black font-Gotham">
              Rs 10,000 to Rs 20,000
            </h1>
          </div>
          <div className="bg-white border rounded-full px-1 py-2 flex justify-center">
            <h1 className="text-[10.74px] leading-4 text-black font-Gotham">
              Rs 30,000 to Rs 50,000
            </h1>
          </div>
        </div>
        <div className="w-11/12 lg:w-3/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
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
        <div className="w-full mt-8 lg:mt-24 mb-8 lg:mb-16">
          <h1 className="text-lg font-medium font-Gotham text-center">
            LET YOUR{" "}
            <span className="text-lg font-bold font-Gotham">SAFFARI TOUR</span>{" "}
            WITH SPECIAL OFFERS AND DEALS!
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
      </div>
      <Nfooter />
    </div>
  );
}

export default index;
