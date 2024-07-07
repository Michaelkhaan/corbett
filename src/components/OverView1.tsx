import Image from "next/image";
const OverView1 = () => {
  return (
    <div className="w-full ">
      <div className=" lg:w-[75%] 2xl:w-[65%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
        <div className="mt-5">
          <h1 className="2xl:text-3xl text-lg font-Gotham font-bold tracking-wide">
            Overview
          </h1>
          <p className="text-[14px] 2xl:text-[20px] font-Gotham mt-3 tracking-wide leading-6">
            {` Dhikala is a popular tourist spot in corbett Tiger Reserved.Many
            elephant and spoted deer can be seen in the large Dhikala Chaur
            area. it's also a realy place to see the rare Hog Deer. Wildelife
            lover enjoy
            staying at Dhikala and to get there, you initially enter through
            Dhangari gate, which is 18 km from Ramnagar and 31 km from the
            Dhikala complex.`}
          </p>
          <p className="mt-5 text-[14px] 2xl:text-[20px] font-Gotham tracking-wide leading-6">
            {" "}
            {` Dhikala is open to tourists from November 15 to June 15,but
            unfortunately it's closed during the monson season. The complex
            overLooks the`}
            <br />
            Ramganga Reservoir, a great spot to see crocodiles and gharials.{" "}
          </p>
        </div>
        <div className="lg:mt-0 mt-6">
          <Image
            src="/cantersaffari.png"
            className="w-full lg:w-[300px] 2xl:w-[500px] md:h-auto h-[300px] object-cover "
            alt="Canter Safari"
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className=" lg:w-[75%] 2xl:w-[65%] px-2 mx-auto mt-10">
        <h1 className="text-lg 2xl:text-2xl font-bold tracking-wide">
          Accomodation: Rest House a Dhikala Forest
        </h1>
        <p className="text-[14px] 2xl:text-[20px] tracking-wide leading-6">
          With us, various types of accomadations are variable. There are a
          Forest Rest House , Cabins, hutments, an
          <br />
          annex, and 24 bunk beds in log huts. The rooms are comfortable with
          all basic amenities.
        </p>
        <h1 className="text-lg 2xl:text-2xl font-bold mt-8">
          Food & Other Serivce
        </h1>
        <p className="text-[14px] 2xl:text-[20px] tracking-wide mb-24 leading-6">
          A nice Resturant service visitor at hte Dhikala Tourist Complex,
          offers amazing buffets meals with various variaty <br />
          of good qualit foods. There is also a small canteen available for your
          comfort. In the evening, vistors can watch wildlife <br /> moive and
          read books for our throughtfully well-stocked library.
        </p>
      </div>
    </div>
  );
};
export default OverView1;
