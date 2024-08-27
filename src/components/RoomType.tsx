import Image from "next/image";
import React from "react";

interface roomProps{
  data: any 
}
const RoomType = ({data}:roomProps) => {
  const roomsData = data?.getNightStayById?.Rooms || [];
  return (
    <div>
      <div>
        <h1 className="w-4/5 text-base lg:text-lg 2xl:text-[26px] font-GothamBook font-extrabold leading-7 tracking-tighter my-5">
          Room Types
        </h1>
      </div>
      {roomsData?.map((item:any,index:any) => {
        return <div key={index} className="flex flex-col">
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

            <h1 className="text-black  font-GothamBookBook font-semibold  text-sm">
              {item?.title}
            </h1>
            <p className="lg:text-sm text-xs 2xl:text-xl font-GothamBook  leading-8 mt-2 text-wrap break-words">{item?.description}</p>
          
            </div>
          
         </div>
         <p
            className={`w-full mb-2 ${
              index !== (data.length -1) ? 'border-b' : ''
            }`}
          ></p>
        </div>
 } )}
      {/* border box for facilities */}
      <div className="w-4/5 flex border border-gray-600 h-auto">
        <div className="w-[95%] mx-auto p-5">
        <h1 className="text-base lg:text-lg 2xl:text-[26px] font-GothamBook font-medium leading-7 tracking-tighter my-2">Room Facilities</h1>
        <div className="lg:text-sm text-xs text-black 2xl:text-xl font-GothamBook ml-3 mb-5">
          <p>- Welcome Drink</p>
          <p>- 02 Mineral Water Bottle</p>
          <p>- LED TV</p>
          <p>- Cable Connection</p>
          <p>- Laundry Facility</p>
          <p>- Luggage Storage</p>
          <p>- Accommodation For Two(02) Adults</p>
          <p>- Room Size 25 Sq.ft</p>
          <p>- King Size Bed with 108 mattress</p>
          <p>- Outside setting area</p>
          <p>- Private Garden</p>
          <p>- In Room Cooling AC</p>
          <p>- Widescreen LED</p>
          <p>- Tea/Coffee Maker</p>
          <p>- Wifi Connection (on request)</p>

        </div>
        </div>
      </div>
    </div>
  );
};

export default RoomType;
