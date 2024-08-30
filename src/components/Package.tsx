import React from "react";
import CardSkeleton from "./CardSkeleton";
import { LuCheckCircle } from "react-icons/lu";

interface Data {
  title: string;
}

function Package({
  data,
  isLoading = false,
}: {
  data: Data[];
  isLoading: boolean;
}) {
  console.log(data, "..");
  return (
    <div className="w-full px-5 py-4 border border-[#5d5d5d]">
      {isLoading ? (
        <div className="bg-slate-200 animate-pulse h-4 w-1/2 md:w-1/3" />
      ) : (
        <div className="flex justify-start">
        <h1 className="text-[21px] leading-[32px] font-semibold font-GothamBook border-b border-black">
          Package Inclusions
        </h1>
        </div>
      )}

      <ul className="px-3 mt-3">
        {isLoading
          ? Array.from({ length: 6 }).map((e, index) => (
            
                <div key={index?.toString()} className="bg-slate-200 animate-pulse h-2 mt-2 " />
              
            ))
          : null}
        {data?.map((e, index) => (
          <li
            key={index}
            className="text-[13px] leading-[24px] font-GothamBook flex items-center gap-2"
          >
            <LuCheckCircle stroke="#f8bd01" /> {e?.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Package;
