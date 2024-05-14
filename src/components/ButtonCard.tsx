import React from "react";

function ButtonCard() {
  const buttonCard = [
    {
      title: "Travel Date",
    },
    {
      title: "Number",
    },
    {
      title: "City",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-4 bg-[#d8d8d8] rounded-lg px-3 lg:px-8 py-4">
      {buttonCard?.map((e, index) => (
        <div
          key={index}
          className="w-full bg-white rounded-full px-2 py-1 flex items-center"
        >
          <h1 className="text-[10px] font-medium">{e?.title}</h1>
        </div>
      ))}
      <button className="w-full bg-[#f8bd01] rounded-full px-2 text-[10px] font-bold uppercase py-1">
        Submit
      </button>
    </div>
  );
}

export default ButtonCard;
