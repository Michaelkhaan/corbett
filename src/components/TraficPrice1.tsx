import TraficTable from "./TraficTable";

const TraficPrice1 = () => {
  return (
    <div className="w-full bg-yellow-400 h-auto">
      <div className="lg:w-[75%] 2xl:w-[65%] mx-auto">
        <div className="flex justify-center md:gap-20 py-10 md:flex-row flex-col px-2">
          <h1 className="text-4xl whitespace-nowrap">Trafic Price</h1>

          <div className="flex-grow  mt-4  ">
            <p className="text-base 2xl:text-[20px] leading-5">
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
    </div>
  );
};
export default TraficPrice1;
