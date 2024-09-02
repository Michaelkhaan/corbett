import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import Model from "@/components/Model";
import Spinner from "@/components/spinner";
import AddnewPackage from "@/components/AddnewPackage";
import {
  useDeleteNightStayMutation,
  useGetAllNightStayQuery,
  useUpdatePackageMutation,
} from "@/queries/generated";
import { toast } from "react-toastify";
import UpdatePackage from "@/components/UpdatePackage";
import { Router, useRouter } from "next/router";
import AddnewNightStay from "@/components/Nightstay";
import UpdateNightStay from "@/components/UpdateNightStay";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [addPackage, setAddPackage] = useState(false);
  const [updatePackageId, setUpdatePackageId] = useState(null);
  const [updateName, setUpdateName] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [packagesId, setPackagesId] = useState(null);

  const { data, refetch } = useGetAllNightStayQuery()
  const { mutateAsync, isPending } = useDeleteNightStayMutation()
  const { mutateAsync: updatePackage } = useUpdatePackageMutation();
  const router = useRouter();

  const handleDelete = async (id: any) => {
    setPackagesId(id);
    try {
      const res = await mutateAsync({ deleteNightStayId: id });
      toast.success(res?.deleteNightStay?.message);
      refetch();
    } catch (err) {
      toast.error("Not Deleted!");
    }
    setPackagesId(null);
  };

  const handleUpdateModalOpen = (id: any) => {
    setOpen(true);
    router?.push({
      query: { id: id },
    });
  };


  const handleAddPackage = () => {
    setAddPackage(true);
  };

  return (
    <Layout>
   
<div className="p-4 flex flex-col items-center justify-center">
  <div className="flex flex-col sm:flex-row justify-between items-center w-full">
    <h1 className="text-blue-400 text-xl sm:text-2xl font-bold mb-4 sm:mb-0">Night Stay</h1>
    <button
      className="bg-blue-400 text-white w-full sm:w-36 h-10 rounded flex items-center justify-center"
      onClick={handleAddPackage}>
      Add New
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
    {data?.getAllNightStay?.data.map((pkg) => (
      <div key={pkg?.id} className="bg-white shadow-md rounded md:p-4 p-1">
        <Image
          src={pkg?.images?.[0] || "/default-image.png"}
          alt=""
          width={300}
          height={200}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover  rounded"
        />
        <div className="mt-3">
          <p className="text-sm sm:text-base w-full">{pkg?.name}</p>
        </div>
        <div className="flex justify-between mt-4 space-x-2">
          <button
            onClick={() => handleUpdateModalOpen(pkg?.id)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-3 sm:px-4 rounded w-1/2"
          >
            Update
          </button>
          <button
            onClick={() => handleDelete(pkg?.id)}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 sm:px-4 rounded w-1/2 flex items-center justify-center"
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
    containerClass="w-full sm:w-[80%] bg-white h-screen overflow-y-auto py-10"
  >
    <AddnewNightStay onClose={() => [setAddPackage(false), refetch()]} />
  </Model>

  <Model
    show={open}
    onClose={() => setOpen(false)}
    containerClass="w-full sm:w-[80%] bg-white p-4 rounded h-screen overflow-y-auto"
  >
    <div>
      <UpdateNightStay onClose={() => [setOpen(false), refetch()]} />
    </div>
  </Model>

</div>

    </Layout>
  );
};

export default Index;



