import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Model from "@/components/Model";
import Spinner from "@/components/spinner";
import AddnewPackage from "@/components/AddnewPackage";
import {
  useDeletePackageMutation,
  useGetAllPackagesQuery,
  useUpdatePackageMutation,
} from "@/queries/generated";
import { toast } from "react-toastify";
import UpdatePackage from "@/components/UpdatePackage";
import { Router, useRouter } from "next/router";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [addPackage, setAddPackage] = useState(false);
  const [updatePackageId, setUpdatePackageId] = useState(null);
  const [updateName, setUpdateName] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [packagesId, setPackagesId] = useState(null);

  const { data, refetch } = useGetAllPackagesQuery();
  const { mutateAsync, isPending } = useDeletePackageMutation();
  const { mutateAsync: updatePackage } = useUpdatePackageMutation();

  const router = useRouter();

  const handleDelete = async (id: any) => {
    setPackagesId(id);
    try {
      const res = await mutateAsync({ deletePackageId: id });
      toast.success(res?.deletePackage?.message);
      refetch();
    } catch (err) {
      toast.error("Packagen is Not Deleted!");
    }
    setPackagesId(null);
  };

  const handleUpdateModalOpen = (id: any) => {
    setOpen(true);
    router?.push({
      query: { id: id },
    });
  };

  // const handleUpdate = async (e: any) => {
  //   e.preventDefault();
  //   if (packagesId)
  //     try {
  //       const res = await updatePackage({
  //         updatePackageId: packagesId || "",
  //         name: updateName,
  //         title: updateTitle,
  //         price: parseFloat(updatePrice), // Convert price back to number if needed
  //       });
  //       toast.success(res?.updatePackage?.message);
  //       refetch();
  //       setOpen(false);
  //     } catch (error) {
  //       toast.error("Failed to update package.");
  //     }
  // };

  const handleAddPackage = () => {
    setAddPackage(true);
  };

  return (
    <Layout>
      <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="text-blue-400 text-2xl font-bold mb-4">
          Admin Panel - Packages
        </h1>
        <button
          className="bg-blue-400 text-white w-36 h-10 rounded flex items-center justify-center"
          onClick={handleAddPackage}
        >
          Add Packages
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {data?.getAllPackages?.data.map((pkg) => (
            <div key={pkg?.id} className="bg-white shadow-md rounded p-4">
              <h1>Main Package Image</h1>
              <Image
                src={pkg?.image || "/default-image.png"}
                alt=""
                width={300}
                height={200}
                className="w-full"
              />
              <div className="mt-3">
                <label htmlFor="" className="block">
                  Name
                </label>
                <input
                  type="text"
                  value={pkg?.name}
                  readOnly
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="block">
                  Title
                </label>
                <input
                  type="text"
                  value={pkg?.title}
                  readOnly
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleUpdateModalOpen(pkg?.id)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(pkg?.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center"
                >
                  {isPending && packagesId === pkg?.id ? <Spinner /> : "Delete"}
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
          <AddnewPackage onClose={() => [setAddPackage(false), refetch()]} />
        </Model>
        <Model
          show={open}
          onClose={() => setOpen(false)}
          containerClass="bg-white p-4 rounded !w-[80%] h-screen overflow-y-auto"
        >
          {/* <h2 className="text-lg font-bold mb-4">Update Package</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="updateName" className="block">
                Name
              </label>
              <input
                type="text"
                id="updateName"
                value={updateName}
                onChange={(e) => setUpdateName(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="updateTitle" className="block">
                Title
              </label>
              <input
                type="text"
                id="updateTitle"
                value={updateTitle}
                onChange={(e) => setUpdateTitle(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="updatePrice" className="block">
                Price
              </label>
              <input
                type="number"
                id="updatePrice"
                value={updatePrice}
                onChange={(e) => setUpdatePrice(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded"
            >
              Update
            </button>
          </form> */}

          <div>
            <UpdatePackage onClose={() => [setOpen(false), refetch()]} />
          </div>
        </Model>
      </div>
    </Layout>
  );
};

export default Index;
