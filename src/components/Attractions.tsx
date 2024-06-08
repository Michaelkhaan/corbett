

import React from "react";
import Image from "next/image";

const Attractions = () => {
  return (
    <div className="relative w-full h-screen bg-white mb-6"> 
      <div className="relative w-full h-full flex justify-center items-center"> 
        <Image src="/box.png" alt="box" layout="fill"  className="object-contain"/>
      </div>
      <p className="absolute top-20 left-1/3 transform -translate-x-1/2 text-2xl">Attractions</p>
      <div className="absolute top-40 left-[62%] transform -translate-x-1/2">
        <p className="text-xl">Wildlife sightings</p>
        <p className="text-xs lg:w-[70%] w-11/12">Witness the untamed beauty of Jim Corbett National Park as you encounter a diverse array of wildlife species, including tigers, leopards, elephants, deer, and more.</p>
      </div>
      <div className="absolute top-80 mt-4 left-[56%] transform -translate-x-1/2">
        <p className="text-xl lg:w-[58%] text-end w-11/12">Scenic Landscapes</p>
        <p className="text-xs lg:w-[58%] w-11/12 text-right rtl">
          Marvel at the park's breathtaking vistas, from dense forests meandering rivers to rolling hills and tranquil lakes, each offering postcard-worthy views and photo opportunities.
        </p>
      </div>
      <div className="absolute bottom-10 left-[62%] transform -translate-x-1/2">
        <p className="text-xl lg:w-[58%] w-11/12">Scenic Landscapes</p>
        <p className="text-xs lg:w-[58%] w-11/12">
          Marvel at the park's breathtaking vistas, from dense forests meandering rivers to rolling hills and tranquil lakes, each
        </p>
      </div>
    </div>
  );
};

export default Attractions;
