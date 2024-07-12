"use client";
import React, { useState } from "react";
import Model from "../Model";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/queries/generated";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Categories() {
  const [showModal, setShowModal] = useState(false);
  const [DeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const { mutateAsync } = useDeleteCategoryMutation();
  const { mutateAsync: addCategory } = useAddCategoryMutation();
  const [showUpdate, setShowUpdate] = useState(false);
  const { data, refetch } = useGetAllCategoriesQuery();

  const handleUpdate = (id: any) => {
    setShowUpdate(true);
  };

  const handleDeleteClick = (id: any) => {
    setSelectedCategoryId(id);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowDeleteModal(false);
    setShowModal(false);
  };

  const handleConfirmDelete = async () => {
    if (selectedCategoryId) {
      try {
        await mutateAsync({
          deleteCategoryId: selectedCategoryId,
        });
        refetch();
        toast.success("Category deleted successfully!");
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
      await addCategory({
        name: newCategoryName,
      });
      refetch();
      toast.success("Category added successfully!");
      handleCloseModal();
    } catch (error) {
      console.error("Error adding category:", error);
      toast.error("Failed to add category.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Categories</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={() => setShowModal(true)}
      >
        Add New Category
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.getAllCategories?.map((category) => (
              <tr
                key={category?.id}
                className="bg-gray-100 text-center hover:bg-gray-50"
              >
                <td className="py-2 px-4 border-b">{category?.id}</td>
                <td className="py-2 px-4 border-b">{category?.name}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded mr-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
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
        <form className="w-full flex flex-col items-center justify-center">
          <div className="w-1/2 bg-white flex items-center flex-col justify-center py-10">
            <div className="flex flex-col items-center">
              <label className="mb-4 font-bold">Update Categories</label>
              <input
                className="border-[2px] mb-8"
                placeholder="Category Name"
                type="text"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </Model>

      {/* Modal component */}
      <Model show={showModal} onClose={handleCloseModal}>
        <form className="w-full flex flex-col items-center justify-center">
          <div className="w-1/2 bg-white flex items-center flex-col justify-center py-10">
            <div className="flex flex-col items-center">
              <label className="mb-4 font-bold">Add Categories</label>
              <input
                className="border-[2px] mb-8"
                placeholder="Category Name"
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddCategory}
            >
              Save
            </button>
          </div>
        </form>
      </Model>

      <Model show={DeleteModal} onClose={handleCloseModal}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-1/2 bg-white flex items-center flex-col justify-center py-10">
            <div className="flex flex-col items-center">
              <label className="mb-4 font-bold">Delete Categories</label>
              {/* <input className="border-[2px] mb-8" placeholder='Update Categories' type='text'/> */}
              <p className="text-center">
                Are you sure you want to delete this category?
              </p>
            </div>
            <div className="w-1/2 flex justify-between mt-10">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                No
              </button>
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
