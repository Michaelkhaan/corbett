"use client";
import useAuth from "@/zustand/store";
import React from "react";

const Header: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div
      className="w-full shadow-lg z-50 rounded bg-[#F8F8F8] sticky top-0 py-4 px-1 md:px-4 flex justify-end items-center"
    >
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      >
        LogOut
      </button>
    </div>
  );
};

export default Header;
