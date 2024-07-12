"use client";
import React, { useState } from "react";
import Model from "../Model";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/queries/generated";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Categories() {
  const [showModal, setShowModal] = useState(false);
  const [DeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [updateCategoryName, setUpdateCategoryName] = useState("");
  const { mutateAsync } = useDeleteCategoryMutation();
  const { mutateAsync: addCategory } = useAddCategoryMutation();
  const { mutateAsync: updateCategory } = useUpdateCategoryMutation();
  const [showUpdate, setShowUpdate] = useState(false);
  const { data, refetch } = useGetAllCategoriesQuery();

  const handleUpdateClick = (id: any, name: string) => {
    setSelectedCategoryId(id);
    setUpdateCategoryName(name);
    setShowUpdate(true);
  };

  const handleDeleteClick = (id: any) => {
    setSelectedCategoryId(id);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowDeleteModal(false);
    setShowUpdate(false);
  };

  const handleConfirmDelete = async () => {
    if (selectedCategoryId) {
      try {
        const res = await mutateAsync({
          deleteCategoryId: selectedCategoryId,
        });
        refetch();
        toast.success(res?.deleteCategory?.message);
        handleCloseModal();
      } catch (error) {
        console.error("Error deleting category:", error);
        toast.error("Failed to delete category.");
      }
    }
  };

  const handleAddCategory = async (e: any) => {
    e.preventDefault();
    try {
     const res = await addCategory({
        name: newCategoryName,
      });
      refetch();
      toast.success("Your Type has been added");
      handleCloseModal();
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category.");
    }
  };

  const handleUpdateCategory = async (e: any) => {
    e.preventDefault();
    try {
      const res = await updateCategory({
        updateCategoryId: selectedCategoryId || "",
        name: updateCategoryName,
      });
      refetch();
      toast.success(res?.updateCategory?.message);
      setShowUpdate(false);
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Failed to update category.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Types of Packages</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition duration-300"
          onClick={() => setShowModal(true)}
        >
          Add New +
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-3 px-6 border-b">ID</th>
              <th className="py-3 px-6 border-b">Name</th>
              <th className="py-3 px-6 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.getAllCategories?.map((category) => (
              <tr
                key={category?.id}
                className="bg-white text-center hover:bg-gray-100"
              >
                <td className="py-4 px-6 border-b">{category?.id}</td>
                <td className="py-4 px-6 border-b">{category?.name}</td>
                <td className="py-4 px-6 border-b flex justify-center space-x-4">
                  <button
                    className="bg-green-600 hover:bg-green-800 text-white font-semibold py-1 px-4 rounded transition duration-300"
                    onClick={() => handleUpdateClick(category?.id, category?.name as any)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-800 text-white font-semibold py-1 px-4 rounded transition duration-300"
                    onClick={() => handleDeleteClick(category?.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Model show={showUpdate} onClose={handleCloseModal}>
        <form
          className="w-full flex flex-col items-center justify-center"
          onSubmit={handleUpdateCategory}
        >
          <div className="w-full md:w-1/2 bg-white flex flex-col items-center py-10 px-4 md:px-10 rounded-lg shadow-lg">
            <div className="w-full flex flex-col mb-6">
              <label className="mb-2 font-semibold text-lg">Update Type</label>
              <input
                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Category Name"
                type="text"
                value={updateCategoryName}
                onChange={(e) => setUpdateCategoryName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
      </Model>

      <Model show={showModal} onClose={handleCloseModal}>
        <form
          className="w-full flex flex-col items-center justify-center"
          onSubmit={handleAddCategory}
        >
          <div className="w-full md:w-1/2 bg-white flex flex-col items-center py-10 px-4 md:px-10 rounded-lg shadow-lg">
            <div className="w-full flex flex-col mb-6">
              <label className="mb-2 font-semibold text-lg">Add Type</label>
              <input
                className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Category Name"
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </Model>

      <Model show={DeleteModal} onClose={handleCloseModal}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 bg-white flex flex-col items-center py-10 px-4 md:px-10 rounded-lg shadow-lg">
            <div className="w-full flex flex-col mb-6">
              <label className="mb-2 font-semibold text-lg">Delete Type</label>
              <p className="text-center mb-4">
                Are you sure you want to delete this type?
              </p>
            </div>
            <div className="flex justify-between w-full mt-6">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                onClick={handleCloseModal}
              >
                No
              </button>
              <button
                type="button"
                className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded transition duration-300"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Model>
    </div>
  );
}

export default Categories;

