import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSubmitFormMutation } from "@/queries/generated";
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  travelDate: yup
    .string()
    .required('Travel date is required'),
  Number: yup
    .string()
    .required('Number is required'),
    emailID: yup
    .string()
    .required('Eamil ID is required'),
});

function ButtonCard() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutateAsync: submitForm,  } = useSubmitFormMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await submitForm({
        date: data.travelDate,
        number: data.Number,
        email: data.emailID,
        person:""

      });
      toast.success(response?.submitForm?.message);
      reset();
      
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="2xl:w-[1000px] lg:w-[70%] md:w-4/5 w-11/12 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-y-7 md:gap-2 bg-[#d8d8d8] rounded-lg px-1 lg:px-8 py-6 lg:py-8">
      
      <div className="flex relative flex-col">
        <input
        type="date"
          placeholder="Travel Date"
          {...register("travelDate")}
          className={`w-11/12 mx-auto bg-white rounded-full px-5 py-2 flex items-center focus:outline-none ${errors.travelDate ? '-mb-2 ' : ''}`}
        />
        {errors.travelDate && <p className="absolute  left-5 sm:left-3 text-sm -bottom-7 md:-bottom-5   text-red-600">{errors.travelDate.message}</p>}
      </div>

      <div className="flex relative flex-col">
        <input
          placeholder="Number"
          {...register("Number")}
          className={`w-11/12 mx-auto bg-white rounded-full px-5 py-2 flex items-center focus:outline-none ${errors.Number ? '-mb-2' : ''}`}
        />
        {errors.Number && <p className="absolute left-5 sm:left-3 text-sm -bottom-7 md:-bottom-5  text-red-600">{errors.Number.message}</p>}
      </div>

      <div className="flex relative flex-col">
        <input
          placeholder="email ID"
          type="email"
          {...register("emailID")}
          className={`w-11/12 mx-auto bg-white rounded-full px-5 py-2 flex items-center focus:outline-none ${errors.emailID ? '-mb-0' : ''}`}
        />
        {errors.emailID && <p className="absolute left-5 sm:left-3 text-sm -bottom-6 sm:-bottom-[18px] md:-bottom-5  text-red-600">{errors.emailID.message}</p>}
      </div>

      <div className="flex flex-col">
        <button type="submit" className="w-11/12 mx-auto bg-[#f8bd01] rounded-full px-2 text-[13px] font-GothamBook font-bold uppercase py-[10px] cursor-pointer hover:bg-black hover:text-white" >
          submit
        </button>
      </div>
    </form>
  );
}

export default ButtonCard;
