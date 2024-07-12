import React from "react";

interface Data {
  title: string;
}

function Package({ data }: { data: Data[] }) {
  console.log(data, "..");
  return (
    <div className="w-full px-5 py-4 border border-[#5d5d5d]">
      <h1 className="text-[21px] leading-[32px] font-medium font-Gotham">
        Package inclusions
      </h1>
      <ul className="px-3">
        {data?.map((e, index) => (
          <li
            key={index}
            className="text-[13px] leading-[24px] mt-3 font-Gotham"
          >
            - {e?.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Package;
