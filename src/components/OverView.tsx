import Image from "next/image";

const OverView = ({ image = "/cantersaffari.png" }: any) => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="lg:w-[75%] 2xl:w-[65%] w-11/12 grid md:grid-cols-2 grid-col-1">
        <div className="flex flex-col items-start justify-center">
          <p className="2xl:text-3xl text-xl font-GothamBook font-bold tracking-wide">
            Overview
          </p>
          <p className="mt-2 text-[14px] 2xl:text-[16px] w-11/12 font-normal font-GothamBook">
            {` Welcome to JM Corbett Jeep Safari, your gateway to adventure in the heart of nature's bounty!
            Nestled amidst the picturesque landscapes of Jim Corbett National Park, 
            our safari experiences offer an unparalleled opportunity to immerse yourself 
            in the beauty and diversity of India.`}
          </p>
        </div>
        <div className="flex justify-center items-center lg:mt-0 mt-6">
          <img src={image} alt="Canter Safari" />
        </div>
      </div>
    </div>
  );
};

export default OverView;
