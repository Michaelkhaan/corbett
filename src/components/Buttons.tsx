import React, { useState } from "react";

function Buttons() {
  const tabs = [
    { name: "Jeep", key: "jeep" },
    { name: "Canter", key: "canter" },
    { name: "Elephent", key: "elephent" },
  ];
  const [tab, setTab] = useState("jeep");
  return (
    <div className="w-full lg:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-0.5 px-4">
      {tabs?.map((e, index) => (
        <button
          key={index}
          onClick={() => setTab(e?.key)}
          className={` ${
            tab === e.key ? "bg-[#f8bd01] text-white" : "bg-white text-black"
          }   px-16 py-3  text-xl font-bold font-Gotham`}
        >
          {e?.name}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
