import TraficTable from "./TraficTable";

const TraficPrice1 = () => {
  return (
    <div className="w-full bg-yellow-400 md:py-0 py-5 lg:px-0 flex justify-center items-center">
      <div className="lg:w-[75%] 2xl:w-[65%] w-11/12 lg:flex-row flex-col flex justify-between items-start py-14 ">
        <div className="lg:w-1/3 w-full flex justify-start items-start">
          <p className="text-black 2xl:text-3xl text-xl font-GothamBook font-bold ">
            Tariff Prices
          </p>
        </div>
        <div className="lg:w-2/3 w-full flex flex-col justify-start items-center space-y-2">
          <p className="text-black font-normal text-[14px] leading-6 font-GothamBook mb-6">
            {`The cost of stying at Dhikala varies based on the type of
              accomadation. so our option range from cozy forest rest houses to
              bunk beds in logs huts. all equiped with basic amenities. price
              typically start at around INR 2,000 per night for a standard room
              and can go up to INR 5,000 for more luxurious options.it's
              important to book well in advance, espicallly during peak season,
              to secure your spot and enjoy seamless wildlife edventure.`}
          </p>

          <TraficTable />
        </div>
      </div>
    </div>
  );
};
export default TraficPrice1;
