import Image from "next/image";

const OverView = () => {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-11/12 md:w-[65%] lg:w-1/2 grid md:grid-cols-2 grid-col-1">
        <div className="flex flex-col items-start justify-center">
          <p className="2xl:text-2xl text-lg font-GothamBook font-bold text-start">
            Overview
          </p>
          <p className="mt-2 text-[10px] w-11/12 font-normal font-GothamBook">
            {` Welcome to JM Corbett Jeep Safari, your gateway to adventure in the heart of nature's bounty!
            Nestled amidst the picturesque landscapes of Jim Corbett National Park, 
            our safari experiences offer an unparalleled opportunity to immerse yourself 
            in the beauty and diversity of India.`}
          </p>
        </div>
        <div className="flex justify-center items-center lg:mt-0 mt-6">
          <Image
            src="/cantersaffari.png"
            className="md:w-[280px] md:h-[180px] w-full aspect-[280/180]"
            alt="Canter Safari"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
};

export default OverView;
