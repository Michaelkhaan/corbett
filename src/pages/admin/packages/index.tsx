import AddnewPackage from "@/components/AddnewPackage";
import Model from "@/components/Model";
import Spinner from "@/components/spinner";
import { useGetAllPackagesQuery } from "@/queries/generated";
import Image from "next/image";
import React, { useState } from "react";

function Index() {
  const [open, setOpen] = useState(false);
  const [addPackage, setAddPackage] = useState(false);
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Beach Paradise",
      title: "Ultimate Beachfront Experience",
      image: "/deer.png",
    },
    // Add more packages as needed
  ]);
  const [loading, setLoading] = useState(false);

  const handlePackage = () => {
    setAddPackage(true);
  };

  const handleDelete = (id: any) => {
    setLoading(true);
    // Simulate an API call or delay
    setTimeout(() => {
      setPackages(packages.filter((pkg) => pkg.id !== id));
      setLoading(false);
    }, 1000);
  };

  const { data: allPackages } = useGetAllPackagesQuery();

  return (
    <div>
      <div className="flex items-center justify-center flex-col ">
        <h1 className="text-blue-400 text-2xl mt-3 font-bold">
          Admin Panel - Packages
        </h1>
        <button
          className="  bg-blue-400 text-white w-36 h-10 rounded flex items-center justify-center mt-5"
          onClick={handlePackage}
        >
          Add Packages
        </button>
      </div>
      {packages.map((pkg) => (
        <div key={pkg.id} className="w-1/4 shadow-card mt-5 px-3 py-3 rounded">
          <h1>Main Package Image</h1>
          <Image
            src={pkg.image}
            alt=""
            width={0}
            height={0}
            className="w-full"
          />
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              value={pkg.name}
              readOnly
              className="border p-[3px] rounded"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="">Title</label>
            <input
              type="text"
              value={pkg.title}
              readOnly
              className="border p-[3px] rounded"
            />
          </div>
          <div className="w-full flex items-center justify-between pb-3">
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="bg-[#e9b306] w-[70px] h-[35px] rounded mt-3"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(pkg.id)}
              className="bg-[#ed4444] w-[70px] h-[35px] rounded mt-3 flex items-center justify-center"
            >
              {loading ? <Spinner /> : "Delete"}
            </button>
          </div>
        </div>
      ))}
      <Model
        show={addPackage}
        onClose={() => setAddPackage(false)}
        containerClass="!w-[80%] bg-white h-screen overflow-y-auto py-10"
      >
        <div>
          <AddnewPackage />
        </div>
      </Model>
      <Model
        onClose={() => {
          setOpen(false);
        }}
        show={open}
        containerClass="bg-white"
      >
        update
      </Model>
    </div>
  );
}

export default Index;
