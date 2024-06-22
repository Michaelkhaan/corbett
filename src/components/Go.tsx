const Go=()=>{

    return(
        <div className="w-full mt-10">
        <h1 className="text-lg font-semibold font-Gotham text-center leading-6 text-base ">
          LET YOUR <span className="font-[400]">SAFARI TOUR</span> WITH SPECIAL OFFERS AND DEAL
        </h1>
        <div className="w-full flex items-center justify-center gap-2 mt-3 pb-5 px-4">
          <input
            type="text"
            placeholder="+91 000000000"
            className="border border-black outline-none bg-transparent px-2 py-1 w-full lg:w-1/5"
          />
          <button className="bg-black rounded-sm px-4 py-1 text-white font-bold">
            GO
          </button>
        </div>
      </div>
    )
}

export default Go