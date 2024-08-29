import React from "react";
import Attractions from "@/components/Attractions";

import Hero from "@/components/Hero";
import NaveBar from "@/components/NaveBar";
import OverView from "@/components/OverView";
import TariffPrice from "@/components/TariffPrice";
import Image from "next/image";
import PackageFAQ from "@/components/PackageFAQ";
import OurGuestLoveUs from "@/components/OurGuestLoveUs";
import { Swiper, SwiperSlide } from "swiper/react";
import Go from "@/components/Go";
import Nfooter from "@/components/Nfooter";
import OverView1 from "@/components/OverView1";
import JungleSaferi from "@/components/JungleSaferi";
import ExperienceHd from "@/components/ExperienceHd";
import TraficPrice1 from "@/components/TraficPrice1";
import Faq from "@/components/PackageFAQ";
import FaqList from "@/components/FaqList";
import OtherPageHero from "@/components/OtherPageHero";
import OtherPageHeroShort from "@/components/OtherPageHeroShort";

const faq = [
  {
    id: 1,
    question: "1. What I bring for the safari?",
    answer:
      "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
  {
    id: 2,
    question: "3. Are childern allowed on the  safari?",
    answer:
      "4.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
  {
    id: 3,
    question: "5.Is it safe to encounter wildlife up close?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
  {
    id: 4,
    question: "6. Can I customize my safari experience?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
  {
    id: 5,
    question: "7.How do i book a safari?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
  },
];
const jungle = [
  {
    Title: "jungle Safari Details",
    Dhikala: "Dhikala Ecotourism Zone",
    desc: "Dhikala ecotourism zone in Corbett National Park is famous for its stunning scenery. it's the most popular tourism zone in india, with diverse wildlife. Dhikala is the largest of Cor-bett's five zones,feature Dense Sal forests, vast grasslands, narrow valleys, and the winding Ramganga River. The Ramganga River is the park's lifeline, enriching its beauty and nour-ishing the pants and animals. ",
    desc1:
      "The main attractions here all the Royal Bengal Tigers and Asiatic elephants.This zone has plenty of these big animals,so tourists often get to see them. Named after the large Dhikala grasslands,its the biggest grassland in Corbett.Besides tigers and elephants,you'll also find leopards, spotted deer, sambar deer,hog deer.langurs, wild boars,crocodiles, and many other animals and reptiles. ",
    canter: "Canter saferi",
    canterdesc:
      "The Canter saferi is another way to explore the core area of Corbett National Park. There are two canter saferis each days, one starting at 6:00AM   ",
    Elephant: "Elephant Safari",
    Elephdesc:
      "The Elephant Safari offers a unique way to see wildlife and the jungle.you'll travel through grasslands and thicks forests on path that cars cant's go.",
    jeep: "Jeep Safari",
    jeepdesc:
      "The Jeep Safari takes you away from everday life into a world utouched by machines. it's a thrilling journey through the wild of Corbett. ",
  },
  {
    Title: "Night Stay Details",
    Dhikala: "Dhikala Ecotourism Zone",
    desc: "Dhikala ecotourism zone in Corbett National Park is famous for its stunning scenery. it's the most popular tourism zone in india, with diverse wildlife. Dhikala is the largest of Cor-bett's five zones,feature Dense Sal forests, vast grasslands, narrow valleys, and the winding Ramganga River. The Ramganga River is the park's lifeline, enriching its beauty and nour-ishing the pants and animals. ",
    desc1:
      "The main attractions here all the Royal Bengal Tigers and Asiatic elephants.This zone has plenty of these big animals,so tourists often get to see them. Named after the large Dhikala grasslands,its the biggest grassland in Corbett.Besides tigers and elephants,you'll also find leopards, spotted deer, sambar deer,hog deer.langurs, wild boars,crocodiles, and many other animals and reptiles. ",
    canter: "Canter saferi",
    canterdesc:
      "The Canter saferi is another way to explore the core area of Corbett National Park. There are two canter saferis each days, one starting at 6:00AM   ",
    Elephant: "Elephant Safari",
    Elephdesc:
      "The Elephant Safari offers a unique way to see wildlife and the jungle.you'll travel through grasslands and thicks forests on path that cars cant's go.",
    jeep: "Jeep Safari",
    jeepdesc:
      "The Jeep Safari takes you away from everday life into a world utouched by machines. it's a thrilling journey through the wild of Corbett. ",
  },
];

function Index() {
  return (
    <div className="w-full">
      <NaveBar />
      <OtherPageHero image="/dikala-rest-house.jpg" name="DHIKALA REST HOUSE" />
      {/* <OtherPageHeroShort image="/dikala-rest-house.jpg" name="DHIKALA REST HOUSE" /> */}
      <div>
        <OverView1 />
        <div className="flex lg:w-[75%] 2xl:w-[65%] w-11/12  mx-auto flex-col justify-start items-start mb-12">
          {jungle?.map((e, index) => (
            <JungleSaferi
              key={index?.toString()}
              id={index?.toString()}
              Title={e?.Title}
              Dhikala={e?.Dhikala}
              desc={e?.desc}
              desc1={e?.desc1}
              canter={e?.canter}
              canterdesc={e?.canterdesc}
              Elephant={e?.Elephant}
              Elephdesc={e?.Elephdesc}
              jeep={e?.jeep}
              jeepdesc={e?.jeepdesc}
            />
          ))}
        </div>

        <div className="w-full mt-12">
          <ExperienceHd />
        </div>
        <TraficPrice1 />

        <div className=" bg-[#efefee] pb-12">
          <div className="flex lg:w-[70%] 2xl:w-[40%] w-11/12  mx-auto flex-col justify-start items-start">
            <FaqList data={faq} />
          </div>
        </div>
        <OurGuestLoveUs className="!mt-0" />
        <Nfooter />
      </div>
    </div>
  );
}

export default Index;
