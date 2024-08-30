"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

interface DatePickerProps {
  value?: string;
  onChange: (date: Date) => void;
  className?: string;
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  className,
  placeholder,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const formatDate = (date: Date): string => {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const getDaysInMonth = (
    month = new Date().getMonth(),
    year = new Date().getFullYear()
  ): string[] => {
    const date = new Date(year, month, 1);
    const days: string[] = [];

    while (date.getMonth() === month) {
      days.push(formatDate(new Date(date)));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    cb: (event: MouseEvent) => void
  ) => {
    useEffect(() => {
      if (typeof window === "undefined") return; // Check if on server

      const handler = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          cb(e);
        }
      };

      document.addEventListener("click", handler);

      return () => {
        document.removeEventListener("click", handler);
      };
    }, [ref, cb]);
  };

  const getDateSlots = (
    currentMonth: number,
    currentYear: number
  ): (string | null)[] => {
    const dateArray = getDaysInMonth(currentMonth, currentYear);
    const slotSkipCount = new Date(dateArray[0]).getDay();
    for (let i = 0; i < slotSkipCount; i++) {
      dateArray.unshift(null as any);
    }
    return dateArray;
  };

  useClickOutside(popupRef, () => setShowPopup(false));

  const dateArray = useMemo(
    () => getDateSlots(currentMonth, currentYear),
    [currentMonth, currentYear]
  );

  useEffect(() => {
    if (value) {
      const dateObj = new Date(value);
      setSelectedDate(formatDate(dateObj));
      setCurrentMonth(dateObj.getMonth());
      setCurrentYear(dateObj.getFullYear());
    }
  }, [value]);

  const togglePopupHandler = () => setShowPopup((prev) => !prev);

  const navigateMonthHandler = (navigateBy = 1) => {
    if (currentMonth + navigateBy === 12) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else if (currentMonth + navigateBy === -1) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + navigateBy);
    }
  };

  const selectDateHandler = (date: string | null) => {
    if (date) {
      onChange(new Date(date));
      setSelectedDate(date);
      setShowPopup(false);
    }
  };

  return (
    <div ref={popupRef} className="relative inline-block w-full">
      <div
        className={`relative flex items-center px-12 w-full border  py-1 ${className}`}
      >
        <input
          type="text"
          className={`flex flex-grow focus:outline-none focus:border-none min-w-0 `}
          placeholder={placeholder}
          value={selectedDate}
          readOnly
          onFocus={togglePopupHandler}
        />
        <span>
          {/* Date Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10m4 5H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"
            />
          </svg>
        </span>
      </div>

      {showPopup && (
        <div className="absolute mt-2 min-w-[250px] p-4 bg-white border border-gray-300 rounded shadow-lg z-10">
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={() => navigateMonthHandler(-1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              {/* Previous Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-lg font-semibold">
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "short",
                year: "numeric",
              })}
            </span>
            <button
              type="button"
              onClick={() => navigateMonthHandler(1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              {/* Next Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <span key={index} className="font-semibold">
                {day}
              </span>
            ))}
            {dateArray.map((dateText, index) => (
              <button
                type="button"
                key={index}
                onClick={() => selectDateHandler(dateText)}
                className={`p-2 rounded ${
                  selectedDate === dateText
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                disabled={!dateText}
              >
                {dateText ? new Date(dateText).getDate() : ""}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
