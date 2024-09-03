import Image from "next/image";
import React from "react";
import { LuCheckCircle } from "react-icons/lu";

interface roomProps {
  data: any;
}
const RoomType = ({ data }: roomProps) => {
  const roomsData = data?.getNightStayById?.Rooms || [];
  return (
    <div>
      <div>
        <h1 className="w-full text-sm sm:text-base lg:text-lg 2xl:text-[26px] font-GothamBook font-extrabold leading-7 tracking-tighter mt-2">
          Room Types
        </h1>
      </div>
      {roomsData.map((item: any, index: any) => (
        <div key={index} className="flex flex-col">
          <div className="flex flex-col sm:flex-row py-4">
            <div className="w-full sm:w-[300px] lg:w-[400px] xl:w-[700px] 2xl:w-[800px] h-[150px] relative">
              <Image
                src={item.image}
                alt="image"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="px-3 mt-2 sm:mt-0">
              <h1 className="text-black font-GothamBook font-semibold text-xs sm:text-sm">
                {item?.title}
              </h1>
              <p className="text-xs sm:text-sm lg:text-sm 2xl:text-xl text-justify font-GothamBook leading-6 mt-2">
                {item?.description}
              </p>
            </div>
          </div>
          <p
            className={`w-full mb-2 ${index !== roomsData.length - 1 ? "border-b" : ""
              }`}
          ></p>
        </div>
      ))}
      {data?.getNightStayById?.Inclusions?.length ? (
        <div className="w-full sm:w-4/5 flex border border-gray-600 h-auto mt-4">
          <div className="w-[95%] mx-auto p-5">
            <h1 className="text-sm sm:text-base lg:text-lg 2xl:text-[26px] font-GothamBook font-extrabold leading-7 tracking-tighter my-2">
              Room Facilities
            </h1>
            <div className="text-xs sm:text-sm lg:text-sm 2xl:text-xl text-black font-GothamBook ml-1 sm:ml-3 mb-5">
              {data?.getNightStayById?.Inclusions?.map((item: any, index: any) => (
                <p key={index?.toString()} className="flex items-center gap-2">
                  <LuCheckCircle stroke="#f8bd01" /> {item?.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RoomType;
