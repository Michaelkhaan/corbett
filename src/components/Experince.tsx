const Experience=()=>{
    return (
        <div className="w-full bg-black sm:h-[300px] h-auto py-4 flex justify-center items-center">
        <div className="lg:w-[65%] w-11/12 lg:flex-row flex-col flex justify-between items-start">
          <div className=" lg:w-1/3 w-full flex justify-start items-start">
            <p className="text-yellow-500 text-lg font-Gotham ">Experience</p>
          </div>
          <div className="lg:w-[60%] w-11/12 flex flex-col justify-start items-center space-y-2">
            <p className="text-white font-normal text-xs leading-6 font-Gotham">
              {"Prepare for an adrenaline-fueled expedition as you traverse rugged terrain and dense foliage in search of the park's majestic inhabitants. From elusive tigers and graceful elephants to vibrant birdlife and endemic flora, every moment promises a new and exhilarating encounter with nature's wonders."}
            </p>
            <p className="text-white font-normal text-xs leading-6 font-Gotham">
             {" Our knowledgeable guides share fascinating insights into the park's ecology and conservation efforts, enriching your safari experience with their expertise and passion for wildlife."}
            </p>
          </div>
        </div> 
      </div>  
    )
}


export default Experience