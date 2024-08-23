//@ts-ignore
"use client";
//@ts-nocheck

import React, { useEffect, useState } from "react";
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
  night: yup.string().required("night is required"),
  day: yup.string().required("day is required"),
  images: yup
    .array()
    .of(yup.string().required())
    .min(1, "At least one image is required"),
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

interface Props {
  onClose: () => void;
}

function UpdateNightStay({ onClose }: Props) {
  const router = useRouter();
  const { data: packageData, refetch } = useGetPackageByIdQuery(
    {
      getPackageByIdId: router?.query?.id?.toString() || "",
    },
    {
      enabled: !!router?.query?.id,
    }
  );
  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      packageName: packageData?.getPackageById?.name,
      title: packageData?.getPackageById?.title,
      night: packageData?.getPackageById?.night || "",
      day: packageData?.getPackageById?.day || "",
      description: packageData?.getPackageById?.description || "",
      images: Array.isArray(packageData?.getPackageById?.images)
        ? packageData.getPackageById.images.filter(
            (img): img is string => img !== null
          )
        : [],
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
      }) || [{ image: "", name: "" }],
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

  useEffect(() => {
    reset({
      packageName: packageData?.getPackageById?.name,
      title: packageData?.getPackageById?.title,
      day: packageData?.getPackageById?.day || "",
      night: packageData?.getPackageById?.night || "",
      description: packageData?.getPackageById?.description || "",
      images: Array.isArray(packageData?.getPackageById?.images)
        ? packageData.getPackageById.images.filter(
            (img): img is string => img !== null
          )
        : [],
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
      }) || [{ image: "", name: "" }],
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
    });

    console.log(watch("images"), "test", "images");
  }, [packageData]);

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
        day: data?.day,
        night: data?.night,
        description: data.description,
        price: parseFloat(data.pricePerPerson),
        images: data.images,
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
      refetch();
      onClose();
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

  const uploadmulti = async (
    e: React.ChangeEvent<HTMLInputElement>,
    field: any
  ) => {
    try {
      const files = Array.from(e.target.files ?? []);
      const ImageList = await Promise.all(
        files.map(async (file) => {
          const url = await uploadFile(file);
          return url;
        })
      );

      setValue(field.name, ImageList);
      if (files?.length) toast?.success("Image uploaded successfully");
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast?.error("Failed to upload image");
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = (watch("images") || []).filter((_, i) => i !== index);
    setValue("images", updatedImages);
  };

  return (
    <div className="w-3/4 mx-auto mt-5">
      <h1 className="text-2xl font-extrabold text-blue-700 text-center">
        Update Night Stay
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label htmlFor="category">Type</label> */}
        {/* <select
          {...register("category")}
          className="w-full border-2 rounded-lg py-2 px-2 mt-2"
        >
          {data?.getAllCategories?.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select> */}
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
        {/* Existing form fields... */}
        <div className="selectImage rounded-lg px-5 py-4 mt-4">
          <p className="mb-2"> Images</p>
          <div className="flex gap-2 my-2">
            {(watch("images") || []).map((img, index) => (
              <div key={index} className="relative">
                <img
                  src={img}
                  alt={`uploaded-${index}`}
                  className="w-20 aspect-square rounded-lg object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute w-6 top-1 aspect-square right-1 bg-red-500 text-white rounded-full "
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            onChange={(e) => uploadmulti(e, { name: "images" })}
            className="w-full border-2 rounded-lg py-2 px-2"
          />
        </div>
        <div className="selectImage rounded-lg px-5 py-4 mt-5">
          <label htmlFor="packageName"> Name</label>
          <input
            {...register("packageName")}
            className="w-full border-2 rounded-lg py-2 px-2 mt-2"
          />
          {errors.packageName && (
            <p className="text-red-500">{errors.packageName.message}</p>
          )}

          {/* <label htmlFor="title">Duration</label> */}
          <div className=" flex gap-4">
            {/* <select
              {...register("night")}
              className="w-full border-2 rounded-lg py-2 px-2 mt-2"
            >
              {[...Array(15)].map((e, night) => (
                <option
                  key={night}
                  value={night ? `${night} Night${night !== 1 ? "s" : ""}` : ""}
                >
                  {night} Night{night !== 1 ? "s" : ""}
                </option>
              ))}
            </select> */}
            {/* <select
              {...register("day")}
              className="w-full border-2 rounded-lg py-2 px-2 mt-2"
            >
              {[...Array(16)].map((e, day) => (
                <option
                  key={day}
                  value={day ? `${day} Day${day !== 1 ? "s" : ""}` : ""}
                >
                  {day} Day{day !== 1 ? "s" : ""}
                </option>
              ))}
            </select> */}
          </div>
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
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
            cols={50}
            rows={10}
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
          <h2 className="text-xl font-semibold mb-2">Rooms</h2>
          {itineraryFields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`itinerary[${index}].day`}>Image</label>
              {/*@ts-ignore */}
              {watch(`tourIncludes[${index}].image`) || null ? (
                <img
                  //@ts-ignore
                  src={watch(`tourIncludes[${index}].image`) || ""}
                  alt={`uploaded-${index}`}
                  className="w-12 aspect-square rounded-lg"
                />
              ) : null}
              <input
                type="file"
                onChange={(e) =>
                  upload(e, { name: `tourIncludes[${index}].image` })
                }
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.tourIncludes?.[index]?.image && (
                <p className="text-red-500">
                  {(errors as any)?.tourIncludes?.[index]?.image?.message ?? ""}
                </p>
              )}
              {/* <input
                //@ts-ignore
                {...register(`itinerary[${index}].day`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.itinerary?.[index]?.day && (
                <p className="text-red-500">
                  {(errors as any)?.itinerary?.[index]?.day.message}
                </p>
              )} */}

              <label htmlFor={`itinerary[${index}].title`}>Title</label>
              <input
                //@ts-ignore
                {...register(`itinerary[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.itinerary?.[index]?.title && (
                <p className="text-red-500">
                  {(errors as any)?.itinerary?.[index]?.title.message ?? ""}
                </p>
              )}

              <label htmlFor={`itinerary[${index}].description`}>
                Description
              </label>
              <textarea
                //@ts-ignore

                {...register(`itinerary[${index}].description`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
                cols={50}
                rows={10}
              ></textarea>
              {errors?.itinerary?.[index]?.description && (
                <p className="text-red-500">
                  {(errors as any)?.itinerary[index]?.description.message ?? ""}
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
            Add Room
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">Tour Includes</h2>
          {tourIncludesFields.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`tourIncludes[${index}].image`}>Image</label>
              {/*@ts-ignore */}
              {watch(`tourIncludes[${index}].image`) || null ? (
                <img
                  //@ts-ignore
                  src={watch(`tourIncludes[${index}].image`) || ""}
                  alt={`uploaded-${index}`}
                  className="w-12 aspect-square rounded-lg"
                />
              ) : null}
              <input
                type="file"
                onChange={(e) =>
                  upload(e, { name: `tourIncludes[${index}].image` })
                }
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.tourIncludes?.[index]?.image && (
                <p className="text-red-500">
                  {(errors as any)?.tourIncludes?.[index]?.image?.message ?? ""}
                </p>
              )}

              <label htmlFor={`tourIncludes[${index}].name`}>Name</label>
              <input
                //@ts-ignore
                {...register(`tourIncludes[${index}].name`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.tourIncludes?.[index]?.name && (
                <p className="text-red-500">
                  {errors?.tourIncludes?.[index]?.name?.message ?? ""}
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
            onClick={() => appendTourIncludes({ image: "", name: "" })}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
          >
            Add Tour Include
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2">Prices</h2>
          {highlightFields.map((field, index) => (
            <div key={field.id} className="mb-4">
              {/* <label htmlFor={`highlights[${index}].title`}>Title</label> */}
              <input
                //@ts-ignore
                {...register(`highlights[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.highlights?.[index]?.title && (
                <p className="text-red-500">
                  {(errors as any)?.highlights?.[index]?.title?.message ?? ""}
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
            Add Price
          </button>
        </div>

        <div className="bg-gray-100 rounded-lg px-5 py-4 mt-5">
          <h2 className="text-xl font-semibold mb-2"> Inclusions</h2>
          {inclusionField.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`inclusion[${index}].title`}>Title</label>
              <input
                //@ts-ignore
                {...register(`inclusion[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.inclusion?.[index]?.title && (
                <p className="text-red-500">
                  {(errors as any)?.inclusion?.[index]?.title?.message ?? ""}
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
          <h2 className="text-xl font-semibold mb-2"> Exclusions</h2>
          {exclusionField.map((field, index) => (
            <div key={field.id} className="mb-4">
              <label htmlFor={`exclusion[${index}].title`}>Title</label>
              <input
                //@ts-ignore
                {...register(`exclusion[${index}].title`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.exclusion?.[index]?.title && (
                <p className="text-red-500">
                  {(errors as any)?.exclusion?.[index]?.title?.message ?? ""}
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
                //@ts-ignore
                {...register(`faq[${index}].question`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.faq?.[index]?.question && (
                <p className="text-red-500">
                  {(errors as any)?.faq?.[index]?.question?.message ?? ""}
                </p>
              )}

              <label htmlFor={`faq[${index}].answer`}>Answer</label>
              <input
                //@ts-ignore
                {...register(`faq[${index}].answer`)}
                className="w-full border-2 rounded-lg py-2 px-2 mt-2"
              />
              {errors?.faq?.[index]?.answer && (
                <p className="text-red-500">
                  {(errors as any)?.faq?.[index]?.answer?.message ?? ""}
                </p>
              )}

              <button
                type="button"
                //@ts-ignore
                // onClick={() => removeFaq(index)}
                onClick={() => removeFaqsFields(index)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            //@ts-ignore
            // onClick={() => appendFaq({ question: "", answer: "" })}
            onClick={() => appendFaqsFields({ question: "", answer: "" })}
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

export default UpdateNightStay;