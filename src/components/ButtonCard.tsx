// import React from "react";

// function ButtonCard() {
//   const buttonCard = [
//     {
//       title: "Travel Date",
//     },
//     {
//       title: "Number",
//     },
//     {
//       title: "City",
//     },
//   ];
//   return (
//     <div className="2xl:w-[1000px] lg:w-[70%] md:w-4/5 w-11/12 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-2 bg-[#d8d8d8] rounded-lg px-1 lg:px-8 py-3 lg:py-8">
//       {buttonCard?.map((e, index) => (
//         <input
//           key={index}
//           placeholder={e?.title}
//           className="w-11/12 mx-auto bg-white rounded-full px-5 py-2 flex items-center focus:outline-none"
//         >
//           {/* <h1 className="text-[13px] font-Gotham font-medium">{e?.title}</h1> */}
//         </input>
//       ))}
//       <button className="w-11/12 mx-auto bg-[#f8bd01] rounded-full px-2 text-[13px] font-Gotham font-bold uppercase py-2">
//         Submit
//       </button>
//     </div>
//   );
// }

// export default ButtonCard;

import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSubmitFormMutation } from "@/queries/generated";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  travelDate: yup
    .string()
    .required('Travel date is required'),
  Number: yup
    .string()
    .required('Number is required'),
  city: yup
    .string()
    .required('City is required'),
});

function ButtonCard() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutateAsync: submitForm,  } = useSubmitFormMutation();

  const onSubmit = async (data: any) => {
    try {
      const response = await submitForm({
        date: data.travelDate,
        contact: data.Number,
        city: data.city,
      });
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="2xl:w-[1000px] lg:w-[70%] md:w-4/5 w-11/12 mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-y-7 md:gap-2 bg-[#d8d8d8] rounded-lg px-1 lg:px-8 py-6 lg:py-8">
      
      <div className="flex relative flex-col">
        <input
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
          placeholder="City"
          {...register("city")}
          className={`w-11/12 mx-auto bg-white rounded-full px-5 py-2 flex items-center focus:outline-none ${errors.city ? '-mb-0' : ''}`}
        />
        {errors.city && <p className="absolute left-5 sm:left-3 text-sm -bottom-6 sm:-bottom-[18px] md:-bottom-5  text-red-600">{errors.city.message}</p>}
      </div>

      <div className="flex flex-col">
        <button type="submit" className="w-11/12 mx-auto bg-[#f8bd01] rounded-full px-2 text-[13px] font-Gotham font-bold uppercase py-[10px]" >
          submit
        </button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default ButtonCard;
