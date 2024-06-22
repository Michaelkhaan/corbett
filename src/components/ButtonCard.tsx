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
    <div className="2xl:w-[1000px] lg:w-[70%] md:w-4/5 w-11/12 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-2 bg-[#d8d8d8] rounded-lg px-1 lg:px-8 py-3 lg:py-8">
      {buttonCard?.map((e, index) => (
        <input
          key={index}
          placeholder={e?.title}
          className="w-11/12 mx-auto bg-white rounded-full px-5 py-2 flex items-center focus:outline-none"
        >
          {/* <h1 className="text-[13px] font-Gotham font-medium">{e?.title}</h1> */}
        </input>
      ))}
      <button className="w-11/12 mx-auto bg-[#f8bd01] rounded-full px-2 text-[13px] font-Gotham font-bold uppercase py-2">
        Submit
      </button>
    </div>
  );
}

export default ButtonCard;
