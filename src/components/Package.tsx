import React from "react";
import CardSkeleton from "./CardSkeleton";

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
        <h1 className="text-[21px] leading-[32px] font-medium font-GothamBook">
          Package inclusions
        </h1>
      )}

      <ul className="px-3">
        {isLoading
          ? Array.from({ length: 6 }).map((e, index) => (
            
                <div key={index?.toString()} className="bg-slate-200 animate-pulse h-2 mt-2 " />
              
            ))
          : null}
        {data?.map((e, index) => (
          <li
            key={index}
            className="text-[13px] leading-[24px] mt-3 font-GothamBook"
          >
            - {e?.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Package;
