import React from "react";

interface Data {
  title: string;
}

function Packageexc({ data }: { data: Data[] }) {
  return (
    <div className={`w-full px-5 py-3 border border-[#5d5d5d] mt-16`}>
      <h1 className="text-[21px] leading-[28px] font-medium font-Gotham">
        Package Exclusion:
      </h1>
      <ul className="px-3">
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
