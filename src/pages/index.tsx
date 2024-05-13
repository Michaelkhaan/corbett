import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import HeroCard from "@/components/HeroCard";
import ButtonCard from "@/components/ButtonCard";
import PackageCard from "@/components/PackageCard";
import FAQ from "@/components/FAQ";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      title: "Deer Safari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/jeepsaffari.png",
      title: "Deer Safari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/deer.png",
      title: "Deer Safari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Deer Safari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Deer Safari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Deer Safari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Deer Safari",
      rooms: "3 TO 14 NIGHTS FROM",
      subtitle: "per person",
      prices: "35,399",
    },
    {
      image: "/saffarizone.png",
      title: "Deer Safari",
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
  return (
    <div className="w-full">
      <Hero />
      <div className="w-11/12 lg:w-1/2 flex flex-wrap justify-center mx-auto gap-5 mt-5 lg:-mt-14">
        {heroCard?.map((e, index) => (
          <HeroCard key={index} image={e?.image} title={e?.title} />
        ))}
      </div>
      <div className="w-11/12 lg:w-1/2 mx-auto mt-10">
        <ButtonCard />
      </div>
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
          <div className="w-11/12 lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
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
      <div className="w-full h-full border mt-5">
        <video src="https://www.youtube.com/watch?v=AhP5Tg_BLIk"></video>
      </div>
      <div className="w-full px-4 lg:px-20 mt-10 lg:mt-20 flex flex-wrap items-start">
        <div className="w-full lg:w-1/5">
          <h1 className="text-2xl font-bold w-[300px]">
            FAQRegarding Benzaara Travels
          </h1>
          <button className="bg-[#e9e951] rounded-lg mt-6 px-3 py-2">
            Enquire Now
          </button>
        </div>
        <div className="w-full lg:w-3/4 pl-28">
          {faq?.map((e, index) => (
            <FAQ key={index} question={e?.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
