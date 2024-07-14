// "use client";
// import React, { useState } from "react";
// import { useForm, useFieldArray, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import {
//   useAddPackageMutation,
//   useGetAllCategoriesQuery,
//   useGetPackageByIdQuery,
// } from "@/queries/generated";
// import { toast } from "react-toastify";
// import Spinner from "./spinner";
// import uploadFile from "@/utils/uploadFile";
// import { Router, useRouter } from "next/router";

// const schema = yup.object().shape({
//   packageName: yup.string().required("Package name is required"),
//   title: yup.string().required("Title is required"),
//   description: yup.string().required("Description is required"),
//   category: yup.string().required("Type is required"),
//   image: yup.string().required("image is required"),
//   pricePerPerson: yup
//     .number()
//     .required("Price per person is required")
//     .positive("Price must be positive"),
//   itinerary: yup.array().of(
//     yup.object().shape({
//       day: yup.string().required("Day is required"),
//       description: yup.string().required("Description is required"),
//       title: yup.string().required("Title is required"),
//     })
//   ),
//   tourIncludes: yup.array().of(
//     yup.object().shape({
//       image: yup.mixed().required("Image is required"),
//       name: yup.string().required("Name is required"),
//     })
//   ),
//   highlights: yup.array().of(
//     yup.object().shape({
//       title: yup.string().required("Title is required"),
//     })
//   ),
//   inclusion: yup.array().of(
//     yup.object().shape({
//       title: yup.string().required("Title is required"),
//     })
//   ),
//   exclusion: yup.array().of(
//     yup.object().shape({
//       title: yup.string().required("Title is required"),
//     })
//   ),
//   faq: yup.array().of(
//     yup.object().shape({
//       answer: yup.string().required("Description is required"),
//       question: yup.string().required("Title is required"),
//     })
//   ),
// });

// function AddnewPackage() {
//   const router = useRouter();
//   const { data: updatePackage } = useGetPackageByIdQuery({
//     getPackageByIdId: router?.query?.id?.toString() || "",
//   });
//   const {
//     control,
//     handleSubmit,
//     register,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       packageName: updatePackage?.getPackageById?.name,
//       title: updatePackage?.getPackageById?.title,
//       description: updatePackage?.getPackageById?.description || "",
//       image: updatePackage?.getPackageById?.image || "",
//       category: updatePackage?.getPackageById?.Category?.id.toString() || "",
//       //@ts-ignore
//       pricePerPerson: updatePackage?.getPackageById?.price,
//       itinerary: [{ day: "Day 1", description: "", title: "" }],
//       faq: [{ answer: "", question: "" }],
//       //@ts-ignore
//       tourIncludes: [{ image: null, name: "" }],
//       highlights: [{ title: "" }],
//       inclusion: [{ title: "" }],
//       exclusion: [{ title: "" }],
//     },
//   });

//   const {
//     fields: itineraryFields,
//     append: appendItinerary,
//     remove: removeItinerary,
//   } = useFieldArray({ control, name: "itinerary" });
//   const {
//     fields: faqsFields,
//     append: appendFaqsFields,
//     remove: removeFaqsFields,
//   } = useFieldArray({ control, name: "faq" });
//   const {
//     fields: tourIncludesFields,
//     append: appendTourIncludes,
//     remove: removeTourIncludes,
//   } = useFieldArray({ control, name: "tourIncludes" });
//   const {
//     fields: highlightFields,
//     append: appendHighlight,
//     remove: removeHighlight,
//   } = useFieldArray({ control, name: "highlights" });

//   const {
//     fields: inclusionField,
//     append: appendInclusionField,
//     remove: removeIclusion,
//   } = useFieldArray({ control, name: "inclusion" });

//   const {
//     fields: exclusionField,
//     append: appendExclusionField,
//     remove: removeExclusion,
//   } = useFieldArray({ control, name: "exclusion" });

//   const { mutateAsync, isPending } = useAddPackageMutation();

//   const { data, isPending: IsLoading } = useGetAllCategoriesQuery();

//   const onSubmit = async (data: any) => {
//     try {
//       await mutateAsync({
//         name: data.packageName,
//         title: data.title,
//         description: data.description,
//         price: parseFloat(data.pricePerPerson),
//         image: data.image,

//         itinerary: data.itinerary.map((itinerary: any) => ({
//           name: itinerary.day,
//           description: itinerary.description,
//           title: itinerary.title,
//         })),
//         includes: data.tourIncludes.map((tourInclude: any) => ({
//           image: tourInclude.image,
//           name: tourInclude.name,
//         })),
//         highlights: data.highlights.map((highlight: any) => ({
//           name: highlight.title,
//         })),
//         inclusions: data.inclusion.map((inclusion: any) => ({
//           title: inclusion.title,
//         })),
//         exclusions: data.exclusion.map((exclusion: any) => ({
//           title: exclusion.title,
//         })),
//         faqs: data.faq.map((faq: any) => ({
//           title: faq.answer,
//           description: faq.question,
//         })),
//         categoryId: parseInt(data.category),
//       });
//       toast?.success("Package added successfully");
//       // setIsModalOpen(false);
//     } catch (errors) {
//       toast?.error("invalid package");
//     }
//     console.log(data);
//   };

//   const upload = async (e: any, field: any) => {
//     try {
//       const file = e.target.files[0];
//       const url = await uploadFile(file);
//       setValue(field.name, url);
//       toast?.success("Image uploaded successfully");
//     } catch (errors) {
//       toast?.error("Failed to upload image");
//     }
//   };

//   return (
//     <div className="w-3/4 mx-auto mt-5">
//       <h1 className="text-2xl font-extrabold text-blue-700 text-center">
//         Update Package
//       </h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="category">Type</label>
//         <select
//           {...register("category")}
//           className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//         >
//           <option value="">Select a type</option>
//           {data?.getAllCategories?.map((category: any) => (
//             <option key={category.id} value={category.id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         {errors.category && (
//           <p className="text-red-500">{errors.category.message}</p>
//         )}
//         {/* Existing form fields... */}
//         <div className="selectImage rounded-lg px-5 py-4 mt-4">
//           <p className="mb-2">Main Package Image</p>
//           <input
//             type="file"
//             onChange={(e) => upload(e, { name: "image" })}
//             className="w-full border-2 rounded-lg py-2 px-2"
//           />
//         </div>
//         <div className="selectImage rounded-lg px-5 py-4 mt-5">
//           <label htmlFor="packageName">Package Name</label>
//           <input
//             {...register("packageName")}
//             className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//           />
//           {errors.packageName && (
//             <p className="text-red-500">{errors.packageName.message}</p>
//           )}

//           <label htmlFor="title">Title</label>
//           <input
//             {...register("title")}
//             className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//           />
//           {errors.title && (
//             <p className="text-red-500">{errors.title.message}</p>
//           )}

//           <label htmlFor="description">Description</label>
//           <textarea
//             {...register("description")}
//             className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//           ></textarea>
//           {errors.description && (
//             <p className="text-red-500">{errors.description.message}</p>
//           )}

//           <label htmlFor="pricePerPerson">Price per Person</label>
//           <input
//             {...register("pricePerPerson")}
//             type="number"
//             placeholder="0"
//             className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//           />
//           {errors.pricePerPerson && (
//             <p className="text-red-500">{errors.pricePerPerson.message}</p>
//           )}
//         </div>

//         <div className="selectImage rounded-lg px-5 py-4 mt-5">
//           <h1 className="text-lg font-semibold">Itinerary</h1>
//           {itineraryFields.map((item, index) => (
//             <div key={item.id} className="mb-4 mt-4">
//               <label>Day</label>
//               <input
//                 {...register(`itinerary.${index}.day`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Day ${index + 1}`}
//               />
//               {errors.itinerary && errors.itinerary[index]?.day && (
//                 <p className="text-red-500">
//                   {errors?.itinerary[index]?.day?.message}
//                 </p>
//               )}

//               <label>Title</label>
//               <input
//                 {...register(`itinerary.${index}.title`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Title for Day ${index + 1}`}
//               />
//               {errors.itinerary && errors.itinerary[index]?.title && (
//                 <p className="text-red-500">
//                   {errors?.itinerary[index]?.title?.message}
//                 </p>
//               )}

//               <label>Description</label>
//               <textarea
//                 {...register(`itinerary.${index}.description`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Description For Day ${index + 1}`}
//               ></textarea>
//               {errors?.itinerary && errors.itinerary[index]?.description && (
//                 <p className="text-red-500">
//                   {errors?.itinerary[index]?.description?.message}
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={() => removeItinerary(index)}
//                 className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={() =>
//                 appendItinerary({
//                   day: `Day ${itineraryFields.length + 1}`,
//                   description: "",
//                   title: "",
//                 })
//               }
//               className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//             >
//               Add Day
//             </button>
//           </div>
//         </div>

//         <div className="selectImage rounded-lg px-5 py-4 mt-5">
//           <h1 className="text-lg font-semibold">Tour Includes</h1>
//           {tourIncludesFields.map((item, index) => (
//             <div key={item.id} className="flex gap-2 flex-col mt-2">
//               <Controller
//                 control={control}
//                 name={`tourIncludes.${index}.image`}
//                 render={({ field }) => (
//                   //@ts-ignore
//                   <input
//                     type="file"
//                     onChange={(e) =>
//                       upload(e, { name: `tourIncludes.${index}.image` })
//                     }
//                     className="w-full border-2 rounded-lg py-2 px-2"
//                   />
//                 )}
//               />

//               <input
//                 {...register(`tourIncludes.${index}.name`)}
//                 className="w-full border-2 rounded-lg py-2 px-2"
//                 placeholder="Name"
//               />
//               {errors?.tourIncludes && errors.tourIncludes[index]?.name && (
//                 <p className="text-red-500">
//                   {errors?.tourIncludes[index]?.name?.message}
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={() => removeTourIncludes(index)}
//                 className="bg-red-600 w-full min-[500px]:w-[13%] text-white rounded-lg py-1"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               type="button"
//               //@ts-ignore
//               onClick={() => appendTourIncludes({ image: null, name: "" })}
//               className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//             >
//               Add Includes
//             </button>
//           </div>
//         </div>

//         <div className="selectImage rounded-lg px-5 py-4 mt-5">
//           <h1 className="text-lg font-semibold">Highlights</h1>
//           {highlightFields.map((item, index) => (
//             <div key={item.id} className="mb-4 mt-4">
//               <label>Title</label>
//               <input
//                 {...register(`highlights.${index}.title`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Highlight ${index + 1}`}
//               />
//               {errors.highlights && errors.highlights[index]?.title && (
//                 <p className="text-red-500">
//                   {errors?.highlights[index]?.title?.message}
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={() => removeHighlight(index)}
//                 className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-2"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={() => appendHighlight({ title: "" })}
//               className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//             >
//               Add Highlight
//             </button>
//           </div>
//         </div>

//         <div className="selectImage rounded-lg px-5 py-4 mt-5">
//           <h1 className="text-lg font-semibold">Package Inclusions</h1>
//           {inclusionField.map((item, index) => (
//             <div key={item.id} className="mb-4 mt-4">
//               <label>Title</label>
//               <input
//                 {...register(`inclusion.${index}.title`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Inclusion ${index + 1}`}
//               />
//               {errors.inclusion && errors.inclusion[index]?.title && (
//                 <p className="text-red-500">
//                   {errors?.inclusion[index]?.title?.message}
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={() => removeIclusion(index)}
//                 className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-2"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={() => appendInclusionField({ title: "" })}
//               className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//             >
//               Add Inclusion
//             </button>
//           </div>
//         </div>

//         <div className="selectImage rounded-lg px-5 py-4 mt-5">
//           <h1 className="text-lg font-semibold">Package Exclusions</h1>
//           {exclusionField.map((item, index) => (
//             <div key={item.id} className="mb-4 mt-4">
//               <label>Title</label>
//               <input
//                 {...register(`exclusion.${index}.title`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Exclusion ${index + 1}`}
//               />
//               {errors?.exclusion && errors.exclusion[index]?.title && (
//                 <p className="text-red-500">
//                   {errors?.exclusion[index]?.title?.message}
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={() => removeExclusion(index)}
//                 className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1 mt-2"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={() => appendExclusionField({ title: "" })}
//               className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//             >
//               Add Inclusion
//             </button>
//           </div>
//         </div>

//         <div className="selectImage rounded-lg px-5 py-4 mt-5">
//           <h1 className="text-lg font-semibold">Faqs</h1>
//           {faqsFields.map((item, index) => (
//             <div key={item.id} className="mb-4 mt-4">
//               <label>Question</label>
//               <input
//                 {...register(`faq.${index}.question`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Question ${index + 1}`}
//               />
//               {errors?.faq && errors.faq[index]?.question && (
//                 <p className="text-red-500">
//                   {errors?.faq[index]?.question?.message}
//                 </p>
//               )}

//               <label>Answer</label>
//               <textarea
//                 {...register(`faq.${index}.answer`)}
//                 className="w-full border-2 rounded-lg py-2 px-2 mt-2"
//                 placeholder={`Answer ${index + 1}`}
//               ></textarea>
//               {errors?.faq && errors.faq[index]?.answer && (
//                 <p className="text-red-500">
//                   {errors?.faq[index]?.answer?.message}
//                 </p>
//               )}

//               <button
//                 type="button"
//                 onClick={() => removeFaqsFields(index)}
//                 className="bg-red-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <button
//               type="button"
//               onClick={() =>
//                 appendFaqsFields({
//                   answer: "",
//                   question: "",
//                 })
//               }
//               className="bg-blue-600 w-full min-[500px]:w-auto text-white rounded-lg px-3 py-1"
//             >
//               Add Faq
//             </button>
//           </div>
//         </div>

//         <div className="gap-2 flex justify-end pb-5 pr-2">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white w-20 py-1 rounded-lg mt-4 flex items-center justify-center"
//           >
//             {isPending ? <Spinner /> : "update"}
//           </button>
//           <button
//             type="button"
//             className="bg-red-700 text-white px-5 py-1 rounded-lg mt-4"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddnewPackage;

"use client";
import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useUpdatePackageMutation,
  useGetAllCategoriesQuery,
  useGetPackageByIdQuery,
} from "@/queries/generated";
import { toast } from "react-toastify";
import Spinner from "./spinner";
import uploadFile from "@/utils/uploadFile";
import { Router, useRouter } from "next/router";

const schema = yup.object().shape({
  packageName: yup.string().required("Package name is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Type is required"),
  image: yup.string().required("image is required"),
  pricePerPerson: yup
    .number()
    .required("Price per person is required")
    .positive("Price must be positive"),
  itinerary: yup.array().of(
    yup.object().shape({
      day: yup.string().required("Day is required"),
      description: yup.string().required("Description is required"),
      title: yup.string().required("Title is required"),
    })
  ),
  tourIncludes: yup.array().of(
    yup.object().shape({
      image: yup.string().required("Image is required"),
      name: yup.string().required("Name is required"),
    })
  ),
  highlights: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Title is required"),
    })
  ),
  inclusion: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Title is required"),
    })
  ),
  exclusion: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Title is required"),
    })
  ),
  faq: yup.array().of(
    yup.object().shape({
      answer: yup.string().required("Description is required"),
      question: yup.string().required("Title is required"),
    })
  ),
});

function UpdatePackage() {
  const router = useRouter();
  const { data: packageData } = useGetPackageByIdQuery({
    getPackageById: router?.query?.id?.toString() || "",
  });
  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      packageName: packageData?.getPackageById?.name,
      title: packageData?.getPackageById?.title,
      description: packageData?.getPackageById?.description || "",
      image: packageData?.getPackageById?.image || "",
      category: packageData?.getPackageById?.Category?.id.toString() || "",
      pricePerPerson: packageData?.getPackageById?.price,
      itinerary: packageData?.getPackageById?.Itinerary?.map((e) => {
        return {
          day: e?.name || "",
          title: e?.title || "",
          description: e?.description || "",
        };
      }) || [{ day: "Day 1", description: "", title: "" }],
      faq: packageData?.getPackageById?.Faqs?.map((e) => {
        return {
          answer: e?.description || "",
          question: e?.title || "",
        };
      }) || [{ answer: "", question: "" }],
      tourIncludes: packageData?.getPackageById?.Includes?.map((e) => {
        return {
          image: e?.image || "",
          name: e?.name || "",
        };
      }) || [{ image: null, name: "" }],
      highlights: packageData?.getPackageById?.Highlights?.map((e) => {
        return {
          title: e?.name,
        };
      }) || [{ title: "" }],
      inclusion: packageData?.getPackageById?.Inclusions?.map((e) => {
        return {
          title: e?.title,
        };
      }) || [{ title: "" }],
      exclusion: packageData?.getPackageById?.Exclusions?.map((e) => {
        return {
          title: e?.title,
        };
      }) || [{ title: "" }],
    },
  });

  const {
    fields: itineraryFields,
    append: appendItinerary,
    remove: removeItinerary,
  } = useFieldArray({ control, name: "itinerary" });
  const {
    fields: faqsFields,
    append: appendFaqsFields,
    remove: removeFaqsFields,
  } = useFieldArray({ control, name: "faq" });
  const {
    fields: tourIncludesFields,
    append: appendTourIncludes,
    remove: removeTourIncludes,
  } = useFieldArray({ control, name: "tourIncludes" });
  const {
    fields: highlightFields,
    append: appendHighlight,
    remove: removeHighlight,
  } = useFieldArray({ control, name: "highlights" });

  const {
    fields: inclusionField,
    append: appendInclusionField,
    remove: removeIclusion,
  } = useFieldArray({ control, name: "inclusion" });

  const {
    fields: exclusionField,
    append: appendExclusionField,
    remove: removeExclusion,
  } = useFieldArray({ control, name: "exclusion" });

  const { mutateAsync, isPending } = useUpdatePackageMutation();

  const { data, isPending: IsLoading } = useGetAllCategoriesQuery();

  const onSubmit = async (data: any) => {
    try {
      await mutateAsync({
        updatePackageId: router?.query?.id?.toString() || "", // Pass the package id here
        name: data.packageName,
        title: data.title,
        description: data.description,
        price: parseFloat(data.pricePerPerson),
        image: data.image,
        itinerary: data.itinerary.map((itinerary: any) => ({
          name: itinerary.day,
          description: itinerary.description,
          title: itinerary.title,
        })),
        includes: data.tourIncludes.map((tourInclude: any) => ({
          image: tourInclude.image,
          name: tourInclude.name,
        })),
        highlights: data.highlights.map((highlight: any) => ({
          name: highlight.title,
        })),
        inclusions: data.inclusion.map((inclusion: any) => ({
          title: inclusion.title,
        })),
        exclusions: data.exclusion.map((exclusion: any) => ({
          title: exclusion.title,
        })),
        faqs: data.faq.map((faq: any) => ({
          title: faq.answer,
          description: faq.question,
        })),
        categoryId: parseInt(data.category),
      });
      toast?.success("Package updated successfully");
    } catch (errors) {
      toast?.error("Invalid package");
    }
    console.log(data);
  };

  const upload = async (e: any, field: any) => {
    try {
      const file = e.target.files[0];
      const url = await uploadFile(file);
      setValue(field.name, url);
      toast?.success("Image uploaded successfully");
    } catch (errors) {
      toast?.error("Failed to upload image");
    }
  };

  return (
    <div className="w-3/4 mx-auto mt-5">
      <h1 className="text-2xl font-extrabold text-blue-700 text-center">
        Update Package
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="category">Type</label>
        <select
          {...register("category")}
          className="w-full border-2 rounded-lg py-2 px-2 mt-2"
        >
          <option value="">Select a type</option>
          {data?.getAllCategories?.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
        {/* Existing form fields... */}
        <div className="selectImage rounded-lg px-5 py-4 mt-4">
          <p className="mb-2">Main Package Image</p>
          <input
            type="file"
            onChange={(e) => upload(e, { name: "image" })}
            className="w-full border-2 rounded-lg py-2 px-2"
          />
        </div>
        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <label htmlFor="packageName">Package Name</label>
          <input
            {...register("packageName")}
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          />
          {errors.packageName && (
            <p className="text-red-500">{errors.packageName.message}</p>
          )}

          <label htmlFor="title">Title</label>
          <input
            {...register("title")}
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}

          <label htmlFor="description">Description</label>
          <textarea
            {...register("description")}
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}

          <label htmlFor="pricePerPerson">Price per Person</label>
          <input
            {...register("pricePerPerson")}
            type="number"
            placeholder="0.00"
            min="0"
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          />
          {errors.pricePerPerson && (
            <p className="text-red-500">{errors.pricePerPerson.message}</p>
          )}
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">Itinerary</h2>
          {itineraryFields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`itinerary[${index}].day`}>Day</label>
              <input
                {...register(`itinerary[${index}].day`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.itinerary?.[index]?.day && (
                <p className="text-red-500">
                  {errors.itinerary[index].day.message}
                </p>
              )}

              <label htmlFor={`itinerary[${index}].title`}>Title</label>
              <input
                {...register(`itinerary[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.itinerary?.[index]?.title && (
                <p className="text-red-500">
                  {errors.itinerary[index].title.message}
                </p>
              )}

              <label htmlFor={`itinerary[${index}].description`}>
                Description
              </label>
              <textarea
                {...register(`itinerary[${index}].description`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              ></textarea>
              {errors.itinerary?.[index]?.description && (
                <p className="text-red-500">
                  {errors.itinerary[index].description.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeItinerary(index)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendItinerary({ day: "", description: "", title: "" })
            }
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Add Itinerary
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">Tour Includes</h2>
          {tourIncludesFields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`tourIncludes[${index}].image`}>Image</label>
              <input
                type="file"
                onChange={(e) =>
                  upload(e, { name: `tourIncludes[${index}].image` })
                }
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.tourIncludes?.[index]?.image && (
                <p className="text-red-500">
                  {errors.tourIncludes[index].image.message}
                </p>
              )}

              <label htmlFor={`tourIncludes[${index}].name`}>Name</label>
              <input
                {...register(`tourIncludes[${index}].name`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.tourIncludes?.[index]?.name && (
                <p className="text-red-500">
                  {errors.tourIncludes[index].name.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeTourIncludes(index)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendTourIncludes({ image: null, name: "" })}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Add Tour Include
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">Highlights</h2>
          {highlightFields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`highlights[${index}].title`}>Title</label>
              <input
                {...register(`highlights[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.highlights?.[index]?.title && (
                <p className="text-red-500">
                  {errors.highlights[index].title.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeHighlight(index)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendHighlight({ title: "" })}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Add Highlight
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">Package Inclusions</h2>
          {inclusionField.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`inclusion[${index}].title`}>Title</label>
              <input
                {...register(`inclusion[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.inclusion?.[index]?.title && (
                <p className="text-red-500">
                  {errors.inclusion[index].title.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeIclusion(index)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendInclusionField({ title: "" })}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Add Inclusions
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">Package Exclusions</h2>
          {exclusionField.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`exclusion[${index}].title`}>Title</label>
              <input
                {...register(`exclusion[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.exclusion?.[index]?.title && (
                <p className="text-red-500">
                  {errors.exclusion[index].title.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeExclusion(index)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendExclusionField({ title: "" })}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Add Exclusions
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          {faqsFields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`faq[${index}].question`}>Question</label>
              <input
                {...register(`faq[${index}].question`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.faq?.[index]?.question && (
                <p className="text-red-500">
                  {errors.faq[index].question.message}
                </p>
              )}

              <label htmlFor={`faq[${index}].answer`}>Answer</label>
              <input
                {...register(`faq[${index}].answer`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors.faq?.[index]?.answer && (
                <p className="text-red-500">
                  {errors.faq[index].answer.message}
                </p>
              )}

              <button
                type="button"
                onClick={() => removeFaq(index)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendFaq({ question: "", answer: "" })}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Add FAQ
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-5 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdatePackage;