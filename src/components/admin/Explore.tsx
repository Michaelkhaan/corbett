import Modal from "@/components/Modal";
import { useState } from "react";

interface Slide {
  id: number;
  image: string;
  link: string;
  title: string;
}

const Explore = () => {
  const [title, setTitle] = useState<string>("Explore Title");
  const [subtitle, setSubtitle] = useState<string>("Explore Subtitle");
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: 1,
      image: "/path/to/image1.jpg",
      link: "https://example.com/1",
      title: "Slide 1",
    },
    {
      id: 2,
      image: "/path/to/image2.jpg",
      link: "https://example.com/2",
      title: "Slide 2",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newSlide, setNewSlide] = useState<Omit<Slide, "id">>({
    image: "",
    link: "",
    title: "",
  });

  const addSlide = () => {
    const newSlideWithId: Slide = { ...newSlide, id: Date.now() };
    setSlides([...slides, newSlideWithId]);
    setNewSlide({ image: "", link: "", title: "" });
    setIsModalOpen(false);
  };

  const updateSlide = (id: number, updatedSlide: Slide) => {
    const updatedSlides = slides.map((slide) =>
      slide.id === id ? updatedSlide : slide
    );
    setSlides(updatedSlides);
  };

  const deleteSlide = (id: number) => {
    const updatedSlides = slides.filter((slide) => slide.id !== id);
    setSlides(updatedSlides);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6  text-blue-600">
        Explore Section
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700">
            Subtitle
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Slides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((slide) => (
          <SlideForm
            key={slide.id}
            slide={slide}
            updateSlide={updateSlide}
            deleteSlide={deleteSlide}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={openModal}
          className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          Add Slide
        </button>
      </div>
      {isModalOpen && (
        <Modal
          newSlide={newSlide}
          setNewSlide={setNewSlide}
          addSlide={addSlide}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

interface SlideFormProps {
  slide: Slide;
  updateSlide: (id: number, updatedSlide: Slide) => void;
  deleteSlide: (id: number) => void;
}

const SlideForm = ({ slide, updateSlide, deleteSlide }: SlideFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSlide(slide.id, { ...slide, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      updateSlide(slide.id, { ...slide, image: imageUrl });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-28 object-cover mb-2 rounded-md"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Link</label>
        <input
          type="text"
          name="link"
          value={slide.link}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={slide.title}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => deleteSlide(slide.id)}
          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Explore;
