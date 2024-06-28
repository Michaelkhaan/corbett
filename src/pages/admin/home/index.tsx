import Layout from "@/components/Layout";
import Explore from "@/components/admin/Explore";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

function index() {
  return (
    <Layout>
      <h1 className="text-xl font-Gotham font-semibold mt-4">
        Add and Delete Hero Section Images
      </h1>
      <div className="w-full flex items-center flex-wrap gap-5">
        <div className="relative w-20 rounded-lg overflow-hidden group cursor-pointer">
          <Image
            src={"/cantersaffari.png"}
            alt=""
            width={0}
            height={0}
            className="w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <MdDelete className="text-red-500" />
            <IoEyeSharp className="text-blue-500" />
          </div>
        </div>
        <label htmlFor="" className="w-20 rounded-lg border p-7 cursor-pointer">
          <FaPlus className="text-blue-500" />
        </label>
      </div>
      <div className="w-full mt-5">
        <div>
          <h1 className="text-lg font-Gothamfont-bold">Title</h1>
          <input
            type="text"
            className="w-full px-2 py-3 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-Gothamfont-bold">Discription</h1>
          <input
            type="text"
            className="w-full px-2 py-3 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-Gothamfont-bold">Button Title</h1>
          <input
            type="text"
            className="w-full px-2 py-3 border rounded-lg focus:outline-none"
          />
        </div>
      </div>
      <hr className="w-full mt-5" />
      {/* <div className="w-full mt-4">
        <h1 className="text-xl font-Gotham font-bold">Explore Section</h1>
        <div className="mt-4">
          <h1 className="text-lg font-Gothamfont-bold">Title</h1>
          <input
            type="text"
            className="w-full px-2 py-3 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-lg font-Gothamfont-bold">SubTitle</h1>
          <input
            type="text"
            className="w-full px-2 py-3 border rounded-lg focus:outline-none"
          />
        </div>
      </div> */}
      <Explore />
    </Layout>
  );
}

export default index;
