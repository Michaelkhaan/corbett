import React from "react";

interface ModalProps {
  //@ts-ignore
  newSlide: Omit<Slide, "id">;
  //@ts-ignore
  setNewSlide: React.Dispatch<React.SetStateAction<Omit<Slide, "id">>>;
  addSlide: () => void;
  closeModal: () => void;
}

const Modal = ({ newSlide, setNewSlide, addSlide, closeModal }: ModalProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSlide({ ...newSlide, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewSlide({ ...newSlide, image: imageUrl });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Add New Slide</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Image
          </label>
          {newSlide.image && (
            <img
              src={newSlide.image}
              alt={newSlide.title}
              className="w-full h-48 object-cover mb-2 rounded-md"
            />
          )}
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Link
          </label>
          <input
            type="text"
            name="link"
            value={newSlide.link}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={newSlide.title}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={addSlide}
            className="mr-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={closeModal}
            className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
