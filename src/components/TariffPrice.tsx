import PriceSection from "./PriceSection";

const TariffPrice = () => {
  return (
    <div className="w-full bg-yellow-400 md:py-0 py-5 lg:px-0 px-4 flex justify-center items-center flex-col">
      <div className="lg:w-2/3 2xl:w-1/2 w-11/12 lg:flex-row flex-col flex justify-between items-start py-14 px-4">
        <div className="lg:w-1/3 w-full flex justify-start items-start">
          <p className="text-black text-lg font-GothamBook font-semibold ">
            Tariff Prices
          </p>
        </div>
        <div className="lg:w-2/3 w-full flex flex-col justify-start items-center space-y-2">
          <p className="text-black font-normal text-xs leading-6 font-GothamBook">
            {
              "Prepare for an adrenaline-fueled expedition as you traverse rugged terrain and dense foliage in search of the park's majestic inhabitants. From elusive tigers and graceful elephants to vibrant birdlife and endemic flora, every moment promises a new and exhilarating encounter with nature's wonders."
            }
          </p>
          <p className="text-black font-normal text-xs leading-6 font-GothamBook mt-3">
            {
              "Our knowledgeable guides share fascinating insights into the park's ecology and conservation efforts, enriching your safari experience with their expertise and passion for wildlife."
            }
          </p>
        </div>
      </div>
      <PriceSection />
    </div>
  );
};

export default TariffPrice;
