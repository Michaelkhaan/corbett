"use client";
import React, { useState } from "react";
import { TiMessage } from "react-icons/ti";
import { AiOutlineBell } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div
      className={`w-full shadow-lg z-50 rounded bg-[#F8F8F8] sticky top-0  py-8 px-1 md:px-4 flex justify-between items-center`}
    ></div>
  );
};

export default Header;
