import React, { useState } from "react";

function AddnewPackage() {
  const [days, setDays] = useState([{ day: "Day 1", description: "" }]);
  const handleAddDay = () => {
    const newDay = { day: `Day ${days.length + 1}`, description: "" };
    setDays([...days, newDay]);
  };

  const handleRemoveDay = (index: any) => {
    const newDays = days.filter((_, dayIndex) => dayIndex !== index);
    setDays(newDays);
  };

  //@ts-ignore
  const handleInputChange = (index, event) => {
    const newDays = days.map((day, dayIndex) => {
      if (dayIndex === index) {
        return { ...day, [event.target.name]: event.target.value };
      }
      return day;
    });
    setDays(newDays);
  };

  return (
    <div className="w-3/4 mx-auto mt-5">
      <h1 className="text-2xl font-extrabold text-blue-700 text-center">
        Add New Package
      </h1>
      <div className="selectImage rounded-lg px-5 py-4">
        <p className="mb-2">Main Package Image</p>
        <input type="file" className="w-full border-2 rounded-lg py-2 px-2" />
      </div>
      <div className="selectImage rounded-lg px-5 py-4 mt-5">
        <label htmlFor="" className="">
          package Name
        </label>
        <input type="" className="w-full border-2 rounded-lg py-2 px-2 mt-2" />
        <label htmlFor="" className="">
          Title
        </label>
        <input type="" className="w-full border-2 rounded-lg py-2 px-2 mt-2" />
        <label htmlFor="">Description</label>
        <textarea
          name=""
          id=""
          className="w-full  border-2 rounded-lg py-2 px-2 mt-2"
        ></textarea>
        <label htmlFor="" className="">
          Price per Person
        </label>
        <input
          type=""
          placeholder="0"
          className="w-full border-2 rounded-lg py-2 px-2 mt-2"
        />
      </div>
      {/* <div className="selectImage rounded-lg px-5 py-4 mt-5">
        <label>Itinerary</label>
        <input
          type=""
          placeholder="Day 1"
          className="w-full border-2 rounded-lg py-2 px-2 mt-2"
        />
        <textarea
          name=""
          id=""
          className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          placeholder="Description For Day 1"
        ></textarea>
        <button className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1">
          Remove
        </button>
        <div className="mt-4">
          <button className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1">
            Add Day
          </button>
        </div>
      </div> */}
      <div className="selectImage rounded-lg px-5 py-4 mt-5">
        <h1 className="text-lg font-semibold">Itinerary</h1>
        {days.map((day, index) => (
          <div key={index} className="mb-4 mt-4">
            <label>Itinerary</label>
            <input
              type="text"
              name="day"
              value={day.day}
              onChange={(e) => handleInputChange(index, e)}
              className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              placeholder={`Day ${index + 1}`}
            />
            <textarea
              name="description"
              value={day.description}
              onChange={(e) => handleInputChange(index, e)}
              className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              placeholder={`Description For ${day.day}`}
            ></textarea>
            <button
              onClick={() => handleRemoveDay(index)}
              className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="mt-4">
          <button
            onClick={handleAddDay}
            className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
          >
            Add Day
          </button>
        </div>
      </div>
      <div className="selectImage rounded-lg px-5 py-4 mt-5">
        <label>Highlights</label>
        <div className="flex min-[500px]:flex-row flex-col gap-2 mt-2">
          <input type="" className="w-full border-2 rounded-lg py-2 px-2" />
          <button className="bg-red-600 text-white rounded-lg px-3 py-1">
            Remove
          </button>
        </div>
        <button className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-5">
          Add Highlight
        </button>
      </div>

      <div className="selectImage rounded-lg  px-5 py-4 mt-5">
        <label>Tour Includes</label>
        <div className="flex gap-2 min-[500px]:flex-row flex-col mt-2">
          <input type="" className="w-full border-2 rounded-lg py-2 px-2" />
          <button className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1">
            Remove
          </button>
        </div>
        <button className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-5">
          Add Includes
        </button>
      </div>
      <div className="selectImage rounded-lg px-5 py-4 mt-5">
        <label>Package Inclusions</label>
        <div className="flex gap-2 min-[500px]:flex-row flex-col mt-2">
          <input type="" className="w-full border-2 rounded-lg py-2 px-2" />
          <button className="bg-red-600 text-white rounded-lg px-3 py-1">
            Remove
          </button>
        </div>
        <button className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-5">
          Add Inclusions
        </button>
      </div>
      <div className="selectImage rounded-lg px-5 py-4 mt-5">
        <label>package Exclusions</label>
        <div className="flex gap-2 min-[500px]:flex-row flex-col mt-2">
          <input type="" className="w-full border-2 rounded-lg py-2 px-2" />
          <button className="bg-red-600  text-white rounded-lg px-3 py-1">
            Remove
          </button>
        </div>
        <button className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-5">
          Add Exclusion
        </button>
      </div>
      <div className="selectImage rounded-lg px-5 py-4 mt-5">
        <label>FAQ</label>
        <input
          type="text"
          placeholder="Question"
          className="w-full border-2 rounded-lg py-2 px-2 mt-2"
        />
        <textarea
          name=""
          id=""
          placeholder="Answer"
          className="w-full border-2 rounded-lg py-2 px-2 mt-2"
        ></textarea>
        <button className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1">
          Remove
        </button>
        <div className="mt-4">
          <button className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1">
            Add Day
          </button>
        </div>
      </div>
      <div className="gap-2 flex justify-end">
        <button className="bg-green-600 text-white px-3 py-1 rounded-lg mt-4">
          Save
        </button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded-lg mt-4">
          Cancel
        </button>
      </div>
    </div>
  );
}
export default AddnewPackage;
