import Attractions from "@/components/Attractions";
import Experience from "@/components/Experince";
import OverView from "@/components/OverView";
import TariffPrice from "@/components/TariffPrice";
import PackageFAQ from "@/components/PackageFAQ";
import OurGuestLoveUs from "@/components/OurGuestLoveUs";
// import Go from "@/components/Go";
import Nfooter from "@/components/Nfooter";
import OtherPageHero from "@/components/OtherPageHero";
import { useState } from "react";
import NaveBar from "@/components/NaveBar";

const faq = [
  {
    question: "1. What type of climate does thailand have?",
    answer:
      "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
  {
    question: "3. What type of climate does thailand have?",
    answer:
      "4.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
  {
    question: "5.What type of climate does thailand have?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
  {
    question: "6. What type of climate does thailand have?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
];
const Jeep = () => {

  const data = [
    {
      image: "/Wildlife-sightings.jpg",
      title: "Wildlife sightings",
      description:
        "Witness the untamed beauty of Jim Corbett National Park as you encounter a diverse array of wildlife species, including tigers, leopards, elephants, deer, and more.",
    },
    {
      image: "/Scenic-Landscape.jpg",
      title: "Scenic Landscape",
      description:
        "Experience the stunning beauty of Corbett National Park, with it's dense forests and winding rivers, perfect for capturing unforgettable moments",
    },
    {
      image: "/Bird-Watching.jpg",
      title: "Bird Watching",
      description:
        "Join guided bird watching trips to see over 600 birds species, including colourfull kingfishers and magestic eagles and enjoy the peaceful world of birds",
    },
  ];
  const [open, setOpen] = useState("");
  return (
    <div className="w-full">
      <NaveBar />
      <OtherPageHero name="Jeep Safari" image="/jeephero.png" />
      <div className="w-full mt-5 flex justify-center items-center flex-col">
        <h1 className="font-frinkRio leading-8 font-semibold px-4 lg:text-[21px] text-base mb-2">
          Explore the world with JM Corbett Jeep Safari
        </h1>
        <p className="text-center leading-[26px] w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 lg:text-[15px] text-xs px-4 font-frinkRio ">
          {
            " Welcome to JM Corbett Jeep Safari,your gateway to adventure in the heart of nature's bounty! Nestled amidst the picturesque landscapes of Jim Corbett National Park our safari experiences offer an unparalleled opportunity to immerse yourself in the beauty and diversity of indian"
          }
        </p>
      </div>
      <div>
        <OverView image="/jeep-safari.jpg"/>
        <div className="w-full mt-12">
          <Experience />
        </div>
        <TariffPrice />
        <Attractions data={data} />
        <div className=" bg-[#efefee]  py-12 mt-16">
          <div className="flex lg:w-[75%] 2xl:w-[65%] w-11/12  mx-auto flex-col justify-start items-start">
            <p className="text-3xl font-GothamBook font-bold lg:px-5 pb-4">
              FAQ Regarding Corbett safari!
            </p>
            {faq?.map((e, index) => (
              <PackageFAQ
                openId={open}
                setOpenId={setOpen as any}
                id={index?.toString()}
                key={index?.toString()}
                question={e?.question}
                answer={e?.answer}
              />
            ))}
          </div>
        </div>
        <OurGuestLoveUs className="!mt-0" />
        {/* <div className="pt-12 pb-6">
          <Go />
        </div> */}
        <Nfooter />
      </div>
    </div>
  );
};

export default Jeep;
