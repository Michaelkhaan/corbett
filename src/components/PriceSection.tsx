import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function PriceSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (currentId: string) => {
    setOpenId(openId === currentId ? null : currentId);
  };

  const sections = [
    {
      id: "1",
      title: "Price (Indian)",
      content:
        "INR 6500 per safari, including permit, 4x4 jeep, and taxes. Maximum capacity: 6 adults and 2 children (ages 5 to 12).",
    },
    {
      id: "2",
      title: "Price (Foreigner)",
      content: "Details for foreigner pricing.",
    },
    {
      id: "3",
      title: "Zones",
      content: "Details about the safari zones.",
    },
    {
      id: "4",
      title: "Timings",
      content: "Details about the safari timings.",
    },
    {
      id: "5",
      title: "Inclusion",
      content: "Details about what is included in the safari.",
    },
  ];

  return (
    <div className="w-11/12 md:px-[74px] lg:px-0 lg:w-[65%] 2xl:w-1/2 2xl:px-6 mx-auto py-4">
      {sections.map(({ id, title, content }) => (
        <div key={id}>
          <div
            className={`flex justify-between cursor-pointer py-1 2xl:py-2 transition-all duration-500 `}
            onClick={() => handleToggle(id)}
          >
            <h1
              className={`text-black text-base font-GothamBook font-semibold transition-all duration-500`}
            >
              {title}
            </h1>
            <span className="text-black px-2">
              {openId === id ? <FaMinus /> : <FaPlus />}
            </span>
          </div>

          <hr className="border-t border-black" />
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openId === id
                ? "max-h-[500px] opacity-100 transform translate-y-0"
                : "max-h-0 opacity-0 transform -translate-y-2"
            }`}
          >
            <p className="text-black text-xs mt-1 mb-2 leading-6 font-GothamBook">
              {content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
