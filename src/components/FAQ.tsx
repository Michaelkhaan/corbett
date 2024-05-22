import React, { useState } from "react";
import { TiMediaPlay } from "react-icons/ti";

interface Props {
  question: string;
  key?: string;
  answer?: string;
}

function FAQ({ question, key, answer }: Props) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id: any) => {
    console.log(id);
    setOpenId(openId === id ? null : id);
  };

  return (
    <div
      className="w-full border rounded-lg px-2 py-3 flex flex-col items-center justify-between mt-4 cursor-pointer"
      onClick={() => handleToggle(key)}
    >
      <div className="flex justify-between items-center  w-full">
        <h1 className="font-Gotham text-sm">{question}</h1>
        <span className="w-6 aspect-square bg-black rounded-full flex items-center justify-center">
          <TiMediaPlay
            className={`text-white ${
              openId === key
                ? "rotate-90 transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          />
        </span>
      </div>
      <div
        className={`w-full text-black transition-all duration-1000 ease-in-out  ${
          openId === key ? "" : "hidden"
        }`}
      >
        <div className="">{answer}</div>
      </div>
    </div>
  );
}

export default FAQ;

{
  /* <div className="p-[1px] rounded-lg w-full">
{data.map((faq, index) => (
  <div
    key={index}
    className="p-[1px] rounded-lg justify-center my-5 items-center flex w-full  border-tb-g"
  >
    <div className="rounded-lg justify-center items-start flex w-full">
      <div className="w-full">
        <div
          className="w-full flex border border-white/5 rounded-lg justify-between items-center  text-white px-4 py-2 backdrop-blur-lg shadow-xl bg-gradient-to-r from-primary/20 to-black/60"
          onClick={() => handleToggle(index)}
        >
          <p className="text-xl">{faq.question}</p>
          <ArrowIcon />
        </div>
        <div
          className={`w-full flex flex-col border justify-start border-white/5 rounded-lg border-white bg-opacity-60 text-white px-4 py-2 backdrop-blur-lg shadow-xl transition-all duration-1000 ease-in-out  ${
            openId === index ? "" : "hidden"
          }`}
        >
          <div className="p-5">{faq.answer}</div>
        </div>
      </div>
    </div>
  </div>
))}
</div> */
}
