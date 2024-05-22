import React from "react";

function Buttons() {
  return (
    <div className="w-full lg:w-1/2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-0.5 px-4">
      <button className="bg-[#3f2892] px-16 py-3 text-white text-xl font-bold font-Gotham">
        Jeep
      </button>
      <button className="bg-white px-16 py-3 text-black text-xl font-bold font-Gotham">
        Canter
      </button>
      <button className="bg-white px-16 py-3 text-black text-xl font-bold font-Gotham">
        Elephent
      </button>
    </div>
  );
}

export default Buttons;
