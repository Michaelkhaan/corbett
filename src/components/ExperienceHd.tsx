const ExperienceHd = () => {
  return (
    <div className="w-full bg-black py-14 flex justify-center items-center">
      <div className="lg:w-2/3 xl:w-2/3 2xl:w-1/2 w-11/12 lg:flex-row flex-col flex justify-between items-start px-4">
        <div className=" lg:w-1/3 flex justify-start items-start">
          <p className="text-yellow-500 text-lg font-GothamBook font-semibold ">
            Experience
          </p>
        </div>
        <div className="flex flex-col justify-start items-center space-y-2 w-11/12 lg:w-2/3">
          <p className="text-white font-normal text-xs leading-6 font-GothamBook">
            {`Staying overnight at Dhikala is a must for wildlife fans. The trip
            form Dhangari gate takes you through beautiful
            forests,grasslands,and rivers,the loadge blends old-world charm with
            mordern comforts, offering cozy rooms,a restaurant, evening wildlife
            moives and a library. Nearby watchtowers give great views of the
            Ramganga River and grassland , where you can see elephants, deer,
            and tiger. with us, you are surly in for a great experience!`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceHd;
