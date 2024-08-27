"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSubmitFormMutation } from "@/queries/generated";
import Spinner from "./spinner";

const schema = yup.object().shape({
  date: yup.string().required("Travel date is required"),
  number: yup.string().required("number is required"),
  email: yup.string().email().required("email is required"),
  person: yup.string().required("person is required"),
});

export default function Data({ onClose }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutateAsync: submitForm, isPending } = useSubmitFormMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await submitForm({
        date: data.date,
        number: data.number,
        email: data.email,
        person: data.person,
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
            {...register("date")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4 hover:border-black"
          />
          {errors.date && (
            <p className="absolute left-0 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.date.message}
            </p>
          )}
        </div>

        <div className="flex relative flex-col">
          <input
            type="text"
            placeholder="Phone Number"
            {...register("number")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4"
          />
          {errors.number && (
            <p className="absolute left-5 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.number.message}
            </p>
          )}
        </div>

        <div className="flex relative flex-col">
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4"
          />
          {errors.email && (
            <p className="absolute left-5 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex relative flex-col">
          <input
            type="text"
            placeholder="Name"
            {...register("person")}
            className="px-12 w-full focus:outline-none border border-black py-1 mb-4"
          />
          {errors.person && (
            <p className="absolute left-5 sm:left-0 text-sm -bottom-7 md:-bottom-0 text-red-600">
              {errors.person.message}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start">
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#f8bd01] sm:px-12 text-[13px] font-GothamBook font-bold uppercase py-[10px] hover:bg-black hover:text-white"
          >
            {isPending ? <Spinner /> : "Submit"}
          </button>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
}
