import React from "react";
import Image from "next/image";

const Attractions = ({ data, IsShow = false }: any) => {
  return (
    <>
      <div className="relative lg:w-2/3 2xl:w-1/2 w-11/12 px-4 mx-auto bg-white mb-6">
        {IsShow ? (
          <>
            <h1 className="text-lg font-GothamBook font-semibold">
              What We Do:
            </h1>
            <p>
              At Jim Corbett, we engage in a variety of intiatives aimed at
              preserving the nature heritage of the region.
            </p>
          </>
        ) : null}{" "}
        {data.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={`flex my-12 flex-col md:flex-row items-center ${
                (index + 1) % 2 == 0 ? "md:flex-row-reverse" : ""
              } `}
            >
              <img
                src={item.image}
                alt=""
                // className="w-full md:w-[200px] md:h-[150px]"
              />
              <div
                className={`mt-4 max-w-[500px] text-center md:text-left text-black  ${
                  (index + 1) % 2 == 0
                    ? "text-center md:text-right md:mr-12"
                    : "md:ml-12"
                } `}
              >
                <p className="2xl:text-3xl lg:text-xl text-base">
                  {item.title}
                </p>
                <p className="text-xs leading-6 font-GothamBook 2xl:text-lg ">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Attractions;
