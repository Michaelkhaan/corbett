import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface SideBarArray {
  title: string;
  link: string;
}

interface SideBarProps {
  data: SideBarArray[];
  mainClassName?: string;
  SideBarLogoClassName?: string;
}

const SideBar: React.FC<SideBarProps> = ({
  data,
  mainClassName,
  SideBarLogoClassName,
}) => {
  const router = useRouter();
  const handleItemClick = () => {};

  const path = router.asPath.split("/");
  const excludeLast = path.slice(0, -1);
  const finalRoute = excludeLast.join("/");

  return (
    <div
      className={`h-screen sm:pr-0 flex flex-col bg-[#092C4C] ${mainClassName}`}
    >
      {/* Logo div start from here*/}
      <div
        className={`sticky flex justify-center py-6 ${SideBarLogoClassName}`}
      >
        <div className="relative">
          <h1 className="2xl:text-3xl text-2xl text-white font-bold font-frinkRio cursor-pointer">
            Corbett
          </h1>
          <span
            className={`w-2 aspect-square rounded-full bg-[#00f9e9] absolute top-1 -right-2`}
          ></span>
        </div>
      </div>
      {/* Logo div end here */}
      <div
        id="scroll-1"
        className="overflow-y-auto items-center sm:items-start flex flex-col bg-[#092C4C] custom-scrollbar"
      >
        <div className="flex flex-col bg-[#092C4C]">
          <div>
            <div className="w-full flex flex-col items-center sm:items-start px-4 sm:px-4 gap-2 lg:gap-4 text-xs  whitespace-nowrap sm:text-base lg:text-base  mt-3 md:mt-5">
              {data.map((item, index) => (
                <Link
                  key={index}
                  href={item?.link}
                  title={item?.title}
                  onClick={handleItemClick}
                  className={`text-white flex items-center text-center px-3 lg:pl-3 lg:pr-16 py-1 rounded-lg gap-1 md:gap-3 hover:bg-gray-500 w-full cursor-pointer ${
                    item?.link === router?.pathname ||
                    (router?.pathname?.startsWith(item?.link) &&
                      item?.link !== "/")
                      ? "bg-gray-500 px-2.5 w-full"
                      : ""
                  }`}
                >
                  <p className="text-base hidden sm:block">{item?.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
