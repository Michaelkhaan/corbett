import React from "react";
import { TiMediaPlay } from "react-icons/ti";

interface Props {
  question: string;
}

function FAQ({ question }: Props) {
  return (
    <div className="w-full border rounded-lg px-2 py-3 flex items-center justify-between mt-4 cursor-pointer">
      <h1>{question}</h1>
      <span className="w-6 aspect-square bg-black rounded-full flex items-center justify-center">
        <TiMediaPlay className="text-white" />
      </span>
    </div>
  );
}

export default FAQ;
