import Image from "next/image";
import React from "react";

const RoomType = () => {
  const rooms = [
    {
      image: "/jeephero.png",
      title: "Executive Non Hill",
      desc: "Our representative will receive you at the airport and escort you to the Jungle Book Resort. Enjoy a traditional welcome drink and relish the stunning views of the surrounding jungle.",
    },
    {
      image: "/jeephero.png",
      title: "Executive Non Hill",
      desc: "Our representative will receive you at the airport and escort you to the Jungle Book Resort. Enjoy a traditional welcome drink and relish the stunning views of the surrounding jungle.",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="w-4/5 text-base lg:text-lg 2xl:text-[26px] font-Gotham font-extrabold leading-7 tracking-tighter my-5">
          Room Types
        </h1>
      </div>
      {rooms?.map((item:any,index) => (
        <div className="flex flex-col">
         <div className="flex py-4">
         <div className="w-[800px] h-[150px] relative">
            <Image
              src={item.image}
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
            <div className="px-3">

            <h1 className="text-gray-600 font-serif font-semibold text-sm">
              {item?.title}
            </h1>
            <p className="lg:text-sm text-xs 2xl:text-xl font-GothamBook  leading-8 mt-2 text-wrap break-words">{item?.desc}</p>
          
            </div>
          
         </div>
         <p
            className={`w-full ${
              index !== (rooms.length -1) ? 'border-b' : ''
            }`}
          ></p>
        </div>
      ))}
      
    </div>
  );
};

export default RoomType;
