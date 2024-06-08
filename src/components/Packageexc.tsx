import React from "react";

interface Props {
  className?: string;
}

function Packageexc({ className }: Props) {
  return (
    <div className={`w-full px-5 py-3 border border-[#5d5d5d] ${className}`}>
      <h1 className="text-[21px] leading-[28px] font-medium font-Gotham">
        Package Exclusion:
      </h1>
      <ul className="px-3">
        <li className="text-[13px] leading-[28px] font-Gotham">
          - Airfare to in the nearest airport
        </li>
        <li className="text-[13px] leading-[28px] font-Gotham">
          - Travel insurance
        </li>
        <li className="text-[13px] leading-[28px] font-Gotham">
          - Optional tours and activities not mention in the itinerary
        </li>
        <li className="text-[13px] leading-[28px] font-Gotham">
          - Any pearsonal expenses
        </li>
        <li className="text-[15px] font-medium leading-[28px] font-Gotham">
          Price is- 1200
        </li>
      </ul>
    </div>
  );
}

export default Packageexc;
