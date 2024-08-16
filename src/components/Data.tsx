"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSubmitFormMutation } from "@/queries/generated";

const schema = yup.object().shape({
  travelDate: yup.string().required("Travel date is required"),
  EmailAddress: yup.string().required("contact is required"),
  City: yup.string().required("City is required"),
});

export default function Data({ onClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutateAsync: submitForm } = useSubmitFormMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await submitForm({
        date: data.travelDate,
        contact: data.EmailAddress,
        city: data.City,
      });
      toast.success("Form submitted successfully!");
      onClose?.();
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div>
      <form
        className="w-full border border-black px-4 py-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-5 text-lg">Where do you want to go?</h1>

        <div className="flex relative flex-col">
          <input
            type="date"
            placeholder="Travel Date"
            {...register("travelDate")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4 hover:border-black"
          />
          {errors.travelDate && (
            <p className="absolute left-0 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.travelDate.message}
            </p>
          )}
        </div>

        <div className="flex relative flex-col">
          <input
            type="text"
            placeholder="Phone Number"
            {...register("EmailAddress")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4"
          />
          {errors.EmailAddress && (
            <p className="absolute left-5 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.EmailAddress.message}
            </p>
          )}
        </div>

        <div className="flex relative flex-col">
          <input
            type="text"
            placeholder="Email"
            {...register("City")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4"
          />
          {errors.City && (
            <p className="absolute left-5 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.City.message}
            </p>
          )}
        </div>

        <div className="flex relative flex-col">
          <input
            type="text"
            placeholder="Number of Persons"
            {...register("City")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4"
          />
          {errors.City && (
            <p className="absolute left-5 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.City.message}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start">
          <button
            type="submit"
            className="w-auto bg-[#f8bd01] px-12 text-[13px] font-Gotham font-bold uppercase py-[10px] hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
}
