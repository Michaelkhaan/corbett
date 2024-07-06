import Go from "@/components/Go";
import NaveBar from "@/components/NaveBar";
import Nfooter from "@/components/Nfooter";
import OurGuestLoveUs from "@/components/OurGuestLoveUs";
import PackageFAQ from "@/components/PackageFAQ";
import Image from "next/image";
import React from "react";

function index() {
  const faq = [
    {
      question: "Our Team",
      answer:
        "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
    },
    {
      question: "Join Us",
      answer:
        "4.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
    },
    {
      question: "Contact Us",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus porro at mollitia error placeat et harum necessitatibus animi quos, doloremque dolores illo temporibus fugiat quidem recusandae tempore quae? Officia, eaque aperiam? Doloribus aperiam voluptatibus qui iste deserunt voluptatem sit tempora reprehenderit rem, pariatur necessitatibus ipsum esse repellat quo quisquam beatae.",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full aspect-[1920/790] min-h-[300px] flex flex-col items-center overflow-hidden relative">
        <Image
          src="/hero.png"
          alt=""
          sizes="100%"
          layout="fill"
          className=" object-cover absolute inset-0 w-full h-full -z-10 "
        />
        <NaveBar />
        <h1 className="lg:text-4xl text-2xl 2xl:text-6xl text-white font-frinkRio font-bold left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] absolute">
          ABOUT US
        </h1>
      </div>
      <div className="w-full flex flex-col items-center mt-16">
        <h1 className="text-3xl font-frinkRio font-bold text-center">
          Welcome to Jim Corbett
        </h1>
        <div className="mt-14 flex px-4 flex-col items-center">
          <h1 className="text-xl font-Gotham font-bold">Who We Are:</h1>
          <p className="text-xl font-Gotham font-bold text-center">
            {`Jim corbett is more than just a name; it's a lagecy of onversation
            and natural beauty.`}
          </p>
          <p className="text-xl font-Gotham font-bold text-center">
            We are a dedicated tea of wildlifeenthusiasts, conservationaist, and
            eco-tourism advocates
          </p>
          <p className="text-xl font-Gotham font-bold text-center">
            Who are deeply passionate about preserving the rich biodiversity of
            jim
          </p>
          <p className="text-xl font-Gotham font-bold text-center">
            Corbett National Park and its surrounding areas. our mission is to
            protect and nurture
          </p>
          <p className="text-xl font-Gotham font-bold text-center">
            this pristine wilderness for future generations to enjoy.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-11/12 mt-20 grid grid-col-1 lg:grid-cols-3 2xl:grid-cols-2">
        <div className="w-full flex flex-col lg:items-end lg:col-span-2 2xl:col-span-1">
          <div>
            <h1 className="lg:text-3xl text-xl 2xl:text-5xl font-Gotham font-bold px-4">
              Our History
            </h1>
            <p className="lg:text-xl text-lg 2xl:text-2xl font-Gotham font-semibold lg:w-[600px] mt-4 px-4">
              {`Jim corbett was established by a group of indeviduals united by their love for nature and wildlife. Recognising the need for concerted efforts to conserve the region's unique flora founa, they came together to form an organization committed to the preservation of Jim corbett National Park. Since the then, our organization has grown and evolved, but our commitment to conservation remains steadfast.`}
            </p>
          </div>
        </div>
        <div className="w-full px-4 mt-4 lg:mt-0 lg:col-span-1">
          <Image
            src="/cantersaffari.png"
            alt=""
            width={0}
            height={0}
            className="w-full 2xl:w-[80%] h-[300px] 2xl:h-auto object-cover"
          />
        </div>
      </div>
      <div className="lg:w-3/4 mx-auto mt-20">
        <div className="px-4">
          <h1 className="text-3xl font-Gotham font-semibold">What We Do:</h1>
          <p className="text-lg font-Gotham font-semibold">
            At Jim Corbett, we engage in a veriety of initiative aimed at
            preserving the natural heritage of the region:
          </p>
        </div>
        <div className="w-full px-4 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="w-full h-[300px] lg:h-auto lg:w-1/2 2xl:w-1/4 aspect-video bg-black flex items-center justify-center mt-10">
            <h1 className="text-white text-xl font-Gotham font-bold">
              Coming Pic
            </h1>
          </div>
          <div>
            <h1 className="lg:text-xl 2xl:text-2xl font-Gotham font-bold">
              WildLife Conservation
            </h1>
            <p className="text-lg 2xl:text-xl font-Gotham font-semibold mt-3 lg:w-[600px] 2xl:w-[950px]">
              We Collaborate with local communities, government agencies, and
              conservation organizations to implement stratagies for the
              protection of endangered species and their habbits.
            </p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-col lg:flex-row lg:items-center justify-end gap-8 mt-2 lg:mt-0">
          <div>
            <h1 className="lg:text-xl 2xl:text-2xl font-Gotham font-bold lg:text-end">
              Eco-Tourism:
            </h1>
            <p className="text-lg 2xl:text-xl font-Gotham font-semibold mt-4 lg:text-end">
              Our guid tour and experiential programs offers visitors the
              oppurtunity to
            </p>
            <p className="text-xl font-Gotham font-semibold lg:text-end">
              Explore the wonder of Jim Corbett National Park while
            </p>
            <p className="text-xl font-Gotham font-semibold lg:text-end">
              minimising their ecological footprint
            </p>
          </div>
          <div className="w-full h-[300px] lg:h-auto lg:w-1/3 2xl:w-1/4 aspect-video bg-black flex items-center justify-center lg:mt-10">
            <h1 className="text-white text-xl font-Gotham font-bold">
              Coming Pic
            </h1>
          </div>
        </div>
        <div className="w-full px-4 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="w-full h-[300px] lg:h-auto lg:w-1/2 2xl:w-1/4 aspect-video bg-black flex items-center justify-center mt-10">
            <h1 className="text-white text-xl font-Gotham font-bold">
              Coming Pic
            </h1>
          </div>
          <div>
            <h1 className="lg:text-xl 2xl:text-2xl font-Gotham font-bold">
              Education and Outreach:
            </h1>
            <p className="text-lg 2xl:text-xl font-Gotham font-semibold mt-4 lg:w-[600px] 2xl:w-[900px]">
              Through workshops, seminars, and educational programs, we strive
              to raise awareness about the importance of conversation,
              biodiversity, and sustainable living practices.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#efefee] py-12 mt-16">
        <div className="flex md:w-[50%] w-11/12  mx-auto flex-col justify-start items-start">
          {faq?.map((e, index) => (
            <PackageFAQ
              key={index?.toString()}
              question={e?.question}
              answer={e?.answer}
            />
          ))}
        </div>
      </div>
      <OurGuestLoveUs className="!mt-0" />
      <div className="pt-12 pb-6">
        <Go />
      </div>
      <Nfooter />
    </div>
  );
}

export default index;
