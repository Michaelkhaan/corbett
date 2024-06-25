

import React from "react";
import Image from "next/image";

const Attractions = () => {
  const data=[
    {
      image:"/blackcor.jpg",
      title:"Wildlife sightings",
      description:"Witness the untamed beauty of Jim Corbett National Park as you encounter a diverse array of wildlife species, including tigers, leopards, elephants, deer, and more."
    },
    {
      image:"/blackcor.jpg",
      title:"Scenic Landscape",
      description:"Experience the stunning beauty of Corbett National Park, with it's dense forests and winding rivers, perfect for capturing unforgettable moments"
    },
    {
      image:"blackcor.jpg",
      title:"Bird Watching",
      description:"Join guided bird watching trips to see over 600 birds species, including colourfull kingfishers and magestic eagles and enjoy the peaceful world of birds"
    },
    
  ]
  return (
    <div className="relative max-w-[800px] px-6 mx-auto bg-white mb-6">
    {/* <div className="relative w-full flex justify-center items-start md:items-center">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image src="/box.png" alt="box" layout="fill" className="object-contain" />
      </div>
      <div className="absolute 2xl:top-64 top-40 mt-4 2xl:left-[60%] left-[62%]  transform -translate-x-1/2 ">
        <p className="2xl:text-3xl lg:text-xl text-base text-start">Wildlife sightings</p>
        <p className="text-xs leading-0 font-Gotham 2xl:text-lg  2xl:w-[76%]  md:w-[70%] w-full">Witness the untamed beauty of Jim Corbett National Park as you encounter a diverse array of wildlife species, including tigers, leopards, elephants, deer, and more.</p>
      </div>
      <div className="absolute 2xl:top-[610px] xl:top-[600px] lg:top-80 top-60 mt-4 left-[52%] transform -translate-x-1/2">
        <p className="2xl:text-3xl xl:text-2xl text-xl lg:w-[68%] text-end w-11/12">Scenic Landscapes</p>
        <p className="2xl:text-lg xl:text-lg font-Gotham text-xs lg:w-[68%] w-11/12 text-right rtl">
          {"Marvel at the park's breathtaking vistas, from dense forests meandering rivers to rolling hills and tranquil lakes, each offering postcard-worthy views and photo opportunities."}
        </p>
      </div>
      
    </div> */}
      {/* 
      <div className="absolute 2xl:top-64 top-40 2xl:left-[60%] left-[62%] transform -translate-x-1/2">
        <p className="2xl:text-3xl lg:text-xl text-base">Wildlife sightings</p>
        <p className="text-xs leading-0 font-Gotham 2xl:text-lg lg:text-base lg:w-[76%] w-11/12">Witness the untamed beauty of Jim Corbett National Park as you encounter a diverse array of wildlife species, including tigers, leopards, elephants, deer, and more.</p>
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
      </div> */}  
          {
            data.map((item,index)=>{
              return <div key={index} className={`flex my-12 flex-col md:flex-row items-center ${(index + 1) % 2 == 0 ? "md:flex-row-reverse":""} `}> 
              <img src={item.image} alt="" className="w-full md:w-[200px] md:h-[150px]"/>
                <div className={`mt-4 max-w-[500px] text-center md:text-left text-black  ${(index+1) % 2 == 0 ? "text-center md:text-right md:mr-12":"md:ml-12"} `}>
                <p className="2xl:text-3xl lg:text-xl text-base">{item.title}</p>
                <p className="text-xs leading-6 font-Gotham 2xl:text-lg ">{item.description}</p>
              </div>
              </div>
            })
          }
    </div>

  );
};

export default Attractions;

