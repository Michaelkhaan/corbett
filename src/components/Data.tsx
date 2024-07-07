"use client";
import React from "react";

export default function Data() {
  return (
    <div className="w-full border border-black px-4 py-4">
      <h1 className="mb-5 text-lg ">Where do you want to go?</h1>

      <input
        type="date"
        placeholder="travel date"
        className="px-12 w-full focus:outline-none border border-black py-1 mb-4 hover:border-black"
      />

      <input
        type="text"
        placeholder="Number or Email Address"
        className=" px-12 w-full focus:outline-none border border-black py-1 mb-4"
      />

      <input
        type="text"
        placeholder="City"
        className="px-12 w-full focus:outline-none border border-black py-1 mb-4"
      />
      <button className=" rounded-full bg-yellow-400 px-12 py-1">Submit</button>
    </div>
  );
}
