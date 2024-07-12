import AddnewPackage from "@/components/AddnewPackage";
import Layout from "@/components/Layout";
import Model from "@/components/Model";
import Spinner from "@/components/spinner";
import {
  useDeletePackageMutation,
  useGetAllPackagesQuery,
} from "@/queries/generated";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Index() {
  const [open, setOpen] = useState(false);
  const [deletePackageId, setDeletePackageId] = useState(null);
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

  const { data, refetch } = useGetAllPackagesQuery();
  //   const { data: packageDate, } = use();

  const { mutateAsync, isPending } = useDeletePackageMutation();

  const handleDelete = async (id: any) => {
    setDeletePackageId(id);
    try {
      await mutateAsync({
        deletePackageId: id,
      });
      toast.success("Package deleted successfully!");
      refetch();
    } catch (err: any) {
      toast?.error(err?.message);
    }

    setDeletePackageId(null);
  };

  return (
    <Layout>
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
          {data?.getAllPackages?.data.map((pkg) => (
            <div
              key={pkg?.id}
              className="w-full shadow-card mt-5 px-3 py-3 rounded"
            >
              <h1>Main Package Image</h1>
              <Image
                src={pkg?.image || ""}
                alt=""
                width={0}
                height={0}
                className="w-full"
              />
              <div className="flex flex-col">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  value={pkg?.name}
                  readOnly
                  className="border p-[3px] rounded"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label htmlFor="">Title</label>
                <input
                  type="text"
                  value={pkg?.title}
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
                  onClick={() => handleDelete(pkg?.id)}
                  className="bg-[#ed4444] w-[70px] h-[35px] rounded mt-3 flex items-center justify-center"
                >
                  {isPending && deletePackageId == pkg?.id ? (
                    <Spinner />
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
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
    </Layout>
  );
}

export default Index;
