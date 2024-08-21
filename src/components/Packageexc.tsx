import React from "react";

interface Data {
  title: string;
}

function Packageexc({
  data,
  isLoading = false,
}: {
  data: Data[];
  isLoading: boolean;
}) {
  return (
    <div className={`w-full px-5 py-3 border border-[#5d5d5d] mt-16`}>
      {isLoading ? (
        <div className="bg-slate-200 animate-pulse h-4 w-1/2 md:w-1/3" />
      ) : (
        <h1 className="text-[21px] leading-[28px] font-medium font-Gotham">
          Package Exclusion:
        </h1>
      )}

      <ul className="px-3">
        {isLoading
          ? Array.from({ length: 6 }).map((e, index) => (
              <div className="bg-slate-200 animate-pulse h-2 mt-2 " />
            ))
          : null}
        {data?.map((e, index) => (
          <li key={index} className="text-[13px] leading-[28px] font-Gotham">
            - {e?.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Packageexc;
